<script>
  import { aboutInfo } from "../../../store";
  let abtData = $aboutInfo[0];
  let abouttitle = "Revolutionary way to build the web";
  let aboutText =
    "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.";
</script>

<div class=" py-6 bg-[#003566] sm:py-8 lg:py-12 md:px-24">
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <div class="bg-slate-900 rounded-lg px-4 py-6 md:py-8 lg:py-12 shadow-md">
      <p
        class="text-indigo-500 lg:text-lg font-semibold text-center mb-2 md:mb-3"
      >
        {abtData.smltitle}
      </p>

      <h2
        class="text-slate-100 text-2xl lg:text-4xl font-bold text-center mb-4 md:mb-6"
      >
        {abtData.title}
      </h2>

      <p class="max-w-screen-md text-slate-500 md:text-lg text-center mx-auto">
        {abtData.subtitle}
      </p>
    </div>
  </div>
</div>
