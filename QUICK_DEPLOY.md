# ⚡ Quick Deployment Checklist

## ✅ Pre-Deployment Checklist

- [ ] Code is pushed to GitHub
- [ ] All changes are committed
- [ ] You have accounts on Vercel and Render

---

## 🚀 Deployment Steps (15-20 minutes)

### 1️⃣ Backend on Render (5-10 min)

1. Go to [render.com](https://render.com) → **New Web Service**
2. Connect GitHub → Select your repo
3. Configure:
   - **Name:** `mbonyii-portfolio-api`
   - **Build:** `npm install && npm run build`
   - **Start:** `npm start`
4. Add Environment Variables:
   - `NODE_ENV` = `production`
   - `CORS_ORIGIN` = `*` (update after frontend deploy)
5. **Deploy** → Copy the URL (e.g., `https://mbonyii-portfolio-api.onrender.com`)

### 2️⃣ Frontend on Vercel (5-10 min)

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import your GitHub repo
3. Configure:
   - **Framework:** Vite (or Other)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist/public`
4. Add Environment Variable:
   - `VITE_API_URL` = `https://your-render-url.onrender.com` (from step 1)
5. **Deploy** → Copy the URL (e.g., `https://mbonyii-portfolio.vercel.app`)

### 3️⃣ Update CORS (2 min)

1. Go back to Render → Your service → **Environment**
2. Update `CORS_ORIGIN` to your Vercel URL
3. Save → Auto-redeploys

---

## 🧪 Test

- Frontend: Visit your Vercel URL
- Backend: Visit `https://your-api.onrender.com/healthz`
- API: Visit `https://your-api.onrender.com/api/v1/portfolio`

---

## 📖 Full Guide

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions and troubleshooting.

---

## 🔄 Updates

Just push to GitHub → Both platforms auto-deploy!

```bash
git add .
git commit -m "Update portfolio"
git push
```

