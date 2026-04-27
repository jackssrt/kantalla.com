<script lang="ts">
	import '@fontsource/caveat-brush';
	import './layout.css';
	import background from '$lib/assets/kantallabanner.png';
	import avatar from '$lib/assets/avatar.webp';

	let { children } = $props();
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
	<meta name="og:image" content="https://kantalla.com/avatar.webp" />
	<meta name="keywords" content="Femboy" />
	<meta name="author" content="Kantalla" />
	<link rel="canonical" href="https://kantalla.com" />
	<meta name="og:url" content="https://kantalla.com" />
	<meta name="og:type" content="website" />
	<meta name="theme-color" content="#f472b6" />
</svelte:head>
<img src={background} class="fixed -z-10 h-dvh w-dvw object-cover blur-sm" alt="background" />
{@render children()}
