<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { site } from '$lib/config/site';

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
</svelte:head>

{@render children()}
