'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Review = require('./Review.jsx');

var _Review2 = _interopRequireDefault(_Review);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReviewList = function ReviewList(props) {
  var reviews = props.reviews;
  if (reviews) {
    reviews = reviews.map(function (review) {
      return _react2.default.createElement(_Review2.default, { voteClick: props.voteClick, review: review });
    });
  }

  return _react2.default.createElement(
    'div',
    { className: 'review-List' },
    reviews
  );
};
exports.default = ReviewList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9SZXZpZXdMaXN0LmpzeCJdLCJuYW1lcyI6WyJSZXZpZXdMaXN0IiwicHJvcHMiLCJyZXZpZXdzIiwibWFwIiwicmV2aWV3Iiwidm90ZUNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGFBQWEsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFDNUIsTUFBSUMsVUFBVUQsTUFBTUMsT0FBcEI7QUFDQSxNQUFJQSxPQUFKLEVBQWE7QUFDWEEsY0FBVUEsUUFBUUMsR0FBUixDQUFZLFVBQUNDLE1BQUQ7QUFBQSxhQUNwQiw4QkFBQyxnQkFBRCxJQUFRLFdBQVdILE1BQU1JLFNBQXpCLEVBQW9DLFFBQVFELE1BQTVDLEdBRG9CO0FBQUEsS0FBWixDQUFWO0FBR0Q7O0FBRUQsU0FDRTtBQUFBO0FBQUEsTUFBSyxXQUFVLGFBQWY7QUFDR0Y7QUFESCxHQURGO0FBS0QsQ0FiRDtrQkFjZUYsVSIsImZpbGUiOiJSZXZpZXdMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZXZpZXcgZnJvbSAnLi9SZXZpZXcuanN4JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNvbnN0IFJldmlld0xpc3QgPSAocHJvcHMpID0+IHtcbiAgbGV0IHJldmlld3MgPSBwcm9wcy5yZXZpZXdzO1xuICBpZiAocmV2aWV3cykge1xuICAgIHJldmlld3MgPSByZXZpZXdzLm1hcCgocmV2aWV3KSA9PiAoXG4gICAgICA8UmV2aWV3IHZvdGVDbGljaz17cHJvcHMudm90ZUNsaWNrfSByZXZpZXc9e3Jldmlld30gLz5cbiAgICApKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctTGlzdFwiPlxuICAgICAge3Jldmlld3N9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUmV2aWV3TGlzdDtcbiJdfQ==