"use client"

import "../../style/_Forms.scss";
import "./_ContactForm.scss";
import { submitMessage } from "../submitMessage";
import { useActionState } from "react";
import { FaPlay } from "react-icons/fa";

export default function ContactForm({className}: {className: String}) {
    const [state, formAction, pending] = useActionState(submitMessage, null)

    return (
        <form action={formAction} noValidate className={`contactform ${className}`}>
            <input type="text" name="name" placeholder="Name" defaultValue={state?.values?.name as string || ""} required />
            {state && "name" in state && state.errors?.name && (
                <p>{state.errors.name.errors}</p>
            )}
            <input type="tel" name="phone" placeholder="Phone" defaultValue={state?.values?.phone as string || ""} required />
            {state && "phone" in state && state.errors?.phone && (
                <p>{state.errors.phone.errors}</p>
            )}
            <input type="email" name="email" placeholder="Email" defaultValue={state?.values?.email as string || ""} required />
            {state && "email" in state && state.errors?.email && (
                <p>{state.errors.email.errors}</p>
            )}
            <input type="text" name="subject" placeholder="Subject" defaultValue={state?.values?.subject as string || ""} required />
            {state && "subject" in state && state.errors?.subject && (
                <p>{state.errors.subject.errors}</p>
            )}
            <textarea name="message" placeholder="Message" rows={10} required />
            {state && "message" in state && state.errors?.message && (
                <p>{state.errors.message.errors}</p>
            )}
            <button type="submit" disabled={pending} className="transparent button">
                Send
                <div className="orange">
                    <FaPlay />
                </div>
            </button>
            {state && "message" in state && state.message && (
                <p>{state.message}</p>
            )}
        </form>
    )
}
