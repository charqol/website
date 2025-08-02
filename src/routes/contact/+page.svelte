<script lang="ts">
    import { contactInfo } from '$lib/data/navigation';
    import { onMount } from 'svelte';
    import { tsParticles } from "@tsparticles/engine";
    import { loadSlim } from "@tsparticles/slim";
    import { fade, fly } from 'svelte/transition';
    import Select from '$lib/components/basic/Select.svelte';
    import { phoneCodes, positionOptions, tsParticlesOptions } from './contact.types';
    import MinimalCallToAction from '$components/common/MinimalCallToAction.svelte';
    import type { PageProps } from '../$types';
    import Seo from '$components/common/Seo.svelte';

    const { data }: PageProps = $props();
    const seo = data?.seo;

    let heroSection: HTMLElement;

    onMount(async () => {
        // Wait for the DOM to be fully loaded
        await new Promise(resolve => setTimeout(resolve, 100));

        if (!heroSection) return;

        await loadSlim(tsParticles);

        // Create a container for particles within the hero section
        const container = document.createElement('div');
        container.id = 'tsparticles';
        container.style.position = 'absolute';
        container.style.inset = '0';
        container.style.zIndex = '10';
        heroSection.appendChild(container);

        await tsParticles.load({
            id: "tsparticles",
            options: tsParticlesOptions
        });
    });

    let formData = {
        firstName: "",
        lastName: "",
        email: "",
        phoneCode: "+1",
        phone: "",
        company: "",
        position: "other",
        message: "",
        service: "custom-software-development"
    };


    let isSubmitting = $state(false);
    let submitSuccess = $state(false);
    let submitError = $state('');

    const services = [
        { value: 'general-inquiry', label: 'General Inquiry' },
        { value: 'custom-software-development', label: 'Custom Software Development' },
        { value: 'web-application-development', label: 'Web Application Development' },
        { value: 'mobile-app-development', label: 'Mobile App Development' },
        { value: 'cloud-solutions', label: 'Cloud Solutions' },
        { value: 'ai-and-machine-learning', label: 'AI & Machine Learning' },
        { value: 'consulting-services', label: 'Consulting Services' },
    ];

    async function handleSubmit() {
        isSubmitting = true;
        submitError = '';

        try {
            // Form validation
            const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'message'];
            for (const field of requiredFields) {
                if (!formData[field as keyof typeof formData]) {
                    throw new Error(`Please fill in the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()} field.`);
                }
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                throw new Error("Please enter a valid email address.");
            }

            // Submit form data to the API endpoint
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Failed to submit form');
            }

            submitSuccess = true;

            // Reset form data on success
            formData = {
                firstName: "",
                lastName: "",
                email: "",
                phoneCode: "+1",
                phone: "",
                company: "",
                position: "other",
                message: "",
                service: "custom-software-development"
            };

        } catch (error) {
            submitError = error instanceof Error ? error.message : 'An unknown error occurred';
        } finally {
            isSubmitting = false;
        }
    }

    // FAQ toggle functionality
    let openFaq: number | null = null;

    function toggleFaq(index: number) {
        openFaq = openFaq === index ? null : index;
    }
</script>

<!-- <svelte:head>
    <title>Contact Us | Inflection Zone Lab</title>
    <meta
        name="description"
        content="Get in touch with our team to discuss your software development needs and discover how we can help your business grow."
    />
</svelte:head> -->

<Seo
    pageTitle={seo?.title}
    pageDescription={seo?.description}
    pageImage={seo?.image}
    pageUrl={seo?.url}
    pageKeywords={seo?.keywords}
    pageCardImage={seo?.cardImage}
    googleAnalyticsId={seo?.googleAnalyticsId}
    companyName={seo?.companyName}
    logo={seo?.logo}
    sameAs={seo?.sameAs}
    contactPoint={seo?.contactPoint}
/>

<!-- Hero Section -->
<section bind:this={heroSection} class="relative py-32 overflow-hidden">
    <!-- Gradient Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary-600 via-gray-800 to-gray-900"></div>

    <!-- Animated Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-r from-primary-600/30 to-purple-800/30 animate-gradient-x"></div>

    <!-- Content -->
    <div class="container mx-auto px-4 relative z-20">
        <div class="max-w-3xl">
            {#key 1}
            <h1
                class="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white"
                transition:fly={{ y: 50, duration: 1000, delay: 200 }}
            >
                Let's Build Something
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-400">
                    Amazing
                </span>
            </h1>
            {/key}
            {#key 2}
            <p
                class="text-xl text-gray-100 mb-8 leading-relaxed"
                transition:fly={{ y: 50, duration: 1000, delay: 400 }}
            >
                Have a project in mind? We're here to turn your ideas into reality with cutting-edge technology and innovative solutions.
            </p>
            {/key}
            {#key 3}
            <div
                class="flex flex-wrap gap-4"
                transition:fly={{ y: 50, duration: 1000, delay: 600 }}
            >
                <a href="#contact-form" class="px-8 py-3 bg-white text-primary-600 rounded-md font-semibold hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    Start a Project
                </a>
                <a href="/services" class="px-8 py-3 bg-transparent border-2 border-white text-white rounded-md font-semibold hover:bg-white hover:text-primary-600 transform hover:scale-105 transition-all duration-300">
                    Learn More
                </a>
            </div>
            {/key}
        </div>
    </div>

    <!-- Decorative Elements -->
    <div class="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-white/10 to-transparent rounded-tl-full"></div>
    <div class="absolute top-0 left-0 w-1/4 h-1/4 bg-gradient-to-br from-white/10 to-transparent rounded-br-full"></div>
</section>

<!-- Contact Section -->
<section id="contact-form" class="py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Contact Form -->
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-lg">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Us a Message</h2>

                {#if submitSuccess}
                    <div class="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100 p-4 rounded-md mb-6" transition:fade={{ duration: 300 }}>
                        <p class="mb-2"><strong>Thank you for your message!</strong> We'll get back to you soon.</p>
                        <p>A confirmation email has been sent to your provided email address.</p>
                    </div>
                {:else}
                    <form onsubmit={handleSubmit} class="space-y-6">
                        <!-- Name Fields (improved layout) -->
                        <div class="grid grid-cols-12 gap-4">
                            <div class="col-span-6">
                                <label
                                    for="firstName"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                    >First Name <span class="text-red-600">*</span></label
                                >
                                <input
                                    type="text"
                                    id="firstName"
                                    placeholder="Your first name"
                                    required
                                    bind:value={formData.firstName}
                                    class="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                />
                            </div>
                            <div class="col-span-6">
                                <label
                                    for="lastName"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                    >Last Name <span class="text-red-600">*</span></label
                                >
                                <input
                                    type="text"
                                    id="lastName"
                                    placeholder="Your last name"
                                    required
                                    bind:value={formData.lastName}
                                    class="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <!-- Email -->
                        <div>
                            <label
                                for="email"
                                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                >Email <span class="text-red-600">*</span></label
                            >
                            <input
                                type="email"
                                id="email"
                                placeholder="Your email address"
                                bind:value={formData.email}
                                required
                                class="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                        </div>

                        <!-- Phone Number -->
                        <div class="grid grid-cols-12 gap-4">
                            <div class="col-span-5 sm:col-span-3">
                                <label
                                    for="prefix"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Code</label
                                >
                                <Select
                                    id="phoneCode"
                                    bind:value={formData.phoneCode}
                                    options={phoneCodes}
                                />
                            </div>
                            <div class="col-span-7 sm:col-span-9">
                                <label
                                    for="phone"
                                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                    >Phone Number <span class="text-red-600">*</span></label
                                >
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder="Your phone number"
                                    bind:value={formData.phone}
                                    class="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <!-- Company and Position -->
                        <div>
                            <label
                                for="company"
                                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                >Company</label
                            >
                            <input
                                type="text"
                                id="company"
                                placeholder="Your company name here (optional)"
                                bind:value={formData.company}
                                class="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label
                                for="position"
                                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                >Position / Title</label
                            >
                            <Select
                                id="position"
                                bind:value={formData.position}
                                options={positionOptions}
                            />
                        </div>

                        <!-- Service Interest -->
                        <div>
                            <label for="service" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                >Service Interest</label
                            >
                            <Select
                                id="service"
                                bind:value={formData.service}
                                options={services}
                            />
                        </div>

                        <!-- Message -->
                        <div>
                            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                >Message<span class="text-red-600">*</span></label
                            >
                            <textarea
                                id="message"
                                bind:value={formData.message}
                                required
                                rows="4"
                                placeholder="Details to help us understand your needs"
                                class="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            ></textarea>
                        </div>

                        {#if submitError}
                            <div class="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 p-4 rounded-md" transition:fade={{ duration: 300 }}>
                                {submitError}
                            </div>
                        {/if}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            class="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {#if isSubmitting}
                                <span class="inline-block animate-spin mr-2">↻</span> Sending...
                            {:else}
                                Send Message
                            {/if}
                        </button>
                    </form>
                {/if}
            </div>

            <!-- Contact Information -->
            <div class="space-y-8">
                <div>
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h2>
                    <p class="text-gray-600 dark:text-gray-300 mb-6">
                        Have questions about our services or want to discuss your project? We're here to help!
                    </p>
                </div>

                <div class="space-y-6">
                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0">
                            <svg class="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Phone</h3>
                            <p class="text-gray-600 dark:text-gray-300">{contactInfo.phone}</p>
                        </div>
                    </div>

                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0">
                            <svg class="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
                            <a href="mailto:{contactInfo.email}" class="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200">
                                {contactInfo.email}
                            </a>
                        </div>
                    </div>

                    <div class="flex items-start space-x-4">
                        <div class="flex-shrink-0">
                            <svg class="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Address</h3>
                            <p class="text-gray-600 dark:text-gray-300">{contactInfo.address}</p>
                        </div>
                    </div>
                </div>

                <div class="pt-8">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Business Hours</h3>
                    <div class="space-y-2">
                        <p class="text-gray-600 dark:text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p class="text-gray-600 dark:text-gray-300">Saturday - Sunday: Closed</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- FAQ Section -->
<!-- <Faq
    title="Frequently Asked Questions"
    description="Answers to common questions about our services and products."
    faqs={contactPageFaqs}
/> -->

<MinimalCallToAction
    title="Have a project in mind?"
    description="We're here to turn your ideas into reality with speed and precision."
    backgroundColor="bg-primary-600"
    primaryButtonText="Check out our services"
    primaryButtonLink="/services"
/>

<!-- Map Section -->
<!-- <section class="py-20 bg-gray-50 dark:bg-gray-800">
    <div class="container mx-auto px-4">
        <div class="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-lg">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373631531973!3d-37.817327679751734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvirotech!5e0!3m2!1sen!2sus!4v1635167261304!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                class="grayscale"
            ></iframe>
        </div>
    </div>
</section> -->

<style>
    @keyframes gradient-x {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    .animate-gradient-x {
        animation: gradient-x 15s ease infinite;
        background-size: 200% 200%;
    }
</style>
