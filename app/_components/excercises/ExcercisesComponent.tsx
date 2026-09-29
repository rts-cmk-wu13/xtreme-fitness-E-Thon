import { EmblaOptionsType } from 'embla-carousel'
import Title from '../title/Title';
import ExcerciseCarousel from './excercises-carousel/ExcercisesCarousel';

export default async function ExcercisesComponent() {
    let excercises = [];
    try {
        const excerciseRes = await fetch('http://localhost:4000/exercises', {
            next: { revalidate: 60 }
        });
        if (!excerciseRes.ok) {
            throw new Error(`Failed to fetch exercises: ${excerciseRes.status}`);
        }
        const excerciseData = await excerciseRes.json();
        excercises = excerciseData.data;
    } catch (error) {
        // API may be unavailable (e.g. during build); render section without exercises
        console.error("Could not fetch exercises:", error);
    }
    const OPTIONS: EmblaOptionsType = {align: 'start', containScroll: false }

    return (
        <section className="section__excercises">
            <Title
                h2="What we offer"
                h3="We are offering exclusive excercises"
            />
            <ExcerciseCarousel excercises={excercises} options={OPTIONS} />
        </section>
    )
}