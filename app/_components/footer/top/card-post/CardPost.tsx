import "./_CardPost.scss";
import Image from "next/image";

interface PostProps {
    src: string,
    alt: string,
    text: string,
    date: string
}

export default function CardPost({src, alt, text, date}: PostProps) {
    return (
        <div className="post">
            <Image
                className="footer__logo"
                src={src}
                alt={alt}
                width={120}
                height={120}
                priority
            />
            <div className="post__div">
                <p className="post__p">
                    {text}
                </p>
                <p className="post__date">
                    {date}
                </p>
            </div>
        </div>
    );
}