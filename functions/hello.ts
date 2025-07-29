// Simple Deno function for Cloudflare Pages/Deno Deploy
export default {
  async fetch(request: Request): Promise<Response> {
    // Handle CORS for development
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Handle preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 200,
        headers: corsHeaders,
      });
    }

    // Simple hello world response
    const response = {
      message: 'Hello from Deno Deploy! 🦕',
      timestamp: new Date().toISOString(),
      randomNumber: Math.floor(Math.random() * 1000),
      status: 'success',
      platform: 'Deno Deploy',
      runtime: 'Deno',
    };

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders,
      },
    });
  },
};
