import "./_Profile.scss"
import type { Metadata } from "next";
import { cookies } from "next/headers";
import LogoutButton from "./logout/LogoutButton";
import MyComments from "./comments/MyComments";
import Hero from "../../_components/header/hero/Hero";
import Navigation from "../../_components/header/navigation/Navigation";
import Header from "../../_components/header/Header";
import Footer from "../../_components/footer/Footer";
import Title from "../../_components/title/Title";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Profile",
};

export default async function Profile({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
        return <p>Unauthorized - Please login</p>
    }
    const userRes = await fetch(`http://localhost:4000/users/me`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    if (!userRes.ok) {
        throw new Error(`Failed to load profile: ${userRes.status}`);
    }

    const profileData = await userRes.json();
    const user = profileData.data;

    return (
        <>
            <Header>
                <Navigation />
                <Hero
                    title="My profile"
                    backgroundImage="/headers/myPageHeader.png"
                />
            </Header>
            <main className="main">
                <section className="profile">
                    <Title
                        h2="Abonnement"
                        h3="My abonnement"
                    />
                    <section className="profile__membership">
                        <Image
                            className="membership"
                            src={user.membership.asset.url}
                            alt={user.membership.asset.altText}
                            width={318}
                            height={167}
                            unoptimized
                        />
                        <h4>
                            {user.membership.title}
                        </h4>
                    </section>
                    <MyComments />
                    <LogoutButton />
                </section>
            </main>
            <Footer />
        </>
    );
}

