import AboutNumbers from "../about-us/about-numbers/AboutNumbers"
import "./_Video.scss"
import Video from "./Video"

export default function VideoComponent() {
    return (
        <section className="video">
            <AboutNumbers />
            <Video />
        </section>
    )
}