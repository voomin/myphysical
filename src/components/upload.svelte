<script>
  import { user } from "../store/auth";
  import { db } from "../environments/firebase";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";
  // let list = [
  //   {
  //     title: "Squat",
  //     value: 0,
  //     unit: "kg"
  //   },
  //   {
  //     title: "Bench press",
  //     value: 0,
  //     unit: "kg"
  //   },
  //   {
  //     title: "Deadlift",
  //     value: 0,
  //     unit: "kg"
  //   }
  // ];

  // Form Text
  let text = "Sport Title";

  const query = db
    .collection("CustomSports")
    // .where("author", "==", $user.uid)
    // .orderBy("created");

  const customSports = collectionData(query, "id").pipe(startWith([]));

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
  {#each $customSports as item}
    <li>
      <span>{item.title} :</span>
      <input type="number" value={item.value} />
      <span>{item.unit}</span>
    </li>
  {/each}
</ul>

<button on:click={add}>add sport</button>
