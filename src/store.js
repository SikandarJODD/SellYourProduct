import { writable } from "svelte/store";

// Layout.svelte : 
import Logo from "$lib/logo.png";
export let layoutData = writable({
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
});
// Footer Page : 
export let footerData = writable({
    footerTitle: "Funky Tunky",
    footerLink: "funkytunky",
    facebookLink: "https://www.facebook.com/sikandar.s.bhide/",
    twitterLink: "https://twitter.com/Sikandar_Bhide",
    instagramLink: "https://www.instagram.com/sikandar.s.bhide/",
    linkedinLink: "https://www.linkedin.com/in/sikandar-bhide-5b1b3b1b/",
});
// Main page : 
export let mainPageData = writable([
    {
        id: 1,
        metaTitle: "Build Wesite",
        metaDesc: "Website Started Created by Sikandar Bhide",
        metaImg: "https://cdn-icons-png.flaticon.com/512/4791/4791243.png"
    },
    {
        // +page.svelte data
        id: 2,
        title: "Welcome to Funky Tunky",
        subtitle: "Classic Cars",
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
// Product Page : 
export let productsInfo = writable(
    {
        id: 1,
        title: "Product Collections",
        subtext: "lore ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
        btn: "Buy Now", // for [Product Page]
    }
)
export let productData = writable([
    {
        id: 1,
        title: "fifi",
        brand: "Fancy Brand",
        price: "$19.99",
        oldprice: "$39.99",
        img: "https://i.pinimg.com/564x/f7/d1/3a/f7d13acad6cb754438fd5a9da3d78818.jpg",
        imgalt: "Photo by Austin Wade",
    },
    {
        id: 2,
        title: "Cool Outfit",
        brand: "Cool Brand",
        price: "$29.99",
        oldprice: "",
        img: "https://i.pinimg.com/564x/20/83/06/208306ef7f5659a46c2b1c592e7851d2.jpg",
    },
    {
        id: 3,
        title: "Funky Outfit",
        brand: "Funky Brand",
        price: "$39.99",
        oldprice: "",
        img: "https://i.pinimg.com/564x/f5/b3/b7/f5b3b7a64c253f882bfdd4337c7721ac.jpg",
    },
    {
        id: 4,
        title: "Tunky Outfit",
        brand: "Tunky Brand",
        price: "$49.99",
        oldprice: "",
        img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
        id: 5,
        title: "Funky Outfit",
        brand: "Funky Brand",
        price: "$39.99",
        oldprice: "",
        img: "https://i.pinimg.com/564x/a2/ea/98/a2ea989a1bc308ca8dfe9b2b30e93918.jpg",
    },
    {
        id: 6,
        title: "Tunky Outfit",
        brand: "Tunky Brand",
        price: "$49.99",
        oldprice: "",
        img: "https://i.pinimg.com/564x/4d/d3/de/4dd3debfeaf25d0e935505eb81eb288f.jpg",
    },
    {
        id: 7,
        title: "Funky Outfit",
        brand: "Funky Brand",
        price: "$39.99",
        oldprice: "",
        img: "https://i.pinimg.com/750x/da/1f/c9/da1fc9118f89831b25a0e5303350edc7.jpg",
    },
    {
        id: 8,
        title: "Tunky Outfit",
        brand: "Tunky Brand",
        price: "$49.99",
        oldprice: "",
        img: "https://i.pinimg.com/564x/05/fb/84/05fb8402f6b786dde6c69d09e545c8b0.jpg",
    },
]);

// About Page : 
export let aboutInfo = writable([
    {
        id: 1,
        smltitle: "Introducing",
        title: "Revolutionary way to build the web",
        subtitle: "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.",
    },
    {
        id: 2,
        title: "About us",
        subtext: "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated",
        liData: [
            "This is a section of some simple filler text",
            "Also known as placeholder text",
            "It shares some characteristics of a real written text",
        ],
        quote: "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated",
        abtImg: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600&h=350",
    },
    {
        // Team Members : 
        id: 3,
        title: "Our Team by the numbers",
        subtext: "We are a small team of passionate people who love what we do. We are always looking for new talent to join our team.",
        stats: [
            {
                title: "100",
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
        ]


    }
]);