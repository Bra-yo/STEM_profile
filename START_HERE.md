# 🚀 Quick Start Guide - Shallom Sila Website

## 📋 IMPORTANT: Before You Begin

**Node.js is required to run this website!** If you don't have Node.js installed:

1. Download from: https://nodejs.org/
2. Install and restart your computer
3. Verify installation: Open Command Prompt and run `node --version`

## 🎯 Quick Setup (3 Steps)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Environment is Already Configured
The `.env` file is created with your email credentials:
- EMAIL_USER=mutukubrian348@gmail.com  
- EMAIL_PASS=@Yobra7822

### Step 3: Start the Server
```bash
npm start
```

Then open: http://localhost:3000

## 📧 Email Setup Notes

For Gmail, you may need to:
1. Enable 2-factor authentication
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the App Password instead of your regular password

## 🌐 Website Features

✅ **Fully Functional Contact Forms** - Real email sending  
✅ **8 Complete Pages** - Home, About, Vision, Mission, Blog, Contact, Learn More, Partner  
✅ **Responsive Design** - Works on desktop, tablet, and mobile  
✅ **Modern UI/UX** - Professional design with animations  
✅ **Interactive Elements** - Mobile menu, smooth scrolling, counters  
✅ **Production Ready** - Clean code, optimized, secure  

## 📁 What's Included

```
/public/
├── index.html          # Homepage with hero section
├── about.html          # About page with team & values
├── vision.html          # Vision & future goals
├── mission.html         # Mission & approach
├── blog.html           # Blog with posts & categories
├── contact.html         # Contact form (functional!)
├── learn-more.html      # Program details
├── partner.html         # Partnership opportunities
├── styles.css          # Complete styling
└── script.js           # All interactions

/server/
└── server.js          # Express server with email

package.json            # Dependencies
.env                   # Email credentials
README.md              # Full documentation
```

## 🛠️ Customization

### Change Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #0A2540;
    --secondary-color: #00A8A8;
    --accent-color: #F59E0B;
}
```

### Replace Images
Replace placeholder images in `public/images/` and update `src` attributes.

### Update Content
Edit HTML files directly to change text, add pages, or modify content.

## 📱 Testing

Test on different devices:
- **Desktop**: Full experience
- **Tablet**: Responsive layout
- **Mobile**: Optimized navigation

## 🚀 Deployment Options

### Easy Deploy (Vercel)
1. Push to GitHub
2. Connect to Vercel
3. Set environment variables
4. Deploy

### Traditional Hosting
1. Upload files to server
2. Install Node.js on server
3. Run `npm install` and `npm start`

## 🆘 Troubleshooting

**Server won't start?**
- Check Node.js installation: `node --version`
- Install dependencies: `npm install`
- Check if port 3000 is available

**Email not working?**
- Verify Gmail app password setup
- Check firewall settings
- Review server console for errors

**Styles not loading?**
- Check file paths in HTML
- Clear browser cache

## 📞 Need Help?

1. Check the full README.md file
2. Review browser console for errors
3. Verify all steps in this guide

---

🎉 **Your Shallom Sila website is ready to go!**
