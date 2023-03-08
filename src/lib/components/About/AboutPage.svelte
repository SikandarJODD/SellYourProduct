<script>
  import { aboutInfo } from "../../../store";
  let abtData = $aboutInfo[1];
  let aboutPageTitle = "About us";
  let aboutPageText =
    "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.";

  let aboutPgData = [
    "This is a section of some simple filler text",
    "Also known as placeholder text",
    "It shares some characteristics of a real written text",
  ];
</script>

<div class="bg-[#14213d] py-6 sm:py-8 lg:py-12 border-t-2 ">
  <div class="max-w-screen-md px-4 md:px-8 mx-auto">
    <h1
      class="text-slate-200 text-2xl sm:text-5xl font-bold text-center mb-4 md:mb-6"
    >
      {abtData.title}
    </h1>

    <p class="text-slate-300 sm:text-lg mb-6 md:mb-8">
      {abtData.subtext}
    </p>

    <ul class="list-disc list-inside text-sky-500 sm:text-lg mb-6 md:mb-8">
      {#each abtData.liData as item}
        <li>{item}</li>
      {/each}
    </ul>

    <blockquote
      class="text-slate-300 sm:text-lg italic border-l-4 pl-4 md:pl-6 mb-6 md:mb-8"
    >
      “{abtData.quote}”
    </blockquote>

    <div
      class="bg-gray-100 overflow-hidden rounded-lg shadow-lg relative mb-6 md:mb-8"
    >
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img
        src={abtData.abtImg}
        alt="Photo by Minh Pham"
        class="w-full h-full object-cover object-center"
      />
    </div>
  </div>
</div>
