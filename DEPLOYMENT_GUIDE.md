# 🚀 Deployment Guide - Mbonyii Portfolio

This guide will walk you through deploying your portfolio to **Vercel (Frontend)** and **Render (Backend)**.

## 📋 Prerequisites

1. **GitHub Account** - Your code should be pushed to GitHub
2. **Vercel Account** - Sign up at [vercel.com](https://vercel.com)
3. **Render Account** - Sign up at [render.com](https://render.com)

---

## 🗂️ Project Structure

Your project is organized as:
```
root/
 ├─ client/     (React Frontend)
 ├─ server/     (Express Backend)
 └─ shared/     (Shared Types)
```

---

## 📝 Step 1: Push to GitHub

If not already done, push your project to GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

**Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub details.**

---

## 🔧 Step 2: Deploy Backend to Render

### 2.1 Create Render Account & Service

1. Go to [render.com](https://render.com) and sign up/login
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub account if prompted
4. Select your repository: `MbonyiiPortfolio` (or your repo name)

### 2.2 Configure Render Service

Use these settings:

| Setting | Value |
|---------|-------|
| **Name** | `mbonyii-portfolio-api` |
| **Environment** | `Node` |
| **Region** | Choose closest to you (e.g., `Oregon (US West)`) |
| **Branch** | `main` |
| **Root Directory** | *(leave empty - uses root)* |
| **Build Command** | `env NODE_ENV=development npm install && npm run build` |
| **Start Command** | `npm start` |

### 2.3 Set Environment Variables

In the Render dashboard, go to **Environment** tab and add:

| Key | Value | Notes |
|-----|-------|-------|
| `NODE_ENV` | `production` | Required |
| `PORT` | `5000` | Render sets this automatically, but good to have |
| `CORS_ORIGIN` | `*` | We'll update this after frontend is deployed |

### 2.4 Deploy

1. Click **"Create Web Service"**
2. Wait for deployment (takes 5-10 minutes)
3. Once deployed, you'll get a URL like: `https://mbonyii-portfolio-api.onrender.com`
4. **Save this URL** - you'll need it for the frontend!

### 2.5 Test Backend

Visit: `https://your-api-url.onrender.com/healthz`

You should see: `{"status":"ok"}`

---

## 🎨 Step 3: Deploy Frontend to Vercel

### 3.1 Create Vercel Account & Project

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository: `MbonyiiPortfolio`

### 3.2 Configure Vercel Project

Use these settings:

| Setting | Value |
|---------|-------|
| **Framework Preset** | `Vite` (or `Other`) |
| **Root Directory** | *(leave as root - we build from root)* |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist/public` |
| **Install Command** | `npm install` |

### 3.3 Set Environment Variables

In Vercel dashboard, go to **Settings** → **Environment Variables** and add:

| Key | Value | Notes |
|-----|-------|-------|
| `VITE_API_URL` | `https://your-api-url.onrender.com` | **Replace with your actual Render URL** |

**Important:** Use the Render URL you got from Step 2.4 (without trailing slash)

### 3.4 Deploy

1. Click **"Deploy"**
2. Wait for deployment (takes 2-5 minutes)
3. Once deployed, you'll get a URL like: `https://mbonyii-portfolio.vercel.app`
4. **Save this URL** - you'll need it to update CORS!

---

## 🔐 Step 4: Update CORS on Render

Now that both are deployed, we need to allow your Vercel frontend to access the Render backend.

1. Go back to **Render Dashboard** → Your service → **Environment** tab
2. Update the `CORS_ORIGIN` variable:
   - **Old value:** `*`
   - **New value:** `https://your-portfolio.vercel.app` (your actual Vercel URL)
3. Click **"Save Changes"**
4. Render will automatically redeploy with the new CORS settings

**Alternative:** If you want to allow multiple origins, use comma-separated values:
```
https://your-portfolio.vercel.app,https://your-custom-domain.com
```

---

## ✅ Step 5: Verify Deployment

### Test Frontend
1. Visit your Vercel URL: `https://your-portfolio.vercel.app`
2. The portfolio should load and fetch data from the backend
3. Check browser console for any errors

### Test Backend API
1. Visit: `https://your-api-url.onrender.com/api/v1/portfolio`
2. You should see JSON data with your portfolio information

### Test Integration
1. Open your Vercel site
2. Open browser DevTools → Network tab
3. You should see a successful request to `/api/v1/portfolio`
4. The portfolio data should display correctly

---

## 🔄 Step 6: Future Updates

### Updating Your Portfolio

1. **Make changes** to your code locally
2. **Commit and push** to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```
3. **Both platforms auto-deploy:**
   - Vercel detects the push and redeploys frontend
   - Render detects the push and redeploys backend

### Updating Environment Variables

- **Vercel:** Settings → Environment Variables → Edit
- **Render:** Environment tab → Edit → Save (auto-redeploys)

---

## 🐛 Troubleshooting

### Frontend can't connect to backend

**Symptoms:** Network errors, CORS errors, or "Failed to load data"

**Solutions:**
1. Check `VITE_API_URL` in Vercel matches your Render URL exactly
2. Check `CORS_ORIGIN` in Render includes your Vercel URL
3. Verify backend is running: visit `https://your-api.onrender.com/healthz`
4. Check browser console for specific error messages

### Backend not starting

**Symptoms:** Render shows "Build failed" or "Service unavailable"

**Solutions:**
1. Check Render logs: Dashboard → Your service → Logs
2. Verify `npm start` works locally: `npm run build && npm start`
3. Check `PORT` environment variable (Render sets this automatically)
4. Ensure `dist/index.js` exists after build

### Build fails with "husky: not found" or "vite: not found"

**Symptoms:** Build fails during `npm install` or `npm run build`

**Solutions:**
1. ✅ **Fixed in latest code** - The `prepare` script now handles missing husky gracefully
2. Ensure Render is installing devDependencies (they're needed for build)
3. Verify build command in Render: `npm ci || npm install && npm run build`
4. Check that `vite` and `esbuild` are in `devDependencies` in `package.json`

### Build fails on Vercel

**Symptoms:** Vercel deployment fails

**Solutions:**
1. Check Vercel build logs for errors
2. Verify `outputDirectory` is `dist/public`
3. Ensure `npm run build` works locally
4. Check that all dependencies are in `package.json`

### Images not loading

**Symptoms:** Images show broken or don't display

**Solutions:**
1. Ensure images are in `client/public/images/`
2. Check image paths in `storage.ts` match actual file locations
3. Verify images are committed to Git (not in `.gitignore`)

---

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Render Documentation](https://render.com/docs)
- [CORS Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

---

## 🎉 You're Done!

Your portfolio is now live! Share your Vercel URL with the world.

**Frontend:** `https://your-portfolio.vercel.app`  
**Backend API:** `https://your-api.onrender.com`

---

## 💡 Optional: Custom Domain

### Vercel Custom Domain
1. Go to Vercel → Your Project → Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### Render Custom Domain
1. Go to Render → Your Service → Settings → Custom Domains
2. Add your custom domain
3. Update CORS_ORIGIN to include your custom domain

---

**Need help?** Check the logs on both platforms or review the troubleshooting section above.

