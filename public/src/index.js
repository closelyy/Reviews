'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _ReviewList = require('./components/ReviewList.jsx');

var _ReviewList2 = _interopRequireDefault(_ReviewList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Search from './components/Search.jsx';


var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      reviews: []
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      fetch('/api/reviews/37').then(function (response) {
        response = response.json();
        return response;
      }).then(function (reviews) {
        _this2.setState({ reviews: reviews.reviews });
      });
    }
  }, {
    key: 'search',
    value: function search(term, updateCB) {
      // stretch goal
    }
  }, {
    key: 'updateVotes',
    value: function updateVotes(voteInfo) {
      if (voteInfo.msg === 'Success') {
        this.setState(function (state) {
          var reviews = state.reviews.map(function (review) {
            if (review.ID === voteInfo.reviewId) {
              review[voteInfo.voteType.toUpperCase()] += 1;
            }
            return review;
          });
          return reviews;
        });
      }
    }
  }, {
    key: 'onVoteClick',
    value: function onVoteClick(e) {
      var info = {};
      info.reviewId = e.target.getAttribute('reviewId');
      info.voteType = e.target.getAttribute('class').split(' ')[1];
      _jquery2.default.post('/api/reviews/vote', { info: info }, this.updateVotes.bind(this));
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Reviews'
        ),
        _react2.default.createElement(_ReviewList2.default, { voteClick: this.onVoteClick.bind(this), reviews: this.state.reviews })
      );
    }
  }]);

  return App;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJyZXZpZXdzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwic2V0U3RhdGUiLCJ0ZXJtIiwidXBkYXRlQ0IiLCJ2b3RlSW5mbyIsIm1zZyIsIm1hcCIsInJldmlldyIsIklEIiwicmV2aWV3SWQiLCJ2b3RlVHlwZSIsInRvVXBwZXJDYXNlIiwiZSIsImluZm8iLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJzcGxpdCIsIiQiLCJwb3N0IiwidXBkYXRlVm90ZXMiLCJiaW5kIiwib25Wb3RlQ2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7OztBQURBOzs7SUFHTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZUFBUztBQURFLEtBQWI7QUFGaUI7QUFLbEI7Ozs7d0NBRW1CO0FBQUE7O0FBQ2xCQyxZQUFNLGlCQUFOLEVBQ0dDLElBREgsQ0FDUSxVQUFDQyxRQUFELEVBQWM7QUFDbEJBLG1CQUFXQSxTQUFTQyxJQUFULEVBQVg7QUFDQSxlQUFPRCxRQUFQO0FBQ0QsT0FKSCxFQUtHRCxJQUxILENBS1EsVUFBQ0YsT0FBRCxFQUFhO0FBQ2pCLGVBQUtLLFFBQUwsQ0FBYyxFQUFFTCxTQUFTQSxRQUFRQSxPQUFuQixFQUFkO0FBQ0QsT0FQSDtBQVFEOzs7MkJBRU9NLEksRUFBTUMsUSxFQUFVO0FBQ3RCO0FBQ0Q7OztnQ0FFV0MsUSxFQUFVO0FBQ3BCLFVBQUlBLFNBQVNDLEdBQVQsS0FBaUIsU0FBckIsRUFBZ0M7QUFDOUIsYUFBS0osUUFBTCxDQUFjLGlCQUFTO0FBQ3JCLGNBQU1MLFVBQVVELE1BQU1DLE9BQU4sQ0FBY1UsR0FBZCxDQUFrQixVQUFTQyxNQUFULEVBQWlCO0FBQ2pELGdCQUFJQSxPQUFPQyxFQUFQLEtBQWNKLFNBQVNLLFFBQTNCLEVBQXFDO0FBQ25DRixxQkFBT0gsU0FBU00sUUFBVCxDQUFrQkMsV0FBbEIsRUFBUCxLQUEyQyxDQUEzQztBQUNEO0FBQ0QsbUJBQU9KLE1BQVA7QUFDRCxXQUxlLENBQWhCO0FBTUEsaUJBQU9YLE9BQVA7QUFDRCxTQVJEO0FBU0Q7QUFDRjs7O2dDQUVZZ0IsQyxFQUFHO0FBQ2QsVUFBSUMsT0FBTyxFQUFYO0FBQ0FBLFdBQUtKLFFBQUwsR0FBZ0JHLEVBQUVFLE1BQUYsQ0FBU0MsWUFBVCxDQUFzQixVQUF0QixDQUFoQjtBQUNBRixXQUFLSCxRQUFMLEdBQWdCRSxFQUFFRSxNQUFGLENBQVNDLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0JDLEtBQS9CLENBQXFDLEdBQXJDLEVBQTBDLENBQTFDLENBQWhCO0FBQ0FDLHVCQUFFQyxJQUFGLENBQU8sbUJBQVAsRUFBNEIsRUFBRUwsVUFBRixFQUE1QixFQUFzQyxLQUFLTSxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUF0QztBQUNEOzs7NkJBRVM7O0FBRVIsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRSxzQ0FBQyxvQkFBRCxJQUFZLFdBQVcsS0FBS0MsV0FBTCxDQUFpQkQsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBdkIsRUFBb0QsU0FBUyxLQUFLekIsS0FBTCxDQUFXQyxPQUF4RTtBQUZGLE9BREY7QUFPRDs7OztFQXJEZTBCLGdCQUFNQyxTOztBQXdEeEJDLG1CQUFTQyxNQUFULENBQWdCLDhCQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuLy8gaW1wb3J0IFNlYXJjaCBmcm9tICcuL2NvbXBvbmVudHMvU2VhcmNoLmpzeCc7XG5pbXBvcnQgUmV2aWV3TGlzdCBmcm9tICcuL2NvbXBvbmVudHMvUmV2aWV3TGlzdC5qc3gnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBcbiAgICAgIHJldmlld3M6IFtdXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZmV0Y2goJy9hcGkvcmV2aWV3cy8zNycpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmVzcG9uc2UgPSByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgIH0pXG4gICAgICAudGhlbigocmV2aWV3cykgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmV2aWV3czogcmV2aWV3cy5yZXZpZXdzIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBzZWFyY2ggKHRlcm0sIHVwZGF0ZUNCKSB7XG4gICAgLy8gc3RyZXRjaCBnb2FsXG4gIH1cblxuICB1cGRhdGVWb3Rlcyh2b3RlSW5mbykge1xuICAgIGlmICh2b3RlSW5mby5tc2cgPT09ICdTdWNjZXNzJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiB7XG4gICAgICAgIGNvbnN0IHJldmlld3MgPSBzdGF0ZS5yZXZpZXdzLm1hcChmdW5jdGlvbihyZXZpZXcpIHtcbiAgICAgICAgICBpZiAocmV2aWV3LklEID09PSB2b3RlSW5mby5yZXZpZXdJZCkge1xuICAgICAgICAgICAgcmV2aWV3W3ZvdGVJbmZvLnZvdGVUeXBlLnRvVXBwZXJDYXNlKCldICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXZpZXc7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmV2aWV3cztcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uVm90ZUNsaWNrIChlKSB7XG4gICAgdmFyIGluZm8gPSB7fTtcbiAgICBpbmZvLnJldmlld0lkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdyZXZpZXdJZCcpO1xuICAgIGluZm8udm90ZVR5cGUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuc3BsaXQoJyAnKVsxXTtcbiAgICAkLnBvc3QoJy9hcGkvcmV2aWV3cy92b3RlJywgeyBpbmZvIH0sIHRoaXMudXBkYXRlVm90ZXMuYmluZCh0aGlzKSk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5SZXZpZXdzPC9oMT5cbiAgICAgICAgPFJldmlld0xpc3Qgdm90ZUNsaWNrPXt0aGlzLm9uVm90ZUNsaWNrLmJpbmQodGhpcyl9IHJldmlld3M9e3RoaXMuc3RhdGUucmV2aWV3c30vPlxuICAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTsiXX0=