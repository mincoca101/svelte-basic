<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { site } from '$lib/config/site';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	import '$lib/styles/global.scss';
	import '$lib/js/Navbar.js';

	let { children } = $props();
</script>

<svelte:head>
	<!-- Favicon -->
	<link
		rel="icon"
		href={favicon}
		type="image/svg+xml"
	/>

	<link
		rel="apple-touch-icon"
		href="/apple-touch-icon.png"
	/>

	<!-- Responsive -->
	<meta
		name="viewport"
		content="width=device-width, initial-scale=1, viewport-fit=cover"
	/>

	<!-- Theme -->
	<meta
		name="theme-color"
		content={site.themeColor}
	/>

	<!-- PWA -->
	<link
		rel="manifest"
		href="/manifest.webmanifest"
	/>
	
	<!-- CSS -->
	<link rel="stylesheet" href="/css/custom.css">
	<!-- JS -->
	<script src="/js/library.js"></script>


</svelte:head>

<Header />
<Navbar />
<main>
	{@render children()}
</main>

<Footer />