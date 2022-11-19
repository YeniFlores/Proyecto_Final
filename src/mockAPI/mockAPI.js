const data= [
    {
        id: 1,            
        title: "Cyberpunk Futuristic Jacket",
        img:"https://cdn.shopify.com/s/files/1/0567/5873/0916/products/cyberpunk-futuristic-jacket_720x.png?v=1643091150",
        price: 6000,
        detail: "Fabricado con materiales de primera calidad y funcional",
        stock: 5,
        color: "Black",
        category: "hombre"
    },
    {
        id: 2, 
        title: "Cargo Jacket for woman",
        img:"https://cdn.shopify.com/s/files/1/0567/5873/0916/products/cargo-utility-jacket-womens-156_57ebecdd-f28e-43f6-bc5a-f693c5889c8a_720x.jpg?v=1642788068",
        price: 5000,
        detail: "Fabricado con materiales de primera calidad y funcional",
        stock:8,
        color: "Black",
        category: "mujer"
    },
    {
        id: 3,
        title: "Techwear Hood",
        img: "https://urbxn-techwear.com/wp-content/uploads/2021/10/techwear-hood-7.jpg",
        price: 9000,
        detail:"Fabricado con materiales de primera calidad y funcional",
        stock: 2,
        color: "Black",
        category: "mujer"
    },
    {
        id: 4,
        title: "Ribbon Pants",
        img: "https://cdn.shopify.com/s/files/1/0567/5873/0916/products/ribbon-pants_720x.png?v=1643643689",
        price: 5000,
        detail: "Innovadores pantalones impermeables techwear con estilo futurista y táctico",
        stock: 6,
        color: "Black",
        category: "hombre"
    },
    {
        id: 5,            
        title: "Cargo Jacket",
        img:"https://cdn.shopify.com/s/files/1/0567/5873/0916/products/cargo-jacket-mens_720x.png?v=1643086819",
        price: 6000,
        detail: "Fabricado con materiales de primera calidad y funcional",
        stock: 5,
        color: "Black",
        category: "hombre"
    },
    {
        id: 6, 
        title: "Techwear one shoulder top",
        img:"https://cdn.shopify.com/s/files/1/0567/5873/0916/products/one-shoulder-top-women_720x.png?v=1642777691",
        price: 5000,
        detail: "Fabricado con materiales de primera calidad y funcional",
        stock:8,
        color: "Black",
        category: "mujer"
    },
    {
        id: 7,
        title: "Techwear Pants for women",
        img: "https://cdn.shopify.com/s/files/1/0567/5873/0916/products/womens-black-tactical-pants_720x.png?v=1644312052",
        price: 9000,
        detail:"Fabricado con materiales de primera calidad y funcional",
        stock: 2,
        color: "Black",
        category: "mujer",
    },
    {
        id: 8,
        title: "Waterproof Techwear Pants",
        img: "https://urbxn-techwear.com/wp-content/uploads/2021/10/techwear-waterproof.jpg",
        price: 5000,
        detail: "Innovadores pantalones impermeables techwear con estilo futurista y táctico",
        stock: 6,
        color: "Black",
        category: "hombre",
    },
    {
        id: 9,
        title: "Techwear Backpack",
        img: "https://urbxn-techwear.com/wp-content/uploads/2021/10/techwear-backpack-1.png",
        price: 4000,
        detail:"Completa tu atuendo técnico con esta mochila con múltiples bolsillos y compartimentos de almacenamiento",
        stock: 10,
        color: "Black",
        category: "accessory",
    },
    {
        id: 10,
        title: "Techwear Wallet",
        img: "https://urbxn-techwear.com/wp-content/uploads/2021/10/techwear-wallet-1.png",
        price: 5000,
        detail: "Equípate con este estuche para celular y billetera. Una cartera táctica muy práctica para el uso diario y que se engancha al cinturón. Además, tiene múltiples compartimentos de almacenamiento para una organización óptima.",
        stock: 15,
        color: "Black",
        category: "accessory",
    },
    {
        id: 11,
        title: "Techwear Fanny Pack",
        img: "https://urbxn-techwear.com/wp-content/uploads/2021/10/techwear-fanny-pack-7.jpg",
        price: 7000,
        detail:"Equípate con esta gran riñonera Techwear para llevar en el cinturón o en la espalda para un amplio espacio de almacenamiento. Impermeable y con muchos bolsillos compartimentados, puedes guardar fácilmente tus objetos personales, artículos deportivos, así como gafas de sol, cartera y portátil.",
        stock: 20,
        color: "Black",
        category: "accessory",
    },
    {
        id: 12,
        title: "Techwear Pupil Travel bag",
        img: "https://cdn.shopify.com/s/files/1/0567/5873/0916/products/pupil-travel-bag_720x.png?v=1643787312",
        price: 5000,
        detail: "Bolso practico para el uso diario con multiples compartimentos para una eficiente organización.",
        stock: 15,
        color: "Black",
        category: "accessory",
    },
    {
        id: 13,
        title: "Techwear Winter Gloves",
        img: "https://urbxn-techwear.com/wp-content/uploads/2021/10/techwear-backpack-1.png",
        price: 4000,
        detail:"Con estos guantes de invierno teachwear, podras mantenerte abrigado y con estilo durante toda la temporada",
        stock: 10,
        color: "Black",
        category: "accessory",
    },
    {
        id: 14,
        title: "Techwear neck Gaiter",
        img: "https://cdn.shopify.com/s/files/1/0567/5873/0916/products/techwear-neck-gaiter_720x.png?v=1643707775",
        price: 3000,
        detail: "Con este gaiter de cuello y boca, podran cubrirte del frio",
        stock: 11,
        color: "Black",
        category: "accessory",
    },
    {
        id: 15,
        title: "Cross-chest Bag",
        img: "https://cdn.shopify.com/s/files/1/0567/5873/0916/products/cross-chest-bag_0bb86002-6328-4b26-8a7c-9eafc2996548_720x.png?v=1643711855",
        price: 6000,
        detail: "Perfecto para completar tu estilo teachwear",
        stock: 11,
        color: "Black",
        category: "accessory",
    },



]

export function getProduct() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(data), 1000);
});
}

export function getOneProduct(id) {
    return new Promise((resolve,reject) => {
        let productReq = data.find ((item) => {
            return item.id === Number(id);
        });
        setTimeout(() => {
            if (productReq === undefined)
                reject (new Error ("No encontramos lo que buscas"));
            else {
                resolve(productReq);
            }
    }, 1000);
});
}

export function getProductByCategory(idcategory) {
    return new Promise((resolve) => {
      let arrayFilterPorducts = data.filter(
        item => item.category === idcategory);
        setTimeout(() => resolve(arrayFilterPorducts), 1000);
    });
}

export function getAccessory (idaccessory) {
    return new Promise((resolve) => {
        let filterAccessory = data.filter(
        item => item.accessory === idaccessory);
        setTimeout(() => resolve(filterAccessory), 1000);
    });
}
