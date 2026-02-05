import { EmblaOptionsType } from 'embla-carousel'
import TestimonialCarousel from './TestimonialCarousel';
import Title from '../title/Title';

export default async function TestimonialComponent() {
    // Events
    const testimonialRes = await fetch('http://localhost:4000/reviews', {
        next: { revalidate: 60 }
    });
    const testimonialData = await testimonialRes.json();
    const testimonials = testimonialData.data;
    const OPTIONS: EmblaOptionsType = {align: 'start', containScroll: false}

    return (
        <section className="section__testimonials">
            <Title
                h2="Testimonials"
                h3="What our clients say about us"
            />
            <TestimonialCarousel testimonials={testimonials} options={OPTIONS} />
        </section>
    )
}