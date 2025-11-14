# Quick Start Guide - Using the Organized Code

## 📁 Finding Things

### I want to change button styling
→ Open `css/header.css` or `css/contact.css`

### I want to modify the video player
→ Open `js/videos.js` and `css/videos.css`

### I want to adjust responsive design
→ Open `css/responsive.css`

### I want to change colors
→ Open `css/variables.css` and modify the `:root` section

### I want to update contact form
→ JS: `js/contact.js` | CSS: `css/contact.css`

### I want to fix the hamburger menu
→ JS: `js/menu.js` | CSS: `css/menu.css`

### I want to modify gallery
→ JS: `js/gallery.js` | CSS: `css/gallery.css`

### I want to change stats counters
→ JS: `js/counters.js` | CSS: `css/content.css`

---

## 🎨 CSS Modifications Examples

### Change primary color
**File: `css/variables.css`**
```css
:root {
  --primary: #1a5f7a;  /* Change this color */
  /* Rest stays same */
}
```

### Modify button styling
**File: `css/header.css` or `css/contact.css`**
```css
.cta-btn {
  background: var(--secondary);  /* Uses variable */
  /* Modify properties here */
}
```

### Add new responsive breakpoint
**File: `css/responsive.css`**
```css
@media (max-width: 320px) {
  /* Add your new breakpoint rules */
}
```

---

## 🔧 JavaScript Modifications Examples

### Add new toast notification
**File: `js/contact.js`**
```javascript
showIslamicToast("Your message", "success");
// success, error, or info
```

### Modify counter animation
**File: `js/counters.js`**
```javascript
export function animateCounter(id, endValue) {
  // Modify timing, effects, etc.
}
```

### Add new video
**File: `index.html`**
```html
<div class="video-card" data-video-id="VIDEO_ID">
  <!-- Just add with new video ID -->
</div>
```

---

## ➕ Adding New Features

### Add new CSS section

1. Create new file: `css/new-feature.css`
2. Add CSS rules for your component
3. Link in `index.html`:
   ```html
   <link rel="stylesheet" href="css/new-feature.css">
   ```

### Add new JavaScript feature

1. Create new file: `js/new-feature.js`
   ```javascript
   export function initNewFeature() {
     // Your code here
   }
   ```

2. Import in `js/main.js`:
   ```javascript
   import { initNewFeature } from './new-feature.js';
   ```

3. Call in DOMContentLoaded:
   ```javascript
   document.addEventListener('DOMContentLoaded', function() {
     // ... existing code ...
     initNewFeature();
   });
   ```

---

## 🐛 Debugging Tips

### JavaScript isn't working?
1. Check browser console for errors
2. Verify function is exported and imported
3. Check that module is called in `main.js`
4. Look in appropriate `js/` module file

### CSS isn't applying?
1. Check browser DevTools (Elements tab)
2. Verify CSS file is linked in HTML head
3. Check CSS specificity (lower is better)
4. Clear browser cache if needed

### Responsive design broken?
1. Check `css/responsive.css`
2. Test at specific breakpoints
3. Use browser DevTools device mode
4. Verify media query is correct

---

## 📚 Module Reference

### counters.js
- Animates stat counters on scroll
- Creates particle effects
- Call: `initCounters()` ✓ (already in main.js)

### videos.js
- Handles video modal popup
- YouTube integration
- Call: `initVideoModal()` ✓ (already in main.js)

### gallery.js
- Creates lightbox for images
- Click to enlarge, ESC to close
- Call: `initGallery()` ✓ (already in main.js)

### contact.js
- Form submission handling
- Toast notifications
- Call: `initContactForm()` ✓ (already in main.js)

### menu.js
- Hamburger menu functionality
- Mobile & desktop menus
- Call: `initHamburgerMenu()` ✓ (already in main.js)

### utils.js
- Smooth scrolling
- Scroll animations
- Floating verses
- CTA button effects
- Calls: Multiple ✓ (already in main.js)

### hadiths.js
- Hadith modal with data
- Random hadith display
- Call: `initHadithModal()` ✓ (already in main.js)

---

## 🎯 Common Tasks

### Change hero section text
→ Edit `index.html` hero section directly

### Add new navigation link
→ Edit `index.html` nav-links section

### Modify footer text
→ Edit `index.html` footer section directly

### Change animation speed
→ Find the speed in relevant `css/` file
→ Look for `transition: ___s ease;`

### Add new social media icon
→ Add link in `footer` in `index.html`
→ Modify `css/footer.css` if needed

---

## 📊 File Size Reference

After organization:
- `css/variables.css` - ~50 lines
- `css/header.css` - ~150 lines
- `css/menu.css` - ~200 lines
- `css/content.css` - ~130 lines
- `css/videos.css` - ~120 lines
- `css/books.css` - ~130 lines
- `css/gallery.css` - ~30 lines
- `css/contact.css` - ~100 lines
- `css/footer.css` - ~100 lines
- `css/hadiths.css` - ~150 lines
- `css/responsive.css` - ~400 lines

Each JS module: 50-150 lines (vs 600+ in one file)

---

## ✅ Validation

### Is everything working?
- [ ] Navigation links work
- [ ] Videos play in modal
- [ ] Gallery images enlarge
- [ ] Contact form submits
- [ ] Menu opens/closes
- [ ] Counters animate
- [ ] Responsive design works
- [ ] No JavaScript errors in console

---

## 🆘 Need Help?

Check these files:
1. `ORGANIZATION.md` - Detailed structure
2. `DIRECTORY_STRUCTURE.txt` - File locations
3. `CODE_ORGANIZATION_SUMMARY.txt` - Overview

---

**Remember:** All your features are preserved and working! You've just organized the code for better maintainability.
