"use client"

import "../style/_Forms.scss"
import { useActionState } from "react";
import { registerUser } from "./registerUser";
import { FaPlay } from "react-icons/fa";

export default function SignupForm() {
    const [state, formAction, pending] = useActionState(registerUser, null)

    return (
        <form action={formAction} noValidate>
            <input type="text" name="name" placeholder="Your Name" defaultValue={state?.values?.name as string || ""} required />
            {state && 'name' in state && state.name ?
                <p>{state.name.errors}</p> : ""
            }
            <input type="email" name="email" placeholder="Email" defaultValue={state?.values?.email as string || ""} required />
            {state && 'email' in state && state.email ?
                <p>{state.email.errors}</p> : ""
            }
            <select name="membershipId" required>
                <option value="" disabled>Choose membership</option>
                <option value="1">Basic gym</option>
                <option value="2">Standard gym</option>
                <option value="3">Premium gym</option>
            </select>
            {state && 'membershipId' in state && state.membershipId ?
                <p>{state.membershipId.errors}</p> : ""
            }
            <input type="password" name="password" placeholder="Your Password" required />
            {state && 'password' in state && state.password ?
                <p>{state.password.errors}</p> : ""
            }
            <input type="password" name="confirmPassword" placeholder="Repeat Your Password" required />
            {state && 'confirmPassword' in state && state.confirmPassword ?
                <p>{state.confirmPassword.errors}</p> : ""
            }
            <button type="submit" disabled={pending} className="transparent button">
                Register user
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