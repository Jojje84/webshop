import React from 'react'
import styled from 'styled-components'
import CategorySection from '../components/CategorySection'

const Container = styled.div`

`;

const Title = styled.h1`
    margin: 20px;

`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;

`;

const Filter = styled.div`
    margin: 20px;

`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;

`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;

`;

const Option = styled.option`

`;

const CategoryList = () => {
    return (
        <Container>
            <Title>Categorys</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Categorys</FilterText>
                    <Select>
                        <Option disabled>Choose</Option>
                        <Option>Abstrasc</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sorts Products</FilterText>
                    <Select>
                        <Option disabled>Choose</Option>
                        <Option>Price: Low to High</Option>
                        <Option>Price: High to Low</Option>
                        <Option>Newest</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <CategorySection />
        </Container>
    )
}

export default CategoryList