import Image from "next/image"
import Title from "../../title/Title"
import "./_AboutComponent.scss"

export default function AboutAboutComponent() {
    return (
        <section className="section__about">
            <div className="wrapper about">
                <section className="about">
                    <Image
                        className="about__image"
                        src="/images/about_us2.png"
                        alt="Woman doing lunches while a guy is coaching her"
                        width={546}
                        height={539}
                        priority
                    />
                    <Title
                        h2="About Us"
                        h3="Wlcome to Xtreme Fitness"
                    />
                    <p className="about__text">
                        Xtreme Fitness is the place where sweat, laughter, and great music go hand in hand. We don’t promise miracles — but we do promise you’ll get stronger, happier, and sore in muscles you didn’t even know you had!
                    </p>
                </section>
            </div>
        </section>
    )
}