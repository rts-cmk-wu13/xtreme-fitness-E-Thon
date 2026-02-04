import type { Metadata } from "next";
import Hero from "../_components/header/hero/Hero";
import Navigation from "../_components/header/navigation/Navigation";
import Header from "../_components/header/Header";
import Footer from "../_components/footer/Footer";
import Title from "../_components/title/Title";
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
                    title="contact"
                    backgroundImage="/images/contact_us.jpg"
                />
            </Header>
            <main className="main">
                <section className="contact">
                    <Title
                        h2="contact us"
                        h3="Send us a message and we'll respond as quickly as possible"
                    />
                </section>
                <ContactForm
                    className="contactpage"
                />
            </main>
            <Footer />
        </>
    )
}