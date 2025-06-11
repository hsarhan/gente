<script lang="ts">
    import PostCard from '$lib/components/PostCard.svelte';
    export let posts;
</script>

<section class="max-w-6xl mx-auto">
    <h1 class="py-5 md:pt-10 h1 text-center dark:bg-primary-800">Blog da GENTE</h1>
	<main class="p-4 md:py-8 2xl:py-32 grid md:grid-cols-2 lg:grid-cols-3 gap-3 dark:bg-primary-800">
        <!-- Content wrapper -->
        {#each posts as post}
            <PostCard link={post.slug} title={post.title.rendered} excerpt={post.excerpt.rendered} featuredImage={post.featured_media_src_url}/>
        {/each}
         
    </main>
</section>