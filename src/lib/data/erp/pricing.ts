import type { PricingPlan } from '$lib/types/erp';

export const pricingPlans: PricingPlan[] = [
    {
        id: 'starter',
        name: 'Starter',
        description: 'Perfect for small businesses getting started with ERP',
        monthlyPrice: 49,
        yearlyPrice: 490,
        maxUsers: 5,
        includedModules: [
            'LedgerBook',
            'SalesForce',
            'CustomerCare',
            'DocumentFlow'
        ],
        features: [
            'Basic accounting and financial management',
            'Sales pipeline and customer management',
            'Customer support ticketing',
            'Document management',
            'Email support',
            'Mobile app access',
            'Basic reporting'
        ],
        support: 'Email support during business hours'
    },
    {
        id: 'professional',
        name: 'Professional',
        description: 'Comprehensive solution for growing businesses',
        monthlyPrice: 99,
        yearlyPrice: 990,
        maxUsers: 25,
        includedModules: [
            'LedgerBook',
            'SalesForce',
            'CustomerCare',
            'DocumentFlow',
            'Workforce',
            'Timetrack',
            'Vetan',
            'PurchaseFlow',
            'StockKeep',
            'ProjectHub',
            'KnowledgeBase',
            'ReportBuilder'
        ],
        features: [
            'All Starter features',
            'HR and payroll management',
            'Time tracking and project management',
            'Procurement and inventory management',
            'Advanced reporting and analytics',
            'Knowledge base management',
            'Priority email and chat support',
            'API access',
            'Custom integrations'
        ],
        support: 'Priority email and chat support',
        popular: true
    },
    {
        id: 'enterprise',
        name: 'Enterprise',
        description: 'Full-featured solution for large organizations',
        monthlyPrice: 199,
        yearlyPrice: 1990,
        maxUsers: 100,
        includedModules: [
            'All Professional modules',
            'ManufactureOps',
            'QualityCheck',
            'AssetTrack',
            'MaintenanceHub',
            'MobileAccess'
        ],
        features: [
            'All Professional features',
            'Manufacturing operations management',
            'Quality control and compliance',
            'Asset and maintenance management',
            'Advanced mobile applications',
            'Dedicated account manager',
            'Phone support',
            'Custom training sessions',
            'Advanced security features',
            'Multi-location support',
            'Custom workflows'
        ],
        support: 'Dedicated account manager and phone support'
    },
    {
        id: 'custom',
        name: 'Custom',
        description: 'Tailored solution for unique business requirements',
        monthlyPrice: 0, // Custom pricing
        yearlyPrice: 0, // Custom pricing
        maxUsers: 0, // Unlimited
        includedModules: [
            'All modules available',
            'Custom modules as needed'
        ],
        features: [
            'All Enterprise features',
            'Custom module development',
            'White-label solutions',
            'On-premise deployment options',
            'Custom integrations',
            'Dedicated development team',
            '24/7 premium support',
            'Custom SLA agreements',
            'Advanced security and compliance',
            'Custom training programs'
        ],
        support: '24/7 premium support with dedicated team'
    }
];