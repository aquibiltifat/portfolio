# Portfolio Code Organization Guide

## 📁 Project Structure

```
portfolio/
├── index.html              # Main entry point
├── css/                    # Organized CSS modules
│   ├── variables.css      # CSS custom properties & base styles
│   ├── header.css         # Navigation & hero section
│   ├── menu.css           # Desktop & mobile menu styles
│   ├── content.css        # Main content & details section
│   ├── videos.css         # Video cards & modal styles
│   ├── books.css          # Book display styles
│   ├── gallery.css        # Gallery & image styles
│   ├── contact.css        # Contact form styles
│   ├── footer.css         # Footer & social links
│   ├── hadiths.css        # Hadith modal styles
│   └── responsive.css     # Media queries & breakpoints
├── js/                    # Organized JavaScript modules
│   ├── main.js           # Main entry point - imports all modules
│   ├── counters.js       # Stats counter animation
│   ├── videos.js         # Video modal functionality
│   ├── gallery.js        # Gallery lightbox functionality
│   ├── contact.js        # Contact form & toast notifications
│   ├── menu.js           # Hamburger menu logic
│   ├── utils.js          # Utility functions (scroll, animations, effects)
│   └── hadiths.js        # Hadith modal data & functionality
└── assets/               # For future images/files organization
```

## 🎨 CSS Organization

### variables.css
- Color scheme (primary, secondary, accent colors)
- Shadow utilities
- Base HTML/body styles
- Background gradients

### header.css
- Navigation bar styling
- Hero section layout
- Profile image
- Hero title & subtitle
- CTA button with effects

### menu.css
- Desktop hamburger menu
- Mobile hamburger menu
- Menu animations & transitions
- Responsive menu display logic

### content.css
- Main content container
- Section titles & dividers
- Stats counters layout
- Personal details section
- List styling with checkmarks

### videos.css
- Video card grid layout
- Video thumbnail & play button
- Video modal popup
- Responsive video sizing

### books.css
- Book item layout
- Book cover styling
- Book details & metadata
- Action buttons styling
- Book badge positioning

### gallery.css
- Masonry grid layout
- Image hover effects
- Image aspect ratio

### contact.css
- Contact form container
- Form input & textarea styling
- Form button with effects
- Focus states & animations

### footer.css
- Footer layout & gradient
- Social media links
- WhatsApp floating button
- Pulse animation

### hadiths.css
- Hadith modal styling
- Hadith text & source formatting
- Floating hadith button
- Modal animations

### responsive.css
- All media queries (1024px, 900px, 768px, 600px, 480px, 360px)
- Responsive typography
- Responsive grid adjustments
- Mobile-friendly layouts

## 🔧 JavaScript Organization

### main.js
**Entry point for the entire application**
- Imports all modules
- Initializes all features on DOM load
- Manages page-wide animations

### counters.js
**Stats counter animations**
- `initCounters()` - Triggers counter animation on scroll
- `animateCounter()` - Animates individual counters
- `createParticles()` - Creates floating particle effects

### videos.js
**Video modal & YouTube integration**
- `initVideoModal()` - Sets up video card click handlers
- Opens/closes video modal
- Plays YouTube videos in modal
- Keyboard shortcut support (ESC to close)

### gallery.js
**Gallery lightbox functionality**
- `initGallery()` - Sets up image click handlers
- Creates dynamic lightbox overlay
- Image zoom animations
- Close with ESC or click outside

### contact.js
**Contact form & notifications**
- `initContactForm()` - Form submission handler
- `showIslamicToast()` - Toast notification system
- Different styles for success/error/info messages
- Auto-dismiss functionality

### menu.js
**Hamburger menu logic**
- `initHamburgerMenu()` - Initializes all menu types
- `createMenuParticles()` - Particle effects on menu open
- Handles menu closes (links, ESC, outside click)
- Manages body overflow scroll

### utils.js
**Utility functions & general animations**
- `initSmoothScroll()` - Smooth scrolling for anchor links
- `initScrollAnimations()` - Scroll-triggered element animations
- `initFloatingVerses()` - Floating Quran verses on scroll
- `initCTAButton()` - Ripple effect on CTA button
- `addRippleAnimation()` - Adds ripple CSS animation

### hadiths.js
**Hadith modal & data**
- Hadith data array with text & sources
- `initHadithModal()` - Sets up hadith modal functionality
- Displays random hadith on page load
- Floating button to show new hadith

## 🚀 How to Use

### Adding New Features
1. Create a new CSS file in `css/` folder following the naming pattern
2. Create a new JS module in `js/` folder
3. Export initialization function from the JS module
4. Import and call it in `js/main.js`
5. Add CSS link to `index.html` head

### Modifying Existing Styles
- Find the relevant CSS file based on the component
- Make changes in the specific module
- Media queries are in `responsive.css`

### Adding New JavaScript
- Create feature in its own module
- Use ES6 export/import syntax
- Keep functions focused and single-purpose
- Document with comments

## 📱 Responsive Breakpoints

- **1024px** - Tablet/Desktop transition
- **900px** - Tablet adjustments
- **768px** - Large mobile
- **600px** - Mobile devices
- **480px** - Small mobile
- **360px** - Extra small devices

## 🎯 Key Features

### Performance
- Modular CSS for better caching
- Tree-shakeable JavaScript modules
- Optimized animations with CSS transforms
- Intersection Observer for scroll animations

### Maintainability
- Clear folder structure
- Separated concerns (CSS by component)
- Named modules for easy debugging
- Comments for complex logic

### Scalability
- Easy to add new pages
- Simple to extend functionality
- Reusable utility functions
- Consistent naming conventions

## 🔍 Best Practices

1. **CSS Specificity**: Keep specificity low, use class selectors
2. **JavaScript**: Use const/let, avoid global variables
3. **Naming**: Use descriptive names for classes and functions
4. **Comments**: Document complex logic and non-obvious code
5. **Modular**: Keep modules focused on single responsibility

## ⚙️ Development Tips

- Use browser DevTools to debug CSS and JavaScript
- Test responsive design at all breakpoints
- Use `console.log()` for debugging JavaScript
- Validate HTML for accessibility
- Test on real mobile devices

## 📚 Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: Latest versions

---

**Last Updated**: November 2025
**Organization Pattern**: Feature-based modular structure
