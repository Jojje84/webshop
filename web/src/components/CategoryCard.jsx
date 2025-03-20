import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 20vh;
    position: relative;

`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

`;

const Info = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 25%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;   
    background-color: rgba(247, 248, 247, 0.88);
    flex-direction: column;
    border-radius: 25px;
        
`;

const Title = styled.h1`
    font-size: 20px;
`;

const Button = styled.button`

`;

const CategoryCard = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <button>Look</button>
            </Info>

        </Container>
    )
}

export default CategoryCard