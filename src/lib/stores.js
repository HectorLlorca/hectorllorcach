import { browser } from '$app/environment';
import { writable } from 'svelte/store';
let getTheme = '';
if (browser) {
	getTheme = localStorage.getItem('theme') || 'lofi';
}

export const theme = writable(getTheme);
