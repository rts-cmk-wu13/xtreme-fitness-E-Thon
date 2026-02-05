import DeleteWorkoutButton from "./DeleteWorkoutButton"

interface Workouts {
    id: number
    title: string
    weekday: string
    time: string
    createdAt: string
    updatedAt: string
}

export default function MyClasses({ workouts }: { workouts: Workouts[] }) {
    return (
        <table className="classes__table">
            <thead className="classes__thead">
                <tr>
                    <th>Class</th>
                    <th>Day</th>
                    <th>Time</th>
                    <th>Cancel</th>
                </tr>
            </thead>
            <tbody className="classes__tbody">
                {workouts.map((workout) => (
                    <tr key={workout.id}>
                        <td>{workout.title}</td>
                        <td>{workout.weekday}</td>
                        <td>{workout.time}</td>
                        <td className="classes__delete">
                            <DeleteWorkoutButton workoutId={workout.id} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    )
}