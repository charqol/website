export const load = async () => {
	const heading = 'Data Analytics and Pipelines';
	const description =
		'Data is the lifeblood of modern business, and our data analytics and pipeline services are designed to ensure you’re leveraging it to its full potential. We help organizations build robust data pipelines and deploy advanced analytics to gain deep insights, driving smarter decisions and better outcomes.';
	const sections = [
		{
			heading: 'Data Pipeline Design and Implementation',
			description:
				'We build efficient, scalable data pipelines and services that move data from various sources to your analytics platform, ensuring real-time data flow and accessibility.'
		},
		{
			heading: 'ETL (Extract, Transform, Load) Services',
			description:
				'	Our ETL services ensure that your data is properly extracted, transformed, and loaded into your data warehouse, maintaining data integrity and consistency.'
		},
		{
			heading: 'Advanced Analytics',
			description:
				'Our advanced analytics services provide predictive and prescriptive insights, helping you make data-driven decisions with confidence.'
		},
		{
			heading: 'Data Visualization',
			description:
				'Transform complex data into intuitive, actionable insights with our data visualization services, using tools like Power BI, Tableau, and custom dashboards.'
		}
	];

	return {
		heading,
		description,
		sections
	};
};
