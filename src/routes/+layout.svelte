<script>
  import { page } from "$app/stores";
  $: RouteId = $page.route.id;
  // $: console.log(RouteId);
  import "../app.css";
  import Logo from "$lib/logo.png";
  let data = {
    imgSrc: Logo,
    title: "Funky Tunky",
    navs: [
      {
        nv: "Home",
        link: "/",
      },
      {
        nv: "Products",
        link: "/products",
      },
      {
        nv: "About Us",
        link: "/about",
      },
    ],
  };
</script>

<!-- You Can Add bg-base-100 or bg-gray-900 border-b-2 border-slate-200 -->
<div
  class="navbar  bg-gray-900 border-b-2 border-slate-400 hidden md:flex "
  id="nav_height"
>
  <div class="navbar-start ">
    <div class="dropdown">
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          /></svg
        >
      </label>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <ul
        tabindex="0"
        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <!-- Phone -->
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/about">About Us</a></li>
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl" href="/">
      <img src={data.imgSrc} width="45" alt="" />
      <span class="px-2 text-2xl text-sky-500 font-bold">{data.title}</span></a
    >
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <!-- Laptop -->
      {#each data.navs as nav}
        <li>
          <a href={nav.link} class="mx-1" class:act={RouteId == nav.link}
            >{nav.nv}</a
          >
        </li>
      {/each}
    </ul>
  </div>
</div>
<!-- Bottom Navigation for Phone -->
<div class="btm-nav md:hidden">
  <a href="/" class={RouteId === "/" ? "text-info active" : " "}>
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        /></svg
      >
    </button>
  </a>
  <a
    href="/products"
    class={RouteId === "/products" ? "text-info active" : " "}
  >
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        /></svg
      >
    </button>
  </a>
  <a href="/about" class={RouteId === "/about" ? "text-info active" : " "}>
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        /></svg
      >
    </button>
  </a>
</div>
<!-- <div class="box p-2 md:px-20"> -->
<slot />

<!-- </div> -->
<style lang="postcss">
  .act {
    color: rgb(17, 170, 252);
    background: #46617dc4;
  }
  #nav_height {
    min-height: 60px;
    height: 60px !important;
  }
</style>
