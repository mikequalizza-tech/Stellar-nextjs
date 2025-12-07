# Stellar Next.js - tCredex Base with Open-Pro Theme

A comprehensive Next.js SaaS boilerplate that integrates:
- **tCredex Base**: Core infrastructure with PostgreSQL, Prisma, NextAuth, and Stripe
- **Open-Pro**: Main theme for sleek, modern dark UI (by Cruip)
- **Stellar**: Unique components and illustrations that Open-Pro doesn't have

## Features

### tCredex Base Infrastructure
- 🚀 **Next.js 15** with App Router and TypeScript
- 🎨 **Tailwind CSS v4** for styling
- 🗄️ **PostgreSQL with Prisma** for database management
- 🔐 **NextAuth** for authentication
- 💳 **Stripe** integration for payments
- 📝 **Sanity CMS** for content management

### Open-Pro Theme (Main)
- Dark-themed modern design
- Responsive layouts
- Pre-built pages: Home, About, Pricing, Blog, Contact
- Professional UI components
- Optimized for SaaS and startups

### Stellar Components
- Unique hand-drawn illustrations
- Additional UI components
- Enhanced visual elements
- Highlighted features with special styling

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                # Next.js App Router pages
│   ├── layout.tsx     # Root layout with Open-Pro theme
│   ├── page.tsx       # Home page combining Open-Pro & Stellar
│   └── globals.css    # Global styles with theme integration
├── components/        # Reusable components
├── lib/              # Utility functions and configurations
├── public/           # Static assets
└── prisma/           # Database schema (tCredex base)
```

## Theme Integration Strategy

This project follows a layered approach:

1. **Foundation Layer (tCredex)**: Database, authentication, payments, and core infrastructure
2. **UI Layer (Open-Pro)**: Primary theme providing the main design system and layouts
3. **Enhancement Layer (Stellar)**: Special components and illustrations that differentiate the product

### Styling Approach
- Open-Pro classes (`.open-pro-*`) are used for main layouts and sections
- Stellar classes (`.stellar-*`) are used for unique enhanced components
- Both themes use Tailwind CSS for consistency

## Integration Details

### Open-Pro Features
- Dark theme as default
- Modern SaaS-focused design
- Responsive navigation
- Hero sections
- Feature grids
- Footer layouts

### Stellar Enhancements
- Unique card designs with special borders
- Hand-drawn illustration support
- Enhanced visual hierarchy
- Special callout components

### tCredex Base (Ready for Integration)
The project structure supports adding:
- Database models with Prisma
- Authentication flows with NextAuth
- Payment processing with Stripe
- Content management with Sanity CMS

## Customization

### Changing Colors
Edit `tailwind.config.ts` to customize the color scheme while maintaining the Open-Pro dark theme aesthetic.

### Adding Pages
Create new pages in the `app/` directory following the Next.js App Router conventions.

### Components
- Add Open-Pro style components in `components/open-pro/`
- Add Stellar unique components in `components/stellar/`
- Add tCredex infrastructure components in `components/base/`

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Open-Pro by Cruip](https://cruip.com/open-pro/) - main theme documentation
- [Stellar by Cruip](https://cruip.com/stellar/) - Stellar components
- [Tailwind CSS](https://tailwindcss.com/docs) - utility-first CSS framework

## Credits

- **Open-Pro Theme**: [Cruip](https://cruip.com/open-pro/)
- **Stellar Template**: [Cruip](https://cruip.com/stellar/)
- **tCredex Base**: SaaS boilerplate architecture
- **Built with**: Next.js, React, Tailwind CSS, TypeScript

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

**Note**: This is a demonstration of the integration architecture. For production use, ensure you have proper licenses for all themes and components.
