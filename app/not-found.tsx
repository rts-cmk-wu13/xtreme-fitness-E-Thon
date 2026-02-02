import Link from "next/link"
import "./style/error-handling/_NotFound.scss"

export default function NotFound() {
    return(
        <>
        <h1>404</h1>
        <p>Oops! Looks like you've landed on a page that doesn't exist.</p>
        <Link href="/">Home</Link>
        </>
    )
}