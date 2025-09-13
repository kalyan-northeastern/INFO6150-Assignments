# Tech Innovation Hub - Assignment 1

## Overview
This website showcases emerging technologies and provides an interactive platform for users to learn about AI, quantum computing, and other cutting-edge innovations. The site demonstrates proper use of HTML5 semantic elements, modern CSS styling, and interactive features.

## Website Structure
The website follows the HTML5 semantic wireframe layout:

```
┌─────────────────────────────────────┐
│              <header>               │
├─────────────────────────────────────┤
│               <nav>                  │
├─────────────────┬───────────────────┤
│                 │                   │
│    <main>        │     <aside>       │
│  ┌─────────┐    │                   │
│  │<section>│    │                   │
│  └─────────┘    │                   │
│  ┌─────────┐    │                   │
│  │<article>│    │                   │
│  └─────────┘    │                   │
│                 │                   │
├─────────────────┴───────────────────┤
│              <footer>               │
└─────────────────────────────────────┘
```

### Files:
- **index.html** - Main HTML file with wireframe-based semantic structure
- **styles.css** - External CSS file with grid layout and CSS-only interactions
- **images/** - Directory containing placeholder image files
- **audio/** - Directory containing audio files
- **video/** - Directory containing video files
- **favicon.ico** - Website favicon

## HTML5 Elements Used

### 1. Favicon
```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
```
**Description**: Small icon displayed in browser tabs and bookmarks for brand recognition.

### 2. Semantic Elements

#### Header
```html
<header>
    <nav>...</nav>
</header>
```
**Description**: Contains the main navigation and site branding. Provides semantic meaning for the top section of the page.

#### Section
```html
<section id="home" class="hero">...</section>
<section id="technologies" class="technologies">...</section>
<section id="contact" class="contact">...</section>
```
**Description**: Groups related content together. Used for hero section, technologies showcase, and contact form.

#### Article
```html
<article class="tech-article">...</article>
```
**Description**: Represents independent, self-contained content. Used for individual technology articles about AI and quantum computing.

#### Aside
```html
<aside class="sidebar">...</aside>
```
**Description**: Contains content that is tangentially related to the main content. Includes quick links, contact info, and media elements.

#### Footer
```html
<footer>...</footer>
```
**Description**: Contains site-wide information like copyright, links, and contact details.

### 3. Table
```html
<table>
    <thead>
        <tr>
            <th>Technology</th>
            <th>Year Introduced</th>
            <th>Impact Level</th>
            <th>Adoption Rate</th>
        </tr>
    </thead>
    <tbody>...</tbody>
</table>
```
**Description**: Displays structured data comparing different AI technologies with their introduction years, impact levels, and adoption rates.

### 4. Form Elements

#### Input Fields
```html
<input type="text" id="name" name="name" required>
<input type="email" id="email" name="email" required>
<input type="password" id="password" name="password" minlength="8">
```
**Description**: 
- **Text input**: For user's full name
- **Email input**: For email address with built-in validation
- **Password input**: For secure password entry with minimum length requirement

#### Datalist
```html
<input list="technologies" id="interest" name="interest">
<datalist id="technologies">
    <option value="Artificial Intelligence">
    <option value="Quantum Computing">
    <option value="Blockchain">
    <option value="IoT">
    <option value="Robotics">
    <option value="Virtual Reality">
</datalist>
```
**Description**: Provides autocomplete suggestions for technology interests, improving user experience.

### 5. Images with Figure and Figcaption
```html
<figure>
    <img src="images/ai-tech.jpg" alt="AI Technology Visualization" width="400" height="250">
    <figcaption>AI systems transforming industries worldwide</figcaption>
</figure>
```
**Description**: Combines images with descriptive captions for better accessibility and content understanding.

### 6. Hyperlinks
```html
<a href="#home">Home</a>
<a href="https://www.nature.com" target="_blank">Nature Technology</a>
```
**Description**: Navigation links within the site and external links to technology resources.

### 7. Buttons
```html
<button class="cta-button">Explore Now</button>
<button type="submit">Send Message</button>
<button type="reset">Clear Form</button>
```
**Description**: Interactive elements for user actions including call-to-action, form submission, and form reset.

### 8. Audio
```html
<audio controls>
    <source src="audio/tech-podcast.mp3" type="audio/mpeg">
    <source src="audio/tech-podcast.ogg" type="audio/ogg">
    Your browser does not support the audio element.
</audio>
```
**Description**: Embedded audio player for tech podcast with multiple format support and fallback message.

### 9. Video
```html
<video width="320" height="240" controls>
    <source src="video/tech-innovation.mp4" type="video/mp4">
    <source src="video/tech-innovation.webm" type="video/webm">
    Your browser does not support the video element.
</video>
```
**Description**: Embedded video player showcasing technology innovation with multiple format support.

### 10. Details and Summary
```html
<details>
    <summary>Learn More About AI Applications</summary>
    <p>AI is being used in healthcare for drug discovery...</p>
</details>
```
**Description**: Collapsible content sections that allow users to expand additional information on demand.

### 11. Contact Information with tel and mailto
```html
<p>📞 Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
<p>📧 Email: <a href="mailto:info@techinnovationhub.com">info@techinnovationhub.com</a></p>
```
**Description**: Clickable contact information that opens default phone and email applications.

## CSS Features
- **Responsive Design**: Mobile-friendly layout with media queries
- **Modern Styling**: Gradient backgrounds, box shadows, and smooth transitions
- **Interactive Elements**: Hover effects and animations
- **Accessibility**: Proper contrast ratios and focus states
- **Grid Layout**: Flexible footer layout using CSS Grid

## CSS-Only Interactive Features
- **Form Validation**: Real-time validation styling for email format and required fields
- **Smooth Scrolling**: Navigation links scroll smoothly to sections
- **Interactive Buttons**: All buttons have click effects and hover animations
- **Form Submission**: CSS animations for form feedback
- **Image Interactions**: Hover effects and scaling animations
- **Details Toggle**: Enhanced details/summary elements with CSS animations
- **Table Interactions**: Hover effects on table rows with scaling
- **Media Controls**: Enhanced audio/video player styling
- **Navigation States**: Active link highlighting and section targeting
- **Responsive Interactions**: Mobile-optimized button and hover effects

## File Structure
```
kalyan/
├── index.html          # Main HTML file
├── styles.css          # External CSS stylesheet with interactions
├── favicon.ico         # Website favicon
├── images/             # Image assets
│   ├── ai-tech.jpg
│   └── quantum-computing.jpg
├── audio/              # Audio files
│   └── tech-podcast.mp3
├── video/              # Video files
│   └── tech-innovation.mp4
└── README.md           # This documentation file
```

## Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

---
**Assignment 1 - Tech Innovation Hub**  
*Exploring tomorrow's technology today*
