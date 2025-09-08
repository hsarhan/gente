<script>
	import { applyAction, enhance } from "$app/forms";
	import Footer from "$lib/components/Footer.svelte";
	import Logo from "$lib/components/Logo.svelte";
	import Navbar from "$lib/components/Navbar.svelte";
	import {pacientes, diagnosticos, estadosBR, paises, estadoCivil} from "$lib/data.js"

	export let form;
    // $: console.log(form);
	
	let btnDisabled = false;
	let pacList = pacientes;
	let diagList = diagnosticos;
	let estados = estadosBR;
	let nacionalidades = paises;
	let estadosCivis = estadoCivil;

	// Local reactive variable for the <select>
	let selectedDiag = form?.diag || "";

	$: showOtherField = selectedDiag === "Outro";

</script>

<svelte:head>
    <title>Faça parte da Associação GENTE da Serra da Mantiqueira</title>
</svelte:head>

<Navbar />

<!-- Options Snippet -->
{#snippet option(/** @type {{ [s: string]: any; } | ArrayLike<any>} */ list)}
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

				<!-- Endereço -->
				<div>
					<label for="address" class="block text-sm/6 font-medium text-gray-900 dark:text-primary-200">Seu endereço</label>
					<div class="mt-2">
						<input type="text" name="address" id="address" aria-label="address" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-600 sm:text-sm/6" value={form?.address || ""} class:error={form?.errors.address} />
						{#if form?.errors.address }
							<p class="mt-1 text-error-600 text-xs font-bold">* {form?.errors.address}</p>
						{/if}
					</div>
				</div>

				<!-- Cidade -->
				<div>
					<label for="city" class="block text-sm/6 font-medium text-gray-900 dark:text-primary-200">Sua cidade</label>
					<div class="mt-2">
						<input type="text" name="city" id="city" aria-label="city" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-600 sm:text-sm/6" value={form?.city || ""} class:error={form?.errors.city} />
						{#if form?.errors.city }
							<p class="mt-1 text-error-600 text-xs font-bold">* {form?.errors.city}</p>
						{/if}
					</div>
				</div>

				<!-- Bairro -->
				<div>
					<label for="neighborhood" class="block text-sm/6 font-medium text-gray-900 dark:text-primary-200">Seu bairro</label>
					<div class="mt-2">
						<input type="text" name="neighborhood" id="neighborhood" aria-label="neighborhood" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-600 sm:text-sm/6" value={form?.neighborhood || ""} class:error={form?.errors.neighborhood} />
						{#if form?.errors.neighborhood }
							<p class="mt-1 text-error-600 text-xs font-bold">* {form?.errors.neighborhood}</p>
						{/if}
					</div>
				</div>

				<!-- Estado -->
				<div>
					<label for="state" class="block text-sm/6 font-medium text-gray-900 dark:text-primary-200">Seu estado</label>
					<div class="mt-2">
						<select id="state" name="state" aria-label="state" class="select block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-600 sm:text-sm/6" value={form?.state || ""} class:error={form?.errors.state} >				
						<optgroup>
							<option disabled selected>Selecione seu estado...</option>
							{@render option(estados)}
						</optgroup>
						</select>
						{#if form?.errors.state }
							<p class="mt-1 text-error-600 text-xs font-bold">* {form?.errors.state}</p>
						{/if}
					</div>
				</div>

				<!-- CEP -->
				<div>
					<label for="zipCode" class="block text-sm/6 font-medium text-gray-900 dark:text-primary-200">Seu CEP</label>
					<div class="mt-2">
						<input type="tel" name="zipCode" id="zipCode" aria-label="zipCode" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-600 sm:text-sm/6" value={form?.zipCode || ""} class:error={form?.errors.zipCode} />
						{#if form?.errors.zipCode }
							<p class="mt-1 text-error-600 text-xs font-bold">* {form?.errors.zipCode}</p>
						{/if}
					</div>
				</div>

				<!-- CPF -->
				<div>
					<label for="cpf" class="block text-sm/6 font-medium text-gray-900 dark:text-primary-200">Seu CPF</label>
					<div class="mt-2">
						<input type="tel" name="cpf" id="cpf" aria-label="cpf" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-600 sm:text-sm/6" value={form?.cpf || ""} class:error={form?.errors.cpf} />
						{#if form?.errors.cpf }
							<p class="mt-1 text-error-600 text-xs font-bold">* {form?.errors.cpf}</p>
						{/if}
					</div>
				</div>

				<!-- RG -->
				<div>
					<label for="rg" class="block text-sm/6 font-medium text-gray-900 dark:text-primary-200">Seu RG</label>
					<div class="mt-2">
						<input type="tel" name="rg" id="rg" aria-label="rg" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-600 sm:text-sm/6" value={form?.rg || ""} class:error={form?.errors.rg} />
						{#if form?.errors.rg }
							<p class="mt-1 text-error-600 text-xs font-bold">* {form?.errors.rg}</p>
						{/if}
					</div>
				</div>

				<!-- RG EXP -->
				<div>
					<label for="rgExp" class="block text-sm/6 font-medium text-gray-900 dark:text-primary-200">Órgão Expedidor (RG)</label>
					<div class="mt-2">
						<input type="tel" name="rgExp" id="rgExp" aria-label="rgExp" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-600 sm:text-sm/6" placeholder="ex: SSP/SP" value={form?.rgExp || ""} class:error={form?.errors.rgExp} />
						{#if form?.errors.rgExp }
							<p class="mt-1 text-error-600 text-xs font-bold">* {form?.errors.rgExp}</p>
						{/if}
					</div>
				</div>

				<!-- Nacionalidade -->
				<div>
					<label for="country" class="block text-sm/6 font-medium text-gray-900 dark:text-primary-200">Sua Nacionalidade</label>
					<div class="mt-2">
						<select id="country" name="country" aria-label="country" class="select block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-600 sm:text-sm/6" value={form?.country || ""} class:error={form?.errors.country} >				
						<optgroup>
							<option disabled selected>Selecione um país...</option>
							{@render option(nacionalidades)}
						</optgroup>
						</select>
						{#if form?.errors.country }
							<p class="mt-1 text-error-600 text-xs font-bold">* {form?.errors.country}</p>
						{/if}
					</div>
				</div>

				<!-- Data de Nascimento -->
				<div>
					<label for="birth" class="block text-sm/6 font-medium text-gray-900 dark:text-primary-200">Sua data de nascimento</label>
					<div class="mt-2">
						<input type="date" name="birth" id="birth" aria-label="birth" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-600 sm:text-sm/6" value={form?.birth || ""} class:error={form?.errors.birth} />
						{#if form?.errors.birth }
							<p class="mt-1 text-error-600 text-xs font-bold">* {form?.errors.birth}</p>
						{/if}
					</div>
				</div>

				<!-- Cidade de Nascimento -->
				<div>
					<label for="birthCity" class="block text-sm/6 font-medium text-gray-900 dark:text-primary-200">Sua cidade de nascimento</label>
					<div class="mt-2">
						<input type="text" name="birthCity" id="birthCity" aria-label="birthCity" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-600 sm:text-sm/6" value={form?.birthCity || ""} class:error={form?.errors.birthCity} />
						{#if form?.errors.birthCity }
							<p class="mt-1 text-error-600 text-xs font-bold">* {form?.errors.birthCity}</p>
						{/if}
					</div>
				</div>

				<!-- Estado Civil -->
				<div>
					<label for="relationship" class="block text-sm/6 font-medium text-gray-900 dark:text-primary-200">Seu estado civil</label>
					<div class="mt-2">
						<select id="relationship" name="relationship" aria-label="relationship" class="select block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-600 sm:text-sm/6" value={form?.relationship || ""} class:error={form?.errors.relationship} >				
						<optgroup>
							<option disabled selected>Selecione...</option>
							{@render option(estadosCivis)}
						</optgroup>
						</select>
						{#if form?.errors.relationship }
							<p class="mt-1 text-error-600 text-xs font-bold">* {form?.errors.relationship}</p>
						{/if}
					</div>
				</div>

				<!-- Ocupação -->
				<div>
					<label for="occupation" class="block text-sm/6 font-medium text-gray-900 dark:text-primary-200">Sua ocupação</label>
					<div class="mt-2">
						<input type="text" name="occupation" id="occupation" aria-label="occupation" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-600 sm:text-sm/6" value={form?.occupation || ""} class:error={form?.errors.occupation} />
						{#if form?.errors.occupation }
							<p class="mt-1 text-error-600 text-xs font-bold">* {form?.errors.occupation}</p>
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
				
				<!-- Diagnóstico -->
				<div>
					<label for="diag" class="block text-sm/6 font-medium text-gray-900 dark:text-primary-200">Diagnóstico</label>
					<div class="mt-2">
						<select
							id="diag"
							name="diag"
							aria-label="diag"
							bind:value={selectedDiag}
							class="select block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-600 sm:text-sm/6"
							class:error={form?.errors.diag}
						>
							<optgroup>
								<option disabled selected>Selecione um diagnóstico...</option>
								{@render option(diagList)}
							</optgroup>
						</select>
						{#if form?.errors.diag}
							<p class="mt-1 text-error-600 text-xs font-bold">* {form.errors.diag}</p>
						{/if}
					</div>

					{#if showOtherField}
						<div class="mt-3">
							<input
								type="text"
								name="other"
								id="other"
								aria-label="other"
								class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-600 sm:text-sm/6"
								placeholder="Qual?"
								value={form?.other || ""}
							/>
						</div>
					{/if}
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