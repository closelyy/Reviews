import React from 'react';
import { shallow } from 'enzyme';
import Review from '../client/src/components/Review';

// ID, STARS, REVIEW_DATE, REVIEW_TEXT, USEFUL, FUNNY, COOL, user,

describe('Testing DOM renders', () => {
  let review = {
    ID: '98',
    STARS: 4,
    REVIEW_DATE: 'XXXXSep 29 2016',
    REVIEW_TEXT: 'Hi I am a review. I sorta liked this place, food was good. I suggest you go here.',
    USEFUL: 1,
    FUNNY: 34,
    COOL: 34,
    user: {
      NAME: 'TODD',
      FRIENDS: 12,
      REVIEWS: 99,
      PHOTOS: 2,
      TOWNLOC: 'Sacramento, CA',
      PHOTO_ID: '23'
    }
  };

  let reviewNoProfilePic = {
    ID: '98',
    STARS: 4,
    REVIEW_DATE: 'XXXXSep 29 2016',
    REVIEW_TEXT: 'Hi I am a review. I sorta liked this place, food was good. I suggest you go here.',
    USEFUL: 1,
    FUNNY: 34,
    COOL: 34,
    user: {
      NAME: 'TODD',
      FRIENDS: 12,
      REVIEWS: 99,
      PHOTOS: 2,
      TOWNLOC: 'Sacramento, CA',
      PHOTO_ID: 'NULL'
    }
  };

  const onVoteClick = () => {
    console.log('success'); 
  }

  // ------------------ RENDER -------------------------
  it('ReviewEntry should render without crashing', () => {
    shallow(<Review review={review} voteClick={onVoteClick} />);
  });

  // ------------------ STARS TEST -----------------------------
  it('Star rating should be rendered properly', () => {
    const wrapper = shallow(<Review review={review} voteClick={onVoteClick} />);
    expect(wrapper.find('.review-rating').text()).toEqual('Rating: 4 out of 5   ');
  });

  // ------------------ REVIEW_DATE TEST -----------------------------
  it('Review date should be rendered properly', () => {
    const wrapper = shallow(<Review review={review} voteClick={onVoteClick} />);
    expect(wrapper.find('.review-date').text()).toEqual('Sep 29 2016');
  });

  // ------------------ REVIEW_TEXT TEST -----------------------------
  it('Review text should be rendered properly', () => {
    const wrapper = shallow(<Review review={review} voteClick={onVoteClick} />);
    expect(wrapper.find('.review-text').text()).toEqual('Hi I am a review. I sorta liked this place, food was good. I suggest you go here.');
  });

  // ------------------ USEFUL TEST -----------------------------
  it('Useful rating should be rendered properly', () => {
    const wrapper = shallow(<Review review={review} voteClick={onVoteClick} />);
    expect(wrapper.find('.review-vote').find('.useful').text()).toEqual('Useful: 1');
  });

  // ------------------ FUNNY TEST -----------------------------
  it('Funny rating should be rendered properly', () => {
    const wrapper = shallow(<Review review={review} voteClick={onVoteClick} />);
    expect(wrapper.find('.review-vote').find('.funny').text()).toEqual('Funny: 34');
  });

  // ------------------ COOL TEST -----------------------------
  it('Cool rating should be rendered properly', () => {
    const wrapper = shallow(<Review review={review} voteClick={onVoteClick} />);
    expect(wrapper.find('.review-vote').find('.cool').text()).toEqual('Cool: 34');
  });

  // ------------------ USER TESTS -----------------------------

  // ------------------- NAME ----------------------------------
  it('Cool rating should be rendered properly', () => {
    const wrapper = shallow(<Review review={review} voteClick={onVoteClick} />);
    expect(wrapper.find('.review-username').text()).toEqual('TODD');
  });

  // ------------------- FRIENDS ----------------------------------
  it('User\'s number of friends should be rendered properly', () => {
    const wrapper = shallow(<Review review={review} voteClick={onVoteClick} />);
    expect(wrapper.find('.review-userNumber').text()).toEqual('12');
  });

  // ------------------- REVIEWS ----------------------------------
  it('User\'s number of reviews should be rendered properly', () => {
    const wrapper = shallow(<Review review={review} voteClick={onVoteClick} />);
    expect(wrapper.find('.review-userReviews').text()).toEqual('99');
  });

  // ------------------- PROFILE PHOTO ----------------------------------
  it('User profile photo should have the correct url', () => {
    const wrapper = shallow(<Review review={review} voteClick={onVoteClick} />);
    expect(wrapper.find('.review-user-upper-avatar').prop('src')).toEqual('./Pictures/23.png');
  });

  // ------------------- PROFILE PHOTO ----------------------------------
  it('User profile photo should default when no profile photo is provided.', () => {
    const wrapper = shallow(<Review review={reviewNoProfilePic} voteClick={onVoteClick} />);
    expect(wrapper.find('.review-user-upper-avatar').prop('src')).toEqual('./Pictures/default.png');
  });

  // ------------------- PHOTOS ----------------------------------
  it('User\'s number of photos should be rendered properly.', () => {
    const wrapper = shallow(<Review review={review} voteClick={onVoteClick} />);
    expect(wrapper.find('.review-userPhotos').text()).toEqual('2');
  });

  // ------------------- LOCATION ----------------------------------
  it('Location should be rendered properly', () => {
    const wrapper = shallow(<Review review={review} voteClick={onVoteClick} />);
    expect(wrapper.find('.review-userLocation').text()).toEqual('Sacramento, CA');
  });
});

describe('Test buttons', () => {
  const onUsefulVoteClick = (e) => {
    review.USEFUL += 1; 
  };

  const onFunnyVoteClick = (e) => {
    review.FUNNY += 1; 
  };

  const onCoolVoteClick = (e) => {
    review.COOL += 1; 
  };

  let review = {
    ID: '98',
    STARS: 4,
    REVIEW_DATE: 'XXXXSep 29 2016',
    REVIEW_TEXT: 'Hi I am a review. I sorta liked this place, food was good. I suggest you go here.',
    USEFUL: 1,
    FUNNY: 34,
    COOL: 34,
    user: {
      NAME: 'TODD',
      FRIENDS: 12,
      REVIEWS: 99,
      PHOTOS: 2,
      TOWNLOC: 'Sacramento, CA',
      PHOTO_ID: '23'
    }
  };

  // ------------------ VOTING USEFL TEST -------------------------
  it('Should increment the cool value of the review when vote is cast.', () => {
    const wrapper1 = shallow(<Review review={review} voteClick={onUsefulVoteClick} />);
    expect(wrapper1.find('div.useful').text()).toEqual('Useful: 1');
    wrapper1.find('button.useful').simulate('click', { preventDefault() {} });
    const wrapper2 = shallow(<Review review={review} voteClick={onUsefulVoteClick} />);
    expect(wrapper2.find('div.useful').text()).toEqual('Useful: 2');
  });

  // ------------------ VOTING FUNNY TEST -------------------------
  it('Should increment the funny value of the review when vote is cast.', () => {
    const wrapper1 = shallow(<Review review={review} voteClick={onFunnyVoteClick} />);
    expect(wrapper1.find('div.funny').text()).toEqual('Funny: 34');
    wrapper1.find('button.funny').simulate('click', { preventDefault() {} });
    const wrapper2 = shallow(<Review review={review} voteClick={onFunnyVoteClick} />);
    expect(wrapper2.find('div.funny').text()).toEqual('Funny: 35');
  });

  // ------------------ VOTING COOL TEST -------------------------
  it('Should increment the cool value of the review when vote is cast.', () => {
    const wrapper1 = shallow(<Review review={review} voteClick={onCoolVoteClick} />);
    expect(wrapper1.find('div.cool').text()).toEqual('Cool: 34');
    wrapper1.find('button.cool').simulate('click', { preventDefault() {} });
    const wrapper2 = shallow(<Review review={review} voteClick={onCoolVoteClick} />);
    expect(wrapper2.find('div.cool').text()).toEqual('Cool: 35');
  });
});
