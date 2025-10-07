import React, { useEffect, useState } from "react";

// PollingDemo: Demonstrates client-side polling to fetch data from the backend
const POLLING_INTERVAL = 2000; // milliseconds

export default function PollingDemo() {
  const [data, setData] = useState<{ timestamp: number; random: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/polling");
        if (!res.ok) throw new Error("Network error");
        const json = await res.json();
        if (isMounted) setData(json);
      } catch (err: any) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchData();
    const interval = setInterval(fetchData, POLLING_INTERVAL);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h2>Polling Demo</h2>
      <p>This component polls <code>/api/polling</code> every {POLLING_INTERVAL / 1000} seconds.</p>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {data && (
        <div>
          <p><strong>Timestamp:</strong> {data.timestamp}</p>
          <p><strong>Random Number:</strong> {data.random}</p>
        </div>
      )}
    </div>
  );
}
