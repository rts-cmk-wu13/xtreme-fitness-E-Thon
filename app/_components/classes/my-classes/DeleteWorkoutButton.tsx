"use client";

import { useActionState, useRef } from "react";
import { deleteWorkout } from "./deleteWorkout";
import { FaTrash } from "react-icons/fa6";

interface DeleteWorkoutButtonProps {
    workoutId: number;
}

export default function DeleteWorkoutButton({ workoutId }: DeleteWorkoutButtonProps) {
    const [state, formAction, isPending] = useActionState(deleteWorkout, null)
    const dialogElement = useRef<HTMLDialogElement>(null)

    function handleDialog() {
        dialogElement.current?.showModal();
    }
    const handleClose = () => dialogElement.current?.close();


    return (
        <>
            <form className="delete">
                <button type="button" onClick={handleDialog}>
                    <FaTrash />
                </button>
            </form>

            <dialog ref={dialogElement}>
                <h2>Do you want to cancel your workout?</h2>
                <form action={formAction}>
                    <button type="submit" disabled={isPending} className="orange button delete">
                        {isPending ? "Canceling..." : "Yes"}
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