<script lang="ts">
	import SteamIcon from '@iconify-svelte/mdi/steam';
	import TwitterIcon from '@iconify-svelte/mdi/twitter';
	import TiktokIcon from '@iconify-svelte/ic/sharp-tiktok';
	import YoutubeIcon from '@iconify-svelte/mdi/youtube';
	import TwitchIcon from '@iconify-svelte/mdi/twitch';
	import OsuIcon from '@iconify-svelte/simple-icons/osu';
	import QuaverIcon from '$lib/assets/quaver.svg?component';
	import DiscordIcon from '@iconify-svelte/ic/baseline-discord';
	import Account from './Account.svelte';
	import Card from '$lib/components/Card.svelte';
</script>

<Card>
	<h2 class="text-center text-xl font-bold">My profiles ^-^</h2>
	<div class="flex flex-wrap justify-center gap-1">
		<Account href="https://quavergame.com/user/345922">
			<QuaverIcon class="scale-90"></QuaverIcon>
		</Account>
		<!-- this is evil i know but the osu logo is bigger than the others and it looks off -->
		<Account href="https://osu.ppy.sh/users/32000382">
			<OsuIcon class="scale-85"></OsuIcon>
		</Account>
		<Account href="https://steamcommunity.com/id/kantalla">
			<SteamIcon></SteamIcon>
		</Account>
		<Account href="https://www.discord.com/users/452136399173582860">
			<DiscordIcon></DiscordIcon>
		</Account>
		<Account href="https://x.com/kantallaa">
			<TwitterIcon></TwitterIcon>
		</Account>
		<Account href="https://www.tiktok.com/@kantalla">
			<TiktokIcon></TiktokIcon>
		</Account>
		<Account href="https://www.youtube.com/@kantalla">
			<YoutubeIcon></YoutubeIcon>
		</Account>
		<Account href="https://www.twitch.tv/kantallaa">
			<TwitchIcon></TwitchIcon>
		</Account>
	</div>
</Card>
