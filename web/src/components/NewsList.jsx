import React from 'react'
import NewsCard from './NewsCard'
import { news } from '../data' 
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    
`;

const Headline = styled.div`
    width: 200px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 20px;
    padding: 10px 20px;
    background-color: #ff9999;
    color: white;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const CardsWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 30px 0 30px;

`;

const NewsList = () => {
    return (
        <Container>
          <Headline>NEWS</Headline>
          <CardsWrapper>
            {news.map(item => (
              <NewsCard key={item.id} item={item} />
            ))}
          </CardsWrapper>
        </Container>
      );
};

export default NewsList