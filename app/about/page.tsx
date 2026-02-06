import type { Metadata } from "next";
import Hero from "../_components/header/hero/Hero";
import Navigation from "../_components/header/navigation/Navigation";
import Header from "../_components/header/Header";
import Footer from "../_components/footer/Footer";
import "./_AboutUs.scss";
import BlogComponent from "../_components/_blog-card/BlogComponent";
import ContactForm from "../contact/contact-formula/ContactForm";
import VideoComponent from "../_components/media/VideoComponent";
import AboutAboutComponent from "../_components/about-us/about-components/AboutAboutComponent";
import NewsletterSignup from "../_components/newsletter-signup/NewsletterSignup";

export const metadata: Metadata = {
    title: "About Us",
};

export default async function AboutPage() {
    return (
        <>
            <Header>
                <Navigation />
                <Hero
                    title="About Us"
                    backgroundImage="/headers/aboutHeader.png"
                />
            </Header>
            <main className="main">
                <AboutAboutComponent />
                <VideoComponent />
                <ContactForm
                    className=""
                />
                <BlogComponent />
                <NewsletterSignup />
            </main>
            <Footer />
        </>
    );
}
