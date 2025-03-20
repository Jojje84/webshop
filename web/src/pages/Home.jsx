import React from 'react'
import Navbar from '../components/Navbar'
import BannerSection from '../components/BannerSection'
import Carousel from '../components/Carousel'
import NewsList from '../components/NewsList'
import CategoryList from '../components/CategoryList'

const Home = () => {
  return (
    <div>
      <BannerSection />
      <Navbar />
      <Carousel />
      <NewsList/>
      <CategoryList />
    </div>
  )
}

export default Home