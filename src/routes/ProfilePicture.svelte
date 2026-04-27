<script lang="ts">
	import avatar from '$lib/assets/avatar.webp';
	import heart from '$lib/assets/heart.svg';
</script>

<div class="relative">
	<img src={heart} alt="Heart" class="absolute bottom-0 left-0 w-16" />
	<img src={avatar} alt="Profile" class="w-48 rounded-full border-2 border-purple-300" />
	<img src={heart} alt="Heart" class="absolute top-0 right-0 -z-10 w-16" />
</div>
