import { useState } from 'react';

const ReviewHero = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div style={{ background: 'black', height: '30vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1 style={{ fontSize: '3.5rem' }} className='mt-5 md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
        REVIEWS
      </h1>
      <div style={{ marginTop: '50px' }}>
        {isLoggedIn ? (
          <button className='btn btn-primary'>Create Post +</button>
        ) : (
          <button className='btn btn-primary'>Login To Create Post</button>
        )}
      </div>
    </div>
  );
};

export default ReviewHero;
