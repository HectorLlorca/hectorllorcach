<script>
	import Projects from '../components/projects.svelte';
	import Swap from '../components/swap.svelte';
	import Skills from '../components/skills.svelte';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	let tl = gsap.timeline({});

	onMount(() => {
		gsap.to('.section', {
			opacity: 1,
			scrollTrigger: {
				trigger: '.section',
				start: 'top center',
				end: 'center center'
			}
		});
		tl.to('.hi', { duration: 3, text: 'Hola, soy Héctor', ease: '', repeat: 1, yoyo: true });
		tl.to('.hi2', { opacity: 1, duration: 1.5, ease: '', repeat: -1, yoyo: true }, '<1');
		tl.to('.hi', { duration: 3, text: 'Hi, im Héctor', ease: '' }, '>3.2');
	});
</script>

<div class="flex flex-col gap-20 w-full">
	<div class="flex place-items-center flex-col gap-12 justify-center h-[80dvh] text-center">
		<h1 class="hi uppercase" />
		<button on:click={() => scrollTo(0, 800)}>
			<h1 class="hi2 uppercase opacity-0 hover:scale-150">↓</h1>
		</button>
	</div>
	<Swap />

	<div class="section opacity-0">
		<div class=" flex flex-col gap-8 sm:max-w-[70ch] sm:mx-auto">
			<h1>About Me</h1>
			<p class="">
				Web programmer with great passion towards the IT world. I'm always working on new projects,
				trying all my knowledge learned in a self-taught way, as well as in a CFGS of DAW and a
				programming bootcamp. Right now I'm looking for a company to work as a web programmer, and
				in the meantime I dedicate my time to learn new technologies with enthusiasm. I enjoy a good
				e-café with my colleagues and I like to distract myself playing basketball.
			</p>
		</div>
	</div>
	<div class="section opacity-0">
		<div class=" flex flex-col gap-8 sm:max-w-[70ch] sm:mx-auto">
			<h1>Studies</h1>
			<div class="flex flex-col gap-4">
				<div class="flex flex-col">
					<h5>CFGS DAW Web Development</h5>
					<p class="italic">September 2019 - Juliy 2021</p>
					<p>Institut tecnològic de Barcelona</p>
				</div>
				<div class="flex flex-col">
					<h5>Front-End Bootcamp (450h)</h5>
					<p class="italic">September 2019 - Juliy 2021</p>
					<p>PIMEC, Projecte SIngulars</p>
				</div>
			</div>
		</div>
	</div>
	<div class="section opacity-0">
		<Skills />
	</div>
	<div class="section opacity-0">
		<Projects />
	</div>
</div>
