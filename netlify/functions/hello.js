export const handler = async (event, context) => {
  // Simple hello function that returns a greeting with timestamp
  const now = new Date();
  
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // Enable CORS for local development
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
    },
    body: JSON.stringify({
      message: 'Hello from Netlify Functions! 👋',
      timestamp: now.toISOString(),
      randomNumber: Math.floor(Math.random() * 1000),
      status: 'success'
    })
  };
};
