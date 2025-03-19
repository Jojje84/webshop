import styled from 'styled-components'
import React from 'react'
import CategoryCard from './CategoryCard'
import { categories } from '../data'

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`

const Categories = () => {
  return (
    <Container>
      {categories.map(item => (
        <CategoryCard item={item} />
      ))}
    </Container>
  );
}

export default Categories