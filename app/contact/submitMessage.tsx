"use server";

import z from "zod/v4";
import { FormState } from "../types/form";

const messageSchema = z.object({
    id: z.number().optional(),
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email format"),
    phone: z.string().min(1, "Phone is required"),
    subject: z.string().min(1, "Subject is required"),
    message: z.string().min(1, "Message is required"),
})

export async function submitMessage(prevState: FormState, formData: FormData): Promise<FormState> {
    const messageData = Object.fromEntries(formData);
    const validatedData = messageSchema.safeParse(messageData);

    if (!validatedData.success) {
        const errors = z.treeifyError(validatedData.error);
        return {
            errors: errors.properties,
            values: messageData
        };
    }

    const messageRes = await fetch("http://localhost:4000/messages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(validatedData)
    });

    if (!messageRes.ok) {
        return {
            message: "Message failed to send",
            values: validatedData
        };
    }

    return { message: "Message sent successfully!" };
}