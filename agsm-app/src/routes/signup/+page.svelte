<script>
	import { applyAction, enhance } from "$app/forms";
	import Footer from "$lib/components/Footer.svelte";
	import Logo from "$lib/components/Logo.svelte";
	import Navbar from "$lib/components/Navbar.svelte";
	import {pacientes, diagnosticos} from "$lib/data.js"

	export let form;
    // $: console.log(form);

	let btnDisabled = false;
	let pacList = pacientes;
	let diagList = diagnosticos;
	

</script>

<Navbar />

<!-- Options Snippet -->
{#snippet option(list)}
	{#each Object.entries(list) as [key, value] (key)}
	<option value={value}>
		{value}
	</option>
	{/each}
{/snippet}

<main class="p-4 space-y-6 dark:bg-primary-800">
	<!-- SignUp Form -->
	<div class="flex min-h-full flex-col justify-center md:px-6 py-12 lg:px-8">
		<div class="sm:mx-auto sm:w-full sm:max-w-sm">
			<div class="w-20 h-10 mx-auto"><Logo /></div>
			<h2 class="h2 mt-10 text-center text-3xl/9 font-bold tracking-tight text-secondary-900 dark:text-primary-400">Faça parte da GENTE</h2>
			<p class="mt-2 text-center text-gray-500 dark:text-gray-200">Nossas vagas são limitadas.</p>
		</div>

		<!-- Form wrapper -->
		<div class="mt-10 mx-auto w-full sm:max-w-md bg-surface-50-950 p-6 rounded-lg">

			{#if form?.success }
			<!-- Success -->
			<div class="space-y-2 pb-2">
				<h4 class="h4 text-secondary-600 dark:text-primary-400">A GENTE se fala em breve...</h4>
				<p class="py-4 text-sm text-gray-500 dark:text-gray-200 mb-4">{@html form?.status || ""}</p>
				<a href="/" class="flex w-full justify-center rounded-md bg-secondary-600 px-3 py-3 text-sm/6 font-semibold text-white dark:text-primary-800 shadow-xs hover:bg-secondary-500 dark:bg-primary-500 dark:hover:bg-primary-600 dark:hover:dark:text-primary-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600">Voltar para home</a>
			</div>
			{:else}
			<form method="POST" use:enhance={() => {
				return async({result}) => {
					await applyAction(result)
				}
			}} class="space-y-6" >
		
				<!-- Nome -->
				<div>
					<label for="name" class="block text-sm/6 font-medium text-gray-900 dark:text-primary-200">Seu nome</label>
					<div class="mt-2">
						<input type="text" name="name" id="name" aria-label="name" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-600 sm:text-sm/6" value={form?.name || ""} class:error={form?.errors.name} />
						{#if form?.errors.name }
							<p class="mt-1 text-error-600 text-xs font-bold">* {form?.errors.name}</p>
						{/if}
					</div>
				</div>
			
				<!-- Email -->
				<div>
					<label for="email" class="block text-sm/6 font-medium text-gray-900 dark:text-primary-200">Seu email</label>
					<div class="mt-2">
						<input type="email" name="email" id="email" aria-label="email" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-600 sm:text-sm/6" value={form?.email || ""} class:error={form?.errors.email} />
						{#if form?.errors.email }
							<p class="mt-1 text-error-600 text-xs font-bold">* {form?.errors.email}</p>
						{/if}
					</div>
				</div>
			
				<!-- Telefone -->
				<div>
					<label for="phone" class="block text-sm/6 font-medium text-gray-900 dark:text-primary-200">Seu telefone</label>
					<div class="mt-2">
						<input type="tel" name="phone" id="phone" aria-label="phone" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-600 sm:text-sm/6" placeholder="ex: +55 11 987654321" value={form?.phone || ""} class:error={form?.errors.phone} />
						{#if form?.errors.phone }
							<p class="mt-1 text-error-600 text-xs font-bold">* {form?.errors.phone}</p>
						{/if}
					</div>
				</div>
			
				<!-- Paciente -->
				<div>
					<label for="pacient" class="block text-sm/6 font-medium text-gray-900 dark:text-primary-200">Paciente</label>
					<div class="mt-2">
						<select id="pacient" name="pacient" aria-label="pacient" class="select block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-600 sm:text-sm/6" value={form?.pacient || ""} class:error={form?.errors.pacient} >				
						<optgroup>
							<option disabled selected>Para quem é o tratamento...</option>
							{@render option(pacList)}
						</optgroup>
						</select>
						{#if form?.errors.pacient }
							<p class="mt-1 text-error-600 text-xs font-bold">* {form?.errors.pacient}</p>
						{/if}
					</div>
				</div>
				
				<!-- Diagnostico -->
				<div>
					<label for="diag" class="block text-sm/6 font-medium text-gray-900 dark:text-primary-200">Diagnóstico</label>
					<div class="mt-2">
						<select id="diag" name="diag" aria-label="diag"  class="select block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-600 sm:text-sm/6" value={form?.diag || ""} class:error={form?.errors.diag}>
						<optgroup>
							<option disabled selected>Selecione um diagnóstico...</option>
							{@render option(diagList)}
						</optgroup>
						</select>
						{#if form?.errors.diag }
							<p class="mt-1 text-error-600 text-xs font-bold">* {form?.errors.diag}</p>
						{/if}
					</div>
				</div>
			
				<!-- Mensagem -->
				<div>
					<label for="tel" class="block text-sm/6 font-medium text-gray-900 dark:text-primary-200">Observações</label>
					<div class="mt-2">
						<textarea id="message" name="message" aria-label="message" class="textarea block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-600 sm:text-sm/6" value={form?.message || ""} rows="4" placeholder="Conte-nos um pouco mais..."></textarea>
					</div>
				</div>
		
				<!-- Aceite -->
				<div>
					<div class="mt-2">
						<div class="w-full mt-2 grid gap-4">
							<label class="flex items-center space-x-2">
								<input bind:checked={btnDisabled} class="checkbox w-4 h-4" type="checkbox" id="signup" name="signup" aria-label="signup"/>
								<p class="py-1.5 text-xs md:text-sm text-gray-700 dark:text-primary-100">Li, e aceito os <a href="/termos" target="_blank" class="font-semibold text-secondary-600 hover:text-secondary-500 dark:text-primary-500 dark:hover:text-primary-200 hover:underline text-pretty"> Termos de Adesão</a> da GENTE.</p>
							</label>
						</div>
					</div>
				</div>

				{#if btnDisabled == true }
					<div class="py-4">
						<button  type="submit" id="submit" class="flex w-full justify-center rounded-md bg-secondary-600 px-3 py-3 text-sm/6 font-semibold text-white dark:text-primary-800 shadow-xs hover:bg-secondary-500 dark:bg-primary-500 dark:hover:bg-primary-600 dark:hover:dark:text-primary-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600" >Enviar</button>
					</div>
					{:else}
					<div class="py-4">
						<div class="opacity-50 flex w-full justify-center rounded-md bg-secondary-600 px-3 py-3 text-sm/6 font-semibold text-white dark:text-primary-800 shadow-xs dark:bg-primary-500">Enviar</div>
					</div>
				{/if}
		
			</form>
			{/if}
		
		</div>
	</div>
</main>
<Footer />

<style>
	.error {
		outline: 2px solid red;
	}
</style>