<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

## Project Requirement Document: "Charcoal" SaaS ERP Website

### 1. **Project Overview**

"Charcoal" is a modern SaaS ERP solution designed for small and medium businesses, focused on industries such as manufacturing, services, construction, and property management. Drawing direct inspiration from both Odoo and Zoho One, Charcoal delivers functional depth, modularity, polished user experience, and industry-focused adaptability.

### 2. **Core Objectives**

- Develop a **professional SaaS website** using Svelte 5 and SvelteKit.
- Clearly showcase all ERP modules, each on a dedicated, visually engaging page.
- Model content structure, style, and user flow after best practices seen in Odoo and Zoho One.
- Maintain a **consistent, modern visual theme and messaging** across all pages.
- Incorporate open-source/free images, infographics, and iconify-svelte icons.


### 3. **Competitive References**

- **Odoo**: Modular ERP platform with rich industry-specific apps, modern dashboards, bold visuals, strong conversion paths (trial, demo, pricing), and clear comparison tables.
- **Zoho One**: Unified suite, testimonial-driven landing pages, customer quotes, trust-building, intuitive navigation, and comprehensive feature summaries.

By referencing both, Charcoal should emulate:

- Modular product layout (individual module highlights)
- Clear “get started” and "contact/demo" CTAs
- Simple pricing showcase with plan/module comparison
- Success stories, testimonials for industry validation
- Clean, professional, and modern UX/UI


### 4. **Website Structure \& Sitemap**

#### 4.1 **Main Landing Page**

- Strong hero section with Charcoal branding, value statement, and visual call-to-action.
- At-a-glance module overview (icon + short blurbs for each).
- Feature spotlights referencing Odoo/Zoho-style infographics.
- Industry solutions carousel/section.
- Social proof: testimonials, case studies, quotes.
- Direct calls to action (Sign-up, Demo, Pricing, Contact).


#### 4.2 **Modules** (each with a separate, themed subpage)

- Workforce: Employee management, appraisals
- Timetrack: Attendance, Leaves, Timesheets
- Vetan: Payroll
- LedgerBook: Accounting, Billing, Invoices, Purchase Orders, Expenses, Payments, Bank
- ProjectOps: Project management
- Production: Manufacturing management
- Stocker: Inventory management
- Assets: Asset management
- CRM: Customer relationship management
- Sales: Sales pipeline, orders, quotations
- Forms: Form builder
- Connect: Communication, chat, forums, document sharing
- Meetings: Calendar, meeting scheduler
- Desk: Support \& Help Desk
- Appointments: Scheduling, bookings
- Knowledgebase: Articles, FAQs, knowledge docs
- Documents: Document management
- OpsFlow: Workflow automation, integrations
- Classroom: LMS (learning, training, assessments)

> Each module page should model Odoo/Zoho with:
> - Clear module intro \& feature highlights
> - Target audience/industries section
> - UI visuals/infographics (leverage free assets)
> - Key benefits (bulleted, quick to read)
> - Consistent CTA

#### 4.3 **Pricing Page**

- Clean tiered pricing tables (compare by modules, users, key features)
- References to Odoo/Zoho for handling module-based pricing/tiers
- Monthly/yearly toggle
- FAQs and benefits clarification
- Prominent CTA (Sign Up, Contact Sales)


#### 4.4 **Contact Page**

- Professional contact form (Name, Email, Company, Message)
- Support and sales contact detail blocks
- Optional direct demo request option


#### 4.5 **Common Elements**

- Responsive and sticky topbar (brand, navigation, CTAs)
- Footer with company/legal/imported links
- Cohesive color palette, typography
- Animations and transitions for engagement


### 5. **Technical Requirements**

- **Frontend:** Svelte 5, SvelteKit (latest stable)
- **Icons:** iconify-svelte
- **Infographics/Images:** Unsplash, unDraw, or other open/free resources
- **Contact form:** Connect with SaaS email provider, e.g. SendGrid/Mailgun
- **SEO-ready:** Meta tags, sitemap.xml, robots.txt


### 6. **Design Requirements**

- Look and feel inspired by Odoo and Zoho (modern, industry-agnostic, trustworthy)
- All pages should be clean, with whitespace and balanced content blocks
- Consistent imagery style throughout (avoid stock-y or watermarked images)
- Consistent use of iconify-svelte icons for modules/features
- Responsive for all devices, accessible design


### 7. **Implementation Task List**

#### A. **Project Setup \& Boilerplate**

- [ ] Initialize SvelteKit project
- [ ] Set up global styles, color palette, typography
- [ ] Integrate iconify-svelte
- [ ] Configure routing for main, modules, pricing, contact pages


#### B. **Layout**

- [ ] Build topbar (nav, logo, CTAs)
- [ ] Implement footer (contact info, links)
- [ ] Set up page/section transitions \& modern animation effects


#### C. **Landing Page**

- [ ] Design hero section (statement, visual)
- [ ] Rolling modules summary (icons + 1-liners)
- [ ] Feature highlights referencing Odoo/Zoho layouts
- [ ] Industry/application spotlights
- [ ] Case studies/testimonials
- [ ] CTAs


#### D. **Modules Pages**

For each module:

- [ ] Create detailed module page
- [ ] Add icons/graphics, open-source visuals
- [ ] Fill in content (features, benefits, audience)
- [ ] Consistent format per page


#### E. **Pricing Page**

- [ ] Build feature/pricing comparison inspired by Odoo/Zoho
- [ ] Create pricing toggles (monthly/yearly)
- [ ] FAQs
- [ ] Support/Contact prompts


#### F. **Contact Page**

- [ ] Build interactive form
- [ ] Integrate email service
- [ ] Show direct contact details and optional demo request


#### G. **Global \& Miscellaneous**

- [ ] Basic SEO (meta tags, sitemap.xml, robots.txt)
- [ ] Favicon, logo, assets
- [ ] Cross-device responsive checks
- [ ] Accessibility and forms validation
- [ ] QA/debugging


#### H. **Finalization**

- [ ] Deployment setup (Vercel/Netlify/etc.)
- [ ] QA, user acceptance test
- [ ] Internal documentation/readme


### 8. **Content Guidelines**

- Use a single “voice” styled after modern SaaS (friendly, clear, value-based)
- Value propositions on every page
- Consistent CTA language and style
- Cohesive, professional yet approachable wording


### 9. **Reuse of Existing Code**

- Reuse/adapt generic existing UI components.
- Strip old company-specific (software services) pages, replace with ERP/SaaS pages and new routing as above.


### 10. **Compliance \& Licensing**

- Only use externally sourced assets with compatible open licensing.
- Review all images, icons, and external code for license compliance.

**Summary:**
This document outlines the full requirements and stepwise implementation plan for the Charcoal SaaS ERP website, referencing and drawing best practices from Odoo and Zoho One, and is tailored for professional delivery to small and medium business customers in targeted industries.

