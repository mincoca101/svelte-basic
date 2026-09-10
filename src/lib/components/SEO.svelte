<script lang="ts">
	import { site } from '$lib/config/site';

	interface Props {
		title?: string;
		description?: string;
		image?: string;
		url?: string;
		type?: 'website' | 'article';
		noindex?: boolean;
	}

	let {
		title,
		description = site.description,
		image = site.ogImage,
		url,
		type = 'website',
		noindex = false
	}: Props = $props();

	const fullTitle = title
		? `${title} - ${site.name}`
		: site.name;

	const canonicalUrl = url ?? site.url;

	const imageUrl = image.startsWith('http')
		? image
		: `${site.url}${image.startsWith('/') ? image : `/${image}`}`;

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': type === 'article' ? 'Article' : 'WebSite',
		name: fullTitle,
		description,
		url: canonicalUrl,
		image: imageUrl,
		inLanguage: site.locale.replace('_', '-'),
		publisher: {
			'@type': 'Organization',
			name: site.name,
			url: site.url
		}
	};
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description}	/>
	<meta name="author" content={site.author}	/>
	<meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'}	/>
	<link rel="canonical" href={canonicalUrl}	/>
	<meta http-equiv="content-language" content={site.locale.replace('_', '-')}	/>
	<meta property="og:type" content={type} />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:locale" content={site.locale} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:image:alt" content={fullTitle} />
	<meta name="twitter:card" content="summary_large_image"	/>
	<meta name="twitter:title" content={fullTitle}	/>
	<meta name="twitter:description" content={description}	/>
	<meta name="twitter:image" content={imageUrl}	/>
	<script type="application/ld+json"> {JSON.stringify(jsonLd)}</script>
</svelte:head>