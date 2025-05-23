<script>
	import LogoHz from './LogoHz.svelte';
	import Social from './Social.svelte';
</script>

<footer class="bg-[#ebde93] dark:bg-primary-900 p-4">
    <div class="mx-auto max-w-screen-xl space-y-8 px-4 py-8 sm:px-6 lg:space-y-16 lg:px-8 lg:py-8">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
            <div class="lg:-ml-3"><LogoHz green lType="w-[12em]" /></div>
            <!-- <p class="mt-4 mx-auto lg:mx-0 max-w-x text-xs text-secondary-800 dark:text-primary-200 text-center lg:text-left">
            Sítio 20 pés • Bairro do Rosário<br/>Delfim Moreira, MG • CEP 37514000
            </p> -->

        </div>

        <Social />
  
      </div>
  
      <div class="mb-0 pb-0 mx-auto w-[30ch] md:w-full">
          <p class="text-xs text-secondary-800 dark:text-primary-200 text-pretty text-center">
            Associação GENTE da Serra da Mantiqueira. CNPJ: 51.508.002/0001-27
          </p>
          <p class="mt-2 md:mt-0 text-xs text-secondary-800 dark:text-primary-200 text-pretty text-center">&copy; 2025 - Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>