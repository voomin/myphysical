<script>
	import Router from 'svelte-spa-router';
	import HomeComponent from '../components/home.svelte';
	import LogComponent from '../components/log.svelte';
	
	export const routes = {
		'/': HomeComponent,
		'/log': LogComponent,
		'*': HomeComponent,
	}
</script>

<Router {routes}/>
