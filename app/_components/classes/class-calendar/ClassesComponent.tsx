import Title from "../../title/Title";
import "./_Classes.scss";
import Classes from "./Classes";

export default async function ClassesComponent() {
    const workoutsRes = await fetch('http://localhost:4000/workouts', {
        next: { revalidate: 60 }
    });
    if (!workoutsRes.ok) {
        throw new Error(`Failed to fetch posts: ${workoutsRes.status}`);
    }
    const workoutsData = await workoutsRes.json();
    const workouts = workoutsData.data;

    return (
        <section className="schedule">
            <Title
                h2="Calendar"
                h3="Class Sign-up"
            />
            <Classes workouts={workouts} />
        </section>
    )
}