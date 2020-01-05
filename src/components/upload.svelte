<script>
  import { user } from "../store/auth";
  import { db } from "../environments/firebase";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";

  let customSports;
  onMount(async () => {
    const query = db.collection("CustomSports");
    // .where("author", "==", $user.uid)
    // .orderBy("created");

    customSports = collectionData(query, "id").pipe(startWith([]));
  });
  
  let text = "Sport Title";

  function add() {
    db.collection("CustomSports").add({
      author: $user.uid,
      title: text,
      unitType: "kg",
      created: Date.now()
    });
    text = "";
  }

  // function updateStatus(event) {
  //   const { id, newStatus } = event.detail;
  //   db.collection("todos")
  //     .doc(id)
  //     .update({ complete: newStatus });
  // }

  // function removeItem(event) {
  //   const { id } = event.detail;
  //   db.collection("todos")
  //     .doc(id)
  //     .delete();
  // }
</script>

<ul>
  {#each $customSports as sport}
    <li>
      <span>{sport.title} :</span>
      <input type="number" bind:value={sport.value} />
      <span>{sport.unitType}</span>
    </li>
  {/each}
</ul>
<div>
  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="checkbox"
      id="ckbox-unitType-kg"
      value="kg"  checked/>
    <label class="form-check-label" for="ckbox-unitType-kg">kg</label>
  </div>
  <div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" id="ckbox-unitType-lbs" value="lbs">
    <label class="form-check-label" for="ckbox-unitType-lbs">lbs</label>
  </div>
  <button on:click={add}>add sport</button>
</div>
