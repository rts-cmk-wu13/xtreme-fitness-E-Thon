import type { Metadata } from "next";
import Hero from "../_components/header/hero/Hero";
import Navigation from "../_components/header/navigation/Navigation";
import Header from "../_components/header/Header";
import Footer from "../_components/footer/Footer";
import ContactForm from "./contact-formula/ContactForm";
import "./_Contact.scss";

export const metadata: Metadata = {
    title: "Contact",
};

export default function ContactPage() {
    return (
        <>
            <Header>
                <Navigation />
                <Hero
                    title="Contact"
                    backgroundImage="/images/contact_us.jpg"
                />
            </Header>
            <main className="main">
                <ContactForm
                    className="contactpage"
                />
            </main>
            <Footer />
        </>
    )
}