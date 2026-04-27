<script>
	import ProfileCard from './ProfileCard.svelte';
	import AccountsCard from './AccountsCard.svelte';
	import ProfilePicture from './ProfilePicture.svelte';
	import Silly from './Silly.svelte';
	import Credits from './Credits.svelte';
</script>

<div class="grid min-h-dvh place-items-center">
	<div class="flex flex-col items-center gap-8">
		<ProfilePicture></ProfilePicture>
		<div class="flex flex-col items-center gap-2">
			<ProfileCard></ProfileCard>
			<AccountsCard></AccountsCard>
		</div>
	</div>
</div>
<Silly></Silly>
<Credits></Credits>
