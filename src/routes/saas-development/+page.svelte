<script lang="ts">
	import Footer from '../../components/Footer.svelte';
	import Navbar from '../../components/Navbar.svelte';
	import ScrollAnimation from '../../components/ScrollAnimation.svelte';
	export let data: {
		heading: string;
		description: string;
		sections: {
			heading: string;
			description: string;
		}[];
	};
</script>

<main>
	<Navbar />

	<div class="relative h-screen py-10 flex content-center items-center justify-center">
		<div
			class="absolute top-0 w-full h-full bg-center bg-cover bg-fixed"
			style="background-image: url('/saas-dev.jpg');"
		>
			<span id="blackOverlay" class="w-full h-full absolute opacity-70 bg-black"></span>
		</div>
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
	<main class="p-4 sm:p-6 md:p-8 lg:p-10 space-y-6 sm:space-y-8 md:space-y-10 px-5 bg-[#f7f6f6]">
		{#each data.sections as section}
			<ScrollAnimation>
				<section
					class="relative bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-md pl-6 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
				>
					<div class="absolute inset-0 bg-gray-600 rounded-l-lg w-2 h-full"></div>
					<h2 class="text-xl sm:text-2xl font-bold text-gray-700 mb-2 sm:mb-3 md:mb-4">
						{section.heading}
					</h2>
					<p class="text-gray-600 leading-relaxed text-sm sm:text-base md:text-md">
						{section.description}
					</p>
				</section>
			</ScrollAnimation>
		{/each}
	</main>

	<Footer />
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
