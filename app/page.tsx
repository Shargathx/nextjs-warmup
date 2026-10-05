import Link from "next/link";
import "./about/page.css";

export default function Home() {
  return (
    <main className="container">
      <h1 className="title">Welcome to My Next.js App!</h1>
      <p>This is the welcome page for the application.</p>
      <Link href="/about" className="link">
        About Me
      </Link>
    </main>
  );
}
