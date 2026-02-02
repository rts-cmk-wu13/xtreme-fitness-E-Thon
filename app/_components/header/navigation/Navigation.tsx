import Link from "next/link";
import "./_Navigation.scss";
import Image from "next/image";
import { cookies } from "next/headers";

export default async function Navigation() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token");
    const userId = cookieStore.get("user-id");

    return (
        <nav className="navigation">
            <Link href="/">
                <Image
                    className="navigation__logo"
                    src="/icons/logo.png"
                    alt="XTREME FITNESS logo"
                    width={146}
                    height={93}
                    priority
                />
            </ Link>
            <ul className="navigation__ul">
                <li><Link href="/" className="navigation__link">Home</Link></li>
                <li><Link href="/services" className="navigation__link">Services</Link></li>
                <li><Link href="/coaches" className="navigation__link">Coaches</Link></li>
                <li><Link href="/prices" className="navigation__link">Prices</Link></li>
                <li><Link href="/about" className="navigation__link">About Us</Link></li>
                <li><Link href="/contact" className="navigation__link">Contact</Link></li>
                <li>
                    {token && userId ? (
                        <Link href={`/profile/${userId.value}`} className="navigation__link">Profile</Link>
                    ) : (
                        <Link href="/login" className="navigation__link">Login</Link>
                    )}
                </li>
            </ul>
        </nav>
    );
}