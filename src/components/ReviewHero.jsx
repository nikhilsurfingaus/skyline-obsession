import { useState, useEffect  } from 'react';
import { auth, db, provider } from './BaseFire';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import Modal from 'react-modal'
import closeModal from '../assets/logos/close.svg'
import './ReviewHero.css'
import {IoMdCreate} from 'react-icons/io'
import {AiOutlineLogin} from 'react-icons/ai'

import { collection, doc, setDoc, getDocs, query, where } from 'firebase/firestore';

import {ReactNotifications} from 'react-notifications-component';
import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import {BiLogoFirebase} from 'react-icons/bi'

const ReviewHero = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // eslint-disable-next-line 
  const [userEmail, setUserEmail] = useState('');

  Modal.setAppElement("#root");

  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const SignIn = () => {
    signInWithPopup(auth, provider).then((data) => {
      localStorage.setItem('email', data.user.email ?? '');
      setIsLoggedIn(true);
      setUserEmail(data.user.email ?? '')
      console.log("User Email:", data.user.email ?? '');
    }).catch(() => {
      setIsLoggedIn(false);
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(user ? true : false);
    });
    return () => unsubscribe();
  }, [setIsLoggedIn]);

  // State variables for form input values
  const [name, setName] = useState('');
  const [stars, setStars] = useState(1); // Default value
  const [comment, setComment] = useState('');

  const PostReview = async (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

      // Check if any field is blank
    if (name === '' || stars === '' || comment === '') {
      alert('Please fill in all fields.');
      return; // Stop further execution
    }
    try {
      // Check if review with the same name exists in Firestore
      const reviewsRef = collection(db, 'reviews');
      const querySnapshot = await getDocs(query(reviewsRef, where('name', '==', name)));
  
      if (!querySnapshot.empty) {
        // Review with the same name already exists
        alert('A review with this name already exists.');
        setName('');
      } else {
        // Review with the same name does not exist, create a new review
        const reviewData = {
          name: name,
          stars: parseInt(stars),
          comment: comment,
        };
  
        await setDoc(doc(reviewsRef), reviewData);
  
        // Close the modal after submitting
        handleCloseModal();
        console.log("Review posted:", reviewData);
  
        // Reset form input values
        setName('');
        setStars(1);
        setComment('');

        //Show On Screen Review Posted
        Store.addNotification({
          title: 'Success',
          message: 'Your Review Has Been Posted!',
          type: 'success',
          insert: 'top',
          container: 'center',
          animationIn: ['animate__animated', 'animate__fadeIn'],
          animationOut: ['animate__animated', 'animate__fadeOut'],
          dismiss: {
            duration: 5000,
            onScreen: true
          }
        });
      }
    } catch (error) {
      console.error("Error posting review:", error);
    }
  };
  

  return (
    <div className='top' style={{ background: 'black', height: '30vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1 style={{ fontSize: '3.5rem' }} className='revTitle mt-5 md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
        REVIEWS
      </h1>
      <div className='fire'>
        <span>Powered By Firebase <BiLogoFirebase style={{color: 'orange', fontSize: '1.2rem'}} className='mb-1' /> </span>
      </div>
      <div style={{ marginTop: '30px' }}>
        {isLoggedIn ? (
          <div>
            <ReactNotifications />
            <button onClick={handleOpenModal} className='btn btn-primary'><span>Create Post</span> <IoMdCreate className='mb-1' /> </button>
            <Modal
              isOpen={showModal}
              onRequestClose={handleCloseModal}
              style={{
                content: {
                  backgroundColor: "#1A64BA",
                  borderRadius: "20px",
                  color: "#9f9f9f",
                  padding: "30px",
                  display: "flex",
                  flexDirection: "column",
                  width: "400px",
                  top: "50%",
                  left: "50%",
                  right: "auto",
                  bottom: "auto",
                  marginRight: "-50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: "1000",
                },
              }}
            >
              <img src={closeModal} className="closeMenu closeModal" onClick={handleCloseModal} alt="Close"></img>
              <h3 className="modalTitle">New Review</h3>
              <form className="review-form text-white">
                <label htmlFor="name" className="form-label">Name:</label>
                <input
                  type="text"
                  id="name"
                  className="form-control mb-3"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="stars" className="form-label">Stars (1-10):</label>
                <select
                  id="stars"
                  className="form-control mb-3"
                  value={stars}
                  onChange={(e) => setStars(e.target.value)}
                >
                  {Array.from({ length: 10 }, (_, index) => index + 1).map(value => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </select>

                <label htmlFor="comment" className="form-label">Comment:</label>
                <textarea
                  id="comment"
                  className="form-control mb-3"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>

                <div className="d-flex justify-content-center gap-3 mt-3">
                  <button onClick={(e) => PostReview(e)} className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </Modal>
          </div>
        ) : (
          <button onClick={SignIn} className='btn btn-primary'>           
           <span>Login To Create Post <AiOutlineLogin className='mb-1' /></span> 
          </button>
        )}
      </div>
    </div>
  );
};

export default ReviewHero;
