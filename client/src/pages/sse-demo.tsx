import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';

interface EventData {
  count?: number;
  number?: number;
  message?: string;
}

export default function ServerSentEventsDemo() {
  const [connectionStatus, setConnectionStatus] = useState<string>('Disconnected');
  const [counter, setCounter] = useState<number>(0);
  const [randomNumber, setRandomNumber] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Create EventSource instance
    const eventSource = new EventSource('/api/events');

    // Handle connection open
    eventSource.onopen = () => {
      setError(null);
      setConnectionStatus('Connected');
    };

    // Handle connection error
    eventSource.onerror = (error) => {
      setError('Connection error. Retrying...');
      setConnectionStatus('Error - Retrying');
      console.error('EventSource error:', error);
    };

    // Handle 'connected' event
    eventSource.addEventListener('connected', (event) => {
      const data: EventData = JSON.parse(event.data);
      console.log(data.message);
    });

    // Handle counter updates
    eventSource.addEventListener('counter', (event) => {
      const data: EventData = JSON.parse(event.data);
      if (data.count !== undefined) {
        setCounter(data.count);
      }
    });

    // Handle random number updates
    eventSource.addEventListener('random', (event) => {
      const data: EventData = JSON.parse(event.data);
      if (data.number !== undefined) {
        setRandomNumber(data.number);
      }
    });

    // Cleanup on unmount
    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Server-Sent Events Demo</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Connection Status</h2>
          <div className="flex items-center gap-2">
            <div
              className={`w-3 h-3 rounded-full ${
                connectionStatus === 'Connected'
                  ? 'bg-green-500'
                  : connectionStatus.includes('Error')
                  ? 'bg-red-500'
                  : 'bg-yellow-500'
              }`}
            />
            <span>{connectionStatus}</span>
          </div>
          {error && (
            <p className="text-red-500 mt-2">{error}</p>
          )}
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Real-time Counter</h2>
          <p className="text-3xl font-mono">{counter}</p>
          <p className="text-sm text-muted-foreground mt-2">
            Updates every second
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Random Number</h2>
          <p className="text-3xl font-mono">{randomNumber}</p>
          <p className="text-sm text-muted-foreground mt-2">
            Updates every 2 seconds
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">How It Works</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Server streams events in real-time</li>
            <li>No polling required</li>
            <li>Automatic reconnection</li>
            <li>One-way communication (server to client)</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}