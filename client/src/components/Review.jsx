import React from 'react';
import PropTypes from 'prop-types';
const { styled } = window;

const OrangeStar = styled.span`
  color: orange;
`;
const Star = styled.span`
  color: black;
`;

const ReviewContainer = styled.div`
  border-top: solid 1px lightgray;
  display: flex;
  max-width: 600px;
`;
ReviewContainer.displayName = 'ReviewContainer';

const VoteList = styled.div`
  display: flex;
  padding-bottom: 10px;
  min-width: 400px;
  padding-left: 100px;
`;
VoteList.displayName = 'VoteList';

const ReviewText = styled.div`
  min-width: 400px;
  font-size: 14px;
  padding-bottom: 10px;
  text-align: left;
`;
ReviewText.displayName = 'ReviewText';

const ReviewDate = styled.div`
  min-width: 300px;
  text-align: right;
  font-size: 14px;
`;
ReviewDate.displayName = 'ReviewDate';

const ReviewContentTop = styled.div`
  display: flex;
  min-width: 400px;
  font-weight: bold;
`;
ReviewContentTop.displayName = 'ReviewContentTop';

const ReviewRating = styled.div`
  min-width: 120px;
  font-size: 14px;
  padding-bottom: 10px;
`;
ReviewRating.displayName = 'ReviewRating';

const ReviewContent = styled.div`
  max-width: 400px;
  padding-top: 10px;
`;
ReviewContent.displayName = 'ReviewContent';

const ReviewUser = styled.div`
  padding-top: 10px;
  min-width: 200px;
`;
ReviewUser.displayName = 'ReviewUser';

const ReviewUserLower = styled.div`
  min-width: 100px;
  min-height: 100px;
  border: 1px solid lightgray;
`;
ReviewUserLower.displayName = 'ReviewUserLower';

const ReviewUserLowerElement = styled.div`
  padding-top: 3px;
  border-top: solid 1px lightgray;
`;
ReviewUserLowerElement.displayName = 'ReviewUserLowerElement';

const ReviewUserUpperAvatar = styled.img`
  width: 80px;
  height: 100%;
`;
ReviewUserUpperAvatar.displayName = 'ReviewUserUpperAvatar';

const ReviewUserUpper = styled.div`
  display: flex;
`;
ReviewUserUpper.displayName = 'ReviewUserUpper';

const ReviewUserUpperInfo = styled.div`
  padding: 8px;
`;
ReviewUserUpperInfo.displayName = 'ReviewUserUpperInfo';

const ReviewUsername = styled.div`
  color: blue;
  font-size: 14px;
  font-weight: bold;
`;
ReviewUsername.displayName = 'ReviewUsername';

const ReviewUserStats = styled.div`
  display: flex;
  font-size: 12px;
`;
ReviewUserStats.displayName = 'ReviewUserStats';

const ReviewUserNumber = styled.div`
  padding-right: 4px;
  font-weight: bold;
`;
ReviewUserNumber.displayName = 'ReviewUserNumber';

const ReviewUserReviews = styled.div`
  padding-right: 4px;
  font-weight: bold;
`;
ReviewUserReviews.displayName = 'ReviewUserReviews';

const ReviewUserPhotos = styled.div`
  padding-right: 4px;
  font-weight: bold;
`;
ReviewUserPhotos.displayName = 'ReviewUserPhotos';

const ReviewUserLocation = styled.div`
  color: black;
  font-size: 12px;
  font-weight: bold;
`;
ReviewUserLocation.displayName = 'ReviewUserLocation';

const Button = styled.button`
  color: black;
  margin: 1px;
  border-radius: 3px;
  display: flex;
  padding: 4px;
  border: solid 2px;
  background-color: lightgray;
`;
Button.displayName = 'Button';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false,
    };
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseOver() {
    this.setState({
      mouseOver: true,
    });
  }

  onMouseLeave() {
    this.setState({
      mouseOver: false,
    });
  }

  render() {
    const {
      ID, STARS, REVIEW_DATE, REVIEW_TEXT, USEFUL, FUNNY, COOL, user,
    } = this.props.review;
    let userPhotoIdUrl = './Pictures/default.png';
    if (user.PHOTO_ID !== 'NULL') {
      userPhotoIdUrl = ['./Pictures/', user.PHOTO_ID, '.png'].join('');
    }
    let { photos } = this.props.review;
    if (photos) {
      photos = this.props.review.photos.map((photoId) => (
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
    const ratingHTML = [1, 2, 3, 4, 5].map((rating) => {
      if (rating <= Number(STARS)) {
        return (
          <OrangeStar>⭑</OrangeStar>
        );
      }
      return (
        <Star>⭑</Star>
      );
    });

    let reviewUserLowerSection = '';
    const { mouseOver, voteClick } = this.state;
    if (mouseOver === true) {
      reviewUserLowerSection = (
        <ReviewUserLower>
          <ReviewUserLowerElement>Share Review</ReviewUserLowerElement>
          <ReviewUserLowerElement>Embed Review</ReviewUserLowerElement>
          <ReviewUserLowerElement>Compliment</ReviewUserLowerElement>
          <ReviewUserLowerElement>Send Message</ReviewUserLowerElement>
          <ReviewUserLowerElement>Follow {user.NAME}</ReviewUserLowerElement>
        </ReviewUserLower>
      );
    }

    const usefulText = `Useful: ${USEFUL}`;
    const funnyText = `Funny: ${FUNNY}`;
    const coolText = `Cool: ${COOL}`;

    return (
      <ReviewContainer
        id={ID}
        onMouseLeave={this.onMouseLeave}
        onMouseOver={this.onMouseOver}
      >
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
          {reviewUserLowerSection}
        </ReviewUser>
        <ReviewContent>
          <ReviewContentTop>
            <ReviewRating>{ratingHTML}</ReviewRating>
            <ReviewDate>{REVIEW_DATE.slice(4, 15)}</ReviewDate>
          </ReviewContentTop>
          <ReviewText>{REVIEW_TEXT}</ReviewText>
          <div className="review-photos">{photos}</div>
          <VoteList>
            <Button onClick={this.props.voteClick} className="useful">
              <div reviewid={ID} className="review-vote useful">
                {usefulText}
              </div>
            </Button>
            <Button onClick={this.props.voteClick} className="funny">
              <div reviewid={ID} className="review-vote funny">
                {funnyText}
              </div>
            </Button>
            <Button onClick={this.props.voteClick} className="cool">
              <div reviewid={ID} className="review-vote cool">
                {coolText}
              </div>
            </Button>
          </VoteList>
        </ReviewContent>
      </ReviewContainer>
    );
  }
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
