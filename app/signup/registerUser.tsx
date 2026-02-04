"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod/v4";
import type { FormState } from "../types/form";

const signupSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Valid email is required"),
    membershipId: z.string().min(1, "Please select your membership to sign up for"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Password must be at least 6 characters")
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
})

export async function registerUser(prevState: FormState, formData: FormData): Promise<FormState> {
    const signupData = Object.fromEntries(formData)
    const validatedData = signupSchema.safeParse(signupData)

    if (!validatedData.success) {
        const errors = z.treeifyError(validatedData.error)
        return {
            errors: errors.properties,
            values: signupData
        }
    }

    const registerRes = await fetch(`http://localhost:4000/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(validatedData.data)
    })

    if (!registerRes.ok) {
        return {
            message: "Signup failed",
            values: validatedData
        }

    }

    const data = await registerRes.json()
    const cookieStore = await cookies();
    cookieStore.set("token", data.accessToken);
    cookieStore.set("user-id", data.id);

    redirect("/login")
}