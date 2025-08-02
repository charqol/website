import type { NavItem, SocialLink, FooterSection, ContactInfo } from '$lib/types/navigation';

export const mainNav: NavItem[] = [
    { label: 'Home', href: '/' },
    {
        label: 'Services',
        href: '/services',
        children: [
            { label: 'Services Overview', href: '/services' },
            { label: 'menu-separator', href: '' },
            { label: 'Product Engineering', href: '/product-engineering' },
            { label: 'menu-separator', href: '' },
            { label: 'Backend Microservices', href: '/services/microservices' },
            { label: 'Agentic AI & Chatbots', href: '/services/ai' },
            { label: 'Cloud Ops', href: '/services/cloud-ops' },
            { label: 'Web and Mobile Apps', href: '/services/apps' },
            { label: 'Embedded Systems', href: '/services/embedded' },
            { label: 'Data Operations', href: '/services/data-ops' },
            { label: 'Algorithms & Modelling', href: '/services/algorithms' },
            { label: 'Bespoke Development', href: '/services/bespoke' },
            { label: 'Digital Services', href: '/services/digital-services' }
        ]
    },
    {
        label: 'Industries',
        href: '/industries',
        children: [
            { label: 'Industries Overview', href: '/industries' },
            { label: 'menu-separator', href: '' },
            { label: 'Healthcare', href: '/industries/healthcare' },
            { label: 'Enterprise', href: '/industries/enterprise' },
            { label: 'Finance', href: '/industries/finance' },
            { label: 'Manufacturing', href: '/industries/manufacturing' },
            { label: 'E-Commerce', href: '/industries/ecommerce' },
            { label: 'Education', href: '/industries/education' },
            { label: 'Real Estate', href: '/industries/realestate' },
            { label: 'Agriculture', href: '/industries/agriculture' },
        ]
    },
    { label: 'Technologies', href: '/technologies' },
    { label: 'Accelerators', href: '/accelerators' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'About Us', href: '/about' },
    // { label: 'Contact Us', href: '/contact' },
];

export const footerNav: FooterSection[] = [
    {
        title: 'Quick Links',
        links: [
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Industries', href: '/industries' },
            { label: 'Technologies', href: '/technologies' },
            { label: 'Accelerators', href: '/accelerators' },
            { label: 'Blogs', href: '/blogs' },
            { label: 'About Us', href: '/about' },
            { label: 'Contact Us', href: '/contact' },
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
    address: 'Manjari Bdk, Pune-Solapur Hwy, Pune, Maharashtra, India',
    phone: '+91 9970155166',
    email: 'contact@inlfectionzone.com'
};
