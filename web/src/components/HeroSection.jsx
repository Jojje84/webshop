import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data'
import { useState } from 'react'

const Cointainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
    margin: auto;

;`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;

`;
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props => props.$slideIndex * -100}vw);
    transition: all 1.5s ease;

`;

const Slide = styled.div`
    width: 100vw;
    height: 50%;
    display: flex;
    align-items: center;
    background-color: #${props => props.$bg};

`;

const ImgContainer = styled.div`
    flex: 1; 
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

`;


const InfoContainer = styled.div`
    flex: 1;
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-left: 50px;

`;

const Title = styled.h1`
    font-size: 70px;

`;

const Desc = styled.p`
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;

`;
const Button = styled.button`
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    width: 100px;
    margin-left: 5%;
    justify-content: center;
    align-items: center;
    text-align: center;

`;

const HeroSection = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }

    }
    return (
        <Cointainer>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper $slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide key={item.id} $bg={item.bg}>
                        <ImgContainer>
                            <img src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title} </Title>
                            <Desc>{item.desc}</Desc>
                            <Button>Look</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Cointainer>
    )
}

export default HeroSection 