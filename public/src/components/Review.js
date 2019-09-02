'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    color: orange;\n  '], ['\n    color: orange;\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    border-top: solid 1px lightgray;\n    display: flex;\n    max-width: 600px;\n  '], ['\n    border-top: solid 1px lightgray;\n    display: flex;\n    max-width: 600px;\n  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n    display: flex;\n    padding-bottom: 10px;\n    min-width: 400px;\n    padding-left: 100px;\n  '], ['\n    display: flex;\n    padding-bottom: 10px;\n    min-width: 400px;\n    padding-left: 100px;\n  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    min-width: 400px;\n    font-size: 14px;\n    padding-bottom: 10px;\n    text-align: left;\n  '], ['\n    min-width: 400px;\n    font-size: 14px;\n    padding-bottom: 10px;\n    text-align: left;\n  ']),
    _templateObject5 = _taggedTemplateLiteral(['\n    min-width: 300px;\n    text-align: right;\n    font-size: 14px;\n  '], ['\n    min-width: 300px;\n    text-align: right;\n    font-size: 14px;\n  ']),
    _templateObject6 = _taggedTemplateLiteral(['\n    display: flex;\n    min-width: 400px;\n    font-weight: bold;\n  '], ['\n    display: flex;\n    min-width: 400px;\n    font-weight: bold;\n  ']),
    _templateObject7 = _taggedTemplateLiteral(['\n    min-width: 120px;\n    font-size: 14px;\n    padding-bottom: 10px;\n  '], ['\n    min-width: 120px;\n    font-size: 14px;\n    padding-bottom: 10px;\n  ']),
    _templateObject8 = _taggedTemplateLiteral(['\n    max-width: 400px;\n    padding-top: 10px;\n  '], ['\n    max-width: 400px;\n    padding-top: 10px;\n  ']),
    _templateObject9 = _taggedTemplateLiteral(['\n    padding-top: 10px;\n    min-width: 200px;\n  '], ['\n    padding-top: 10px;\n    min-width: 200px;\n  ']),
    _templateObject10 = _taggedTemplateLiteral(['\n    width: 80px;\n    height: 100%;\n  '], ['\n    width: 80px;\n    height: 100%;\n  ']),
    _templateObject11 = _taggedTemplateLiteral(['\n    display: flex;\n  '], ['\n    display: flex;\n  ']),
    _templateObject12 = _taggedTemplateLiteral(['\n    padding: 8px;\n  '], ['\n    padding: 8px;\n  ']),
    _templateObject13 = _taggedTemplateLiteral(['\n    color: blue;\n    font-size: 14px;\n    font-weight: bold;\n  '], ['\n    color: blue;\n    font-size: 14px;\n    font-weight: bold;\n  ']),
    _templateObject14 = _taggedTemplateLiteral(['\n    display: flex;\n    font-size: 12px;\n  '], ['\n    display: flex;\n    font-size: 12px;\n  ']),
    _templateObject15 = _taggedTemplateLiteral(['\n    padding-right: 4px;\n    font-weight: bold;\n  '], ['\n    padding-right: 4px;\n    font-weight: bold;\n  ']),
    _templateObject16 = _taggedTemplateLiteral(['\n    color: black;\n    font-size: 12px;\n    font-weight: bold;\n  '], ['\n    color: black;\n    font-size: 12px;\n    font-weight: bold;\n  ']),
    _templateObject17 = _taggedTemplateLiteral(['\n    color: black;\n    margin: 1px;\n    border-radius: 3px;\n    display: flex;\n    padding: 4px;\n    border: solid 2px;\n  '], ['\n    color: black;\n    margin: 1px;\n    border-radius: 3px;\n    display: flex;\n    padding: 4px;\n    border: solid 2px;\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Review = function Review(props) {
  var _props$review = props.review,
      ID = _props$review.ID,
      STARS = _props$review.STARS,
      REVIEW_DATE = _props$review.REVIEW_DATE,
      REVIEW_TEXT = _props$review.REVIEW_TEXT,
      USEFUL = _props$review.USEFUL,
      FUNNY = _props$review.FUNNY,
      COOL = _props$review.COOL,
      user = _props$review.user;

  var userPhotoIdUrl = './Pictures/default.png';
  if (user.PHOTO_ID !== 'NULL') {
    userPhotoIdUrl = ['./Pictures/', user.PHOTO_ID, '.png'].join('');
  }
  var photos = props.review.photos;

  console.log(photos);
  if (photos) {
    photos = props.review.photos.map(function (photoId) {
      return _react2.default.createElement('img', {
        alt: '',
        className: 'review-photo',
        src: ['./Pictures/', photoId, '.png'].join('')
      });
    });
  }
  if (photos === []) {
    photos = '';
  }
  var Star = _styledComponents2.default.span(_templateObject);
  var ratingHTML = [1, 2, 3, 4, 5].map(function (rating) {
    if (rating <= Number(STARS)) {
      return _react2.default.createElement(
        Star,
        null,
        '\u2B51'
      );
    }
  });

  var ReviewContainer = _styledComponents2.default.div(_templateObject2);

  var VoteList = _styledComponents2.default.div(_templateObject3);

  var ReviewText = _styledComponents2.default.div(_templateObject4);

  var ReviewDate = _styledComponents2.default.div(_templateObject5);

  var ReviewContentTop = _styledComponents2.default.div(_templateObject6);

  var ReviewRating = _styledComponents2.default.div(_templateObject7);

  var ReviewContent = _styledComponents2.default.div(_templateObject8);

  var ReviewUser = _styledComponents2.default.div(_templateObject9);

  var ReviewUserUpperAvatar = _styledComponents2.default.img(_templateObject10);

  var ReviewUserUpper = _styledComponents2.default.div(_templateObject11);

  var ReviewUserUpperInfo = _styledComponents2.default.div(_templateObject12);

  var ReviewUsername = _styledComponents2.default.div(_templateObject13);

  var ReviewUserStats = _styledComponents2.default.div(_templateObject14);

  var ReviewUserNumber = _styledComponents2.default.div(_templateObject15);

  var ReviewUserReviews = _styledComponents2.default.div(_templateObject15);

  var ReviewUserPhotos = _styledComponents2.default.div(_templateObject15);

  var ReviewUserLocation = _styledComponents2.default.div(_templateObject16);

  var Button = _styledComponents2.default.button(_templateObject17);

  var usefulText = 'Useful: ' + USEFUL;
  var funnyText = 'Funny: ' + FUNNY;
  var coolText = 'Cool: ' + COOL;

  return _react2.default.createElement(
    ReviewContainer,
    { id: ID },
    _react2.default.createElement(
      ReviewUser,
      null,
      _react2.default.createElement(
        ReviewUserUpper,
        null,
        _react2.default.createElement(ReviewUserUpperAvatar, {
          alt: '',
          src: userPhotoIdUrl
        }),
        _react2.default.createElement(
          ReviewUserUpperInfo,
          null,
          _react2.default.createElement(
            ReviewUsername,
            null,
            user.NAME
          ),
          _react2.default.createElement(
            ReviewUserLocation,
            null,
            user.TOWNLOC
          ),
          _react2.default.createElement(
            ReviewUserStats,
            null,
            _react2.default.createElement(
              ReviewUserNumber,
              null,
              user.FRIENDS
            ),
            'friends'
          ),
          _react2.default.createElement(
            ReviewUserStats,
            null,
            _react2.default.createElement(
              ReviewUserReviews,
              null,
              user.REVIEWS
            ),
            'reviews'
          ),
          _react2.default.createElement(
            ReviewUserStats,
            null,
            _react2.default.createElement(
              ReviewUserPhotos,
              null,
              user.PHOTOS
            ),
            'photos'
          )
        )
      )
    ),
    _react2.default.createElement(
      ReviewContent,
      null,
      _react2.default.createElement(
        ReviewContentTop,
        null,
        _react2.default.createElement(
          ReviewRating,
          null,
          ratingHTML
        ),
        _react2.default.createElement(
          ReviewDate,
          null,
          REVIEW_DATE.slice(4, 15)
        )
      ),
      _react2.default.createElement(
        ReviewText,
        null,
        REVIEW_TEXT
      ),
      _react2.default.createElement(
        'div',
        { className: 'review-photos' },
        photos
      ),
      _react2.default.createElement(
        VoteList,
        null,
        _react2.default.createElement(
          Button,
          { onClick: props.voteClick, className: 'useful' },
          _react2.default.createElement(
            'div',
            { reviewid: ID, className: 'review-vote useful' },
            usefulText
          )
        ),
        _react2.default.createElement(
          Button,
          { onClick: props.voteClick, className: 'funny' },
          _react2.default.createElement(
            'div',
            { reviewid: ID, className: 'review-vote funny' },
            funnyText
          )
        ),
        _react2.default.createElement(
          Button,
          { onClick: props.voteClick, className: 'cool' },
          _react2.default.createElement(
            'div',
            { reviewid: ID, className: 'review-vote cool' },
            coolText
          )
        )
      )
    )
  );
};

Review.propTypes = {
  review: {
    ID: _propTypes2.default.string.isRequired,
    STARS: _propTypes2.default.number.isRequired,
    REVIEW_DATE: _propTypes2.default.string.isRequired,
    REVIEW_TEXT: _propTypes2.default.string.isRequired,
    USEFUL: _propTypes2.default.number.isRequired,
    FUNNY: _propTypes2.default.number.isRequired,
    COOL: _propTypes2.default.number.isRequired,
    user: {
      NAME: _propTypes2.default.string.isRequired,
      FRIENDS: _propTypes2.default.number.isRequired,
      REVIEWS: _propTypes2.default.number.isRequired,
      PHOTOS: _propTypes2.default.number.isRequired,
      TOWNLOC: _propTypes2.default.string.isRequired
    }.isRequired

  }.isRequired,
  voteClick: _propTypes2.default.func.isRequired
};

exports.default = Review;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9SZXZpZXcuanN4Il0sIm5hbWVzIjpbIlJldmlldyIsInByb3BzIiwicmV2aWV3IiwiSUQiLCJTVEFSUyIsIlJFVklFV19EQVRFIiwiUkVWSUVXX1RFWFQiLCJVU0VGVUwiLCJGVU5OWSIsIkNPT0wiLCJ1c2VyIiwidXNlclBob3RvSWRVcmwiLCJQSE9UT19JRCIsImpvaW4iLCJwaG90b3MiLCJjb25zb2xlIiwibG9nIiwibWFwIiwicGhvdG9JZCIsIlN0YXIiLCJzdHlsZWQiLCJzcGFuIiwicmF0aW5nSFRNTCIsInJhdGluZyIsIk51bWJlciIsIlJldmlld0NvbnRhaW5lciIsImRpdiIsIlZvdGVMaXN0IiwiUmV2aWV3VGV4dCIsIlJldmlld0RhdGUiLCJSZXZpZXdDb250ZW50VG9wIiwiUmV2aWV3UmF0aW5nIiwiUmV2aWV3Q29udGVudCIsIlJldmlld1VzZXIiLCJSZXZpZXdVc2VyVXBwZXJBdmF0YXIiLCJpbWciLCJSZXZpZXdVc2VyVXBwZXIiLCJSZXZpZXdVc2VyVXBwZXJJbmZvIiwiUmV2aWV3VXNlcm5hbWUiLCJSZXZpZXdVc2VyU3RhdHMiLCJSZXZpZXdVc2VyTnVtYmVyIiwiUmV2aWV3VXNlclJldmlld3MiLCJSZXZpZXdVc2VyUGhvdG9zIiwiUmV2aWV3VXNlckxvY2F0aW9uIiwiQnV0dG9uIiwiYnV0dG9uIiwidXNlZnVsVGV4dCIsImZ1bm55VGV4dCIsImNvb2xUZXh0IiwiTkFNRSIsIlRPV05MT0MiLCJGUklFTkRTIiwiUkVWSUVXUyIsIlBIT1RPUyIsInNsaWNlIiwidm90ZUNsaWNrIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm51bWJlciIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxF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O0FBbEJULENBQW5COztrQkFxQmUzRCxNIiwiZmlsZSI6IlJldmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgUmV2aWV3ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBJRCwgU1RBUlMsIFJFVklFV19EQVRFLCBSRVZJRVdfVEVYVCwgVVNFRlVMLCBGVU5OWSwgQ09PTCwgdXNlcixcbiAgfSA9IHByb3BzLnJldmlldztcbiAgbGV0IHVzZXJQaG90b0lkVXJsID0gJy4vUGljdHVyZXMvZGVmYXVsdC5wbmcnO1xuICBpZiAodXNlci5QSE9UT19JRCAhPT0gJ05VTEwnKSB7XG4gICAgdXNlclBob3RvSWRVcmwgPSBbJy4vUGljdHVyZXMvJywgdXNlci5QSE9UT19JRCwgJy5wbmcnXS5qb2luKCcnKTtcbiAgfVxuICBsZXQgeyBwaG90b3MgfSA9IHByb3BzLnJldmlldztcbiAgY29uc29sZS5sb2cocGhvdG9zKTtcbiAgaWYgKHBob3Rvcykge1xuICAgIHBob3RvcyA9IHByb3BzLnJldmlldy5waG90b3MubWFwKChwaG90b0lkKSA9PiAoXG4gICAgICA8aW1nXG4gICAgICAgIGFsdD1cIlwiXG4gICAgICAgIGNsYXNzTmFtZT1cInJldmlldy1waG90b1wiXG4gICAgICAgIHNyYz17WycuL1BpY3R1cmVzLycsIHBob3RvSWQsICcucG5nJ10uam9pbignJyl9XG4gICAgICAvPlxuICAgICkpO1xuICB9XG4gIGlmIChwaG90b3MgPT09IFtdKSB7XG4gICAgcGhvdG9zID0gJyc7XG4gIH1cbiAgY29uc3QgU3RhciA9IHN0eWxlZC5zcGFuYFxuICAgIGNvbG9yOiBvcmFuZ2U7XG4gIGA7XG4gIGNvbnN0IHJhdGluZ0hUTUwgPSBbMSwyLDMsNCw1XS5tYXAoKHJhdGluZykgPT4ge1xuICAgIGlmICggcmF0aW5nIDw9IE51bWJlcihTVEFSUykpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdGFyPuKtkTwvU3Rhcj5cbiAgICAgICk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBSZXZpZXdDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCBsaWdodGdyYXk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICBgO1xuXG4gIGNvbnN0IFZvdGVMaXN0ID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIG1pbi13aWR0aDogNDAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcbiAgYDtcblxuICBjb25zdCBSZXZpZXdUZXh0ID0gc3R5bGVkLmRpdmBcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBgO1xuXG4gIGNvbnN0IFJldmlld0RhdGUgPSBzdHlsZWQuZGl2YFxuICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICBgO1xuXG4gIGNvbnN0IFJldmlld0NvbnRlbnRUb3AgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWluLXdpZHRoOiA0MDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgYDtcblxuICBjb25zdCBSZXZpZXdSYXRpbmcgPSBzdHlsZWQuZGl2YFxuICAgIG1pbi13aWR0aDogMTIwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBgO1xuXG4gIGNvbnN0IFJldmlld0NvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGA7XG5cbiAgY29uc3QgUmV2aWV3VXNlciA9IHN0eWxlZC5kaXZgXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgYDtcblxuICBjb25zdCBSZXZpZXdVc2VyVXBwZXJBdmF0YXIgPSBzdHlsZWQuaW1nYFxuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgYDtcblxuICBjb25zdCBSZXZpZXdVc2VyVXBwZXIgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gIGA7XG5cbiAgY29uc3QgUmV2aWV3VXNlclVwcGVySW5mbyA9IHN0eWxlZC5kaXZgXG4gICAgcGFkZGluZzogOHB4O1xuICBgO1xuXG4gIGNvbnN0IFJldmlld1VzZXJuYW1lID0gc3R5bGVkLmRpdmBcbiAgICBjb2xvcjogYmx1ZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGA7XG5cbiAgY29uc3QgUmV2aWV3VXNlclN0YXRzID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgYDtcblxuICBjb25zdCBSZXZpZXdVc2VyTnVtYmVyID0gc3R5bGVkLmRpdmBcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGA7XG5cbiAgY29uc3QgUmV2aWV3VXNlclJldmlld3MgPSBzdHlsZWQuZGl2YFxuICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgYDtcblxuICBjb25zdCBSZXZpZXdVc2VyUGhvdG9zID0gc3R5bGVkLmRpdmBcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGA7XG5cbiAgY29uc3QgUmV2aWV3VXNlckxvY2F0aW9uID0gc3R5bGVkLmRpdmBcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBgO1xuXG4gIGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gICAgY29sb3I6IGJsYWNrO1xuICAgIG1hcmdpbjogMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBib3JkZXI6IHNvbGlkIDJweDtcbiAgYDtcblxuICBjb25zdCB1c2VmdWxUZXh0ID0gYFVzZWZ1bDogJHtVU0VGVUx9YDtcbiAgY29uc3QgZnVubnlUZXh0ID0gYEZ1bm55OiAke0ZVTk5ZfWA7XG4gIGNvbnN0IGNvb2xUZXh0ID0gYENvb2w6ICR7Q09PTH1gO1xuXG4gIHJldHVybiAoXG4gICAgPFJldmlld0NvbnRhaW5lciBpZD17SUR9PlxuICAgICAgPFJldmlld1VzZXI+XG4gICAgICAgIDxSZXZpZXdVc2VyVXBwZXI+XG4gICAgICAgICAgPFJldmlld1VzZXJVcHBlckF2YXRhclxuICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgIHNyYz17dXNlclBob3RvSWRVcmx9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8UmV2aWV3VXNlclVwcGVySW5mbz5cbiAgICAgICAgICAgIDxSZXZpZXdVc2VybmFtZT57dXNlci5OQU1FfTwvUmV2aWV3VXNlcm5hbWU+XG4gICAgICAgICAgICA8UmV2aWV3VXNlckxvY2F0aW9uPnt1c2VyLlRPV05MT0N9PC9SZXZpZXdVc2VyTG9jYXRpb24+XG4gICAgICAgICAgICA8UmV2aWV3VXNlclN0YXRzPlxuICAgICAgICAgICAgICA8UmV2aWV3VXNlck51bWJlcj57dXNlci5GUklFTkRTfTwvUmV2aWV3VXNlck51bWJlcj5cbiAgICAgICAgICAgICAgIGZyaWVuZHNcbiAgICAgICAgICAgIDwvUmV2aWV3VXNlclN0YXRzPlxuICAgICAgICAgICAgPFJldmlld1VzZXJTdGF0cz5cbiAgICAgICAgICAgICAgPFJldmlld1VzZXJSZXZpZXdzPnt1c2VyLlJFVklFV1N9PC9SZXZpZXdVc2VyUmV2aWV3cz5cbiAgICAgICAgICAgICAgIHJldmlld3NcbiAgICAgICAgICAgIDwvUmV2aWV3VXNlclN0YXRzPlxuICAgICAgICAgICAgPFJldmlld1VzZXJTdGF0cz5cbiAgICAgICAgICAgICAgPFJldmlld1VzZXJQaG90b3M+e3VzZXIuUEhPVE9TfTwvUmV2aWV3VXNlclBob3Rvcz5cbiAgICAgICAgICAgICAgIHBob3Rvc1xuICAgICAgICAgICAgPC9SZXZpZXdVc2VyU3RhdHM+XG4gICAgICAgICAgPC9SZXZpZXdVc2VyVXBwZXJJbmZvPlxuICAgICAgICA8L1Jldmlld1VzZXJVcHBlcj5cbiAgICAgIDwvUmV2aWV3VXNlcj5cbiAgICAgIDxSZXZpZXdDb250ZW50PlxuICAgICAgICA8UmV2aWV3Q29udGVudFRvcD5cbiAgICAgICAgICA8UmV2aWV3UmF0aW5nPntyYXRpbmdIVE1MfTwvUmV2aWV3UmF0aW5nPlxuICAgICAgICAgIDxSZXZpZXdEYXRlPntSRVZJRVdfREFURS5zbGljZSg0LCAxNSl9PC9SZXZpZXdEYXRlPlxuICAgICAgICA8L1Jldmlld0NvbnRlbnRUb3A+XG4gICAgICAgIDxSZXZpZXdUZXh0PntSRVZJRVdfVEVYVH08L1Jldmlld1RleHQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXBob3Rvc1wiPntwaG90b3N9PC9kaXY+XG4gICAgICAgIDxWb3RlTGlzdD5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3Byb3BzLnZvdGVDbGlja30gY2xhc3NOYW1lPVwidXNlZnVsXCI+XG4gICAgICAgICAgICA8ZGl2IHJldmlld2lkPXtJRH0gY2xhc3NOYW1lPVwicmV2aWV3LXZvdGUgdXNlZnVsXCI+XG4gICAgICAgICAgICAgIHt1c2VmdWxUZXh0fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtwcm9wcy52b3RlQ2xpY2t9IGNsYXNzTmFtZT1cImZ1bm55XCI+XG4gICAgICAgICAgICA8ZGl2IHJldmlld2lkPXtJRH0gY2xhc3NOYW1lPVwicmV2aWV3LXZvdGUgZnVubnlcIj5cbiAgICAgICAgICAgICAge2Z1bm55VGV4dH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17cHJvcHMudm90ZUNsaWNrfSBjbGFzc05hbWU9XCJjb29sXCI+XG4gICAgICAgICAgICA8ZGl2IHJldmlld2lkPXtJRH0gY2xhc3NOYW1lPVwicmV2aWV3LXZvdGUgY29vbFwiPlxuICAgICAgICAgICAgICB7Y29vbFRleHR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Wb3RlTGlzdD5cbiAgICAgIDwvUmV2aWV3Q29udGVudD5cbiAgICA8L1Jldmlld0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cblJldmlldy5wcm9wVHlwZXMgPSB7XG4gIHJldmlldzoge1xuICAgIElEOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgU1RBUlM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBSRVZJRVdfREFURTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIFJFVklFV19URVhUOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgVVNFRlVMOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgRlVOTlk6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBDT09MOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgdXNlcjoge1xuICAgICAgTkFNRTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgRlJJRU5EUzogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgUkVWSUVXUzogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgUEhPVE9TOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBUT1dOTE9DOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgfS5pc1JlcXVpcmVkLFxuXG4gIH0uaXNSZXF1aXJlZCxcbiAgdm90ZUNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3O1xuIl19