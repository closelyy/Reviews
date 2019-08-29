'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Review = function Review(props) {

  var id = props.review.ID;
  var stars = props.review.STARS;
  var reviewDate = props.review.REVIEW_DATE;
  var reviewText = props.review.REVIEW_TEXT;
  var useful = props.review.USEFUL;
  var funny = props.review.FUNNY;
  var cool = props.review.COOL;
  var user = props.review.user;
  var userPhotoIdUrl = './Pictures/default.png';
  if (user.PHOTO_ID !== "NULL") {
    userPhotoIdUrl = './Pictures/' + user.PHOTO_ID + '.png';
  }
  var photos = [];
  if (props.review.photos) {
    photos = props.review.photos.map(function (photoId) {
      return _react2.default.createElement('img', { className: 'avatar',
        src: './Pictures/' + photoId + '.png' });
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


  return _react2.default.createElement(
    'div',
    { className: 'reviewContainer', id: id },
    _react2.default.createElement(
      'div',
      { className: 'review-user' },
      _react2.default.createElement(
        'div',
        { className: 'review-user-upper' },
        _react2.default.createElement('img', { className: 'review-user-upper-avatar',
          src: userPhotoIdUrl }),
        _react2.default.createElement(
          'div',
          { className: 'review-user-upper-info' },
          _react2.default.createElement(
            'div',
            { className: 'review-username' },
            user.NAME
          ),
          _react2.default.createElement(
            'div',
            { className: 'review-userLocation' },
            user.TOWNLOC
          ),
          _react2.default.createElement(
            'div',
            { className: 'review-userStats' },
            _react2.default.createElement(
              'div',
              { className: 'review-userNumber' },
              user.FRIENDS
            ),
            ' friends'
          ),
          _react2.default.createElement(
            'div',
            { className: 'review-userStats' },
            _react2.default.createElement(
              'div',
              { className: 'review-userReviews' },
              user.REVIEWS
            ),
            ' reviews'
          ),
          _react2.default.createElement(
            'div',
            { className: 'review-userStats' },
            _react2.default.createElement(
              'div',
              { className: 'review-userPhotos' },
              user.PHOTOS
            ),
            ' photos'
          )
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'review-content' },
      _react2.default.createElement(
        'div',
        { className: 'review-content-top' },
        _react2.default.createElement(
          'div',
          { className: 'review-rating' },
          'Rating: ',
          stars,
          ' out of 5    '
        ),
        _react2.default.createElement(
          'div',
          { className: 'review-date' },
          reviewDate.slice(4, 15)
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'review-text' },
        reviewText
      ),
      _react2.default.createElement(
        'div',
        { className: 'review-photos' },
        photos
      ),
      _react2.default.createElement(
        'div',
        { className: 'review-votes' },
        _react2.default.createElement(
          'button',
          { onClick: props.voteClick, className: 'review-voteButtons' },
          _react2.default.createElement(
            'div',
            { reviewId: id, className: 'review-vote useful' },
            'Useful ',
            useful,
            ' '
          )
        ),
        _react2.default.createElement(
          'button',
          { onClick: props.voteClick, className: 'review-voteButtons' },
          _react2.default.createElement(
            'div',
            { reviewId: id, className: 'review-vote funny' },
            'Funny ',
            funny,
            ' '
          )
        ),
        _react2.default.createElement(
          'button',
          { onClick: props.voteClick, className: 'review-voteButtons' },
          _react2.default.createElement(
            'div',
            { reviewId: id, className: 'review-vote cool' },
            'Cool ',
            cool,
            ' '
          )
        )
      )
    )
  );
};

exports.default = Review;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9SZXZpZXcuanN4Il0sIm5hbWVzIjpbIlJldmlldyIsInByb3BzIiwiaWQiLCJyZXZpZXciLCJJRCIsInN0YXJzIiwiU1RBUlMiLCJyZXZpZXdEYXRlIiwiUkVWSUVXX0RBVEUiLCJyZXZpZXdUZXh0IiwiUkVWSUVXX1RFWFQiLCJ1c2VmdWwiLCJVU0VGVUwiLCJmdW5ueSIsIkZVTk5ZIiwiY29vbCIsIkNPT0wiLCJ1c2VyIiwidXNlclBob3RvSWRVcmwiLCJQSE9UT19JRCIsInBob3RvcyIsIm1hcCIsInBob3RvSWQiLCJOQU1FIiwiVE9XTkxPQyIsIkZSSUVORFMiLCJSRVZJRVdTIiwiUEhPVE9TIiwic2xpY2UiLCJ2b3RlQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXOztBQUV0QixNQUFJQyxLQUFLRCxNQUFNRSxNQUFOLENBQWFDLEVBQXRCO0FBQ0EsTUFBSUMsUUFBUUosTUFBTUUsTUFBTixDQUFhRyxLQUF6QjtBQUNBLE1BQUlDLGFBQWFOLE1BQU1FLE1BQU4sQ0FBYUssV0FBOUI7QUFDQSxNQUFJQyxhQUFhUixNQUFNRSxNQUFOLENBQWFPLFdBQTlCO0FBQ0EsTUFBSUMsU0FBU1YsTUFBTUUsTUFBTixDQUFhUyxNQUExQjtBQUNBLE1BQUlDLFFBQVFaLE1BQU1FLE1BQU4sQ0FBYVcsS0FBekI7QUFDQSxNQUFJQyxPQUFPZCxNQUFNRSxNQUFOLENBQWFhLElBQXhCO0FBQ0EsTUFBSUMsT0FBT2hCLE1BQU1FLE1BQU4sQ0FBYWMsSUFBeEI7QUFDQSxNQUFJQyxpQkFBaUIsd0JBQXJCO0FBQ0EsTUFBSUQsS0FBS0UsUUFBTCxLQUFrQixNQUF0QixFQUE4QjtBQUM1QkQscUJBQWlCLGdCQUFnQkQsS0FBS0UsUUFBckIsR0FBZ0MsTUFBakQ7QUFDRDtBQUNELE1BQUlDLFNBQVMsRUFBYjtBQUNBLE1BQUluQixNQUFNRSxNQUFOLENBQWFpQixNQUFqQixFQUF5QjtBQUN2QkEsYUFBU25CLE1BQU1FLE1BQU4sQ0FBYWlCLE1BQWIsQ0FBb0JDLEdBQXBCLENBQXdCLFVBQVNDLE9BQVQsRUFBa0I7QUFDakQsYUFDSSx1Q0FBSyxXQUFVLFFBQWY7QUFDVyxhQUFLLGdCQUFnQkEsT0FBaEIsR0FBMEIsTUFEMUMsR0FESjtBQUtELEtBTlEsQ0FBVDtBQU9EO0FBQ0QsTUFBSUYsV0FBVyxFQUFmLEVBQW1CO0FBQ2pCQSxhQUFTLEVBQVQ7QUFDRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxTQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVUsaUJBQWYsRUFBaUMsSUFBSWxCLEVBQXJDO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxhQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxtQkFBZjtBQUNFLCtDQUFLLFdBQVUsMEJBQWY7QUFDVyxlQUFLZ0IsY0FEaEIsR0FERjtBQUdFO0FBQUE7QUFBQSxZQUFLLFdBQVUsd0JBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGlCQUFmO0FBQWtDRCxpQkFBS007QUFBdkMsV0FERjtBQUVFO0FBQUE7QUFBQSxjQUFLLFdBQVUscUJBQWY7QUFBc0NOLGlCQUFLTztBQUEzQyxXQUZGO0FBR0U7QUFBQTtBQUFBLGNBQUssV0FBVSxrQkFBZjtBQUFrQztBQUFBO0FBQUEsZ0JBQUssV0FBVSxtQkFBZjtBQUFvQ1AsbUJBQUtRO0FBQXpDLGFBQWxDO0FBQUE7QUFBQSxXQUhGO0FBSUU7QUFBQTtBQUFBLGNBQUssV0FBVSxrQkFBZjtBQUFrQztBQUFBO0FBQUEsZ0JBQUssV0FBVSxvQkFBZjtBQUFxQ1IsbUJBQUtTO0FBQTFDLGFBQWxDO0FBQUE7QUFBQSxXQUpGO0FBS0U7QUFBQTtBQUFBLGNBQUssV0FBVSxrQkFBZjtBQUFrQztBQUFBO0FBQUEsZ0JBQUssV0FBVSxtQkFBZjtBQUFvQ1QsbUJBQUtVO0FBQXpDLGFBQWxDO0FBQUE7QUFBQTtBQUxGO0FBSEY7QUFERixLQURGO0FBY0U7QUFBQTtBQUFBLFFBQUssV0FBVSxnQkFBZjtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsb0JBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGVBQWY7QUFBQTtBQUF3Q3RCLGVBQXhDO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBLFlBQUssV0FBVSxhQUFmO0FBQThCRSxxQkFBV3FCLEtBQVgsQ0FBaUIsQ0FBakIsRUFBbUIsRUFBbkI7QUFBOUI7QUFGRixPQURGO0FBS0U7QUFBQTtBQUFBLFVBQUssV0FBVSxhQUFmO0FBQThCbkI7QUFBOUIsT0FMRjtBQU1FO0FBQUE7QUFBQSxVQUFLLFdBQVUsZUFBZjtBQUFnQ1c7QUFBaEMsT0FORjtBQU9FO0FBQUE7QUFBQSxVQUFLLFdBQVUsY0FBZjtBQUNFO0FBQUE7QUFBQSxZQUFRLFNBQVNuQixNQUFNNEIsU0FBdkIsRUFBa0MsV0FBVSxvQkFBNUM7QUFDRTtBQUFBO0FBQUEsY0FBSyxVQUFVM0IsRUFBZixFQUFtQixXQUFVLG9CQUE3QjtBQUFBO0FBQTBEUyxrQkFBMUQ7QUFBQTtBQUFBO0FBREYsU0FERjtBQUdFO0FBQUE7QUFBQSxZQUFRLFNBQVNWLE1BQU00QixTQUF2QixFQUFrQyxXQUFVLG9CQUE1QztBQUNFO0FBQUE7QUFBQSxjQUFLLFVBQVUzQixFQUFmLEVBQW1CLFdBQVUsbUJBQTdCO0FBQUE7QUFBd0RXLGlCQUF4RDtBQUFBO0FBQUE7QUFERixTQUhGO0FBS0U7QUFBQTtBQUFBLFlBQVEsU0FBU1osTUFBTTRCLFNBQXZCLEVBQWtDLFdBQVUsb0JBQTVDO0FBQ0U7QUFBQTtBQUFBLGNBQUssVUFBVTNCLEVBQWYsRUFBbUIsV0FBVSxrQkFBN0I7QUFBQTtBQUFzRGEsZ0JBQXREO0FBQUE7QUFBQTtBQURGO0FBTEY7QUFQRjtBQWRGLEdBREY7QUFrQ0gsQ0F4RUQ7O2tCQTBFZWYsTSIsImZpbGUiOiJSZXZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBSZXZpZXcgPSAocHJvcHMpID0+IHtcblxuICAgIGxldCBpZCA9IHByb3BzLnJldmlldy5JRDtcbiAgICBsZXQgc3RhcnMgPSBwcm9wcy5yZXZpZXcuU1RBUlM7XG4gICAgbGV0IHJldmlld0RhdGUgPSBwcm9wcy5yZXZpZXcuUkVWSUVXX0RBVEU7XG4gICAgbGV0IHJldmlld1RleHQgPSBwcm9wcy5yZXZpZXcuUkVWSUVXX1RFWFQ7XG4gICAgbGV0IHVzZWZ1bCA9IHByb3BzLnJldmlldy5VU0VGVUw7XG4gICAgbGV0IGZ1bm55ID0gcHJvcHMucmV2aWV3LkZVTk5ZO1xuICAgIGxldCBjb29sID0gcHJvcHMucmV2aWV3LkNPT0w7XG4gICAgbGV0IHVzZXIgPSBwcm9wcy5yZXZpZXcudXNlcjtcbiAgICB2YXIgdXNlclBob3RvSWRVcmwgPSAnLi9QaWN0dXJlcy9kZWZhdWx0LnBuZyc7XG4gICAgaWYgKHVzZXIuUEhPVE9fSUQgIT09IFwiTlVMTFwiKSB7XG4gICAgICB1c2VyUGhvdG9JZFVybCA9ICcuL1BpY3R1cmVzLycgKyB1c2VyLlBIT1RPX0lEICsgJy5wbmcnO1xuICAgIH1cbiAgICBsZXQgcGhvdG9zID0gW107XG4gICAgaWYgKHByb3BzLnJldmlldy5waG90b3MpIHtcbiAgICAgIHBob3RvcyA9IHByb3BzLnJldmlldy5waG90b3MubWFwKGZ1bmN0aW9uKHBob3RvSWQpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXZhdGFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsnLi9QaWN0dXJlcy8nICsgcGhvdG9JZCArICcucG5nJ30vPlxuXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHBob3RvcyA9PT0gW10pIHtcbiAgICAgIHBob3RvcyA9ICcnO1xuICAgIH1cblxuICAgIC8vIFwidXNlclwiOiB7XG4gICAgLy8gICBcIklEXCI6IFwiMTdcIixcbiAgICAvLyAgIFwiTkFNRVwiOiBcIk5hbm5pZSBBdWZkZXJoYXJcIixcbiAgICAvLyAgIFwiVE9XTkxPQ1wiOiBcIkxpc2F2aWxsZSwgT0tcIixcbiAgICAvLyAgIFwiRlJJRU5EU1wiOiA1MjQsXG4gICAgLy8gICBcIlJFVklFV1NcIjogNjQzLFxuICAgIC8vICAgXCJQSE9UT1NcIjogNzMsXG4gICAgLy8gICBcIlBIT1RPX0lEXCI6IFwiMzA2XCJcblxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3Q29udGFpbmVyXCIgaWQ9e2lkfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctdXNlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXVzZXItdXBwZXJcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicmV2aWV3LXVzZXItdXBwZXItYXZhdGFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt1c2VyUGhvdG9JZFVybH0vPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctdXNlci11cHBlci1pbmZvXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXVzZXJuYW1lXCI+e3VzZXIuTkFNRX08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctdXNlckxvY2F0aW9uXCI+e3VzZXIuVE9XTkxPQ308L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctdXNlclN0YXRzXCI+PGRpdiBjbGFzc05hbWU9XCJyZXZpZXctdXNlck51bWJlclwiPnt1c2VyLkZSSUVORFN9PC9kaXY+IGZyaWVuZHM8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctdXNlclN0YXRzXCI+PGRpdiBjbGFzc05hbWU9XCJyZXZpZXctdXNlclJldmlld3NcIj57dXNlci5SRVZJRVdTfTwvZGl2PiByZXZpZXdzPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXVzZXJTdGF0c1wiPjxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXVzZXJQaG90b3NcIj57dXNlci5QSE9UT1N9PC9kaXY+IHBob3RvczwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy1jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctY29udGVudC10b3BcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXJhdGluZ1wiPlJhdGluZzoge3N0YXJzfSBvdXQgb2YgNSAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LWRhdGVcIj57cmV2aWV3RGF0ZS5zbGljZSg0LDE1KX08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy10ZXh0XCI+e3Jldmlld1RleHR9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctcGhvdG9zXCI+e3Bob3Rvc308L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy12b3Rlc1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy52b3RlQ2xpY2t9IGNsYXNzTmFtZT1cInJldmlldy12b3RlQnV0dG9uc1wiPlxuICAgICAgICAgICAgICA8ZGl2IHJldmlld0lkPXtpZH0gY2xhc3NOYW1lPVwicmV2aWV3LXZvdGUgdXNlZnVsXCI+VXNlZnVsIHt1c2VmdWx9IDwvZGl2PjwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy52b3RlQ2xpY2t9IGNsYXNzTmFtZT1cInJldmlldy12b3RlQnV0dG9uc1wiPlxuICAgICAgICAgICAgICA8ZGl2IHJldmlld0lkPXtpZH0gY2xhc3NOYW1lPVwicmV2aWV3LXZvdGUgZnVubnlcIj5GdW5ueSB7ZnVubnl9IDwvZGl2PjwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy52b3RlQ2xpY2t9IGNsYXNzTmFtZT1cInJldmlldy12b3RlQnV0dG9uc1wiPlxuICAgICAgICAgICAgICA8ZGl2IHJldmlld0lkPXtpZH0gY2xhc3NOYW1lPVwicmV2aWV3LXZvdGUgY29vbFwiPkNvb2wge2Nvb2x9IDwvZGl2PjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJldmlldzsiXX0=