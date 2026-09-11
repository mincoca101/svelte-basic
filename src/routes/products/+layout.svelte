<script>
  let { children } = $props();
</script>

<h2>Product Area</h2>

<nav>
	<a href="/products">All products</a>
</nav>

{@render children?.()}