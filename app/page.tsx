import type { Metadata } from "next";
import Hero from "./_components/header/hero/Hero";
import Navigation from "./_components/header/navigation/Navigation";
import Header from "./_components/header/Header";
import Footer from "./_components/footer/Footer";
import ContactForm from "./contact/contact-formula/ContactForm";
import BlogComponent from "./_components/_blog-card/BlogComponent";
import AbonnementComponent from "./_components/abonnements/AbonnementComponent";
import TestimonialComponent from "./_components/testimonials/TestimonialComponent";
import AboutHomeComponent from "./_components/about-us/about-components/AboutHomeComponent";
import NewsletterSignup from "./_components/newsletter-signup/NewsletterSignup";
import ExcercisesComponent from "./_components/excercises/ExcercisesComponent";
import CoachesComponent from "./_components/coaches-card/CoachesComponent";

export const metadata: Metadata = {
  title: "Home | Xtreme Fitness",
};

export default function Home() {
  return (
    <>
      <Header>
        <Navigation />
        <Hero
          title="xtreme fitness"
          backgroundImage="/headers/mainHeader.jpg"
        />
      </Header>
      <main className="main">
        <ExcercisesComponent />
        {/* <section className="section__offers">
        </section> */}
        <AboutHomeComponent />
        {/* <section className="section__services">
        </section> */}
        <TestimonialComponent />
        <AbonnementComponent />
        <CoachesComponent isHomePage={true} className="home-page" />
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