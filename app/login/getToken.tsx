"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod/v4";
import type { FormState } from "../types/form";

const loginSchema = z.object({
    email: z.string().email("Valid email is required"),
    password: z.string().min(6, "Password must be at least 6 characters")
})

export async function getToken(prevState: FormState, formData: FormData): Promise<FormState> {
    const loginData = Object.fromEntries(formData)
    const validatedData = loginSchema.safeParse(loginData)

    if (!validatedData.success) {
        const errors = z.treeifyError(validatedData.error)
        return {
            errors: errors.properties,
            values: loginData
        }
    }

    const loginRes = await fetch('http://localhost:4000/auth/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(validatedData.data)
    })
    if (!loginRes.ok) {
        return { 
            message: "incorrect email or password", 
            success: false,
            values: loginData
        }
    }

    const data = await loginRes.json()
    const cookieStore = await cookies();
    cookieStore.set("token", data.accessToken);
    cookieStore.set("user-id", data.id);

    // virker, men nulstiller formular ved fejlindtastningl, brug prevState

    redirect(`/profile/${data.id}`)
}