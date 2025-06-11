import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	// const res = await fetch(`http://localhost/agsm/wp-json/wp/v2/posts/?slug=${params.slug}`);
	const res = await fetch(`https://base.agsm.org.br/wp-json/wp/v2/posts/?slug=${params.slug}`);
	const item = await res.json();

	// console.log(item[0]);

	return {
		item: {
			id: item[0].id,
			modified: item[0].modified,
			title: item[0].title.rendered,
			excerpt: item[0].excerpt.rendered,
			content: item[0].content.rendered,
			featuredImage: item[0].featured_media_src_url
		}
	};
};
