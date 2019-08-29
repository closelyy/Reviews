import React, { component } from 'react';
import ReactDOM from 'react-dom';
import Review from './Review.jsx';

const ReviewList = (props) => {

    let reviews = props.reviews.map(function(review) {
      return <Review voteClick={props.voteClick} review={review}/>;
    });

    return (
      <div className ="review-List">
        {reviews}
      </div>
    )
}

export default ReviewList;