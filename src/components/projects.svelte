<script>
	import { onMount } from 'svelte';
	import { projects } from '../lib/projects-data';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to('.box img', {
			height: '100%',
			opacity: 1,

			scrollTrigger: {
				trigger: '.box',
				start: 'top 600px',
				end: 'top 500px'
			}
		});
	});
</script>

<svelte:head>
	{#each projects as project}
		<link rel="preload" as="image" href={project.img} />
	{/each}
</svelte:head>

<div class="flex flex-col box gap-8">
	<h1>Projects</h1>
	<div class=" flex flex-wrap place-content-center gap-20 md:gap-6">
		{#each projects as project}
			<div class="flex flex-col gap-6 max-w-[530px]">
				<a href={project.link} target="_blank" class="flex">
					<img class="h-4 w-full opacity-0" src={project.img} alt="" />
				</a>
				<a href={project.link} target="_blank" class="w-fit">
					<h2 class="w-fit">{project.name}</h2>
				</a>
				<p>{project.description}</p>
				<div class="flex gap-1">
					{#each project.tools as tool}
						<span class="badge badge-primary badge-lg">{tool}</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	h2 {
		background-image: linear-gradient(black, black);
		background-size: 0% 2px;
		background-repeat: no-repeat;
		transition: background-size 0.3s;
		background-position: 0 calc(100% - 2px);
	}
	h2:hover {
		background-size: 100% 2px;
	}
</style>
