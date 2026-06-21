<script lang="ts">
	import boop1 from "$lib/assets/boop1.mp3";
	import boop2 from "$lib/assets/boop2.mp3";
	import { PersistedState, useDebounce } from "runed";

	let audio1: HTMLAudioElement;
	let audio2: HTMLAudioElement;
	let counter: HTMLSpanElement;
	let count = new PersistedState("kantalla-boops", 0);

	const hideCounter = useDebounce(() => {
		counter.style.opacity = "0%";
	}, 1000);
</script>

<button
	onclick={() => {
		count.current++;
		// i miss rusttt i wanna use an if statement as an expression here :(
		const audio = [audio1, audio2][Math.floor(Math.random() * 2)];
		audio.currentTime = 0;
		void audio.play();
		counter.style.opacity = "100%";
		void hideCounter();
	}}
	class="fixed right-0 bottom-0 w-32 animate-slide-in transition-transform select-none xl:right-4 xl:translate-y-1/3 xl:hover:translate-y-0"
>
	<audio src={boop1} bind:this={audio1}></audio>
	<audio src={boop2} bind:this={audio2}></audio>
	<span class="text-4xl text-purple-500 transition-opacity" style="opacity: 0%;" bind:this={counter}
		>{count.current}</span
	>
	<enhanced:img
		src="$lib/assets/dbdemoteheart.png"
		class="h-auto w-full select-none"
		alt="custom heart emoji"
	></enhanced:img>
</button>
