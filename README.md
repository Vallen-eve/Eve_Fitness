# FitVibe

## Live Demo
[https://eve-fitness.onrender.com] 

## Project Overview
**FitVibe** is a modern fitness website designed to inspire users to stay active and track their progress.  
It provides a clean, motivational interface for workouts, health tips, and membership engagement.  
Built with **React** and **Tailwind CSS**, it focuses on speed, responsiveness, and a consistent user experience across all devices.

---

## Brand Identity

### Color System
- **Primary: #6D28D9 (Violet-700)** — Represents strength, balance, and transformation, symbolizing mental and physical wellness.  
- **Secondary: #C4B5FD (Violet-300)** — Used for background accents and highlights to maintain a friendly, approachable look.  
- **Accent: #FFFFFF (White)** — Adds contrast and clarity, ensuring all text and visuals stand out cleanly.  
- **Text: #1E1B4B (Deep Indigo)** — Used for headings and primary text to create strong visual hierarchy.

### Typography
- **Headings:** `Poppins` — A bold, geometric sans-serif font that conveys energy and confidence, ideal for fitness branding.  
- **Body:** `Inter` — A clean, highly readable font designed for comfortable long-form reading across devices.

---

## Design Decisions

### Layout Adherence
- Grid-based layout using Tailwind’s `flex` and `grid` utilities ensures spacing consistency.  
- Spacing units are based on Tailwind’s 4-point system (`p-4`, `m-4`, etc.), maintaining uniform padding and margins.  
- The design was tested across multiple screen widths to maintain proportional balance from mobile to desktop.

### Creative Departures
- The hero section uses a motivational tagline and call-to-action to connect emotionally with users.  
- Content focuses on empowerment and community rather than generic gym marketing.  
- On medium (MD) breakpoints, the layout stacks key sections vertically for readability while keeping CTAs prominent.

---

## Component Architecture
- **Reusable Components:**  
  - `Navbar` — Navigation and brand consistency.  
  - `Hero` — Tagline, call-to-action, and quick access to programs.  
  - `ProductCard` — Reusable card for workouts, trainers, or gear.  
  - `Login` — Authentication interface with validation and token storage.  
- Each component follows a **props-driven design**, ensuring reusability and modular updates without code repetition.

---

## Performance Optimizations
- Lazy-loaded images to reduce initial load time.  
- Minimized CSS using Tailwind’s JIT compilation.  
- Axios requests optimized with async/await and error handling.  
- LocalStorage used for fast client-side token access.

---

## Image Credits
- All stock fitness images sourced from **Unsplash** and **Pexels**, free for commercial use.  
- Illustrations (if used) from **unDraw**.

---

## Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/fitvibe.git

   cd fitvibe

   npm install

   npm run dev
   ```

  ## Technologies Used

React v18+
* Tailwind CSS v3+
* Axios for API communication
* React Router DOM for page navigation
* Node.js / Express (backend)



## Challenges & Solutions

1.  Login Authentication Errors
* Issue: Axios requests failed due to missing URL schema.
* Solution: Corrected endpoint to http://localhost:3000/login and added proper error handling.
2.  Component Layout Overlap
* Issue: Cards and text overlapped at smaller screen sizes.
* Solution: Implemented Tailwind responsive utilities and adjusted grid flow for md and sm breakpoints.
3. Slow Page Load Due to Images
Solution: Compressed assets and used lazy loading for large visuals.

## Future Improvements

1. Add user dashboard for tracking workouts and progress metrics.

2. Integrate backend authentication (JWT) for secure access and role management.

3. Enable dark mode toggle for better accessibility and customization.

4. Add blog section with expert tips on nutrition and training.
5. Deploy live on Netlify or Vercel with CI/CD pipeline.

© ©2025 Motivana - All rights reserved






