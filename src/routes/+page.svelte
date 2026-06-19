<script>
	import ProfileCard from "./ProfileCard.svelte";
	import AccountsCard from "./AccountsCard.svelte";
	import ProfilePicture from "./ProfilePicture.svelte";
	import Silly from "./Silly.svelte";
	import Credits from "./Credits.svelte";
	import QuaverStats from "./QuaverStats.svelte";
</script>

<div class="mx-2 grid min-h-dvh place-items-center">
	<div class="mt-8 mb-24 flex flex-col items-center gap-8 xl:mb-2">
		<ProfilePicture />
		<div class="flex flex-col items-center gap-2">
			<ProfileCard />
			<QuaverStats />
			<AccountsCard />
			<Credits />
		</div>
	</div>
	<Silly />
</div>
