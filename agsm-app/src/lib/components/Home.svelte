<script>
	import CardGrid from "./CardGrid.svelte";
	import Hero from "./Hero.svelte";
	import Navbar from "./Navbar.svelte";

</script>

<Navbar />
<Hero />
<main class="p-4 space-y-6 dark:bg-primary-800">
    <h1 class="py-2 lg:py-4 h1 text-center">TITLE</h1>
    <CardGrid />
    
</main>

<footer class="bg-primary-100-900 p-4">(footer)</footer>