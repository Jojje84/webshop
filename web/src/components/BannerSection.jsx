import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    height: 200px;
    background-color: teal;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    border-radius: 25px;
    padding: 20px;


`;

const Title = styled.h1`
    font-size: 40px;
    margin: 5px;
`;

const Desc = styled.p`
    font-size: 20px;
`;

const BannerSection = ({ title = "Surprise", description = "10% off all products only members" }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Desc>{description}</Desc>
        </Container>
    )
}

export default BannerSection