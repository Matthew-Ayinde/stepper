import React from 'react'
import HeroSection from './HeroSection'
import TrendingSection from './TrendingSection'
import FeaturedCategories from './FeaturedSection'
import BestSellerSection from './BestSellerSection'
import BrandSection from './BrandSection'
import SpecialOffers from './SpecialOffers'
import NewsletterSection from './NewsletterSection'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedCategories />
      <TrendingSection />
      <BestSellerSection />
      <BrandSection />
      <SpecialOffers />
      <NewsletterSection />
    </div>
  )
}

export default HomePage
