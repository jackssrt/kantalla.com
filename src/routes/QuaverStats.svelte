<script lang="ts">
	import Card from "$lib/components/Card.svelte";
	import type { User } from "$lib/quaver";
	import { match, P } from "ts-pattern";

	const STATUSES = {
		menu: 0,
		pickingSong: 1,
		playing: 2,
		paused: 3,
		editing: 5,
		multiplayerMenu: 6,
		multiplayerLobby: 7
	};

	function formatRank(rank: number) {
		return `#${rank.toLocaleString("en")}`;
	}

	let { user }: { user: User } = $props();
</script>

{#snippet field(field: string, value: string)}
	<div class="flex w-32 flex-col">
		<div class="text-sm text-purple-500">{field}</div>
		<div class="text-purple-500">{value}</div>
	</div>
{/snippet}

<Card>
	{@const stats = user.stats_keys4}
	{@const [iconColor, content, item] = match(user.client_status)
		.returnType<[string, string] | [string, string, string]>()
		.with(null, () => ["bg-purple-100/50", "Offline"])
		.with({ status: STATUSES.playing, content: P.select() }, (content) => [
			"bg-green-500",
			"Playing",
			content
		])
		.with({ status: STATUSES.editing, content: P.select() }, (content) => [
			"bg-yellow-500",
			"Editing",
			content
		])
		.with({ status: STATUSES.pickingSong }, () => ["bg-purple-500", "Picking a song"])
		.with({ status: STATUSES.paused }, () => ["bg-purple-500", "Paused"])
		.with({ status: STATUSES.menu }, () => ["bg-purple-500", "In the menu"])
		.with({ status: STATUSES.multiplayerMenu }, () => ["bg-purple-500", "In the multiplayer menu"])
		.with({ status: STATUSES.multiplayerLobby }, () => ["bg-purple-500", "In a multiplayer lobby"])
		.otherwise(() => ["bg-purple-100/50", "Unknown status"])}
	<div class="flex w-full flex-col">
		<h2 class="flex w-full justify-between text-xl text-purple-500">
			Quaver stats :3
			<div class="flex items-center gap-2 self-end">
				<div>{content}</div>
				<div class={["h-4 w-4 rounded", iconColor]}></div>
			</div>
		</h2>
		{#if item}
			<span class="p-1 text-purple-500">
				{item}
			</span>
		{/if}
	</div>
	<div class="grid grid-cols-3">
		<!-- eslint-disable @typescript-eslint/no-confusing-void-expression -->
		{@render field("Global rank", formatRank(stats.ranks.global))}
		{@render field("Country rank", formatRank(stats.ranks.country))}
		{@render field("Overall rating", stats.overall_performance_rating.toFixed(2))}
		{@render field("Total score", stats.total_score.toLocaleString("en"))}
		{@render field("Play count", stats.play_count.toLocaleString("en"))}
		{@render field(
			"Accuracy",
			(user.stats_keys4.overall_accuracy / 100).toLocaleString("en", {
				style: "percent",
				minimumFractionDigits: 2
			})
		)}
		<!-- eslint-enable @typescript-eslint/no-confusing-void-expression -->
	</div>
</Card>
