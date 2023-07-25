<svelte:head>
    <title>Flyte</title>
</svelte:head>

<script>
    import Navbar from "$lib/Navbar.svelte";
    import Project from "$lib/Project.svelte";
    import OSTool from "$lib/OSTool.svelte";
    import Footer from "$lib/Footer.svelte";
    import Carousel from 'svelte-carousel'
    import { browser } from '$app/environment'
</script>

<section class="bg-[#0d0b0d] relative">
    <img src="/misc/blur.svg" alt="Blur" class="absolute top-0 w-[70%] z-30">
    <img src="/misc/wireframe-logo.svg" alt="Blur" class="hidden lg:block absolute right-16 top-[-230px] w-[800px] z-0">
    <div class="w-[90%] mx-auto">
        <Navbar />
    </div>
    <div class="w-[90%] 2xl:w-[70%] mx-auto pb-20">
        <div class="flex flex-col font-medium gap-6 w-[100%] md:w-[50%] 3xl:bg-white">
            <h1 class="text-white text-5xl">We give power to<br>the freelancers</h1>
            <h2 class="text-[#b6b5b6] text-2xl">Flyte is a talented team of engineers and designers who specialize in bringing exciting projects from concept to launch using new technologies and innovative practises. </h2>
        </div>
        <div class="flex flex-row gap-5 sm:gap-20 pt-14">
            <div>
                <h1 class="text-white font-semibold text-4xl">13k+</h1>
                <h2 class="text-[#b6b5b6] pt-1">customers</h2>
            </div>
            <div>
                <h1 class="text-white font-semibold text-4xl">10+</h1>
                <h2 class="text-[#b6b5b6] pt-1">projects</h2>
            </div>
            <div>
                <h1 class="text-white font-semibold text-4xl">19</h1>
                <h2 class="text-[#b6b5b6] pt-1">team members</h2>
            </div>
        </div>
    </div>
</section>

<section class="bg-[#121012] z-20 relative" id="portfolio">
    <div class="w-[90%] 2xl:w-[70%] mx-auto pt-20 pb-14">
        <h1 class="text-white text-5xl text-[45px]">Our latest projects</h1>
    </div>
    {#if browser}
        <Carousel
                arrows="false"
                particlesToShow={4}
                particlesToScroll={2}>
            <Project path="/projects/learnspigot.svg" alt="LearnSpigot Thread" title="LearnSpigot" description="Digital Course"/>
            <Project path="/projects/mc-utils.svg" alt="MCUtils Thread" title="MC Utils" description="Development Tools"/>
            <Project path="/projects/plugin-portal.svg" alt="PluginPortal Thread" title="Plugin Portal" description="Consumer Software"/>
            <Project path="/projects/flyte-domains.svg" alt="Flyte Domains" title="Flyte Domains" description="Domain Registrar"/>
            <Project path="/projects/galamo.svg" alt="MC License Thread" title="Galamo" description="Esports Team"/>
            <Project path="/projects/mc-license.svg" alt="MC Thread" title="MC License" description="Development Tools"/>
            <Project path="/projects/the-crafting-times.svg" alt="The Crafting Times" title="Crafting Times" description="Media Outlet"/>
            <Project path="/projects/rcl.svg" alt="Galamo Thread" title="RCL" description="Competitive Esports Events"/>
        </Carousel>
    {/if}
    <div class="w-[90%] 2xl:w-[70%] mx-auto pb-20 flex flex-col gap-3">
        <h2 class="text-white text-[30px] mt-16">Want to work with us?</h2>
        <div>
            <p class="gap-4 text-[#b8b7b8] text-[26px] break-after-all">Reach out to us at <a class="link text-white" href="mailto:hello@flyte.gg">hello@flyte.gg</a> if you have an idea that we can help execute.</p>
        </div>
    </div>
</section>

<section class="bg-[#0D0B0D]">
    <div class="w-[90%] 2xl:w-[70%] mx-auto">
        <div class="flex flex-wrap items-center py-10 gap-10">
            <div class="flex flex-col font-medium gap-6 w-[100%] lg:w-[50%]">
                <h1 class="text-white text-5xl text-[45px]">Need a .gg domain?</h1>
                <h2 class="text-[#b6b5b6] text-2xl">We'll soon start offering .gg domains, as well as .je, .co.gg, .net.gg, .org.gg, .co.je, .net.je and .org.je.</h2>
                <p class="link font-medium text-[30px] text-white">Coming Soon</p>
                <!--                    <a href="/domains" class="flex gap-2 items-center group w-fit">-->
                <!--                        <p href="/domains" class="link font-medium text-[30px] text-white">See more</p>-->
                <!--                        <svg class="w-9 h-9 link" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 37 49">-->
                <!--                            <path d="M31.6062 9.1875C32.8877 9.1875 33.9187 10.2115 33.9187 11.4844V34.4531C33.9187 35.726 32.8877 36.75 31.6062 36.75C30.3246 36.75 29.2937 35.726 29.2937 34.4531V17.0256L7.03584 39.1426C6.13012 40.0422 4.66553 40.0422 3.76944 39.1426C2.87334 38.243 2.86371 36.7883 3.76944 35.8982L26.0272 13.7908H8.48116C7.19965 13.7908 6.16866 12.7668 6.16866 11.4939C6.16866 10.2211 7.19965 9.19707 8.48116 9.19707H31.6062V9.1875Z" class="text-white"/>-->
                <!--                        </svg>-->
                <!--                    </a>-->
            </div>
            <div class="text-white">
                <img src="/misc/domain.svg" alt="Domains Page Screenshot" class="w-[600px] h-fit rounded-2xl">
            </div>
        </div>

<!--        <div class="flex flex-col font-medium gap-6 w-[100%] lg:w-[50%]">-->
<!--            <h1 class="text-white text-6xl">Need a .gg domain?</h1>-->
<!--            <h2 class="text-[#b6b5b6] text-2xl">We also sell .je, .co.gg, .net.gg, .org.gg, .co.je, .net.je, .org.je</h2>-->
<!--        </div>-->
<!--        <div class="pt-10 text-[#b6b5b6]">-->
<!--            <input type="text" id="domain_input"-->
<!--                   class="primary-input p-4 mb-2 w-full lg:w-[50%]"-->
<!--                   placeholder="Find your online identity.."-->
<!--                   maxlength="63" required>-->
<!--            <h3 class="pt-2">* Flyte is an official Channel Islands registrar (not a reseller) so prices can be kept as low as possible.</h3>-->
<!--        </div>-->
    </div>
</section>

<section class="bg-[#121012]">
    <div class="w-[90%] 2xl:w-[70%] mx-auto py-20">
        <h1 class="text-white text-5xl text-[45px]">Open source tools</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-20 mt-16">
            <OSTool image="twilight" title="Twilight" description="A feature-packed API for Spigot/Paper Minecraft servers providing essential utilities to streamline development." githubPath="twilight"/>
            <OSTool image="neptune" title="Neptune" description="An annotation-based slash command framework for Discord bots using JDA." githubPath="neptune"/>
            <OSTool image="hangar-wrapper" title="Hangar API Wrapper" description="A Java/Kotlin wrapper for PaperMC's Hangar API." githubPath="hangar-wrapper"/>
            <OSTool image="plugin-template" title="Plugin Template" description="Template Minecraft plugin using Kotlin, Gradle and Paper." githubPath="kotlin-paper-plugin-template"/>
        </div>
        <div class="flex flex-col mt-20">
            <p class="text-[#b8b7b8] text-2xl break-after-all">That's just some of our favourite tools. See our <a href="https://github.com/flytegg" target="_blank" class="text-white link">GitHub</a> for more FOSS projects!</p>
        </div>
    </div>
</section>

<section class="bg-[#0d0b0d]">
    <div class="w-[90%] mx-auto">
        <Footer />
    </div>
</section>
