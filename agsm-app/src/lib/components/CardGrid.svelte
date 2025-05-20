<script>
	import Logo from "./Logo.svelte";

    const imgSrc =
    'https://images.unsplash.com/photo-1463171515643-952cee54d42a?q=80&w=450&h=190&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
</script>

<section>
    <h1 class="py-2 lg:py-4 h1 text-center">TITLE</h1>
    <div class="w-full h-fit grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="card preset-filled-primary-100-900 hover:bg-surface-50-950 cursor-pointer">
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
        <div class="card preset-filled-primary-100-900 hover:bg-surface-50-950 cursor-pointer">
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
        <div class="card preset-filled-primary-100-900 hover:bg-surface-50-950 cursor-pointer">
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
    </div>
</section>

<style>
    @font-face {
        font-family: 'Brevia-Bold';
        font-style: bold;
        font-weight: 700;
        src: local('Brevia-Bold'), local('Brevia-Bold'), url('../fonts/Brevia-Bold.woff2') format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Brevia-Bold'
    }
</style>