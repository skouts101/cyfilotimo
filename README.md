# Cyprus Wildfire Support Dashboard

A comprehensive, interactive dashboard showcasing companies and organizations providing support to Cyprus wildfire victims. Built with React and featuring advanced filtering, search capabilities, and mobile-responsive design.

## 🔥 Features

- **79 Organizations** documented with detailed support information
- **€5.60M Financial Aid** tracked and verified
- **Advanced Filtering** by organization type, help type, status, and tags
- **Quick Category Buttons** for popular support types (Veterinary, Financial Aid, etc.)
- **Mobile-Responsive Design** that works perfectly on all devices
- **Real-time Search** with instant results
- **Professional UI** with clean, minimalist design
- **Detailed Modal Views** for each organization

## 📊 Database Coverage

- **32 Veterinary Clinics** across all Cyprus districts
- **Financial Services** companies (XM, IC Markets, Tickmill)
- **Hotels & Hospitality** providers
- **Retail & Supermarkets** offering emergency supplies
- **Healthcare** facilities and services
- **Government & Municipal** support services
- **International Military Support** (UK, Lebanon)
- **NGOs & Community Organizations**
- **Sports Clubs** (ARIS FC)
- **Collection Points** throughout Cyprus

## 🚀 Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/cyprus-wildfire-dashboard)

1. Click the "Deploy with Vercel" button above
2. Connect your GitHub account
3. Import this repository
4. Deploy automatically
5. Get a permanent URL that updates with each push

## 🚀 Quick Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/YOUR_USERNAME/cyprus-wildfire-dashboard)

1. Click the "Deploy to Netlify" button above
2. Connect your GitHub account
3. Import this repository
4. Deploy automatically
5. Get a permanent URL that updates with each push

## 🛠️ Local Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/cyprus-wildfire-dashboard.git
cd cyprus-wildfire-dashboard

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
cyprus-wildfire-dashboard/
├── src/
│   ├── data/
│   │   └── companies.json          # All organization data
│   ├── App.jsx                     # Main application component
│   ├── App.css                     # Styling
│   └── main.jsx                    # Entry point
├── public/
│   └── index.html                  # HTML template
├── package.json                    # Dependencies and scripts
├── vite.config.js                  # Vite configuration
└── README.md                       # This file
```

## 📝 Adding New Organizations

To add new organizations to the dashboard:

1. Open `src/data/companies.json`
2. Add a new object with the following structure:

```json
{
  "id": 80,
  "name": "Organization Name",
  "type": "Organization Type",
  "helpType": "Type of Help Provided",
  "amount": "Support Amount",
  "details": "Detailed description of support",
  "contact": "Contact information",
  "source": "Source URL",
  "date": "Date of announcement",
  "status": "Active/Paused/Completed",
  "tags": ["tag1", "tag2", "tag3"]
}
```

3. Rebuild and deploy

## 🎨 Customization

### Styling
- Modify `src/App.css` for global styles
- Inline styles in `src/App.jsx` for component-specific styling

### Data
- Update `src/data/companies.json` to modify organization information
- Add new filter categories by updating the tag arrays

### Features
- Add new filter types in the App.jsx component
- Modify the search algorithm in the filtering logic
- Add new statistics calculations

## 🔄 Automatic Updates

Once deployed to Vercel or Netlify:

1. Make changes to your local files
2. Commit and push to GitHub
3. Your dashboard automatically updates with the new changes
4. No need to manually redeploy

## 📱 Mobile Optimization

The dashboard is fully optimized for mobile devices:
- Responsive grid layouts
- Touch-friendly buttons and interactions
- Optimized typography for small screens
- Collapsible filter sections

## 🏷️ Available Tags

The dashboard supports filtering by these tags:
- Veterinary, Financial Aid, Accommodation, Emergency Supplies
- Collection Point, Medical Care, Food Service, Animal Care
- And 60+ more specific tags for precise filtering

## 📊 Statistics Tracking

The dashboard automatically calculates:
- Total number of organizations
- Active support providers
- Total confirmed financial aid
- Real-time filtering results

## 🤝 Contributing

To contribute new organizations or improvements:

1. Fork the repository
2. Create a feature branch
3. Add new organizations to `companies.json`
4. Test locally
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 🆘 Support

For questions or support:
- Create an issue on GitHub
- Check the documentation above
- Review the source code for implementation details

## 🔗 Live Demo

Current live version: [Cyprus Wildfire Support Dashboard](https://bmwfyfop.manus.space)

---

**Made with ❤️, Human Spirit and Artificial Intelligence**

*Last Updated: July 26, 2025*

