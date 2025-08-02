<script lang="ts">
    export let image: string;
    export let imageAlt: string = '';
    export let title: string;
    export let description: string;
    export let minHeight: string = '500px';
</script>

<section class="relative min-h-[{minHeight}] flex items-center">
    <div class="absolute inset-0">
        <img
            src={image}
            alt={imageAlt}
            class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/30"></div>
    </div>
    <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-3xl animate-fade-in">
            <h1 class="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">{title}</h1>
            <p class="text-xl text-gray-100 mb-8 leading-relaxed">{description}</p>
            <slot />
        </div>
    </div>
</section>
