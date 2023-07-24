<script>
import Navbar from "$lib/Navbar.svelte";
import Project from "$lib/Project.svelte";
import OSTool from "$lib/OSTool.svelte";
import Footer from "$lib/Footer.svelte";
</script>

<section class="bg-[#0d0b0d] relative">
    <div class="w-[90%] 2xl:w-[65%] mx-auto pb-20">
        <Navbar />
        <div class="flex flex-col font-medium gap-6 mt-6 w-[50%]">
            <h1 class="text-white text-7xl">Some inspiring<br>words go here</h1>
            <h2 class="text-[#b6b5b6] text-xl">If you have an idea, project or product, reach out to us!If you have an idea, project or product.!If you have an idea, project or product.</h2>
        </div>
        <div class="flex flex-row space-x-20 pt-14">
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

<section class="bg-[#121012]" id="portfolio">
    <div class="w-[90%] 2xl:w-[65%] mx-auto py-20">
        <h1 class="text-white text-6xl">Latest projects</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-10 mt-16">
            <Project path="/projects/learnspigot.svg" alt="LearnSpigot Thread" title="LearnSpigot" description="Web Design, Digital Course"/>
            <Project path="/projects/mc-utils.svg" alt="MCUtils Thread" title="MC Utils" description="Web Design, Web Development"/>
            <Project path="/projects/plugin-portal.svg" alt="PluginPortal Thread" title="Plugin Portal" description="Software Development"/>
            <Project path="/projects/flyte-domains.svg" alt="Flyte Domains" title="Flyte Domains" description="Web Design, Digital Course"/>
            <Project path="/projects/galamo.svg" alt="MC License Thread" title="Galamo" description="Competitive Esports, Web Design"/>
            <Project path="/projects/mc-license.svg" alt="MC Thread" title="MC License" description="Web Design, Web Development"/>
            <Project path="/projects/the-crafting-times.svg" alt="The Crafting Times" title="Crafting Times" description="Software Development"/>
            <Project path="/projects/rcl.svg" alt="Galamo Thread" title="RCL" description="Competitive Esports, Web Design"/>
        </div>
        <h2 class="text-white text-4xl mt-16">Want to work with us?</h2>
        <div>
            <p class="gap-4 text-[#b8b7b8] text-3xl break-after-all">Reach out to us at <a class="link text-white" href="mailto:hello@flyte.gg">hello@flyte.gg</a> if you have an idea that we can help execute.</p>
        </div>
    </div>
</section>

<section class="bg-[#0D0B0D] py-20">
    <div class="w-[90%] 2xl:w-[65%] mx-auto">
                <div class="flex flex-col font-medium gap-6 w-[100%] lg:w-[50%]">
                    <h1 class="text-white text-6xl">Need a .gg domain?</h1>
                    <h2 class="text-[#b6b5b6] text-2xl">We’re about to start selling .gg domains, as well as .je, .co.gg, .net.gg, .org.gg, .co.je, .net.je and .org.je.</h2>
                    <a>
                        <p>See more</p>

                    </a>
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
    <div class="w-[90%] 2xl:w-[65%] mx-auto py-20">
        <h1 class="text-white text-6xl">Open source tools</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
            <OSTool image="twilight" title="Twilight" description="A feature-packed API for Spigot/Paper Minecraft servers providing essential utilities to streamline development." githubPath="twilight"/>
            <OSTool image="neptune" title="Neptune" description="An annotation-based slash command framework for JDA." githubPath="neptune"/>
            <OSTool image="hangar-wrapper" title="Hangar API Wrapper" description="A Java/Kotlin wrapper for PaperMC's Hangar API." githubPath="hangar-wrapper"/>
            <OSTool image="plugin-template" title="Plugin Template" description="Template Minecraft plugin using Kotlin, Gradle and Paper." githubPath="kotlin-paper-plugin-template"/>
        </div>
        <div class="flex flex-col mt-20">
            <p class="flex gap-4 text-[#b8b7b8] text-3xl break-after-all">That's just some of our favourite tools. See our <a href="https://github.com/flytegg" target="_blank" class="text-white link">GitHub</a> for more FOSS projects!</p>
        </div>
    </div>
</section>

<section class="bg-[#0d0b0d]">
    <div class="w-[90%] 2xl:w-[65%] mx-auto">
        <Footer />
    </div>
</section>
