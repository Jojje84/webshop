import React from 'react'
import NewsCard from './NewsCard'
import { news } from '../data' 
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`

const NewsList = () => {
    return (
        <Container>
          {news.map(item => (
            <NewsCard key={item.id} item={item} />
          ))}
        </Container>
      );
};

export default NewsList
