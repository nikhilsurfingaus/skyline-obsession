import FeatureHero from '../FeatureUI/FeatureHero'
import FeaturedCars from '../FeatureUI/FeaturedCars';
import ScrollToTop from "react-scroll-to-top";

const Photos = () => {
  return (
    <div style={{background: 'black', height: '100%'}}>
      <ScrollToTop smooth color="#1A64BA " />
      <FeatureHero />
      <hr className="glowing-hr" /> 
      <FeaturedCars />
    </div>
  )
}

export default Photos