const ReviewCard = ({ name, stars, comment }) => {
    return (
      <div style={{ width: '30%', background: '#1A64BA', color: 'white', padding: '20px', borderRadius: '8px', margin: '10px', display: 'flex', flexDirection: 'column' }}>
        <h2>{name}</h2>
        <div style={{ display: 'flex', marginBottom: '10px' }}>
          {Array.from({ length: stars }).map((_, index) => (
            <span key={index}>&#9733;</span>
          ))}
        </div>
        <p>{comment}</p>
      </div>
    );
  };
  
  export default ReviewCard;