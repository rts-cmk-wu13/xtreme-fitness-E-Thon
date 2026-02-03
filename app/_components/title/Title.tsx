import "./_Title.scss";

interface TitleProps {
    h2: string
    h3: string
}

export default function Title({ h2, h3 }: TitleProps) {
    return (
        <div className="title">
            <h2>{h2}</h2>
            <h3>{h3}</h3>
        </div>
    )
}