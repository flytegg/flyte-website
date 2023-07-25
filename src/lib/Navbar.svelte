<script lang="ts">
    import { onMount, afterUpdate } from "svelte";

    let currentPage = "/";
    let isMenuOpen = false;

    function scrollToSection(sectionId) {
        if (currentPage === "/") {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            window.location.href = "/";
        }
    }

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    function closeMenu() {
        isMenuOpen = false;
    }

    onMount(() => {
        currentPage = window.location.pathname;
    });
</script>

<nav class="">
    <div class="flex flex-wrap items-center justify-between mx-auto pt-10 pb-14">
        <img src="/logo.png" alt="Flyte Logo" class="w-34 h-9">
        <button on:click={toggleMenu} type="button" class="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none primary-button w-fit" aria-controls="navbar-default" aria-expanded={isMenuOpen}>
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div class={isMenuOpen ? "block w-full md:w-auto" : "hidden w-full md:block md:w-auto"} id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 text-white border border-[#242426] rounded-lg md:flex-row md:space-x-12 md:mt-0 md:border-0">
<!--                <li>-->
<!--                    <a href="/domains" class="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 ">Domains</a>-->
<!--                </li>-->
                <li>
                    <button on:click={() => { scrollToSection('portfolio'); closeMenu(); }} class="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0">Portfolio</button>
                </li>
<!--                <li>-->
<!--                    <a href="/about" class="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0">About</a>-->
<!--                </li>-->
<!--                {#if isMenuOpen}-->
<!--                    <li>-->
<!--                        <a href="/signin" class="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0">Sign in</a>-->
<!--                    </li>-->
<!--                {:else}-->
<!--                    <a href="/signin">-->
<!--                        <svg class="h-6" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                            <path d="M19.9375 5.4375H23.5625C24.565 5.4375 25.375 6.24746 25.375 7.25V21.75C25.375 22.7525 24.565 23.5625 23.5625 23.5625H19.9375C18.935 23.5625 18.125 24.3725 18.125 25.375C18.125 26.3775 18.935 27.1875 19.9375 27.1875H23.5625C26.5645 27.1875 29 24.752 29 21.75V7.25C29 4.24805 26.5645 1.8125 23.5625 1.8125H19.9375C18.935 1.8125 18.125 2.62246 18.125 3.625C18.125 4.62754 18.935 5.4375 19.9375 5.4375ZM19.4051 15.7801C20.1131 15.0721 20.1131 13.9223 19.4051 13.2143L12.1551 5.96426C11.4471 5.25625 10.2973 5.25625 9.58926 5.96426C8.88125 6.67227 8.88125 7.82207 9.58926 8.53008L13.7467 12.6875H1.8125C0.809961 12.6875 0 13.4975 0 14.5C0 15.5025 0.809961 16.3125 1.8125 16.3125H13.7467L9.58926 20.4699C8.88125 21.1779 8.88125 22.3277 9.58926 23.0357C10.2973 23.7438 11.4471 23.7438 12.1551 23.0357L19.4051 15.7857V15.7801Z" fill="white"/>-->
<!--                        </svg>-->
<!--                    </a>-->
<!--                {/if}-->
            </ul>
        </div>
    </div>
</nav>
