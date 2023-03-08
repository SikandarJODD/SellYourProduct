<script>
  import { aboutInfo } from "../../../store";
  let abtData = $aboutInfo[2];
</script>

<div class="bg-[#14213d] py-6 sm:py-8 lg:py-12 border-t-2">
  <div class="max-w-screen-lg px-4 md:px-8 mx-auto">
    <!-- text - start -->
    <div class="mb-8 md:mb-12">
      <h2
        class="text-slate-200 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6"
      >
        {abtData.title}
      </h2>

      <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
        {abtData.subtext}
      </p>
    </div>
    <!-- text - end -->

    <div
      class="grid grid-cols-2 md:grid-cols-4 bg-indigo-500 rounded-lg gap-6 md:gap-8 p-6 md:p-8"
    >
      {#each abtData.stats as item}
        <!-- stat - start -->
        <div class="flex flex-col items-center">
          <div class="text-white text-xl sm:text-2xl md:text-3xl font-bold">
            {item.title}
          </div>
          <div class="text-indigo-200 text-sm sm:text-base">{item.text}</div>
        </div>
        <!-- stat - end -->
      {/each}
    </div>
  </div>
</div>
