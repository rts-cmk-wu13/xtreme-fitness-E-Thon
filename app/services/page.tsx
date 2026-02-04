import type { Metadata } from "next";
import Hero from "../_components/header/hero/Hero";
import Navigation from "../_components/header/navigation/Navigation";
import Header from "../_components/header/Header";
import Footer from "../_components/footer/Footer";
import "./_Services.scss";
import BlogComponent from "../_components/_blog-card/BlogComponent";
import TestimonialComponent from "../_components/testimonials/TestimonialComponent";

export const metadata: Metadata = {
    title: "Services",
};

export default async function ServicesPage() {
    return (
        <>
            <Header>
                <Navigation />
                <Hero
                    title="Services"
                    backgroundImage="/headers/servicesHeader.png"
                />
            </Header>
            <main className="main">
                <TestimonialComponent />
                <BlogComponent />
            </main>
            <Footer />
        </>
    );
}