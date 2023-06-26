import { browser } from '$app/environment';
import { writable } from 'svelte/store';
let getTheme = '';
if (browser) {
	getTheme = localStorage.getItem('theme');
}

export const theme = writable(getTheme);
