<script>
	import ScrollAnimation from './ScrollAnimation.svelte';
</script>

<div>
	<div class="bg-gray-800 text-white mx-auto p-4 md:p-6 lg:p-5">
		<div class="container mx-auto flex flex-col md:flex-row justify-center items-center">
			<h1 class="text-lg xl:text-2xl font-semibold text-orange-500 mx-2 mb-2 md:mb-0">
				Excellence Meets
			</h1>
			<div
				class="border-t-2 md:border-l-2 border-orange-500 w-20 md:w-auto h-0 md:h-10 mx-4 md:mx-4"
			></div>
			<p class="rounded py-2 px-3 font-medium text-center md:text-left">
				Innovation - Craftsmanship - Thoroughness - Experience - Speed
			</p>
		</div>
	</div>

	<section class="container mx-auto py-4 pb-7">
		<h2 class="text-lg xl:text-2xl text-center my-12 font-semibold">Working Principles</h2>
		
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 font-medium">
			<ScrollAnimation>
				<div class="text-center">
					<img src="/productivity.jpeg" alt="Productivity" class="mx-auto mb-4 h-40 rounded-3xl" />
					<h3 class="">Productivity</h3>
				</div>
			</ScrollAnimation>

			<ScrollAnimation>
				<div class="text-center">
					<img src="/quality.jpeg" alt="Quality" class="mx-auto mb-4 h-40 rounded-3xl" />
					<h3 class="">Quality</h3>
				</div>
			</ScrollAnimation>

			<ScrollAnimation>
				<div class="text-center">
					<img src="/Transparency.jpeg" alt="Transparency" class="mx-auto mb-4 h-40 rounded-3xl" />
					<h3 class="">Transparency</h3>
				</div>
			</ScrollAnimation>

			<ScrollAnimation>
				<div class="text-center">
					<img src="/Integrity.jpeg" alt="Integrity" class="mx-auto mb-4 h-40 rounded-3xl" />
					<h3 class="">Integrity</h3>
				</div>
			</ScrollAnimation>

			<ScrollAnimation>
				<div class="text-center">
					<img src="/Reliability.jpeg" alt="Reliability" class="mx-auto mb-4 h-40 rounded-3xl" />
					<h3 class="">Reliability</h3>
				</div>
			</ScrollAnimation>

			<ScrollAnimation>
				<div class="text-center">
					<img src="/Processes.jpeg" alt="Processes" class="mx-auto mb-4 h-40 rounded-3xl" />
					<h3 class="">Processes</h3>
				</div>
			</ScrollAnimation>

			<ScrollAnimation>
				<div class="text-center">
					<img src="/Automation.jpeg" alt="Automation" class="mx-auto mb-4 h-40 rounded-3xl" />
					<h3 class="">Automation</h3>
				</div>
			</ScrollAnimation>

			<ScrollAnimation>
				<div class="text-center">
					<img src="/Security.jpeg" alt="Security" class="mx-auto mb-4 h-40 rounded-3xl" />
					<h3 class="">Security</h3>
				</div>
			</ScrollAnimation>
		</div>
	</section>
</div>
