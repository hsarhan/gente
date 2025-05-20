<script>
	import logo from '$lib/imgs/agsm_logo_2xl.png';
    import gLft from '$lib/imgs/agsm_tipos_gleft.svg'
    import yLft from '$lib/imgs/agsm_tipos_yleft.svg'

    export let green = false;
    export let lSize = "w-[6em]";
    export let lType = 'w-[10em]';
    $: logoSize = lSize;
    $: tSize = lType;
</script>

<div class="w-fit mx-auto lg:mx-0 grid auto-cols-max grid-flow-col justify-start content-center items-center">
    <div class="{logoSize} lg:mx-0"><img src={logo} alt="AGSM" class="w-64 mx-auto my-2"></div>

    <div class="dark:hidden -space-y-2 ml-3 {tSize}">
        {#if green }            
            <img src={gLft} alt="AGSM">
            {:else}
            <img src={yLft} alt="AGSM">
        {/if}
    </div>
    <div class="hidden dark:block -space-y-2 ml-3 {tSize}">
        <img src={yLft} alt="AGSM">
    </div>
</div>

<style>

</style>