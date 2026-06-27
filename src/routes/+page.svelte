<script lang="ts">
	import ProfileCard from "./ProfileCard.svelte";
	import AccountsCard from "./AccountsCard.svelte";
	import ProfilePicture from "./ProfilePicture.svelte";
	import Silly from "./Silly.svelte";
	import Credits from "./Credits.svelte";
	import QuaverStats from "./QuaverStats.svelte";
	import type { PageProps } from "./$types";

	const { data }: PageProps = $props();
</script>

<div class="mx-2 grid min-h-dvh place-items-center">
	<div class="mt-8 mb-24 flex flex-col items-center gap-8 xl:mb-2">
		<ProfilePicture />
		<div class="flex flex-col items-center gap-2">
			<ProfileCard />
			<QuaverStats user={data.quaver} />
			<AccountsCard />
			<Credits />
		</div>
	</div>
	<Silly />
	<enhanced:img
		src="$lib/assets/right.png"
		class="absolute right-0 bottom-0 -z-10 h-2/3 w-auto opacity-0 transition-opacity xl:opacity-100"
	></enhanced:img>
	<enhanced:img
		src="$lib/assets/left.png"
		class="absolute bottom-0 left-0 -z-10 h-full w-auto opacity-0 transition-opacity xl:opacity-100"
	></enhanced:img>
</div>
