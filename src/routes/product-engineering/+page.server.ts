export const load = async () => {
	const heading = 'Product Engineering Excellence';
	const description =
		'Transform your ideas into market-ready products with our comprehensive engineering services. From ideation to deployment, we ensure your product is scalable, robust, and user-friendly.';

	const short_description = `Our Product engineering solutions cover end-to-end life cycle of the product. We help
				customers in designing, developing, and delivering a product from concept to market. This
				includes various stages such as ideation, prototyping, design, development, integration,
				testing, deployment and maintenance. Our team of experts with multi-disciplinary skillsets
				covering these areas focuses on building software products that are robust, scalable, and
				user-friendly. We engage with customers at any of stages of their product life cycle
				journey.`;

	const differentiators = [
		{
			icon: 'carbon:application-mobile',
			heading: 'User-Centric Design',
			description:
				'We prioritize user needs to ensure an intuitive product that meets their expectations.'
		},
		{
			icon: 'mdi:clock-fast',
			heading: 'Efficiency',
			description:
				'Optimizing development with agile methodologies for faster and reliable delivery.'
		},
		{
			icon: 'iconoir:security-pass',
			heading: 'Quality',
			description: 'Ensuring the highest standards with rigorous testing and quality assurance.'
		},
		{
			icon: 'streamline:happy-face',
			heading: 'End User Satisfaction',
			description:
				'Focusing on delivering a product that provides a positive and impactful user experience.'
		},
		{
			icon: 'fluent:arrow-growth-24-filled',
			heading: 'Business Alignment',
			description:
				'Aligning product strategy with business objectives for consistent and impactful outcomes.'
		},
		{
			icon: 'carbon:collaborate',
			heading: 'Cross-Functional Collaboration',
			description:
				'Integrating efforts across teams to ensure a seamless and comprehensive product.'
		},
		{
			icon: 'iconoir:agile',
			heading: 'Iterative Development',
			description:
				'Adopting agile methods to refine the product continuously through multiple iterations.'
		},
		{
			icon: 'material-symbols:speed-outline',
			heading: 'Scalability and Performance',
			description: 'Designing for scalability and high performance to meet growing demands.'
		}
	];

	const stages = [
		{
			icon: 'raphael:roadmap',
			heading: 'Conceptualization and Roadmapping',
			sub_stages: [
				{
					icon: 'hugeicons:brain-02',
					heading: 'Ideation and Brainstorming',
					description:
						'Work with customers to understand user needs, market trends, and competitive landscape. Participate in brainstorming potential solutions and feature sets.'
				},
				{
					icon: 'hugeicons:brain-02',
					heading: 'Feasibility Analysis',
					description:
						'Perform feasibility study to evaluate the technical and economic viability of the ideas.'
				}
			]
		},
		{
			icon: 'gg:list',
			heading: 'Requirement Analysis',
			sub_stages: [
				{
					icon: 'grommet-icons:stakeholder',
					heading: 'Requirement Capture through Stakeholder Engagement',
					description:
						'Work with stakeholders to understand, digest, expand, and contribute to collect detailed requirements.'
				},
				{
					icon: 'uiw:document',
					heading: 'Documentation',
					description:
						'Ensure that documentation is always current, relevant, and precise, avoiding both excess and insufficiency.'
				},
				{
					icon: 'majesticons:map-marker-path-line',
					heading: 'Use Case Development',
					description:
						'	Develop use cases, scenarios, and user stories as the basis of product development, referencing everything against them.'
				}
			]
		},
		{
			icon: 'fluent-mdl2:design',
			heading: 'Design and Planning',
			sub_stages: [
				{
					icon: 'carbon:roadmap',
					heading: 'Project Planning',
					description:
						'Develop a detailed project plan with timelines, resources, and milestones through multi-step and iterative processes.'
				},
				{
					icon: 'fluent:design-ideas-24-regular',
					heading: 'Architecture Design',
					description:
						'Define the technical architecture, including technology stack and design patterns.'
				},
				{
					icon: 'gravity-ui:cloud-nut-hex',
					heading: 'Deployment Architecture',
					description:
						'Decide on deployment infrastructure to ensure secure, performant, and flexible deployment.'
				},
				{
					icon: 'fluent:card-ui-24-regular',
					heading: 'UI/UX Design',
					description:
						'Work on workflows, wireframes, color themes, prototypes, high-resolution designs,and design guidelines/specifications.'
				}
			]
		},
		{
			icon: 'icon-park-outline:source-code',
			heading: 'Development',
			sub_stages: [
				{
					icon: 'icon-park-outline:code-laptop',
					heading: 'Software Development',
					description: 'Implement product features according to design specifications.'
				},
				{
					icon: 'carbon:version',
					heading: 'Version Control',
					description: 'Use version control systems to manage code changes.'
				}
			]
		},
		{
			icon: 'fluent:arrow-join-20-regular',
			heading: 'Integration and Testing',
			sub_stages: [
				{
					icon: 'clarity:ci-cd-line',
					heading: 'Continuous Integration',
					description: 'Automate the build and integration process to detect issues early.'
				},
				{
					icon: 'hugeicons:laptop-performance',
					heading: 'System and Performance Testing',
					description:
						'Conduct comprehensive testing to validate the entire system. Test the product’s performance under various conditions.'
				},
				{
					icon: 'material-symbols-light:security',
					heading: 'Security Testing',
					description: 'Identify and address security vulnerabilities.'
				}
			]
		},
		{
			icon: 'grommet-icons:deploy',
			heading: 'Deployment and Delivery',
			sub_stages: [
				{
					icon: 'eos-icons:service-plan-outlined',
					heading: 'Deployment Planning',
					description: 'Plan the release process, including rollout and rollback strategies.'
				},
				{
					icon: 'icon-park:setting-config',
					heading: 'Environment Configuration',
					description: 'Set up production and staging environments.'
				},
				{
					icon: 'tabler:brand-terraform',
					heading: 'Infrastructure as Code',
					description:
						'Use tools like Terraform and Pulumi to manage and configure cloud infrastructure.'
				},
				{
					icon: 'material-symbols:monitor-heart-outline',
					heading: 'Monitoring and Logging',
					description: 'Incorporate tools to monitor application performance and track errors.'
				}
			]
		},
		{
			icon: 'wpf:maintenance',
			heading: 'Maintenance and Support',
			sub_stages: [
				{
					icon: 'lucide:bug-off',
					heading: 'Bug Fixing and Stability Metrics',
					description: 'Address bugs and issues holistically and practically.'
				},
				{
					icon: 'ic:round-add-task',
					heading: 'Feature Enhancements',
					description:
						'Add new features and improve existing ones based on user feedback and business	needs.'
				},
				{
					icon: 'solar:volume-knob-linear',
					heading: 'Performance Optimization',
					description: 'Continuously monitor and improve the product’s performance.'
				}
			]
		},
		{
			icon: 'ic:outline-analytics',
			heading: 'Evaluation and Analytics',
			sub_stages: [
				{
					icon: 'fluent-mdl2:analytics-view',
					heading: 'Analytics',
					description:
						'Perform in-depth analysis of user interactions with the product, including retention, feature performance, and drop-off points.'
				},
				{
					icon: 'icon-park:change',
					heading: 'Iterative Course Corrections',
					description:
						'Refine and iterate on the product based on evaluation, feedback, and new requirements.'
				}
			]
		}
	];

	return {
		heading,
		description,
		short_description,
		differentiators,
        stages
	};
};
