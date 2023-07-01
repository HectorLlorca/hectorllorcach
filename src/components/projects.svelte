<script>
	import { onMount } from 'svelte';
	import { projects } from '../lib/projects-data';
	import { gsap } from 'gsap';
	onMount(() => {
		gsap.to('.box img', {
			maxHeight: '350px',
			opacity: 1,

			scrollTrigger: {
				trigger: '.box',
				start: 'top 600px',
				end: 'top 500px'
			}
		});
	});
</script>

<div class="flex flex-col box gap-8">
	<h1>Projects</h1>
	<div class=" flex flex-wrap place-content-center gap-11 md:gap-6">
		{#each projects as project}
			<div class="flex flex-col relative gap-6 max-w-[530px]">
				<a href={project.link} target="_blank" class="flex">
					<img class=" w-full opacity-0 object-contain" src={project.img} alt="" />
				</a>
				<a href={project.link} target="_blank" class="w-fit">
					<h2 class="w-fit capitalize">{project.name}</h2>
				</a>
				<p>{project.description}</p>
				<div class="flex gap-1">
					<div class="flex flex-wrap gap-1">
						{#each project.tools as tool}
							<span class="badge badge-primary badge-lg">{tool}</span>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	h2 {
		display: inline;
		background-image: linear-gradient(to right, #000, #000);
		background-size: 0% 2px;
		background-repeat: no-repeat;
		transition: background-size 0.5s ease;
		background-position: 0 calc(100% - 9px);
	}
	h2:hover {
		background-size: 100% 2px;
	}
</style>
