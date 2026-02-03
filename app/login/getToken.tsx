"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod/v4";

const loginSchema = z.object({
    email: z.string().email("Valid email is required"),
    password: z.string().min(6, "Password must be at least 6 characters")
})

export async function getToken(prevState: any, formData: FormData) {
    const loginData = Object.fromEntries(formData)

    const validatedData = loginSchema.safeParse(loginData)
    if (!validatedData.success) {
        const errors = z.treeifyError(validatedData.error)
        return {
            ...errors.properties,
            values: {
                email: loginData.email,
                password: loginData.password
            }
        }
    }

    const response = await fetch("http://localhost:4000/auth/login", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(validatedData.data)
    })
    if (!response.ok) {
        return (
            { message: "incorrect email or password", 
                values: { 
                    email: loginData.email, 
                    password: loginData.password 
                } }
        )
    }

    const data = await response.json()
    const cookieStore = await cookies();
    cookieStore.set("token", data.accessToken);
    cookieStore.set("user-id", data.id);
    console.log("data:", data);

    // virker, men nulstiller formular ved fejlindtastning

    redirect(`/profile/${data.userId}`)
}