<script>
  let aboutStatTitle = "Our Team by the numbers";
  let aboutStatText =
    " We are a small team of passionate people who love what we do. We are always looking for new talent to join our team.";

  let aboutStatData = [
    {
      title: "200",
      text: "People",
    },
    {
      title: "500+",
      text: "People",
    },
    {
      title: "1000+",
      text: "Customers",
    },
    {
      title: "A couple",
      text: "Coffee breaks",
    },
  ];
</script>

<div class="bg-[#023047] py-6 sm:py-8 lg:py-12 border-t-2">
  <div class="max-w-screen-lg px-4 md:px-8 mx-auto">
    <!-- text - start -->
    <div class="mb-8 md:mb-12">
      <h2
        class="text-slate-200 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6"
      >
        {aboutStatTitle}
      </h2>

      <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
        {aboutStatText}
      </p>
    </div>
    <!-- text - end -->

    <div
      class="grid grid-cols-2 md:grid-cols-4 bg-indigo-500 rounded-lg gap-6 md:gap-8 p-6 md:p-8"
    >
      {#each aboutStatData as item}
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
