import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import { fetchProducts } from "../services/productService"

const Container = styled.div`

`;


const Wrapper = styled.div`
    padding: 50px;
    display: flex;

`;

const ImgContainer = styled.img`
    flex: 1;
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
    const [amount, setAmount] = useState(1);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetchProducts().then((data) => {
            setProduct(data[0]); // Använd första produkten som exempel
        });
    }, []);

    const increaseAmount = () => {
        setAmount(amount + 1);
    };

    const decreaseAmount = () => {
        if (amount > 1) {
            setAmount(amount - 1);
        }
    };
    return (
        <Container>
            <Wrapper>
                <ImgContainer src={product.image} alt={product.name} />
                <InfoContainer>
                    <Title>Product Title</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illum debitis itaque odit eum distinctio blanditiis, mollitia in modi ratione nobis exercitationem animi hic inventore vel praesentium aperiam omnis. Quas?</Desc>
                    <Price>100 kr</Price>
                    <AddContainer>
                        <AmountContainer>
                            <RemoveIcon onClick={decreaseAmount}>-</RemoveIcon>
                            <Amount>1</Amount>
                            <AddIcon onClick={increaseAmount}>+</AddIcon>
                        </AmountContainer>
                        <Button>Add to Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
        </Container>
    );
};

export default Products