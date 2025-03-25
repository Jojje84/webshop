import React from 'react'
import Navbar from '../components/Navbar'
import BannerSection from '../components/BannerSection'
import HeroSection from '../components/HeroSection'
import NewsSection from '../components/NewsSection'
import CategorySection from '../components/CategorySection'
import Popup from '../components/Popup'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import InfoSection from '../components/InfoSection'
/* import Products from '../components/Products' */


const HomeContainer = styled.div`
  max-width: 1920px;
  max-height: 1080px;
  margin: 0 auto;
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
        <Popup onClose={() => setIsOpen(false)} size="small">
          
          <BannerSection />
        </Popup>
      )}
      <Navbar />
      <HeroSection />
      <NewsSection/>
      <CategorySection />
      {/* <Products /> */}
      <InfoSection />
      <Newsletter />
      <Footer />
    </HomeContainer>
  )
}

export default Home