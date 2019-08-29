import React from 'react';
import { shallow } from 'enzyme';
import Review from '../client/src/components/Review';

// ID, STARS, REVIEW_DATE, REVIEW_TEXT, USEFUL, FUNNY, COOL, user,

describe('Test all states and corresponding DOM renders', () => {
  const review = {
    ID: '98',
    STARS: 4,
    REVIEW_DATE: 'Sept 29, 2016',
    REVIEW_TEXT: 'Hi I am a review. I sorta liked this place, food was good. I suggest you go here.',
    USEFUL: 1,
    FUNNY: 34,
    COOL: 34,
    user: {
      NAME: 'TODD',
      FRIENDS: 12,
      REVIEWS: 99,
      PHOTOS: [1,2,3],
      TOWNLOC: 'Sacramento, CA',
      PHOTO_ID: '23'
    }
  };

  const onVoteClick = () => {
    console.log('success'); 
  }

  // ------------------ RENDER -------------------------
  it('ReviewEntry should render without crashing', () => {
    shallow(<Review review={review} voteClick={onVoteClick} />);
  });
});
