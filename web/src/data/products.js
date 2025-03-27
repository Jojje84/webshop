
const images = import.meta.glob('../assets/categories/*.png', { eager: true });

const imagespic = Object.values(images).map((mod) => mod.default);

const products = [
    {
        id: 1,
        title: "Abstract Painting",
        price: 100,
        img: imagespic[0],
        category: "Abstract",
    },
    {
        id: 2,
        title: "Animal Painting",
        price: 120,
        img: imagespic[1],
        category: "Animal",
    },  
    {
        id: 3,
        title: "City Painting",
        price: 150,
        img: imagespic[2],
        category: "Citys",
    },
  ];
  
  export const getProductsByCategory = (categoryName) => {
    return products.filter(product => product.category === categoryName);
  };