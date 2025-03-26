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


const Products = () => {
  const { categoryName } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    const products = getProductsByCategory(categoryName);
    setCategoryProducts(products);
  }, [categoryName]);

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