"use client"

import "./_Header.scss";
import { usePathname } from "next/navigation";
import React from "react";

export default function Header({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const childrenArray = React.Children.toArray(children);
    
    return (
        <header className="header">
            {pathname === "/" && childrenArray[1]}
            {childrenArray[0]}
        </header>
    );
}