import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Server-Sent Events endpoint
  app.get('/api/events', (req, res) => {
    // Set headers for SSE
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // Send initial connection message
    res.write('event: connected\n');
    res.write(`data: ${JSON.stringify({ message: 'Connected to event stream' })}\n\n`);

    // Counter to demonstrate real-time updates
    let counter = 0;
    
    // Send counter update every second
    const counterInterval = setInterval(() => {
      counter++;
      res.write('event: counter\n');
      res.write(`data: ${JSON.stringify({ count: counter })}\n\n`);
    }, 1000);

    // Send random number every 2 seconds
    const randomInterval = setInterval(() => {
      const random = Math.floor(Math.random() * 100);
      res.write('event: random\n');
      res.write(`data: ${JSON.stringify({ number: random })}\n\n`);
    }, 2000);

    // Handle client disconnect
    req.on('close', () => {
      clearInterval(counterInterval);
      clearInterval(randomInterval);
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
