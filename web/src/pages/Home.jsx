import React from 'react'
import Navbar from '../components/Navbar'
import BannerSection from '../components/BannerSection'
import HeroSection from '../components/HeroSection'
import NewsSection from '../components/NewsSection'
import CategorySection from '../components/CategorySection'
import Popup from '../components/Popup'
import { useEffect, useState } from 'react'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000); // Popup visas efter 1 sekund

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isOpen && (
        <Popup onClose={() => setIsOpen(false)}>
          <BannerSection />
        </Popup>
      )}
      <Navbar />
      <HeroSection />
      <NewsSection/>
      <CategorySection />
    </div>
  )
}

export default Home