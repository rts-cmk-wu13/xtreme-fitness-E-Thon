import Image from "next/image"
import "./_CoachesComponent.scss"
import type { CoachCard } from "../../types/coaches"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"

type CoachesPropsType = { coaches: CoachCard[], isHomePage?: boolean }

export default function CoachesCard({ coaches, isHomePage }: CoachesPropsType) {
    const coachAmount = isHomePage ? coaches.slice(0, 3) : coaches

    return (
        <section className="coaches">
            {coachAmount.map((coach) => (
                <article className="coach__card" key={coach.id}>
                    <Image
                        src={coach.asset.url}
                        alt={coach.asset.altText}
                        width={coach.asset.width}
                        height={coach.asset.height}
                        unoptimized
                        className="coach__image"
                    />
                    <div className="coach__text">
                        <h4 className="coach__name">
                            {coach.name}
                        </h4>
                        <p className="coach__area">
                            {coach.area}
                        </p>
                    </div>
                    <div className="coach__some">
                        <a href="#facebook" aria-label="Follow us on Facebook"><FaFacebookF /></a>
                        <a href="#twitter" aria-label="Follow us on Twitter"><FaTwitter /></a>
                        <a href="#instagram" aria-label="Follow us on Instagram"><FaInstagram /></a>
                    </div>
                </article>
            ))}
        </section>
    )
}