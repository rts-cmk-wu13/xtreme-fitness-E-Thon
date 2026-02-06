"use server"

import z from "zod/v4"
import type { FormState } from "../..//types/form";

const newsletterSchema = z.object({
    email: z.string().email("Valid email is required"),
})

export async function subscribeNewsletter(prevState: FormState, formData: FormData): Promise<FormState> {
    const newsletterData = Object.fromEntries(formData);
    const validatedData = newsletterSchema.safeParse(newsletterData);

    if (!validatedData.success) {
        const errors = z.treeifyError(validatedData.error);
        return {
            errors: errors.properties,
            values: newsletterData
        };
    }

    // GET to check if email already subscribed
    const subscribersRes = await fetch("http://localhost:4000/subscribers", {
        method: "GET"
    });

    if (subscribersRes.ok) {
        const subscribersData = await subscribersRes.json();
        const existingSubscriber = subscribersData.data.find(
            ({ email }: { email: string }) => email === validatedData.data.email
        );

        if (existingSubscriber) {
            return { message: "This email is already subscribed to our newsletter" };
        }
    }
    
    // POST to subscribe
    const subscriberRes = await fetch("http://localhost:4000/subscribers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validatedData.data)
    });

    if (!subscriberRes.ok) {
        return { message: "Failed to subscribe. Please try again later." };
    }

    return { message: "Thank you for subscribing!"};
}