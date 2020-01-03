<script>
  import { auth, googleProvider } from "../firebase";
  import { authState } from "rxfire/auth";

  let user;

  const unsubscribe = authState(auth).subscribe(u => (user = u));

  function login() {
    auth.signInWithPopup(googleProvider);
  }
</script>

<ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link" href="#/">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#/log">Log</a>
  </li>
  <li class="nav-item">
    {#if user}
      {user.displayName}
      <button on:click={() => auth.signOut()}>Logout</button>
    {:else}
      <button
        type="button"
        class="btn btn-primary btn-lg btn-block"
        on:click={login}>
        Google login
      </button>
    {/if}
  </li>
</ul>
