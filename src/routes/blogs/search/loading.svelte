<div class="animate-fade-in">
    <!-- Hero Section Skeleton -->
    <section class="relative py-32 bg-gradient-to-r from-primary-600 to-primary-700 text-white overflow-hidden">
        <div class="absolute inset-0 bg-grid-white/10"></div>
        <div class="container mx-auto px-4 relative z-10">
            <div class="max-w-4xl mx-auto text-center">
                <div class="w-64 h-12 bg-white/20 rounded-lg mx-auto mb-6 animate-pulse"></div>
                <div class="w-3/4 h-6 bg-white/20 rounded-lg mx-auto mb-8 animate-pulse"></div>
                <div class="max-w-2xl mx-auto">
                    <div class="relative">
                        <div class="w-full h-14 bg-white/20 rounded-lg animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Search Results Skeleton -->
    <section class="py-20 bg-white dark:bg-gray-900">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <!-- Main Content -->
                <div class="lg:col-span-8">
                    <!-- Results Count Skeleton -->
                    <div class="w-64 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg mb-8 animate-pulse"></div>

                    <!-- Results Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {#each Array(4) as _}
                            <article class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                                <div class="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                                <div class="p-6">
                                    <div class="flex items-center space-x-4 mb-4">
                                        <div
                                            class="w-20 h-4 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"
                                        ></div>
                                        <div class="w-1 h-4 bg-gray-200 dark:bg-gray-700"></div>
                                        <div
                                            class="w-24 h-4 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"
                                        ></div>
                                    </div>
                                    <div
                                        class="w-full h-8 bg-gray-200 dark:bg-gray-700 rounded-lg mb-3 animate-pulse"
                                    ></div>
                                    <div class="space-y-2 mb-4">
                                        <div
                                            class="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"
                                        ></div>
                                        <div
                                            class="w-3/4 h-4 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"
                                        ></div>
                                    </div>
                                    <div class="flex items-center">
                                        <div
                                            class="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"
                                        ></div>
                                        <div class="ml-3">
                                            <div
                                                class="w-32 h-4 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"
                                            ></div>
                                            <div
                                                class="w-24 h-4 bg-gray-200 dark:bg-gray-700 rounded-full mt-1 animate-pulse"
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        {/each}
                    </div>
                </div>

                <!-- Sidebar -->
                <div class="lg:col-span-4">
                    <div class="sticky top-8">
                        <!-- Recent Searches Skeleton -->
                        <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8">
                            <div class="w-48 h-6 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 animate-pulse"></div>
                            <div class="space-y-2">
                                {#each Array(4) as _}
                                    <div
                                        class="w-full h-10 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"
                                    ></div>
                                {/each}
                            </div>
                        </div>

                        <!-- Popular Categories Skeleton -->
                        <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                            <div class="w-48 h-6 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 animate-pulse"></div>
                            <div class="space-y-2">
                                {#each Array(4) as _}
                                    <div
                                        class="w-full h-10 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"
                                    ></div>
                                {/each}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
