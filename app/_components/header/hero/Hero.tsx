'use client'

import React from "react";
import "./_Hero.scss";
import { usePathname } from "next/navigation";
// import Button from "./_components/buttons/Button";

interface TitleProps {
    title: string;
    backgroundImage: string;
}

export default function Hero({ title, backgroundImage }: TitleProps) {
    const pathname = usePathname();
    const style: React.CSSProperties | undefined = backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined;

    if (pathname === '/') {
        return (
            <section className="hero" style={style}>
                <h1 style={style}>
                    <span className="hero__span">{title}</span>bliv stærk
                </h1>
                <p className="hero__p">
                    Det bedste fitnesscenter — hvor styrke og sundhed vokser sammen.
                </p>
                {/* <Button>
                    text=""
                    href=""
                    className="button transparent"
                </Button> */}

            </section>

        )
    }

    return (
        <section className="hero" style={style}>
            <h1>{title}</h1>;
        </section>
    )
}