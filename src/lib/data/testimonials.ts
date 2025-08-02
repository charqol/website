export interface Testimonial {
    name: string;
    title: string;
    company: string;
    testimonial: string;
    image: string;
    linkedInLink?: string;
    website?: string;
}

export const testimonials: Testimonial[] = [
    {
        name: 'Rajesh Kumar',
        title: 'Operations Director',
        company: 'Precision Manufacturing Ltd',
        testimonial: 'Charcoal ERP transformed our manufacturing operations completely. The integration between ManufactureOps, StockKeep, and QualityCheck modules gave us real-time visibility into our entire production process. We reduced waste by 30% and improved delivery times significantly.',
        image: '/images/testimonials/precision-manufacturing.png',
        linkedInLink: 'https://www.linkedin.com/in/rajesh-kumar-manufacturing',
        website: 'https://www.precisionmfg.com/'
    },
    {
        name: 'Sarah Mitchell',
        title: 'CFO',
        company: 'GreenTech Solutions',
        testimonial: 'The LedgerBook and Vetan modules streamlined our financial processes beyond our expectations. Real-time financial reporting and automated payroll processing saved us countless hours each month. The ROI was evident within the first quarter of implementation.',
        image: '/images/testimonials/greentech-solutions.png',
        linkedInLink: 'https://www.linkedin.com/in/sarah-mitchell-cfo',
        website: 'https://www.greentechsolutions.com/'
    },
    {
        name: 'Michael Chen',
        title: 'Project Manager',
        company: 'BuildRight Construction',
        testimonial: 'ProjectHub and Timetrack modules revolutionized how we manage our construction projects. We can now track labor hours across multiple sites in real-time, manage resources efficiently, and deliver projects on time and within budget consistently.',
        image: '/images/testimonials/buildright-construction.png',
        linkedInLink: 'https://www.linkedin.com/in/michael-chen-construction',
        website: 'https://www.buildrightconstruction.com/'
    },
    {
        name: 'Dr. Priya Sharma',
        title: 'Hospital Administrator',
        company: 'MedCare Hospital Group',
        testimonial: 'The AssetTrack and MaintenanceHub modules ensure our critical medical equipment is always operational. Automated maintenance scheduling and compliance tracking have improved our equipment uptime by 25% while maintaining strict regulatory compliance.',
        image: '/images/testimonials/medcare-hospital.png',
        linkedInLink: 'https://www.linkedin.com/in/dr-priya-sharma-healthcare',
        website: 'https://www.medcarehospitals.com/'
    },
    {
        name: 'James Rodriguez',
        title: 'IT Director',
        company: 'TechFlow Services',
        testimonial: 'CustomerCare and KnowledgeBase modules transformed our client support operations. Our response times improved by 40%, customer satisfaction scores increased significantly, and our support team can now handle complex queries more efficiently with centralized knowledge management.',
        image: '/images/testimonials/techflow-services.png',
        linkedInLink: 'https://www.linkedin.com/in/james-rodriguez-it',
        website: 'https://www.techflowservices.com/'
    }
];