import type { Metadata } from "next";
import Hero from "./_components/header/hero/Hero";
import Navigation from "./_components/header/navigation/Navigation";
import Header from "./_components/header/Header";
import Footer from "./_components/footer/Footer";

export const metadata: Metadata = {
  title: "Template | Xtreme Fitness",
};

export default async function TemplatePage() {
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
      </main>
      <Footer />
    </>
  );
}
