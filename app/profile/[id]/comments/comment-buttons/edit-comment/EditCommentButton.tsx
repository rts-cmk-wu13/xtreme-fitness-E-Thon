"use client";

import "../_CommentButtons.scss";
import "../../../../../style/_Forms.scss";
import { useActionState, useRef } from "react";
import { editComment } from "./editComment";

interface EditCommentButtonProps {
    commentId: number;
}

export default function EditCommentButton({ commentId }: EditCommentButtonProps) {
    const [state, formAction, isPending] = useActionState(
        editComment.bind(null, commentId),
        null
    );

    // DIALOG BOX:
    const dialogElement = useRef<HTMLDialogElement>(null)
    function handleDialog() {
        dialogElement.current?.showModal();
    }
    const handleClose = () => dialogElement.current?.close();
    if (state?.success && state?.closeDialog) {
        handleClose();
    }

    return (
        <>
            <form className="edit">
                <button type="button" onClick={handleDialog}>Edit</button>
                {state?.message && (
                    <p className={state.success ? "success" : "error"}>
                        {state.message}
                    </p>
                )}
            </form>

            <dialog ref={dialogElement}>
                <p> Edit your comment
                </p>
                <form action={formAction}>
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <textarea name="content" placeholder="Your Comment" rows={10} required />
                    <button type="submit" disabled={isPending}>
                        {isPending ? "Submitting..." : "Submit"}
                    </button>

                    <button type="button" onClick={handleClose}>Close</button>
                    {state && "message" in state && state.message && (
                        <p>{state.message}</p>
                    )}
                    {state && "name" in state && state.name && (
                        <p>{state.name.errors}</p>
                    )}
                    {state && "email" in state && state.email && (
                        <p>{state.email.errors}</p>
                    )}
                    {state && "content" in state && state.content && (
                        <p>{state.content.errors}</p>
                    )}
                </form>
            </dialog>
        </>

    );
}

