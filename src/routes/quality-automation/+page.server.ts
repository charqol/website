export const load = async () => {
	const heading = 'Quality and Automation Testing';
	const description =
		'	Quality is non-negotiable in software development, and our quality and automation testing services are designed to ensure your products meet the highest standards. We provide comprehensive testing solutions that identify and resolve issues early in the development process, saving time and cost.';
	const sections = [
		{
			heading: 'Functional Testing',
			description:
				'We ensure your software functions as intended, covering all use cases and user scenarios to detect and fix defects.'
		},
		{
			heading: 'Performance Testing',
			description:
				'Our performance testing services evaluate how your software performs under various conditions, ensuring it can handle high traffic and data loads without compromising speed or reliability.'
		},
		{
			heading: 'Security Testing',
			description:
				'We identify and address potential security vulnerabilities, ensuring your software is protected against cyber threats.'
		},
		{
			heading: 'Automation Testing',
			description:
				'We use advanced automation tools to streamline the testing process, reducing time-to-market while ensuring consistent quality.'
		},
		{
			heading: 'Usability Testing',
			description:
				'We assess your software’s user experience, identifying areas for improvement to enhance user satisfaction and engagement.'
		},
		{
			heading: 'Regression Testing',
			description:
				'Our regression testing services ensure that new updates or changes do not introduce new issues, maintaining the integrity of your software over time.'
		}
	];

	return {
		heading,
		description,
		sections
	};
};
