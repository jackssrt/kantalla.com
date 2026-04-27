<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children, href }: { children: Snippet; href: string } = $props();
</script>

<a {href} rel="external" class="underline">{@render children()}</a>
