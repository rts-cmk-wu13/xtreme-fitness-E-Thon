"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import z from "zod/v4";
import type { FormState } from "../../../../types/form";

const commentSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Valid email is required"),
    content: z.string().min(1, "Comment is required").max(500),
})

export async function submitComment(postId: string, prevState: FormState, formData: FormData): Promise<FormState> {
    const commentData = Object.fromEntries(formData);
    const validatedData = commentSchema.safeParse(commentData);

    if (!validatedData.success) {
        const errors = z.treeifyError(validatedData.error);
        return {
            errors: errors.properties,
            values: commentData
        }
    }

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
        return { message: "You must be logged in to comment" };
    }

    const commentsRes = await fetch(`http://localhost:4000/posts/${postId}/comments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(validatedData.data)
    });

    if (!commentsRes.ok) {
        return {
            message: "Comment failed to send",
            success: false
        };
    }

    revalidateTag(`comments-${postId}`, "max");
    revalidatePath("/blog/[id]", "page");
    revalidatePath("/profile", "page");

    return { message: "Comment sent successfully!" };
}