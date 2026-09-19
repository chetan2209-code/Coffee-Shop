# ☕ King Cafe — Coffee Shop Web App

A modern, fully responsive coffee shop website built with **React** and **Tailwind CSS**, featuring a complete shopping cart system, animated UI, and a mock checkout flow. Designed to demonstrate real-world frontend patterns — component architecture, global state management, and polished micro-interactions.

**🔗 Live Demo:** [coffeeshop-henna-phi.vercel.app](https://coffeeshop-henna-phi.vercel.app)
**📂 Repository:** [github.com/chetan2209-code/Coffee-Shop](https://github.com/chetan2209-code/Coffee-Shop)

---

## 📸 Screenshots

| Home | Menu | Cart |
|------|------|------|
| _add screenshot_ | _add screenshot_ | _add screenshot_ |

---

## ✨ Features

- **Animated Hero Section** — floating coffee bean animations, rising steam effect, star ratings, and live stats, all powered by Framer Motion
- **Dynamic Menu** — search bar and category filters (Hot Coffee, Cold Brews, Bakery & Snacks, Desserts) with instant client-side filtering
- **Shopping Cart System** — built with React Context API:
  - Add/remove items, increase/decrease quantity
  - Live cart badge count on the navbar
  - Persistent cart drawer with running total
- **Toast Notifications** — non-intrusive "item added to cart" feedback instead of forcing the cart open every time
- **Mock Checkout Flow** — delivery details form → order confirmation screen with a generated order ID (frontend-only simulation, no backend required)
- **Working Contact Form** — controlled inputs with validation and submit handling (no page reload)
- **About Section** — Lottie animation integration with scroll-triggered reveal animations
- **Testimonials Carousel** — built with Swiper.js, autoplay + pagination
- **Fully Responsive** — custom mobile navigation menu with auto-close on link click
- **Custom Footer** — with inline SVG social icons (no brand-icon dependency issues)

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | React 19 (Vite) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Carousel | Swiper.js |
| Icons | Lucide React |
| Lottie Animations | lottie-react |
| State Management | React Context API |
| Deployment | Vercel |

---

## 📁 Project Structure

```
coffee-shop/
├── src/
│   ├── assets/           # Images, Lottie JSON files
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ResponsiveMenu.jsx
│   │   ├── Hero.jsx
│   │   ├── Menu.jsx
│   │   ├── About.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── CartDrawer.jsx
│   │   ├── CheckoutModal.jsx
│   │   └── Toast.jsx
│   ├── context/
│   │   └── CartContext.jsx   # Global cart state (add/remove/quantity/checkout)
│   ├── data/
│   │   └── menuData.js       # Menu items and categories
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/chetan2209-code/Coffee-Shop.git
cd Coffee-Shop

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`

### Build for production

```bash
npm run build
```

---

## 🧠 What I Learned Building This

- Managing global application state (shopping cart) with the **React Context API** instead of prop drilling
- Handling third-party library breaking changes (migrated from `react-slick` to `swiper` due to React 19 compatibility issues, and adapted to a Lottie library major version upgrade)
- Building controlled forms in React with validation and proper event handling
- Creating smooth, purposeful animations with Framer Motion (scroll-triggered reveals, infinite loops, hover micro-interactions)
- Structuring a mid-size React app into clean, reusable components
- Debugging real deployment issues — resolving a missing `package.json` dependency that caused Vercel build failures, and recovering from a stuck Git rebase without losing project history

---

## 🔮 Future Improvements

- [ ] Integrate a real payment gateway (Stripe/Razorpay) with a backend
- [ ] Connect the contact form to an email service (EmailJS)
- [ ] Add React Router for multi-page navigation
- [ ] Persist cart state with localStorage
- [ ] Add order history for returning users

---

## 👤 Author

**Chetan Rana**
Electrical Engineering student (SPPU) transitioning into Software Engineering
[GitHub](https://github.com/chetan2209-code) · [LinkedIn](https://www.linkedin.com/in/chetan-rana-0b0293385/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).