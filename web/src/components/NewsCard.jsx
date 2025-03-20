import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    width: 300px;
    height: 400px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 8px;
`;

const Image = styled.img`
    width: 100%;
    height: 60%;
    object-fit: cover;
    border-radius: 8px;
`;

const Title = styled.h2`
    font-size: 20px;
    margin: 10px 0;
`;

const Desc = styled.p`
    font-size: 14px;
    color: #555;
`;

const NewsCard = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <Title>{item.title}</Title>
            <Desc>{item.desc}</Desc>
        </Container>
    );
};

export default NewsCard