import "./_ExcercisesCard.scss";
import type { Excercise } from "../../../types/excercises"
import Image from "next/image";
import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

type ExcercisesCardProps = { excercises: Excercise[] }

export default function ExcercisesCard({ excercises }: ExcercisesCardProps) {
    const dialogElement = useRef<HTMLDialogElement>(null)
    const [selectedExcercise, setSelectedExcercise] = useState<Excercise | null>(null)

    function handleDialog(excercise: Excercise) {
        setSelectedExcercise(excercise)
        dialogElement.current?.showModal()
    }

    const handleClose = () => dialogElement.current?.close();

    return (
        <>
            {excercises.map((excercise: Excercise) => (
                <div className="excercise__card" key={excercise.id} onClick={() => handleDialog(excercise)}>
                    <Image
                        className="excercise__image"
                        src={excercise.asset.url}
                        alt={excercise.asset.altText}
                        width={excercise.asset.width}
                        height={excercise.asset.height}
                        unoptimized
                    />
                    <p className="excercise__title">
                        {excercise.title}
                    </p>
                    <p className="excercise__teaser">
                        {excercise.teaser}
                    </p>

                </div>
            ))}
            {selectedExcercise && (
                <dialog ref={dialogElement}>
                    <h2>{selectedExcercise.title}</h2>
                    <Image
                        className="excercise__image"
                        src={selectedExcercise.asset.url}
                        alt={selectedExcercise.asset.altText}
                        width={selectedExcercise.asset.width}
                        height={selectedExcercise.asset.height}
                        unoptimized
                    />
                    <p className="excercise__content">
                        {selectedExcercise.content}
                    </p>
                    <button type="button" className="orange button" onClick={handleClose}>
                        Close
                        <div className="white">
                            <FaPlay />
                        </div>
                    </button>
                </dialog>
            )}
        </>

    )
}