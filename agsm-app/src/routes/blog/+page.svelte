<script lang="ts">
	import PostsGrid from '$lib/components/PostsGrid.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
    let posts = data.item;

</script>

<svelte:head>
    <title>Blog da Associação GENTE da Serra da Mantiqueira</title>
</svelte:head>

<PostsGrid {posts} />
