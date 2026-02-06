import type { Metadata } from "next";
import Hero from "../_components/header/hero/Hero";
import Navigation from "../_components/header/navigation/Navigation";
import Header from "../_components/header/Header";
import Footer from "../_components/footer/Footer";
import "./_Coaches.scss";
import BlogComponent from "../_components/_blog-card/BlogComponent";
import ContactForm from "../contact/contact-formula/ContactForm";
import CoachesComponent from "../_components/coaches-card/CoachesComponent";

export const metadata: Metadata = {
    title: "Coaches",
};

export default async function CoachesPage() {
    return (
        <>
            <Header>
                <Navigation />
                <Hero
                    title="Coaches"
                    backgroundImage="/headers/employeesHeader.jpg"
                />
            </Header>
            <main className="main">
                <CoachesComponent isHomePage={false} className="coach-page"/>
                <ContactForm
                    className=""
                />
                <BlogComponent />
            </main>
            <Footer />
        </>
    );
}