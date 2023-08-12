import ReviewHero from '../ReviewHero'
import ReviewMain from '../ReviewMain'
import ScrollToTop from "react-scroll-to-top";

const Reviews = () => {
  return (
    <>
      <ScrollToTop smooth color="#1A64BA " />
      <ReviewHero />
      <hr className="glowing-hr" /> 
      <ReviewMain />
      <hr className="glowing-hr" /> 
    </>
  )
}

export default Reviews