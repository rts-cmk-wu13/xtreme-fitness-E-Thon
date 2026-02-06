import { EmblaOptionsType } from 'embla-carousel'
import Title from '../title/Title';
import ExcerciseCarousel from './excercises-carousel/ExcercisesCarousel';

export default async function ExcercisesComponent() {
    const excerciseRes = await fetch('http://localhost:4000/exercises', {
        next: { revalidate: 60 }
    });
    const excerciseData = await excerciseRes.json();
    const excercises = excerciseData.data;
    const OPTIONS: EmblaOptionsType = {align: 'start', containScroll: false, }

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