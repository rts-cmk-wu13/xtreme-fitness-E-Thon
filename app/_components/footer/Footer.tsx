import "./_Footer.scss";
import FooterTop from "./top/FooterTop";
import FooterBottom from "./bottom/FooterBottom";

export default function Footer() {
    return (
        <footer className="footer">
            <FooterTop />
            <FooterBottom />
        </footer>
    );
}