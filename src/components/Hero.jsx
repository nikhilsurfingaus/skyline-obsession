import React from 'react'
import Typewriter from "typewriter-effect";
import nisson from '../assets/video/loop.mp4'
import './Hero.css'
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <div className='text-white m-0 p-0 relative main z-0 animate__animated animate__fadeIn' id='home'>
        <div className="overlay h-screen"></div>
       <video src={nisson} autoPlay loop muted className="video" />

      <div className='content max-w-[800px] mt-[-70px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 head'>
         R34 SKYLINE GTR
        </h1>
        <div className='flex justify-center items-center'>
          <h3 style={{fontSize: "3.5rem", color: "white"}}>
              <Typewriter
                  options={{
                    strings: [
                      "Godzilla",
                      "Blue Devil", "RB26DETT", "BNR34"
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
            </h3>
        </div>
        <Link
          to='background'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
        <button
        className="bg-white font-medium my-6 mx-auto py-3 text-black mt-3"
        style={{
        width: '200px',
        transition: 'background-color 0.3s, color 0.3s, border-color 0.3s',
        borderRadius: '10px',
        fontWeight: 'bold',
        }}
        >
        エンジンオン
        </button>
        </Link>
      </div>
    </div>
    )
}

export default HeroSection