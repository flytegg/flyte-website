<script lang="ts">
    export let path;
    export let alt;
    export let title;
    export let description;
</script>

<div class="w-full">
    <div class="w-fit">
        <img src="{path}" alt="{alt}" class="rounded-t-[22px]">
        <div class="bg-[#181618] p-6 rounded-b-[22px] ">
            <h2 class="text-[#b6b5b6] text-md pb-2">{description}</h2>
            <a href="/#">
                <div class="group flex items-center">
                    <h1 class="text-white text-4xl transition-colors duration-200 group-hover:text-[#F37BDA]">{title}</h1>
                    <img src="/projects/arrow-up.png" alt="Arrow" class="h-6 w-6 ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-175">
                </div>
            </a>
        </div>
    </div>
</div>
