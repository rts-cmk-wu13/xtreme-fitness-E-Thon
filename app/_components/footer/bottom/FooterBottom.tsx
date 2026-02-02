import "./_FooterBottom.scss";
import { FaTwitter, FaFacebookF, FaSnapchatGhost, FaInstagram } from "react-icons/fa"

export default function FooterBottom() {
    return (
        <div className="bottom">
            <p className="bottom__p rights">Night Club PSD Template - All Rights Reserved</p>
            <section className="bottom__section">
                <p className="bottom__connected">Stay Connected With Us </p>
                <nav className="bottom__links" aria-label="Social Media Links">
                    <a className="bottom__link" href="#facebook" aria-label="Follow us on Facebook"><FaFacebookF /></a>
                    <a className="bottom__link" href="#twitter" aria-label="Follow us on Twitter"><FaTwitter /></a>
                    <a className="bottom__link" href="#snapchat" aria-label="Follow us on Snapchat"><FaSnapchatGhost /></a>
                    <a className="bottom__link" href="#instagram" aria-label="Follow us on Instagram"><FaInstagram /></a>
                </nav>
            </section>
            <p className="bottom__p copyright">Copyright © 2018 NightClub</p>
        </div>

    );
}