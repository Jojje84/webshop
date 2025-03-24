import styled from 'styled-components'
import React from 'react'
import CategoryCard from './CategoryCard'
import { categories } from '../data'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px 0 30px 0;
`;

const Headline = styled.div`
     width: 100%;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0 0 20px 0;
    padding: 10px;
    background-color: #ff9999;
    color: white;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`;

const CategoryWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 30px 0 30px;
    flex-grow: 1;
    width: 100%;
    
`;

const CategorySection = () => {
  return (
    <Container>
      <Headline>Categories</Headline>
      <CategoryWrapper>
        {categories.map(item => (
          <CategoryCard  key={item.id} item={item} />
        ))}
      </CategoryWrapper>
    </Container>
  );
}

export default CategorySection