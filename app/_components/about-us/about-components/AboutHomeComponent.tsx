import Button from "../../buttons/Button"
import Title from "../../title/Title"
import AboutNumbers from "../about-numbers/AboutNumbers"
import "./_AboutComponent.scss"

export default function AboutHomeComponent() {
    return (
        <section className="section__about">
            <div className="wrapper home">
                <section className="about">
                    <Title
                        h2="About Us"
                        h3="Wlcome to Xtreme Fitness"
                    />
                    <p className="about__text">
                        Xtreme Fitness is the place where sweat, laughter, and great music go hand in hand. We don’t promise miracles — but we do promise you’ll get stronger, happier, and sore in muscles you didn’t even know you had!
                    </p>
                    <AboutNumbers />
                    <Button
                        text="Read more"
                        href="/about"
                        className="transparent"
                        classNamePlay="orange"
                    />
                </section>
            </div>
        </section>
    )
}