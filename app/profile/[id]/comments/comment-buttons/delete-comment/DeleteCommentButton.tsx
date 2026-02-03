"use client";

import "../_CommentButtons.scss";
import { useActionState, useRef } from "react";
import { deleteComment } from "./deleteComment";

interface DeleteCommentButtonProps {
    commentId: number;
}

export default function DeleteCommentButton({ commentId }: DeleteCommentButtonProps) {
    const [state, formAction, isPending] = useActionState(
        deleteComment.bind(null, commentId),
        null
    );
    const dialogElement = useRef<HTMLDialogElement>(null)

    function handleDialog() {
        console.log("show dialog: ", dialogElement.current)
        dialogElement.current?.showModal();
    }
    const handleClose = () => dialogElement.current?.close();


    return (
        <>
            <form className="delete">
                <button type="button" onClick={handleDialog}>Delete</button>
            </form>

            <dialog ref={dialogElement}>Do you want to delete your comment?
                <form action={formAction}>
                    <button type="submit" disabled={isPending}>
                        {isPending ? "Deleting..." : "Yes"}
                    </button>
                    <button type="button" onClick={handleClose}>No</button>
                </form>
                {state?.message && (
                    <p className={state.success ? "success" : "error"}>
                        {state.message}
                    </p>
                )}
            </dialog>
        </>
    );
}