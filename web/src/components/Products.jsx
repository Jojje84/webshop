import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { getProductsByCategory } from '../data/products'
import { useEffect, useState } from 'react'
import Product from './Product'


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`;

const Products = ({ selectedCategory, sortOrder }) => {
  const categoryToUse = selectedCategory;
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    if (!categoryToUse) {
      setCategoryProducts([]);
      return;

    }


    let products = getProductsByCategory(categoryToUse);

    if (products.length === 0) {
    }

    
    if (sortOrder === 'priceLowToHigh') {
      products.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'priceHighToLow') {
      products.sort((a, b) => b.price - a.price);
    } else if (sortOrder === 'newest') {
      products.sort((a, b) => b.id - a.id); 
    }

    setCategoryProducts(products);
  }, [categoryToUse, sortOrder]);
  
  if (!categoryToUse) {
  return <div>Vänligen välj en kategori.</div>;

}

  if (categoryProducts.length === 0) {
    return <div>Inga produkter hittades för denna kategori.</div>;
  }

  return (
    <Container>
        {categoryProducts.map((item) => (
            <Product item={item} key={item.id} />
        ))}

    </Container>
  )
}

export default Products