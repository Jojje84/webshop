import React from 'react'
import Navbar from '../components/Navbar'
import BannerSection from '../components/BannerSection'
import HeroSection from '../components/HeroSection'
import NewsSection from '../components/NewsSection'
import Popup from '../components/Popup'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import InfoSection from '../components/InfoSection'
import CategorySection from '../components/CategorySection'
import ProductList from './ProductList'



const HomeContainer = styled.div`
  max-width: 1920px;
  max-height: 1080px;
  margin: 0 auto;
`;

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HomeContainer>
      <Navbar onCategoriesClick={() => setShowCategories(true)} />

      {isOpen && (
        <Popup onClose={() => setIsOpen(false)}>
          <BannerSection />
        </Popup>
      )}
      {showCategories && !selectedCategory && (
        <Popup onClose={() => setShowCategories(false)}>
        <CategorySection onCategoryClick={setSelectedCategory} />
        </Popup>
      )}

      {selectedCategory && (
        <Popup onClose={() => setSelectedCategory(null)}>
          <ProductList selectedCategory={selectedCategory} />
        </Popup>
      )}


      <HeroSection onOpenCategories={() => setShowCategories(true)}/>
      <NewsSection/>
      <CategorySection onCategoryClick={setSelectedCategory}/>
      <InfoSection />
      <Newsletter />
      <Footer />
    </HomeContainer>
  )
}

export default Home