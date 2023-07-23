<script>
import Navbar from "$lib/Navbar.svelte";
import Projects from "$lib/Projects.svelte";
</script>

<section class="bg-[#0d0b0d]">
    <div class="w-[90%] sm:w-[85%] md:w-[65%] mx-auto pb-20">
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
                <h2 class="text-[#b6b5b6] pt-1">crew</h2>
            </div>
        </div>
    </div>
</section>

<section class="bg-[#121012]">
    <div class="w-[90%] sm:w-[85%] md:w-[65%] mx-auto py-24">
        <h1 class="text-white text-5xl">Latest projects</h1>
        <div class="grid grid-cols-2 gap-20 mt-8">
            <Projects path="/projects/ls-thread.png" alt="LearnSpigot Thread" title="LearnSpigot" description="Web Design, Digital Course"/>
            <Projects path="/projects/mcu-thread.png" alt="MCUtils Thread" title="MCUtils" description="Web Design, Web Development"/>
            <Projects path="/projects/pluginp-thread.png" alt="PluginPortal Thread" title="PluginPortal" description="Software Development"/>
            <Projects path="/projects/galamo-thread.png" alt="Galamo Thread" title="Galamo" description="Competitive Esports, Web Design"/>
        </div>
    </div>
</section>

<section class="bg-[#0D0B0D]">
    <div class="w-[90%] sm:w-[85%] md:w-[65%] mx-auto pb-20">
        <div class="flex flex-col font-medium gap-6 mt-6 pt-28 w-[50%]">
            <h1 class="text-white text-6xl font-normal">Need a .gg domain?</h1>
            <h2 class="text-[#b6b5b6] text-2xl">We also sell .je, .co.gg, .net.gg, .org.gg, .co.je, .net.je, .org.je</h2>
        </div>
        <div class="pt-10 text-[#b6b5b6]">
            <input type="text" id="domain_input"
                   class="bg-[#0D0B0D] border border-gray-300 rounded-md text-2xl py-5 px-6 pr-72"
                   placeholder="Find your online identity.."
                   maxlength="63" required>
            <h3 class="pt-2">* Flyte is an official Channel Islands registrar (not a reseller) so prices can be kept as low as possible.</h3>
        </div>
    </div>
</section>




