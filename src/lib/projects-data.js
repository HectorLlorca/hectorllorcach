import oldp from '$lib/assets/oldp.png';
import aerolab from '$lib/assets/aerolab.png';
import ableton from '$lib/assets/ableton.png';
import csspatternmaker from '$lib/assets/csspattern.png';
import ranksball from '$lib/assets/ranksball.png';
import donames from '$lib/assets/donames.png';

export const projects = [
	{
		name: 'Dona+ (not desktop responsive)',
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
		tools: ['Sveltekit', 'Tailwindcss'],
		description: 'Web to create css patterns',
		img: csspatternmaker,
		link: 'https://css-patterns-maker.vercel.app/'
	},
	{
		name: 'RanksBall',
		tools: ['Sveltekit', 'Tailwindcss', 'Supabase'],
		description: 'Web to rank streetball games, chat whit other players and more',
		img: ranksball,
		link: 'https://ranksball.vercel.app/'
	},

	{
		name: 'Old portfolio',
		tools: ['Sveltekit', 'Tailwindcss', 'Supabase', 'DaisyUI', 'Gsap'],
		description: 'Old Portfolio',
		img: oldp,
		link: 'https://hllorca.vercel.app/'
	},
	{
		name: 'Aerolab Challenge',
		tools: ['React'],
		description: 'Landing page for Aerolab challenge',
		img: aerolab,
		link: 'https://hectorllorca.github.io/aerolab-challenge-vite/'
	},
	{
		name: 'Ableton copy',
		tools: ['Svelte'],
		description: 'Landing page for Ableton',
		img: ableton,
		link: 'https://level-one-abelton-about-copy.vercel.app/'
	}
];
