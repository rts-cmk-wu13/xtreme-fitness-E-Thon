"use client";

import "../_CommentButtons.scss";
import "../../../../../style/_Forms.scss";
import { useActionState, useRef } from "react";
import { editComment } from "./editComment";
import { FaPlay } from "react-icons/fa";

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
                <button type="button" onClick={handleDialog} className="transparent button list">
                    Edit
                    <div className="orange">
                        <FaPlay />
                    </div>
                </button>
                {state?.message && (
                    <p className={state.success ? "success" : "error"}>
                        {state.message}
                    </p>
                )}
            </form>

            <dialog ref={dialogElement}>
                <h2>Edit your comment</h2>
                <form action={formAction}>
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <textarea name="content" placeholder="Your Comment" rows={10} required />
                    <button type="submit" disabled={isPending}>
                        {isPending ? "Submitting..." : "Submit"}
                    </button>
                    <button type="submit" disabled={isPending} className="orange button">
                        {isPending ? "Submitting..." : "Submit"}
                        <div className="white">
                            <FaPlay />
                        </div>
                    </button>

                    <button type="button" onClick={handleClose} className="orange button">
                        Close
                        <div className="white">
                            <FaPlay />
                        </div>
                    </button>

                    {state && "message" in state && state.message && (
                        <p>{state.message}</p>
                    )}
                    {state && "name" in state && state.errors?.name && (
                        <p>{state.errors.name.errors}</p>
                    )}
                    {state && "email" in state && state.errors?.email && (
                        <p>{state.errors.email.errors}</p>
                    )}
                    {state && "content" in state && state.errors?.content && (
                        <p>{state.errors.content.errors}</p>
                    )}
                </form>
            </dialog>
        </>

    );
}