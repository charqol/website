export const load = async () => {
	const heading = 'Bespoke Software Development';
	const description =
		'No two businesses are alike, and our bespoke software development services reflect that uniqueness. We craft custom software solutions tailored to your specific needs, ensuring they align perfectly with your business goals and processes.';
	const sections = [
		{
			heading: 'Custom Application Development',
			description:
				'We develop software applications from the ground up, ensuring they are perfectly aligned with your business requirements and user expectations.'
		},
		{
			heading: 'Enterprise Software Solutions',
			description:
				'We create robust, scalable enterprise software that supports your business operations, from ERP systems to customer relationship management (CRM) platforms.'
		},
		{
			heading: 'Mobile App Development',
			description:
				'Our mobile app development services cover both iOS and Android platforms, delivering intuitive, user-friendly apps that enhance customer engagement.'
		},
		{
			heading: 'System Integration',
			description:
				'	We ensure seamless integration of new software with your existing systems, optimizing performance and data flow across the organization.'
		},
		{
			heading: 'UI/UX Design',
			description:
				'Our design team focuses on creating user-centric interfaces that enhance usability and deliver an exceptional user experience.'
		},
		{
			heading: 'Maintenance and Support',
			description:
				'Post-deployment, we offer ongoing maintenance and support to ensure your software continues to perform at its best.'
		}
	];

    return{
        heading,
        description,
        sections
    }
};
