'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  var ratingHTML = [1, 2, 3, 4, 5].map(function (rating) {
    if (rating <= Number(STARS)) {
      return _react2.default.createElement(
        'span',
        { 'class': 'fa fa-star checked' },
        '\u2B51'
      );
    } else {
      return _react2.default.createElement(
        'span',
        { 'class': 'fa fa-star' },
        '\u2B51'
      );
    }
  });
  console.log(ratingHTML);
  // for (let i = 0; i < 5; i += 1) {
  //   if ( i <= Number(STARS)) {
  //     ratingHTML += ('<span class="fa fa-star checked"></span>');
  //   } else {
  //     ratingHTML += ('<span class="fa fa-star "></span>');
  //   }
  // }
  // const rating = `Rating: ${STARS} out of 5   `;
  var usefulText = 'Useful: ' + USEFUL;
  var funnyText = 'Funny: ' + FUNNY;
  var coolText = 'Cool: ' + COOL;

  return _react2.default.createElement(
    'div',
    { className: 'reviewContainer', id: ID },
    _react2.default.createElement(
      'div',
      { className: 'review-user' },
      _react2.default.createElement(
        'div',
        { className: 'review-user-upper' },
        _react2.default.createElement('img', {
          alt: '',
          className: 'review-user-upper-avatar',
          src: userPhotoIdUrl
        }),
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
            'friends'
          ),
          _react2.default.createElement(
            'div',
            { className: 'review-userStats' },
            _react2.default.createElement(
              'div',
              { className: 'review-userReviews' },
              user.REVIEWS
            ),
            'reviews'
          ),
          _react2.default.createElement(
            'div',
            { className: 'review-userStats' },
            _react2.default.createElement(
              'div',
              { className: 'review-userPhotos' },
              user.PHOTOS
            ),
            'photos'
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
          ratingHTML
        ),
        _react2.default.createElement(
          'div',
          { className: 'review-date' },
          REVIEW_DATE.slice(4, 15)
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'review-text' },
        REVIEW_TEXT
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
          { type: 'button', onClick: props.voteClick, className: 'review-voteButtons useful' },
          _react2.default.createElement(
            'div',
            { reviewid: ID, className: 'review-vote useful' },
            usefulText
          )
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', onClick: props.voteClick, className: 'review-voteButtons funny' },
          _react2.default.createElement(
            'div',
            { reviewid: ID, className: 'review-vote funny' },
            funnyText
          )
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', onClick: props.voteClick, className: 'review-voteButtons cool' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9SZXZpZXcuanN4Il0sIm5hbWVzIjpbIlJldmlldyIsInByb3BzIiwicmV2aWV3IiwiSUQiLCJTVEFSUyIsIlJFVklFV19EQVRFIiwiUkVWSUVXX1RFWFQiLCJVU0VGVUwiLCJGVU5OWSIsIkNPT0wiLCJ1c2VyIiwidXNlclBob3RvSWRVcmwiLCJQSE9UT19JRCIsImpvaW4iLCJwaG90b3MiLCJjb25zb2xlIiwibG9nIiwibWFwIiwicGhvdG9JZCIsInJhdGluZ0hUTUwiLCJyYXRpbmciLCJOdW1iZXIiLCJ1c2VmdWxUZXh0IiwiZnVubnlUZXh0IiwiY29vbFRleHQiLCJOQU1FIiwiVE9XTkxPQyIsIkZSSUVORFMiLCJSRVZJRVdTIiwiUEhPVE9TIiwic2xpY2UiLCJ2b3RlQ2xpY2siLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwibnVtYmVyIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsU0FBUyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVztBQUFBLHNCQUdwQkEsTUFBTUMsTUFIYztBQUFBLE1BRXRCQyxFQUZzQixpQkFFdEJBLEVBRnNCO0FBQUEsTUFFbEJDLEtBRmtCLGlCQUVsQkEsS0FGa0I7QUFBQSxNQUVYQyxXQUZXLGlCQUVYQSxXQUZXO0FBQUEsTUFFRUMsV0FGRixpQkFFRUEsV0FGRjtBQUFBLE1BRWVDLE1BRmYsaUJBRWVBLE1BRmY7QUFBQSxNQUV1QkMsS0FGdkIsaUJBRXVCQSxLQUZ2QjtBQUFBLE1BRThCQyxJQUY5QixpQkFFOEJBLElBRjlCO0FBQUEsTUFFb0NDLElBRnBDLGlCQUVvQ0EsSUFGcEM7O0FBSXhCLE1BQUlDLGlCQUFpQix3QkFBckI7QUFDQSxNQUFJRCxLQUFLRSxRQUFMLEtBQWtCLE1BQXRCLEVBQThCO0FBQzVCRCxxQkFBaUIsQ0FBQyxhQUFELEVBQWdCRCxLQUFLRSxR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QWlCRCxVQUh0QjtBQUlKTixjQUFRSSxvQkFBVUcsTUFBVixDQUFpQkQsVUFKckI7QUFLSlQsZUFBU08sb0JBQVVDLE1BQVYsQ0FBaUJDO0FBTHRCLE1BTUpBOztBQWRJLElBZ0JOQSxVQWpCZTtBQWtCakJKLGFBQVdFLG9CQUFVSSxJQUFWLENBQWVGO0FBbEJULENBQW5COztrQkFxQmVuQyxNIiwiZmlsZSI6IlJldmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBSZXZpZXcgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIElELCBTVEFSUywgUkVWSUVXX0RBVEUsIFJFVklFV19URVhULCBVU0VGVUwsIEZVTk5ZLCBDT09MLCB1c2VyLFxuICB9ID0gcHJvcHMucmV2aWV3O1xuICBsZXQgdXNlclBob3RvSWRVcmwgPSAnLi9QaWN0dXJlcy9kZWZhdWx0LnBuZyc7XG4gIGlmICh1c2VyLlBIT1RPX0lEICE9PSAnTlVMTCcpIHtcbiAgICB1c2VyUGhvdG9JZFVybCA9IFsnLi9QaWN0dXJlcy8nLCB1c2VyLlBIT1RPX0lELCAnLnBuZyddLmpvaW4oJycpO1xuICB9XG4gIGxldCB7IHBob3RvcyB9ID0gcHJvcHMucmV2aWV3O1xuICBjb25zb2xlLmxvZyhwaG90b3MpO1xuICBpZiAocGhvdG9zKSB7XG4gICAgcGhvdG9zID0gcHJvcHMucmV2aWV3LnBob3Rvcy5tYXAoKHBob3RvSWQpID0+IChcbiAgICAgIDxpbWdcbiAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgY2xhc3NOYW1lPVwicmV2aWV3LXBob3RvXCJcbiAgICAgICAgc3JjPXtbJy4vUGljdHVyZXMvJywgcGhvdG9JZCwgJy5wbmcnXS5qb2luKCcnKX1cbiAgICAgIC8+XG4gICAgKSk7XG4gIH1cbiAgaWYgKHBob3RvcyA9PT0gW10pIHtcbiAgICBwaG90b3MgPSAnJztcbiAgfVxuICBsZXQgcmF0aW5nSFRNTCA9IFsxLDIsMyw0LDVdLm1hcCgocmF0aW5nKSA9PiB7XG4gICAgaWYgKCByYXRpbmcgPD0gTnVtYmVyKFNUQVJTKSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIGNoZWNrZWRcIj7irZE8L3NwYW4+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXJcIj7irZE8L3NwYW4+XG4gICAgICApO1xuICAgIH1cbiAgfSk7XG4gIGNvbnNvbGUubG9nKHJhdGluZ0hUTUwpO1xuICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkgKz0gMSkge1xuICAvLyAgIGlmICggaSA8PSBOdW1iZXIoU1RBUlMpKSB7XG4gIC8vICAgICByYXRpbmdIVE1MICs9ICgnPHNwYW4gY2xhc3M9XCJmYSBmYS1zdGFyIGNoZWNrZWRcIj48L3NwYW4+Jyk7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIHJhdGluZ0hUTUwgKz0gKCc8c3BhbiBjbGFzcz1cImZhIGZhLXN0YXIgXCI+PC9zcGFuPicpO1xuICAvLyAgIH1cbiAgLy8gfVxuICAvLyBjb25zdCByYXRpbmcgPSBgUmF0aW5nOiAke1NUQVJTfSBvdXQgb2YgNSAgIGA7XG4gIGNvbnN0IHVzZWZ1bFRleHQgPSBgVXNlZnVsOiAke1VTRUZVTH1gO1xuICBjb25zdCBmdW5ueVRleHQgPSBgRnVubnk6ICR7RlVOTll9YDtcbiAgY29uc3QgY29vbFRleHQgPSBgQ29vbDogJHtDT09MfWA7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlld0NvbnRhaW5lclwiIGlkPXtJRH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy11c2VyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXVzZXItdXBwZXJcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmV2aWV3LXVzZXItdXBwZXItYXZhdGFyXCJcbiAgICAgICAgICAgIHNyYz17dXNlclBob3RvSWRVcmx9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy11c2VyLXVwcGVyLWluZm9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXVzZXJuYW1lXCI+e3VzZXIuTkFNRX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXVzZXJMb2NhdGlvblwiPnt1c2VyLlRPV05MT0N9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy11c2VyU3RhdHNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctdXNlck51bWJlclwiPnt1c2VyLkZSSUVORFN9PC9kaXY+XG4gICAgICAgICAgICAgICBmcmllbmRzXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXVzZXJTdGF0c1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy11c2VyUmV2aWV3c1wiPnt1c2VyLlJFVklFV1N9PC9kaXY+XG4gICAgICAgICAgICAgICByZXZpZXdzXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXVzZXJTdGF0c1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy11c2VyUGhvdG9zXCI+e3VzZXIuUEhPVE9TfTwvZGl2PlxuICAgICAgICAgICAgICAgcGhvdG9zXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctY29udGVudC10b3BcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy1yYXRpbmdcIj57cmF0aW5nSFRNTH08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy1kYXRlXCI+e1JFVklFV19EQVRFLnNsaWNlKDQsIDE1KX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXRleHRcIj57UkVWSUVXX1RFWFR9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXBob3Rvc1wiPntwaG90b3N9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXZvdGVzXCI+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17cHJvcHMudm90ZUNsaWNrfSBjbGFzc05hbWU9XCJyZXZpZXctdm90ZUJ1dHRvbnMgdXNlZnVsXCI+XG4gICAgICAgICAgICA8ZGl2IHJldmlld2lkPXtJRH0gY2xhc3NOYW1lPVwicmV2aWV3LXZvdGUgdXNlZnVsXCI+XG4gICAgICAgICAgICAgIHt1c2VmdWxUZXh0fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17cHJvcHMudm90ZUNsaWNrfSBjbGFzc05hbWU9XCJyZXZpZXctdm90ZUJ1dHRvbnMgZnVubnlcIj5cbiAgICAgICAgICAgIDxkaXYgcmV2aWV3aWQ9e0lEfSBjbGFzc05hbWU9XCJyZXZpZXctdm90ZSBmdW5ueVwiPlxuICAgICAgICAgICAgICB7ZnVubnlUZXh0fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17cHJvcHMudm90ZUNsaWNrfSBjbGFzc05hbWU9XCJyZXZpZXctdm90ZUJ1dHRvbnMgY29vbFwiPlxuICAgICAgICAgICAgPGRpdiByZXZpZXdpZD17SUR9IGNsYXNzTmFtZT1cInJldmlldy12b3RlIGNvb2xcIj5cbiAgICAgICAgICAgICAge2Nvb2xUZXh0fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5SZXZpZXcucHJvcFR5cGVzID0ge1xuICByZXZpZXc6IHtcbiAgICBJRDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIFNUQVJTOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgUkVWSUVXX0RBVEU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBSRVZJRVdfVEVYVDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIFVTRUZVTDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIEZVTk5ZOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgQ09PTDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHVzZXI6IHtcbiAgICAgIE5BTUU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIEZSSUVORFM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIFJFVklFV1M6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIFBIT1RPUzogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgVE9XTkxPQzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIH0uaXNSZXF1aXJlZCxcblxuICB9LmlzUmVxdWlyZWQsXG4gIHZvdGVDbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJldmlldztcbiJdfQ==