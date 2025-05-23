<script>
    // Google Forms ID
	const formID = '1FAIpQLSfHtH_P0DlFpr9a3869fmx8iScYMNocbd4owO3EwJpEQMHDSA';
    
    let name = ""
    let email = "";
    let phone = "";
    let pacient = "";
    let diag = "";
    let message = "";
    let signup = "Aceito";
    let newsletter = "Sim";

    $: prefilledLink = `https://docs.google.com/forms/d/e/${formID}/formResponse?usp=pp_url&entry.152094609=${name}&entry.420958483=${email}&entry.1373482897=${phone}&entry.1337255097=${pacient}&entry.267753659=${diag}&entry.1289678725=${message}&entry.451961774=${signup}&entry.425085744=${newsletter}&submit=Submit`;
    
</script>

<div class="mt-10 mx-auto w-full sm:max-w-md bg-surface-50-950 p-6 rounded-lg">

    <div class="space-y-6" >

        <!-- Nome -->
        <div>
            <label for="name" class="block text-sm/6 font-medium text-gray-900 dark:text-primary-200">Seu nome</label>
            <div class="mt-2">
                <input type="text" name="name" id="name" aria-label="name" bind:value={name} required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-600 sm:text-sm/6">
            </div>
        </div>
    
        <!-- Email -->
        <div>
            <label for="email" class="block text-sm/6 font-medium text-gray-900 dark:text-primary-200">Seu email</label>
            <div class="mt-2">
                <input type="email" name="email" id="email" aria-label="email" bind:value={email} autocomplete="email" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-600 sm:text-sm/6">
            </div>
        </div>
    
        <!-- Telefone -->
        <div>
            <label for="phone" class="block text-sm/6 font-medium text-gray-900 dark:text-primary-200">Seu telefone</label>
            <div class="mt-2">
                <input type="tel" name="phone" id="phone" autocomplete="tel" aria-label="phone" bind:value={phone} required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-600 sm:text-sm/6" placeholder="ex: +55 11 987654321">
            </div>
        </div>
    
        <!-- Paciente -->
        <div>
            <label for="pacient" class="block text-sm/6 font-medium text-gray-900 dark:text-primary-200">Paciente</label>
            <div class="mt-2">
                <select required id="pacient" name="pacient" aria-label="pacient" bind:value={pacient} class="select block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-600 sm:text-sm/6">
                <optgroup>
                    <option disabled selected>Para quem é o tratamento...</option>
                    <option value="Para mim">Para mim</option>
                    <option value="Familiar">Um familiar</option>
                    <option value="Pet">Pet</option>
                </optgroup>
                </select>
            </div>
        </div>
        
        <!-- Diagnostico -->
        <div>
            <label for="diag" class="block text-sm/6 font-medium text-gray-900 dark:text-primary-200">Diagnóstico</label>
            <div class="mt-2">
                <select required id="diag" name="diag" aria-label="diag" bind:value={diag} class="select block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-600 sm:text-sm/6">
                <optgroup>
                    <option disabled selected>Selecione um diagnóstico...</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </optgroup>
                </select>
            </div>
        </div>
    
        <!-- Mensagem -->
        <div>
            <label for="tel" class="block text-sm/6 font-medium text-gray-900 dark:text-primary-200">Observações</label>
            <div class="mt-2">
                <textarea id="message" name="message" aria-label="message" bind:value={message} class="textarea block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-secondary-600 sm:text-sm/6" rows="4" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."></textarea>
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
                        <input class="checkbox" type="checkbox" id="newsletter" name="newsletter" aria-label="newsletter"  value="Sim" />
                        <p class="py-1.5 text-sm text-gray-700 dark:text-primary-100">Quero receber os materiais da GENTE.</p>
                    </label>
                </div>
            </div>
        </div>
       
    
    
        <!-- <a href="{prefilledLink}" target="_blank"><button>Submit</button></a> -->
        <div class="py-4">
            <a href="{prefilledLink}" target="_blank"><button class="flex w-full justify-center rounded-md bg-secondary-600 px-3 py-3 text-sm/6 font-semibold text-white dark:text-primary-800 shadow-xs hover:bg-secondary-500 dark:bg-primary-500 dark:hover:bg-primary-600 dark:hover:dark:text-primary-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600">Enviar</button></a>
        </div>

    </div>

</div>

<style>

</style>