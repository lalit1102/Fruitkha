import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import OurProducts from '../components/OurProducts'
import FeaturedProducts from '../components/FeaturedProducts'
import About from '../components/About'
import SpecialOffer from '../components/SpecialOffer'
import Testimonials from '../components/Testimonials'
// import Contact from '../components/Contact'
import Footer from '../components/Footer'
import LogoCarousel from '../components/LogoCarousel'

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <OurProducts />
      <FeaturedProducts />
      <About />
      <SpecialOffer />
      <Testimonials />
      {/* <Contact /> */}
      <LogoCarousel />
      <Footer />
    </div>
  )
}

export default Home