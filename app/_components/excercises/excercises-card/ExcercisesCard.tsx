import "./_ExcercisesCard.scss";
import type { Excercise } from "../../../types/excercises"
import Image from "next/image";

type ExcercisesCardProps = { excercises: Excercise[]}

export default function ExcercisesCard({ excercises }: ExcercisesCardProps) {
    return (
        <>
            {
                excercises.map((excercise: Excercise) => (
                    <div className="excercise__card" key={excercise.id}>
                        <Image
                            className="excercise__image"
                            src="/icons/excercises_apostrophy.png"
                            alt="Excercisess apostrophy"
                            width={38}
                            height={28}
                            priority
                        />
                        <div className="excercise__text">
                            <p className="excercise__quote">
                                {excercise.content}
                            </p>
                            <p className="excercise__author">
                                {excercise.author}
                                <span>{excercise.position}</span>
                            </p>
                        </div>

                    </div>
                ))
            }
        </>

    )
}