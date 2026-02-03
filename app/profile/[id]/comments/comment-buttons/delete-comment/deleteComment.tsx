"use server"

import { revalidateTag } from "next/cache"
import { cookies } from "next/headers"

export async function deleteComment(commentId: number) {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
        return { message: "Login to see and delete your comments", success: false };
    }

    const res = await fetch(`http://localhost:4000/comments/${commentId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    if (!res.ok) {
        return {
            message: "An error occured while trying to delete the comment. Please try again later.",
            success: false
        }
    };

    const data = await res.json();

    revalidateTag("comments", "max");

    return {
        message: data.message,
        success: true
    }
    
}