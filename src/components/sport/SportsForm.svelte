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
<!-- <script>
  export let sport;
</script><div>
  sport
  <span>{ sport.title} :</span>
  <input type="number" value={sport.value} />
  <span>{ sport.unitType}</span>
</div> -->
<!-- <script>
  export let title;
  export let value;
  export let unitType;
</script><h4>sport</h4>
<span>{title} :</span>
<input type="number" value={value} />
<span>{unitType}</span> -->
