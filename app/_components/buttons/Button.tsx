import Link from "next/link";
import "./_Button.scss";
import { FaPlay } from "react-icons/fa";

interface ButtonProps {
    text: string
    className: string
    href: string
    classNamePlay: string
}

export default function Button({ text, className, href, classNamePlay }: ButtonProps) {
    return (
        <Link href={href} className={`${className} button`}>
            {text}
            <div className={`play ${classNamePlay}`}>
                <FaPlay />
            </div>
        </Link>
    )

}