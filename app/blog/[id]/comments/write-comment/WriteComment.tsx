"use client"

import { useActionState } from "react";
import { submitComment } from "./submitComment";
import MembersOnlyLogin from "../../../../_components/members-only/MembersOnlyLogin";
import { FaPlay } from "react-icons/fa";
import "../../../../style/_Forms.scss";
import "./_WriteComment.scss";

interface WriteCommentsProps {
    postId: string;
    isLoggedIn: boolean
}

export default function WriteComment({ postId, isLoggedIn }: WriteCommentsProps) {
    const [state, formAction, pending] = useActionState(submitComment.bind(null, postId), null);


    if (!isLoggedIn) {
        return (
            <section className="usercomment">
                <MembersOnlyLogin
                    text="You need to be a registered member to comment our blog."
                />
            </section>
        )
    }
    return (
        <section className="usercomment">
            <h3>leave a comment</h3>
            <form action={formAction} noValidate className="usercomments__form">
                <input type="text" name="name" placeholder="Your Name" required />
                {state && "name" in state && state.name && (
                    <p>{state.name.errors}</p>
                )}
                <input type="email" name="email" placeholder="Email" required />
                {state && "email" in state && state.email && (
                    <p>{state.email.errors}</p>
                )}
                <textarea name="content" placeholder="Your Comment" rows={10} required />
                {state && "content" in state && state.content && (
                    <p>{state.content.errors}</p>
                )}
                <button type="submit" disabled={pending} className="transparent button">
                    Submit
                    <div className="orange">
                        <FaPlay />
                    </div>
                </button>
                {state && 'message' in state ?
                    <p>{state.message}</p> : ""
                }
            </form>
        </section>
    )
}