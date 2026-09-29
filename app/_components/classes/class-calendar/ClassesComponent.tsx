import Title from "../../title/Title";
import "./_Classes.scss";
import Classes from "./Classes";

export default async function ClassesComponent() {
    let workouts = [];
    try {
        const workoutsRes = await fetch('http://localhost:4000/workouts', {
            next: { revalidate: 60 }
        });
        if (!workoutsRes.ok) {
            throw new Error(`Failed to fetch workouts: ${workoutsRes.status}`);
        }
        const workoutsData = await workoutsRes.json();
        workouts = workoutsData.data;
    } catch (error) {
        // API may be unavailable (e.g. during build); render section without workouts
        console.error("Could not fetch workouts:", error);
    }

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