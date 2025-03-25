import React from 'react'
import NewsCard from './NewsCard'
import { news } from '../data'
import styled from 'styled-components'
import Popup from './Popup'
import { useState } from 'react'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px;
    flex-grow: 0;
    width: 100%;
    margin: 30px 0 0 0;
    
    
`;

const Headline = styled.div`
    width: 100%;
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
    box-sizing: border-box;
    z-index: 1;
   
`;
const NewsWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 30px 0 30px;
    flex-grow: 0;
    width: 100%;
    min-height: 300px;
    
`;


const NewsSection = () => {
  const [selectedNews, setSelectedNews] = useState(null);
  return (
    <Container>
      <Headline>NEWS</Headline>
      <NewsWrapper>
        {news.map(item => (
          <NewsCard key={item.id} item={item} onClick={() => setSelectedNews(item)} />
        ))}
      </NewsWrapper>
      {selectedNews && (
        <Popup onClose={() => setSelectedNews(null)} size="medium">
          <div style={{ padding: "20px", textAlign: "center" }}>
            <h2>{selectedNews.title}</h2>
            <img
              src={selectedNews.img}
              alt={selectedNews.title}
              style={{
                width: "100%",
                maxHeight: "300px",
                objectFit: "cover",
                borderRadius: "10px",
                marginTop: "10px",
              }}
            />
            <p style={{ marginTop: "15px" }}>{selectedNews.desc}</p>
          </div>
        </Popup>
      )}
    </Container>
  );
};

export default NewsSection;