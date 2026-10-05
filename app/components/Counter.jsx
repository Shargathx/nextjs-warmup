"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ margin: "1rem 0" }}>
      <p>Current count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
      >
        Increase
      </button>
    </div>
  );
}
