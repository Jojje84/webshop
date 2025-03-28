const images = import.meta.glob('../assets/abstract/*.png', { eager: true });

const getImagesByCategory = (category) => {
    const categoryImages = Object.values(images)
        .filter((mod) => mod.key && mod.key.includes(category))
        .map((mod) => mod.default);

        console.log(`Bilder för ${category}:`, categoryImages);
    return categoryImages;
}


const abstractProducts = [
    {
        id: 1,
        title: "Abstract Painting",
        price: 100,
        img: getImagesByCategory('Abstract')[0],
        category: "Abstract",
    },
    {
        id: 2,
        title: "Abstract Painting",
        price: 100,
        img: getImagesByCategory('abstract')[1],
        category: "Abstract",
    },
    {
        id: 3,
        title: "Abstract Painting",
        price: 100,
        img: getImagesByCategory('abstract')[2],
        category: "Abstract",
    },
    {
        id: 4,
        title: "Abstract Painting",
        price: 100,
        img: getImagesByCategory('abstract')[3],
        category: "Abstract",
    },
    {
        id: 5,
        title: "Abstract Painting",
        price: 100,
        img: getImagesByCategory('abstract')[4],
        category: "Abstract",
    },
       
]

const animalProducts = [


        {
            id: 1,
            title: "Abstract Painting",
            price: 100,
            img: getImagesByCategory('animal')[0],
            category: "Animal",
        },
        {
            id: 2,
            title: "Abstract Painting",
            price: 100,
            img: getImagesByCategory('animal')[1],
            category: "Animal",
        },
        {
            id: 3,
            title: "Abstract Painting",
            price: 100,
            img: getImagesByCategory('animal')[2],
            category: "Animal",
        },
        {
            id: 4,
            title: "Abstract Painting",
            price: 100,
            img: getImagesByCategory('animal')[3],
            category: "Animal",
        },
        {
            id: 5,
            title: "Abstract Painting",
            price: 100,
            img: getImagesByCategory('animal')[4],
            category: "Animal",
        },

]


const products = [
    ...abstractProducts,
    ...animalProducts,
  ];
  
  export const getProductsByCategory = (categoryName) => {
    return products.filter(product => product.category === categoryName);
  };