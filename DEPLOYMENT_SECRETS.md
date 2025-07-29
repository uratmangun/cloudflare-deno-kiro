# GitHub Secrets Setup for Deployment

This project uses GitHub Actions to automatically deploy to both Deno Deploy and Cloudflare Pages. You'll need to set up the following secrets in your GitHub repository.

## Required GitHub Secrets

### For Deno Deploy
1. **`DENO_DEPLOY_TOKEN`**
   - Go to [dash.deno.com](https://dash.deno.com)
   - Navigate to Account Settings → Access Tokens
   - Create a new access token
   - Copy the token and add it as a GitHub secret

**Note**: The Deno project name will automatically use your GitHub repository name, so no `DENO_PROJECT_NAME` secret is needed!

### For Cloudflare Pages
3. **`CLOUDFLARE_API_TOKEN`**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/profile/api-tokens)
   - Create a custom token with these permissions:
     - Zone:Zone:Read
     - Zone:Page Rules:Edit
     - Account:Cloudflare Pages:Edit
   - Copy the token and add it as a GitHub secret

4. **`CLOUDFLARE_ACCOUNT_ID`**
   - Found in your Cloudflare dashboard sidebar
   - Or get it from the URL when viewing your account

4. **`ADMIN_TOKEN`** (Optional)
   - GitHub Personal Access Token for updating repository settings
   - Only needed if you want the workflow to update the repository's website URL

## How to Add GitHub Secrets

1. Go to your GitHub repository
2. Click on **Settings** tab
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Add each secret with the exact name and value

## Deployment Flow

The GitHub Action will:

1. **Deploy Deno Function** (runs first)
   - Deploys `functions/hello.ts` to Deno Deploy
   - Creates/updates your Deno Deploy project

2. **Deploy React App** (runs after Deno deployment)
   - Builds the React application
   - Deploys to Cloudflare Pages
   - Updates repository website URL (if ADMIN_TOKEN is provided)

## Environment Variables for Production

After deploying, you'll need to set the Deno Deploy URL in your Cloudflare Pages environment variables:

1. Go to your Cloudflare Pages project dashboard
2. Navigate to **Settings** → **Environment variables**
3. Add: `VITE_DENO_API_URL` = `https://your-deno-project.deno.dev`

## Testing the Deployment

1. Push to main/master branch
2. Check GitHub Actions tab for deployment status
3. Visit your Cloudflare Pages URL
4. Test the "Call Serverless Function" button
5. Verify it calls your Deno Deploy function successfully

## Troubleshooting

- **Deno Deploy fails**: Check your `DENO_DEPLOY_TOKEN` and `DENO_PROJECT_NAME`
- **Cloudflare Pages fails**: Verify `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`
- **Function not found**: Ensure `VITE_DENO_API_URL` is set correctly in Cloudflare Pages
- **CORS issues**: The Deno function includes CORS headers for cross-origin requests
