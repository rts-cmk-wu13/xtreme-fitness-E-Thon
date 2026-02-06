import "./_TestimonialCard.scss";
import type { Testimonial } from "../../../types/testimonials"
import Image from "next/image";

type TestimonialCardProps = { testimonials: Testimonial[] }

export default function TestimonialCard({ testimonials }: TestimonialCardProps) {
    return (
        <>
            {
                testimonials.map((testimonial: Testimonial) => (
                    <div className="testimonial__card" key={testimonial.id}>
                        <Image
                            className="testimonial__image"
                            src="/icons/testimonials_apostrophy.png"
                            alt="Testimonials apostrophy"
                            width={38}
                            height={28}
                            priority
                        />
                        <div className="testimonial__text">
                            <p className="testimonial__quote">
                                {testimonial.content}
                            </p>
                            <p className="testimonial__author">
                                {testimonial.author}
                                <span>{testimonial.position}</span>
                            </p>
                        </div>

                    </div>
                ))
            }
        </>

    )
}