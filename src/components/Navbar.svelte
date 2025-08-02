<script>
    let isOpen = false;

    function toggleMenu() {
        isOpen = !isOpen;
    }
</script>

<nav class="bg-gray-800 border-gray-200 dark:bg-gray-900 fixed w-full z-50">
	<div
		class="max-w-screen-xl flex flex-wrap lg:flex-nowrap items-center justify-between mx-auto p-4 md:p-6 lg:p-4"
	>
		<!-- Logo -->
		<a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
			<img src="inflection logo.png" class="h-8 xl:h-12" alt="Logo" />
			<span class="self-center text-lg xl:text-2xl font-semibold whitespace-nowrap text-white">
				Inflection Zone Lab
			</span>
		</a>

        <!-- Hamburger Button -->
        <button
            on:click={toggleMenu}
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-menu"
            aria-expanded={isOpen ? 'true' : 'false'}
        >
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>

        <!-- Navigation Links and Contact Button -->
        <div id="navbar-menu" class={` text-white lg:flex lg:flex-row items-center justify-between w-full ${isOpen ? 'block' : 'hidden'}`}>
            <ul class="flex flex-col lg:flex-row justify-center flex-grow font-medium lg:space-y-0 space-y-2">
                <li><a href="/" class="block py-2 px-3 hover:text-orange-600 rounded">Home</a></li>
                <li><a href="/" class="block py-2 px-3 hover:text-orange-600 rounded">About us</a></li>

				<li class="relative group">
					<a href="/" class="block py-2 px-3 text-white hover:text-orange-600 rounded">
						Solutions
					</a>
					<div
						class="group-hover:flex absolute hidden bg-gray-800 text-white rounded-lg mt-1 w-[340px] xl:w-[500px]"
					>
						<ul class="py-2 space-y-2">
							<p class="px-3">Solutions</p>
							<li>
								<a
									href="/product-engineering"
									class="block px-4 py-1 xl:py-2 hover:bg-gray-700 hover:text-orange-600 text-sm"
								>
									Product Engineering
								</a>
							</li>
							<li>
								<a
									href="/chatbot-solution"
									class="block px-4 py-1 xl:py-2 hover:bg-gray-700 hover:text-orange-600 text-sm"
								>
									Chatbot Solutions
								</a>
							</li>
							<li>
								<a
									href="/saas-development"
									class="block px-4 py-1 xl:py-2 hover:bg-gray-700 hover:text-orange-600 text-sm"
								>
									SaaS Development
								</a>
							</li>
						</ul>
						<ul class="py-2 space-y-2">
							<p class="px-3">Services</p>
							<li>
								<a
									href="/backend-microservices"
									class="block px-4 py-1 xl:py-2 hover:bg-gray-700 hover:text-orange-600 text-sm"
								>
									Backend Microservices
								</a>
							</li>
							<li>
								<a
									href="/cloud-native"
									class="block px-4 py-1 xl:py-2 hover:bg-gray-700 hover:text-orange-600 text-sm"
								>
									Cloud Ops and Cloud Native Development
								</a>
							</li>
							<li>
								<a
									href="/web-frontend"
									class="block px-4 py-1 xl:py-2 hover:bg-gray-700 hover:text-orange-600 text-sm"
								>
									Web Frontend Development
								</a>
							</li>
							<li>
								<a
									href="/mobile-app-dev"
									class="block px-4 py-1 xl:py-2 hover:bg-gray-700 hover:text-orange-600 text-sm"
								>
									Mobile App Development
								</a>
							</li>
							<li>
								<a
									href="/ai-ml"
									class="block px-4 py-1 xl:py-2 hover:bg-gray-700 hover:text-orange-600 text-sm"
								>
									AI/ML Services
								</a>
							</li>
							<li>
								<a
									href="/data-analytics"
									class="block px-4 py-1 xl:py-2 hover:bg-gray-700 hover:text-orange-600 text-sm"
								>
									Data Analytics and Pipelines
								</a>
							</li>
							<li>
								<a
									href="/bespoke-development"
									class="block px-4 py-1 xl:py-2 hover:bg-gray-700 hover:text-orange-600 text-sm"
								>
									Bespoke Software Development
								</a>
							</li>
							<li>
								<a
									href="/quality-automation"
									class="block px-4 py-1 xl:py-2 hover:bg-gray-700 hover:text-orange-600 text-sm"
								>
									Quality and Automation Testing
								</a>
							</li>
						</ul>
					</div>
				</li>
				<li>
					<a href="/" class="block py-2 px-3 text-white hover:text-orange-600 rounded">
						Technologies
					</a>
				</li>
				<li>
					<a
						href="/industries-served"
						class="block py-2 px-3 text-white hover:text-orange-600 rounded"
					>
						Industries
					</a>
				</li>
				<li>
					<a href="/" class="block py-2 px-3 text-white hover:text-orange-600 rounded">
						Resources
					</a>
				</li>
			</ul>

			<!-- "Contact Us" Button -->
			<a
				href="/"
				class="hidden sm:flex w-fit lg:w-fit items-center text-white justify-center rounded-lg bg-orange-500 hover:bg-orange-600 px-3 py-1.5 xl:px-5 xl:py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">
				<span>Contact Us</span>
			</a>
		</div>
	</div>
</nav>
