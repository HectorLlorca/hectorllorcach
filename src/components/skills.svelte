<script>
	import { theme } from '$lib/stores';
	import Icon from '@iconify/svelte';
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	let skill = 'Svelte';

	const changeSkill = (newSkill) => {
		console.log(newSkill);
		skill = newSkill;
	};

	onMount(() => {
		gsap.to('.icon', {
			scrollTrigger: {
				trigger: '.box',
				start: 'top top',
				end: 'bottom center'
			}
		});
	});
</script>

<div class=" section flex flex-col gap-8 sm:max-w-[70ch] sm:mx-auto">
	<div class="flex place-items-center gap-6">
		<h1>Skills</h1>
		<input
			class="input input-bordered input-primary rounded text-lg"
			type="text"
			bind:value={skill}
		/>
	</div>
	<div class="flex flex-wrap gap-12 justify-center">
		<div class="flex flex-col gap-3">
			<h4>Frontend</h4>
			<div class="flex flex-wrap w-[20ch] gap-1">
				<button class="" on:click={() => changeSkill('Svelte')}>
					<Icon
						width={55}
						class="cursor-pointer icon hover:scale-110"
						icon="vscode-icons:file-type-svelte"
					/>
				</button>
				<button class="" on:click={() => (skill = 'React')}>
					<Icon width={55} class="cursor-pointer icon hover:scale-110" icon="logos:react" />
				</button>
				<button class="" on:click={() => changeSkill('Javascript')}>
					<Icon width={55} class="cursor-pointer icon hover:scale-110" icon="logos:javascript" />
				</button>
				<button class="" on:click={() => (skill = 'Tailwind')}>
					<Icon width={55} class="cursor-pointer icon hover:scale-110" icon="devicon:tailwindcss" />
				</button>
				<button class="" on:click={() => (skill = 'CSS')}>
					<Icon width={55} class="cursor-pointer icon hover:scale-110" icon="skill-icons:css" />
				</button>
			</div>
		</div>
		<div class="flex flex-col gap-3">
			<h4>Backend</h4>
			<div class="flex flex-wrap w-[20ch] gap-1">
				<button class="" on:click={() => (skill = 'Node')}>
					<Icon
						width={55}
						class="cursor-pointer icon hover:scale-110"
						icon="vscode-icons:file-type-node"
					/>
				</button>
				<button class="" on:click={() => (skill = 'Prisma')}>
					<Icon
						width={55}
						class="cursor-pointer icon hover:scale-110"
						icon="vscode-icons:file-type-light-prisma"
					/>
				</button>
				<button class="" on:click={() => (skill = 'Supabase')}>
					<Icon width={55} class="cursor-pointer icon hover:scale-110" icon="devicon:supabase" />
				</button>
				<button class="" on:click={() => (skill = 'PostgreSQL')}>
					<Icon width={55} class="cursor-pointer icon hover:scale-110" icon="logos:postgresql" />
				</button>
				<button class="" on:click={() => (skill = 'Expressjs')}>
					<Icon
						width={55}
						class="cursor-pointer icon hover:scale-110"
						icon="skill-icons:expressjs-dark"
					/>
				</button>
				<button class="" on:click={() => (skill = 'Mongodb')}>
					<Icon width={55} class="cursor-pointer icon hover:scale-110" icon="devicon:mongodb" />
				</button>
			</div>
		</div>
		<div class="flex flex-col gap-3">
			<h4>Others</h4>
			<div class="flex flex-wrap gap-1 w-[20ch]">
				<button class="" on:click={() => (skill = 'Figma')}>
					<Icon width={35} class="cursor-pointer icon hover:scale-110" icon="logos:figma" />
				</button>
				<button class="" on:click={() => (skill = 'Visual Studio Code')}>
					<Icon
						width={55}
						class="cursor-pointer icon hover:scale-110"
						icon="vscode-icons:file-type-vscode"
					/>
				</button>
				<button class="" on:click={() => (skill = 'Git')}>
					<Icon width={55} class="cursor-pointer icon hover:scale-110" icon="devicon:git" />
				</button>
				<button class="" on:click={() => (skill = 'Github')}>
					<Icon
						width={55}
						class="cursor-pointer icon hover:scale-110"
						icon="skill-icons:github-light"
						color={$theme === 'black' ? 'white' : 'black'}
					/>
				</button>
			</div>
		</div>
	</div>
</div>
