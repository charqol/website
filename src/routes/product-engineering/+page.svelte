<script lang="ts">
	import Icon from '@iconify/svelte';
	import Navbar from '../../components/Navbar.svelte';
	import ScrollAnimation from '../../components/ScrollAnimation.svelte';
	import Footer from '../../components/Footer.svelte';

	export let data: {
		heading: string;
		description: string;
		short_description: string;
		differentiators: {
			icon: string;
			heading: string;
			description: string;
		}[];
		stages: {
			icon: string;
			heading: string;
			sub_stages: {
				icon: string;
				heading: string;
				description: string;
			}[];
		}[];
	};
</script>

<Navbar />

<main>
	<div class="relative h-screen flex content-center items-center justify-center">
		<!-- bg img -->
		<div
			class="absolute top-0 w-full h-full bg-center bg-cover bg-fixed"
			style="background-image: url('/product-eng.jpg');"
		>
			<span id="blackOverlay" class="w-full h-full absolute opacity-75 bg-black"></span>
		</div>
		<!-- banner content -->
		<div class="container relative mx-auto">
			<div class="items-center flex flex-wrap">
				<div class="w-full lg:w-8/12 px-4 mr-auto ml-auto text-center">
					<div class="">
						<h1
							class="text-white font-semibold text-2xl md:text-5xl opacity-0 animate-headingFadeIn"
						>
							{data.heading}
						</h1>
						<p class="mt-4 text-sm md:text-lg text-gray-300 opacity-0 animate-textFadeIn">
							{data.description}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- main content -->
	<div>
		<ScrollAnimation>
			<p class="text-gray-700 text-md leading-relaxed py-10 mx-10">
				{data.short_description}
			</p>
		</ScrollAnimation>
	</div>

	<!-- Differentiators -->
	<section id="solutions" class=" px-4 py-10 bg-[#f7f6f6]">
		<h2 class="text-2xl font-bold text-center mb-8">Our Differentiators</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-5">
			{#each data.differentiators as differentiator}
				<ScrollAnimation>
					<div
						class="bg-white p-6 rounded-xl shadow-lg text-center transition-transform transform hover:scale-105"
					>
						<div class="flex justify-center mb-3">
							<div class="  text-white p-3 w-16 h-16 rounded-full">
								<Icon
									icon={differentiator.icon}
									width="40"
									height="40"
									class="text-orange-600 sm:mb-0 sm:h-10 sm:w-10"
								/>
							</div>
						</div>
						<h3 class="text-lg font-semibold mb-2">{differentiator.heading}</h3>
						<p class="text-gray-600">
							{differentiator.description}
						</p>
					</div>
				</ScrollAnimation>
			{/each}
		</div>
	</section>


	<!-- project stages -->
	<div>
		<header class="bg-white text-gray-800 py-8 px-4 border-b border-gray-200">
			<div class="container mx-auto flex flex-col items-center">
				<div class="flex items-center mb-4">
					<Icon icon="fluent:document-breadcrumb-20-regular" class="text-3xl text-blue-600 mr-3" />
					<h1 class="text-2xl font-semibold">Project Stages</h1>
				</div>
				<p class="text-md text-gray-500">
					A comprehensive guide to each stage of the project development lifecycle.
				</p>
			</div>
		</header>
		<div class="container sm:px-10 px-4 py-12">
			{#each data.stages as stages}
				<ScrollAnimation>
					<section class="mb-12 mx-6 md:mx-0">
						<h2 class="text-2xl font-semibold mb-4 flex items-center">
							<Icon icon={stages.icon} class="text-4xl mx-2" />
							{stages.heading}
						</h2>

						<div
							class="relative bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-md pl-6 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
						>
							<div class="absolute inset-0 bg-orange-600 rounded-l-lg w-2 h-full"></div>
							{#each stages.sub_stages as sub_stages}
								<div class="flex items-start mb-4">
									<div class="icon-container icon-blue px-3">
										<Icon icon={sub_stages.icon} class="text-2xl my-2" />
									</div>
									<div>
										<h3 class="text-xl font-semibold">{sub_stages.heading}</h3>
										<p class="mt-2">
											{sub_stages.description}
										</p>
									</div>
								</div>
							{/each}
						</div>
					</section>
				</ScrollAnimation>
			{/each}
		</div>
	</div>
</main>
<Footer />

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
