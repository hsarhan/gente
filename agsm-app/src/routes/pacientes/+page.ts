import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch(`https://base.agsm.org.br/wp-json/wp/v2/posts/`);
	const item = await res.json();

	// console.log(item);

	return {
		item
	};
};
