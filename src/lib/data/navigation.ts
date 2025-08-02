import type { NavItem, SocialLink, FooterSection, ContactInfo } from '$lib/types/navigation';

export const mainNav: NavItem[] = [
    { label: 'Home', href: '/' },
    {
        label: 'ERP Modules',
        href: '/modules',
        children: [
            { label: 'All Modules', href: '/modules' },
            { label: 'menu-separator', href: '' },
            { label: 'Core Business', href: '' },
            { label: 'Workforce', href: '/modules/workforce' },
            { label: 'LedgerBook', href: '/modules/ledgerbook' },
            { label: 'SalesForce', href: '/modules/salesforce' },
            { label: 'PurchaseFlow', href: '/modules/purchaseflow' },
            { label: 'menu-separator', href: '' },
            { label: 'Operations', href: '' },
            { label: 'StockKeep', href: '/modules/stockkeep' },
            { label: 'ManufactureOps', href: '/modules/manufactureops' },
            { label: 'QualityCheck', href: '/modules/qualitycheck' },
            { label: 'AssetTrack', href: '/modules/assettrack' },
            { label: 'menu-separator', href: '' },
            { label: 'Productivity', href: '' },
            { label: 'Timetrack', href: '/modules/timetrack' },
            { label: 'ProjectHub', href: '/modules/projecthub' },
            { label: 'CustomerCare', href: '/modules/customercare' },
            { label: 'DocumentFlow', href: '/modules/documentflow' }
        ]
    },
    {
        label: 'Industries',
        href: '/industries',
        children: [
            { label: 'Manufacturing', href: '/industries/manufacturing' },
            { label: 'Services', href: '/industries/services' },
            { label: 'Construction', href: '/industries/construction' },
            { label: 'Healthcare', href: '/industries/healthcare' },
            { label: 'Education', href: '/industries/education' },
            { label: 'Real Estate', href: '/industries/realestate' },
            { label: 'Government', href: '/industries/government' }
        ]
    },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
];

export const footerNav: FooterSection[] = [
    {
        title: 'Quick Links',
        links: [
            { label: 'Home', href: '/' },
            { label: 'ERP Modules', href: '/modules' },
            { label: 'Industries', href: '/industries' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'About Us', href: '/about' },
            { label: 'Contact Us', href: '/contact' },
        ]
    },
    {
        title: 'Popular Modules',
        links: [
            { label: 'Workforce', href: '/modules/workforce' },
            { label: 'LedgerBook', href: '/modules/ledgerbook' },
            { label: 'SalesForce', href: '/modules/salesforce' },
            { label: 'StockKeep', href: '/modules/stockkeep' },
            { label: 'Timetrack', href: '/modules/timetrack' }
        ]
    },
    {
        title: 'Legal',
        links: [
            { label: 'Privacy Policy', href: '/privacy-policy' },
            { label: 'Terms of Service', href: '/terms' },
            { label: 'FAQ', href: '/faq' }
        ]
    }
];

export const socialLinks: SocialLink[] = [
    { platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
    { platform: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
    // { platform: 'Facebook', url: 'https://facebook.com', icon: 'facebook' },
    // { platform: 'Instagram', url: 'https://instagram.com', icon: 'instagram' }
];

export const contactInfo: ContactInfo = {
    address: 'Charcoal ERP Solutions, Business District, Pune, Maharashtra, India',
    phone: '+91 9970155166',
    email: 'contact@charcoalerp.com'
};
