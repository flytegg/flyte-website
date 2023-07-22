<script>
    import "../app.css";
    import Navbar from "$lib/Navbar.svelte";
    import Hero from "$lib/Hero.svelte";
    import LatestProject from "$lib/LatestProject.svelte";
</script>

<div class="flex flex-col mx-52">
    <Navbar />
    <Hero />
    <LatestProject />
    <slot />
</div>