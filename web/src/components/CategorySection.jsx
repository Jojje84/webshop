import React from 'react';

import styled from 'styled-components';
import CategoryCard from './CategoryCard';
import { categories } from '../data/categories';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  padding: 20px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
 
`;

const Title = styled.h1`
  font-weight: 200;
  text-align: center;
  margin
  font-size: 24px;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;   
  gap: 5px;
  overflow-x: auto;
  height: auto;
  width: 60%;;
  box-sizing: border-box;
  padding: 10px;
`;

const CategoryCardStyled = styled.div`
  flex: 1;
  height: 300px;
  transition: flex 0.3s ease, transform 0.3s ease;
  cursor: pointer;
  border-radius: 25px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;


  &:hover {
    flex: 1.5;
    transform: scale(1.05);
    transition: flex 0.3s ease, transform 0.3s ease;
  }
`;

const CategoriText = styled.div`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  font-size: 18px;
  font-weight: bold;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(180deg);
  text-align: center;
  white-space: nowrap;
  transition: all 0.3s ease;
  z-index: 1;
  background: none;
  padding: 0;

  ${CategoryCardStyled}:hover & {
    writing-mode: horizontal-tb;
    transform: translate(-50%, -50%) rotate(0deg);
    white-space: normal;
  }
`;

const AccordionContent = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  display: none;
  z-index: 2;
  top: 60%;
  bottom: 40%;

 ${CategoryCardStyled}:hover & {
    display: block;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  border-radius: 5px;
`;

const CategorySection = () => {
  const navigate = useNavigate();

  const handleNavigate = (category) => {
    navigate(`/products/${category}`);
  };

  return (
    <Container>
      <Title>Categories</Title>
      <CategoryWrapper>
        {categories.map((category) => (
          <CategoryCardStyled key={category.name}>
            <CategoryCard image={category.image} />
            <CategoriText>{category.name}</CategoriText>
            <AccordionContent>
              <Button onClick={() => handleNavigate(category.name)}>Click to view</Button>
            </AccordionContent>
          </CategoryCardStyled>
        ))}
      </CategoryWrapper>
    </Container>
  );
};

export default CategorySection;
