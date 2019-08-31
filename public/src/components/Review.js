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

  if (photos) {
    photos = props.review.photos.map(function (photoId) {
      return _react2.default.createElement('img', {
        alt: '',
        className: 'review-photo',
        src: './Pictures/{photoId}.png'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9SZXZpZXcuanN4Il0sIm5hbWVzIjpbIlJldmlldyIsInByb3BzIiwicmV2aWV3IiwiSUQiLCJTVEFSUyIsIlJFVklFV19EQVRFIiwiUkVWSUVXX1RFWFQiLCJVU0VGVUwiLCJGVU5OWSIsIkNPT0wiLCJ1c2VyIiwidXNlclBob3RvSWRVcmwiLCJQSE9UT19JRCIsImpvaW4iLCJwaG90b3MiLCJtYXAiLCJwaG90b0lkIiwicmF0aW5nIiwidXNlZnVsVGV4dCIsImZ1bm55VGV4dCIsImNvb2xUZXh0IiwiTkFNRSIsIlRPV05MT0MiLCJGUklFTkRTIiwiUkVWSUVXUyIsIlBIT1RPUyIsInNsaWNlIiwidm90ZUNsaWNrIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm51bWJlciIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7QUFBQSxzQkFHcEJBLE1BQU1DLE1BSGM7QUFBQSxNQUV0QkMsRUFGc0IsaUJBRXRCQSxFQUZzQjtBQUFBLE1BRWxCQyxLQUZrQixpQkFFbEJBLEtBRmtCO0FBQUEsTUFFWEMsV0FGVyxpQkFFWEEsV0FGVztBQUFBLE1BRUVDLFdBRkYsaUJBRUVBLFdBRkY7QUFBQSxNQUVlQyxNQUZmLGlCQUVlQSxNQUZmO0FBQUEsTUFFdUJDLEtBRnZCLGlCQUV1QkEsS0FGdkI7QUFBQSxNQUU4QkMsSUFGOUIsaUJBRThCQSxJQUY5QjtBQUFBLE1BRW9DQyxJQUZwQyxpQkFFb0NBLElBRnBDOztBQUl4QixNQUFJQyxpQkFBaUIsd0JBQXJCO0FBQ0EsTUFBSUQsS0FBS0UsUUFBTCxLQUFrQixNQUF0QixFQUE4QjtBQUM1QkQscUJBQWlCLENBQUMsYUFBRCxFQUFnQkQsS0FBS0UsUUFBckIsRUFBK0IsTUFBL0IsRUFBdUNDLElBQXZDLENBQTRDLEVB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QUExQkYsR0FERjtBQXNERCxDQWhGRDs7QUFrRkFwQixPQUFPNEIsU0FBUCxHQUFtQjtBQUNqQjFCLFVBQVE7QUFDTkMsUUFBSTBCLG9CQUFVQyxNQUFWLENBQWlCQyxVQURmO0FBRU4zQixXQUFPeUIsb0JBQVVHLE1BQVYsQ0FBaUJELFVBRmxCO0FBR04xQixpQkFBYXdCLG9CQUFVQyxNQUFWLENBQWlCQyxVQUh4QjtBQUlOekIsaUJBQWF1QixvQkFBVUMsTUFBVixDQUFpQkMsVUFKeEI7QUFLTnhCLFlBQVFzQixvQkFBVUcsTUFBVixDQUFpQkQsVUFMbkI7QUFNTnZCLFdBQU9xQixvQkFBVUcsTUFBVixDQUFpQkQsVUFObEI7QUFPTnRCLFVBQU1vQixvQkFBVUcsTUFBVixDQUFpQkQsVUFQakI7QUFRTnJCLFVBQU07QUFDSlcsWUFBTVEsb0JBQVVDLE1BQVYsQ0FBaUJDLFVBRG5CO0FBRUpSLGVBQVNNLG9CQUFVRyxNQUFWLENBQWlCRCxVQUZ0QjtBQUdKUCxlQUFTSyxvQkFBVUcsTUFBVixDQUFpQkQsVUFIdEI7QUFJSk4sY0FBUUksb0JBQVVHLE1BQVYsQ0FBaUJELFVBSnJCO0FBS0pULGVBQVNPLG9CQUFVQyxNQUFWLENBQWlCQztBQUx0QixNQU1KQTs7QUFkSSxJQWdCTkEsVUFqQmU7QUFrQmpCSixhQUFXRSxvQkFBVUksSUFBVixDQUFlRjtBQWxCVCxDQUFuQjs7a0JBcUJlL0IsTSIsImZpbGUiOiJSZXZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgUmV2aWV3ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBJRCwgU1RBUlMsIFJFVklFV19EQVRFLCBSRVZJRVdfVEVYVCwgVVNFRlVMLCBGVU5OWSwgQ09PTCwgdXNlcixcbiAgfSA9IHByb3BzLnJldmlldztcbiAgbGV0IHVzZXJQaG90b0lkVXJsID0gJy4vUGljdHVyZXMvZGVmYXVsdC5wbmcnO1xuICBpZiAodXNlci5QSE9UT19JRCAhPT0gJ05VTEwnKSB7XG4gICAgdXNlclBob3RvSWRVcmwgPSBbJy4vUGljdHVyZXMvJywgdXNlci5QSE9UT19JRCwgJy5wbmcnXS5qb2luKCcnKTtcbiAgfVxuICBsZXQgeyBwaG90b3MgfSA9IHByb3BzLnJldmlldztcbiAgaWYgKHBob3Rvcykge1xuICAgIHBob3RvcyA9IHByb3BzLnJldmlldy5waG90b3MubWFwKChwaG90b0lkKSA9PiAoXG4gICAgICA8aW1nXG4gICAgICAgIGFsdD1cIlwiXG4gICAgICAgIGNsYXNzTmFtZT1cInJldmlldy1waG90b1wiXG4gICAgICAgIHNyYz17Jy4vUGljdHVyZXMve3Bob3RvSWR9LnBuZyd9XG4gICAgICAvPlxuICAgICkpO1xuICB9XG4gIGlmIChwaG90b3MgPT09IFtdKSB7XG4gICAgcGhvdG9zID0gJyc7XG4gIH1cbiAgY29uc3QgcmF0aW5nID0gYFJhdGluZzogJHtTVEFSU30gb3V0IG9mIDUgICBgO1xuICBjb25zdCB1c2VmdWxUZXh0ID0gYFVzZWZ1bDogJHtVU0VGVUx9YDtcbiAgY29uc3QgZnVubnlUZXh0ID0gYEZ1bm55OiAke0ZVTk5ZfWA7XG4gIGNvbnN0IGNvb2xUZXh0ID0gYENvb2w6ICR7Q09PTH1gO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXdDb250YWluZXJcIiBpZD17SUR9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctdXNlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy11c2VyLXVwcGVyXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJldmlldy11c2VyLXVwcGVyLWF2YXRhclwiXG4gICAgICAgICAgICBzcmM9e3VzZXJQaG90b0lkVXJsfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctdXNlci11cHBlci1pbmZvXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy11c2VybmFtZVwiPnt1c2VyLk5BTUV9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy11c2VyTG9jYXRpb25cIj57dXNlci5UT1dOTE9DfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctdXNlclN0YXRzXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXVzZXJOdW1iZXJcIj57dXNlci5GUklFTkRTfTwvZGl2PlxuICAgICAgICAgICAgICAgZnJpZW5kc1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy11c2VyU3RhdHNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctdXNlclJldmlld3NcIj57dXNlci5SRVZJRVdTfTwvZGl2PlxuICAgICAgICAgICAgICAgcmV2aWV3c1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy11c2VyU3RhdHNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctdXNlclBob3Rvc1wiPnt1c2VyLlBIT1RPU308L2Rpdj5cbiAgICAgICAgICAgICAgIHBob3Rvc1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LWNvbnRlbnQtdG9wXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctcmF0aW5nXCI+e3JhdGluZ308L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy1kYXRlXCI+e1JFVklFV19EQVRFLnNsaWNlKDQsIDE1KX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXRleHRcIj57UkVWSUVXX1RFWFR9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXBob3Rvc1wiPntwaG90b3N9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LXZvdGVzXCI+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17cHJvcHMudm90ZUNsaWNrfSBjbGFzc05hbWU9XCJyZXZpZXctdm90ZUJ1dHRvbnMgdXNlZnVsXCI+XG4gICAgICAgICAgICA8ZGl2IHJldmlld2lkPXtJRH0gY2xhc3NOYW1lPVwicmV2aWV3LXZvdGUgdXNlZnVsXCI+XG4gICAgICAgICAgICAgIHt1c2VmdWxUZXh0fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17cHJvcHMudm90ZUNsaWNrfSBjbGFzc05hbWU9XCJyZXZpZXctdm90ZUJ1dHRvbnMgZnVubnlcIj5cbiAgICAgICAgICAgIDxkaXYgcmV2aWV3aWQ9e0lEfSBjbGFzc05hbWU9XCJyZXZpZXctdm90ZSBmdW5ueVwiPlxuICAgICAgICAgICAgICB7ZnVubnlUZXh0fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17cHJvcHMudm90ZUNsaWNrfSBjbGFzc05hbWU9XCJyZXZpZXctdm90ZUJ1dHRvbnMgY29vbFwiPlxuICAgICAgICAgICAgPGRpdiByZXZpZXdpZD17SUR9IGNsYXNzTmFtZT1cInJldmlldy12b3RlIGNvb2xcIj5cbiAgICAgICAgICAgICAge2Nvb2xUZXh0fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5SZXZpZXcucHJvcFR5cGVzID0ge1xuICByZXZpZXc6IHtcbiAgICBJRDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIFNUQVJTOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgUkVWSUVXX0RBVEU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBSRVZJRVdfVEVYVDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIFVTRUZVTDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIEZVTk5ZOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgQ09PTDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHVzZXI6IHtcbiAgICAgIE5BTUU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIEZSSUVORFM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIFJFVklFV1M6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIFBIT1RPUzogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgVE9XTkxPQzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIH0uaXNSZXF1aXJlZCxcblxuICB9LmlzUmVxdWlyZWQsXG4gIHZvdGVDbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJldmlldztcbiJdfQ==