import type { Metadata } from "next";
import Hero from "./_components/header/hero/Hero";
import Navigation from "./_components/header/navigation/Navigation";
import Header from "./_components/header/Header";
import Footer from "./_components/footer/Footer";
import ContactForm from "./contact/contact-formula/ContactForm";
import BlogComponent from "./_components/_blog-card/BlogComponent";
import AbonnementComponent from "./_components/abonnements/AbonnementComponent";
import TestimonialComponent from "./_components/testimonials/TestimonialComponent";

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
        {/* <section className="section__signup">
        </section> */}
        {/* <section className="section__offers">
        </section> */}
        {/* <section className="section__about">
        </section> */}
        {/* <section className="section__services">
        </section> */}
        <TestimonialComponent />
        <AbonnementComponent />
        {/* <section className="section__coaches">
        </section> */}
        <ContactForm
          className=""
        />
        <BlogComponent />
      </main>
      <Footer />
    </>
  );
}

