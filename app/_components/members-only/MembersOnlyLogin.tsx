import Button from "../buttons/Button";
import "./_MembersOnlyLogin.scss";

export default function MembersOnlyLogin({text} : {text: string}) {
    return (
        <section className="members">
            <h3>This is a members access only</h3>
                    <p>{text}</p>
                    <Button
                    text="Login"
                    href="/login"
                    className="transparent"
                    classNamePlay="orange"
                    />
        </section>
    );
}