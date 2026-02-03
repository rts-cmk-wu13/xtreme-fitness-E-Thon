"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import z from "zod/v4";

const commentSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Valid email is required"),
    content: z.string().min(1, "Comment is required").max(500),
})

export async function submitComment(postId: string, prevState: any, formData: FormData) {
    const commentData = Object.fromEntries(formData);
    const validatedData = commentSchema.safeParse(commentData);
    console.log("Comment data received:", commentData);

    if (!validatedData.success) {
        console.log("Validation errors:", validatedData.error);
        const errors = z.treeifyError(validatedData.error);
        return {
            ...errors.properties,
            values: {
                name: commentData.name,
                email: commentData.email,
            }
        };
    }

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
        console.log("No token found - user not logged in");
        return { message: "You must be logged in to comment" };
    }

    console.log("Sending comment to:", `http://localhost:4000/posts/${postId}/comments`);
    console.log("Token exists:", !!token);

    const response = await fetch(`http://localhost:4000/posts/${postId}/comments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(validatedData.data)
    });

    console.log("Response status:", response.status);


    if (!response.ok) {
        const errorText = await response.text();
        console.log("Error response:", response.status, errorText);
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