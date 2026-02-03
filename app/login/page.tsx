import "./_Login.scss"
import type { Metadata } from "next";
import Hero from "../_components/header/hero/Hero";
import Navigation from "../_components/header/navigation/Navigation";
import Header from "../_components/header/Header";
import Footer from "../_components/footer/Footer";
import Link from "next/link";
import LoginForm from "./LoginForm";
import Title from "../_components/title/Title";

export const metadata: Metadata = {
    title: "Login",
};

export default function LoginPage() {
    return (
        <>
            <Header>
                <Navigation />
                <Hero
                    title="login"
                    backgroundImage="/headers/loginHeader.png"
                />
            </Header>
            <main className="main">
                <section className="login">
                    <Title 
                    h2="login to sign up for the workout of the day"
                    h3="login"
                    />
                    <LoginForm />
                    <p>Are you not yet a member? <Link href="/signup" className="link login__link">Sign up here.</Link></p>
                </section>
            </main>
            <Footer />
        </>
    )
}