"use client"

import { usePathname } from "next/navigation";
import "./_AboutNumbers.scss"

export default function AboutNumbers(){
    const pathname = usePathname();
    const subClassName = pathname === '/' ? 'home' : 'about'
    
        return (
            <div className={`about ${subClassName}`}>
                <div className={`about__info ${subClassName}`}>600+<span>Working hours</span></div>
                <div className={`about__info ${subClassName}`}>790+<span>Programs</span></div>
                <div className={`about__info ${subClassName}`}>2560+<span>Happy customers</span></div>
                <div className={`about__info ${subClassName}`}>2560+<span>Healthy bodies</span></div>
            </div>
        )
}