import React from 'react';
import Review from './Review.jsx';

const ReviewList = (props) => {
  let reviews = props.reviews;
  if (reviews) {
    reviews = reviews.map((review) => (
      <Review voteClick={props.voteClick} review={review} />
    ));
  }

  return (
    <div className="review-List">
      {reviews}
    </div>
  );
};
export default ReviewList;
