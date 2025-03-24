import React from 'react'
import styled from 'styled-components'
import { Search } from '@mui/icons-material';



const Container = styled.div`
    width: 100%;
    height: 50vh;
    text-align: center;
    margin-top: 50px;

`;

const Title = styled.h1`   
    justify-content: center;
    display: flex;

`;	

const Steps = styled.div`
    display: flex;
    justify-content: spade-between;	
    flex-wrap: wrap;

`;

const Ways = styled.div`
    width: 200px;
    margin: 20px;
    text-align: center;

`;

const Input = styled.input`
    width: 50px;
    height: 50px
`;

const StepTitle = styled.h2`
    font-size: 18px;
    margon-top: 10px;

`;

const StepDesc = styled.p`
    font-size: 14px;
    margon-top: 5px;

`;

const InfoSection = () => {
  return (
    <Container>
        <Title>How to Shop in Our Webshop</Title>
        <Steps>
            <Ways>
            <Input placeholder="Search" />
                <StepTitle>1. Select Products</StepTitle>
                <StepDesc>Choose the product you want to buy</StepDesc>
            </Ways>
            <Ways>
                <Img></Img>
                <StepTitle>2. Proceed to Checkout</StepTitle>
                <StepDesc>Click on the product to see more details</StepDesc>
            </Ways>
            <Ways>
                <Img></Img>
                <StepTitle>3. Confirm your order</StepTitle>
                <StepDesc>Add the product to your cart</StepDesc>
            </Ways>
            <Ways>
                <Img></Img>
                <StepTitle>4. Fast Delivery</StepTitle>
                <StepDesc>Go to your cart and proceed to checkout</StepDesc>
            </Ways>
        </Steps>
    </Container>
  )
}

export default InfoSection