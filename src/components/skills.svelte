<script>
	import { theme } from '$lib/stores';
	import Icon from '@iconify/svelte';
	import { gsap } from 'gsap';
	import { Flip } from 'gsap/dist/Flip';
	import { onMount } from 'svelte';

	let skill = 'Svelte';

	const changeSkill = (newSkill) => {
		skill = newSkill;
	};
</script>

<div class=" flex flex-col gap-8 sm:max-w-[70ch] sm:mx-auto">
	<div class="flex place-items-center flex-wrap sm:flex-nowrap gap-6">
		<h1>Skills</h1>
		<div class="flex w-full">
			<input
				class="badge w-full h-10 rounded-lg text-center text-neutral text-lg font-bold bg-green-400"
				type="text"
				bind:value={skill}
				disabled
			/>
		</div>
	</div>
	<div class="flex flex-wrap gap-12 justify-center">
		<div class="flex flex-col gap-3">
			<h4>Frontend</h4>
			<div class="flex flex-wrap w-[20ch] gap-1">
				<button on:click={() => changeSkill('Svelte')}>
					<Icon
						width={55}
						class="cursor-pointer hover:scale-110"
						icon="vscode-icons:file-type-svelte"
					/>
				</button>
				<button on:click={() => (skill = 'React')}>
					<Icon width={55} class="cursor-pointer hover:scale-110" icon="logos:react" />
				</button>
				<button on:click={() => changeSkill('Javascript')}>
					<Icon width={55} class="cursor-pointer hover:scale-110" icon="logos:javascript" />
				</button>
				<button on:click={() => (skill = 'Tailwind')}>
					<Icon width={55} class="cursor-pointer hover:scale-110" icon="devicon:tailwindcss" />
				</button>
				<button on:click={() => (skill = 'CSS')}>
					<Icon width={55} class="cursor-pointer hover:scale-110" icon="skill-icons:css" />
				</button>
				<button on:click={() => (skill = 'DaisyUI')}>
					<Icon width={55} class="cursor-pointer hover:scale-110" icon="logos:daisyui" />
				</button>
			</div>
		</div>
		<div class="flex flex-col gap-3">
			<h4>Backend</h4>
			<div class="flex flex-wrap w-[20ch] gap-1">
				<button on:click={() => (skill = 'Node')}>
					<Icon
						width={55}
						class="cursor-pointer hover:scale-110"
						icon="vscode-icons:file-type-node"
					/>
				</button>
				<button on:click={() => (skill = 'Prisma')}>
					<Icon
						width={55}
						class="cursor-pointer hover:scale-110"
						icon="vscode-icons:file-type-light-prisma"
					/>
				</button>
				<button on:click={() => (skill = 'Supabase')}>
					<Icon width={55} class="cursor-pointer hover:scale-110" icon="devicon:supabase" />
				</button>
				<button on:click={() => (skill = 'PostgreSQL')}>
					<Icon width={55} class="cursor-pointer hover:scale-110" icon="logos:postgresql" />
				</button>
				<button on:click={() => (skill = 'Expressjs')}>
					<Icon
						width={55}
						class="cursor-pointer hover:scale-110"
						icon="skill-icons:expressjs-dark"
					/>
				</button>
				<button on:click={() => (skill = 'Mongodb')}>
					<Icon width={55} class="cursor-pointer hover:scale-110" icon="devicon:mongodb" />
				</button>
			</div>
		</div>
		<div class="flex flex-col gap-3">
			<h4>Others</h4>
			<div class="flex flex-wrap gap-1 w-[20ch]">
				<button on:click={() => (skill = 'Figma')}>
					<Icon width={35} class="cursor-pointer hover:scale-110" icon="logos:figma" />
				</button>
				<button on:click={() => (skill = 'Visual Studio Code')}>
					<Icon
						width={55}
						class="cursor-pointer hover:scale-110"
						icon="vscode-icons:file-type-vscode"
					/>
				</button>
				<button on:click={() => (skill = 'Git')}>
					<Icon width={55} class="cursor-pointer hover:scale-110" icon="devicon:git" />
				</button>
				<button on:click={() => (skill = 'Github')}>
					<Icon
						width={55}
						class="cursor-pointer hover:scale-110"
						icon="skill-icons:github-light"
						color={$theme === 'black' ? 'white' : 'black'}
					/>
				</button>
			</div>
		</div>
	</div>
</div>

<style>
</style>
