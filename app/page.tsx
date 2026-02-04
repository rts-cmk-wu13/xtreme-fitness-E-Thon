import type { Metadata } from "next";
import Hero from "./_components/header/hero/Hero";
import Navigation from "./_components/header/navigation/Navigation";
import Header from "./_components/header/Header";
import Footer from "./_components/footer/Footer";
import Title from "./_components/title/Title";
import ContactForm from "./contact/contact-formula/ContactForm";
import BlogComponent from "./_components/_blog-card/BlogComponent";
import AbonnementComponent from "./_components/abonnements/AbonnementComponent";

export const metadata: Metadata = {
  title: "Home | Xtreme Fitness",
};

export default async function Home() {
  // // Events
  // const eventRes = await fetch("http://localhost:4000/events", {
  //   next: { revalidate: 60 }
  // });
  // const eventData = await eventRes.json();
  // const events = eventData.data;

  // // Embla carousel for events 
  // const OPTIONS: EmblaOptionsType = {}

  // // Testimonials
  // const testiRes = await fetch("http://localhost:4000/testimonials", {
  //   next: { revalidate: 60 }
  // });
  // const testiData = await testiRes.json();
  // const testis = testiData.data;

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
        {/* <section className="section__testimonials">
        </section> */}
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

