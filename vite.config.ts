import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa'
//import { SvelteKitPWA } from '@vite-pwa/sveltekit';

const config: UserConfig = {
	plugins: [sveltekit(), 
		VitePWA()
		// SvelteKitPWA()
	]
};

export default config;
