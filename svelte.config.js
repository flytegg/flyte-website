import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	adapter: adapter({
		// See below for an explanation of these options
		routes: {
			include: ['/*'],
			exclude: ['<all>']
		}
	}),
	preprocess: vitePreprocess()
};
export default config;
