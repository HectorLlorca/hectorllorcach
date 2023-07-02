import oldp from '$lib/assets/oldp.png';
import aerolab from '$lib/assets/aerolab.png';
import ableton from '$lib/assets/ableton.png';
import csspatternmaker from '$lib/assets/csspattern.png';
import ranksball from '$lib/assets/ranksball.png';
import donames from '$lib/assets/donames.png';

export const projects = [
	{
		name: 'Dona+ (not desktop responsive)',
		date: '2023',
		tools: [
			'React',
			'Tailwindcss',
			'Supabase',
			'DaisyUI',
			'Realtime',
			'UseContext',
			'React Router'
		],
		description: 'Bootcamp final project, a web to donate old stuff, realtime chat, auth, and more',
		img: donames,
		link: 'https://donames.vercel.app/'
	},
	{
		name: 'Css pattern maker',
		date: '2023',
		tools: ['Sveltekit', 'Tailwindcss'],
		description: 'Web to create css patterns',
		img: csspatternmaker,
		link: 'https://css-patterns-maker.vercel.app/'
	},
	{
		name: 'RanksBall',
		date: '2023',
		tools: ['Sveltekit', 'Tailwindcss', 'Supabase'],
		description: 'Web to rank streetball games, chat whit other players and more',
		img: ranksball,
		link: 'https://ranksball.vercel.app/'
	},

	{
		name: 'Old portfolio',
		date: '2023',
		tools: ['Sveltekit', 'Tailwindcss', 'Supabase', 'DaisyUI', 'Gsap'],
		description: 'Old Portfolio',
		img: oldp,
		link: 'https://hllorca.vercel.app/'
	},

	{
		name: 'Ableton copy',
		date: '2023',
		tools: ['Svelte'],
		description: 'Landing page for Ableton',
		img: ableton,
		link: 'https://level-one-abelton-about-copy.vercel.app/'
	},
	{
		name: 'Aerolab Challenge',
		date: '2021',
		tools: ['React'],
		description: 'Landing page for Aerolab challenge',
		img: aerolab,
		link: 'https://hectorllorca.github.io/aerolab-challenge-vite/'
	}
];
