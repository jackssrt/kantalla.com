<script lang="ts">
	import image from '$lib/assets/dbdemoteheart.png';
	import boop1 from '$lib/assets/boop1.mp3';
	import boop2 from '$lib/assets/boop2.mp3';
	let audio1: HTMLAudioElement;
	let audio2: HTMLAudioElement;
</script>

<button
	onclick={() => {
		// i miss rusttt i wanna use an if statement as an expression here :(
		const audio = [audio1, audio2][Math.floor(Math.random() * 2)];
		audio.currentTime = 0;
		audio.play();
	}}
	class="fixed right-0 bottom-0 w-32 animate-slide-in transition-transform select-none xl:right-4 xl:translate-y-1/3 xl:hover:translate-y-0"
>
	<audio src={boop1} bind:this={audio1}></audio>
	<audio src={boop2} bind:this={audio2}></audio>
	<img src={image} class="h-auto w-full select-none" alt="custom heart emoji" />
</button>
