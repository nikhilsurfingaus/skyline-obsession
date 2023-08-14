import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './BaseFire'; // Assuming you have imported the db instance from your BaseFire.js
import ReviewCard from './ReviewCard';
import './ReviewMain.css'

const ReviewMain = () => {
  const reviewsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const reviewsRef = collection(db, 'reviews');
        const querySnapshot = await getDocs(reviewsRef);
        const reviewData = querySnapshot.docs.map(doc => doc.data());
        setReviews(reviewData);
      } catch (error) {
        console.error('Error loading reviews:', error);
      }
    };

    loadReviews();
  }, []);

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  // Sort reviews by stars in descending order
  const sortedReviews = [...currentReviews].sort((a, b) => b.stars - a.stars);

  return (
    <div style={{ background: 'black', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div className='holder' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center',  marginTop: '100px', width: '80%' }}>
        {sortedReviews.map((review, index) => (
          <ReviewCard
            key={index}
            name={review.name}
            stars={review.stars}
            comment={review.comment}
          />
        ))}
      </div>
      <div className='mb-5 mt-4'>
        {/* Pagination controls */}
        <button className='btn btn-primary me-2' onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        <button className='btn btn-primary' onClick={() => setCurrentPage(currentPage + 1)} disabled={currentReviews.length < reviewsPerPage}>Next</button>
      </div>
    </div>
  );
};

export default ReviewMain;
