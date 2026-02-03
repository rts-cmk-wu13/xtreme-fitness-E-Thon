import "./_Register.scss"
import type { Metadata } from "next";
import SignupForm from "./SignupForm";
import Hero from "../_components/header/hero/Hero";
import Navigation from "../_components/header/navigation/Navigation";
import Header from "../_components/header/Header";
import Footer from "../_components/footer/Footer";
import Title from "../_components/title/Title";

export const metadata: Metadata = {
    title: "Register",
};

export default function SignupPage() {
    return (
        <>
            <Header>
                <Navigation />
                <Hero
                    title="register user"
                    backgroundImage="/headers/loginHeader.png"
                />
            </Header>
            <main className="main">
                <section className="register">
                    <Title
                        h2="Get access to our training offers"
                        h3="register user"
                    />
                    <SignupForm />
                </section>
            </main>
            <Footer />
        </>
    )
}
