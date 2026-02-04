import Title from "../title/Title"
import BlogCard from "./AbonnementCard"

export default async function AbonnementComponent() {
    const abonnementsRes = await fetch('http://localhost:4000/memberships', {
        next: { revalidate: 60 }
    });
    if (!abonnementsRes.ok) {
        throw new Error(`Failed to fetch posts: ${abonnementsRes.status}`);
    }
    const abonnementsData = await abonnementsRes.json();
    const abonnements = abonnementsData.data;
    console.log("memberships: ",abonnements[0]);

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
