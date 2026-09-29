import Title from "../title/Title"
import BlogCard from "./AbonnementCard"

export default async function AbonnementComponent() {
    let abonnements = [];
    try {
        const abonnementsRes = await fetch('http://localhost:4000/memberships', {
            next: { revalidate: 60 }
        });
        if (!abonnementsRes.ok) {
            throw new Error(`Failed to fetch memberships: ${abonnementsRes.status}`);
        }
        const abonnementsData = await abonnementsRes.json();
        abonnements = abonnementsData.data;
    } catch (error) {
        // API may be unavailable (e.g. during build); render section without memberships
        console.error("Could not fetch memberships:", error);
    }

    return (
        <section className="section__abonnements">
            <Title
                h2="Prices"
                h3="Our Abonnements"
            />
            <BlogCard abonnements={abonnements} />
        </section>
    )
}
