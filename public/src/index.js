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

      fetch('/api/reviews/36').then(function (response) {
        var res = response.json();
        return res;
      }).then(function (reviews) {
        reviews.forEach(function (review) {
          if (review.photos) {
            console.log('Found ' + review.photos.length + ' photos associated with this review');
            console.log('photo ids: ' + review.photos);
          }
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJyZXZpZXdzIiwib25Wb3RlQ2xpY2siLCJiaW5kIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJyZXMiLCJqc29uIiwiZm9yRWFjaCIsInJldmlldyIsInBob3RvcyIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJzZXRTdGF0ZSIsImUiLCJpbmZvIiwicmV2aWV3SWQiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJzcGxpdCIsInZvdGVUeXBlIiwiJCIsInBvc3QiLCJ1cGRhdGVWb3RlcyIsInZvdGVJbmZvIiwibXNnIiwibWFwIiwiSUQiLCJ1cGRhdGVkUmV2aWV3IiwidG9VcHBlckNhc2UiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7OztBQURBOzs7SUFHTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZUFBUztBQURFLEtBQWI7QUFHQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLE9BQW5CO0FBTGlCO0FBTWxCOzs7O3dDQUVtQjtBQUFBOztBQUNsQkMsWUFBTSxpQkFBTixFQUNHQyxJQURILENBQ1EsVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCLFlBQU1DLE1BQU1ELFNBQVNFLElBQVQsRUFBWjtBQUNBLGVBQU9ELEdBQVA7QUFDRCxPQUpILEVBS0dGLElBTEgsQ0FLUSxVQUFDSixPQUFELEVBQWE7QUFDakJBLGdCQUFRUSxPQUFSLENBQWdCLFVBQUNDLE1BQUQsRUFBWTtBQUMxQixjQUFJQSxPQUFPQyxNQUFYLEVBQW1CO0FBQ2pCQyxvQkFBUUMsR0FBUixZQUFxQkgsT0FBT0MsTUFBUCxDQUFjRyxNQUFuQztBQUNBRixvQkFBUUMsR0FBUixpQkFBMEJILE9BQU9DLE1BQWpDO0FBQ0Q7QUFDRixTQUxEO0FBTUFDLGdCQUFRQyxHQUFSLENBQVlaLE9BQVo7QUFDQSxlQUFLYyxRQUFMLENBQWMsRUFBRWQsZ0JBQUYsRUFBZDtBQUNELE9BZEg7QUFlRDs7O2dDQUVXZSxDLEVBQUc7QUFDYixVQUFNQyxPQUFPLEVBQWI7QUFDQUEsV0FBS0MsUUFBTCxHQUFnQkYsRUFBRUcsTUFBRixDQUFTQyxZQUFULENBQXNCLFVBQXRCLENBQWhCOztBQUZhLGtDQUdPSixFQUFFRyxNQUFGLENBQVNDLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0JDLEtBQS9CLENBQXFDLEdBQXJDLENBSFA7O0FBQUE7O0FBR1ZKLFdBQUtLLFFBSEs7O0FBSWJDLHVCQUFFQyxJQUFGLENBQU8sbUJBQVAsRUFBNEIsRUFBRVAsVUFBRixFQUE1QixFQUFzQyxLQUFLUSxXQUFMLENBQWlCdEIsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBdEM7QUFDRDs7O2dDQUVXdUIsUSxFQUFVO0FBQ3BCLFVBQUlBLFNBQVNDLEdBQVQsS0FBaUIsU0FBckIsRUFBZ0M7QUFDOUIsYUFBS1osUUFBTCxDQUFjLFVBQUNmLEtBQUQsRUFBVztBQUN2QixjQUFNQyxVQUFVRCxNQUFNQyxPQUFOLENBQWMyQixHQUFkLENBQWtCLFVBQUNsQixNQUFELEVBQVk7QUFDNUMsZ0JBQUlBLE9BQU9tQixFQUFQLEtBQWNILFNBQVNSLFFBQTNCLEVBQXFDO0FBQ25DLGtCQUFNWSxnQkFBZ0JwQixNQUF0QjtBQUNBb0IsNEJBQWNKLFNBQVNKLFFBQVQsQ0FBa0JTLFdBQWxCLEVBQWQsS0FBa0QsQ0FBbEQ7QUFDQSxxQkFBT0QsYUFBUDtBQUNEO0FBQ0QsbUJBQU9wQixNQUFQO0FBQ0QsV0FQZSxDQUFoQjtBQVFBLGlCQUFPVCxPQUFQO0FBQ0QsU0FWRDtBQVdEO0FBQ0Y7Ozs2QkFFUTtBQUNQLFVBQU1BLFVBQVUsS0FBS0QsS0FBTCxDQUFXQyxPQUEzQjtBQUNBLGFBQ0U7QUFBQTtBQUFBO0FBQ0Usc0NBQUMsb0JBQUQsSUFBWSxXQUFXLEtBQUtDLFdBQTVCLEVBQXlDLFNBQVNELE9BQWxEO0FBREYsT0FERjtBQUtEOzs7O0VBekRlK0IsZ0JBQU1DLFM7O2tCQTREVG5DLEc7OztBQUVmb0MsbUJBQVNDLE1BQVQsQ0FBZ0IsOEJBQUMsR0FBRCxPQUFoQixFQUF5QkMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG4vLyBpbXBvcnQgU2VhcmNoIGZyb20gJy4vY29tcG9uZW50cy9TZWFyY2guanN4JztcbmltcG9ydCBSZXZpZXdMaXN0IGZyb20gJy4vY29tcG9uZW50cy9SZXZpZXdMaXN0LmpzeCc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICByZXZpZXdzOiBbXSxcbiAgICB9O1xuICAgIHRoaXMub25Wb3RlQ2xpY2sgPSB0aGlzLm9uVm90ZUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBmZXRjaCgnL2FwaS9yZXZpZXdzLzM2JylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zdCByZXMgPSByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJldmlld3MpID0+IHtcbiAgICAgICAgcmV2aWV3cy5mb3JFYWNoKChyZXZpZXcpID0+IHtcbiAgICAgICAgICBpZiAocmV2aWV3LnBob3Rvcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYEZvdW5kICR7cmV2aWV3LnBob3Rvcy5sZW5ndGh9IHBob3RvcyBhc3NvY2lhdGVkIHdpdGggdGhpcyByZXZpZXdgKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBwaG90byBpZHM6ICR7cmV2aWV3LnBob3Rvc31gKVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJldmlld3MpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmV2aWV3cyB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgb25Wb3RlQ2xpY2soZSkge1xuICAgIGNvbnN0IGluZm8gPSB7fTtcbiAgICBpbmZvLnJldmlld0lkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdyZXZpZXdJZCcpO1xuICAgIFssIGluZm8udm90ZVR5cGVdID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdjbGFzcycpLnNwbGl0KCcgJyk7XG4gICAgJC5wb3N0KCcvYXBpL3Jldmlld3Mvdm90ZScsIHsgaW5mbyB9LCB0aGlzLnVwZGF0ZVZvdGVzLmJpbmQodGhpcykpO1xuICB9XG5cbiAgdXBkYXRlVm90ZXModm90ZUluZm8pIHtcbiAgICBpZiAodm90ZUluZm8ubXNnID09PSAnU3VjY2VzcycpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJldmlld3MgPSBzdGF0ZS5yZXZpZXdzLm1hcCgocmV2aWV3KSA9PiB7XG4gICAgICAgICAgaWYgKHJldmlldy5JRCA9PT0gdm90ZUluZm8ucmV2aWV3SWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRSZXZpZXcgPSByZXZpZXc7XG4gICAgICAgICAgICB1cGRhdGVkUmV2aWV3W3ZvdGVJbmZvLnZvdGVUeXBlLnRvVXBwZXJDYXNlKCldICs9IDE7XG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlZFJldmlldztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJldmlldztcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXZpZXdzO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHJldmlld3MgPSB0aGlzLnN0YXRlLnJldmlld3M7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxSZXZpZXdMaXN0IHZvdGVDbGljaz17dGhpcy5vblZvdGVDbGlja30gcmV2aWV3cz17cmV2aWV3c30gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiJdfQ==