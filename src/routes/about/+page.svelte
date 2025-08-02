<script lang="ts">
    import MinimalCallToAction from '$components/common/MinimalCallToAction.svelte';
    import Seo from '$components/common/Seo.svelte';
    import OurValues from '$lib/components/about/OurValues.svelte';
    import CallToAction from '$lib/components/common/CallToAction.svelte';
    import type { PageProps } from '../$types';
    // import OurTeam from '$lib/components/sections/OurTeam.svelte';
    // import Stats from '$lib/components/sections/Stats.svelte';

    const { data }: PageProps = $props()
    const seo = data?.seo;

</script>

<!-- <svelte:head>
    <title>About Us | Inflection Zone Lab</title>
    <meta
        name="description"
        content="Learn about our company, our mission, and the team behind Inflection Zone Lab's innovative software solutions."
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
<section class="relative min-h-[500px] flex items-center">
    <div class="absolute inset-0">
        <img
            src="/images/aboutus/aboutus-hero.jpg"
            alt="About Us Hero"
            class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/30"></div>
    </div>
    <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-3xl animate-fade-in">
            <h1 class="text-3xl md:text-6xl font-bold mb-6 leading-tight text-white">Who We Are</h1>
            <p class="text-lg md:text-xl mb-8 leading-relaxed">
                <span class="text-orange-400">
                    We're a team of passionate engineers dedicated to transforming businesses through innovative solutions. We love tackling those difficult to solve problems.
                </span><br/>
                <span class="text-white">
                    &emsp; Apart from providing software development services, we are also working on our products which are currently in stealth mode. Some of them will soon be out in the sun!
                </span><br/>
                <span class="text-green-400">
                    &emsp; We also have an expertise in areas such as Mechanical Design, Robotics, Applied Numerical Mathematics, Electronic Design, Finance, Agriculture and more...
                </span>
            </p>
        </div>
    </div>
</section>

<MinimalCallToAction
    title="Connect with Us"
    description="Contact us today to understand our extertise, experiences and portfolio of services."
    primaryButtonText="Contact Us"
    primaryButtonLink="/contact"
    backgroundColor="primary"
/>

<!-- Mission Section -->
<section class="py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="animate-slide-in-left">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
                <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    At Inflection Zone Lab, our mission is to empower businesses with cutting-edge software solutions
                    that drive growth, efficiency, and innovation. We believe in creating technology that not only meets
                    current needs but anticipates future challenges.
                </p>
                <p class="text-lg text-gray-600 dark:text-gray-300">
                    Through our expertise in software development, cloud solutions, and emerging technologies, we help
                    organizations navigate the digital landscape and achieve their strategic objectives.
                </p>
            </div>
            <div class="relative animate-slide-in-right">
                <div class="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-xl">
                    <img src="/images/aboutus/mission.jpg" alt="Our Mission" class="object-cover w-full h-full" />
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Values Section -->
<OurValues />

<!-- <OurTeam
    backgroundColors="bg-gray-100 dark:bg-gray-900"
/>

<Stats
    backgroundColors="bg-white dark:bg-gray-800"
/> -->

<!-- CTA Section -->
<CallToAction
    title="Ready to Work Together?"
    description="Join the growing list of businesses that trust us with their software development needs."
    primaryButtonText="Get Started"
    secondaryButtonText="View Our Services"
    primaryButtonLink="/contact"
    secondaryButtonLink="/services"
/>
