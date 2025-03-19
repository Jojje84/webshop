import styled from 'styled-components'
import React from 'react'

const Container = styled.div`

`
const Image = styled.img`

`
const Info = styled.div`

`
const Title = styled.h1`

`
const Button = styled.button`

`

const CategoriesItem = ({ item }) => {
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

export default CategoriesItem