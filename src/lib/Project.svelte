<script lang="ts">
    export let path;
    export let alt;
    export let title;
    export let description;
</script>

<div class="w-full h-full">
    <div class="w-fit h-full">
        <img src="{path}" alt="{alt}" class="rounded-t-[22px]">
        <div class="bg-[#181618] p-6 rounded-b-[22px] h-fit ">
            <h2 class="text-[#b6b5b6] text-md pb-2">{description}</h2>
            <a href="/#">
                <div class="group flex items-center">
                    <a class="flex gap-2 items-center group">
                        <p class="link font-medium text-[27px] text-white">{title}</p>
                        <svg class="w-9 h-9 link opacity-0 group-hover:opacity-100" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 37 49">
                            <path d="M31.6062 9.1875C32.8877 9.1875 33.9187 10.2115 33.9187 11.4844V34.4531C33.9187 35.726 32.8877 36.75 31.6062 36.75C30.3246 36.75 29.2937 35.726 29.2937 34.4531V17.0256L7.03584 39.1426C6.13012 40.0422 4.66553 40.0422 3.76944 39.1426C2.87334 38.243 2.86371 36.7883 3.76944 35.8982L26.0272 13.7908H8.48116C7.19965 13.7908 6.16866 12.7668 6.16866 11.4939C6.16866 10.2211 7.19965 9.19707 8.48116 9.19707H31.6062V9.1875Z" class="text-white"/>
                        </svg>
                    </a>
                </div>
            </a>
        </div>
    </div>
</div>
