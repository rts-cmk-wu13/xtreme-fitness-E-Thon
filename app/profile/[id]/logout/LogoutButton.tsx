"use client"

import { useRouter } from "next/navigation";
import { logout } from "./logoutAction";
import { FaPlay } from "react-icons/fa";

export default function LogoutButton() {
    const router = useRouter();

    async function handleLogout() {
        await logout();
        router.refresh();
        router.push("/");
    }

    return (
        <button onClick={handleLogout} className="logout transparent button">
            Log out
            <div className="orange">
                <FaPlay />
            </div>
        </button>
    )
}
