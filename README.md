# Tiger Tailgating Pros Website 🏈

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://www.tigertailgatingpros.com)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Deployment](https://img.shields.io/badge/deployed%20on-GitHub%20Pages-blue)](https://pages.github.com/)

> **Note: This is a legacy system that was decommissioned in April 2025.**

A comprehensive tailgating service booking platform built for Tiger Tailgating Pros, a Clemson-based tailgating business. This React-based web application enabled customers to select customized tailgating packages, generating additional revenue through streamlined booking and enhanced service options.

## 🏆 Business Context

Tiger Tailgating Pros was a Clemson Alumni-based company specializing in premium tailgating experiences for Clemson University football games. This platform served as their primary customer interface, allowing fans to:

- **Book Customized Packages**: Select from standard and premium tailgating options
- **Generate Additional Revenue**: Through add-on services and premium package upgrades
- **Streamline Operations**: Automated booking system reduced manual coordination
- **Serve Multiple Markets**: Both home team fans and visiting team supporters

The system was successfully deployed and operational until its decommissioning in April 2025.

## ✨ Features

### 🎯 Core Functionality
- **Package Selection**: Choose between Cub, VIP, Intruder, and Ultimate tailgating packages
- **Game-Specific Booking**: Individual game or full season package options
- **Add-On Services**: Customizable extras to enhance the tailgating experience
- **Dual Market Support**: Separate packages for home fans and visiting team supporters
- **Automated Pricing**: Dynamic price calculation based on package and add-ons
- **Contact Management**: Integrated email system using EmailJS

### 🖥️ User Experience
- **Responsive Design**: Bootstrap-powered responsive interface
- **Intuitive Navigation**: Clean, professional layout with smooth page transitions
- **Form Validation**: Comprehensive input validation and error handling
- **SEO Optimized**: React Helmet integration for proper meta tags
- **Analytics Ready**: Google Analytics integration for business insights

### 📱 Pages & Components
- **Home**: Landing page with service overview and call-to-action
- **About**: Company background and team information
- **Gallery**: Visual showcase of previous tailgating setups
- **Tailgate Packages**: Main booking interface for home team packages
- **Away Packages**: Specialized booking for visiting team supporters

## 🛠️ Technology Stack

### Frontend Framework
- **React 18.2.0** - Modern React with hooks and functional components
- **React Router DOM 6.6.2** - Client-side routing with page transitions
- **React Bootstrap 2.7.0** - UI component library
- **Bootstrap 5.2.3** - CSS framework for responsive design

### State Management & Forms
- **React Hooks** - Modern state management approach
- **EmailJS 3.2.0** - Email service integration for form submissions
- **React Google reCAPTCHA 3.1.0** - Bot protection for forms

### Development & Build Tools
- **Create React App** - Build toolchain and development server
- **React App Rewired** - CRA configuration overrides
- **Babel Module Resolver** - Path aliasing (@/ imports)
- **Customize CRA** - Additional build customizations

### Deployment & Analytics
- **GitHub Pages** - Static site hosting
- **React Helmet Async** - SEO and meta tag management
- **React GA** - Google Analytics integration

## 📁 Project Structure

```
src/
├── app/                    # Application setup and routing
│   ├── App.js             # Main application component
│   └── routes.js          # Route definitions and page transitions
├── components/            # Reusable UI components
│   ├── page-title/        # Page header component
│   ├── tab-label/         # SEO and analytics wrapper
│   ├── social-icons/      # Social media links
│   └── required-star/     # Form field indicators
├── config/               # Configuration files
│   ├── text.json         # All text content and copy
│   ├── datapack.json     # Package and pricing data
│   ├── image.json        # Image URLs and assets
│   ├── email.json        # EmailJS configuration
│   └── ga.json          # Google Analytics settings
├── hooks/               # Custom React hooks
├── menu/               # Navigation components
├── pages/              # Page components
│   ├── home/           # Landing page
│   ├── about/          # Company information
│   ├── gallery/        # Photo gallery
│   └── tailgate-packages/  # Main booking interface
│       ├── contact-forms/      # Customer information forms
│       ├── package-selection/  # Package type selection
│       ├── game-selection/     # Individual game selection
│       ├── add-on-selection/   # Additional services
│       ├── parking-forms/      # Parking information
│       └── package-infograph/  # Package visualization
└── utils/              # Utility functions and helpers
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Yarn or npm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pattygcoding/TTProsBeta.git
   cd TTProsBeta
   ```

2. **Install dependencies**
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Configure environment**
   ```bash
   # Copy example config files
   cp src/config/email.json.example src/config/email.json
   cp src/config/ga.json.example src/config/ga.json
   ```
   - Update `src/config/email.json` with your EmailJS credentials
   - Update `src/config/ga.json` with your Google Analytics tracking ID
   - Modify package data in `src/config/datapack.json` as needed

4. **Start development server**
   ```bash
   yarn start
   # or
   npm start
   ```

The application will open in your browser at `http://localhost:3000`.

## 📋 Available Scripts

### Development
```bash
yarn start          # Start development server
yarn build          # Create production build
yarn test           # Run test suite
```

### Deployment
```bash
yarn deploy         # Deploy to GitHub Pages
# or
npm run deploy      # Alternative deployment command
```

### Build Analysis
```bash
yarn build          # Creates optimized production build in /build folder
```

## ⚙️ Configuration

### EmailJS Setup
Update `src/config/email.json`:
```json
{
  "service_id": "your_service_id",
  "template_id": "your_template_id", 
  "user_id": "your_public_key"
}
```

### Google Analytics
Update `src/config/ga.json`:
```json
{
  "url": "https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID",
  "tag": "YOUR_GA_TRACKING_ID"
}
```

### Package Configuration
Modify pricing and packages in `src/config/datapack.json`:
- Game schedules and pricing
- Package types and descriptions
- Add-on services and costs
- Form field configurations

## 🎨 Customization

### Styling
- Global styles: `src/index.css` and `src/app/App.css`
- Component styles: Individual CSS files alongside components
- Bootstrap customization through component props

### Content Management
All text content is centralized in `src/config/text.json`, making it easy to:
- Update copy without touching components
- Maintain consistency across the application
- Support potential internationalization

### Image Management
Images are configured in `src/config/image.json` with external URL references, enabling:
- Easy asset updates without rebuilds
- CDN integration for better performance
- Gallery content management

## 🔧 Development Workflow

### Code Organization
- **Functional Components**: Modern React patterns throughout
- **Custom Hooks**: Reusable logic extraction
- **Path Aliases**: Clean imports using `@/` prefix
- **Component Composition**: Modular, reusable components

### State Management
- Local component state for form data
- Prop drilling for simple state sharing
- Custom hooks for complex logic

### Form Handling
- Controlled components for all form inputs
- Client-side validation with error feedback
- EmailJS integration for form submissions

## 📈 Performance Optimizations

- **Code Splitting**: Automatic splitting via Create React App
- **Image Optimization**: External CDN hosting for images
- **CSS Optimization**: Bootstrap and custom CSS minification
- **Bundle Analysis**: Built-in webpack bundle analyzer

## 🚀 Deployment

This application is configured for GitHub Pages deployment:

1. **Build the application**
   ```bash
   yarn build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   yarn deploy
   ```

The deployment process:
- Creates an optimized production build
- Copies `index.html` to `404.html` for SPA routing support
- Pushes the build to the `gh-pages` branch

## 🐛 Troubleshooting

### Common Issues

**Build Failures**
- Ensure all config files exist in `src/config/`
- Check for missing dependencies with `yarn install`
- Verify Node.js version compatibility

**EmailJS Integration**
- Confirm service ID, template ID, and user ID are correct
- Check EmailJS dashboard for service status
- Verify reCAPTCHA configuration if enabled

**Deployment Issues**
- Ensure GitHub Pages is enabled in repository settings
- Check `homepage` field in `package.json` matches your domain
- Verify `gh-pages` branch is set as source

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Patrick Goodwin**
- GitHub: [@pattygcoding](https://github.com/pattygcoding)

## 🙏 Acknowledgments

- Tiger Tailgating Pros team for the business opportunity
- Clemson University community for the inspiration
- React and open-source community for the amazing tools

---

> **Legacy Notice**: This application represents a complete business solution that successfully served Tiger Tailgating Pros customers. While the service has been decommissioned, this codebase serves as a reference for similar booking platforms and React-based business applications.
