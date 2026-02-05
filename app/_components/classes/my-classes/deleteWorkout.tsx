"use server";

import { revalidateTag } from "next/cache";
import { FormState } from "../../../types/form";
import { cookies } from "next/headers";
import { z } from "zod/v4";

const deleteSchema = z.object({
  workoutId: z.coerce.number().min(1, "workout is required"),
});

export async function deleteWorkout(prevState: FormState, formData: FormData): Promise<FormState>{
    const enrollmentData = Object.fromEntries(formData)
    const validatedData = deleteSchema.safeParse(enrollmentData)

    if (!validatedData.success) {
        const errors = z.treeifyError(validatedData.error)
        return {
            errors: errors.properties,
            values: enrollmentData
        }
    }

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    const deleteRes = await fetch('http://localhost:4000/users/me/enroll', {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(validatedData.data)
    })

    if (!deleteRes.ok) {
        return {
            message: "Class cancelation failed",
            success: false
        }
    }

    const data = await deleteRes.json();

    revalidateTag("workouts", "max")

    return {
        message: data.message,
        success: true
    }

}

