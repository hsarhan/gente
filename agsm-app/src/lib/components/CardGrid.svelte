<script>
	import Logo from "./Logo.svelte";

    const imgSrc =
    'https://images.unsplash.com/photo-1463171515643-952cee54d42a?q=80&w=450&h=190&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
</script>

<div class="w-full h-fit grid md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div class="card p-4 preset-filled-primary-500 dark:bg-secondary-950"><Logo /></div>
    <div class="card preset-filled-primary-100-900">
        <header>
            <img src={imgSrc} class="aspect-[21/9] w-full grayscale hue-rotate-90 rounded-t-lg" alt="banner" />
        </header>
        <article class="space-y-4 p-4">
            <div>
            <h6 class="dark:text-primary-100 h6">Announcements</h6>
            <h3 class="text-secondary-800 dark:text-primary-500 h3">Skeleton is Awesome</h3>
            </div>
            <p class="opacity-60 dark:opacity-90 text-pretty">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident eveniet eligendi cumque consequatur tempore sint
            nisi sapiente. Iste beatae laboriosam iure molestias cum expedita architecto itaque quae rem.
            </p>
        </article>

        <footer class="flex items-center justify-between gap-4 p-4">
            <small class="opacity-60">By Alex</small>
            <small class="opacity-60">On {new Date().toLocaleDateString()}</small>
        </footer>
    </div>
    <div class="card p-4 preset-outlined-primary-500">Card</div>
</div>