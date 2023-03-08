<script>
  import { mainPageData } from "./../store";
  import FeaturesPage from "$lib/components/FeaturesPage.svelte";
  import ImgGallery from "$lib/components/ImgGallery.svelte";
  import PageHero from "$lib/components/PageHero.svelte";
  import PageProd from "$lib/components/PageProd.svelte";
  import PageStats from "$lib/components/PageStats.svelte";

  let metaTitle = $mainPageData[0].metaTitle || "Happiness is Illusion";
</script>

<svelte:head>
  <title>{metaTitle}</title>
</svelte:head>
<main>
  <PageHero />
  <PageProd />
  <ImgGallery />
  <FeaturesPage />
  <PageStats />
</main>
