import { cookies } from "next/headers";
import Title from "../../title/Title";
import "./_MyClasses.scss";
import MyClasses from "./MyClasses";

interface Workouts {
    id: number
    title: string
    weekday: string
    time: string
    createdAt: string
    updatedAt: string
}

export default async function MyClassesComponent() {
    const cookieStore = await cookies()
    const token = cookieStore.get("token")?.value

    let enrolledWorkouts: Workouts[] = []

    const workoutsRes = await fetch('http://localhost:4000/users/me', {
        headers: {
            "Authorization": `Bearer ${token}`
        },
        next: { tags: ["workouts"] },
    });


    if (!workoutsRes.ok) {
        throw new Error(`Failed to fetch workouts: ${workoutsRes.status}`);
    }

    const workoutsData = await workoutsRes.json();
    enrolledWorkouts = workoutsData.data.enrolledWorkouts || [];

    return (
        <section className="overview">
            <Title
                h2="Overview"
                h3="My Classes"
            />
            <MyClasses workouts={enrolledWorkouts} />
        </section>
    )
}