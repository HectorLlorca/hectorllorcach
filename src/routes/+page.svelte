<script>
	import Projects from '../components/projects.svelte';
	import Swap from '../components/swap.svelte';
	import Skills from '../components/skills.svelte';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import Icon from '@iconify/svelte';
	import { theme } from '$lib/stores';
	let tl = gsap.timeline({});

	$: isMobile = /Mobi/.test(navigator.userAgent);
	let open = '';

	onMount(() => {
		gsap.to('.section', {
			opacity: 1,
			scrollTrigger: {
				trigger: '.section',
				start: 'top center',
				end: 'center center'
			}
		});
		gsap.to('.hi2', { opacity: 1, duration: 1.5, ease: '', repeat: -1, yoyo: true, delay: 1 });
		tl.to('.hi', { duration: 2, text: 'Hola, soy Héctor', ease: '', repeat: 1, yoyo: true });
		tl.to('.hi', { duration: 2, text: "Hola, soc l'Héctor", ease: '', repeat: 1, yoyo: true }, '>');
		tl.to(
			'.hi',
			{
				duration: 2,
				text: 'Hi, im Héctor',
				ease: '',
				repeat: 1,
				yoyo: true,
				onComplete: function () {
					tl.restart();
				}
			},
			'>'
		);
	});
</script>

<div class="flex flex-col gap-20 w-full">
	<div
		class="hero relative flex place-items-center flex-col gap-12 justify-center h-[100dvh] text-center"
	>
		<nav class="absolute flex top-5 right-5 gap-2 place-items-center">
			<a
				class="cursor-pointer hover:scale-110"
				href="https://www.linkedin.com/in/hector-llorca/"
				target="_blank"
			>
				<Icon width={28} icon="skill-icons:linkedin" />
			</a>
			<a
				class="cursor-pointer hover:scale-110"
				href="https://github.com/HectorLlorca"
				target="_blank"
			>
				<Icon width={28} icon="fa:github" color={$theme === 'black' ? 'white' : 'black'} />
			</a>

			<button
				class={`tooltip-bottom tooltip-success hover:scale-110 ${open}`}
				data-tip="Copied!"
				on:click={() =>
					isMobile
						? null
						: (navigator.clipboard.writeText('hectorllorca7@gmail.com'),
						  (open = 'tooltip tooltip-open'),
						  setTimeout(() => (open = ''), 1500))}
			>
				<a href={isMobile ? 'mailto:hectorllorca7@gmail.com' : null} target="_blank">
					<Icon icon="logos:google-gmail" />
				</a>
			</button>
		</nav>
		<h1 class="hi uppercase" />
		<button class="" on:click={() => scrollTo(0, 800)}>
			<h1 class="hi2 uppercase opacity-0 hover:scale-150">↓</h1>
		</button>
		<div class="absolute bottom-16">
			<Swap />
		</div>
	</div>

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
					<h5>Front-End Bootcamp (450h)</h5>
					<p class="italic">July 2023</p>
					<p>PIMEC, Projecte SIngulars</p>
				</div>
				<div class="flex flex-col">
					<h5>University of Helsinki Full Stack open (MERN stack)</h5>
					<p class="italic">September 2020 - Refreshing</p>
					<a class="link" href="https://fullstackopen.com/" target="_blank"
						>https://fullstackopen.com/</a
					>
				</div>
				<div class="flex flex-col">
					<h5>CFGS DAW Web Development</h5>
					<p class="italic">September 2019 - Juliy 2021</p>
					<p>Institut tecnològic de Barcelona</p>
				</div>
			</div>
		</div>
	</div>
	<Skills />
	<Projects />
</div>
