import React from 'react';
import { shallow } from 'enzyme';
import Review from '../client/src/components/Review';
import ReviewList from '../client/src/components/ReviewList';
// import App from '../client/src/index'

// ------------------- Review ----------------------
describe('Review: Testing DOM renders', () => {
  let review = {
    ID: '98',
    STARS: 4,
    REVIEW_DATE: 'XXXXSep 29 2016',
    REVIEW_TEXT: 'Hi I am a review. I sorta liked this place, food was good. I suggest you go here.',
    USEFUL: 1,
    FUNNY: 34,
    COOL: 34,
    photos: ["1","2","3"],
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
    expect(wrapper.find('ReviewRating').text()).toEqual('⭑⭑⭑⭑⭑');
  });

  // ------------------ REVIEW_DATE TEST -----------------------------
  it('Review date should be rendered properly', () => {
    const wrapper = shallow(<Review review={review} voteClick={onVoteClick} />);
    expect(wrapper.find('ReviewDate').text()).toEqual('Sep 29 2016');
  });

  // ------------------ REVIEW_TEXT TEST -----------------------------
  it('Review text should be rendered properly', () => {
    const wrapper = shallow(<Review review={review} voteClick={onVoteClick} />);
    expect(wrapper.find('ReviewText').text()).toEqual('Hi I am a review. I sorta liked this place, food was good. I suggest you go here.');
  });

  // ------------------ USEFUL TEST -----------------------------
  it('Useful rating should be rendered properly', () => {
    const wrapper = shallow(<Review review={review} voteClick={onVoteClick} />);
    console.log(JSON.stringify(wrapper.find('ReviewVote')));
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

  // ------------------ PHOTOS TEST -----------------------------
  // it('Cool rating should be rendered properly', () => {
  //   const wrapper = shallow(<Review review={review} voteClick={onVoteClick} />);
  //   expect(wrapper.find('ReviewVote').find('.cool').text()).toEqual('Cool: 34');
  // });

  // ------------------ USER TESTS -----------------------------

  // ------------------- NAME ----------------------------------
  it('Cool rating should be rendered properly', () => {
    const wrapper = shallow(<Review review={review} voteClick={onVoteClick} />);
    expect(wrapper.find('ReviewUsername').text()).toEqual('TODD');
  });

  // ------------------- FRIENDS ----------------------------------
  it('User\'s number of friends should be rendered properly', () => {
    const wrapper = shallow(<Review review={review} voteClick={onVoteClick} />);
    expect(wrapper.find('ReviewUserNumber').text()).toEqual('12');
  });

  // ------------------- REVIEWS ----------------------------------
  it('User\'s number of reviews should be rendered properly', () => {
    const wrapper = shallow(<Review review={review} voteClick={onVoteClick} />);
    expect(wrapper.find('ReviewUserReviews').text()).toEqual('99');
  });

  // ------------------- PROFILE PHOTO ----------------------------------
  it('User profile photo should have the correct url', () => {
    const wrapper = shallow(<Review review={review} voteClick={onVoteClick} />);
    expect(wrapper.find('ReviewUserUpperAvatar').prop('src')).toEqual('./Pictures/23.png');
  });

  // ------------------- PROFILE PHOTO ----------------------------------
  it('User profile photo should default when no profile photo is provided.', () => {
    const wrapper = shallow(<Review review={reviewNoProfilePic} voteClick={onVoteClick} />);
    expect(wrapper.find('ReviewUserUpperAvatar').prop('src')).toEqual('./Pictures/default.png');
  });

  // ------------------- PHOTOS ----------------------------------
  it('Review photos should be rendered properly.', () => {
    const wrapper = shallow(<Review review={review} voteClick={onVoteClick} />);
    expect(wrapper.find('.review-photo').length).toBe(3);
  });

  it('Should render no review photos if none are associated with the review.', () => {
    const wrapper = shallow(<Review review={reviewNoProfilePic} voteClick={onVoteClick} />);
    expect(wrapper.find('.review-photo').length).toBe(0);
  });

  // ------------------- LOCATION ----------------------------------
  it('Location should be rendered properly', () => {
    const wrapper = shallow(<Review review={review} voteClick={onVoteClick} />);
    expect(wrapper.find('ReviewUserLocation').text()).toEqual('Sacramento, CA');
  });
});

describe('Review: Test buttons', () => {
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
    wrapper1.find('Button.useful').simulate('click', { preventDefault() {} });
    const wrapper2 = shallow(<Review review={review} voteClick={onUsefulVoteClick} />);
    expect(wrapper2.find('div.useful').text()).toEqual('Useful: 2');
  });

  // ------------------ VOTING FUNNY TEST -------------------------
  it('Should increment the funny value of the review when vote is cast.', () => {
    const wrapper1 = shallow(<Review review={review} voteClick={onFunnyVoteClick} />);
    expect(wrapper1.find('div.funny').text()).toEqual('Funny: 34');
    wrapper1.find('Button.funny').simulate('click', { preventDefault() {} });
    const wrapper2 = shallow(<Review review={review} voteClick={onFunnyVoteClick} />);
    expect(wrapper2.find('div.funny').text()).toEqual('Funny: 35');
  });

  // ------------------ VOTING COOL TEST -------------------------
  it('Should increment the cool value of the review when vote is cast.', () => {
    const wrapper1 = shallow(<Review review={review} voteClick={onCoolVoteClick} />);
    expect(wrapper1.find('div.cool').text()).toEqual('Cool: 34');
    wrapper1.find('Button.cool').simulate('click', { preventDefault() {} });
    const wrapper2 = shallow(<Review review={review} voteClick={onCoolVoteClick} />);
    expect(wrapper2.find('div.cool').text()).toEqual('Cool: 35');
  });
});

// ------------------- ReviewList ------------------
describe('ReviewList: Testing DOM renders', () => {
  let reviews = [{
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
  },
  {
    ID: '45',
    STARS: 5,
    REVIEW_DATE: 'XXXXOct 20 2013',
    REVIEW_TEXT: 'Hi I am a review. I really liked this place, food was awesome!',
    USEFUL: 0,
    FUNNY: 0,
    COOL: 0,
    user: {
      NAME: 'MARY',
      FRIENDS: 32,
      REVIEWS: 1,
      PHOTOS: 44,
      TOWNLOC: 'Atlanta, GA',
      PHOTO_ID: '44'
    }
  }];

  const onVoteClick = () => {
    console.log('success'); 
  }

  // ------------------ RENDER -------------------------
  it('ReviewEntry should render without crashing', () => {
    shallow(<ReviewList voteClick={onVoteClick} reviews={reviews} />);
  });

  // ------------------ RENDER REVIEWS TEST -----------------------------
  it('Should render proper number of reviews in the list.', () => {
    const wrapper = shallow(<ReviewList voteClick={onVoteClick} reviews={reviews} />);
    expect(wrapper.find('Review').length).toBe(2);
  });
});
