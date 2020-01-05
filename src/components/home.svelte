<script>
  import SportsForm from "./sport/SportsForm.svelte";
  import SportAdd from "./sport/SportAdd.svelte";

  import { user } from "../store/auth";
  import { db } from "../environments/firebase";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";

  let text = "Sport Title";

  const query = db.collection("CustomSports");
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

<h3>home</h3>
<SportsForm {customSports} />
<SportAdd on:click="{() => add()}"/>

