<script lang="ts">
	import Icon from '@iconify/svelte';

	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import Navbar from '../../components/Navbar.svelte';
	import Footer from '../../components/Footer.svelte';

	export function initializeAOS() {
		AOS.init({
			duration: 1000,
			easing: 'ease-out',
			once: false
		});
	}

	export let data: {
		sections: {
			heading: string;
			icon: string;
			items: string[];
		}[];
	};
</script>

<Navbar />

<div class="bg-[#f7f6f6] text-gray-900 px-5 py-20">
	<div class="container px-4 py-8">
		<h1 class="text-2xl font-bold text-center mb-8">Industries We Served</h1>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each data.sections as section}
				<div class="bg-white p-6 rounded-lg shadow-lg overflow-hidden" data-aos="fade-right">
					<div class="icon-container flex items-center mb-2">
						<Icon icon={section.icon} class="mr-3 text-orange-600 text-2xl" />
						<h2 class="text-md font-semibold">{section.heading}</h2>
					</div>
					<ul class="list-disc list-inside space-y-2 text-sm">
						{#each section.items as item}
							<li>{item}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</div>

<Footer />
