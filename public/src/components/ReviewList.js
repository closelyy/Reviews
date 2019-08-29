'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Review = require('./Review.jsx');

var _Review2 = _interopRequireDefault(_Review);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReviewList = function ReviewList(props) {

  var reviews = props.reviews.map(function (review) {
    return _react2.default.createElement(_Review2.default, { voteClick: props.voteClick, review: review });
  });

  return _react2.default.createElement(
    'div',
    { className: 'review-List' },
    reviews
  );
};

exports.default = ReviewList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9SZXZpZXdMaXN0LmpzeCJdLCJuYW1lcyI6WyJSZXZpZXdMaXN0IiwicHJvcHMiLCJyZXZpZXdzIiwibWFwIiwicmV2aWV3Iiwidm90ZUNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGFBQWEsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7O0FBRTFCLE1BQUlDLFVBQVVELE1BQU1DLE9BQU4sQ0FBY0MsR0FBZCxDQUFrQixVQUFTQyxNQUFULEVBQWlCO0FBQy9DLFdBQU8sOEJBQUMsZ0JBQUQsSUFBUSxXQUFXSCxNQUFNSSxTQUF6QixFQUFvQyxRQUFRRCxNQUE1QyxHQUFQO0FBQ0QsR0FGYSxDQUFkOztBQUlBLFNBQ0U7QUFBQTtBQUFBLE1BQUssV0FBVyxhQUFoQjtBQUNHRjtBQURILEdBREY7QUFLSCxDQVhEOztrQkFhZUYsVSIsImZpbGUiOiJSZXZpZXdMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJldmlldyBmcm9tICcuL1Jldmlldy5qc3gnO1xuXG5jb25zdCBSZXZpZXdMaXN0ID0gKHByb3BzKSA9PiB7XG5cbiAgICBsZXQgcmV2aWV3cyA9IHByb3BzLnJldmlld3MubWFwKGZ1bmN0aW9uKHJldmlldykge1xuICAgICAgcmV0dXJuIDxSZXZpZXcgdm90ZUNsaWNrPXtwcm9wcy52b3RlQ2xpY2t9IHJldmlldz17cmV2aWV3fS8+O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lID1cInJldmlldy1MaXN0XCI+XG4gICAgICAgIHtyZXZpZXdzfVxuICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdMaXN0OyJdfQ==