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

// ReactDOM.render(<App />, document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJyZXZpZXdzIiwib25Wb3RlQ2xpY2siLCJiaW5kIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJyZXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiZSIsImluZm8iLCJyZXZpZXdJZCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsInNwbGl0Iiwidm90ZVR5cGUiLCIkIiwicG9zdCIsInVwZGF0ZVZvdGVzIiwidm90ZUluZm8iLCJtc2ciLCJtYXAiLCJyZXZpZXciLCJJRCIsInVwZGF0ZWRSZXZpZXciLCJ0b1VwcGVyQ2FzZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7O0FBREE7OztJQUdNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxlQUFTO0FBREUsS0FBYjtBQUdBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBbkI7QUFMaUI7QUFNbEI7Ozs7d0NBRW1CO0FBQUE7O0FBQ2xCQyxZQUFNLGlCQUFOLEVBQ0dDLElBREgsQ0FDUSxVQUFDQyxRQUFELEVBQWM7QUFDbEIsWUFBTUMsTUFBTUQsU0FBU0UsSUFBVCxFQUFaO0FBQ0EsZUFBT0QsR0FBUDtBQUNELE9BSkgsRUFLR0YsSUFMSCxDQUtRLFVBQUNKLE9BQUQsRUFBYTtBQUNqQlEsZ0JBQVFDLEdBQVIsQ0FBWVQsT0FBWjtBQUNBLGVBQUtVLFFBQUwsQ0FBYyxFQUFFVixnQkFBRixFQUFkO0FBQ0QsT0FSSDtBQVNEOzs7Z0NBRVdXLEMsRUFBRztBQUNiLFVBQU1DLE9BQU8sRUFBYjtBQUNBQSxXQUFLQyxRQUFMLEdBQWdCRixFQUFFRyxNQUFGLENBQVNDLFlBQVQsQ0FBc0IsVUFBdEIsQ0FBaEI7O0FBRmEsa0NBR09KLEVBQUVHLE1BQUYsQ0FBU0MsWUFBVCxDQUFzQixPQUF0QixFQUErQkMsS0FBL0IsQ0FBcUMsR0FBckMsQ0FIUDs7QUFBQTs7QUFHVkosV0FBS0ssUUFISzs7QUFJYkMsdUJBQUVDLElBQUYsQ0FBTyxtQkFBUCxFQUE0QixFQUFFUCxVQUFGLEVBQTVCLEVBQXNDLEtBQUtRLFdBQUwsQ0FBaUJsQixJQUFqQixDQUFzQixJQUF0QixDQUF0QztBQUNEOzs7Z0NBRVdtQixRLEVBQVU7QUFDcEIsVUFBSUEsU0FBU0MsR0FBVCxLQUFpQixTQUFyQixFQUFnQztBQUM5QixhQUFLWixRQUFMLENBQWMsVUFBQ1gsS0FBRCxFQUFXO0FBQ3ZCLGNBQU1DLFVBQVVELE1BQU1DLE9BQU4sQ0FBY3VCLEdBQWQsQ0FBa0IsVUFBQ0MsTUFBRCxFQUFZO0FBQzVDLGdCQUFJQSxPQUFPQyxFQUFQLEtBQWNKLFNBQVNSLFFBQTNCLEVBQXFDO0FBQ25DLGtCQUFNYSxnQkFBZ0JGLE1BQXRCO0FBQ0FFLDRCQUFjTCxTQUFTSixRQUFULENBQWtCVSxXQUFsQixFQUFkLEtBQWtELENBQWxEO0FBQ0EscUJBQU9ELGFBQVA7QUFDRDtBQUNELG1CQUFPRixNQUFQO0FBQ0QsV0FQZSxDQUFoQjtBQVFBLGlCQUFPeEIsT0FBUDtBQUNELFNBVkQ7QUFXRDtBQUNGOzs7NkJBRVE7QUFDUCxVQUFNQSxVQUFVLEtBQUtELEtBQUwsQ0FBV0MsT0FBM0I7QUFDQSxhQUNFO0FBQUE7QUFBQTtBQUNFLHNDQUFDLG9CQUFELElBQVksV0FBVyxLQUFLQyxXQUE1QixFQUF5QyxTQUFTRCxPQUFsRDtBQURGLE9BREY7QUFLRDs7OztFQW5EZTRCLGdCQUFNQyxTOztrQkFzRFRoQyxHOztBQUVmIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5Jztcbi8vIGltcG9ydCBTZWFyY2ggZnJvbSAnLi9jb21wb25lbnRzL1NlYXJjaC5qc3gnO1xuaW1wb3J0IFJldmlld0xpc3QgZnJvbSAnLi9jb21wb25lbnRzL1Jldmlld0xpc3QuanN4JztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHJldmlld3M6IFtdLFxuICAgIH07XG4gICAgdGhpcy5vblZvdGVDbGljayA9IHRoaXMub25Wb3RlQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGZldGNoKCcvYXBpL3Jldmlld3MvMzcnKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcyA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH0pXG4gICAgICAudGhlbigocmV2aWV3cykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXZpZXdzKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJldmlld3MgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG9uVm90ZUNsaWNrKGUpIHtcbiAgICBjb25zdCBpbmZvID0ge307XG4gICAgaW5mby5yZXZpZXdJZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgncmV2aWV3SWQnKTtcbiAgICBbLCBpbmZvLnZvdGVUeXBlXSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5zcGxpdCgnICcpO1xuICAgICQucG9zdCgnL2FwaS9yZXZpZXdzL3ZvdGUnLCB7IGluZm8gfSwgdGhpcy51cGRhdGVWb3Rlcy5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHVwZGF0ZVZvdGVzKHZvdGVJbmZvKSB7XG4gICAgaWYgKHZvdGVJbmZvLm1zZyA9PT0gJ1N1Y2Nlc3MnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCByZXZpZXdzID0gc3RhdGUucmV2aWV3cy5tYXAoKHJldmlldykgPT4ge1xuICAgICAgICAgIGlmIChyZXZpZXcuSUQgPT09IHZvdGVJbmZvLnJldmlld0lkKSB7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkUmV2aWV3ID0gcmV2aWV3O1xuICAgICAgICAgICAgdXBkYXRlZFJldmlld1t2b3RlSW5mby52b3RlVHlwZS50b1VwcGVyQ2FzZSgpXSArPSAxO1xuICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZWRSZXZpZXc7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXZpZXc7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmV2aWV3cztcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCByZXZpZXdzID0gdGhpcy5zdGF0ZS5yZXZpZXdzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8UmV2aWV3TGlzdCB2b3RlQ2xpY2s9e3RoaXMub25Wb3RlQ2xpY2t9IHJldmlld3M9e3Jldmlld3N9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuLy8gUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iXX0=