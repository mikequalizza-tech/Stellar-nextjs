# Stellar Next.js

## Overview

Stellar is a unified Next.js platform that merges **Open-Pro** components with the **Mosaic** admin console to create a complete solution for modern web applications. It fills the gaps in Open-Pro by providing a comprehensive set of options and components while integrating Mosaic as a powerful admin interface.

## Architecture

### 🎨 Open-Pro Components
Open-Pro provides rich marketing and public-facing components that are used throughout Stellar, particularly in the dynamic Intake page. These components include:
- Hero sections
- Feature showcases
- Pricing tables
- Testimonials
- Forms and interactive elements
- Call-to-action components

### ⚙️ Mosaic Admin Console
Mosaic powers the administrative interface with a complete dashboard system including:
- Dashboard with analytics and metrics
- User management system
- Settings and configuration
- Notifications and alerts
- Modal dialogs and interactive components

### ✨ Stellar Integration
Stellar brings these together, providing:
- Unified navigation and routing
- Consistent design language
- Shared utilities and components
- Dynamic forms for intake processes
- Complete admin capabilities

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Library**: React 19
- **Components**: @headlessui/react
- **MDX Support**: For content management
- **Build Tool**: Turbopack

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mikequalizza-tech/Stellar-nextjs.git
cd Stellar-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
stellar-nextjs/
├── app/
│   ├── admin/              # Mosaic Admin Console
│   │   ├── dashboard/      # Dashboard page
│   │   ├── users/          # User management
│   │   ├── settings/       # Settings page
│   │   └── layout.tsx      # Admin layout
│   ├── intake/             # Dynamic intake form (Open-Pro)
│   │   └── page.tsx
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # Shared components
├── public/                 # Static assets
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## Features

### 🏠 Home Page
- Welcome section with overview
- Feature cards showcasing capabilities
- Quick navigation to Intake and Admin sections

### 📋 Dynamic Intake Page
Built with Open-Pro components to provide:
- Flexible form fields
- Validation and error handling
- Multiple input types (text, email, select, textarea)
- Responsive design
- Clear call-to-action buttons

### 👥 Admin Console (Mosaic)
Complete administrative interface featuring:
- **Dashboard**: Key metrics and recent activity
- **User Management**: Search, filter, and manage users
- **Settings**: Configure system preferences and security

## Key Features

### Navigation
- Responsive navigation across all pages
- Consistent header and footer
- Sidebar navigation in admin section
- Mobile-friendly menu

### Design
- Modern, clean interface
- Gradient backgrounds
- Shadow and hover effects
- Smooth transitions
- Consistent color scheme

### Functionality
- Form handling and validation
- Dynamic data display
- Interactive toggles and controls
- Table-based data views
- Responsive layouts

## Customization

### Styling
Edit `tailwind.config.js` to customize:
- Colors
- Fonts
- Spacing
- Breakpoints

### Components
Add new components in the `components/` directory and import them where needed.

### Routes
Add new pages in the `app/` directory following Next.js App Router conventions.

## Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

The easiest way to deploy Stellar is using Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mikequalizza-tech/Stellar-nextjs)

### Other Platforms

Stellar can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Self-hosted with Docker

## Development Notes

### Merging Strategy
Stellar combines the best of both worlds:
- **Open-Pro** provides the public-facing components and marketing materials
- **Mosaic** provides the admin interface and management tools
- **Stellar** bridges them together with consistent routing, styling, and functionality

### Future Enhancements
- Authentication and authorization
- API integration for real data
- Database connectivity
- Advanced form builders
- More admin features
- Enhanced analytics

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

ISC

## Support

For issues or questions, please open an issue in the GitHub repository.

## Acknowledgments

- **Open-Pro**: For providing the marketing and public-facing components
- **Mosaic**: For the comprehensive admin console interface
- **Next.js**: For the powerful React framework
- **Tailwind CSS**: For the utility-first CSS framework
