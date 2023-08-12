import ReviewCard from "./ReviewCard";

const ReviewMain = () => {
    return (
      <div style={{ background: 'black', height: '85vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center',  marginTop: '100px', width: '80%'  }}>
          <ReviewCard name="John Doe" stars={4} comment="Great experience! Highly recommended." />
          <ReviewCard name="Jane Smith" stars={5} comment="Best service ever! Will definitely come back." />
          <ReviewCard name="Jane Smith" stars={5} comment="Best service ever! Will definitely come back." />
          <ReviewCard name="John Doe" stars={4} comment="Great experience! Highly recommended." />
          <ReviewCard name="Jane Smith" stars={5} comment="Best service ever! Will definitely come back." />
          <ReviewCard name="Jane Smith" stars={5} comment="Best service ever! Will definitely come back." />          <ReviewCard name="John Doe" stars={4} comment="Great experience! Highly recommended." />
          <ReviewCard name="Jane Smith" stars={5} comment="Best service ever! Will definitely come back." />
          <ReviewCard name="Jane Smith" stars={5} comment="Best service ever! Will definitely come back." />        </div>
      </div>
    );
  };
  
  export default ReviewMain;