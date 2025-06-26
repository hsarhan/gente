<script>
	import { fade, fly } from "svelte/transition";
	import Logo from "./Logo.svelte";
	import { cubicOut } from "svelte/easing";
</script>

<div></div>
<div class="grid content-center justify-items-center place-self-center">
    <div class="dark:hidden" in:fade={{duration: 1000}}><Logo showText green /></div>
    <div class="hidden dark:block"><Logo showText /></div>
    <div class="my-8 hover:scale-95 transition-all duration-300 ease-out" in:fly={{ y: 100, duration: 1500, delay: 1500, easing: cubicOut}}>
        <a
            aria-label="signup"
            href="/signup"
            title="Faça parte"
            class="py-3 px-4 text-center text-primary-900 bg-primary-500 hover:bg-primary-300 rounded-md shadow block md:inline"
        >
            Faça Parte
        </a>
    </div>
</div>
<div></div>