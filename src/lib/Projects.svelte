<script lang="ts">
    export let path;
    export let alt;
    export let title;
    export let description;
</script>

<div class="w-full">
    <img src="{path}" alt="{alt}">
    <div class="pt-10">
        <h2 class="text-[#b6b5b6] text-md pb-3">{description}</h2>
        <a href="/#">
            <div class="group flex items-center">
                <h1 class="text-white text-4xl transition-colors duration-200 group-hover:text-[#F37BDA]">{title}</h1>
                <img src="/projects/arrow-up.png" alt="Arrow" class="h-6 w-6 ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-175">
            </div>
        </a>
    </div>
</div>
