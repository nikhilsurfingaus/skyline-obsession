import React from 'react';
import nisson from '../assets/video/blender.mp4';
import './AboutHero.css';

const AboutHero = () => {
  return (
    <div style={{ height: '100vh', background: 'black' }}>
      <div className='text-white m-0 p-0 relative main z-0 animate__animated animate__fadeIn' style={{ height: '50vh', position: 'relative' }}>
        <div className='overlay h-screen'></div>
        <video src={nisson} autoPlay loop muted className='video' style={{ width: '100%', height: '100%' }} />
        <div className='content max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2 }}>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 head'>ABOUT US</h1>
        </div>
      </div>
      <div className="mid" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '40vh' }}>
        <div className='blue-card'>
          <p className='white-text'>
          Welcome to our platform dedicated to the legendary Nissan Skyline R34 GTR! Our mission is to celebrate the rich history and unmatched performance of this iconic car that has captured the hearts of enthusiasts worldwide. Through engaging content, captivating photos, and insightful community reviews, we aim to create a hub where fans can immerse themselves in the captivating journey of the Nissan Skyline R34 GTR. Whether you're a history buff, a photography enthusiast, or simply someone who appreciates automotive excellence, our site is here to provide you with a comprehensive and passionate exploration of this automotive masterpiece.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
