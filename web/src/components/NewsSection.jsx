import React from 'react'
import NewsCard from './NewsCard'
import { news } from '../data' 
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px 0 30px 0;
    
`;

const Headline = styled.div`
    width: 90%;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0 0 20px 0;
    padding: 10px;
    background-color: #ff9999;
    color: white;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const NewsWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 30px 0 30px;

`;

const NewsSection = () => {
    return (
        <Container>
          <Headline>NEWS</Headline>
          <NewsWrapper>
            {news.map(item => (
              <NewsCard key={item.id} item={item} />
            ))}
          </NewsWrapper>
        </Container>
      );
};

export default NewsSection