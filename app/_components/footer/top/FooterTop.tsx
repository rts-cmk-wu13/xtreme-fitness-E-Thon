import "./_FooterTop.scss";
import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaFacebookF, FaInstagram, FaPlay } from "react-icons/fa"

export default function FooterTop() {
    return (
        <div className="top">
            <Image
                className="top__logo"
                src="/icons/footer_left_icon.png"
                alt="Logo"
                width={212}
                height={232}
                priority
            />
            <div className="top__info">
                <section className="top__some">
                    <Image
                        className="top__logo"
                        src="/icons/logo.png"
                        alt="Logo"
                        width={152}
                        height={97}
                        priority
                    />
                    <p>For us, training is about joy, quality, and results.</p>
                    <div>
                        <a href="#facebook" aria-label="Follow us on Facebook"><FaFacebookF /></a>
                        <a href="#twitter" aria-label="Follow us on Twitter"><FaTwitter /></a>
                        <a href="#instagram" aria-label="Follow us on Instagram"><FaInstagram /></a>
                    </div>

                </section>

                <section className="top__opening">
                    <h4>Opening Hours</h4>
                    <div>
                        <p>
                            Monday-Friday:
                        </p>
                        <p className="grey">
                            12.00-14.00
                        </p>
                    </div>
                    <div>
                        <p>
                            Saturday:
                        </p>
                        <p className="grey">
                            17.30-00.00
                        </p>
                    </div>
                    <div>
                        <p>
                            Sunday:
                        </p>
                        <p className="grey">
                            17.30-00.00
                        </p>
                    </div>


                </section>

                <nav className="top__links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li className="top__link"><FaPlay className="FaPlay" /><Link href="/about">About</Link></li>
                        <li className="top__link"><FaPlay className="FaPlay" /><Link href="/services">Services</Link></li>
                        <li className="top__link"><FaPlay className="FaPlay" /><Link href="/coaches">Coaches</Link></li>
                        <li className="top__link"><FaPlay className="FaPlay" /><Link href="/subscriptions">Subscriptions</Link></li>
                        <li className="top__link"><FaPlay className="FaPlay" /><Link href="/contact">Contact</Link></li>
                    </ul>
                </nav>

                <address className="top__contact">
                    <h4>contact us</h4>
                    <div className="top__address">
                        <p>
                            Address:
                        </p>
                        <p className="grey">
                            Nørregade 42, 9000 Aalborg
                        </p>
                    </div>
                    <div className="top__email">
                        <p>
                            Email:
                        </p>
                        <p className="grey">
                            <a href="info@xtremefitness.dk">info@xtremefitness.dk</a>
                        </p>
                    </div>
                    <div className="top__address">
                        <p>
                            Phone:
                        </p>
                        <p className="grey">
                            <a href="tel:+45997516422">+45 997516422</a>
                        </p>
                    </div>
                </address>
            </div>
            <Image
                className="top__logo"
                src="/icons/footer_right_icon.png"
                alt="Logo"
                width={212}
                height={232}
                priority
            />
        </div >
    );
}