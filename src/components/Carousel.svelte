<script lang="ts">
	import { onMount } from 'svelte';

	let currentIndex = 0;
	let intervalId: any;
	let items = [];
	let totalItems = 0;

	const showSlide = (index: any) => {
		const offset = -index * 100;
		document.getElementById('carouselInner').style.transform = `translateX(${offset}%)`;
	};

	const nextSlide = () => {
		currentIndex = (currentIndex + 1) % totalItems;
		showSlide(currentIndex);
	};

	const prevSlide = () => {
		currentIndex = (currentIndex - 1 + totalItems) % totalItems;
		showSlide(currentIndex);
	};

	$: if (items.length) {
		totalItems = items.length;
	}

	onMount(() => {
		intervalId = setInterval(nextSlide, 5000);

		return () => {
			clearInterval(intervalId);
		};
	});
</script>

<div id="carouselExampleAutoplaying" class="relative overflow-hidden bg-black py-10 h-screen bg-fixed">
	<div class="flex transition-transform duration-700 ease-in-out" id="carouselInner">
		<div class="carousel-item active flex-none w-full" bind:this={items[0]}>
			<div class="swiper-slide relative h-screen overflow-hidden">
				<img
					src="carouselone.png"
					alt="carouselone"
					class="absolute inset-0 w-full h-full z-0 object-cover"
				/>
				<div class="absolute inset-0  opacity-50 z-0"></div>
				<div
					class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center"
				>
					<div class="max-w-2xl text-left md:mx-10">
						<p class="text-white text-xl sm:text-3xl md:text-4xl font-bold mb-4 font-serif">
							Unmatched Accelerated Software Product Development
						</p>
						<p class="text-white text-md  mb-6 font-sans ">
							Redefining development productivity to bring in speed to the process with
							uncompromising quality, reliability, thoroughness.
						</p>
						<button
							class="text-white bg-orange-500 hover:bg-orange-600 font-bold py-2 px-4 rounded"
						>
							Learn More
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="carousel-item flex-none w-full" bind:this={items[1]}>
			<div
				class="h-screen  swiper-slide px-7 lg:px-10 mx-auto flex flex-col gap-y-10 lg:flex-row items-center gap-x-10 justify-center  lg:py-14 overflow-hidden"
			>
				<div class="lg:w-[650px] lg:px-5 flex flex-col sm:gap-y-5 ">
					<h1 class="text-white text-xl sm:text-3xl md:text-4xl font-bold  font-serif mb-2">
						Helping Startups to get there quickly and confidently!
					</h1>

					<p class="text-white  sm:text-md text-sm font-sans mb-2">
						We partner with startups in SaaS sector both in B2B and B2C categories. Startups need
						speed to go to market fast, test concepts out there, come back to drawing board and
						rethink, reinvent, experiment, find market fits and be at the edge of the latest
						technologies. And we understand this very well!
					</p>
					<a
						href="/"
						class="flex w-full lg:w-fit items-center text-white justify-center rounded-lg bg-orange-500 hover:bg-orange-600 px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
					>
						<span>Learn More</span></a
					>
				</div>
				<div
					class="hero-image mb-3 md:px-5 lg:px-0 lg:w-1/3 rounded-xl md:pt-2 lg:pt-0 relative isolate z-10"
				>
					<img class="rounded-xl h-52 md:h-[500px] lg:h-auto" src="carouseltwo.jpeg" alt="" />
				</div>
			</div>
		</div>

		<div class="carousel-item flex-none w-full" bind:this={items[2]}>
			<div
				class="h-screen swiper-slide px-7 lg:px-10 mx-auto flex flex-col gap-y-10 lg:flex-row items-center gap-x-10 justify-center lg:py-12  overflow-hidden"
			>
				<div class="lg:w-[650px] lg:px-5 flex flex-col sm:gap-y-5 ">
					<h1 class="text-white text-xl sm:text-3xl md:text-4xl font-bold  font-serif mb-2">
						Empowering Customer in their Digital Transformation Journey
					</h1>

					<p class="text-white  sm:text-md text-sm font-sans mb-2">
						We help customers across diverse industries to confidently achieve their digital
						transformation goals. Our practical step-by-step approach helps in managing complex
						legacy workloads along with modern technology stacks.
					</p>
					<a
						href="/"
						class="flex w-full lg:w-fit items-center text-white justify-center rounded-lg bg-orange-500 hover:bg-orange-600 px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
					>
						<span>Learn More</span></a
					>
				</div>
				<div
					class="hero-image md:px-5 lg:px-0 lg:w-1/3 rounded-xl md:pt-2 lg:pt-0 relative isolate z-10"
				>
					<img class="rounded-xl h-60 md:h-[500px] lg:h-auto" src="carouselthree.png" alt="" />
				</div>
			</div>
		</div>
	</div>
	<button
		class="absolute hidden md:block top-1/2 left-0 transform -translate-y-1/2  bg-opacity-50 text-white p-2"
		type="button"
		on:click={prevSlide}
	>
		<span class="material-icons">chevron_left</span>
		<span class="sr-only">Previous</span>
	</button>
	<button
		class="absolute hidden md:block top-1/2 right-0 transform -translate-y-1/2  bg-opacity-50 text-white p-2"
		type="button"
		on:click={nextSlide}
	>
		<span class="material-icons">chevron_right</span>
		<span class="sr-only">Next</span>
	</button>
</div>

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

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
