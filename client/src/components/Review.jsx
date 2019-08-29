import React from 'react';
import PropTypes from 'prop-types';

const Review = (props) => {
  const {
    ID, STARS, REVIEW_DATE, REVIEW_TEXT, USEFUL, FUNNY, COOL, user,
  } = props.review;
  // const STARS = props.review.STARS;
  // const REVIEW_DATE = props.review.REVIEW_DATE;
  // const REVIEW_TEXT = props.review.REVIEW_TEXT;
  // const USEFUL = props.review.USEFUL;
  // const FUNNY = props.review.FUNNY;
  // const COOL = props.review.COOL;
  // const user = props.review.user;
  let userPhotoIdUrl = './Pictures/default.png';
  if (user.PHOTO_ID !== 'NULL') {
    userPhotoIdUrl = ['./Pictures/', user.PHOTO_ID, '.png'].join('');
  }
  let { photos } = props.review;
  if (photos) {
    photos = props.review.photos.map((photoId) => (
      <img
        alt=""
        className="avatar"
        src={['./Pictures/', photoId, '.png'].join('')}
      />
    ));
  }
  if (photos === []) {
    photos = '';
  }
  const rating = `Rating: ${STARS} out of 5   `;
  const usefulText = `Useful: ${USEFUL}`;
  const funnyText = `Funny: ${FUNNY}`;
  const coolText = `Cool: ${COOL}`;

  return (
    <div className="reviewContainer" id={ID}>
      <div className="review-user">
        <div className="review-user-upper">
          <img
            alt=""
            className="review-user-upper-avatar"
            src={userPhotoIdUrl}
          />
          <div className="review-user-upper-info">
            <div className="review-username">{user.NAME}</div>
            <div className="review-userLocation">{user.TOWNLOC}</div>
            <div className="review-userStats">
              <div className="review-userNumber">{user.FRIENDS}</div>
               friends
            </div>
            <div className="review-userStats">
              <div className="review-userReviews">{user.REVIEWS}</div>
               reviews
            </div>
            <div className="review-userStats">
              <div className="review-userPhotos">{user.PHOTOS}</div>
               photos
            </div>
          </div>
        </div>
      </div>
      <div className="review-content">
        <div className="review-content-top">
          <div className="review-rating">{rating}</div>
          <div className="review-date">{REVIEW_DATE.slice(4, 15)}</div>
        </div>
        <div className="review-text">{REVIEW_TEXT}</div>
        <div className="review-photos">{photos}</div>
        <div className="review-votes">
          <button type="button" onClick={props.voteClick} className="review-voteButtons">
            <div reviewid={ID} className="review-vote useful">
              {usefulText}
            </div>
          </button>
          <button type="button" onClick={props.voteClick} className="review-voteButtons">
            <div reviewid={ID} className="review-vote funny">
              {funnyText}
            </div>
          </button>
          <button type="button" onClick={props.voteClick} className="review-voteButtons">
            <div reviewid={ID} className="review-vote cool">
              {coolText}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

Review.propTypes = {
  review: {
    ID: PropTypes.string.isRequired,
    STARS: PropTypes.number.isRequired,
    REVIEW_DATE: PropTypes.string.isRequired,
    REVIEW_TEXT: PropTypes.string.isRequired,
    USEFUL: PropTypes.number.isRequired,
    FUNNY: PropTypes.number.isRequired,
    COOL: PropTypes.number.isRequired,
    user: {
      NAME: PropTypes.string.isRequired,
      FRIENDS: PropTypes.number.isRequired,
      REVIEWS: PropTypes.number.isRequired,
      PHOTOS: PropTypes.number.isRequired,
      TOWNLOC: PropTypes.string.isRequired,
    }.isRequired,

  }.isRequired,
  voteClick: PropTypes.func.isRequired,
};

export default Review;
