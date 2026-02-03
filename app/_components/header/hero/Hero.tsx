'use client'

import React from "react";
import "./_Hero.scss";
import { usePathname } from "next/navigation";
import Button from "../../buttons/Button";

interface TitleProps {
    title: string;
    backgroundImage?: string;
    backgroundColor?: string;
}

export default function Hero({ title, backgroundImage, backgroundColor }: TitleProps) {
    const pathname = usePathname();
    const style: React.CSSProperties | undefined = 
        backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : backgroundColor ? {backgroundColor}
        : undefined;

    if (pathname === '/') {
        return (
            <section className="hero home" style={style}>
                <h1 className="hero__h1 home">
                    <span className="hero__span">{title}</span>get strong
                </h1>
                <p className="hero__p">
                    The best fitness center — where strength and health grow together.
                </p>
                <Button
                    text="Sign up now"
                    href="/signup"
                    className="transparent"
                    classNamePlay="orange"
                />


            </section>

        )
    }

    return (
        <section className="hero subpage" style={style}>
            <h1 className="hero__h1 subpage">{title}</h1>;
        </section>
    )
}