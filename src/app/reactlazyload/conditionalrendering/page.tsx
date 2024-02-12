"use client";

import { useEffect, useState } from "react";

export default function ConditinalRendering() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        // Loading UI
        <div>Loading...</div>
      ) : (
        // Content UI
        <div>Welcome to the App!</div>
      )}
    </div>
  );
}
