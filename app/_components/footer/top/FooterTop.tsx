import "./_FooterTop.scss";
import Image from "next/image";
import CardPost from "./card-post/CardPost";
import CardTwit from "./card-twit/CardTwit";

export default function FooterTop() {
    return (
            <div className="top">
                <section className="top__article left">
                    <Image
                        className="top__logo"
                        src="/Logo.png"
                        alt="Logo"
                        width={228}
                        height={54}
                        priority
                    />
                    <section className="top__location">
                        <h4>Location</h4>
                        <address>
                            Kompagnistræde 278<br />
                            1265 København K
                        </address>
                    </section>
                    <section className="top__opening">
                        <h4>Opening Hours</h4>
                        <p>
                            WED - THU 10:30 PM TO 3 AM
                        </p>
                        <p>
                            SAT - SUN: 11 PM TO 5 AM
                        </p>
                    </section>

                </section>
                <section className="top__article right">
                    <section className="top__posts">
                        <h4>Recent Posts</h4>
                        <CardPost 
                            src="/content-img/recent_post1.jpg"
                            alt="recent post 1 image"
                            text="Lorem Ipsum is simply dummy text of the printing and typesetting."
                            date="April 17, 2018"
                        />
                        <CardPost 
                            src="/content-img/recent_post2.jpg"
                            alt="recent post 2 image"
                            text="Lorem Ipsum is simply dummy text of the printing and typesetting."
                            date="April 17, 2018"
                        />
                    </section>
                    <section className="top__tweets">
                        <h4>Recent Tweets</h4>
                        <CardTwit />
                        <CardTwit />
                    </section>
                </section>
            </div>
    );
}