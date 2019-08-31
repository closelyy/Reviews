'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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
    _this.onVoteClick = _this.onVoteClick.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      fetch('/api/reviews/37').then(function (response) {
        var res = response.json();
        return res;
      }).then(function (reviews) {
        console.log(reviews);
        _this2.setState({ reviews: reviews });
      });
    }
  }, {
    key: 'onVoteClick',
    value: function onVoteClick(e) {
      var info = {};
      info.reviewId = e.target.getAttribute('reviewId');

      var _e$target$getAttribut = e.target.getAttribute('class').split(' ');

      var _e$target$getAttribut2 = _slicedToArray(_e$target$getAttribut, 2);

      info.voteType = _e$target$getAttribut2[1];

      _jquery2.default.post('/api/reviews/vote', { info: info }, this.updateVotes.bind(this));
    }
  }, {
    key: 'updateVotes',
    value: function updateVotes(voteInfo) {
      if (voteInfo.msg === 'Success') {
        this.setState(function (state) {
          var reviews = state.reviews.map(function (review) {
            if (review.ID === voteInfo.reviewId) {
              var updatedReview = review;
              updatedReview[voteInfo.voteType.toUpperCase()] += 1;
              return updatedReview;
            }
            return review;
          });
          return reviews;
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var reviews = this.state.reviews;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_ReviewList2.default, { voteClick: this.onVoteClick, reviews: reviews })
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;


_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJyZXZpZXdzIiwib25Wb3RlQ2xpY2siLCJiaW5kIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJyZXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiZSIsImluZm8iLCJyZXZpZXdJZCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsInNwbGl0Iiwidm90ZVR5cGUiLCIkIiwicG9zdCIsInVwZGF0ZVZvdGVzIiwidm90ZUluZm8iLCJtc2ciLCJtYXAiLCJyZXZpZXciLCJJRCIsInVwZGF0ZWRSZXZpZXciLCJ0b1VwcGVyQ2FzZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7O0FBREE7OztJQUdNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxlQUFTO0FBREUsS0FBYjtBQUdBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBbkI7QUFMaUI7QUFNbEI7Ozs7d0NBRW1CO0FBQUE7O0FBQ2xCQyxZQUFNLGlCQUFOLEVBQ0dDLElBREgsQ0FDUSxVQUFDQyxRQUFELEVBQWM7QUFDbEIsWUFBTUMsTUFBTUQsU0FBU0UsSUFBVCxFQUFaO0FBQ0EsZUFBT0QsR0FBUDtBQUNELE9BSkgsRUFLR0YsSUFMSCxDQUtRLFVBQUNKLE9BQUQsRUFBYTtBQUNqQlEsZ0JBQVFDLEdBQVIsQ0FBWVQsT0FBWjtBQUNBLGVBQUtVLFFBQUwsQ0FBYyxFQUFFVixnQkFBRixFQUFkO0FBQ0QsT0FSSDtBQVNEOzs7Z0NBRVdXLEMsRUFBRztBQUNiLFVBQU1DLE9BQU8sRUFBYjtBQUNBQSxXQUFLQyxRQUFMLEdBQWdCRixFQUFFRyxNQUFGLENBQVNDLFlBQVQsQ0FBc0IsVUFBdEIsQ0FBaEI7O0FBRmEsa0NBR09KLEVBQUVHLE1BQUYsQ0FBU0MsWUFBVCxDQUFzQixPQUF0QixFQUErQkMsS0FBL0IsQ0FBcUMsR0FBckMsQ0FIUDs7QUFBQTs7QUFHVkosV0FBS0ssUUFISzs7QUFJYkMsdUJBQUVDLElBQUYsQ0FBTyxtQkFBUCxFQUE0QixFQUFFUCxVQUFGLEVBQTVCLEVBQXNDLEtBQUtRLFdBQUwsQ0FBaUJsQixJQUFqQixDQUFzQixJQUF0QixDQUF0QztBQUNEOzs7Z0NBRVdtQixRLEVBQVU7QUFDcEIsVUFBSUEsU0FBU0MsR0FBVCxLQUFpQixTQUFyQixFQUFnQztBQUM5QixhQUFLWixRQUFMLENBQWMsVUFBQ1gsS0FBRCxFQUFXO0FBQ3ZCLGNBQU1DLFVBQVVELE1BQU1DLE9BQU4sQ0FBY3VCLEdBQWQsQ0FBa0IsVUFBQ0MsTUFBRCxFQUFZO0FBQzVDLGdCQUFJQSxPQUFPQyxFQUFQLEtBQWNKLFNBQVNSLFFBQTNCLEVBQXFDO0FBQ25DLGtCQUFNYSxnQkFBZ0JGLE1BQXRCO0FBQ0FFLDRCQUFjTCxTQUFTSixRQUFULENBQWtCVSxXQUFsQixFQUFkLEtBQWtELENBQWxEO0FBQ0EscUJBQU9ELGFBQVA7QUFDRDtBQUNELG1CQUFPRixNQUFQO0FBQ0QsV0FQZSxDQUFoQjtBQVFBLGlCQUFPeEIsT0FBUDtBQUNELFNBVkQ7QUFXRDtBQUNGOzs7NkJBRVE7QUFDUCxVQUFNQSxVQUFVLEtBQUtELEtBQUwsQ0FBV0MsT0FBM0I7QUFDQSxhQUNFO0FBQUE7QUFBQTtBQUNFLHNDQUFDLG9CQUFELElBQVksV0FBVyxLQUFLQyxXQUE1QixFQUF5QyxTQUFTRCxPQUFsRDtBQURGLE9BREY7QUFLRDs7OztFQW5EZTRCLGdCQUFNQyxTOztrQkFzRFRoQyxHOzs7QUFFZmlDLG1CQUFTQyxNQUFULENBQWdCLDhCQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuLy8gaW1wb3J0IFNlYXJjaCBmcm9tICcuL2NvbXBvbmVudHMvU2VhcmNoLmpzeCc7XG5pbXBvcnQgUmV2aWV3TGlzdCBmcm9tICcuL2NvbXBvbmVudHMvUmV2aWV3TGlzdC5qc3gnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcmV2aWV3czogW10sXG4gICAgfTtcbiAgICB0aGlzLm9uVm90ZUNsaWNrID0gdGhpcy5vblZvdGVDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZmV0Y2goJy9hcGkvcmV2aWV3cy8zNycpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXZpZXdzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJldmlld3MpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmV2aWV3cyB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgb25Wb3RlQ2xpY2soZSkge1xuICAgIGNvbnN0IGluZm8gPSB7fTtcbiAgICBpbmZvLnJldmlld0lkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdyZXZpZXdJZCcpO1xuICAgIFssIGluZm8udm90ZVR5cGVdID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdjbGFzcycpLnNwbGl0KCcgJyk7XG4gICAgJC5wb3N0KCcvYXBpL3Jldmlld3Mvdm90ZScsIHsgaW5mbyB9LCB0aGlzLnVwZGF0ZVZvdGVzLmJpbmQodGhpcykpO1xuICB9XG5cbiAgdXBkYXRlVm90ZXModm90ZUluZm8pIHtcbiAgICBpZiAodm90ZUluZm8ubXNnID09PSAnU3VjY2VzcycpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJldmlld3MgPSBzdGF0ZS5yZXZpZXdzLm1hcCgocmV2aWV3KSA9PiB7XG4gICAgICAgICAgaWYgKHJldmlldy5JRCA9PT0gdm90ZUluZm8ucmV2aWV3SWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRSZXZpZXcgPSByZXZpZXc7XG4gICAgICAgICAgICB1cGRhdGVkUmV2aWV3W3ZvdGVJbmZvLnZvdGVUeXBlLnRvVXBwZXJDYXNlKCldICs9IDE7XG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlZFJldmlldztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJldmlldztcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXZpZXdzO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHJldmlld3MgPSB0aGlzLnN0YXRlLnJldmlld3M7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxSZXZpZXdMaXN0IHZvdGVDbGljaz17dGhpcy5vblZvdGVDbGlja30gcmV2aWV3cz17cmV2aWV3c30gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiJdfQ==