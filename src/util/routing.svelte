<script>
	import Router from 'svelte-spa-router';
	import HomeComponent from '../ui/home.svelte';
	import LogComponent from '../ui/log.svelte';
	
	export const routes = {
		'/': HomeComponent,
		'/log': LogComponent,
		'*': HomeComponent,
	}
</script>

<Router {routes}/>
