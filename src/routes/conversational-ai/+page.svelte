<script lang="ts">
	import Icon from '@iconify/svelte';
	import Navbar from '../../components/Navbar.svelte';
	import ScrollAnimation from '../../components/ScrollAnimation.svelte';
	export let data: {
		heading:string;
		description:string;
		sections: { id: number; title: string; description: string }[];
		technologies: { name: string; description: string }[];
		whyChooseUs: { title: string; description: string; icon: string }[];
	};
</script>

<main>
	<Navbar />

	<div class="relative h-screen flex content-center items-center justify-center">
		<div
			class="absolute top-0 w-full h-full bg-center bg-cover bg-fixed"
			style="background-image: url('/conversation-ai.jpg');"
		>
			<span id="blackOverlay" class="w-full h-full absolute opacity-75 bg-black"></span>
		</div>
		<div class="container relative mx-auto">
			<div class="items-center flex flex-wrap">
				<div class="w-full lg:w-8/12 mr-auto ml-auto text-center px-5">
					<div class="">
						<h1
							class="text-white font-semibold text-xl md:text-4xl opacity-0 animate-headingFadeIn"
						>
							{data.heading}
						</h1>
						<p class="mt-4 text-md md:text-lg text-gray-300 opacity-0 animate-textFadeIn">
							{data.description}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class=" text-gray-800 px-5">
		<div class="container mx-auto px-4 py-12">
			<!-- Expertise Section -->
			<section class="mb-12">
				<h2 class="text-lg md:text-xl font-semibold text-gray-800 mb-6 text-center">
					Our Expertise
				</h2>

				<div class="grid md:grid-cols-3 gap-8">
					{#each data.sections as section}
						<ScrollAnimation>
							<div class="bg-white p-6 rounded-lg shadow-md">
								<h3 class="text-lg font-semibold text-orange-600 mb-4">
									{section.id}. {section.title}
								</h3>
								<p class="text-sm">{section.description}</p>
							</div>
						</ScrollAnimation>
					{/each}
				</div>
			</section>

			<!-- Technologies Section -->
			<!-- Technologies Section -->
			<section class="mb-12">
				<h2 class="text-lg md:text-xl text-center font-semibold text-gray-700 mb-6">
					Technologies We Use
				</h2>
				<ul class="list-disc pl-6">
					{#each data.technologies as tech}
						<li class="mb-2">
							<strong>{tech.name}</strong>: {tech.description}
						</li>
					{/each}
				</ul>
			</section>

			<!-- Why Choose Us Section -->
			<section class="mb-12 bg-[#f7f6f6] md:p-10 py-10 m-0">
				<h2 class="text-lg md:text-xl text-center font-semibold text-gray-800 mb-8">
					Why Choose Us?
				</h2>
				<div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
					{#each data.whyChooseUs as item}
						<ScrollAnimation>
							<div
								class="bg-white p-6 rounded-xl shadow-lg text-center transition-transform transform hover:scale-105"
							>
								<div class="flex justify-center mb-3">
									<div class="text-white p-3 w-16 h-16 rounded-full">
										<Icon
											icon={item.icon}
											width="40"
											height="40"
											class="text-orange-600 sm:mb-0 sm:h-10 sm:w-10"
										/>
									</div>
								</div>
								<h3 class="text-lg font-semibold mb-2">{item.title}</h3>
								<p class="text-gray-600 text-sm">{item.description}</p>
							</div>
						</ScrollAnimation>
					{/each}
				</div>
			</section>

			<!-- Call to Action Section -->
			<section class="text-center">
				<h2 class="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
					Transform Your Customer Interactions Today
				</h2>
				<p class="mb-6">
					Ready to elevate your customer service to the next level? Let’s build a smarter, more
					responsive chatbot that not only meets but exceeds your customers’ expectations. Contact
					us today to learn more about how our AI-powered solutions can benefit your business.
				</p>
			</section>
		</div>
	</div>
</main>

<style>
	@keyframes fadeInUp {
		0% {
			opacity: 0;
			transform: translateY(20px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-headingFadeIn {
		animation: fadeInUp ease-out 1s forwards;
		animation-delay: 0.2s;
	}

	.animate-textFadeIn {
		animation: fadeInUp ease-out 1s forwards;
		animation-delay: 0.5s;
	}
</style>