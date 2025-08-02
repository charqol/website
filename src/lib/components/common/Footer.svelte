<script lang="ts">
    import { footerNav, socialLinks, contactInfo } from '$lib/data/navigation';

    function handleNewsletterSubmit(event: SubmitEvent) {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const email = new FormData(form).get('email');
        // TODO: Implement newsletter subscription
        console.log('Newsletter subscription for:', email);
    }
</script>

<footer class="bg-gray-900 text-gray-300 pt-16 pb-6">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
            <!-- Company Info -->
            <div class="space-y-4">
                <h3
                    class="text-2xl font-bold bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent"
                >
                    Charcoal ERP
                </h3>
                <p class="text-gray-400 font-sans">
                    Comprehensive ERP solutions for modern businesses. Streamline your operations with our integrated suite of 18 powerful modules.
                </p>
                <div class="flex space-x-4">
                    {#each socialLinks as link}
                        <a
                            href={link.url}
                            class="text-gray-400 hover:text-primary-400 transition-colors duration-200 transform hover:scale-110"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span class="sr-only">{link.platform}</span>
                            <!-- Add social media icons here -->
                        </a>
                    {/each}
                </div>
            </div>

            <!-- Quick Links -->
            {#each footerNav as section}
                <div class="space-y-4">
                    <h3 class="text-lg font-semibold text-white">{section.title}</h3>
                    <ul class="space-y-2">
                        {#each section.links as link}
                            <li>
                                <a
                                    href={link.href}
                                    class="text-gray-400 hover:text-primary-400 transition-colors duration-200 hover:translate-x-1 inline-block"
                                >
                                    {link.label}
                                </a>
                            </li>
                        {/each}
                    </ul>
                </div>
            {/each}

            <!-- Contact Info -->
            <div class="space-y-4">
                <h3 class="text-lg font-semibold text-white">Contact Us</h3>
                <ul class="space-y-2 text-gray-400">
                    <li class="flex items-center space-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-primary-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                        <span>{contactInfo.address}</span>
                    </li>
                    <li class="flex items-center space-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-primary-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                        </svg>
                        <span>{contactInfo.phone}</span>
                    </li>
                    <li class="flex items-center space-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-primary-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                        <a href="mailto:{contactInfo.email}" class="hover:text-primary-400 transition-colors duration-200">
                            <span>{contactInfo.email}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Newsletter -->
        <!-- <div class="mt-16 border-t border-gray-800 pt-8">
            <div class="max-w-md mx-auto text-center">
                <h3 class="text-xl font-semibold text-white mb-4">Subscribe to our Newsletter</h3>
                <form class="flex gap-2" on:submit={handleNewsletterSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        class="flex-grow px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all duration-200"
                        required
                    />
                    <button
                        type="submit"
                        class="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary-500/25"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div> -->


    </div>
    <!-- Copyright -->
    <!-- Add a very thin line here -->
    <div class="mt-4 border-t border-gray-800"></div>
    <div class="mt-4 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Charcoal ERP. All rights reserved.</p>
    </div>
</footer>
