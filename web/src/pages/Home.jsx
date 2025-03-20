import React from 'react'
import Navbar from '../components/Navbar'
import BannerSection from '../components/BannerSection'
import HeroSection from '../components/HeroSection'
import NewsSection from '../components/NewsSection'
import CategorySection from '../components/CategorySection'
import Popup from '../components/Popup'
import { useEffect, useState } from 'react'
import styled from 'styled-components'


const HomeContainer = styled.div`
  height: 100%;
  width: 100wh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
  border-radius: 25px;
  justify-content: center;
  box-sizing: border-box;
  margin: 10%;
  overflow-y: hidden;
  box-shadow: 2px 2px 50px rgb(104, 103, 103), -2px -2px 50px rgb(104, 103, 103);
`;

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000); // Popup visas efter 1 sekund

    return () => clearTimeout(timer);
  }, []);

  return (
    <HomeContainer>
      {isOpen && (
        <Popup onClose={() => setIsOpen(false)}>
          <BannerSection />
        </Popup>
      )}
      <Navbar />
      <HeroSection />
      <NewsSection/>
      <CategorySection />
    </HomeContainer>
  )
}

export default Home