<script lang="ts">
  import type { Stat } from '$lib/types/Stats';
  export let stats: Stat[] = [];

//   const companyStats: Stat[] = [
//     { value: "500+", label: "Projects Completed" },
//     { value: "50+", label: "Expert Developers" },
//     { value: "15+", label: "Years Experience" },
//     { value: "99%", label: "Client Satisfaction" }
//   ];

</script>

<div class="grid grid-cols-2 md:grid-cols-4 gap-8">
  {#each stats as { value, label }}
    <div class="text-center">
      <div class="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">{value}</div>
      <div class="text-gray-600 dark:text-gray-300">{label}</div>
    </div>
  {/each}
</div> 