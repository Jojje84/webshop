import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { getProductsByCategory } from '../data/products'
import { useEffect } from 'react'; 

const Container = styled.div`

`;


const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

`;

const ImgContainer = styled.img`
    width: 50%;
    height: 50vh;
    object-fit: cover;
`;


const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;


const AddContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const RemoveIcon = styled.i`
    cursor: pointer;
    font-size: 30px;
    margin-right: 10px;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const AddIcon = styled.i`
    cursor: pointer;
    font-size: 30px;
    margin-left: 10px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.5s ease;
    &:hover{
        background-color: green;
    }
`;


const Products = () => {
    const { categoryName } = useParams();
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [amount, setAmount] = useState(1); 

    useEffect(() => {
        const products = getProductsByCategory(categoryName);
        setCategoryProducts(products);  
    }, [categoryName]); 

    if (categoryProducts.length === 0) {
        return <div>Inga produkter hittades för denna kategori.</div>;  
    }

    return (
        <Container>
            <Wrapper>
            {categoryProducts.map((product) => (
          <div key={product.id}>
                <ImgContainer src={product.img} alt={product.title} />
                <InfoContainer>
                <Title>{product.title}</Title>
                        <Desc>{product.desc}</Desc>
                        <Price>{product.price} kr</Price>
                        <AddContainer>
                        <AmountContainer>
                        <RemoveIcon onClick={() => setAmount(amount - 1)}>-</RemoveIcon>
                                <Amount>{amount}</Amount>
                                <AddIcon onClick={() => setAmount(amount + 1)}>+</AddIcon>
                        </AmountContainer>
                        <Button>Add to Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </div>
        ))}
            </Wrapper>
        </Container>
    );
};

export default Products