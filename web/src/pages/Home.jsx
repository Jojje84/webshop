import React from 'react'
import Navbar from '../components/Navbar'
import BannerSection from '../components/BannerSection'
import Carousel from '../components/Carousel'
import NewsList from '../components/NewsList'
import CategoryList from '../components/CategoryList'
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
      <Carousel />
      <NewsList/>
      <CategoryList />
    </div>
  )
}

export default Home