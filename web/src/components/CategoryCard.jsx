import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
    Width: 100%;
    height: 100%;
    margin: 10px;
    display: flex;
    flex-direction: column;
    position: relative;

`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50px;

`;

const Info = styled.div`
    height: 100%;
    width:100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    align-items: center;
    justify-content: center;   
    background-color: rgba(247, 248, 247, 0.88);
    border-radius: 25px;
        
`;

const Title = styled.h1`
    font-size: 30px;
    margin: 20px 0;
    text-align: center;
`;

const Button = styled.button`

`;

const CategoryCard = ({ item }) => {
    return (
        <Container>
            <Img src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <button>Look</button>
            </Info>

        </Container>
    )
}

export default CategoryCard