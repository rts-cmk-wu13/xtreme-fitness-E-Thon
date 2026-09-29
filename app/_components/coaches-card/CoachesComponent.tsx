import Title from "../title/Title"
import CoachesCard from "./CoachesCard"

export default async function CoachesComponent( { isHomePage, className }: {isHomePage: boolean, className: string}) {
    let coaches = [];
    try {
        const coachRes = await fetch('http://localhost:4000/employees', {
            next: { revalidate: 60 }
        });
        if (!coachRes.ok) {
            throw new Error(`Failed to fetch coaches: ${coachRes.status}`);
        }
        const coachData = await coachRes.json();
        coaches = coachData.data;
    } catch (error) {
        // API may be unavailable (e.g. during build); render section without coaches
        console.error("Could not fetch coaches:", error);
    }

    return (
        <section className={`section__coaches ${className}`}>
            <Title
                h2="Coaches"
                h3="Our team of experts"
            />
            <CoachesCard coaches={coaches} isHomePage={isHomePage} />
        </section>
    )
}
