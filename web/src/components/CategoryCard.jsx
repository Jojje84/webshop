import styled from 'styled-components'
import React from 'react'




const Container = styled.div`
    flex: 1;
    margin: 10px;
    max-width: 300px; 
    height: 300px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
        
`;

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;

`;

const CategoryCard = ({  item, onCategoryClick  }) => {
    const handleClick = () => {
        if (typeof onCategoryClick === 'function') {
          onCategoryClick(item.title);
        }
      };

    return (
        <Container>
            <Img src={item.img} alt={item.title} />
            <Info>
                <Title>{item.title}</Title>
                <Button  onClick={handleClick}>Click in</Button>
            </Info>
        </Container >

    )
}

export default CategoryCard