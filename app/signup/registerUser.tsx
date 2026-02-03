"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod/v4";

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

export async function registerUser(prevState: any, formData: FormData) {
    const signupData = Object.fromEntries(formData)

    const validatedData = signupSchema.safeParse(signupData)
    if (!validatedData.success) {
        const errors = z.treeifyError(validatedData.error)
        return {
            ...errors.properties,
            values: {
                name: signupData.name,
                email: signupData.email,
                membershipId: signupData.membershipId,
            }
        }
    }

    const response = await fetch("http://localhost:4000/auth/register", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({
            name: validatedData.data.name,
            email: validatedData.data.email,
            membershipId: parseInt(validatedData.data.membershipId),
            password: validatedData.data.password
        })
    })

    if (!response.ok) {
        const errorData = await response.text()
        console.error("API Error:", response.status, errorData)
        return (
            {
                message: "Signup failed",
                values: {
                    name: validatedData.data.name,
                    email: validatedData.data.email,
                    membershipId: validatedData.data.membershipId,
                }
            }
        )
    }

    const data = await response.json()
    const cookieStore = await cookies();
    cookieStore.set("token", data.accessToken);
    cookieStore.set("user-id", data.id);

    redirect("/login")
}