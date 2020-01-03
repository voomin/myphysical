<script>
  let list = [
    {
      title: "Squat",
      value: 0,
      unit: "kg"
    },
    {
      title: "Bench press",
      value: 0,
      unit: "kg"
    },
    {
      title: "Deadlift",
      value: 0,
      unit: "kg"
    }
  ];
</script>
<ul>
  {#each list as item}
    <li>
      <span>{item.title} :</span>
      <input type="number" value={item.value} />
      <span>{item.unit}</span>
    </li>
  {/each}
</ul>
