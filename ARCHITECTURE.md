# Integration Architecture

This document outlines how tCredex Base, Open-Pro, and Stellar are integrated in this project.

## Architecture Layers

### 1. Foundation Layer: tCredex Base
**Purpose**: Provides the core infrastructure and backend functionality

**Components**:
- Database: PostgreSQL with Prisma ORM
- Authentication: NextAuth.js
- Payments: Stripe integration
- CMS: Sanity for content management
- API Routes: Next.js API routes for backend logic

**Location**: `components/base/`, `lib/`, `prisma/`

**Status**: Structure ready for implementation

### 2. UI Layer: Open-Pro Theme (PRIMARY)
**Purpose**: Main design system and visual identity

**Components**:
- Navigation and header
- Footer
- Page layouts
- Section containers
- Typography system
- Button styles
- Form components

**Styling Convention**:
- Classes prefixed with `.open-pro-*`
- Uses Tailwind CSS utilities
- Dark theme as default
- Responsive design patterns

**Location**: `components/open-pro/`, styles in `app/globals.css`

**Key Characteristics**:
- Modern, sleek dark theme
- Professional SaaS-focused design
- Minimalist and clean layouts
- Emphasis on readability and conversion

### 3. Enhancement Layer: Stellar Components
**Purpose**: Add unique visual elements and components that differentiate from Open-Pro

**Components**:
- Feature cards with special styling
- Illustration placeholders
- Enhanced visual effects
- Unique UI patterns
- Special callout sections

**Styling Convention**:
- Classes prefixed with `.stellar-*`
- Compatible with Open-Pro base styles
- Adds visual interest and uniqueness
- Highlights key features

**Location**: `components/stellar/`, styles in `app/globals.css`

**Key Characteristics**:
- Hand-drawn illustration support
- Unique card designs with borders
- Special accent colors
- Visual differentiation elements

## Integration Strategy

### Primary Approach
1. **Open-Pro First**: Use Open-Pro components and styles for all main UI elements
2. **Stellar Enhancement**: Add Stellar components for special features that need emphasis
3. **tCredex Infrastructure**: Build backend functionality on tCredex patterns

### Component Selection Guidelines

**Use Open-Pro for**:
- Navigation and headers
- Footers
- Page layouts and containers
- General content sections
- Forms and inputs
- Buttons and CTAs (primary)
- Blog and content pages

**Use Stellar for**:
- Featured products or services
- Highlighted testimonials
- Special announcement cards
- Unique landing page elements
- Sections that need visual differentiation
- Illustration-based content

**Use tCredex Base for**:
- Database models
- Authentication flows
- Payment processing
- API endpoints
- Server-side logic
- Admin interfaces

### Styling Hierarchy

1. **Tailwind Utilities**: Base styling (both themes use this)
2. **Open-Pro Classes**: Primary theme styles (`.open-pro-*`)
3. **Stellar Classes**: Enhancement styles (`.stellar-*`)
4. **Custom Overrides**: Project-specific adjustments

### File Organization

```
/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with Open-Pro base
│   ├── page.tsx           # Home page (Open-Pro + Stellar)
│   └── globals.css        # Combined theme styles
├── components/
│   ├── open-pro/          # Open-Pro components (primary)
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── stellar/           # Stellar unique components
│   │   ├── FeatureCard.tsx
│   │   └── ...
│   └── base/              # tCredex infrastructure components
│       └── ...
├── lib/                   # Utilities and configurations
└── prisma/                # Database schema
```

## Development Guidelines

### Adding New Features

1. **Start with Open-Pro**: Use Open-Pro patterns for standard UI
2. **Enhance with Stellar**: Add Stellar components for standout features
3. **Integrate Backend**: Use tCredex patterns for backend logic

### Maintaining Consistency

- Keep Open-Pro as the design foundation
- Use Stellar sparingly for emphasis
- Ensure all components work together visually
- Test dark theme compatibility
- Maintain responsive design across all components

### Theme Customization

To customize while maintaining the architecture:

1. **Colors**: Modify `tailwind.config.ts` color palette
2. **Typography**: Adjust font scales in Tailwind config
3. **Spacing**: Use consistent spacing from Open-Pro
4. **Components**: Extend existing components rather than replacing

## Future Enhancements

### Planned Additions
- [ ] Complete tCredex database schema
- [ ] NextAuth authentication setup
- [ ] Stripe payment integration
- [ ] Sanity CMS configuration
- [ ] Additional Open-Pro pages
- [ ] More Stellar unique components
- [ ] Dark/light theme toggle
- [ ] Admin dashboard (tCredex + Open-Pro)

### Extension Points
- Custom Stellar illustrations
- Additional Open-Pro page templates
- tCredex API endpoints
- Third-party integrations
- Analytics and monitoring

---

**Remember**: Open-Pro is the MAIN theme. Stellar provides enhancements. tCredex provides the infrastructure.
