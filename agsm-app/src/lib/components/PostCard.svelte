<script lang="ts">
    let {link, title, excerpt, featuredImage} = $props(); 
</script>

<a href="blog/{link}" class="hover:opacity-90">

<div class="card grid h-full preset-filled-primary-100-900 hover:bg-surface-50-950 cursor-pointer group">
    {#if featuredImage }
        <header>
            <img src={featuredImage} alt={title} class="aspect-[21/9] w-full rounded-t-lg grayscale hue-rotate-90 group-hover:filter-none" />
        </header>
    {/if}

    <article class="space-y-4 p-4">
        <div>
            <h6 class="dark:text-primary-100 h6 z">Announcements</h6>
            <h3 class="text-secondary-800 dark:text-primary-500 h3">{title}</h3>
        </div>
        <p class="opacity-60 dark:opacity-90 text-balance line-clamp-4">{@html excerpt}</p>
    </article>

    <footer class="flex items-center justify-between self-end gap-4 p-4">
        <small class="opacity-60">Por AGSM</small>
        <small class="opacity-60 group-hover:text-secondary-700 dark:group-hover:text-primary-400">Leia mais</small>
    </footer>
</div>

</a>