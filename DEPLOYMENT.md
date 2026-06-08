# Deployment Guide

## Quick Deployment Options

### 1. Vercel (Recommended - Zero Configuration)

Vercel is the easiest option with automatic deployments from Git.

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (first time)
vercel

# Follow the prompts:
# - Select project directory (current)
# - Confirm project settings
# - Link to GitHub (optional)

# Future deployments
vercel --prod
```

**Link**: Get a unique URL after deployment
**Custom Domain**: Add via Vercel dashboard
**Auto Deployments**: Connect GitHub for CI/CD

### 2. Netlify

Easy drag-and-drop or Git integration.

**Option A: Git Integration (Recommended)**
- Push code to GitHub
- Connect GitHub repo in Netlify dashboard
- Automatic deployments on push

**Option B: Manual Upload**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

### 3. GitHub Pages (Free)

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json:
# "deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

### 4. Traditional Hosting (Hostinger, GoDaddy, etc.)

```bash
# Build the project
npm run build

# Upload dist/ folder contents to your host
# Configure index.html as the default document
# Enable gzip compression on server
```

### 5. Docker Deployment

```dockerfile
# Dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
RUN npm install -g serve
WORKDIR /app
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

```bash
# Build and run
docker build -t archana-portfolio .
docker run -p 3000:3000 archana-portfolio
```

## Environment Configuration

The portfolio doesn't require environment variables by default. However, for advanced features:

```bash
# .env (if needed)
VITE_API_URL=https://your-api.com
VITE_GA_ID=your-google-analytics-id
```

## Pre-Deployment Checklist

- [ ] Update personal information in `src/data.ts`
- [ ] Update project details and links
- [ ] Test dark/light mode switching
- [ ] Test on mobile devices
- [ ] Test all external links (LinkedIn, GitHub, email)
- [ ] Verify resume download button works
- [ ] Run `npm run build` successfully
- [ ] No console errors in browser DevTools
- [ ] Lighthouse score 90+

## Post-Deployment Steps

1. **Test Live Site**
   - Verify all sections load correctly
   - Test navigation and scroll
   - Check dark/light theme toggle
   - Test responsive design

2. **SEO Setup**
   - Submit sitemap to Google Search Console
   - Add Google Analytics (if tracking enabled)
   - Submit to Bing Webmaster Tools

3. **Custom Domain**
   - Purchase domain (Namecheap, GoDaddy, etc.)
   - Point DNS to hosting provider
   - Enable SSL/HTTPS

4. **Analytics (Optional)**
   - Add Google Analytics
   - Monitor traffic and user behavior

5. **Backup**
   - Keep GitHub backup
   - Store source code safely

## Performance Optimization

```bash
# Check bundle size
npm install -g webpack-bundle-analyzer

# Analyze build
npm run build
```

## Troubleshooting

**Issue**: Build fails
- Solution: Run `npm install` again, clear node_modules cache

**Issue**: Images not loading
- Solution: Check image URLs in data, ensure absolute paths

**Issue**: Slow deployment
- Solution: Use CDN, enable caching, optimize images

**Issue**: Theme not persisting
- Solution: Clear browser cache, check localStorage settings

## Monitoring

Monitor your deployed site:
- Google Analytics for traffic
- Sentry for error tracking
- PageSpeed Insights for performance
- Uptime Robot for downtime alerts

## Support

Need help? Check:
- GitHub Issues
- Hosting provider documentation
- Framework documentation (React, Vite, Tailwind)
