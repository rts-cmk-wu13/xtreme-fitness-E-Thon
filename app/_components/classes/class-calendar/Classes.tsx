"use client"

import { useActionState } from "react";
import { MdPersonAddAlt1 } from "react-icons/md";
import { enrollWorkout } from "./enrollWorkout";

interface Workouts {
    id: number
    title: string
    weekday: string
    time: string
    createdAt: string
    updatedAt: string
}

export default function Classes({ workouts }: { workouts: Workouts[] }) {
    const [state, formAction, pending] = useActionState(enrollWorkout, null);

    return (
        <>
            <table className="workouts__table">
                <thead className="workouts__thead">
                    <tr>
                        <th>Class</th>
                        <th>Weekday</th>
                        <th>Time</th>
                        <th>Sign-up</th>
                    </tr>
                </thead>
                <tbody className="workouts__tbody">
                    {workouts.map((workout) => (
                        <tr key={workout.id}>
                            <td>{workout.title}</td>
                            <td>{workout.weekday}</td>
                            <td>{workout.time}</td>
                            <td>
                                <form action={formAction} className="workouts__form">
                                    <button type="submit" name="workoutId" value={workout.id} className="workouts__enroll" disabled={pending}><MdPersonAddAlt1 /></button>
                                </form>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {state && state.message && (
                <p className={state.success ? "success" : "error" }> 
                    {state.message}
                </p>
            )}
        </>
    )
}