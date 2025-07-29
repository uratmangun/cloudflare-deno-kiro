# Deno Function Setup

This project includes a simple Deno function that can be deployed to Deno Deploy or Cloudflare Pages.

## Local Development

### Option 1: Full Development (React + Deno)

1. **Install Deno** (if not already installed):
   ```bash
   curl -fsSL https://deno.land/install.sh | sh
   ```

2. **Start both React and Deno servers**:
   ```bash
   pnpm dev
   ```
   This will start:
   - React app on `http://localhost:5173`
   - Deno server on `http://localhost:8000`

3. **Test the integration**:
   - Open `http://localhost:5173` in your browser
   - Click "Call Serverless Function" button
   - Should successfully call the local Deno function

### Option 2: React Only (without Deno)

1. **Start only React server**:
   ```bash
   pnpm dev:vite
   ```

2. **Test with production API**:
   - The app will fallback to the production Deno Deploy endpoint
   - Or you can set `VITE_DENO_API_URL` in `.env.local`

### Manual Deno Testing

- **Start Deno server only**: `deno task dev`
- **Test function directly**: `curl http://localhost:8000/api/hello`
- **View all functions**: `curl http://localhost:8000/`

## Function Endpoint

- **Local**: `http://localhost:8000/api/hello`
- **Production**: `/api/hello` (when deployed)

## React Integration

The React app will automatically try to call the local Deno server first, and fallback to the production endpoint if the local server is not running.

## Deployment

This project uses a **hybrid deployment strategy**:
- **React App**: Deployed to Cloudflare Pages
- **API Function**: Deployed to Deno Deploy

### 1. Deploy Deno Function to Deno Deploy
1. Go to [dash.deno.com](https://dash.deno.com)
2. Create a new project
3. Connect your GitHub repository
4. Set the entry point to `functions/hello.ts`
5. Deploy and note the deployment URL (e.g., `https://your-project.deno.dev`)

### 2. Deploy React App to Cloudflare Pages
1. Go to Cloudflare Pages dashboard
2. Connect your GitHub repository
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Add environment variable: `VITE_DENO_API_URL=https://your-project.deno.dev`
6. Deploy!

## Function Response

The function returns a JSON response with:
- `message`: Hello message
- `timestamp`: Current timestamp
- `randomNumber`: Random number
- `status`: Success status
- `platform`: Platform identifier
- `runtime`: Runtime identifier
