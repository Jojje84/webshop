import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: 10px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;

`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px 25px 0 0;
`;

const Info = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 2px solid #f5f5f5;
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
    margin: 20px;
`;

const NewsCard = ({ item }) => {
    return (
        <Container>
            <Img src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
            </Info>
        </Container>
    );
};

export default NewsCard