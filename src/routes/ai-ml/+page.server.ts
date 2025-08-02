
export const load = async () => {
	const heading = 'AI/ML & Data Analysis Services';
	const description =
		'We work closely with clients to develop AI/ML solutions that align with their strategic goals and drive innovation. Our methodology when it comes to AI/ML and data analysis services is multi-layered.';
	const sections = [
		{
			heading: 'Machine Learning Model Development',
			description:
				'We design, train, and deploy custom machine learning models tailored to your business	needs, from predictive analytics, risk assessment, suggestion systems.'
		},
		{
			heading: 'Computer Vision',
			description:
				'Our computer vision expertise covers feature detection, image and video processing to extract meaningful insights from images and videos, enabling applications such as facial recognition, object detection, manufactuaring quality control and visual search.'
		},
		{
			heading: 'AI-Driven Automation',
			description:
				'Automate routine tasks and decision-making processes with our AI solutions, freeing up valuable resources and reducing operational costs.'
		},
		{
			heading: 'Data Annotation and Preparation',
			description:
				'	We ensure your data is clean, labeled, and ready for AI/ML applications, providing high-quality datasets for model training.'
		}
	];

	return {
		heading,
		description,
		sections
	};
};
