import { getProducts } from "../data"; 

export const fetchProducts = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const products = getProducts(category); 
      resolve(products);
    }, 500);
  });
};