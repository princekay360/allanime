# DESIGNER.md

## Design Philosophy

Every screen must feel **cinematic, calm, premium, and effortless**.

### Core Principles
- Prioritize **clarity, immersion, and elegance** over decoration
- Interfaces should feel **alive** through subtle motion, layered translucency, blur, depth, and smooth transitions
- The UI should feel like it was designed by **Apple's Human Interface team**
- Use modern iOS-inspired layouts with large content cards, edge-to-edge media, soft shadows, glassmorphism where appropriate, adaptive blur, floating surfaces, and rich typography hierarchy
- Emphasize **content-first design** similar to Apple TV and Apple Music
- Avoid generic Android-style material layouts
- Avoid clutter, excessive borders, and overly colorful UI
- Every pixel should feel intentional

---

## Visual Direction

### Inspiration Sources
- **Apple TV** inspired hero sections
- **Apple Music** inspired immersive album/media layouts
- **visionOS** level interaction quality
- **iOS 26** aesthetic sensibilities

### Key Visual Elements
- Large rounded corners (2xl, 3xl)
- Premium gradients and subtle ambient glows
- Frosted glass panels and translucent navigation
- Smooth layered depth
- Dynamic spacing
- Elegant typography hierarchy
- Minimal but expressive icons
- Rich hover/focus/press states
- Cinematic dark mode aesthetics
- Soft animated transitions
- Edge lighting and subtle reflections
- Responsive layouts that feel native on all screen sizes

### Color & Lighting
- Subtle ambient glows behind key elements
- Soft shadows with multiple layers for depth
- Premium gradients (never harsh or saturated)
- Dark mode as primary aesthetic
- Translucent surfaces with backdrop blur

---

## Interaction Quality

### Motion Principles
- All animations must feel **smooth, organic, and physics-based**
- Use **micro-interactions** everywhere appropriate
- Scrolling should feel **immersive and fluid**
- Avoid abrupt transitions
- Loading states must feel **premium and elegant**
- Components should subtly react to hover, focus, press, and motion

### Animation Specifications
- Framer Motion quality transitions
- Smooth opacity fades
- Scale and parallax effects
- Elastic interactions
- Soft spring animations
- Cinematic page transitions
- Ambient floating motion where appropriate

---

## Code Expectations

### Architecture
- Produce **production-quality** frontend code
- Component architecture must be **clean and scalable**
- Maintain excellent **visual consistency** across all pages
- Focus heavily on **spacing, alignment, responsiveness, and animation polish**
- Build **reusable premium UI components**
- Prioritize **smooth performance** and clean state management
- Avoid ugly default styles

### Styling Rules
- Use **Tailwind CSS** heavily for precision styling
- Prefer **custom design systems** over UI kits
- Use modern gradients, backdrop blur, translucency, and layered surfaces carefully
- Typography should resemble **Apple's SF Pro** style hierarchy
- Use whitespace **aggressively and intelligently**

---

## What NOT to Create

❌ Ordinary dashboards  
❌ Generic SaaS layouts  
❌ Template-looking designs  
❌ Cluttered interfaces  
❌ Excessive borders  
❌ Overly colorful UI  
❌ Abrupt animations  
❌ Default component styles  

---

## Final Expectation

Every screen should look **App Store featured**.

The result should feel comparable to:
- Apple TV
- Apple Music
- Arc Browser
- Linear
- Notion Calendar
- Premium modern Apple ecosystem apps

---

## Typography Guidelines

### Hierarchy
- **Large Title**: Bold, prominent headers (like Apple TV titles)
- **Title 1**: Section headers
- **Title 2**: Card titles, important labels
- **Body**: Primary content text
- **Caption**: Secondary information, metadata
- Use generous letter-spacing for uppercase text
- Optimal line-height for readability (1.4-1.6)

---

## Spacing System

- Use powers of 2 and 4 for consistency (4, 8, 12, 16, 24, 32, 48, 64, 96)
- Generous padding inside cards and containers
- Comfortable gaps between elements
- Content should breathe

---

## Component Patterns

### Cards
- Large corner radius (24px-32px)
- Subtle background with translucency
- Soft multi-layer shadows
- Hover lift effect with scale
- Smooth transition on all states

### Navigation
- Floating, translucent bars
- Backdrop blur effect
- Minimal separators
- Active state with subtle glow or background

### Buttons
- Pill-shaped or rounded rectangles
- Subtle gradients or solid premium colors
- Smooth press/focus states
- Icon + text combinations when appropriate

### Media Containers
- Edge-to-edge imagery
- Overlay gradients for text readability
- Aspect ratio preservation
- Smooth loading skeletons

---

*This document serves as the single source of truth for all UI/UX decisions in this project.*
