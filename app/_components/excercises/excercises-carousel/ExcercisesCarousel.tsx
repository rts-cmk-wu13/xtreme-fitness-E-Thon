"use client"

import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from 'embla-carousel';
import {
    NextButton,
    PrevButton,
    usePrevNextButtons
} from './ExcercisesArrowButtons'
import "../_Excercises.scss";
import type { Excercise } from "../../../types/excercises"
import ExcercisesCard from "../excercises-card/ExcercisesCard";

type ExcercisesPropType = {
    excercises: Excercise[]
    options?: EmblaOptionsType
}

export default function ExcerciseCarousel(props: ExcercisesPropType) {
    const { excercises, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const {
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <div className="excercises">
            <div className="excercises__viewport" ref={emblaRef}>
                <div className="excercises__container">
                    {excercises.map((excercise: Excercise) => (
                        <div className="excercises__slide" key={excercise.id}>
                            <div className="excercises__slide__number">
                                <ExcercisesCard excercises={[excercise]} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="excercises__buttons">
                <PrevButton onClick={onPrevButtonClick} />
                <NextButton onClick={onNextButtonClick} />
            </div>

        </div>
    )
}