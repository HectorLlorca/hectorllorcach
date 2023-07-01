<script>
	import { theme } from '$lib/stores';

	import Icon from '@iconify/svelte';
	/** @type {import('./$types').LayoutData} */
	export let data;
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { TextPlugin } from 'gsap/dist/TextPlugin';
	import { Flip } from 'gsap/dist/Flip';
	import '../app.css';

	let main;

	gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(TextPlugin);
	gsap.registerPlugin(Flip);

	onMount(() => {
		ScrollTrigger.create({
			trigger: main,
			start: 'top+=600px top',
			onEnter: function () {
				gsap.to('.scrollbtn', { opacity: 1, duration: 0.2 });
			},
			onLeave: function () {
				gsap.to('.scrollbtn', { opacity: 0, duration: 0.2 });
			},
			onLeaveBack: function () {
				gsap.to('.scrollbtn', { opacity: 0, duration: 0.2 });
			},
			onEnterBack: function () {
				gsap.to('.scrollbtn', { opacity: 1, duration: 0.2 });
			}
		});
	});
</script>

{#if $theme}
	<div class="flex flex-col mx-auto p-3 lg:py-3 relative" data-theme={$theme}>
		<button
			on:click={() => scrollTo(0, 0)}
			class="scrollbtn btn uppercase fixed bottom-5 right-5 bg-green-400 hover:bg-green-600 hover:scale-110 rounded opacity-0 z-50"
		>
			<Icon icon="ri:arrow-up-line" width={24} color="black" /></button
		>
		<main bind:this={main} class="flex flex-col w-full lg:max-w-[1680px] mx-auto">
			<slot />
		</main>
	</div>
{/if}
