<script lang="ts">
	import type { Snippet } from "svelte";

	const { children, href }: { children: Snippet; href: string } = $props();
</script>

<a
	{href}
	rel="external"
	class="h-8 w-8 text-purple-500 drop-shadow transition-all *:h-full *:w-full *:fill-purple-500 hover:brightness-110"
	>{@render children()}</a
>
