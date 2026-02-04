import Image from "next/image"
import "./_Abonnement.scss"
import Button from "../buttons/Button";
import { FaCheck } from "react-icons/fa";

interface AbonnementCard {
    id: number;
    title: string;
    price: number;
    content: string;
    createdAt: string;
    asset: Asset;
    advantages: Advantages[];
}

interface Asset {
    url: string;
    altText: string;
    width: number;
    height: number;
}

interface Advantages { description: String }

export default function AbonnementCard({ abonnements }: { abonnements: AbonnementCard[] }) {

    return (
        <section className="abonnement">
            {abonnements.map((abonnement) => {
                return (
                    <article className="abonnement__card" key={abonnement.id}>
                        <div className="abonnement__image">
                            <Image
                                src={abonnement.asset.url}
                                alt={abonnement.asset.altText}
                                width={abonnement.asset.width}
                                height={abonnement.asset.height}
                                unoptimized
                                className="image"
                            />
                            <p className="abonnement__price">
                                <span className="abonnement__month">{abonnement.price} DKK</span>
                                Mdr
                            </p>
                        </div>
                        <div className="abonnement__text">
                            <h3 className="abonnement__h3">{abonnement.title}</h3>
                            <ul className="abonnement__advantages">
                                {abonnement.advantages.map((advantage, index) => (
                                <li key={index}><FaCheck />{advantage.description}</li>
                                ))}
                            </ul>
                            <Button
                                text="Sign up now"
                                href="/signup"
                                className="orange"
                                classNamePlay="white"
                            />
                        </div>
                    </article>
                )
            })}
        </section>
    )
}
