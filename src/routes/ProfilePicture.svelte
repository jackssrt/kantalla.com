<script lang="ts">
	import Heart from "$lib/assets/heart.svg?component";
</script>

<div class="relative animate-fade-in">
	<Heart class="absolute bottom-0 left-0 h-auto w-16" />
	<enhanced:img
		src="$lib/assets/avatar.png"
		alt="Profile"
		class="w-48 rounded-full border-2 border-purple-300 shadow-xl select-none"
	></enhanced:img>
	<Heart class="absolute top-0 right-0 -z-10 h-auto w-16" />
</div>
