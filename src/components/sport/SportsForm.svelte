<script>
  export let customSports;
</script>
{#each $customSports as sport}
  <div>
    <span>{sport.title} :</span>
    <input type="number" value={sport.value} />
    <span>{sport.unitType}</span>
  </div>
{:else}
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
{/each}
