import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    width: 300px;
    height: 500px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    transition: all 0.2s ease;
    border-radius: 25px;
    background-color: white;

    &:hover {
        border-color: #ff9999;
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
        transform: scale(1.02);
  }
    
`;

const Img = styled.img`
    width: 100%;
    height: 70%;
    object-fit: cover;
    border-radius: 25px 25px 0 0;
`;

const Info = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: inset 0 0 5px rgba(0,0,0,0.05);
    border-radius: 0 0 25px 25px;
    align-items: center;
    justify-content: center;

`;

const Title = styled.h2`
    font-size: 30px;
    margin: 20px 0;
    text-align: center;
`;

const Desc = styled.p`
    font-size: 14px;
    color: #555;
    text-align: center;
    margin: 10px;
`;

const NewsCard = ({ item , onClick }) => {
    return (
        <Container onClick={onClick}>
            <Img src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Desc>{item.desc.substring(0, 70)}...</Desc>
            </Info>
        </Container>
    );
};

export default NewsCard