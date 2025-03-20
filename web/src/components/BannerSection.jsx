import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    height: 20vh;
    width: 100%;
    background-color: teal;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    border-radius: 25px;
    flex-direction: column;


`
const Title = styled.h1`
    font-size: 50px;
    margin: 1px;
`;

const Desc = styled.p`
    font-size: 20px;
`;

const BannerSection = () => {
    return (
        <Container>
            <Title>Surprise</Title>
            <Desc>10% off all products only menbers</Desc>
        </Container>
    )
}

export default BannerSection