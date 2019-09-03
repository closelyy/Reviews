import React from 'react';
import PropTypes from 'prop-types';
import Review from './Review.jsx';

const ReviewList = (props) => {
  let { reviews } = props;
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

ReviewList.propTypes = {
  voteClick: PropTypes.func.isRequired,
};

export default ReviewList;
