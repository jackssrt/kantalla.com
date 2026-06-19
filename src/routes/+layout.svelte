<script lang="ts">
	import "@fontsource/caveat-brush";
	import "./layout.css";
	import avatar from "$lib/assets/avatar.png";
	import type { Snippet } from "svelte";

	let { children }: { children: Snippet } = $props();
</script>

<svelte:head>
	<link rel="icon" href={avatar} />
	<title>Kantalla</title>
	<meta name="og:title" content="Kantalla" />
	<meta
		name="description"
		content="I'm Kantalla! Moderator @quaver, A:RG founder
I help however I can :3
Mainly playing games or yapping :D"
	/>
	<meta
		name="og:description"
		content="I'm Kantalla! Moderator @quaver, A:RG founder
I help however I can :3
Mainly playing games or yapping :D"
	/>
	<meta name="og:image" content={avatar} />
	<meta name="keywords" content="Femboy" />
	<meta name="author" content="Kantalla" />
	<link rel="canonical" href="https://kantalla.com" />
	<meta name="og:url" content="https://kantalla.com" />
	<meta name="og:type" content="website" />
	<meta name="theme-color" content="#f472b6" />
</svelte:head>
<enhanced:img
	src="$lib/assets/kantallabanner.png"
	class="fixed -z-10 h-dvh w-dvw object-cover brightness-75"
	alt="background"
></enhanced:img>
{@render children()}
