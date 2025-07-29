// Simple Deno server for local development
import mainHandler from './main.ts';

const PORT = 8000;

async function handler(request: Request): Promise<Response> {
  // Use the main handler which routes to all functions
  return await mainHandler.fetch(request);
}

console.log(`🦕 Deno server running on http://localhost:${PORT}`);
console.log(`📡 Function endpoint: http://localhost:${PORT}/api/hello`);

Deno.serve({ port: PORT }, handler);
