# Deployment Guide

This guide will help you deploy the Cyprus Wildfire Support Dashboard to various platforms with a consistent URL that updates automatically.

## 🚀 Option 1: Deploy to Vercel (Recommended)

Vercel offers the easiest deployment with automatic updates from GitHub.

### Step-by-Step Instructions:

1. **Create GitHub Repository**
   ```bash
   # Upload this project to GitHub
   git init
   git add .
   git commit -m "Initial commit: Cyprus Wildfire Support Dashboard"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/cyprus-wildfire-dashboard.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a Vite project
   - Click "Deploy"
   - Get your permanent URL (e.g., `cyprus-wildfire-dashboard.vercel.app`)

3. **Automatic Updates**
   - Every time you push to GitHub, Vercel automatically rebuilds and deploys
   - Your URL stays the same forever
   - Changes go live in ~30 seconds

### Custom Domain (Optional)
- In Vercel dashboard, go to your project settings
- Add your custom domain
- Follow DNS configuration instructions

## 🚀 Option 2: Deploy to Netlify

Netlify is another excellent option with similar features.

### Step-by-Step Instructions:

1. **Create GitHub Repository** (same as above)

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login with your GitHub account
   - Click "New site from Git"
   - Choose GitHub and select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"
   - Get your permanent URL (e.g., `amazing-name-123456.netlify.app`)

3. **Automatic Updates**
   - Every push to GitHub triggers automatic deployment
   - URL remains consistent
   - Build logs available in dashboard

### Custom Domain (Optional)
- In Netlify dashboard, go to Domain settings
- Add custom domain
- Follow DNS configuration

## 🚀 Option 3: GitHub Pages

Free hosting directly from GitHub repository.

### Step-by-Step Instructions:

1. **Prepare for GitHub Pages**
   ```bash
   # Install gh-pages package
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Add these scripts:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://YOUR_USERNAME.github.io/cyprus-wildfire-dashboard"
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**
   - Go to your GitHub repository
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Your site will be at: `https://YOUR_USERNAME.github.io/cyprus-wildfire-dashboard`

## 🔄 Making Updates

Once deployed, updating is simple:

### For Vercel/Netlify:
```bash
# Make your changes to the code
# Update src/data/companies.json with new organizations
# Commit and push
git add .
git commit -m "Add new organizations and updates"
git push origin main
# Site automatically updates in ~30 seconds
```

### For GitHub Pages:
```bash
# Make your changes
git add .
git commit -m "Add new organizations and updates"
git push origin main
npm run deploy
# Site updates in ~2-3 minutes
```

## 📝 Adding New Organizations

To add new organizations:

1. **Edit the data file**
   ```bash
   # Open src/data/companies.json
   # Add new organization object at the end of the array
   ```

2. **Organization Template**
   ```json
   {
     "id": 80,
     "name": "New Organization Name",
     "type": "Organization Type",
     "helpType": "Type of Help",
     "amount": "Support Amount",
     "details": "Detailed description",
     "contact": "Contact information",
     "source": "Source URL",
     "date": "July 26, 2025",
     "status": "Active",
     "tags": ["relevant", "tags", "here"]
   }
   ```

3. **Test Locally**
   ```bash
   npm run dev
   # Check that new organization appears correctly
   ```

4. **Deploy**
   ```bash
   git add .
   git commit -m "Add [Organization Name] support"
   git push origin main
   # Automatic deployment happens
   ```

## 🛠️ Troubleshooting

### Build Fails
- Check that all JSON in `companies.json` is valid
- Ensure no trailing commas in JSON
- Verify all required fields are present

### Site Not Updating
- Check build logs in Vercel/Netlify dashboard
- Ensure you pushed to the correct branch (main)
- Wait a few minutes for propagation

### Local Development Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

## 🔗 Platform Comparison

| Platform | Pros | Cons | Best For |
|----------|------|------|----------|
| **Vercel** | Fastest deployment, excellent performance, easy custom domains | Limited build minutes on free plan | Production sites, fast updates |
| **Netlify** | Great features, form handling, edge functions | Slightly slower than Vercel | Feature-rich sites |
| **GitHub Pages** | Completely free, integrated with GitHub | Manual deployment, slower updates | Simple sites, learning |

## 📞 Support

If you encounter issues:

1. Check the platform's documentation (Vercel/Netlify/GitHub)
2. Review build logs for error messages
3. Ensure your local development works first
4. Check that all dependencies are properly installed

## 🎯 Recommended Workflow

1. **Use Vercel** for the main production site
2. **Keep GitHub repository** as source of truth
3. **Test locally** before pushing changes
4. **Use meaningful commit messages** for tracking changes
5. **Monitor build logs** to catch issues early

---

**Your dashboard will be live and automatically updating within minutes!**

