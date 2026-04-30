<script lang="ts">
	import avatar from '$lib/assets/avatar.webp';
	import Heart from '$lib/assets/heart.svg?component';
</script>

<div class="relative animate-fade-in">
	<Heart class="absolute bottom-0 left-0 h-auto w-16" />
	<img
		src={avatar}
		alt="Profile"
		class="w-48 rounded-full border-2 border-purple-300 shadow-xl select-none"
	/>
	<Heart class="absolute top-0 right-0 -z-10 h-auto w-16" />
</div>
