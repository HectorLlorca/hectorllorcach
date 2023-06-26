<script>
	import { theme } from '$lib/stores';

	import Icon from '@iconify/svelte';
	/** @type {import('./$types').LayoutData} */
	export let data;
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { TextPlugin } from 'gsap/dist/TextPlugin';
	import '../app.css';

	let main;

	gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(TextPlugin);

	onMount(() => {
		ScrollTrigger.create({
			trigger: main,
			start: 'top+=600px top',
			end: 'bottom bottom-=1000px',
			onEnter: function () {
				gsap.to('.scrollbtn', { opacity: 1 });
			},
			onLeave: function () {
				gsap.to('.scrollbtn', { opacity: 0 });
			},
			onLeaveBack: function () {
				gsap.to('.scrollbtn', { opacity: 0 });
			},
			onEnterBack: function () {
				gsap.to('.scrollbtn', { opacity: 1 });
			}
		});
	});
</script>

{#if $theme}
	<div data-theme={$theme} class="flex flex-col" bind:this={main}>
		<div class="flex flex-col lg:max-w-[1680px] mx-auto p-3 lg:p-0 lg:py-3 relative">
			<button
				on:click={() => scrollTo(0, 0)}
				class="scrollbtn btn uppercase fixed bottom-5 right-5 bg-green-400 hover:bg-green-600 hover:scale-110 rounded opacity-0 z-50"
			>
				<Icon icon="ri:arrow-up-line" width={24} color="black" /></button
			>
			<main class="flex flex-col">
				<slot />
			</main>
		</div>
	</div>
{/if}
