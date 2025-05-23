<script lang="ts">
  import { fly, fade } from 'svelte/transition';
	import { applyAction, deserialize, enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';

	import Logo from "./Logo.svelte";

  let tel: String;
  let submitStatus: String;

  let hasError = false;
	let isSuccessVisible = false;
	let submitted = false;


	const errMessage = 'Erro! Verifique os campos.';
	const successMessage = 'Dados enviados com sucesso. Obrigado!';

	let handleOnChange = (e) => {
		console.log(e.target.value);
		//save value to firestore
	};

  const submitForm = async (data) => {
		submitStatus = 'submitting';
		isSuccessVisible = true;

		const formData = new FormData(data.currentTarget);

		const res = await fetch('/signup', {
			method: 'POST',
			body: formData,
			headers: {
				'x-sveltekit-action': 'true'
			}
		});

		/** @type {import('@sveltejs/kit').ActionResult} */
		const result = deserialize(await res.text());
		submitStatus = result.type;

    toastCheck(submitStatus);
		applyAction(result);

		setTimeout(() => {
			isSuccessVisible = false;
			tel = '';
		}, 4500);
	};

  let toastCheck = (submitStatus) => {
		console.log(submitStatus);
		if (submitStatus === 'success') {
			// triggerToast();
      console.log("Success!")
		} else {
			hasError = true;
			// errorToast();
			setTimeout(function () {
        console.log("Error!")
				submitStatus = 'failure';
				invalidateAll();
			}, 4500);
		}
	};



</script>


<div class="flex min-h-full flex-col justify-center md:px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="w-20 h-10 mx-auto"><Logo /></div>
      <h2 class="h2 mt-10 text-center text-3xl/9 font-bold tracking-tight text-secondary-900 dark:text-primary-400">Faça parte da GENTE</h2>
      <p class="mt-2 text-center text-gray-500 dark:text-gray-200">Nossas vagas são limitadas.</p>
    </div>
  
    <div class="mt-10 mx-auto w-full sm:max-w-md bg-surface-50-950 p-6 rounded-lg">
      
      {#if hasError == true}
        <p
        class="font-bold text-center text-black bg-warning-500 rounded-md p-2 mb-4"
        in:fly={{ y: -32, duration: 2000, delay: 500 }}
        out:fade={{ duration: 450, delay: 500 }}
        >
        {errMessage}
        </p>
      {:else if isSuccessVisible}
        <p
        class="text-center text-white bg-secondary-500 border border-secondary-500 rounded-md p-2 mb-4"
        in:fly={{ y: -32, duration: 2000, delay: 500 }}
        out:fade={{ duration: 450, delay: 500 }}
        >
        {successMessage}
        </p>
      {/if}

      {#if submitStatus == 'submitting'}
        <div class="grid grid-cols-[auto_1fr] align-middle justify-start pb-2">
        <div class="w-6 mr-2">!</div>
        <p>Enviando...</p>
        </div>
      {:else if submitStatus == 'error' || undefined}
        <p class="font-semibold text-error-700-200-token">{errMessage}</p>
      {:else if submitStatus == 'failure'}
        <p class="font-semibold text-warning-700-200-token">Desculpe-nos! Houve uma falha no envio.</p>
      {:else}

      <form on:submit|preventDefault={submitForm} use:enhance method="POST" class="space-y-6" >

        <!-- Nome -->
        <div>
          <label for="name" class="block text-sm/6 font-medium text-gray-900 dark:text-primary-200">Seu nome</label>
          <div class="mt-2">
            <input type="name" name="name" id="name" aria-label="name" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-600 sm:text-sm/6">
          </div>
        </div>

        <!-- Email -->
        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-900 dark:text-primary-200">Seu email</label>
          <div class="mt-2">
            <input type="email" name="email" id="email" aria-label="email" autocomplete="email" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-600 sm:text-sm/6">
          </div>
        </div>

        <!-- Telefone -->
        <div>
          <label for="phone" class="block text-sm/6 font-medium text-gray-900 dark:text-primary-200">Seu telefone</label>
          <div class="mt-2">
            <input type="tel" name="phone" id="phone" autocomplete="tel" aria-label="phone" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-600 sm:text-sm/6" placeholder="ex: +55 11 987654321">
          </div>
        </div>

        <!-- Paciente -->
        <div>
          <label for="pacient" class="block text-sm/6 font-medium text-gray-900 dark:text-primary-200">Paciente</label>
          <div class="w-full mt-2 grid grid-cols-3 gap-4 justify-items-center-safe">
            <label class="flex items-center space-x-2">
              <input class="checkbox" type="checkbox" id="pacient" name="pacient" aria-label="pacient" value="Para mim" checked />
              <p>Para mim</p>
            </label>

            <label class="flex items-center space-x-2">
              <input class="checkbox" type="checkbox" id="pacient2" name="pacient2" aria-label="pacient2" value="Familiar" />
              <p>Familiar</p>
            </label>

            <label class="flex items-center space-x-2">
              <input class="checkbox" type="checkbox" id="pacient3" name="pacient3" aria-label="pacient3" value="Pet" />
              <p>Pet</p>
            </label>
            
          </div>
        </div>

        <!-- Diagnostico -->
        <div>
          <label for="diag" class="block text-sm/6 font-medium text-gray-900 dark:text-primary-200">Diagnóstico</label>
          <div class="mt-2">
            <select required id="diag" name="diag" aria-label="diag" class="select block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-600 sm:text-sm/6">
              <optgroup>
                <option disabled selected>Selecione um diagnóstico...</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
                <option value="5">Option 5</option>
              </optgroup>
            </select>
          </div>
        </div>

        <!-- Mensagem -->
        <div>
          <label for="tel" class="block text-sm/6 font-medium text-gray-900 dark:text-primary-200">Observações</label>
          <div class="mt-2">
            <textarea id="message" name="message" aria-label="message" class="textarea block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-600 sm:text-sm/6" rows="4" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."></textarea>
          </div>
        </div>

        <!-- Aceite -->
        <div>
          <div class="mt-2">
            <div class="w-full mt-2 grid gap-4">
              <label class="flex items-center space-x-2">
                <input class="checkbox" type="checkbox" id="signup" name="signup" aria-label="signup" value="Aceito" required />
                <p class="py-1.5 text-sm text-gray-700 dark:text-primary-100">Li, e aceito os <a href="/termos" class="font-semibold text-secondary-600 hover:text-secondary-500 dark:text-primary-500 dark:hover:text-primary-200 hover:underline text-pretty"> Termos de Adesão</a> da GENTE.</p>
              </label>
  
              <label class="flex items-center space-x-2">
                <input class="checkbox" type="checkbox" id="newsletter" name="newsletter" aria-label="newsletter" value="Sim" />
                <p class="py-1.5 text-sm text-gray-700 dark:text-primary-100">Quero receber os materiais da GENTE.</p>
              </label>
              
            </div>
          </div>
        </div>
  
  
        <div class="py-4">
          <button type="submit" on:click={() => (submitted = true)} class="flex w-full justify-center rounded-md bg-secondary-600 px-3 py-3 text-sm/6 font-semibold text-white dark:text-primary-800 shadow-xs hover:bg-secondary-500 dark:bg-primary-500 dark:hover:bg-primary-600 dark:hover:dark:text-primary-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600">Enviar</button>
        </div>
      </form>
      {/if}
  
      <p class="mt-10 text-center text-sm/6 text-gray-500 dark:text-gray-200">
        Precisa de ajuda?
        <a href="/" class="font-semibold text-secondary-600 hover:text-secondary-500 dark:text-primary-500 dark:hover:text-primary-200 hover:underline">Fale com a GENTE.</a>
      </p>
    </div>
  </div>