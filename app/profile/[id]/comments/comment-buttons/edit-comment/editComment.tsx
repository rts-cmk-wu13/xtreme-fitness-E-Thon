"use server"

import { revalidateTag } from "next/cache"
import { cookies } from "next/headers"
import z from "zod/v4"

const editCommentSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Valid email is required"),
    content: z.string().min(1, "Comment is required").max(500),
})

export async function editComment(commentId: number, prevState: any,
    formData: FormData) {
    const commentData = Object.fromEntries(formData);
    const validatedData = editCommentSchema.safeParse(commentData);

    if (!validatedData.success) {
        const errors = z.treeifyError(validatedData.error);
        return {
            ...errors.properties,
            values: {
                name: commentData.name,
                email: commentData.email,
                content: commentData.content,
            }
        };
    }

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
        return { message: "Login to see and edit your comments", success: false };
    }

    const res = await fetch(`http://localhost:4000/comments/${commentId}`, {
        method: "PUT",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(validatedData.data)
    });

    if (!res.ok) {
        return {
            message: "An error occured while trying to edit the comment. Please try again later.",
            success: false,
            values: {
                name: validatedData.data.name,
                email: validatedData.data.email,
            }
        }
    };

    revalidateTag("comments", "max");

    return {
        message: "Comment has been updated",
        success: true,
        closeDialog: true
    }

}