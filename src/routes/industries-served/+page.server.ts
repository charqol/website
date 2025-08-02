export const load = async () => {
	const sections = [
		{
			heading: 'Finance and Accounting',
			icon: 'mdi:finance',
			items: [
				'Custom platforms, risk management tools, and financial analysis software.',
				'Secure, cloud-based solutions for accounting, banking, investment management, and financial planning in both B2B and B2C segments.',
				'Experience with fintech startups working in both Crypto and Fiat currencies.'
			]
		},
		{
			heading: 'Healthcare',
			icon: 'mdi:hospital-building',
			items: [
				'Tailored healthcare management systems, telemedicine platforms, and patient portals.',
				'HIPAA-compliant SaaS solutions for patient management, telemedicine, and health data analytics.',
				'AI solutions for risk analysis, personalized treatment plans, and medical image analysis.',
				'Data pipelines and analytics for patient management, outcome prediction, and operational efficiency.'
			]
		},
		{
			heading: 'E-commerce, Aggregators and Marketplaces',
			icon: 'mdi:storefront-outline',
			items: [
				'Custom e-commerce solutions, inventory management systems, and point-of-sale (POS) software.',
				'Customer behavior analysis, sales forecasting, and inventory optimization powered by data.',
				'Scalable platforms for online retail, inventory management, and customer engagement.',
				'AI-driven personalization, demand forecasting, and inventory management.'
			]
		},
		{
			heading: 'Manufacturing',
			icon: 'mdi:factory',
			items: [
				'Process optimization, quality control, and predictive maintenance through data-driven insights.',
				'Computer vision-based inspection tools, signal analysis, and predictive maintenance.',
				'SaaS solutions for supply chain management, production planning, and quality control.',
				'AI-driven predictive maintenance, quality control, and process optimization.',
				'Data pipelines and analytics for production planning, quality control, and supply chain management.'
			]
		},
        {
			heading: 'Identity and Access Management (IAM)',
			icon: 'mdi:shield-account-outline',
			items: [
				'Secure, cloud-based IAM platforms for user authentication, authorization, and identity governance.',
				'OAuth2 based SSO solutions, MFA, and user provisioning/deprovisioning.',
				'Custom IAM solutions for enterprises, SaaS providers, and government agencies.'
			]
		},
		{
			heading: 'Internet of Things (IoT)',
			icon: 'mdi:cloud-outline',
			items: [
				'IoT platforms, device management systems, and data analytics tools.',
				'Custom IoT solutions for smart homes, industrial automation, and remote monitoring.',
				'Anomaly detection, predictive maintenance, and real-time monitoring.'
			]
		},
		{
			heading: 'Education',
			icon: 'mdi:school-outline',
			items: [
				'Custom e-learning platforms, student management systems, and online course marketplaces.',
				'Conduct online tests, quizzes, and assignments.',
				'AI-driven personalized learning, student performance analysis, and adaptive assessments.'
			]
		},
		{
			heading: 'Agriculture',
			icon: 'mdi:tractor',
			items: [
				'Farm management software.',
				'Aggregator platforms for farmers, suppliers, and buyers.',
				'Data collection and analysis at the edge.'
			]
		},
		{
			heading: 'Community and Networking',
			icon: 'mdi:account-group-outline',
			items: [
				'Custom platforms for social connections.',
				'Community management, event planning, and content moderation.',
				'Forums, chat applications, and social networking platforms.',
				'Fundraising, volunteer management, and community engagement tools.'
			]
		}
	];

	return {
		sections
	};
};
