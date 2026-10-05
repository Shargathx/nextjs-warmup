import Link from "next/link";
import "../globals.css";

export default function About() {
  return (
    <main className="container">
      <h1 className="title">About Me</h1>
      <p>Hi there! I am a developer building applications with Next.js.</p>
      <Link href="/" className="link">
        Back to Home
      </Link>
    </main>
  );
}
