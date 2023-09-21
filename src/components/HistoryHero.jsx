import React from 'react';
import nisson from '../assets/video/herohistory.mp4';
import './HistoryHero.css';
import { Slide } from "react-awesome-reveal";

const HistoryHero = () => {
  return (
    <div style={{ height: '100vh', background: 'black' }}>
      <div className='text-white m-0 p-0 relative main z-0 animate__animated animate__fadeIn' style={{ height: '50vh', position: 'relative' }}>
        <div className='overlay h-screen'></div>
        <video src={nisson} playsInline  autoPlay loop muted className='video' style={{ width: '100%', height: '100%', WebkitMediaControls: 'display(none)' }} />
        <div className='content max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2 }}>
          <h1 className='animate__animated animate__fadeIn md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 head'>HISTORY</h1>
        </div>
      </div>
      <div className="mid" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '40vh' }}>
        <Slide direction='up'>
          <div className='blue-card'>
            <p className='white-text'>
            Embark on an immersive journey through the illustrious history of the R34 Skyline GT-R on our platform. Unveil the evolution of each model, from its inception to its transformation into an automotive legend. Explore how each iteration's innovations, engineering prowess, and distinctive design have seamlessly woven together to forge the iconic R34 GT-R, captivating generations of enthusiasts and leaving an indelible mark on automotive history.
            </p>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default HistoryHero;
