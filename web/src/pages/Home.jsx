import React from 'react'
import Navbar from '../components/Navbar'
import BannerSection from '../components/BannerSection'
import Carousel from '../components/Carousel'
import ProductCategories from '../components/ProductCategories'
import NewsCard from '../components/Newscard'

const Home = () => {
  return (
    <div>
      <BannerSection />
      <Navbar />
      <Carousel />
      <NewsCard />
      <ProductCategories />
    </div>
  )
}

export default Home