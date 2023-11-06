import nisson from '../../assets/video/featured/feat1.mp4';
import '../AboutUI/AboutHero.css';
import { Slide } from "react-awesome-reveal";

const FeatureHero = () => {
  return (
    <div style={{ height: '100vh', background: 'black' }}>
      <div className='text-white m-0 p-0 relative main z-0 animate__animated animate__fadeIn' style={{ height: '50vh', position: 'relative' }}>
        <div className='overlay h-screen'></div>
        <video src={nisson} playsInline autoPlay loop muted className='video' style={{ width: '100%', height: '100%' }} />
        <div className='content max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2 }}>
          <h1 className='animate__animated animate__fadeIn md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 head'>FEATURED CARS</h1>
        </div>
      </div>
      <div className="mid" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '40vh' }}>
        <Slide direction='up'>
          <div className='blue-cardf'>
            <p className='white-textf'>
            Step into our Featured Cars section, where we pay homage to the illustrious Nissan Skyline R34 GTR! Here, we celebrate the iconic status of this legendary vehicle that has left an indelible mark on the automotive world. From its unforgettable appearances in movies to its revered place in the hearts of influencers and enthusiasts alike, the R34 GTR's story unfolds. Join us as we delve into its rich history, captivating stories, and unparalleled performance, creating a space where the essence of this automotive marvel truly comes to life. Welcome to a curated showcase of the R34 GTR's enduring charm and lasting impact.
            </p>
          </div>
        </Slide>
      </div>
    </div>
  )
}

export default FeatureHero