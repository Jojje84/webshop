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
    margin: 30px 0 0 0;
    width: 100%; 
    
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
    max-width: 90%;
   
`;
const NewsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 0 20px;
    width: 100%;
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
        <Popup onClose={() => setSelectedNews(null)}>
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