# 📸 Image Upload Guide - Shallom Sila Website

## 🗂️ Where to Upload Images

All images should be uploaded to the following folder:
```
/public/images/
```

## 📋 Required Images and Their Locations

### 1. Homepage Images
- **Hero Image**: `public/images/hero-stem-leadership.jpg`
  - Used in: `index.html` line 63
  - Size: 600x400 pixels recommended
  - Content: STEM and Leadership visual

- **Event Posters**: `public/images/event-poster-1.jpg`, `event-poster-2.jpg`, `event-poster-3.jpg`
  - Used in: `index.html` lines 198, 210, 222
  - Size: 400x250 pixels recommended
  - Content: Upcoming event posters/adverts with "Register here" CTAs

- **Partner Logos**: `public/images/databot-logo.png`, `labxchange-logo.png`, `phet-logo.png`, `stem-ecosystem-logo.png`, `copie-logo.png`
  - Used in: `index.html` lines 243, 246, 249, 252, 255
  - Size: 150x80 pixels recommended
  - Format: PNG with transparent background preferred

### 2. About Page Images
- **Profile Photo**: `public/images/shallom-sila-profile.jpg`
  - Used in: `about.html` line 72
  - Size: 500x600 pixels recommended
  - Content: Professional headshot of Shallom Sila

- **Team Photo**: `public/images/shallom-sila-team.jpg`
  - Used in: `about.html` line 90
  - Size: 500x600 pixels recommended
  - Content: Team or organization photo

- **Excellence Photo**: `public/images/recognized-excellence.jpg`
  - Used in: `about.html` line 289
  - Size: 500x400 pixels recommended
  - Content: Awards, recognition, or achievement photos

### 3. Vision Page Images
- **Vision Image**: `public/images/our-vision.jpg`
  - Used in: `vision.html` (hero section)
  - Size: 500x400 pixels recommended
  - Content: Vision-related imagery

### 4. Mission Page Images
- **Mission Image**: `public/images/our-mission.jpg`
  - Used in: `mission.html` (hero section)
  - Size: 500x400 pixels recommended
  - Content: Mission-related imagery

### 5. Contact Page Images
- **Map Image**: `public/images/location-map.jpg`
  - Used in: `contact.html` line 1493
  - Size: 1200x400 pixels recommended
  - Content: Map showing Tala, Machakos County location

### 6. Partner Page Images
- **Partnership Image**: `public/images/building-opportunity.jpg`
  - Used in: `partner.html` line 71
  - Size: 500x400 pixels recommended
  - Content: Partnership/collaboration imagery

- **Partnership Opportunities Image**: `public/images/partnership-opportunities.jpg`
  - Used in: `partner.html` line 113
  - Size: 500x400 pixels recommended
  - Content: Partnership opportunities imagery

### 7. Learn More Page Images
- **Program Images**: Various program-specific images
  - Used in: `learn-more.html` (program sections)
  - Size: 500x400 pixels recommended
  - Content: STEM education, leadership, digital skills, mentorship

## 🔄 How to Update Images

### Step 1: Prepare Your Images
1. **Resize images** to recommended dimensions
2. **Optimize for web** (compress to reduce file size)
3. **Use appropriate formats**:
   - **JPG** for photographs
   - **PNG** for logos and graphics with transparency
   - **WebP** for modern browsers (optional)

### Step 2: Upload Images
1. Navigate to: `public/images/`
2. Upload your images with the exact filenames mentioned above
3. Replace placeholder images with your actual images

### Step 3: Update HTML (if needed)
If you use different filenames, update the `src` attributes in the corresponding HTML files:

**Example:**
```html
<!-- Before -->
<img src="https://via.placeholder.com/600x400/0A2540/FFFFFF?text=STEM+Leadership" alt="STEM and Leadership">

<!-- After -->
<img src="images/hero-stem-leadership.jpg" alt="STEM and Leadership">
```

## 📱 Image Optimization Tips

### File Size Guidelines:
- **Hero images**: Under 200KB
- **Event posters**: Under 100KB
- **Partner logos**: Under 50KB
- **Team photos**: Under 150KB

### Recommended Tools:
- **Online**: TinyPNG, Squoosh, ImageOptim
- **Desktop**: Adobe Photoshop, GIMP, Canva

### Naming Convention:
- Use lowercase letters
- Use hyphens (-) instead of spaces
- Be descriptive but concise
- Example: `shallom-sila-profile.jpg`

## 🎨 Design Guidelines

### Style Consistency:
- Use consistent color scheme with website colors
- Maintain professional, educational tone
- Ensure good contrast and readability
- Use high-quality, sharp images

### Content Guidelines:
- Show diverse groups of students
- Include hands-on learning activities
- Feature technology and innovation
- Highlight leadership and collaboration
- Represent rural and community settings

## ✅ Quality Checklist

Before uploading, ensure your images:
- [ ] Are properly sized and optimized
- [ ] Have appropriate filenames
- [ ] Are high quality and professional
- [ ] Represent the brand values accurately
- [ ] Load quickly on all devices
- [ ] Are accessible (include alt text)

## 🆘 Need Help?

If you need assistance with:
- **Image resizing**: Use online tools like Canva or Adobe Express
- **File optimization**: Use TinyPNG or Squoosh
- **Design consistency**: Follow the website color scheme (navy #0A2540, teal #00A8A8, gold #F59E0B)

---

**📝 Note**: Replace all placeholder images (currently using via.placeholder.com) with your actual images for a professional appearance.
