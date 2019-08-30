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
  // const STARS = props.review.STARS;
  // const REVIEW_DATE = props.review.REVIEW_DATE;
  // const REVIEW_TEXT = props.review.REVIEW_TEXT;
  // const USEFUL = props.review.USEFUL;
  // const FUNNY = props.review.FUNNY;
  // const COOL = props.review.COOL;
  // const user = props.review.user;

  var userPhotoIdUrl = './Pictures/default.png';
  if (user.PHOTO_ID !== 'NULL') {
    userPhotoIdUrl = ['./Pictures/', user.PHOTO_ID, '.png'].join('');
  }
  var photos = props.review.photos;

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
  var rating = 'Rating: ' + STARS + ' out of 5   ';
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
          rating
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9SZXZpZXcuanN4Il0sIm5hbWVzIjpbIlJldmlldyIsInByb3BzIiwicmV2aWV3IiwiSUQiLCJTVEFSUyIsIlJFVklFV19EQVRFIiwiUkVWSUVXX1RFWFQiLCJVU0VGVUwiLCJGVU5OWSIsIkNPT0wiLCJ1c2VyIiwidXNlclBob3RvSWRVcmwiLCJQSE9UT19JRCIsImpvaW4iLCJwaG90b3MiLCJtYXAiLCJwaG90b0lkIiwicmF0aW5nIiwidXNlZnVsVGV4dCIsImZ1bm55VGV4dCIsImNvb2xUZXh0IiwiTkFNRSIsIlRPV05MT0MiLCJGUklFTkRTIiwiUkVWSUVXUyIsIlBIT1RPUyIsInNsaWNlIiwidm90ZUNsaWNrIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm51bWJlciIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7QUFBQSxzQkFHcEJBLE1BQU1DLE1BSGM7QUFBQSxNQUV0QkMsRUFGc0IsaUJBRXRCQSxFQUZzQjtBQUFBLE1BRWxCQyxLQUZrQixpQkFFbEJBLEtBRmtCO0FBQUEsTUFFWEMsV0FGVyxpQkFFWEEsV0FGVztBQUFBLE1BRUVDLFdBRkYsaUJBRUVBLFdBRkY7QUFBQSxNQUVlQyxNQUZmLGlCQUVlQSxNQUZmO0FBQUEsTUFFdUJDLEtBRnZCLGlCQUV1QkEsS0FGdkI7QUFBQSxNQUU4QkMsSUFGOUIsaUJBRThCQSxJQUY5QjtBQUFBLE1BRW9DQyxJQUZwQyxpQkFFb0NBLElBRnBDO0FBSXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQUlDLGlCQUFpQix3QkFBckI7QUFDQSxNQUFJRCxLQUFLRSxRQUFMLEtBQWtCLE1BQXRCLEVBQThCO0FBQzVCRCxxQkFBaUIsQ0FBQyxhQUFELEVBQWdCRCxLQUFLRSxRQUFy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LEVBQWdELFdBQVUseUJBQTFEO0FBQ0U7QUFBQTtBQUFBLGNBQUssVUFBVXhCLEVBQWYsRUFBbUIsV0FBVSxrQkFBN0I7QUFDR2lCO0FBREg7QUFERjtBQVhGO0FBUEY7QUExQkYsR0FERjtBQXNERCxDQXZGRDs7QUF5RkFwQixPQUFPNEIsU0FBUCxHQUFtQjtBQUNqQjFCLFVBQVE7QUFDTkMsUUFBSTBCLG9CQUFVQyxNQUFWLENBQWlCQyxVQURmO0FBRU4zQixXQUFPeUIsb0JBQVVHLE1BQVYsQ0FBaUJELFVBRmxCO0FBR04xQixpQkFBYXdCLG9CQUFVQyxNQUFWLENBQWlCQyxVQUh4QjtBQUlOekIsaUJBQWF1QixvQkFBVUMsTUFBVixDQUFpQkMsVUFKeEI7QUFLTnhCLFlBQVFzQixvQkFBVUcsTUFBVixDQUFpQkQsVUFMbkI7QUFNTnZCLFdBQU9xQixvQkFBVUcsTUFBVixDQUFpQkQsVUFObEI7QUFPTnRCLFVBQU1vQixvQkFBVUcsTUFBVixDQUFpQkQsVUFQakI7QUFRTnJCLFVBQU07QUFDSlcsWUFBTVEsb0JBQVVDLE1BQVYsQ0FBaUJDLFVBRG5CO0FBRUpSLGVBQVNNLG9CQUFVRyxNQUFWLENBQWlCRCxVQUZ0QjtBQUdKUCxlQUFTSyxvQkFBVUcsTUFBVixDQUFpQkQsVUFIdEI7QUFJSk4sY0FBUUksb0JBQVVHLE1BQVYsQ0FBaUJELFVBSnJCO0FBS0pULGVBQVNPLG9CQUFVQyxNQUFWLENBQWlCQztBQUx0QixNQU1KQTs7QUFkSSxJQWdCTkEsVUFqQmU7QUFrQmpCSixhQUFXRSxvQkFBVUksSUFBVixDQUFlRjtBQWxCVCxDQUFuQjs7a0JBcUJlL0IsTSIsImZpbGUiOiJSZXZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgUmV2aWV3ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBJRCwgU1RBUlMsIFJFVklFV19EQVRFLCBSRVZJRVdfVEVYVCwgVVNFRlVMLCBGVU5OWSwgQ09PTCwgdXNlcixcbiAgfSA9IHByb3BzLnJldmlldztcbiAgLy8gY29uc3QgU1RBUlMgPSBwcm9wcy5yZXZpZXcuU1RBUlM7XG4gIC8vIGNvbnN0IFJFVklFV19EQVRFID0gcHJvcHMucmV2aWV3LlJFVklFV19EQVRFO1xuICAvLyBjb25zdCBSRVZJRVdfVEVYVCA9IHByb3BzLnJldmlldy5SRVZJRVdfVEVYVDtcbiAgLy8gY29uc3QgVVNFRlVMID0gcHJvcHMucmV2aWV3LlVTRUZVTDtcbiAgLy8gY29uc3QgRlVOTlkgPSBwcm9wcy5yZXZpZXcuRlVOTlk7XG4gIC8vIGNvbnN0IENPT0wgPSBwcm9wcy5yZXZpZXcuQ09PTDtcbiAgLy8gY29uc3QgdXNlciA9IHByb3BzLnJldmlldy51c2VyO1xuICBsZXQgdXNlclBob3RvSWRVcmwgPSAnLi9QaWN0dXJlcy9kZWZhdWx0LnBuZyc7XG4gIGlmICh1c2VyLlBIT1RPX0lEICE9PSAnTlVMTCcpIHtcbiAgICB1c2VyUGhvdG9JZFVybCA9IFsnLi9QaWN0dXJlcy8nLCB1c2VyLlBIT1RPX0lELCAnLnBuZyddLmpvaW4oJycpO1xuICB9XG4gIGxldCB7IHBob3RvcyB9ID0gcHJvcHMucmV2aWV3O1xuICBpZiAocGhvdG9zKSB7XG4gICAgcGhvdG9zID0gcHJvcHMucmV2aWV3LnBob3Rvcy5tYXAoKHBob3RvSWQpID0+IChcbiAgICAgIDxpbWdcbiAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgY2xhc3NOYW1lPVwicmV2aWV3LXBob3RvXCJcbiAgICAgICAgc3JjPXtbJy4vUGljdHVyZXMvJywgcGhvdG9JZCwgJy5wbmcnXS5qb2luKCcnKX1cbiAgICAgIC8+XG4gICAgKSk7XG4gIH1cbiAgaWYgKHBob3RvcyA9PT0gW10pIHtcbiAgICBwaG90b3MgPSAnJztcbiAgfVxuICBjb25zdCByYXRpbmcgPSBgUmF0aW5nOiAke1NUQVJTfSBvdXQgb2YgNSAgIGA7XG4gIGNvbnN0IHVzZWZ1bFRleHQgPSBgVXNlZnVsOiAke1VTRUZVTH1gO1xuICBjb25zdCBmdW5ueVRleHQgPSBgRnVubnk6ICR7RlVOTll9YDtcbiAgY29uc3QgY29vbFRleHQgPSBgQ29vbDogJHtDT09MfWA7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlld0NvbnRhaW5lclwiIGlkPXtJRH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy11c2VyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXVzZXItdXBwZXJcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmV2aWV3LXVzZXItdXBwZXItYXZhdGFyXCJcbiAgICAgICAgICAgIHNyYz17dXNlclBob3RvSWRVcmx9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy11c2VyLXVwcGVyLWluZm9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXVzZXJuYW1lXCI+e3VzZXIuTkFNRX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXVzZXJMb2NhdGlvblwiPnt1c2VyLlRPV05MT0N9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy11c2VyU3RhdHNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctdXNlck51bWJlclwiPnt1c2VyLkZSSUVORFN9PC9kaXY+XG4gICAgICAgICAgICAgICBmcmllbmRzXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXVzZXJTdGF0c1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy11c2VyUmV2aWV3c1wiPnt1c2VyLlJFVklFV1N9PC9kaXY+XG4gICAgICAgICAgICAgICByZXZpZXdzXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXVzZXJTdGF0c1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy11c2VyUGhvdG9zXCI+e3VzZXIuUEhPVE9TfTwvZGl2PlxuICAgICAgICAgICAgICAgcGhvdG9zXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctY29udGVudC10b3BcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy1yYXRpbmdcIj57cmF0aW5nfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LWRhdGVcIj57UkVWSUVXX0RBVEUuc2xpY2UoNCwgMTUpfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctdGV4dFwiPntSRVZJRVdfVEVYVH08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctcGhvdG9zXCI+e3Bob3Rvc308L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctdm90ZXNcIj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtwcm9wcy52b3RlQ2xpY2t9IGNsYXNzTmFtZT1cInJldmlldy12b3RlQnV0dG9ucyB1c2VmdWxcIj5cbiAgICAgICAgICAgIDxkaXYgcmV2aWV3aWQ9e0lEfSBjbGFzc05hbWU9XCJyZXZpZXctdm90ZSB1c2VmdWxcIj5cbiAgICAgICAgICAgICAge3VzZWZ1bFRleHR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtwcm9wcy52b3RlQ2xpY2t9IGNsYXNzTmFtZT1cInJldmlldy12b3RlQnV0dG9ucyBmdW5ueVwiPlxuICAgICAgICAgICAgPGRpdiByZXZpZXdpZD17SUR9IGNsYXNzTmFtZT1cInJldmlldy12b3RlIGZ1bm55XCI+XG4gICAgICAgICAgICAgIHtmdW5ueVRleHR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtwcm9wcy52b3RlQ2xpY2t9IGNsYXNzTmFtZT1cInJldmlldy12b3RlQnV0dG9ucyBjb29sXCI+XG4gICAgICAgICAgICA8ZGl2IHJldmlld2lkPXtJRH0gY2xhc3NOYW1lPVwicmV2aWV3LXZvdGUgY29vbFwiPlxuICAgICAgICAgICAgICB7Y29vbFRleHR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblJldmlldy5wcm9wVHlwZXMgPSB7XG4gIHJldmlldzoge1xuICAgIElEOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgU1RBUlM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBSRVZJRVdfREFURTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIFJFVklFV19URVhUOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgVVNFRlVMOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgRlVOTlk6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICBDT09MOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgdXNlcjoge1xuICAgICAgTkFNRTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgRlJJRU5EUzogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgUkVWSUVXUzogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgUEhPVE9TOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBUT1dOTE9DOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgfS5pc1JlcXVpcmVkLFxuXG4gIH0uaXNSZXF1aXJlZCxcbiAgdm90ZUNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3O1xuIl19