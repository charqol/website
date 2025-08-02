<div class="animate-fade-in">
    <!-- Hero Section Skeleton -->
    <section class="relative py-32 bg-gradient-to-r from-primary-600 to-primary-700 text-white overflow-hidden">
        <div class="absolute inset-0 bg-grid-white/10"></div>
        <div class="container mx-auto px-4 relative z-10">
            <div class="max-w-4xl mx-auto text-center">
                <div class="flex items-center justify-center space-x-4 mb-6">
                    <div class="w-24 h-6 bg-white/20 rounded-full animate-pulse"></div>
                    <div class="w-20 h-6 bg-white/20 rounded-full animate-pulse"></div>
                    <div class="w-24 h-6 bg-white/20 rounded-full animate-pulse"></div>
                </div>
                <div class="w-3/4 h-12 bg-white/20 rounded-lg mx-auto mb-6 animate-pulse"></div>
                <div class="flex items-center justify-center">
                    <div class="w-12 h-12 rounded-full bg-white/20 animate-pulse"></div>
                    <div class="ml-4 text-left">
                        <div class="w-32 h-6 bg-white/20 rounded-full animate-pulse"></div>
                        <div class="w-24 h-4 bg-white/20 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Article Content Skeleton -->
    <article class="py-20 bg-white dark:bg-gray-900">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <!-- Main Content -->
                <div class="lg:col-span-8">
                    <div class="prose prose-lg dark:prose-invert max-w-none">
                        <!-- Featured Image Skeleton -->
                        <div
                            class="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700 mb-8 animate-pulse"
                        ></div>

                        <!-- Content Skeleton -->
                        <div class="space-y-6">
                            {#each Array(6) as _}
                                <div class="space-y-4">
                                    <div class="w-3/4 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                                    <div class="space-y-2">
                                        <div
                                            class="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"
                                        ></div>
                                        <div
                                            class="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"
                                        ></div>
                                        <div
                                            class="w-2/3 h-4 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"
                                        ></div>
                                    </div>
                                </div>
                            {/each}
                        </div>

                        <!-- Tags Skeleton -->
                        <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                            <div class="w-32 h-6 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 animate-pulse"></div>
                            <div class="flex flex-wrap gap-2">
                                {#each Array(5) as _}
                                    <div class="w-24 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                                {/each}
                            </div>
                        </div>

                        <!-- Author Bio Skeleton -->
                        <div class="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                            <div class="flex items-start space-x-4">
                                <div class="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                                <div class="flex-1">
                                    <div
                                        class="w-48 h-6 bg-gray-200 dark:bg-gray-700 rounded-lg mb-2 animate-pulse"
                                    ></div>
                                    <div
                                        class="w-32 h-4 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 animate-pulse"
                                    ></div>
                                    <div class="space-y-2">
                                        <div
                                            class="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"
                                        ></div>
                                        <div
                                            class="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Sidebar -->
                <div class="lg:col-span-4">
                    <div class="sticky top-8">
                        <!-- Share Buttons Skeleton -->
                        <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8">
                            <div class="w-48 h-6 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 animate-pulse"></div>
                            <div class="flex space-x-4">
                                {#each Array(3) as _}
                                    <div class="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                                {/each}
                            </div>
                        </div>

                        <!-- Related Posts Skeleton -->
                        <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                            <div class="w-48 h-6 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 animate-pulse"></div>
                            <div class="space-y-6">
                                {#each Array(3) as _}
                                    <div class="space-y-3">
                                        <div
                                            class="aspect-w-16 aspect-h-9 rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse"
                                        ></div>
                                        <div
                                            class="w-full h-6 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"
                                        ></div>
                                        <div class="flex items-center space-x-4">
                                            <div
                                                class="w-20 h-4 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"
                                            ></div>
                                            <div
                                                class="w-20 h-4 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"
                                            ></div>
                                        </div>
                                    </div>
                                {/each}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>

    <!-- Newsletter Section Skeleton -->
    <section class="py-20 bg-gray-50 dark:bg-gray-800">
        <div class="container mx-auto px-4">
            <div class="max-w-3xl mx-auto text-center">
                <div class="w-64 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mb-4 animate-pulse"></div>
                <div class="w-96 h-6 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mb-8 animate-pulse"></div>
                <div class="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                    <div class="flex-1 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                    <div class="w-32 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                </div>
            </div>
        </div>
    </section>
</div>
