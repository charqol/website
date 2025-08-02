<script lang="ts">
  import type { Activity } from '$lib/types/activity';

  export let title: string = 'Our Development Process';
  export let description: string = 'A systematic approach to turning your ideas into reality.';
  export let activities: Activity[] = [];
</script>

<section class="py-20 bg-gray-50 dark:bg-gray-800">
  <div class="container mx-auto px-4">
      <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {description}
          </p>
      </div>
      <div class="relative">
        <div class="absolute top-0 left-1/2 h-full w-1 bg-primary-500/20 transform -translate-x-1/2 hidden md:block"></div>
        <div class="space-y-12">
          {#each activities as { number, title, description, tags, timestamp }, i}
            <div class="relative flex items-center md:justify-between">
              <div class={`md:w-5/12 ${i % 2 === 1 ? 'md:ml-auto' : ''}`}>
                <div class="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{number}. {title}</h3>
                  <p class="text-gray-600 dark:text-gray-300">
                    {description}
                  </p>
                  {#if tags}
                      <div class="mt-4">
                          {#each tags as tag}
                              <span class="inline-block px-3 py-1 text-sm font-medium text-white bg-primary-500 rounded-full">{tag}</span>
                          {/each}
                      </div>
                  {/if}
                  {#if timestamp}
                      <p class="text-gray-600 dark:text-gray-300 mt-2">{timestamp}</p>
                  {/if}
                </div>
              </div>
              <div class="absolute left-1/2 w-8 h-8 bg-primary-500 rounded-full transform -translate-x-1/2 hidden md:block"></div>
            </div>
          {/each}
        </div>
      </div>
  </div>
</section>
