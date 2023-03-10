<script>
  import { mainPageData } from "./../../store.js";
  let pgdata = $mainPageData[1];
  let imgData = [
    "https://img.freepik.com/free-vector/gumshoes-sketch-grunge_98292-4630.jpg?w=740&t=st=1678423958~exp=1678424558~hmac=62ab7985678cbff246c9ba61c771e5da96ded17206af0210b4fd46f203aa0f45",
    "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  let i = 0;
  let interval = setInterval(() => {
    i++;
    if (i == imgData.length) {
      i = 0;
    }
  }, 3000);
</script>

<div class="bg-white pb-6 sm:pb-8 lg:pb-12 md:px-24">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <section
      class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row"
    >
      <!-- content - start -->
      <div
        class="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24"
      >
        <h1
          class="text-black-800 mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl"
        >
          Sell Your Products
        </h1>

        <p
          class="hidden md:flex mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg"
        >
          This is a section of some simple filler text, also known as
          placeholder text. It shares some characteristics of a real written
          text but is random.
        </p>

        <div
          class="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start"
        >
          <a
            href="/upload"
            class="inline-block rounded-lg bg-sky-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-sky-600 focus-visible:ring active:bg-indigo-700 md:text-base"
            >Upload Product
          </a>

          <a
            href="/products"
            class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-200 hover:bg-cyan-200 focus-visible:ring active:text-gray-700 md:text-base hover:text-cyan-800 hover:border-2 hover:border-slate-900 border-2"
            >Buy Now</a
          >
        </div>
      </div>
      <!-- content - end -->

      <!-- image - start -->
      <div
        class="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12"
      >
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img
          src={imgData[i]}
          loading="lazy"
          alt="Photo by Fakurian Design"
          class="h-full w-full object-cover object-center"
        />
      </div>
      <!-- image - end -->
    </section>
  </div>
</div>
<!-- <section class="bg-gray-900 text-white">
  <div
    class="mx-auto max-w-screen-xl px-4 py-5 md:py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div class="mx-auto max-w-3xl text-center">
      <h1
        class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl"
      >
        {pgdata.title}

        <span class=" hidden sm:block  "> {pgdata.subtitle} </span>
      </h1>

      <p class="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
        {pgdata.subtext}
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <a
          class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="/products"
        >
          {pgdata.btn1}
        </a>

        <a
          class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="/about"
        >
          {pgdata.btn2}
        </a>
      </div>
    </div>
  </div>
</section> -->
