<script lang="ts">
    export let path;
    export let alt;
    export let title;
    export let description;
    export let link;
    export let comingSoon = false//
</script>

{#if link}
    <a target="_blank" href="{link ? link : ''}" class="w-fit h-full">
        <div class="w-fit h-full">
            {#if comingSoon}
                <div class="relative">
                    <img src="{path}" alt="{alt}" class="rounded-t-[22px] w-full h-fit">
                    <p class="absolute bg-white/80 border-[1px] border-[#121012] rounded-md bottom-3 left-4 py-0.5 px-2 font-semibold text-sm text-[#121012]">Coming Soon</p>
                </div>
            {:else}
                <img src="{path}" alt="{alt}" class="rounded-t-[22px] w-full h-fit">
            {/if}
            <div class="bg-[#181618] p-4 rounded-b-[22px] h-fit ">
                <h2 class="text-[#b6b5b6] text-md pb-2">{description}</h2>
                <p class="link font-medium text-[25px] text-white">{title}</p>
            </div>
        </div>
    </a>
{:else}
    <div class="w-fit h-full">
        <div class="w-fit h-full relative">
            {#if comingSoon}
                <div class="relative">
                    <img src="{path}" alt="{alt}" class="rounded-t-[22px] w-full h-fit">
                    <p class="absolute bg-white/80 border-[1px] border-[#121012] rounded-md bottom-3 left-4 py-0.5 px-2 font-semibold text-sm text-[#121012]">Coming Soon</p>
                </div>
            {:else}
                <img src="{path}" alt="{alt}" class="rounded-t-[22px] w-full h-fit">
            {/if}
            <div class="bg-[#181618] p-4 rounded-b-[22px] h-fit ">
                <h2 class="text-[#b6b5b6] text-md pb-2">{description}</h2>
                <p class="link font-medium text-[25px] text-white hover:text-white">{title}</p>
            </div>
        </div>
    </div>
{/if}

<style>
    a:hover p.link {
        color: #F37BDA;
    }
</style>
