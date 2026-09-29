import { EmblaOptionsType } from 'embla-carousel'
import TestimonialCarousel from './TestimonialCarousel';
import Title from '../title/Title';

export default async function TestimonialComponent() {
    let testimonials = [];
    try {
        const testimonialRes = await fetch('http://localhost:4000/reviews', {
            next: { revalidate: 60 }
        });
        if (!testimonialRes.ok) {
            throw new Error(`Failed to fetch reviews: ${testimonialRes.status}`);
        }
        const testimonialData = await testimonialRes.json();
        testimonials = testimonialData.data;
    } catch (error) {
        // API may be unavailable (e.g. during build); render section without testimonials
        console.error("Could not fetch reviews:", error);
    }
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