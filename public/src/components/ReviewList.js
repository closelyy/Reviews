'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Review = require('./Review.jsx');

var _Review2 = _interopRequireDefault(_Review);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9SZXZpZXdMaXN0LmpzeCJdLCJuYW1lcyI6WyJSZXZpZXdMaXN0IiwicHJvcHMiLCJyZXZpZXdzIiwibWFwIiwicmV2aWV3Iiwidm90ZUNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxhQUFhLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQzVCLE1BQUlDLFVBQVVELE1BQU1DLE9BQXBCO0FBQ0EsTUFBSUEsT0FBSixFQUFhO0FBQ1hBLGNBQVVBLFFBQVFDLEdBQVIsQ0FBWSxVQUFDQyxNQUFEO0FBQUEsYUFDcEIsOEJBQUMsZ0JBQUQsSUFBUSxXQUFXSCxNQUFNSSxTQUF6QixFQUFvQyxRQUFRRCxNQUE1QyxHQURvQjtBQUFBLEtBQVosQ0FBVjtBQUdEOztBQUVELFNBQ0U7QUFBQTtBQUFBLE1BQUssV0FBVSxhQUFmO0FBQ0dGO0FBREgsR0FERjtBQUtELENBYkQ7a0JBY2VGLFUiLCJmaWxlIjoiUmV2aWV3TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmV2aWV3IGZyb20gJy4vUmV2aWV3LmpzeCc7XG5cbmNvbnN0IFJldmlld0xpc3QgPSAocHJvcHMpID0+IHtcbiAgbGV0IHJldmlld3MgPSBwcm9wcy5yZXZpZXdzO1xuICBpZiAocmV2aWV3cykge1xuICAgIHJldmlld3MgPSByZXZpZXdzLm1hcCgocmV2aWV3KSA9PiAoXG4gICAgICA8UmV2aWV3IHZvdGVDbGljaz17cHJvcHMudm90ZUNsaWNrfSByZXZpZXc9e3Jldmlld30gLz5cbiAgICApKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctTGlzdFwiPlxuICAgICAge3Jldmlld3N9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUmV2aWV3TGlzdDtcbiJdfQ==