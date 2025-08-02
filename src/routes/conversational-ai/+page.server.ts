export const load = async () => {
	const heading = 'Unlock the Future of Conversational AI with Cutting-Edge Technologies';
	const description =
		'At Inflection Zone, we are at the forefront in leveraging the latest advancements in Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and sophisticated conversation routing to deliver bespoke chatbot solutions that transform how businesses interact with their customers.';
	const sections = [
		{
			id: 1,
			title: 'Large Language Models (LLMs)',
			description:
				'Harness the power of state-of-the-art LLMs to create intelligent chatbots capable of understanding and generating human-like responses. We specialize in fine-tuning and deploying LLMs to suit your business needs, ensuring your chatbot delivers contextually accurate and engaging conversations.'
		},
		{
			id: 2,
			title: 'Retrieval-Augmented Generation',
			description:
				"Enhance your chatbot's performance with RAG, a cutting-edge approach that combines the strengths of retrieval-based and generative models. By integrating RAG into your chatbot, we ensure that it not only generates responses but also retrieves relevant information from vast datasets, making it an invaluable tool for knowledge-intensive applications."
		},
		{
			id: 3,
			title: 'Conversation Routing',
			description:
				'We design intelligent conversation routing systems that ensure every customer query reaches the right virtual or human agent. Our solutions streamline interactions, reduce response times, and improve customer satisfaction by directing conversations based on intent, complexity, and user history.'
		}
	];

	const technologies = [
		{
			name: 'Langchain',
			description:
				'We utilize Langchain to create sophisticated chains of prompts that enable your chatbot to handle complex dialogues with ease.'
		},
		{
			name: 'Langgraph',
			description:
				'With Langgraph, we craft dynamic and interactive conversation flows that adapt to user inputs, ensuring a smooth and intuitive user experience.'
		},
		{
			name: 'Langflow',
			description:
				'Langflow allows us to design flexible and scalable conversation architectures, enabling your chatbot to grow and evolve alongside your business.'
		}
	];

	const whyChooseUs = [
		{
			title: 'Tailored Solutions',
			description:
				'We don’t believe in one-size-fits-all. Our team works closely with you to develop AI solutions that are perfectly aligned with your business goals.',
			icon: 'mdi:cog-outline'
		},
		{
			title: 'Cutting-Edge Expertise',
			description:
				'Stay ahead of the curve with our deep expertise in LLMs, RAG, and conversation routing. We are constantly exploring new technologies to enhance our offerings.',
			icon: 'mdi:lightbulb-outline'
		},
		{
			title: 'Scalable and Robust',
			description:
				'Whether you’re a startup or an enterprise, our solutions are designed to scale as your business grows, ensuring long-term value and performance.',
			icon: 'mdi:chart-areaspline'
		}
	];

	// Function to load data for the page

		return {
            heading,
            description,
			sections,
			technologies,
			whyChooseUs
		};
	};

