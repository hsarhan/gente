<script lang="ts">
    import moment from 'moment';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
    let published = moment(data.item.modified).utc().format("D.MM.YYYY"); //Formats published/modified date
    
</script>

<svelte:head>
    <title>{data.item.title} | Blog da Associação GENTE da Serra da Mantiqueira</title>
</svelte:head>

<section class="max-w-6xl mx-auto">

	<main class="p-4 lg:py-16 2xl:py-32 space-y-6 dark:bg-primary-800">
        <!-- Content wrapper -->
		<div class="my-10 mx-auto w-full sm:max-w-3xl bg-surface-50-950 p-6 space-y-2 rounded-lg">

            {#if data.item.featuredImage }
                <img src={data.item.featuredImage} alt={data.item.title} class="rounded-md" />
            {/if}
            <h2 class="h4 py-4 font-bold">{data.item.title}</h2>
            <div class="py-2 text-pretty">{@html data.item.content}</div>

            <small class="opacity-60">Por AGSM em {published}</small>
            <div class="py-2"><a href="/blog" class="px-3 py-1 bg-secondary-300 dark:bg-primary-600 text-surface-50 rounded-md">Voltar</a></div>
           
        </div>
		 
	</main>
</section>