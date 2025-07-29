// Main entry point for Deno Deploy - routes to all functions
import helloFunction from './functions/hello.ts';

// Function registry - add new functions here
const functions = {
  hello: helloFunction,
  // Add more functions here as you create them
  // example: exampleFunction,
};

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    
    // Extract function name from path
    // Supports both /api/hello and /hello patterns
    const pathParts = url.pathname.split('/').filter(part => part.length > 0);
    let functionName = '';
    
    if (pathParts.length >= 2 && pathParts[0] === 'api') {
      // /api/hello pattern
      functionName = pathParts[1];
    } else if (pathParts.length >= 1) {
      // /hello pattern
      functionName = pathParts[0];
    }
    
    // Route to the appropriate function
    if (functionName && functions[functionName as keyof typeof functions]) {
      const targetFunction = functions[functionName as keyof typeof functions];
      return await targetFunction.fetch(request);
    }
    
    // Handle root path - return available functions
    if (url.pathname === '/' || url.pathname === '/api') {
      const availableFunctions = Object.keys(functions);
      const response = {
        message: 'Deno Deploy Function Router',
        availableFunctions,
        usage: availableFunctions.map(name => ({
          function: name,
          endpoints: [
            `${url.origin}/api/${name}`,
            `${url.origin}/${name}`
          ]
        })),
        timestamp: new Date().toISOString(),
      };
      
      return new Response(JSON.stringify(response, null, 2), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }
    
    // 404 for unknown routes
    return new Response(
      JSON.stringify({
        error: 'Function not found',
        availableFunctions: Object.keys(functions),
        requestedPath: url.pathname,
      }),
      {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  },
};
