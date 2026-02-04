"use client"

import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from 'embla-carousel';
import {
    NextButton,
    PrevButton,
    usePrevNextButtons
} from './TestimonialArrowButtons'
import "./_Testimonial.scss";
import type { Testimonial } from "../../types/testimonials"
import TestimonialCard from "./testimonial-card/TestimonialCard";

type TestimonialsPropType = {
    testimonials: Testimonial[]
    options?: EmblaOptionsType
}

export default function TestimonialCarousel(props: TestimonialsPropType) {
    const { testimonials, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const {
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <div className="testimonial">
            <div className="testimonial__viewport" ref={emblaRef}>
                <div className="testimonial__container">
                    {testimonials.map((testimonial: Testimonial) => (
                        <div className="testimonial__slide" key={testimonial.id}>
                            <div className="testimonial__slide__number">
                                <TestimonialCard testimonials={[testimonial]} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="testimonial__buttons">
                <PrevButton onClick={onPrevButtonClick} />
                <NextButton onClick={onNextButtonClick} />
            </div>

        </div>
    )
}