import Link from "next/link";
import "./globals.css";
import Counter from "./components/Counter.jsx";
import ServerMessage from "./components/ServerMessage.jsx";

export default function Home() {
  return (
    <main className="container">
      <h1 className="title">Welcome to My Next.js App!</h1>
      <p>This is the welcome page for the application.</p>
      <Counter />
      <ServerMessage />
      <Link href="/about" className="link">
        About Me
      </Link>
    </main>
  );
}
