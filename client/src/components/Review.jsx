import React from 'react';

const Review = (props) => {

    let id = props.review.ID;
    let stars = props.review.STARS;
    let reviewDate = props.review.REVIEW_DATE;
    let reviewText = props.review.REVIEW_TEXT;
    let useful = props.review.USEFUL;
    let funny = props.review.FUNNY;
    let cool = props.review.COOL;
    let user = props.review.user;
    var userPhotoIdUrl = './Pictures/default.png';
    if (user.PHOTO_ID !== "NULL") {
      userPhotoIdUrl = './Pictures/' + user.PHOTO_ID + '.png';
    }
    let photos = [];
    if (props.review.photos) {
      photos = props.review.photos.map(function(photoId) {
        return (
            <img className="avatar"
                       src={'./Pictures/' + photoId + '.png'}/>

        );
      });
    }
    if (photos === []) {
      photos = '';
    }

    // "user": {
    //   "ID": "17",
    //   "NAME": "Nannie Aufderhar",
    //   "TOWNLOC": "Lisaville, OK",
    //   "FRIENDS": 524,
    //   "REVIEWS": 643,
    //   "PHOTOS": 73,
    //   "PHOTO_ID": "306"


    return (
      <div className="reviewContainer" id={id}>
        <div className="review-user">
          <div className="review-user-upper">
            <img className="review-user-upper-avatar"
                       src={userPhotoIdUrl}/>
            <div className="review-user-upper-info">
              <div className="review-username">{user.NAME}</div>
              <div className="review-userLocation">{user.TOWNLOC}</div>
              <div className="review-userStats"><div className="review-userNumber">{user.FRIENDS}</div> friends</div>
              <div className="review-userStats"><div className="review-userReviews">{user.REVIEWS}</div> reviews</div>
              <div className="review-userStats"><div className="review-userPhotos">{user.PHOTOS}</div> photos</div>
            </div>
          </div>
        </div>
        <div className="review-content">
          <div className="review-content-top">
            <div className="review-rating">Rating: {stars} out of 5    </div>
            <div className="review-date">{reviewDate.slice(4,15)}</div>
          </div>
          <div className="review-text">{reviewText}</div>
          <div className="review-photos">{photos}</div>
          <div className="review-votes">
            <button onClick={props.voteClick} className="review-voteButtons">
              <div reviewId={id} className="review-vote useful">Useful {useful} </div></button>
            <button onClick={props.voteClick} className="review-voteButtons">
              <div reviewId={id} className="review-vote funny">Funny {funny} </div></button>
            <button onClick={props.voteClick} className="review-voteButtons">
              <div reviewId={id} className="review-vote cool">Cool {cool} </div></button>
          </div>
        </div>
        
      </div>
    )
}

export default Review;