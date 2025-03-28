
const getImagesByCategory = (category) => {

    let images;

    if (category === 'abstract') {
        images = import.meta.glob('../assets/categories/abstract/*.png', { eager: true });
      } else if (category === 'animal') {
        images = import.meta.glob('../assets/categories/animal/*.png', { eager: true });
      }

  const imagePaths = Object.values(images).map((mod) => mod.default);
  return imagePaths;
};



const abstractImagespic = getImagesByCategory('abstract');
const animalImagespic = getImagesByCategory('animal');


const abstractProducts = [
    {
        id: 1,
        title: "Abstract Painting",
        price: 100,
        img: abstractImagespic[0],
        category: "Abstract",
    },
    {
        id: 2,
        title: "Abstract Painting",
        price: 100,
        img: abstractImagespic[1],
        category: "Abstract",
    },
    {
        id: 3,
        title: "Abstract Painting",
        price: 100,
        img: abstractImagespic[2],
        category: "Abstract",
    },
    {
        id: 4,
        title: "Abstract Painting",
        price: 100,
        img: abstractImagespic[3],
        category: "Abstract",
    },
    {
        id: 5,
        title: "Abstract Painting",
        price: 100,
        img: abstractImagespic[4],
        category: "Abstract",
    },
       
]

const animalProducts = [


        {
            id: 1,
            title: "Abstract Painting",
            price: 100,
            img: animalImagespic[0],
            category: "Animal",
        },
        {
            id: 2,
            title: "Abstract Painting",
            price: 100,
            img: animalImagespic[1],
            category: "Animal",
        },
        {
            id: 3,
            title: "Abstract Painting",
            price: 100,
            img: animalImagespic[2],
            category: "Animal",
        },
        {
            id: 4,
            title: "Abstract Painting",
            price: 100,
            img: animalImagespic[3],
            category: "Animal",
        },
        {
            id: 5,
            title: "Abstract Painting",
            price: 100,
            img: animalImagespic[4],
            category: "Animal",
        },

]


const products = [
    ...abstractProducts,
    ...animalProducts,
  ];

  export const getProductsByCategory = (categoryTitle) => {
    return products.filter(product => product.category === categoryTitle);
  };