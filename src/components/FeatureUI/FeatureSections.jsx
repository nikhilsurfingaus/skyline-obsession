import './FeatureSections.css';
import { GoLinkExternal } from 'react-icons/go';
import { Slide } from "react-awesome-reveal";

const FeatureSections = ({ title, text, image, flip, link }) => {
  const flexDirection = flip ? 'row-reverse' : 'row';
  const slideDirection = flip ? 'right' : 'left';

  return (
    <div className="featured-container">
      <div className="featured-content" style={{ flexDirection }}>
        <div className="featured-image">
          <Slide direction={slideDirection}>
            <img src={image} alt="Featured" className="featured-image" />
          </Slide>
        </div>
        <div className="featured-text">
          <h2>{title}</h2>
          <p>{text}</p>
          <a href={link} target="_blank" rel="noopener noreferrer" className='btn btn-primary'>
            <span>Learn More <GoLinkExternal style={{ color: 'white' }} className='mb-1 white-icon' /></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeatureSections;
