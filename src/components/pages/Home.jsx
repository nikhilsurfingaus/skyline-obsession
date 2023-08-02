import React from 'react'
import HeroSection from '../Hero'
import AnimateSection from '../AnimateSection'
import Summary from '../Summary'
import ScrollToTop from "react-scroll-to-top";

const Home = () => {
  return (
    <div>
        <ScrollToTop smooth color="#1A64BA " />
        <HeroSection />
        <AnimateSection />
        <Summary />
    </div>
  )
}

export default Home