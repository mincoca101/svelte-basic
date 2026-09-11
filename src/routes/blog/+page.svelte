<script lang="ts">
	let { data } = $props();
</script>

<h1>Blog</h1>

{#each data.posts as post}
	<h2>
		<a href={`/blog/${post.slug}`}>
			{post.title}
		</a>
	</h2>
{/each}