# Deployment Guide

This guide will help you deploy your monolithic terminal portfolio application to various platforms.

## Prerequisites

1. Build the application:
   ```bash
   npm run build
   ```
2. Ensure all environment variables are set (create a `.env` file or set them in your deployment platform)

## Deployment Options

### ⭐ Option 1: Render (Recommended - Best for Monolithic Apps)

Render is perfect for monolithic Express applications. It's free for static sites and has a generous free tier for web services.

**Why Render?**
- ✅ Native support for Node.js/Express apps
- ✅ Simple deployment process
- ✅ Free tier available
- ✅ Automatic HTTPS
- ✅ No special configuration needed

#### Steps:

1. **Create a Render Account**: Sign up at [render.com](https://render.com)

2. **Create a New Web Service**:
   - Connect your GitHub repository
   - Select "Web Service"
   - Choose Node.js

3. **Configure Settings**:
   - **Name**: `terminal-portfolio` (or your preferred name)
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Health Check Path**: `/healthz`

4. **Set Environment Variables**:
   - `NODE_ENV=production`
   - `PORT=5000` (Render will auto-assign, but this is for fallback)
   - `CORS_ORIGIN=https://your-app.onrender.com` (update after deployment)

5. **Deploy**: Click "Create Web Service"

#### Using render.yaml (Alternative - Recommended)

The `render.yaml` file is already configured. Just:
1. Push `render.yaml` to your repository
2. Render will automatically detect and use it
3. No manual configuration needed!

### Option 2: Vercel (Requires Serverless Adaptation)

Vercel works best with serverless functions. For monolithic Express apps, Render or Railway are better choices.

#### Steps:

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```
   Or connect your GitHub repository to Vercel for automatic deployments.

3. **Configure Environment Variables**:
   - Go to your project settings in Vercel dashboard
   - Add environment variables:
     - `NODE_ENV=production`
     - `PORT=5000` (Vercel auto-assigns, but set if needed)
     - `CORS_ORIGIN=https://your-app.vercel.app`

4. **Build Settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist/public`
   - Install Command: `npm install`

### Option 3: Railway (Also Great for Monolithic Apps)

Railway offers simple deployments with automatic HTTPS.

#### Steps:

1. **Install Railway CLI**:
   ```bash
   npm i -g @railway/cli
   ```

2. **Login**:
   ```bash
   railway login
   ```

3. **Initialize Project**:
   ```bash
   railway init
   ```

4. **Set Environment Variables**:
   ```bash
   railway variables set NODE_ENV=production
   railway variables set PORT=5000
   railway variables set CORS_ORIGIN=https://your-app.up.railway.app
   ```

5. **Deploy**:
   ```bash
   railway up
   ```

### Option 4: Heroku

#### Steps:

1. **Install Heroku CLI**:
   ```bash
   npm i -g heroku
   ```

2. **Login**:
   ```bash
   heroku login
   ```

3. **Create App**:
   ```bash
   heroku create your-portfolio-name
   ```

4. **Set Buildpacks**:
   ```bash
   heroku buildpacks:set heroku/nodejs
   ```

5. **Set Environment Variables**:
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set PORT=5000
   heroku config:set CORS_ORIGIN=https://your-portfolio-name.herokuapp.com
   ```

6. **Deploy**:
   ```bash
   git push heroku main
   ```

### Option 5: DigitalOcean App Platform

#### Steps:

1. **Create Account**: Sign up at [DigitalOcean](https://www.digitalocean.com)

2. **Create App**:
   - Connect your GitHub repository
   - Select "Web Service"
   - Choose Node.js

3. **Configure**:
   - **Build Command**: `npm install && npm run build`
   - **Run Command**: `npm start`
   - **HTTP Port**: `5000`

4. **Environment Variables**:
   - `NODE_ENV=production`
   - `PORT=5000`
   - `CORS_ORIGIN=https://your-app.ondigitalocean.app`

## Environment Variables

Create a `.env` file (or set in your deployment platform):

```env
NODE_ENV=production
PORT=5000
CORS_ORIGIN=https://your-deployed-url.com
```

## Build & Deploy Checklist

- [ ] Run `npm run build` locally to ensure it builds successfully
- [ ] Test the production build locally: `npm start`
- [ ] Set all required environment variables
- [ ] Update `CORS_ORIGIN` to match your deployment URL
- [ ] Update project live demo links in `server/storage.ts`
- [ ] Push code to GitHub/GitLab
- [ ] Deploy to chosen platform
- [ ] Verify API endpoint: `https://your-url.com/api/v1/portfolio`
- [ ] Verify homepage loads correctly
- [ ] Test all terminal commands

## Troubleshooting

### Common Issues

1. **Build Fails**:
   - Check Node.js version (should be 18+)
   - Ensure all dependencies are in `package.json`
   - Run `npm install` before building

2. **API Returns 404**:
   - Check routing configuration
   - Verify API routes are set up correctly
   - Check server logs

3. **Static Files Not Loading**:
   - Verify `dist/public` directory exists after build
   - Check static file serving configuration
   - Ensure build output directory is correct

4. **CORS Errors**:
   - Update `CORS_ORIGIN` environment variable
   - Check server middleware configuration

5. **Port Issues**:
   - Most platforms auto-assign ports
   - Use `process.env.PORT` (already configured)
   - Check platform-specific port configuration

## Updating Live Demo Links

After deploying, update the `link` field in each project in `server/storage.ts`:

```typescript
{
  id: "1",
  title: "Your Project",
  // ... other fields
  link: "https://your-actual-demo-url.com", // Update this
}
```

Then rebuild and redeploy.

## Custom Domain

After deployment, most platforms allow you to add a custom domain:

1. Add domain in platform settings
2. Update DNS records as instructed
3. Update `CORS_ORIGIN` environment variable
4. Redeploy if necessary

## Continuous Deployment

Most platforms support automatic deployments from Git:

- **Vercel**: Connect GitHub repo → Auto-deploy on push
- **Render**: Connect GitHub repo → Auto-deploy on push
- **Railway**: Connect GitHub repo → Auto-deploy on push
- **Heroku**: Use Git-based deployment or GitHub integration

## Recommendations

- **⭐ Best for Monolithic Apps**: **Render** or **Railway** (easiest setup, no special config needed)
- **For Free Tier**: Render or Railway (both offer free tiers)
- **For Simple Setup**: Railway (automatic HTTPS, zero config)
- **For Serverless**: Vercel (requires adapting Express app to serverless)
- **For Enterprise**: DigitalOcean or AWS

---

Need help? Check the platform-specific documentation or create an issue in your repository.
