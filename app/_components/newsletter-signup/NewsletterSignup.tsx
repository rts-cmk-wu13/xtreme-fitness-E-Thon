'use client';

import { useActionState } from "react";
import { subscribeNewsletter } from "./subscribeNewsletter";
import "./_NewsletterSignup.scss";
import { FaPlay } from "react-icons/fa";
import Title from "../title/Title";

export default function NewsletterSignup() {
  const [state, formAction, pending] = useActionState(subscribeNewsletter, null);

  return (
    <div className="newsletter__wrapper">
      <Title
        h2="Subscribe to our newsletter!"
        h3="Don't miss out on our latest news"
      />
      <form action={formAction} className="newsletter__form">
        <input
          type="email"
          placeholder="Your email"
          name="email"
          required
          disabled={pending}
        />
        <button type="submit" disabled={pending} className="orange button">
          Subscribe
          <div className="white">
            <FaPlay />
          </div>
        </button>
        {state && "message" in state && state.message && (
          <p>{state.message}</p>
        )}
      </form>
    </div>

  );
}