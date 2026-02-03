import type { Metadata } from "next";
import Hero from "./_components/header/hero/Hero";
import Navigation from "./_components/header/navigation/Navigation";
import Header from "./_components/header/Header";
import Footer from "./_components/footer/Footer";

export const metadata: Metadata = {
  title: "Home | Xtreme Fitness",
};

export default async function Home() {
  //fetch posts and assets for blog card
  // const postRes = await fetch("http://localhost:4000/posts", {
  //   next: { revalidate: 60 }
  // });

  // //posts:
  // const postData = await postRes.json();
  // const posts = postData.data;

  // //assets:
  // const assetsRes = await fetch("http://localhost:4000/assets", {
  //   next: { revalidate: 60 }
  // });
  // const assetsData = await assetsRes.json();
  // const assets = assetsData.data;

  // // join assetsId to assets object with mapping:
  // const assetsMap = Object.fromEntries(
  //   assets.map((asset: any) => [asset.id, asset])
  // )

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
        {/* <section className="section__abonnements">
        </section> */}
        {/* <section className="section__coaches">
        </section> */}
        {/* <section className="section__contact">
        </section> */}
        {/* <section className="section__posts">
        </section> */}
      </main>
      <Footer />
    </>
  );
}
