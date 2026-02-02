"use client"

import "./_Header.scss";

export default function Header({children}: {children: React.ReactNode;}) {
    return (
        <header className="header">
            {children}
        </header>
    );
}