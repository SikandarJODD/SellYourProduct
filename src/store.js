import { writable } from "svelte/store";

export let number = writable(0);
export let mainPageData = writable([
    {
        id: 1,
        metaTitle: "Home",
    },
    {
        // +page.svelte data
        id: 2,
        title: "Happiness is Illusi...",
        subtitle: "Endless Pain",
        subtext: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!",
        btn1: "Products",
        btn2: "About",

    },
    {
        // +page.svelte data  <PageProd />
        id: 3,
        title: "Vintage Cars",
        img1: "https://i.pinimg.com/564x/d1/44/bc/d144bca97b033bdb904bf7c313cf2c93.jpg",
        img2: "https://i.pinimg.com/564x/0a/8a/c0/0a8ac0cbaa1e69e295fb9ceb98deed99.jpg",
        btn: "View All",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas rerum quam amet provident nulla error!",
    },
    {
        // +page.svelte data  <ImgGallery />
        id: 4,
        img1: "https://i.pinimg.com/564x/d2/ce/41/d2ce415a0159b22fc40ccc26d2ba623c.jpg",
        img2: "https://images.pexels.com/photos/175712/pexels-photo-175712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img3: "https://images.pexels.com/photos/12467508/pexels-photo-12467508.jpeg",
        img4: "https://i.pinimg.com/564x/d2/76/08/d27608fa2f28fed73ae988d628911e18.jpg",
        img1text: "Classic",
        img2text: "",
        img3text: "Retro",
        img4text: "Retro",
    },
    {
        // +page.svelte data   <FeaturesPage />
        id: 5,
        title: "Kickstart your Life or Die",
        subtitle: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur saepe laborum.",
        featuresDesc: [
            {
                title: "Digial Campaigns",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
            },
            {
                title: "Digial Campaigns",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
            },
            {
                title: "Digial Campaigns",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
            },
            {
                title: "Digial Campaigns",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
            },
            {
                title: "Digial Campaigns",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
            },
            {
                title: "Digial Campaigns",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
            }
        ],
        btnText: "Get Started Today",

    },
    {
        // +page.svelte data   <FeaturesPage />
        id: 6,
        title: "Trusted by eCommerce Businesses",
        subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore provident impedit esse recusandae facere libero harum sequi.",
        stats: [
            {
                title: "Total Sales",
                value: "$4.8m",
            },
            {
                title: "Official Addons",
                value: "24",
            },
            {
                title: "Total Addons",
                value: "86",
            },
        ]
    }
]);