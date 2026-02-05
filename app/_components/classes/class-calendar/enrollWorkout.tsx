"use server";

import { FormState } from "../../../types/form";
import { cookies } from "next/headers";
import { z } from "zod/v4";

const enrollmentSchema = z.object({
  workoutId: z.coerce.number().min(1, "workout is required"),
});

export async function enrollWorkout(prevState: FormState, formData: FormData): Promise<FormState>{
    const enrollmentData = Object.fromEntries(formData)
    const validatedData = enrollmentSchema.safeParse(enrollmentData)

    if (!validatedData.success) {
        const errors = z.treeifyError(validatedData.error)
        return {
            errors: errors.properties,
            values: enrollmentData
        }
    }

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    const enrollRes = await fetch('http://localhost:4000/users/me/enroll', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(validatedData.data)
    })

    if (!enrollRes.ok) {
        return {
            message: "Class sign-up failed",
            values: enrollmentData
        }

    }

    return {
        message: "You are now joining the class!",
        success: true
    }

}