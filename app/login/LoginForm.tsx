"use client"

import "../style/_Forms.scss"
import { useActionState } from "react";
import { getToken } from "./getToken";
import { FaPlay } from "react-icons/fa";

export default function LoginForm() {
    const [state, formAction, pending] = useActionState(getToken, null)
    
    return (
        <form action={formAction} noValidate>
            <input type="email" name="email" placeholder="Email" defaultValue={state?.values?.email as string || ""} required />
            {state && 'email' in state && state.errors?.email ?
                <p>{state.errors.email.errors}</p> : ""
            }
            <input type="password" name="password" placeholder="Password" defaultValue={state?.values?.password as string || ""} required />
            {state && 'password' in state && state.errors?.password ?
                <p>{state.errors.password.errors}</p> : ""
            }
            <button type="submit" disabled={pending} className="transparent button">
                Login
                <div className="orange">
                    <FaPlay />
                </div>
            </button>
            {state && 'message' in state ?
                <p>{state.message}</p> : ""
            }
        </form>
    )
}