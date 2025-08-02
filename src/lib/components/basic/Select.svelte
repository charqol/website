<script lang="ts">
  export let id: string;
  export let value: string;
  export let options: { value: string; label: string }[] = [];
</script>

<div class="relative w-full">
    <select
        id={id}
        bind:value
        class="w-full px-4 py-2 pr-10 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none"
    >
    {#each options as option}
      <option value={option.value}>{option.label}</option>
    {/each}
  </select>

  <!-- Custom Dropdown Arrow -->
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 dark:text-gray-300">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
</div>


<!-- <select
    id="position"
    bind:value={formData.position}
    class="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent pr-8"
    style="appearance: auto; padding-right: 2rem;"
>
    {#each positionOptions as option}
        <option value={option.value}>{option.label}</option>
    {/each}
</select> -->
