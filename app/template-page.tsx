import type { Metadata } from "next";
import Hero from "./_components/header/hero/Hero";
import Navigation from "./_components/header/navigation/Navigation";
import Header from "./_components/header/Header";
import Footer from "./_components/footer/Footer";
import Title from "./_components/title/Title";
//edit import paths

export const metadata: Metadata = {
    title: "Template",
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
                <section className="template">
                    <Title
                        h2="orange title"
                        h3="black title"
                    />
                </section>
            </main>
            <Footer />
        </>
    );
}
