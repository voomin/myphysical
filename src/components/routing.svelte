<script>
	import Router from 'svelte-spa-router';
	import UploadComponent from '../components/upload.svelte';
	import LogComponent from '../components/log.svelte';
	
	export const routes = {
		'/': UploadComponent,
		'/log': LogComponent,
		'*': UploadComponent,
	}
</script>

<Router {routes}/>
