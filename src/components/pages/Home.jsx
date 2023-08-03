import React from 'react'
import HeroSection from '../Hero'
import AnimateSection from '../AnimateSection'
import Summary from '../Summary'
import ScrollToTop from "react-scroll-to-top";
import useScrollSnap from "react-use-scroll-snap";
import { useRef } from "react";

const Home = () => {
  const scrollRef = useRef(null);
  // eslint-disable-next-line
  const scrollIndex = useScrollSnap({
    ref: scrollRef,
    duration: 20,
    delay: 0
  });

  return (
    <>
      <ScrollToTop smooth color="#1A64BA " />
      <div ref={scrollRef}>
        <HeroSection />
        <AnimateSection />
        <Summary />
      </div>
    </>
  )
}

export default Home