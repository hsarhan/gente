<script>
	import LightSwitch from './LightSwitch.svelte';
	  import LogoHz from './LogoHz.svelte';
    let showMenu = $state(false);
  
    function toggleNavbar() {
      showMenu = !showMenu;
    }
  </script>
  
  <div>
    <div class="bg-secondary-900">
      <nav
        class="w-full max-w-screen-xl min-h-24 p-4 mx-auto md:flex md:justify-between md:items-center"
      >
        <div class="flex items-center justify-between">
          <a href="/" aria-label="home"><div class="items-center ml-0 mt-1 xl:m-0"><LogoHz lSize="w-[3.2em]" /></div></a>
          <!-- Mobile menu button -->
          <div class="flex md:hidden" aria-label="mobile-menu">
            <button
              onclick={toggleNavbar} 
              aria-label="menu-toggle"
              type="button"
              class="text-gray-100 hover:text-primary-400 focus:outline-none focus:text-primary-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
  
        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div
          class="uppercase text-center md:text-left flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-6 lg:space-x-10 md:mt-0 {showMenu
            ? 'flex'
            : 'hidden'}"
        >
          <a class="text-gray-100 hover:text-primary-400" href="/" aria-label="home">Home</a>
          <!-- <a class="text-gray-100 hover:text-primary-400" href="/contato" aria-label="contato">Contato</a> -->
          <div class="space-y-2">
            <!-- <a
              aria-label="login"
              href="/login"
              title="Login"
              class="py-3 px-4 text-center border text-gray-800 bg-white hover:text-secondary-600 rounded-md block md:inline lg:border-0"
            >
              Login
            </a> -->
            <a
              aria-label="signup"
              href="/signup"
              title="Faça parte"
              class="py-3 px-4 text-center text-primary-900 bg-primary-500 hover:bg-primary-300 rounded-md shadow block md:inline"
            >
              Faça Parte
            </a>
          </div>
          <div class="hidden lg:block">
            <LightSwitch />
          </div>
        </div>
      </nav>
    </div>
  </div>
  
  
  