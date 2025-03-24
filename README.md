# Cricket Predicta 🏏

<div align="center">
  <img src="public/images/logo.png" alt="Cricket Predicta Logo" width="350px">
  
  <p><em>Your ultimate destination for cricket predictions and analysis</em></p>
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.1.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
</div>

## 🌟 Features

- 🏆 **Cricket Legends Showcase** - Featuring profiles of legendary cricketers who have appeared on Cricket Predicta
- 🌓 **Dark/Light Mode** - Seamless theme switching with system preference detection
- 📱 **Fully Responsive** - Optimized for all device sizes from mobile to large screens
- 🎨 **Custom UI Components** - Beautifully designed cards, scrollbars, and interactive elements
- 🚀 **Performance Optimized** - Fast loading times with Next.js optimizations
- 🔍 **SEO Ready** - Complete metadata implementation for better search engine visibility
- 🎭 **Animated Transitions** - Smooth animations and transitions for enhanced user experience
- 🌐 **Cross-Browser Compatible** - Works flawlessly across all modern browsers

<div align="center">
  <img src="public/assets/demo.gif" alt="Cricket Predicta Demo" width="90%" style="border-radius: 8px; margin: 20px 0; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
</div>

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/cricket-predicta.git

# Navigate to the project directory
cd cricket-predicta

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` to see the application running.

## 📸 Key Sections

<div align="center">
  <table>
    <tr>
      <td width="50%">
        <strong>Legendary Cricketers</strong><br>
        Zaheer Abbas, Andy Roberts, Makhaya Ntini, David Gower, and more cricket legends showcased with their achievements.
      </td>
      <td width="50%">
        <strong>Former Cricketers & Skippers</strong><br>
        25+ former international players including Dean Elgar, Tatenda Taibu, and other notable cricket personalities.
      </td>
    </tr>
    <tr>
      <td width="50%">
        <strong>Coaches & Analysts</strong><br>
        Featuring Rajkumar Sharma (Virat Kohli's coach), Dav Whatmore (World Cup-winning coach), and cricket analysts.
      </td>
      <td width="50%">
        <strong>Commentators & Broadcasters</strong><br>
        Media personalities who bring cricket to life through commentary and analysis.
      </td>
    </tr>
  </table>
</div>

## 🎨 UI/UX Features

### Custom Scrollbar

The website features a custom-designed scrollbar that matches the theme:

```css
/* Custom scrollbar sample */
::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, var(--primary-color), var(--primary-color-light));
  border-radius: 8px;
  border: 2px solid transparent;
  background-clip: content-box;
  transition: all 0.3s ease;
}
```

### Sticky Navigation

The Guest section implements a sticky header pattern that keeps the main heading visible while content scrolls underneath:

```tsx
{/* Sticky Header */}
<div className="sticky top-0 z-30 py-8 sm:py-10 md:py-12 bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-sm">
  {/* Header content */}
</div>

{/* Scrollable Content */}
<div className="flex-1 overflow-auto py-8 sm:py-10">
  {/* Scrollable content */}
</div>
```

### Responsive Cards

All guest cards are designed to be fully responsive with hover effects:

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
  {legendaryGuests.map((guest, index) => (
    <GuestCard guest={guest} index={index} key={index} />
  ))}
</div>
```

## 🔧 Technologies

- **Frontend**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS, CSS Variables
- **Animation**: CSS Transitions
- **Theme Switching**: next-themes
- **Icons**: Lucide Icons
- **SEO**: Next.js Metadata API

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- All the cricket legends featured on our platform
- [Next.js](https://nextjs.org/) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vercel](https://vercel.com/) for hosting and deployment

---

<div align="center">
  <p>Made with ❤️ for cricket fans everywhere</p>
</div> 