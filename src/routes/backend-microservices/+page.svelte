<script lang="ts">
	import Footer from '../../components/Footer.svelte';
	import Navbar from '../../components/Navbar.svelte';
	import ScrollAnimation from '../../components/ScrollAnimation.svelte';

	export let data: {
		heading: String;
		description: String;
		sections: {
			heading: String;
			description: String;
		}[];
	};
</script>

<Navbar />

<div class=" text-gray-900 font-sans min-h-screen">
	<!-- banner content -->
	<div class="relative h-screen flex content-center items-center justify-center">
		<div
			class="absolute top-0 w-full h-full bg-center bg-cover bg-fixed"
			style="background-image: url('/backend-microservice.jpg');"
		>
			<span id="blackOverlay" class="w-full h-full absolute opacity-70 bg-black"></span>
		</div>
		<div class="container relative mx-auto">
			<div class="items-center flex justify-center">
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

	<!-- Main Content -->
	<main class="p-4 sm:p-6 md:p-8 lg:p-10 space-y-6 sm:space-y-8 md:space-y-10 bg-[#f7f6f6]">
		{#each data.sections as section}
			<ScrollAnimation>
				<section
					class="relative bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-md pl-6 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
				>
					<div
						class="absolute inset-0 bg-orange-600 sm:rounded-l-lg sm:w-2 sm:h-full w-full h-2 rounded-t-lg rounded-l-none"
					></div>
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
</div>

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
