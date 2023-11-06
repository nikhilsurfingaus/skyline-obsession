import React from 'react'
import HeroSection from '../HeroUI/Hero'
import AnimateSection from '../AnimateUI/AnimateSection'
import Summary from '../SummaryUI/Summary'
import ScrollToTop from "react-scroll-to-top";

const Home = () => {

  return (
    <>
      <ScrollToTop smooth color="#1A64BA " />
      <div >
        <HeroSection />
        <hr className="glowing-hr" style={{marginTop: '-10px'}} /> 
        <AnimateSection />
        <hr className="glowing-hr" /> 
        <Summary />
        <hr className="glowing-hr" /> 
      </div>
    </>
  )
}

export default Home