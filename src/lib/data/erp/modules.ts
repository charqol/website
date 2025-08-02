import type { ERPModule } from '$lib/types/erp';

export const erpModules: ERPModule[] = [
    {
        id: 'workforce',
        name: 'Workforce',
        slug: 'workforce',
        icon: 'mdi:account-group',
        shortDescription: 'Complete HR management and employee lifecycle',
        fullDescription: 'Comprehensive human resource management system covering recruitment, onboarding, performance management, payroll, and employee development.',
        keyFeatures: [
            'Employee database and profiles',
            'Recruitment and onboarding workflows',
            'Performance management and reviews',
            'Leave and attendance tracking',
            'Payroll processing and tax management',
            'Training and development programs'
        ],
        targetIndustries: ['Manufacturing', 'Services', 'Healthcare', 'Education'],
        benefits: [
            'Streamlined HR processes',
            'Improved employee satisfaction',
            'Compliance with labor regulations',
            'Data-driven HR decisions'
        ],
        integrations: ['Timetrack', 'LedgerBook', 'Vetan'],
        screenshots: ['/images/modules/workforce-dashboard.jpg'],
        useCases: [
            {
                title: 'Manufacturing HR Management',
                description: 'Manage shift workers, track certifications, and handle complex payroll',
                industry: 'Manufacturing',
                benefits: ['Reduced administrative overhead', 'Better compliance tracking']
            }
        ]
    },
    {
        id: 'timetrack',
        name: 'Timetrack',
        slug: 'timetrack',
        icon: 'mdi:clock-outline',
        shortDescription: 'Advanced time tracking and project management',
        fullDescription: 'Sophisticated time tracking system with project management capabilities, resource allocation, and productivity analytics.',
        keyFeatures: [
            'Multi-project time tracking',
            'Resource allocation and scheduling',
            'Productivity analytics and reporting',
            'Mobile time tracking apps',
            'Automated timesheet approvals',
            'Integration with payroll systems'
        ],
        targetIndustries: ['Services', 'Construction', 'IT', 'Consulting'],
        benefits: [
            'Accurate project costing',
            'Improved resource utilization',
            'Enhanced productivity insights',
            'Streamlined billing processes'
        ],
        integrations: ['Workforce', 'LedgerBook', 'ProjectHub'],
        screenshots: ['/images/modules/timetrack-dashboard.jpg'],
        useCases: [
            {
                title: 'Construction Project Tracking',
                description: 'Track labor hours across multiple construction sites and projects',
                industry: 'Construction',
                benefits: ['Better project cost control', 'Accurate labor reporting']
            }
        ]
    },
    {
        id: 'vetan',
        name: 'Vetan',
        slug: 'vetan',
        icon: 'mdi:currency-usd',
        shortDescription: 'Comprehensive payroll and benefits management',
        fullDescription: 'Advanced payroll processing system with benefits administration, tax compliance, and employee self-service portals.',
        keyFeatures: [
            'Automated payroll processing',
            'Tax calculation and compliance',
            'Benefits administration',
            'Employee self-service portal',
            'Direct deposit and payment methods',
            'Payroll reporting and analytics'
        ],
        targetIndustries: ['All Industries'],
        benefits: [
            'Reduced payroll errors',
            'Tax compliance assurance',
            'Employee satisfaction',
            'Administrative efficiency'
        ],
        integrations: ['Workforce', 'Timetrack', 'LedgerBook'],
        screenshots: ['/images/modules/vetan-dashboard.jpg'],
        useCases: [
            {
                title: 'Multi-location Payroll',
                description: 'Process payroll for employees across different locations with varying tax requirements',
                industry: 'Services',
                benefits: ['Centralized payroll management', 'Consistent compliance']
            }
        ]
    },
    {
        id: 'ledgerbook',
        name: 'LedgerBook',
        slug: 'ledgerbook',
        icon: 'mdi:book-open-variant',
        shortDescription: 'Complete accounting and financial management',
        fullDescription: 'Full-featured accounting system with general ledger, accounts payable/receivable, financial reporting, and audit trails.',
        keyFeatures: [
            'General ledger management',
            'Accounts payable and receivable',
            'Financial reporting and dashboards',
            'Bank reconciliation',
            'Audit trails and compliance',
            'Multi-currency support'
        ],
        targetIndustries: ['All Industries'],
        benefits: [
            'Real-time financial visibility',
            'Automated accounting processes',
            'Regulatory compliance',
            'Improved cash flow management'
        ],
        integrations: ['Vetan', 'PurchaseFlow', 'SalesForce', 'AssetTrack'],
        screenshots: ['/images/modules/ledgerbook-dashboard.jpg'],
        useCases: [
            {
                title: 'Multi-entity Accounting',
                description: 'Manage accounting for multiple business entities with consolidated reporting',
                industry: 'Enterprise',
                benefits: ['Consolidated financial view', 'Streamlined reporting']
            }
        ]
    },
    {
        id: 'purchaseflow',
        name: 'PurchaseFlow',
        slug: 'purchaseflow',
        icon: 'mdi:cart-outline',
        shortDescription: 'Procurement and purchase order management',
        fullDescription: 'Comprehensive procurement system with vendor management, purchase orders, approval workflows, and spend analytics.',
        keyFeatures: [
            'Vendor management and evaluation',
            'Purchase requisition workflows',
            'Automated purchase orders',
            'Approval hierarchies',
            'Spend analytics and reporting',
            'Contract management'
        ],
        targetIndustries: ['Manufacturing', 'Construction', 'Healthcare', 'Education'],
        benefits: [
            'Cost savings through better procurement',
            'Improved vendor relationships',
            'Process standardization',
            'Spend visibility and control'
        ],
        integrations: ['LedgerBook', 'StockKeep', 'AssetTrack'],
        screenshots: ['/images/modules/purchaseflow-dashboard.jpg'],
        useCases: [
            {
                title: 'Manufacturing Procurement',
                description: 'Manage complex procurement processes for raw materials and components',
                industry: 'Manufacturing',
                benefits: ['Reduced procurement costs', 'Better supplier management']
            }
        ]
    },
    {
        id: 'salesforce',
        name: 'SalesForce',
        slug: 'salesforce',
        icon: 'mdi:handshake',
        shortDescription: 'Sales management and customer relationship',
        fullDescription: 'Complete sales management system with lead tracking, opportunity management, customer relationships, and sales analytics.',
        keyFeatures: [
            'Lead and opportunity management',
            'Customer relationship tracking',
            'Sales pipeline visualization',
            'Quote and proposal generation',
            'Sales performance analytics',
            'Customer communication history'
        ],
        targetIndustries: ['Services', 'Manufacturing', 'Real Estate', 'Technology'],
        benefits: [
            'Increased sales conversion',
            'Better customer relationships',
            'Sales process optimization',
            'Revenue growth tracking'
        ],
        integrations: ['LedgerBook', 'CustomerCare', 'ProjectHub'],
        screenshots: ['/images/modules/salesforce-dashboard.jpg'],
        useCases: [
            {
                title: 'B2B Sales Management',
                description: 'Manage complex B2B sales cycles with multiple stakeholders',
                industry: 'Services',
                benefits: ['Improved sales efficiency', 'Better deal tracking']
            }
        ]
    },
    {
        id: 'stockkeep',
        name: 'StockKeep',
        slug: 'stockkeep',
        icon: 'mdi:package-variant',
        shortDescription: 'Inventory and warehouse management',
        fullDescription: 'Advanced inventory management system with warehouse operations, stock tracking, automated reordering, and inventory analytics.',
        keyFeatures: [
            'Real-time inventory tracking',
            'Warehouse management',
            'Automated reorder points',
            'Barcode and RFID support',
            'Inventory valuation methods',
            'Stock movement analytics'
        ],
        targetIndustries: ['Manufacturing', 'Retail', 'Distribution', 'Healthcare'],
        benefits: [
            'Reduced inventory costs',
            'Improved stock accuracy',
            'Optimized warehouse operations',
            'Better demand forecasting'
        ],
        integrations: ['PurchaseFlow', 'LedgerBook', 'ManufactureOps'],
        screenshots: ['/images/modules/stockkeep-dashboard.jpg'],
        useCases: [
            {
                title: 'Multi-warehouse Management',
                description: 'Manage inventory across multiple warehouse locations with transfer tracking',
                industry: 'Distribution',
                benefits: ['Optimized inventory levels', 'Reduced carrying costs']
            }
        ]
    },
    {
        id: 'manufactureops',
        name: 'ManufactureOps',
        slug: 'manufactureops',
        icon: 'mdi:factory',
        shortDescription: 'Manufacturing operations and production planning',
        fullDescription: 'Comprehensive manufacturing management system with production planning, work orders, quality control, and shop floor management.',
        keyFeatures: [
            'Production planning and scheduling',
            'Work order management',
            'Bill of materials (BOM)',
            'Quality control processes',
            'Shop floor data collection',
            'Manufacturing analytics'
        ],
        targetIndustries: ['Manufacturing', 'Automotive', 'Electronics', 'Food & Beverage'],
        benefits: [
            'Improved production efficiency',
            'Better quality control',
            'Reduced manufacturing costs',
            'Enhanced traceability'
        ],
        integrations: ['StockKeep', 'QualityCheck', 'AssetTrack'],
        screenshots: ['/images/modules/manufactureops-dashboard.jpg'],
        useCases: [
            {
                title: 'Automotive Parts Manufacturing',
                description: 'Manage complex manufacturing processes with strict quality requirements',
                industry: 'Automotive',
                benefits: ['Improved quality compliance', 'Reduced production waste']
            }
        ]
    },
    {
        id: 'qualitycheck',
        name: 'QualityCheck',
        slug: 'qualitycheck',
        icon: 'mdi:shield-check',
        shortDescription: 'Quality management and compliance tracking',
        fullDescription: 'Comprehensive quality management system with inspection workflows, compliance tracking, corrective actions, and quality analytics.',
        keyFeatures: [
            'Quality inspection workflows',
            'Non-conformance tracking',
            'Corrective and preventive actions',
            'Compliance management',
            'Quality metrics and reporting',
            'Supplier quality management'
        ],
        targetIndustries: ['Manufacturing', 'Healthcare', 'Food & Beverage', 'Automotive'],
        benefits: [
            'Improved product quality',
            'Regulatory compliance',
            'Reduced quality costs',
            'Enhanced customer satisfaction'
        ],
        integrations: ['ManufactureOps', 'StockKeep', 'PurchaseFlow'],
        screenshots: ['/images/modules/qualitycheck-dashboard.jpg'],
        useCases: [
            {
                title: 'FDA Compliance Management',
                description: 'Ensure FDA compliance in pharmaceutical manufacturing',
                industry: 'Healthcare',
                benefits: ['Regulatory compliance', 'Audit readiness']
            }
        ]
    },
    {
        id: 'assettrack',
        name: 'AssetTrack',
        slug: 'assettrack',
        icon: 'mdi:desktop-classic',
        shortDescription: 'Fixed asset and equipment management',
        fullDescription: 'Complete asset lifecycle management system with tracking, maintenance scheduling, depreciation, and asset analytics.',
        keyFeatures: [
            'Asset registration and tracking',
            'Maintenance scheduling',
            'Depreciation calculations',
            'Asset location tracking',
            'Warranty management',
            'Asset performance analytics'
        ],
        targetIndustries: ['Manufacturing', 'Healthcare', 'Education', 'Government'],
        benefits: [
            'Extended asset life',
            'Reduced maintenance costs',
            'Better asset utilization',
            'Compliance with regulations'
        ],
        integrations: ['LedgerBook', 'PurchaseFlow', 'MaintenanceHub'],
        screenshots: ['/images/modules/assettrack-dashboard.jpg'],
        useCases: [
            {
                title: 'Hospital Equipment Management',
                description: 'Track and maintain critical medical equipment with compliance requirements',
                industry: 'Healthcare',
                benefits: ['Equipment uptime', 'Regulatory compliance']
            }
        ]
    },
    {
        id: 'maintenancehub',
        name: 'MaintenanceHub',
        slug: 'maintenancehub',
        icon: 'mdi:wrench',
        shortDescription: 'Maintenance management and work orders',
        fullDescription: 'Comprehensive maintenance management system with preventive maintenance, work orders, spare parts management, and maintenance analytics.',
        keyFeatures: [
            'Preventive maintenance scheduling',
            'Work order management',
            'Spare parts inventory',
            'Maintenance history tracking',
            'Technician scheduling',
            'Maintenance cost analysis'
        ],
        targetIndustries: ['Manufacturing', 'Facilities', 'Transportation', 'Energy'],
        benefits: [
            'Reduced equipment downtime',
            'Lower maintenance costs',
            'Improved equipment reliability',
            'Better resource planning'
        ],
        integrations: ['AssetTrack', 'StockKeep', 'Workforce'],
        screenshots: ['/images/modules/maintenancehub-dashboard.jpg'],
        useCases: [
            {
                title: 'Manufacturing Equipment Maintenance',
                description: 'Maintain critical production equipment with minimal downtime',
                industry: 'Manufacturing',
                benefits: ['Increased uptime', 'Predictable maintenance costs']
            }
        ]
    },
    {
        id: 'projecthub',
        name: 'ProjectHub',
        slug: 'projecthub',
        icon: 'mdi:clipboard-list',
        shortDescription: 'Project management and collaboration',
        fullDescription: 'Complete project management system with task tracking, resource allocation, collaboration tools, and project analytics.',
        keyFeatures: [
            'Project planning and scheduling',
            'Task and milestone tracking',
            'Resource allocation',
            'Team collaboration tools',
            'Project budgeting',
            'Progress reporting and analytics'
        ],
        targetIndustries: ['Construction', 'IT', 'Consulting', 'Engineering'],
        benefits: [
            'Improved project delivery',
            'Better resource utilization',
            'Enhanced team collaboration',
            'Project profitability tracking'
        ],
        integrations: ['Timetrack', 'SalesForce', 'LedgerBook'],
        screenshots: ['/images/modules/projecthub-dashboard.jpg'],
        useCases: [
            {
                title: 'Construction Project Management',
                description: 'Manage complex construction projects with multiple phases and contractors',
                industry: 'Construction',
                benefits: ['On-time delivery', 'Budget control']
            }
        ]
    },
    {
        id: 'customercare',
        name: 'CustomerCare',
        slug: 'customercare',
        icon: 'mdi:headset',
        shortDescription: 'Customer service and support management',
        fullDescription: 'Comprehensive customer service system with ticket management, knowledge base, customer communication, and service analytics.',
        keyFeatures: [
            'Ticket and case management',
            'Multi-channel communication',
            'Knowledge base management',
            'Service level agreements',
            'Customer satisfaction tracking',
            'Support team performance'
        ],
        targetIndustries: ['Services', 'Technology', 'Healthcare', 'Retail'],
        benefits: [
            'Improved customer satisfaction',
            'Faster issue resolution',
            'Better service quality',
            'Enhanced customer retention'
        ],
        integrations: ['SalesForce', 'Workforce', 'KnowledgeBase'],
        screenshots: ['/images/modules/customercare-dashboard.jpg'],
        useCases: [
            {
                title: 'IT Support Management',
                description: 'Manage IT support tickets with SLA tracking and escalation',
                industry: 'Technology',
                benefits: ['Faster resolution times', 'Better customer satisfaction']
            }
        ]
    },
    {
        id: 'knowledgebase',
        name: 'KnowledgeBase',
        slug: 'knowledgebase',
        icon: 'mdi:book-open-page-variant',
        shortDescription: 'Knowledge management and documentation',
        fullDescription: 'Centralized knowledge management system with document management, search capabilities, version control, and collaboration features.',
        keyFeatures: [
            'Document management and storage',
            'Advanced search capabilities',
            'Version control and history',
            'Collaborative editing',
            'Access control and permissions',
            'Knowledge analytics'
        ],
        targetIndustries: ['All Industries'],
        benefits: [
            'Improved knowledge sharing',
            'Faster information access',
            'Better decision making',
            'Reduced training time'
        ],
        integrations: ['CustomerCare', 'Workforce', 'ProjectHub'],
        screenshots: ['/images/modules/knowledgebase-dashboard.jpg'],
        useCases: [
            {
                title: 'Corporate Knowledge Management',
                description: 'Centralize company knowledge and best practices for easy access',
                industry: 'Enterprise',
                benefits: ['Improved efficiency', 'Knowledge retention']
            }
        ]
    },
    {
        id: 'documentflow',
        name: 'DocumentFlow',
        slug: 'documentflow',
        icon: 'mdi:file-document-multiple',
        shortDescription: 'Document management and workflow automation',
        fullDescription: 'Advanced document management system with workflow automation, digital signatures, approval processes, and document analytics.',
        keyFeatures: [
            'Document storage and organization',
            'Workflow automation',
            'Digital signatures and approvals',
            'Version control',
            'Document security and compliance',
            'Automated document generation'
        ],
        targetIndustries: ['Legal', 'Healthcare', 'Finance', 'Government'],
        benefits: [
            'Streamlined document processes',
            'Improved compliance',
            'Reduced paper usage',
            'Faster approvals'
        ],
        integrations: ['KnowledgeBase', 'Workforce', 'LedgerBook'],
        screenshots: ['/images/modules/documentflow-dashboard.jpg'],
        useCases: [
            {
                title: 'Legal Document Management',
                description: 'Manage legal documents with secure access and audit trails',
                industry: 'Legal',
                benefits: ['Document security', 'Compliance tracking']
            }
        ]
    },
    {
        id: 'reportbuilder',
        name: 'ReportBuilder',
        slug: 'reportbuilder',
        icon: 'mdi:chart-line',
        shortDescription: 'Business intelligence and custom reporting',
        fullDescription: 'Powerful reporting and analytics platform with custom report builder, dashboards, data visualization, and business intelligence.',
        keyFeatures: [
            'Custom report builder',
            'Interactive dashboards',
            'Data visualization tools',
            'Scheduled report delivery',
            'Real-time analytics',
            'Data export capabilities'
        ],
        targetIndustries: ['All Industries'],
        benefits: [
            'Data-driven decision making',
            'Improved business insights',
            'Automated reporting',
            'Better performance tracking'
        ],
        integrations: ['All Modules'],
        screenshots: ['/images/modules/reportbuilder-dashboard.jpg'],
        useCases: [
            {
                title: 'Executive Dashboard',
                description: 'Create comprehensive executive dashboards with KPIs from all business areas',
                industry: 'Enterprise',
                benefits: ['Strategic insights', 'Performance monitoring']
            }
        ]
    },
    {
        id: 'mobileaccess',
        name: 'MobileAccess',
        slug: 'mobileaccess',
        icon: 'mdi:cellphone',
        shortDescription: 'Mobile applications and remote access',
        fullDescription: 'Mobile platform providing access to ERP functionality through native mobile apps with offline capabilities and real-time synchronization.',
        keyFeatures: [
            'Native mobile applications',
            'Offline data access',
            'Real-time synchronization',
            'Mobile-optimized interfaces',
            'Push notifications',
            'Location-based services'
        ],
        targetIndustries: ['All Industries'],
        benefits: [
            'Increased productivity',
            'Remote work enablement',
            'Real-time data access',
            'Improved user experience'
        ],
        integrations: ['All Modules'],
        screenshots: ['/images/modules/mobileaccess-dashboard.jpg'],
        useCases: [
            {
                title: 'Field Service Management',
                description: 'Enable field technicians to access work orders and update status remotely',
                industry: 'Services',
                benefits: ['Improved field productivity', 'Real-time updates']
            }
        ]
    }
];