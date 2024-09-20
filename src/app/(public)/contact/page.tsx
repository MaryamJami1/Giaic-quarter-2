import Link from "next/link";

export default function Contact() {
    return (
        <div>
            <h1>Contact</h1>
            <Link href="/">Home</Link>
            <br />
            <Link href="/about">About</Link>
            <br />
            <Link href="/contact">Contact</Link>

        </div>
    )
}
