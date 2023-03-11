<script>
  import { onMount } from "svelte";
  import supabase from "$lib/db.js";

  $: backData = [];
  onMount(async () => {
    let { data, error } = await supabase.from("pdet").select("*");
    backData = data;
    console.log(backData);
  });
  // .env
  // .env.*
  // !.env.example
  // Products Details including
  // - Product Name
  // - Product Image
  // - Product Price
  // - Product Description
  // - Author Name
  // - Author Image - if possible And  Info Like : Social Icons, Email, Phone Number, Address, Contact Stuff
  let productData = {
    name: "",
    image: "",
    price: "",
    description: "",
    authorName: "",
    authorEmail: "",
    authorPhone: "",
    productQuantity: 1,
  };
  let handleForm = async () => {
    const { data, error } = await supabase.from("pdet").insert([productData]);
    productData.name = "";
    productData.image = "";
    productData.price = "";
    productData.description = "";
    productData.authorName = "";
    productData.authorEmail = "";
    productData.authorPhone = "";
    productData.productQuantity = 1;
  };
  $: fifu = "";
  $: if (productData.price.length > 3) {
    let mint = productData.price.split("");
    let mintlen = mint.length;
    mint.splice(mintlen - 3, 0, ",");
    fifu = mint.join("");
  }
  $: if (productData.price.length >= 6) {
    let mint = productData.price.split("");
    let mintlen = mint.length;
    mint.splice(mintlen - 3, 0, ",");
    mint.splice(mintlen - 5, 0, ",");
    fifu = mint.join("");
  }
  $: if (productData.productQuantity > 5) {
    productData.productQuantity = 5;
  }
  $: if (productData.authorPhone.length > 10) {
    productData.authorPhone = productData.authorPhone.slice(0, 10);
    alert("Phone Number Should be 10 Digits");
  }
</script>

<main>
  <section class="bg-gray-100">
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-3">
      <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
        <div class="lg:col-span-2 lg:py-3">
          <!-- product - start -->
          <div>
            <h2
              class="text-center md:text-left text-2xl font-bold text-gray-800 relative bottom-5"
            >
              Mobile View :
            </h2>
          </div>
          <div>
            <a
              href="/"
              class="group relative mb-2 block h-[460px]  overflow-hidden rounded-lg bg-gray-100 lg:mb-3  shadow-md border-2 border-sky-500 shadow-sky-400"
            >
              <!-- svelte-ignore a11y-img-redundant-alt -->
              <img
                src={productData.image === ""
                  ? "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&q=75&fit=crop&w=600"
                  : productData.image}
                loading="lazy"
                alt="Photo by Galina N"
                class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>

            <div>
              <a
                href="/"
                class="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg"
                >{productData.name === "" ? "Fancy Plant" : productData.name}</a
              >

              <div class="flex items-end gap-2">
                <span class="font-bold text-gray-800 lg:text-lg"
                  >Rs.
                  {#if productData.price.length == ""}
                    2500
                  {:else if productData.price > 3}
                    {fifu}
                  {:else}
                    {productData.price}
                  {/if}
                  /-</span
                >
              </div>
            </div>
          </div>
          <!-- product - end -->
        </div>

        <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
          <form on:submit|preventDefault={handleForm} class="space-y-4">
            <div>
              <label class=" text-black font-medium mb-2" for="name"
                >Product Title :
                <input
                  required
                  class=" rounded-lg border-gray-200 p-3 text-sm focus:text-sky-500"
                  placeholder="Drone, Camera, Book, etc."
                  type="text"
                  id="name"
                  bind:value={productData.name}
                />
              </label>
            </div>
            <div>
              <label class=" text-black font-medium mb-2" for="productPrice"
                >Product Price :
                <input
                  required
                  class=" rounded-lg border-gray-200 p-3 text-sm focus:text-sky-500"
                  placeholder="2500 /- "
                  type="text"
                  id="productPrice"
                  bind:value={productData.price}
                />
              </label>
            </div>
            <div>
              <label class=" text-black font-medium mb-2" for="productImage"
                >Product Image :
                <input
                  required
                  class=" rounded-lg border-gray-200 p-3 text-sm focus:text-sky-500"
                  placeholder="Image Url"
                  type="url"
                  id="productImage"
                  bind:value={productData.image}
                />
              </label>
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label class="sr-only" for="authorName">Author Name</label>
                <input
                  required
                  class="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Author Name"
                  type="text"
                  name="name"
                  id="authorName"
                  bind:value={productData.authorName}
                />
              </div>

              <div>
                <label class="sr-only" for="phone">Phone</label>
                <input
                  class="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Phone Number"
                  type="tel"
                  id="phone"
                  bind:value={productData.authorPhone}
                />
              </div>
            </div>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label class="sr-only" for="email">Email</label>
                <input
                  class="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Email address"
                  type="email"
                  id="email"
                  bind:value={productData.authorEmail}
                />
              </div>
            </div>

            <div>
              <label class="sr-only" for="message">Message</label>

              <textarea
                class="w-full rounded-lg border-gray-200 p-3 text-sm focus:text-sky-500 font-medium"
                placeholder="Product Description"
                rows="4"
                id="message"
                bind:value={productData.description}
              />
            </div>

            <div class="mt-8 flex gap-4">
              <div>
                <label for="quantity" class="mr-4">Product Quantity</label>

                <input
                  bind:value={productData.productQuantity}
                  type="number"
                  id="quantity"
                  min="1"
                  max="6"
                  class="w-12 rounded border-2 border-slate-900  py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                />
              </div>
            </div>
            <div class="mt-4">
              <button
                type="submit"
                class="inline-block w-full rounded-lg bg-green-500 hover:bg-green-100 border-2 hover:border-slate-900 px-5 py-3 font-medium text-white hover:text-green-500 transition-all duration-200 hover:scale-105 sm:w-auto"
              >
                Uplaod Project
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <section class="md:px-32">
    <h2 class="text-center md:text-left text-2xl font-bold text-gray-800 ">
      Laptop View :
    </h2>
  </section>
  <section>
    <div class="relative mx-auto max-w-screen-xl px-4 py-8">
      <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
        <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
          <img
            alt="Les Paul"
            src={productData.image === ""
              ? "https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              : productData.image}
            class="aspect-square w-full rounded-xl object-cover"
          />

          <div class="grid grid-cols-2 gap-4 lg:mt-4">
            <img
              alt="Les Paul"
              src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              class="aspect-square w-full rounded-xl object-cover"
            />

            <img
              alt="Les Paul"
              src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              class="aspect-square w-full rounded-xl object-cover"
            />

            <img
              alt="Les Paul"
              src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              class="aspect-square w-full rounded-xl object-cover"
            />

            <img
              alt="Les Paul"
              src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              class="aspect-square w-full rounded-xl object-cover"
            />
          </div>
        </div>

        <div class="sticky top-3">
          <div class="mt-8 flex justify-between">
            <div class="max-w-[35ch] space-y-2">
              <h1 class="text-xl font-bold sm:text-2xl">
                {productData.name === ""
                  ? "Fun Product That Does Something Cool"
                  : productData.name}
              </h1>

              <p class="text-sm">Highest Rated Product</p>
              <div class="my-4">
                <strong
                  class="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600 "
                >
                  Pre Order
                </strong>
              </div>
              <div class="-ml-0.5 flex">
                <svg
                  class="h-5 w-5 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>

                <svg
                  class="h-5 w-5 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>

                <svg
                  class="h-5 w-5 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>

                <svg
                  class="h-5 w-5 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>

                <svg
                  class="h-5 w-5 text-gray-200"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
            </div>

            <p class="text-lg font-bold">
              Rs.
              {#if productData.price.length == ""}
                2500
              {:else if productData.price > 3}
                {fifu}
              {:else}
                {productData.price}
              {/if}
            </p>
          </div>

          <div class="mt-4">
            <div class="prose max-w-none">
              <p>
                {#if productData.description.length == ""}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, quae. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Voluptates, quae.
                {:else}
                  {productData.description}
                {/if}
              </p>
            </div>
          </div>

          <form class="mt-8">
            <fieldset>
              <legend class="mb-1 text-sm font-medium">Color</legend>

              <div class="flex flex-wrap gap-1">
                <label for="color_tt" class="cursor-pointer">
                  <input
                    type="radio"
                    name="color"
                    id="color_tt"
                    class="peer sr-only"
                  />

                  <span
                    class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                  >
                    Texas Tea
                  </span>
                </label>

                <label for="color_fr" class="cursor-pointer">
                  <input
                    type="radio"
                    name="color"
                    id="color_fr"
                    class="peer sr-only"
                  />

                  <span
                    class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                  >
                    Fiesta Red
                  </span>
                </label>

                <label for="color_cb" class="cursor-pointer">
                  <input
                    type="radio"
                    name="color"
                    id="color_cb"
                    class="peer sr-only"
                  />

                  <span
                    class="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                  >
                    Cobalt Blue
                  </span>
                </label>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </section>
</main>
