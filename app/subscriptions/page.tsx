import type { Metadata } from "next";
import Hero from "../_components/header/hero/Hero";
import Navigation from "../_components/header/navigation/Navigation";
import Header from "../_components/header/Header";
import Footer from "../_components/footer/Footer";
import "./_Subscriptions.scss";
import BlogComponent from "../_components/_blog-card/BlogComponent";
import AbonnementComponent from "../_components/abonnements/AbonnementComponent";
import TestimonialComponent from "../_components/testimonials/TestimonialComponent";

export const metadata: Metadata = {
    title: "Subscriptions",
};

export default async function SubscriptionsPage() {
    return (
        <>
            <Header>
                <Navigation />
                <Hero
                    title="Subscriptions"
                    backgroundImage="/headers/subscriptionsHeader.png"
                />
            </Header>
            <main className="main">
                <AbonnementComponent />
                <TestimonialComponent />
                <BlogComponent />
            </main>
            <Footer />
        </>
    );
}