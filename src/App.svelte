<script>
	import Router from 'svelte-spa-router';
	import HeaderComponent from './ui/header.svelte';
	import HomeComponent from './ui/home.svelte';
	import LogComponent from './ui/log.svelte';
	export const routes = {
		'/': HomeComponent,
		'/log': LogComponent,
		'*': HomeComponent,
	}
</script>

<main>
	<HeaderComponent/>
	<Router {routes}/>
</main>

<style>
</style>