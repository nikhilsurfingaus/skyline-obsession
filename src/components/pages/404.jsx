import Lottie from 'lottie-react';
import Error from './../../assets/animation/ErrorPage404.json';

const PageNotFound = () => {
  return (
    <div style={{height: '100vh', background: 'black'}}>
        <Lottie animationData={Error} style={{ height: '100%' }} />
    </div>
  )
}

export default PageNotFound
