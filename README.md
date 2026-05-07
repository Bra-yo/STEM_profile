# Shallom Sila - STEM & Leadership Initiative Website

A complete, production-ready website for the Shallom Sila STEM and Leadership initiative, featuring modern design, responsive layout, and functional contact forms with email integration.

## 🚀 Features

- **Modern, Responsive Design**: Built with HTML5, CSS3, and JavaScript
- **Professional UI/UX**: Clean design with smooth animations and transitions
- **Functional Contact Forms**: Real email sending using Nodemailer
- **Multiple Pages**: Home, About, Vision, Mission, Blog, Contact, Learn More, Partner
- **Mobile-Friendly**: Fully responsive design that works on all devices
- **Interactive Elements**: Animated counters, smooth scrolling, mobile navigation
- **SEO Optimized**: Semantic HTML5 structure and proper meta tags

## 📁 Project Structure

```
/project-root
├── public/
│   ├── images/           # Image assets (placeholder images included)
│   ├── index.html        # Homepage
│   ├── about.html        # About page
│   ├── vision.html        # Vision page
│   ├── mission.html       # Mission page
│   ├── blog.html         # Blog page
│   ├── contact.html      # Contact page with functional form
│   ├── learn-more.html    # Programs details page
│   ├── partner.html       # Partnership page
│   ├── styles.css        # Main stylesheet
│   └── script.js        # JavaScript functionality
├── server/
│   └── server.js        # Node.js/Express backend
├── package.json         # Dependencies and scripts
├── .env               # Environment variables (email credentials)
└── README.md          # This file
```

## 🛠️ Technology Stack

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations and transitions
- **JavaScript (ES6+)**: Interactive features and form handling
- **Google Fonts**: Inter font family
- **Font Awesome**: Icon library

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **Nodemailer**: Email sending functionality
- **dotenv**: Environment variable management

## 🎨 Design System

### Colors
- **Primary**: #0A2540 (deep navy)
- **Secondary**: #00A8A8 (teal)
- **Accent**: #F59E0B (gold/orange)
- **Background**: #F9FAFB (light gray)
- **Text**: #1F2937 (primary), #6B7280 (secondary)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

## 📋 Prerequisites

Before running this project, you need to have **Node.js** and **npm** installed on your system.

### Install Node.js
1. Download Node.js from [https://nodejs.org/](https://nodejs.org/)
2. Run the installer and follow the setup instructions
3. Verify installation by opening terminal/command prompt and running:
   ```bash
   node --version
   npm --version
   ```

## 🚀 Installation & Setup

### 1. Clone or Download the Project
If you have this project in a folder, navigate to it:
```bash
cd path/to/STEM_profile
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
The `.env` file is already created with your email credentials:
```
EMAIL_USER=mutukubrian348@gmail.com
EMAIL_PASS=@Yobra7822
PORT=3000
```

**Important**: Make sure the email password is correct and the Gmail account has:
- Less secure app access enabled, OR
- App passwords configured (recommended for Gmail)

### 4. Start the Server
```bash
npm start
```

Or directly:
```bash
node server/server.js
```

### 5. Access the Website
Open your browser and navigate to:
```
http://localhost:3000
```

## 📧 Email Configuration

### Gmail Setup (Recommended)
1. Enable 2-factor authentication on your Gmail account
2. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Generate a new app password for "Mail"
4. Use this app password in the `EMAIL_PASS` field

### Alternative Email Services
Update the transporter configuration in `server/server.js`:

```javascript
const transporter = nodemailer.createTransport({
    service: 'outlook', // or 'yahoo', 'hotmail', etc.
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});
```

## 🌐 Website Pages

### 1. Homepage (`index.html`)
- Hero section with call-to-action buttons
- Programs showcase
- About preview
- Impact statistics with animated counters
- Partner logos
- Upcoming events

### 2. About Page (`about.html`)
- Organization story and history
- Core values
- Team member profiles
- Awards and recognition

### 3. Vision Page (`vision.html`)
- Future vision statement
- Key vision areas
- Future goals timeline
- Impact vision by 2030

### 4. Mission Page (`mission.html`)
- Mission statement
- Core mission pillars
- Implementation approach
- Success metrics

### 5. Blog Page (`blog.html`)
- Featured post
- Blog posts grid
- Categories
- Newsletter subscription

### 6. Contact Page (`contact.html`)
- Contact information
- Functional contact form with email sending
- FAQ section
- Social media links

### 7. Learn More Page (`learn-more.html`)
- Detailed program information
- Program schedules
- Enrollment process
- Call-to-action

### 8. Partner Page (`partner.html`)
- Partnership opportunities
- Current partners showcase
- Partnership process
- Partnership inquiry form

## 🔧 Customization

### Updating Images
Replace placeholder images in the `public/images/` folder and update the `src` attributes in HTML files.

### Changing Colors
Update CSS variables in `styles.css`:
```css
:root {
    --primary-color: #0A2540;
    --secondary-color: #00A8A8;
    --accent-color: #F59E0B;
    /* ... other variables */
}
```

### Adding New Pages
1. Create new HTML file in `public/` folder
2. Copy navigation structure from existing pages
3. Add link to navigation menu in all pages
4. Include `styles.css` and `script.js`

## 📱 Responsive Design

The website is fully responsive and works on:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy

### Deploy to Heroku
1. Install Heroku CLI
2. Create Heroku app
3. Push code to Heroku
4. Configure environment variables

### Deploy to Traditional Hosting
1. Build the project
2. Upload files to server
3. Install Node.js on server
4. Start the server using PM2 or similar

## 🔒 Security Features

- Environment variables for sensitive data
- Input validation and sanitization
- CORS configuration
- Rate limiting (can be added)
- HTTPS support (in production)

## 📊 Performance Optimization

- Lazy loading for images
- Minified CSS and JavaScript
- Optimized images
- Efficient DOM manipulation
- Debounced scroll events

## 🐛 Troubleshooting

### Common Issues

1. **Server won't start**
   - Check if Node.js is installed
   - Verify dependencies are installed
   - Check if port 3000 is available

2. **Email not sending**
   - Verify email credentials in `.env`
   - Check Gmail app password setup
   - Ensure firewall isn't blocking SMTP

3. **Styles not loading**
   - Check file paths in HTML
   - Verify CSS file exists in `public/` folder

4. **JavaScript not working**
   - Check browser console for errors
   - Verify script path in HTML
   - Ensure no syntax errors

## 📞 Support

For issues or questions:
1. Check this README file
2. Review browser console for errors
3. Verify all dependencies are installed
4. Check server logs for backend issues

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Built with ❤️ for Shallom Sila STEM & Leadership Initiative**
