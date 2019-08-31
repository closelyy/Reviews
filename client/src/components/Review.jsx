import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Review = (props) => {
  const {
    ID, STARS, REVIEW_DATE, REVIEW_TEXT, USEFUL, FUNNY, COOL, user,
  } = props.review;
  let userPhotoIdUrl = './Pictures/default.png';
  if (user.PHOTO_ID !== 'NULL') {
    userPhotoIdUrl = ['./Pictures/', user.PHOTO_ID, '.png'].join('');
  }
  let { photos } = props.review;
  console.log(photos);
  if (photos) {
    photos = props.review.photos.map((photoId) => (
      <img
        alt=""
        className="review-photo"
        src={['./Pictures/', photoId, '.png'].join('')}
      />
    ));
  }
  if (photos === []) {
    photos = '';
  }
  const Star = styled.span`
    color: orange;
  `;
  const ratingHTML = [1,2,3,4,5].map((rating) => {
    if ( rating <= Number(STARS)) {
      return (
        <Star>⭑</Star>
      );
    }
  });

  const ReviewContainer = styled.div`
    border-top: solid 1px lightgray;
    display: flex;
    max-width: 600px;
  `;

  const VoteList = styled.div`
    display: flex;
    padding-bottom: 10px;
    min-width: 400px;
    padding-left: 100px;
  `;

  const ReviewText = styled.div`
    min-width: 400px;
    font-size: 14px;
    padding-bottom: 10px;
    text-align: left;
  `;

  const ReviewDate = styled.div`
    min-width: 300px;
    text-align: right;
    font-size: 14px;
  `;

  const ReviewContentTop = styled.div`
    display: flex;
    min-width: 400px;
    font-weight: bold;
  `;

  const ReviewRating = styled.div`
    min-width: 120px;
    font-size: 14px;
    padding-bottom: 10px;
  `;

  const ReviewContent = styled.div`
    max-width: 400px;
    padding-top: 10px;
  `;

  const ReviewUser = styled.div`
    padding-top: 10px;
    min-width: 200px;
  `;

  const ReviewUserUpperAvatar = styled.img`
    width: 80px;
    height: 100%;
  `;

  const ReviewUserUpper = styled.div`
    display: flex;
  `;

  const ReviewUserUpperInfo = styled.div`
    padding: 8px;
  `;

  const ReviewUsername = styled.div`
    color: blue;
    font-size: 14px;
    font-weight: bold;
  `;

  const ReviewUserStats = styled.div`
    display: flex;
    font-size: 12px;
  `;

  const ReviewUserNumber = styled.div`
    padding-right: 4px;
    font-weight: bold;
  `;

  const ReviewUserReviews = styled.div`
    padding-right: 4px;
    font-weight: bold;
  `;

  const ReviewUserPhotos = styled.div`
    padding-right: 4px;
    font-weight: bold;
  `;

  const ReviewUserLocation = styled.div`
    color: black;
    font-size: 12px;
    font-weight: bold;
  `;

  const Button = styled.button`
    color: black;
    margin: 1px;
    border-radius: 3px;
    display: flex;
    padding: 4px;
    border: solid 2px;
  `;

  const usefulText = `Useful: ${USEFUL}`;
  const funnyText = `Funny: ${FUNNY}`;
  const coolText = `Cool: ${COOL}`;

  return (
    <ReviewContainer id={ID}>
      <ReviewUser>
        <ReviewUserUpper>
          <ReviewUserUpperAvatar
            alt=""
            src={userPhotoIdUrl}
          />
          <ReviewUserUpperInfo>
            <ReviewUsername>{user.NAME}</ReviewUsername>
            <ReviewUserLocation>{user.TOWNLOC}</ReviewUserLocation>
            <ReviewUserStats>
              <ReviewUserNumber>{user.FRIENDS}</ReviewUserNumber>
               friends
            </ReviewUserStats>
            <ReviewUserStats>
              <ReviewUserReviews>{user.REVIEWS}</ReviewUserReviews>
               reviews
            </ReviewUserStats>
            <ReviewUserStats>
              <ReviewUserPhotos>{user.PHOTOS}</ReviewUserPhotos>
               photos
            </ReviewUserStats>
          </ReviewUserUpperInfo>
        </ReviewUserUpper>
      </ReviewUser>
      <ReviewContent>
        <ReviewContentTop>
          <ReviewRating>{ratingHTML}</ReviewRating>
          <ReviewDate>{REVIEW_DATE.slice(4, 15)}</ReviewDate>
        </ReviewContentTop>
        <ReviewText>{REVIEW_TEXT}</ReviewText>
        <div className="review-photos">{photos}</div>
        <VoteList>
          <Button onClick={props.voteClick} className="useful">
            <div reviewid={ID} className="review-vote useful">
              {usefulText}
            </div>
          </Button>
          <Button onClick={props.voteClick} className="funny">
            <div reviewid={ID} className="review-vote funny">
              {funnyText}
            </div>
          </Button>
          <Button onClick={props.voteClick} className="cool">
            <div reviewid={ID} className="review-vote cool">
              {coolText}
            </div>
          </Button>
        </VoteList>
      </ReviewContent>
    </ReviewContainer>
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
