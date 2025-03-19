import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;

`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    
    
`
const Title = styled.h1`

`
const Button = styled.button`

`

const CategoryCard = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <button>Go to</button>
            </Info>

        </Container>
    )
}

export default CategoryCard