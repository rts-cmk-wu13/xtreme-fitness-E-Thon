import "./_CardTwit.scss";
import { FaTwitter } from "react-icons/fa"

export default function CardTwit() {
    return (
        <div className="twitter">
            <FaTwitter className="twitter__icon"/>
            <div className="twitter__div">
                <p className="twitter__p">
                    It is a long established fact that a reader will be distracted by the readable...
                </p>
                <p className="twitter__time">
                    5 hours ago
                </p>
            </div>
        </div>
    );
}