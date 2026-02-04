"use client";

import "../_CommentButtons.scss";
import { useActionState, useRef } from "react";
import { deleteComment } from "./deleteComment";
import { FaPlay } from "react-icons/fa";

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
        dialogElement.current?.showModal();
    }
    const handleClose = () => dialogElement.current?.close();


    return (
        <>
            <form className="delete">
                <button type="button" onClick={handleDialog} className="transparent button list">
                    Delete
                    <div className="orange">
                        <FaPlay />
                    </div>
                </button>
            </form>

            <dialog ref={dialogElement}>
                <h2>Do you want to delete your comment?</h2>
                <form action={formAction}>
                    <button type="submit" disabled={isPending} className="orange button delete">
                        {isPending ? "Deleting..." : "Yes"}
                    </button>
                    <button type="button" onClick={handleClose} className="transparent button delete">
                        No
                    </button>
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