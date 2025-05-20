<script>
	import CardGrid from "./CardGrid.svelte";
	import Footer from "./Footer.svelte";
	import Hero from "./Hero.svelte";
	import Navbar from "./Navbar.svelte";

</script>

<Navbar />
<section class="max-w-6xl mx-auto">
	<Hero />
	<main class="p-4 space-y-6 dark:bg-primary-800">
		<CardGrid /> 
	</main>
</section>

<Footer />