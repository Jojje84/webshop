import styled from 'styled-components'
import React from 'react'
import CategoryCard from './CategoryCard'
import { categories } from '../data'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f5f5f5;
`;

const Headline = styled.div`
    width: 90%;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
    margin: 20px;
    padding: 10px 20px;
    background-color: #ff9999;
    color: white;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CategoryWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

const CategoryList = () => {
  return (
    <Container>
      <Headline>Categorys</Headline>
      <CategoryWrapper>
        {categories.map(item => (
          <CategoryCard  key={item.id} item={item} />
        ))}
      </CategoryWrapper>
    </Container>
  );
}

export default CategoryList