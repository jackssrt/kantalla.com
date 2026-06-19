<script lang="ts">
	import Card from "$lib/components/Card.svelte";
	import { onMount } from "svelte";
	import { match, P } from "ts-pattern";

	const USER_ID = "345922";
	const STATUSES = {
		menu: 0,
		pickingSong: 1,
		playing: 2,
		paused: 3,
		editing: 5,
		multiplayerMenu: 6,
		multiplayerLobby: 7
	};

	interface ApiResponse {
		user: User;
	}

	interface User {
		id: number;
		steam_id: string;
		username: string;
		time_registered: string;
		allowed: boolean;
		privileges: number;
		usergroups: number;
		mute_end_time: string;
		latest_activity: string;
		country: string;
		avatar_url: string;
		twitter: string;
		title: string;
		twitch_username: string;
		donator_end_time: string;
		discord_id: string;
		misc_information: MiscInformation;
		clan_id: number;
		clan_tag: string;
		clan_accent_color: string;
		clan_leave_time: string;
		accent_color_customizable: boolean;
		accent_color: unknown;
		client_status: ClientStatus | null;
		stats_keys4: Stats;
		stats_keys7: Stats;
	}

	interface MiscInformation {
		discord: string;
		twitch: string;
		default_mode: number;
	}

	interface ClientStatus {
		status: number;
		mode: number;
		content: string;
	}

	interface Stats {
		ranks: Ranks;
		total_score: number;
		ranked_score: number;
		overall_accuracy: number;
		overall_performance_rating: number;
		play_count: number;
		fail_count: number;
		max_combo: number;
		total_marvelous: number;
		total_perfect: number;
		total_great: number;
		total_good: number;
		total_okay: number;
		total_miss: number;
		count_grade_x: number;
		count_grade_ss: number;
		count_grade_s: number;
		count_grade_a: number;
		count_grade_b: number;
		count_grade_c: number;
		count_grade_d: number;
	}

	interface Ranks {
		global: number;
		country: number;
		total_hits: number;
	}

	function formatRank(rank: number) {
		return `#${rank.toLocaleString("en")}`;
	}
	let data = $state<ApiResponse>();
	onMount(() => {
		void fetch(`https://api.quavergame.com/v2/user/${USER_ID}`)
			.then((res) => res.json() as Promise<ApiResponse>)
			.then((json) => {
				data = json;
			});
	});
</script>

{#snippet field(field: string, value: string)}
	<div class="flex w-32 flex-col">
		<div class="text-sm">{field}</div>
		<div>{value}</div>
	</div>
{/snippet}

<Card>
	{#if data === undefined}
		Loading...
	{:else}
		{@const stats = data.user.stats_keys4}
		{@const [iconColor, content] = match(data.user.client_status)
			.with(null, () => ["bg-purple-100/50", "Offline"])
			.with({ status: STATUSES.playing, content: P.select() }, (content) => [
				"bg-green-500",
				`Playing ${content}`
			])
			.with({ status: STATUSES.editing, content: P.select() }, (content) => [
				"bg-yellow-500",
				`Editing ${content}`
			])
			.with({ status: STATUSES.pickingSong }, () => ["bg-purple-500", "Picking a song"])
			.with({ status: STATUSES.paused }, () => ["bg-purple-500", "Paused"])
			.with({ status: STATUSES.menu }, () => ["bg-purple-500", "In the menu"])
			.with({ status: STATUSES.multiplayerMenu }, () => [
				"bg-purple-500",
				"In the multiplayer menu"
			])
			.with({ status: STATUSES.multiplayerLobby }, () => [
				"bg-purple-500",
				"In a multiplayer lobby"
			])
			.otherwise(() => ["bg-purple-100/50", "Unknown status"])}
		<h2 class="flex w-full justify-between text-xl">
			Quaver stats :3
			<div class="flex items-center gap-2 self-end">
				<div>{content}</div>
				<div class={["h-4 w-4 rounded", iconColor]}></div>
			</div>
		</h2>
		<div class="grid grid-cols-3">
			<!-- eslint-disable @typescript-eslint/no-confusing-void-expression -->
			{@render field("Global rank", formatRank(stats.ranks.global))}
			{@render field("Country rank", formatRank(stats.ranks.country))}
			{@render field("Overall rating", stats.overall_performance_rating.toFixed(2))}
			{@render field("Total score", stats.total_score.toLocaleString("en"))}
			{@render field("Play count", stats.play_count.toLocaleString("en"))}
			{@render field(
				"Accuracy",
				(data.user.stats_keys4.overall_accuracy / 100).toLocaleString("en", {
					style: "percent",
					minimumFractionDigits: 2
				})
			)}
			<!-- eslint-enable @typescript-eslint/no-confusing-void-expression -->
		</div>
	{/if}
</Card>
