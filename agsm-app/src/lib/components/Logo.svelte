<script>
    import logo from '$lib/imgs/agsm_logo_2xl.png';
    import gCtr from '$lib/imgs/agsm_tipos_gcentr.svg'
    import yCtr from '$lib/imgs/agsm_tipos_ycentr.svg'
	import { cubicOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

    export let showText = false;
    export let green = false;

</script>

<div class="text-center">
    <img src={logo} alt="AGSM" class="w-64 lg:w-80 mx-auto my-2">
    {#if showText == true }
        <div in:fly={{ x: 100, duration: 2000, delay: 1500, easing: cubicOut}}>
            {#if green }            
                <img src={gCtr} alt="AGSM" class="w-90 lg:w-120 mx-auto my-2">
                {:else}
                <img src={yCtr} alt="AGSM" class="w-90 lg:w-120 mx-auto my-2">
            {/if}
            <!-- 
            <h2 class="font-bold uppercase text-4xl text-secondary-200 dark:text-surface-500">Associacao</h2>
            <h3 class="font-bold uppercase text-4xl text-secondary-400 dark:text-primary-400 -my-3">GENTE da Serra</h3>
            <h3 class="font-bold uppercase text-4xl text-secondary-900 dark:text-primary-200">da Mantiqueira</h3> 
            -->
        </div>
        {/if}
</div>

<style>
    @font-face {
        font-family: 'Brevia-Bold';
        font-style: bold;
        font-weight: 700;
        src: local('Brevia-Bold'), local('Brevia-Bold'), url('../fonts/Brevia-Bold.woff2') format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    * {
        font-family: 'Brevia-Bold'
    }
</style>