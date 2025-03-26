
const products = [
    {
        id: 1,
        title: "Abstract Painting",
        price: 100,
        img: "public/images/categories/abstract/abstract1.png",
        category: "abstract",
    },
    {
        id: 2,
        title: "Animal Painting",
        price: 120,
        img: "public/images/categories/animal/animal1.png",
        category: "animal",
    },  
    {
        id: 3,
        title: "City Painting",
        price: 150,
        img: "public/images/categories/citys/citys1.png",
        category: "citys",
    },
  ];
  
  export const getProductsByCategory = (categoryName) => {
    return products.filter(product => product.category === categoryName);
  };