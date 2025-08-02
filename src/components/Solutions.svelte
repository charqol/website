<script>
	import Icon from '@iconify/svelte';
</script>

<!-- solutions -->

<div class="bg-[#f7f6f6] py-12 px-10">
	<div class="">
		<div class="container mx-auto flex flex-col items-center">
			<h1 class="text-lg xl:text-2xl font-bold text-gray-700 tracking-wide mb-6">Our Solutions</h1>
			<div
			class="border-t-2 md:border-l-2 md:hidden border-orange-500 w-20 md:w-auto h-0 md:h-10 mx-4 md:mx-4"
		></div>
		</div>
	</div>

	<div class="container py-5 md:px-6 mx-auto md:py-10">
		<div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:h-72">
			<!-- Card 1 -->
			<a
				href="/product-engineering"
				class="relative p-6 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 group bg-white hover:shadow-2xl"
			>
				<div
					class="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform transform group-hover:scale-105 duration-300"
					style="background-image: url('product-eng.jpg');"
				>
					<div class="absolute inset-0 bg-black opacity-60"></div>
				</div>

				<div class="relative z-10 flex flex-col items-center justify-center h-full text-center">
					<h2
						class="text-xl font-semibold mb-2 text-white transform transition-transform duration-500 ease-out group-hover:-translate-y-2"
					>
						Product Engineering
					</h2>
					<p
						class="my-4 text-gray-200 transform transition-transform duration-500 ease-out group-hover:-translate-y-2 delay-150"
					>
						Transform your ideas into market-ready products with our comprehensive engineering
						services.
					</p>
					<p
						class="text-white flex items-center justify-center transform transition-transform duration-500 ease-out group-hover:-translate-y-2 delay-300"
					>
						Learn More
						<span
							class="ml-2 transform transition-transform duration-500 ease-out group-hover:translate-x-1"
						>
							→
						</span>
					</p>
				</div>
			</a>

			<!-- Card 2 -->
			<a
				href="/chatbot-solution"
				class="relative p-8 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 group bg-white hover:shadow-2xl"
			>
				<div
					class="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform transform group-hover:scale-105 duration-300"
					style="background-image: url('chatbot-soln.jpg');"
				>
					<div class="absolute inset-0 bg-black opacity-60"></div>
				</div>

				<div class="relative z-10 flex flex-col items-center justify-center h-full text-center">
					<h2
						class="text-xl font-semibold mb-2 text-white transform transition-transform duration-500 ease-out group-hover:-translate-y-2"
					>
						Chatbot Solutions
					</h2>
					<p
						class="my-4 text-gray-200 transform transition-transform duration-500 ease-out group-hover:-translate-y-2 delay-150"
					>
						Revolutionize user interaction with intelligent, responsive, and context-aware
						conversational agents.
					</p>
					<p
						class="text-white flex items-center justify-center transform transition-transform duration-500 ease-out group-hover:-translate-y-2 delay-300"
					>
						Learn More
						<span
							class="ml-2 transform transition-transform duration-500 ease-out group-hover:translate-x-1"
						>
							→
						</span>
					</p>
				</div>
			</a>

			<!-- Card 3 -->
			<a
				href="/saas-development"
				class="relative p-8 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 group bg-white hover:shadow-2xl"
			>
				<div
					class="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform transform group-hover:scale-105 duration-300"
					style="background-image: url('saas-dev.jpg');"
				>
					<div class="absolute inset-0 bg-black opacity-60"></div>
				</div>

				<div class="relative z-10 flex flex-col items-center justify-center h-full text-center">
					<h2
						class="text-xl font-semibold mb-2 text-white transform transition-transform duration-500 ease-out group-hover:-translate-y-2"
					>
						SaaS Development
					</h2>
					<p
						class="my-4 text-gray-200 transform transition-transform duration-500 ease-out group-hover:-translate-y-2 delay-150"
					>
						Elevate your business with our cutting-edge SaaS solutions designed to enhance
						scalability.
					</p>
					<p
						class="text-white flex items-center justify-center transform transition-transform duration-500 ease-out group-hover:-translate-y-2 delay-300"
					>
						Learn More
						<span
							class="ml-2 transform transition-transform duration-500 ease-out group-hover:translate-x-1"
						>
							→
						</span>
					</p>
				</div>
			</a>
		</div>
	</div>
</div>

<!-- Services -->

<div class="container px-4 sm:px-6 lg:px-8 mx-auto py-12 sm:py-16 bg-white text-gray-600">
	<div class="flex flex-col  items-center">
		<h1 class="text-lg xl:text-2xl font-bold text-gray-700 tracking-wide mb-6">
			Our Services
		</h1>
		<div
			class="border-t-2 md:border-l-2 md:hidden border-orange-500 w-20 md:w-auto h-0 md:h-10 mx-4 md:mx-4"
		></div>
	</div>
	

	<div class="space-y-12 sm:space-y-16 py-5 md:py-10 text-center md:text-start">
		<!-- Section 1 -->
		<div
			class="flex flex-col md:flex-row items-center space-y-6 sm:space-y-8 md:space-y-0 md:space-x-8 mx-0 sm:mx-4 md:mx-6 lg:mx-8 overflow-hidden"
		>
			<div class="md:w-1/2 px-4 sm:px-6 md:px-0" data-aos="fade-right">
				<h2 class="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
					Backend Microservices
				</h2>
				<p class="text-base sm:text-md leading-relaxed">
					Enhance the scalability, flexibility, and performance of your applications with our robust
					microservices architecture.
				</p>
				<a
					href="/backend-microservices"
					class="inline-block mt-4 text-gray-900 hover:text-orange-600 duration-150 hover:underline"
				>
					Learn More →
				</a>
			</div>
			<div class="md:w-2/4 relative px-4 sm:px-6 md:px-0" data-aos="fade-up">
				<img
					src="backend-microservice.jpg"
					alt="Backend Microservices"
					class="w-full h-56 sm:h-72 md:h-56 object-cover bg-center rounded-lg shadow-lg transition-transform transform hover:scale-105"
				/>
			</div>
		</div>

		<!-- Section2 -->
		<div
			class="flex flex-col-reverse md:flex-row items-center space-y-6 sm:space-y-8 md:space-y-0 md:space-x-8 mx-0 sm:mx-4 md:mx-6 lg:mx-8 overflow-hidden"
		>
			<div class="md:w-1/2 relative py-4 px-4 md:py-0 sm:px-6 md:px-0" data-aos="fade-up">
				<img
					src="cloud-native.jpg"
					alt="Cloud Ops and Cloud Native Development"
					class="w-full h-56 sm:h-72 md:h-56 object-cover bg-center rounded-lg shadow-lg transition-transform transform hover:scale-105"
				/>
			</div>
			<div class="md:w-1/2 px-4 sm:px-6 md:px-0" data-aos="fade-left">
				<h2 class="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
					Cloud Ops and Cloud Native Development
				</h2>
				<p class="text-base sm:text-md leading-relaxed">
					Our chatbot solutions are designed to revolutionize user interaction by providing
					intelligent, responsive, and context-aware conversational agents.
				</p>
				<a
					href="/cloud-native"
					class="inline-block mt-4 text-gray-900 hover:text-orange-600 duration-150 hover:underline"
				>
					Learn More →
				</a>
			</div>
		</div>
		<!-- Section 3 -->
		<div
			class="flex flex-col md:flex-row items-center space-y-6 sm:space-y-8 md:space-y-0 md:space-x-8 mx-0 sm:mx-4 md:mx-6 lg:mx-8 overflow-hidden"
		>
			<div class="md:w-1/2 px-4 sm:px-6 md:px-0" data-aos="fade-right">
				<h2 class="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
					Web Frontend Development
				</h2>
				<p class="text-base sm:text-md leading-relaxed">
					In the digital age, the frontend of your web application is the first interaction users
					have with your product.
				</p>
				<a
					href="/web-frontend"
					class="inline-block mt-4 text-gray-900 hover:text-orange-600 duration-150 hover:underline"
				>
					Learn More →
				</a>
			</div>
			<div class="md:w-1/2 relative px-4 sm:px-6 md:px-0" data-aos="fade-up">
				<img
					src="web-frontend.jpg"
					alt="Web Frontend Development"
					class="w-full h-56 sm:h-72 md:h-56 object-cover bg-center rounded-lg shadow-lg transition-transform transform hover:scale-105"
				/>
			</div>
		</div>

		<!-- Section 4 -->
		<div
			class="flex flex-col-reverse md:flex-row items-center space-y-6 sm:space-y-8 md:space-y-0 md:space-x-8 mx-0 sm:mx-4 md:mx-6 lg:mx-8 overflow-hidden"
		>
			<div class="md:w-1/2 relative py-4 px-4 md:py-0 sm:px-6 md:px-0" data-aos="fade-up">
				<img
					src="mob-app-dev.jpg"
					alt="Mobile App Development"
					class="w-full h-56 sm:h-72 md:h-56 object-cover bg-center rounded-lg shadow-lg transition-transform transform hover:scale-105"
				/>
			</div>
			<div class="md:w-1/2 px-4 sm:px-6 md:px-0" data-aos="fade-left">
				<h2 class="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
					Mobile App Development
				</h2>
				<p class="text-base sm:text-md leading-relaxed">
					Our mobile app development services focus on creating innovative and functional
					applications that cater to the unique needs of your audience.
				</p>
				<a
					href="/mobile-app-dev"
					class="inline-block mt-4 text-gray-900 hover:text-orange-600 duration-150 hover:underline"
				>
					Learn More →
				</a>
			</div>
		</div>

		<!-- Section 5 -->
		<div
			class="flex flex-col md:flex-row items-center space-y-6 sm:space-y-8 md:space-y-0 md:space-x-8 mx-0 sm:mx-4 md:mx-6 lg:mx-8 overflow-hidden"
		>
			<div class="md:w-1/2 px-4 sm:px-6 md:px-0" data-aos="fade-right">
				<h2 class="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">AI/ML Services</h2>
				<p class="text-base sm:text-md leading-relaxed">
					In the digital age, the frontend of your web application is the first interaction users
					have with your produmd.
				</p>
				<a
					href="/ai-ml"
					class="inline-block mt-4 text-gray-900 hover:text-orange-600 duration-150 hover:underline"
				>
					Learn More →
				</a>
			</div>
			<div class="md:w-1/2 relative px-4 sm:px-6 md:px-0" data-aos="fade-up">
				<img
					src="AIML.jpg"
					alt="Web Frontend Development"
					class="w-full h-56 sm:h-72 md:h-56 object-cover bg-center rounded-lg shadow-lg transition-transform transform hover:scale-105"
				/>
			</div>
		</div>

		<!-- section 6 -->
		<div
			class="flex flex-col-reverse md:flex-row items-center space-y-6 sm:space-y-8 md:space-y-0 md:space-x-8 mx-0 sm:mx-4 md:mx-6 lg:mx-8 overflow-hidden"
		>
			<div class="md:w-1/2 relative py-4 px-4 md:py-0 sm:px-6 md:px-0" data-aos="fade-up">
				<img
					src="data-pipelines.jpg"
					alt="data-pipelines"
					class="w-full h-56 sm:h-72 md:h-56 object-cover bg-center rounded-lg shadow-lg transition-transform transform hover:scale-105"
				/>
			</div>
			<div class="md:w-1/2 px-4 sm:px-6 md:px-0" data-aos="fade-left">
				<h2 class="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
					Data Analytics and Pipelines
				</h2>
				<p class="text-base sm:text-md leading-relaxed">
					Our mobile app development services focus on creating innovative and functional
					applications that cater to the unique needs of your audience.
				</p>
				<a
					href="/data-analytics"
					class="inline-block mt-4 text-gray-900 hover:text-orange-600 duration-150 hover:underline"
				>
					Learn More →
				</a>
			</div>
		</div>

		<!-- section 7 -->
		<div
			class="flex flex-col md:flex-row items-center space-y-6 sm:space-y-8 md:space-y-0 md:space-x-8 mx-0 sm:mx-4 md:mx-6 lg:mx-8 overflow-hidden"
		>
			<div class="md:w-1/2 px-4 sm:px-6 md:px-0" data-aos="fade-right">
				<h2 class="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
					Bespoke Software Development
				</h2>
				<p class="text-base sm:text-md leading-relaxed">
					No two businesses are alike, and our bespoke software development services reflect that
					uniqueness.
				</p>
				<a
					href="/bespoke-development"
					class="inline-block mt-4 text-gray-900 hover:text-orange-600 duration-150 hover:underline"
				>
					Learn More →
				</a>
			</div>
			<div class="md:w-1/2 relative px-4 sm:px-6 md:px-0" data-aos="fade-up">
				<img
					src="bespoke-development.jpg"
					alt="bespoke-development"
					class="w-full h-56 sm:h-72 md:h-56 object-cover bg-center rounded-lg shadow-lg transition-transform transform hover:scale-105"
				/>
			</div>
		</div>

		<!-- section 8 -->
		<div
			class="flex flex-col-reverse md:flex-row items-center space-y-6 sm:space-y-8 md:space-y-0 md:space-x-8 mx-0 sm:mx-4 md:mx-6 lg:mx-8 overflow-hidden"
		>
			<div class="md:w-1/2 relative py-4 px-4 md:py-0 sm:px-6 md:px-0" data-aos="fade-up">
				<img
					src="quality-automation.jpg"
					alt="Mobile App Development"
					class="w-full h-56 sm:h-72 md:h-56 object-cover bg-center rounded-lg shadow-lg transition-transform transform hover:scale-105"
				/>
			</div>
			<div class="md:w-1/2 px-4 sm:px-6 md:px-0" data-aos="fade-left">
				<h2 class="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
					Quality and Automation Testing
				</h2>
				<p class="text-base sm:text-md leading-relaxed">
					Quality is non-negotiable in software development, and our quality and automation testing
					services are designed to ensure your products meet the highest standards.
				</p>
				<a
					href="/quality-automation"
					class="inline-block mt-4 text-gray-900 hover:text-orange-600 duration-150 hover:underline"
				>
					Learn More →
				</a>
			</div>
		</div>
	</div>
</div>
