export interface NavItem {
    label: string;
    href: string;
    children?: NavItem[];
}

export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
}

export interface FooterSection {
    title: string;
    links: NavItem[];
}

export interface ContactInfo {
    address: string;
    phone: string;
    email: string;
}
