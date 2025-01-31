
function delayNavigation(event, url) {
    event.preventDefault(); 
    setTimeout(() => {
      window.location.href = url; 
    }, 500);
  }
//data for search
$(document).ready(function () {
    // Example product data
    const products = [
        { id: 1, name: "Iphone 16 PRO Max", img: "https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75", price: "$1499.00" },
        { id: 2, name: "Samsung A24 Ultra", img: "https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FSamsung_1280x853px_Galaxy_A24_e69972c64e.png&w=3840&q=75", price: "$899.00" },
        { id: 3, name: "Oppo Reno 12 Pro", img: "https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2Foppo_1280x853px_Oppo_Reno_8_T_4_G_2b1c2b2fe3.png&w=640&q=75", price: "$549.00" },
        { id: 4, name: "Vivo X50 PRO", img: "https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2Fvivo_1280x853px_vivo_X50_Pro_fea57fa2c8.png&w=640&q=75", price: "$599.00" },
        {
            id: 5,
            img: "https://image-us.samsung.com/SamsungUS/configurator/A54-01-Purple-Configurator-DT-800x600.jpg",
            name: "Samsung Galaxy A54",
            price : "$359.00",
        },
        {
            id: 6,
            img: "https://image-us.samsung.com/us/smartphones/galaxy-s24/all-gallery/01_E3_OnlineExclusive_TitaniumOrange_Lockup_1600x1200.jpg?$default-400-jpg$",
            name: "Samsung Galaxy S24",
            price: "$1250.00",
        },
        {
            id: 7,
            img: "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-color-lineup-230912_big.jpg.large.jpg",
            name: "Iphone 15",
            price : "$599",
        },
        {
            id: 8,
            img: "https://i5.walmartimages.com/seo/Apple-iPhone-14-Pro-Max-A2651-256GB-Black-US-Model-Factory-Unlocked-Cell-Phone-Very-Good-Condition_e7c05cba-c79a-4a5b-8cd3-32dfccb0492b.b68890b6d20f95d85cf00130b77075b1.jpeg",
            name: "Iphone 14",
            price: "$749",
        },
        {
            id: 9,
            img: "https://m.media-amazon.com/images/I/618pgJjYR3L.jpg",
            name: "Samsung Galaxy A15",
            price: "$607",
        },
        {
            id: 10,
            img: "https://img.global.news.samsung.com/global/wp-content/uploads/2022/03/Galaxy-A-Unpacked_press-release_main3.jpg",
            name: "Galaxy A53 5G",
            price: "$749",
        },
        {
            id: 11,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgop9mkOOWMjiUYKRQqkLN__a7wjtfpn1yYQ&s",
            name: "OPPO Find X7 Ultra",
            price: "$1800",
        },
        {
            id: 12,
            img: "https://file03.es.c01.co/upload/E478E7F258AC7564/202401/5318441265600681127.jpg",
            name: "Vivo V29 5G",
            price: "$849",
        },
        {
            id: 13,
            img: "https://chania.ke/wp-content/uploads/2024/05/437e34b368c34a00ad1abcd7275acf7f.png",
            name: "Vivo V30 5G",
            price: "$150",
        },
        {
            id: 14,
            img: "https://vasanthandco.in/UploadedFiles/productimages/20240622113325-61p9OByM1kL._SX679_.jpg",
            name: "Vivo Y200e 5G",
           
            price: "$140",
        },
        {
            id: 15,
            img: "https://media.croma.com/image/upload/v1708669359/Croma%20Assets/Communication/Mobiles/Images/301350_0_x02kaz.png",
            name: "Vivo Y29",
        
            price: "$140",
        },
        {
            id: 16,
            img: "https://friendshome.pk/cdn/shop/files/UntitledProject_13_aec8eb79-1f81-4ca9-a322-ea3c3f9eb3d6.jpg?v=1711877215",
            name: "OPPO A96",
            price: "$250",
        },
        {
            id: 17,
            img: "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/oppo-a60/product-image/860-720-specs.png",
            name: "OPPO A60 - Specifications",
            price: "$599",
        },
        {
            id: 18,
            img: "https://www.oppostore.com.au/cdn/shop/files/1_353bb78b-bfe3-4a3b-9887-c79716b07bcc.png?v=1725421959&width=1080",
            name: "OPPO A60 5G",
            price: "$749",
        },
        {
            id: 19,
            img: "https://pdaplaza.ca/cdn/shop/files/oppo_find_n3_flip-1_1.jpg?v=1693337627",
            name: "OPPO Find N3 Flip 5G Dual SIM 12GB",
            price: "$849",
        },
        {
            id: 20,
            img: "https://images.samsung.com/is/image/samsung/ie-feature-crafted-in-beautiful-colours-181290528?$FB_TYPE_A_MO_JPG$",
            name: "Samsung Galaxy A40 (Blue)",
            price: "$1800",
        },
        {
            id: 21,
            img: "https://img1.kakaku.k-img.com/images/smartphone/icv/f_J0000034150.jpg",
            name: "Iphone 12",
            price: "$849",
        },
        {
            id: 22,
            img: "https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iphone13_colors_geo_09142021_big.jpg.large.jpg",
            name: "Iphone 13",
            price: "$799",
        },
     
       
        
    ];

    $("#searchForm").on("submit", function (e) {
        e.preventDefault(); 

        const searchTerm = $("#searchInput").val().toLowerCase();
        const searchResults = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm)
        );
        localStorage.setItem("searchResults", JSON.stringify(searchResults));
        window.location.href = "search.html";
    });
});




// first page of phones
$(document).ready(function () {
    function uid() {
        return Math.random().toString(36).substr(2, 9);
    }
    const phones = [
        {
            id: uid(),
            img: "https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75",
            stars: 4.5,
            name: "Iphone 16 PRO Max",
            price: "$1499.00",
        },
        {
            id: uid(),
            img: "https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FSamsung_1280x853px_Galaxy_A24_e69972c64e.png&w=3840&q=75",
            stars: 5,
            name: "Samsuung A24 Utra",
            price: "$899.00",
        },
        {
            id: uid(),
            img: "https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2Foppo_1280x853px_Oppo_Reno_8_T_4_G_2b1c2b2fe3.png&w=640&q=75",
            stars: 3,
            name: "Oppo Reno 12 Pro",
            price: "$549.00",
        },
        {
            id: uid(),
            img: "https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2Fvivo_1280x853px_vivo_X50_Pro_fea57fa2c8.png&w=640&q=75",
            stars: 2.5,
            name: "Vivo X50 PRO",
            price: "$599.00",
        },
    ];

    const $row = $("#trending");

    phones.forEach(product => {
        const starsHTML = "★".repeat(Math.floor(product.stars)) + "☆".repeat(5 - Math.floor(product.stars));
        const productHTML = `
            <div class="col-12 col-sm-6 col-md-3 col-lg-3">
                <div class="box mb-4">
                    <img src="${product.img}" alt="${product.name}" class="img-fluid w-100">
                    <div class="text-center mt-4">
                        <span class="text-warning">${starsHTML}</span>
                        <p class="mb-0 mt-2">${product.name}</p>
                        <h4 class="mt-2">${product.price}</h4>
                        <button class="btn btn-primary mt-2 view-product" data-id="${product.id}" data-bs-toggle="modal" data-bs-target=".modal">View Details</button>
                    </div>
                </div>
            </div>
        `;
        $row.append(productHTML);
    });

    $(document).on("click", ".view-product", function () {
        const productId = $(this).data("id");
        const product = phones.find(p => p.id === productId);
        if (product) {
            $(".modal-title").text(product.name);
            $(".modal-body").html(`
                <img src="${product.img}" alt="${product.name}" class="img-fluid mb-3">
                <p><strong>Price:</strong> ${product.price}</p>
                <button class="btn btn-success add-to-cart" data-id="${product.id}">Add to Cart</button>
            `);
        }
    });

    $(document).on("click", ".add-to-cart", function () {
        const productId = $(this).data("id");
        const product = phones.find(p => p.id === productId);
    
        if (product) {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
            $(".modal").modal("hide"); 
        }
    });
    
});


//top seller phones

$(document).ready(function () {
    const topSeller = [
        {
        id: 1, 
        img: "https://geniusmobile.lk/wp-content/uploads/2023/09/iphone-15-4.jpg",
        name: "IPhone 15",
    },
    {
        id: 2,
        img: "https://image-us.samsung.com/SamsungUS/configurator/A54-01-Purple-Configurator-DT-800x600.jpg",
        name: "Galaxy A54",
    },
    {
        id: 3,
        img: "https://image-us.samsung.com/us/smartphones/galaxy-s24/all-gallery/01_E3_OnlineExclusive_TitaniumOrange_Lockup_1600x1200.jpg?$default-400-jpg$",
        name: "Galaxy S24",
    },
    {
        id: 4,
        img: "https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/a20-a3x/navigation/440-440-blue.png.thumb.webp",
        name: "OPPO A3x",
    },
    {
        id: 5,
        img: "https://tradingshenzhen.com/14928-large_default/vivo-x200-pro-12gb256gb.jpg",
        name: "VIVO X200 Pro",
    },
    {
        id: 6,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYBt57QpoLsz3kX55PqLPGqwCJ-r6DebG1Bg&s",
        name: "Vivo Y18i",
    }
]

    const $sliderTrack = $("#sliders-track");
    topSeller.forEach(phone => {
        const topSellerHtml = `
        <div class="slides">
                    <img src="${phone.img}"
                        alt="" title="${phone.name}">
        </div>
        `
        $sliderTrack.append(topSellerHtml);
    });

})

$(document).ready(function () {
        function uid() {
            return Math.random().toString(36).substr(2, 9);
        }
        const samsung = [
            {
                id: uid(),
                img: "https://img.global.news.samsung.com/global/wp-content/uploads/2022/03/Galaxy-A-Unpacked_press-release_main3.jpg",
                name: "Galaxy A53 5G ",
                title: "Advanced camera and sleek design.",
                price: "$749",
            },

            {
                id: uid(),
                img: "https://image-us.samsung.com/us/smartphones/galaxy-s24/all-gallery/01_E3_OnlineExclusive_TitaniumOrange_Lockup_1600x1200.jpg?$default-400-jpg$",
                name: "Galaxy S24 Ultra",
                title: "Exceptional performance with a long-lasting battery.",
                price: "$849",
            },
            {
                id: uid(),
                img: "https://www.ooredoo.tn/Personal/9017-large_default/portable-samsung-galaxy-a05-6128go.jpg",
                name: "SAMSUNG GALAXY A05",
                title: "Elegant and stylish with powerful hardware.",
                price: "$799",
            },
            {
                id: uid(),
                img: "https://images.samsung.com/is/image/samsung/ie-feature-crafted-in-beautiful-colours-181290528?$FB_TYPE_A_MO_JPG$",
                name: "Samsung Galaxy A40 (Blue)",
                title: "Premium design with top-tier performance.",
                price: "$1800",
            },
            {
                id: uid(),
                img: "https://m.media-amazon.com/images/I/618pgJjYR3L.jpg",
                name: "Samsung Galaxy A15",
                title: "Mint Tello and Global",
                price: "$607",
            },
            
        ];
    
        const $row = $("#samsung");
    
        samsung.forEach(product => {
            const productHTML = `
            <div class="col-md-4">
                <div class="card box">
                  <img src="${product.img}" class="card-img-top" alt="Phone Image">
                  <div class="card-body">
                    <h4 class="card-title">${product.name}</h4>
                    <p class="card-text">${product.title}</p>
                    <p class="fw-bold">Price:  ${product.price}</p>
                      <button class="btn btn-danger w-100 mt-2 view-product" data-id="${product.id}" data-bs-toggle="modal" data-bs-target=".modal">Buy now</button>
                  </div>
                </div>
              </div>
            `;
            $row.append(productHTML);
        });

        $(document).on("click", ".view-product", function () {
            const productId = $(this).data("id");
            console.log(productId);

            const product = samsung.find(p => p.id === productId);
            if (product) {
                $(".modal-title").text(product.name);
                $(".modal-body").html(`
                    <img src="${product.img}" alt="${product.name}" class="img-fluid mb-3">
                     <h4 class="card-title">${product.name}</h4>
                    <p class="card-text">${product.title}</p>
                    <p><strong>Price:</strong> ${product.price}</p>
                    <button class="btn btn-success add-to-cart" data-id="${product.id}">Add to Cart</button>
                `);
            }
        });
    
        $(document).on("click", ".add-to-cart", function () {
            const productId = $(this).data("id");
            const product = samsung.find(p => p.id === productId);
        
            if (product) {
                let cart = JSON.parse(localStorage.getItem("cart")) || [];
                cart.push(product);
                localStorage.setItem("cart", JSON.stringify(cart));
                $(".modal").modal("hide"); 
            }
        });
    })


    //trending iphone
    $(document).ready(function () {
        function uid() {
            return Math.random().toString(36).substr(2, 9);
        }
        const iphone = [
            {
                id: uid(),
                img: "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-color-lineup-230912_big.jpg.large.jpg",
                name: "Iphone 15",
                title: "Affordable with reliable performance.",
                price: "$599",
            },
            {
                id: uid(),
                img: "https://i5.walmartimages.com/seo/Apple-iPhone-14-Pro-Max-A2651-256GB-Black-US-Model-Factory-Unlocked-Cell-Phone-Very-Good-Condition_e7c05cba-c79a-4a5b-8cd3-32dfccb0492b.b68890b6d20f95d85cf00130b77075b1.jpeg",
                name: "Iphone 14",
                title: "Advanced camera and sleek design.",
                price: "$749",
            },
            {
                id: uid(),
                img: "https://img1.kakaku.k-img.com/images/smartphone/icv/f_J0000034150.jpg",
                name: "Iphone 12",
                title: "Exceptional performance with a long-lasting battery.",
                price: "$849",
            },
            {
                id: uid(),
                img: "https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iphone13_colors_geo_09142021_big.jpg.large.jpg",
                name: "Iphone 13",
                title: "Elegant and stylish with powerful hardware.",
                price: "$799",
            },
            {
                id: uid(),
                img: "https://static.independent.co.uk/2024/09/18/13/iPhone16-hero-indybest.jpg",
                name: "Iphone 16",
                title: "Premium design with top-tier performance.",
                price: "$1800",
            },
        ];
        const $row = $("#iphone");
    
        iphone.forEach(product => {
            const productHTML = `
            <div class="col-md-4">
                <div class="card box">
                  <img src="${product.img}" class="card-img-top" alt="Phone Image">
                  <div class="card-body">
                    <h4 class="card-title">${product.name}</h4>
                    <p class="card-text">${product.title}</p>
                    <p class="fw-bold">Price:  ${product.price}</p>
                      <button class="btn btn-danger w-100 mt-2 view-product" data-id="${product.id}" data-bs-toggle="modal" data-bs-target=".modal">Buy now</button>
                  </div>
                </div>
              </div>
            `;
            $row.append(productHTML);
        });

        $(document).on("click", ".view-product", function () {
            const productId = $(this).data("id");
            console.log(productId);

            const product = iphone.find(p => p.id === productId);
            if (product) {
                $(".modal-title").text(product.name);
                $(".modal-body").html(`
                    <img src="${product.img}" alt="${product.name}" class="img-fluid mb-3">
                     <h4 class="card-title">${product.name}</h4>
                    <p class="card-text">${product.title}</p>
                    <p><strong>Price:</strong> ${product.price}</p>
                    <button class="btn btn-success add-to-cart" data-id="${product.id}">Add to Cart</button>
                `);
            }
        });
    
        $(document).on("click", ".add-to-cart", function () {
            const productId = $(this).data("id");
            const product = iphone.find(p => p.id === productId);
        
            if (product) {
                let cart = JSON.parse(localStorage.getItem("cart")) || [];
                cart.push(product);
                localStorage.setItem("cart", JSON.stringify(cart));
                $(".modal").modal("hide"); 
            }
        });
    })

     //trending oppo
     $(document).ready(function () {
        function uid() {
            return Math.random().toString(36).substr(2, 9);
        }
        const oppo = [
            {
                id: uid(),
                img: "https://i5.walmartimages.com/seo/OPPO-A54-5G-64GB-4GB-RAM-International-Version-GSM-Unlocked-Silver-Black_f97a7c84-e987-4960-b6e8-75991044eb12.515f726f6412a265f300b57d1337d0df.jpeg",
                name: "OPPO A54 5G",
                title: "Elegant and stylish with powerful hardware.",
                price: "$799",
            },
            {
                id: uid(),
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgop9mkOOWMjiUYKRQqkLN__a7wjtfpn1yYQ&s",
                name: "OPPO Find X7 Ultra",
                title: "Premium design with top-tier performance.",
                price: "$1800",
            },
            {
                id: uid(),
                img: "https://friendshome.pk/cdn/shop/files/UntitledProject_13_aec8eb79-1f81-4ca9-a322-ea3c3f9eb3d6.jpg?v=1711877215",
                name: "OPPO A96",
                title: "Premium design with budget.",
                price: "$250",
            },
            {
                id: uid(),
                img: "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/oppo-a60/product-image/860-720-specs.png",
                name: "OPPO A60 - Specifications",
                title: "Affordable with reliable performance.",
                price: "$599",
            },
            {
                id: uid(),
                img: "https://www.oppostore.com.au/cdn/shop/files/1_353bb78b-bfe3-4a3b-9887-c79716b07bcc.png?v=1725421959&width=1080",
                name: "OPPO A60 5G",
                title: "Advanced camera and sleek design.",
                price: "$749",
            },
            {
                id: uid(),
                img: "https://pdaplaza.ca/cdn/shop/files/oppo_find_n3_flip-1_1.jpg?v=1693337627",
                name: "OPPO Find N3 Flip 5G Dual SIM 12GB",
                title: "Exceptional performance with a long-lasting battery.",
                price: "$849",
            },
           
        ];
        const $row = $("#oppo");
    
        oppo.forEach(product => {
            const productHTML = `
            <div class="col-md-4">
                <div class="card box">
                  <img src="${product.img}" class="card-img-top" alt="Phone Image">
                  <div class="card-body">
                    <h4 class="card-title">${product.name}</h4>
                    <p class="card-text">${product.title}</p>
                    <p class="fw-bold">Price:  ${product.price}</p>
                      <button class="btn btn-danger w-100 mt-2 view-product" data-id="${product.id}" data-bs-toggle="modal" data-bs-target=".modal">Buy now</button>
                  </div>
                </div>
              </div>
            `;
            $row.append(productHTML);
        });

        $(document).on("click", ".view-product", function () {
            const productId = $(this).data("id");
            console.log(productId);

            const product = oppo.find(p => p.id === productId);
            if (product) {
                $(".modal-title").text(product.name);
                $(".modal-body").html(`
                    <img src="${product.img}" alt="${product.name}" class="img-fluid mb-3">
                     <h4 class="card-title">${product.name}</h4>
                    <p class="card-text">${product.title}</p>
                    <p><strong>Price:</strong> ${product.price}</p>
                    <button class="btn btn-success add-to-cart" data-id="${product.id}">Add to Cart</button>
                `);
            }
        });
    
        $(document).on("click", ".add-to-cart", function () {
            const productId = $(this).data("id");
            const product = oppo.find(p => p.id === productId);
        
            if (product) {
                let cart = JSON.parse(localStorage.getItem("cart")) || [];
                cart.push(product);
                localStorage.setItem("cart", JSON.stringify(cart));
                $(".modal").modal("hide"); 
            }
        });
    })


    
     //trending vivo
     $(document).ready(function () {
        function uid() {
            return Math.random().toString(36).substr(2, 9);
        }
        const vivo = [
            {
                id: uid(),
                img: "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1691045449121/61091d03be48bd4f2f428192ae2c0f40.png",
                name: "vivo V29 - Powerful Processor",
                title: "Affordable with reliable performance.",
                price: "$150",
            },
            {
                id: uid(),
                img: "https://suprememobiles.in/cdn/shop/files/1_48337b92-89df-4528-a030-aea61960cc97.png?v=1723203523&width=1100",
                name: "New Vivo Mobiles with Price List",
                title: "Advanced camera and sleek design.",
                price: "$200",
            },
            {
                id: uid(),
                img: "https://file03.es.c01.co/upload/E478E7F258AC7564/202401/5318441265600681127.jpg",
                name: "vivo V29 5G",
                title: "Exceptional performance with a long-lasting battery.",
                price: "$849",
            },
            {
                id: uid(),
                img: "https://chania.ke/wp-content/uploads/2024/05/437e34b368c34a00ad1abcd7275acf7f.png",
                name: "Vivo V30 5G",
                title: "Elegant and stylish with powerful hardware.",
                price: "$150",
            },
            {
                id: uid(),
                img: "https://vasanthandco.in/UploadedFiles/productimages/20240622113325-61p9OByM1kL._SX679_.jpg",
                name: "Vivo Y200e 5G",
                title: "Premium design with top-tier performance.",
                price: "$140",
            },
            {
                id: uid(),
                img: "https://media.croma.com/image/upload/v1708669359/Croma%20Assets/Communication/Mobiles/Images/301350_0_x02kaz.png",
                name: "Vivo Y29",
                title: "Majestic Red",
                price: "$140",
            },
            
           
           
        ];
        const $row = $("#vivo");
    
        vivo.forEach(product => {
            const productHTML = `
            <div class="col-md-4">
                <div class="card box">
                  <img src="${product.img}" class="card-img-top" alt="Phone Image">
                  <div class="card-body">
                    <h4 class="card-title">${product.name}</h4>
                    <p class="card-text">${product.title}</p>
                    <p class="fw-bold">Price:  ${product.price}</p>
                      <button class="btn btn-danger w-100 mt-2 view-product" data-id="${product.id}" data-bs-toggle="modal" data-bs-target=".modal">Buy now</button>
                  </div>
                </div>
              </div>
            `;
            $row.append(productHTML);
        });

        $(document).on("click", ".view-product", function () {
            const productId = $(this).data("id");
            console.log(productId);

            const product = vivo.find(p => p.id === productId);
            if (product) {
                $(".modal-title").text(product.name);
                $(".modal-body").html(`
                    <img src="${product.img}" alt="${product.name}" class="img-fluid mb-3">
                     <h4 class="card-title">${product.name}</h4>
                    <p class="card-text">${product.title}</p>
                    <p><strong>Price:</strong> ${product.price}</p>
                    <button class="btn btn-success add-to-cart" data-id="${product.id}">Add to Cart</button>
                `);
            }
        });
    
        $(document).on("click", ".add-to-cart", function () {
            const productId = $(this).data("id");
            const product = vivo.find(p => p.id === productId);
        
            if (product) {
                let cart = JSON.parse(localStorage.getItem("cart")) || [];
                cart.push(product);
                localStorage.setItem("cart", JSON.stringify(cart));
                $(".modal").modal("hide"); 
            }
        });
    })




   