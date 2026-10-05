"use client";

import { useState } from "react";

export default function ServerMessage() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMessage = async () => {
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const res = await fetch("/api/message");

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      setMessage(data.message);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ margin: "1.5rem 0" }}>
      <button
        onClick={fetchMessage}
        style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
      >
        Load server message
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {message && <p>Server Response: {message}</p>}
    </div>
  );
}
