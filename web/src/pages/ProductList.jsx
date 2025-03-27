import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { categories } from '../data/categories'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getProductsByCategory } from '../data/products'
import Product from '../components/Product'




const Container = styled.div`
    padding: 20px;
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


const Option = styled.option``;

const ProductList = ({ selectedCategory, sortOrder, setSelectedCategory, setSortOrder  }) => {
    const [categoryProducts, setCategoryProducts] = useState([]);

    useEffect(() => {

        if (!selectedCategory) {
            setCategoryProducts([]);
            return;
        }
        let filteredProducts = getProductsByCategory(selectedCategory);


        if (filteredProducts.length === 0) {
        }
    

    if (sortOrder === 'priceLowToHigh') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'priceHighToLow') {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortOrder === 'newest') {
        filteredProducts.sort((a, b) => b.id - a.id);
    }
    setCategoryProducts(filteredProducts);
}, [selectedCategory, sortOrder]);

const handleSortChange = (e) => {
    setSortOrder(e.target.value); 
}

    return (
        <Container>
            <Title>Categorys</Title>
            <FilterContainer>
            <Filter>
            <FilterText>Filter Categories</FilterText>
                    <Select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
                        <Option value="">Choose Category</Option>
                        {categories.map((category) => (
                            <Option key={category.id} value={category.title.toLowerCase()}>
                                {category.title}
                            </Option>
            ))}
          </Select>
            </Filter>
                <Filter>
                    <FilterText>Sorts Products</FilterText>
                    <Select onChange={handleSortChange} value={sortOrder}>
            <Option value="">Choose Sort</Option>
            <Option value="priceLowToHigh">Price: Low to High</Option>
            <Option value="priceHighToLow">Price: High to Low</Option>
            <Option value="newest">Newest</Option>
          </Select>
                </Filter>
            </FilterContainer>

             {categoryProducts.length === 0 ? (
                <div>No products found for this category.</div>
            ) : (
                <div>
                    {categoryProducts.map((product) => (
                        <Product key={product.id} item={product} />
                    ))}
                </div>
            )}
        </Container>
    )
}

export default ProductList