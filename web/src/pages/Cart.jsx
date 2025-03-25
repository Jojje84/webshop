import React from 'react'
import style from 'styled-components'

const Container = style.div`

`;

const Wrapper = style.div`
    padding: 20px;
`;

const Title = style.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = style.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = style.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};

`;

const TopTexts = style.div`

`;

const TopText = style.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;

`;

const Bottom = style.div`
    display: flex;
    justify-content: space-between;


`;

const Info = style.div`
    flex: 3;
`;

const Product = style.div`
    display: flex;
    justify-content: space-between;

`;

const ProductDetail = style.div`
    flex: 2;
    display: flex;
`;

const Image = style.img`
    width: 200px;
`;

const Details = style.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = style.span`

`;

const ProductId = style.span`

`;

const ProductColor = style.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};

`;

const ProductSize = style.span`

`;

const PriceDetail = style.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = style.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;



const ProductAmount = style.span`
    font-size: 24px;
    margin: 5px;

`;



const ProductPrice = style.span`
    font-size: 30px;
    font-weight: 200;
`;


const Summary = style.div`
    flex: 1;

`;



const Cart = () => {
  return (
    <Container>
        <Wrapper>
            <Title>YOUR PRODUCTS</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag (2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled">PROCEED TO CHECKOUT</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                    <ProductDetail>
                        <Image src="/demo.png" alt="demo"/>
                        <Details>
                            <ProductName>
                                <b>Product:</b> JESSIE THUNDER SHOES
                            </ProductName>
                            <ProductId>
                                <b>ID:</b> 93813718293
                            </ProductId>
                            <ProductColor color="black"/>
                            <ProductSize>
                                <b>Size:</b> 37.5
                            </ProductSize>
                        </Details>
                    </ProductDetail>
                    </Product>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <AddIcon onClick={increaseAmount}/>
                            <ProductAmount>{amount}</ProductAmount>
                            <RemoveIcon onClick={decreaseAmount}/>
                        </ProductAmountContainer>
                        <ProductPrice>$ 30</ProductPrice>
                    </PriceDetail>
                </Info>
                <Summary>Summary</Summary>
            </Bottom>
        </Wrapper>
    </Container>
  )
}

export default Cart