<script>
	import Card from "$lib/components/Card.svelte";
	import ExternalLink from "$lib/components/ExternalLink.svelte";
</script>

<Card>
	<h1 class="text-8xl font-bold">
		{#each "Kantalla".split("") as letter, i (i)}
			<span
				class="inline-block animate-fade-in text-purple-500 opacity-0 drop-shadow"
				style="animation-delay: {i * 100}ms">{letter}</span
			>
		{/each}
	</h1>
	<div class="flex gap-2 text-xl text-purple-500">
		<ExternalLink href="https://quavergame.com/team" >Moderator @quaver</ExternalLink>

		<ExternalLink href="https://osu.ppy.sh/teams/1845">A:RG Founder</ExternalLink>
	</div>
	<p class="text-center text-2xl text-purple-500">
		I help however I can<br />Mainly playing games or yapping<br />
		More coming soon™<br /><br />Femboy<br />18
	</p>
</Card>
