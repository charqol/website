# Design Document

## Overview

The Charcoal SaaS ERP website will be built using the existing SvelteKit 5 architecture, leveraging current UI coonents and design patterns while transforming the content from software development services to ERP solutions. The design follows modern SaaS website best practices inspired by Odoo and Zoho One, emphasizing modularity, professional aesthetics, and clear conversion paths.

## Architecture

### Technology Stack
- **Frontend Framework**: Svelte 5 with SvelteKit
- **Styling**: TailwindCSS with existing design system
- **Icons**: iconify-svelte for consistent iconography
- **Email Integration**: Existing nodemailer setup for contact forms
- **Database**: MongoDB for contact form submissions and analytics
- **Deployment**: Node.js adapter for production deployment

### Project Structure
```
src/
├── lib/
│   ├── components/
│   │   ├── common/          # Reusable UI components
│   │   ├── erp/            # New ERP-specific components
│   │   └── modules/        # Individual module components
│   ├── data/
│   │   ├── erp/            # ERP-specific data
│   │   └── modules/        # Module definitions and content
│   ├── types/              # TypeScript definitions
│   └── utils/              # Utility functions
├── routes/
│   ├── modules/            # Individual module pages
│   ├── pricing/            # Pricing page
│   ├── contact/            # Contact page (existing)
│   └── +page.svelte        # Landing page
└── static/
    ├── images/erp/         # ERP-related images
    └── icons/              # Module icons
```

## Components and Interfaces

### Existing Components to Reuse (Maximum Reuse Strategy)

#### Core Layout Components
- **Header.svelte**: Fully functional navigation with dropdown support - only needs navigation data updates for ERP modules
- **Footer.svelte**: Complete footer with contact info and links - only needs content updates for ERP branding
- **Hero.svelte**: Flexible hero component with image, title, description, and slot for CTAs - perfect for module pages
- **CallToAction.svelte**: Conversion-focused sections with customizable colors and buttons - ideal for landing page CTAs
- **Seo.svelte**: SEO meta tags and structured data - ready to use with ERP content

#### Content Display Components
- **Testimonials.svelte**: Auto-rotating testimonials slider with hover controls - perfect for customer social proof
- **CaseStudiesSlider.svelte**: 3-card rotating case studies with navigation - can showcase ERP success stories
- **WhyChooseUs.svelte**: 4-column grid with icons, titles, and descriptions - ideal for ERP benefits/features
- **Faq.svelte**: Expandable FAQ component with smooth animations - perfect for pricing and general FAQs
- **StatsBoard.svelte**: 4-column statistics display - great for showing ERP metrics and achievements
- **TechStack.svelte**: Technology showcase with logos - can be adapted for ERP integrations/partnerships
- **Infographics.svelte**: 3-column infographic display - perfect for industry insights and ERP benefits

#### Utility Components
- **Select.svelte**: Form select component - useful for contact forms and demo requests
- **OverlayCard.svelte**: Card component with overlay effects
- **MinimalCallToAction.svelte**: Simpler CTA variant
- **NewsletterRegistration.svelte**: Email capture component

### Minimal New ERP Components (Only What's Absolutely Needed)

#### ModuleGrid.svelte (Simple 18-module grid)
```typescript
interface ModuleGridProps {
  modules: ERPModule[];
}
```
*Note: This will be a simple grid layout component. Individual module cards can use existing card patterns.*

#### PricingTable.svelte (Pricing comparison table)
```typescript
interface PricingTier {
  name: string;
  price: number;
  period: 'monthly' | 'yearly';
  features: string[];
  modules: string[];
  popular?: boolean;
}
```
*Note: This is the only truly new component needed, as existing components don't handle pricing tables.*

### Component Reuse Strategy

#### Landing Page Composition (Using Existing Components)
- **Hero Section**: Use existing `Hero.svelte` with ERP-focused content
- **Module Overview**: New `ModuleGrid.svelte` + existing card styling patterns
- **Why Choose ERP**: Reuse `WhyChooseUs.svelte` with ERP benefits data
- **Industry Solutions**: Reuse `Infographics.svelte` with industry-specific content
- **Customer Success**: Reuse `CaseStudiesSlider.svelte` with ERP case studies
- **Social Proof**: Reuse `Testimonials.svelte` with ERP customer testimonials
- **Statistics**: Reuse `StatsBoard.svelte` with ERP metrics
- **Final CTA**: Reuse `CallToAction.svelte` with trial/demo messaging

#### Module Pages Composition (Using Existing Components)
- **Module Hero**: Reuse `Hero.svelte` with module-specific content
- **Feature Highlights**: Reuse `WhyChooseUs.svelte` with module features
- **Industry Applications**: Reuse `Infographics.svelte` with use cases
- **Integration Info**: Reuse `TechStack.svelte` adapted for integrations
- **Module CTA**: Reuse `CallToAction.svelte` or `MinimalCallToAction.svelte`

#### Pricing Page Composition
- **Pricing Header**: Reuse `Hero.svelte` with pricing messaging
- **Pricing Tables**: New `PricingTable.svelte` (only new component needed)
- **FAQ Section**: Reuse `Faq.svelte` with pricing FAQs
- **Enterprise CTA**: Reuse `CallToAction.svelte`

#### Contact Page
- **Contact Hero**: Reuse `Hero.svelte`
- **Contact Form**: Leverage existing contact form from `/contact` route
- **Contact Info**: Reuse existing footer contact patterns

## Data Models

### Module Definition
```typescript
interface ERPModule {
  id: string;
  name: string;
  slug: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  keyFeatures: string[];
  targetIndustries: string[];
  benefits: string[];
  integrations: string[];
  screenshots: string[];
  useCases: UseCase[];
}

interface UseCase {
  title: string;
  description: string;
  industry: string;
  benefits: string[];
}
```

### Pricing Structure
```typescript
interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  maxUsers: number;
  includedModules: string[];
  features: string[];
  support: string;
  popular?: boolean;
}
```

### Navigation Structure
```typescript
interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
  description?: string;
}
```

## Page Designs

### Landing Page Layout
1. **Hero Section**
   - Compelling headline about ERP transformation
   - Value proposition highlighting business efficiency
   - Primary CTA (Start Free Trial) and secondary CTA (Book Demo)
   - Hero image showcasing modern dashboard interface

2. **Module Overview Grid**
   - 18 modules displayed in responsive grid (3x6 on desktop, 2x9 on tablet, 1x18 on mobile)
   - Each module card shows icon, name, and 1-line description
   - Hover effects revealing key features
   - Click navigation to individual module pages

3. **Industry Solutions Carousel**
   - Rotating showcase of 4-5 key industries
   - Industry-specific benefits and use cases
   - Visual representations using open-source illustrations

4. **Feature Highlights**
   - 3-4 key differentiators (Integration, Scalability, User Experience, Industry Focus)
   - Infographic-style presentation with icons and brief descriptions
   - Modern, clean design following Odoo/Zoho aesthetics

5. **Social Proof Section**
   - Customer testimonials with photos and company logos
   - Success metrics and case study highlights
   - Trust indicators (security certifications, uptime guarantees)

6. **Final CTA Section**
   - Strong conversion-focused messaging
   - Multiple CTA options (Free Trial, Demo, Contact Sales)

### Module Pages Layout
1. **Module Hero**
   - Module-specific hero with icon and compelling headline
   - Key benefits in bullet format
   - Module-specific CTA

2. **Feature Deep Dive**
   - Comprehensive feature list with descriptions
   - Visual elements (screenshots, diagrams, infographics)
   - Feature comparison with traditional solutions

3. **Industry Applications**
   - Specific use cases for different industries
   - Industry-specific benefits and ROI examples

4. **Integration Showcase**
   - Compatible modules and third-party integrations
   - API capabilities and customization options

5. **Getting Started Section**
   - Implementation timeline
   - Support and training resources
   - Clear next steps with CTAs

### Pricing Page Layout
1. **Pricing Header**
   - Clear value proposition
   - Monthly/Yearly toggle with savings highlight

2. **Pricing Tiers**
   - 3-4 pricing tiers with clear differentiation
   - Module inclusion matrix
   - Feature comparison table
   - Popular plan highlighting

3. **FAQ Section**
   - Common pricing questions
   - Implementation and support details
   - Upgrade/downgrade policies

4. **Enterprise Section**
   - Custom pricing for large organizations
   - Enterprise-specific features
   - Contact sales CTA

### Contact Page Layout
- Reuse existing contact form structure
- Add demo request option
- Include sales team contact information
- Add office locations and support hours

## Design System

### Color Palette
- **Primary**: Charcoal-inspired dark grays and blues
- **Secondary**: Professional accent colors (teal, orange)
- **Success**: Green for positive actions and metrics
- **Warning**: Amber for important notices
- **Error**: Red for error states

### Typography
- **Headings**: Inter font family (already configured)
- **Body**: Inter font family for consistency
- **Code**: Monospace for technical content

### Spacing and Layout
- **Container**: Max-width with responsive padding
- **Grid**: CSS Grid and Flexbox for layouts
- **Spacing**: TailwindCSS spacing scale (4px base unit)

### Component Styling
- **Cards**: Subtle shadows with rounded corners
- **Buttons**: Gradient backgrounds with hover effects
- **Forms**: Clean inputs with focus states
- **Navigation**: Sticky header with smooth transitions

## Error Handling

### Form Validation
- Client-side validation for immediate feedback
- Server-side validation for security
- Clear error messages with recovery suggestions
- Progressive enhancement for accessibility

### API Error Handling
- Graceful degradation for contact form failures
- Retry mechanisms for transient errors
- User-friendly error messages
- Fallback contact methods

### 404 and Error Pages
- Custom error pages with navigation options
- Search functionality for lost content
- Suggested pages based on URL patterns

## Testing Strategy

### Component Testing
- Unit tests for individual components
- Props validation and edge cases
- Accessibility testing with automated tools

### Integration Testing
- Form submission workflows
- Navigation and routing
- Cross-browser compatibility

### Performance Testing
- Page load speed optimization
- Image optimization and lazy loading
- Core Web Vitals monitoring

### User Acceptance Testing
- Conversion funnel testing
- Mobile responsiveness validation
- Cross-device compatibility

## SEO and Performance Optimization

### Technical SEO
- Semantic HTML structure
- Meta tags and Open Graph data
- Structured data for rich snippets
- XML sitemap generation
- Robots.txt configuration

### Performance Optimization
- Image optimization with WebP format
- Lazy loading for below-fold content
- Code splitting for faster initial loads
- CDN integration for static assets

### Content Strategy
- Keyword-optimized page titles and descriptions
- Industry-specific landing pages
- Blog content integration (existing structure)
- Internal linking strategy

## Accessibility

### WCAG 2.1 Compliance
- Semantic HTML elements
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support
- Color contrast compliance
- Screen reader compatibility

### Progressive Enhancement
- Core functionality without JavaScript
- Graceful degradation for older browsers
- Mobile-first responsive design

## Security Considerations

### Form Security
- CSRF protection for contact forms
- Input sanitization and validation
- Rate limiting for form submissions
- Spam protection mechanisms

### Data Privacy
- GDPR compliance for contact data
- Cookie consent management (existing)
- Data retention policies
- Secure data transmission (HTTPS)

## Integration Points

### Email Service
- Leverage existing nodemailer configuration
- Template system for different email types
- Delivery tracking and error handling

### Analytics
- Existing analytics integration
- Conversion tracking for CTAs
- User behavior analysis
- A/B testing capabilities

### CRM Integration
- Contact form data to CRM system
- Lead scoring and qualification
- Sales team notification system

## Migration Strategy

### Existing Component Adaptation (90% Reuse)
1. **Header.svelte**: Update `mainNav` data in `src/lib/data/navigation.ts` to include ERP modules dropdown
2. **Footer.svelte**: Update `footerNav` and `contactInfo` data for Charcoal branding
3. **Testimonials.svelte**: Update `testimonials` data with ERP customer stories
4. **CaseStudiesSlider.svelte**: Update `caseStudies` data with ERP success stories
5. **WhyChooseUs.svelte**: Update `whyChooseUsItems` data with ERP benefits
6. **Faq.svelte**: Create new FAQ data for ERP and pricing questions
7. **StatsBoard.svelte**: Update stats data with ERP metrics
8. **TechStack.svelte**: Adapt for ERP integrations and partnerships
9. **Infographics.svelte**: Update with ERP industry insights

### New Data Structures (Minimal)
```typescript
// src/lib/data/erp/modules.ts
export const erpModules: ERPModule[] = [
  // 18 module definitions
];

// src/lib/data/erp/pricing.ts
export const pricingPlans: PricingPlan[] = [
  // 3-4 pricing tiers
];
```

### Route Structure Updates
- **Landing Page** (`src/routes/+page.svelte`): Replace with ERP landing page using existing components
- **Module Pages** (`src/routes/modules/[slug]/+page.svelte`): New route using existing Hero and content components
- **Pricing Page** (`src/routes/pricing/+page.svelte`): New route with new PricingTable component
- **Contact Page** (`src/routes/contact/+page.svelte`): Keep existing, update content only

### Content Migration Approach
1. **Phase 1**: Update data files with ERP content while keeping existing components
2. **Phase 2**: Create minimal new components (ModuleGrid, PricingTable)
3. **Phase 3**: Update route pages to use existing components with new data
4. **Phase 4**: Fine-tune styling and add ERP-specific assets

This approach maximizes reuse of the existing, well-tested component library while minimizing new development work.
