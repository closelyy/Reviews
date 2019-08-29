'use strict';

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

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJyZXZpZXdzIiwib25Wb3RlQ2xpY2siLCJiaW5kIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJyZXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiZSIsImluZm8iLCJyZXZpZXdJZCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsInNwbGl0Iiwidm90ZVR5cGUiLCIkIiwicG9zdCIsInVwZGF0ZVZvdGVzIiwidm90ZUluZm8iLCJtc2ciLCJtYXAiLCJyZXZpZXciLCJJRCIsInVwZGF0ZWRSZXZpZXciLCJ0b1VwcGVyQ2FzZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7Ozs7QUFEQTs7O0lBR01BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGVBQVM7QUFERSxLQUFiO0FBR0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixPQUFuQjtBQUxpQjtBQU1sQjs7Ozt3Q0FFbUI7QUFBQTs7QUFDbEJDLFlBQU0saUJBQU4sRUFDR0MsSUFESCxDQUNRLFVBQUNDLFFBQUQsRUFBYztBQUNsQixZQUFNQyxNQUFNRCxTQUFTRSxJQUFULEVBQVo7QUFDQSxlQUFPRCxHQUFQO0FBQ0QsT0FKSCxFQUtHRixJQUxILENBS1EsVUFBQ0osT0FBRCxFQUFhO0FBQ2pCUSxnQkFBUUMsR0FBUixDQUFZVCxPQUFaO0FBQ0EsZUFBS1UsUUFBTCxDQUFjLEVBQUVWLGdCQUFGLEVBQWQ7QUFDRCxPQVJIO0FBU0Q7OztnQ0FFV1csQyxFQUFHO0FBQ2IsVUFBTUMsT0FBTyxFQUFiO0FBQ0FBLFdBQUtDLFFBQUwsR0FBZ0JGLEVBQUVHLE1BQUYsQ0FBU0MsWUFBVCxDQUFzQixVQUF0QixDQUFoQjs7QUFGYSxrQ0FHT0osRUFBRUcsTUFBRixDQUFTQyxZQUFULENBQXNCLE9BQXRCLEVBQStCQyxLQUEvQixDQUFxQyxHQUFyQyxDQUhQOztBQUFBOztBQUdWSixXQUFLSyxRQUhLOztBQUliQyx1QkFBRUMsSUFBRixDQUFPLG1CQUFQLEVBQTRCLEVBQUVQLFVBQUYsRUFBNUIsRUFBc0MsS0FBS1EsV0FBTCxDQUFpQmxCLElBQWpCLENBQXNCLElBQXRCLENBQXRDO0FBQ0Q7OztnQ0FFV21CLFEsRUFBVTtBQUNwQixVQUFJQSxTQUFTQyxHQUFULEtBQWlCLFNBQXJCLEVBQWdDO0FBQzlCLGFBQUtaLFFBQUwsQ0FBYyxVQUFDWCxLQUFELEVBQVc7QUFDdkIsY0FBTUMsVUFBVUQsTUFBTUMsT0FBTixDQUFjdUIsR0FBZCxDQUFrQixVQUFDQyxNQUFELEVBQVk7QUFDNUMsZ0JBQUlBLE9BQU9DLEVBQVAsS0FBY0osU0FBU1IsUUFBM0IsRUFBcUM7QUFDbkMsa0JBQU1hLGdCQUFnQkYsTUFBdEI7QUFDQUUsNEJBQWNMLFNBQVNKLFFBQVQsQ0FBa0JVLFdBQWxCLEVBQWQsS0FBa0QsQ0FBbEQ7QUFDQSxxQkFBT0QsYUFBUDtBQUNEO0FBQ0QsbUJBQU9GLE1BQVA7QUFDRCxXQVBlLENBQWhCO0FBUUEsaUJBQU94QixPQUFQO0FBQ0QsU0FWRDtBQVdEO0FBQ0Y7Ozs2QkFFUTtBQUNQLFVBQU1BLFVBQVUsS0FBS0QsS0FBTCxDQUFXQyxPQUEzQjtBQUNBLGFBQ0U7QUFBQTtBQUFBO0FBQ0Usc0NBQUMsb0JBQUQsSUFBWSxXQUFXLEtBQUtDLFdBQTVCLEVBQXlDLFNBQVNELE9BQWxEO0FBREYsT0FERjtBQUtEOzs7O0VBbkRlNEIsZ0JBQU1DLFM7O0FBc0R4QkMsbUJBQVNDLE1BQVQsQ0FBZ0IsOEJBQUMsR0FBRCxPQUFoQixFQUF5QkMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG4vLyBpbXBvcnQgU2VhcmNoIGZyb20gJy4vY29tcG9uZW50cy9TZWFyY2guanN4JztcbmltcG9ydCBSZXZpZXdMaXN0IGZyb20gJy4vY29tcG9uZW50cy9SZXZpZXdMaXN0LmpzeCc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICByZXZpZXdzOiBbXSxcbiAgICB9O1xuICAgIHRoaXMub25Wb3RlQ2xpY2sgPSB0aGlzLm9uVm90ZUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBmZXRjaCgnL2FwaS9yZXZpZXdzLzM3JylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zdCByZXMgPSByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJldmlld3MpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmV2aWV3cyk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZXZpZXdzIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBvblZvdGVDbGljayhlKSB7XG4gICAgY29uc3QgaW5mbyA9IHt9O1xuICAgIGluZm8ucmV2aWV3SWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3Jldmlld0lkJyk7XG4gICAgWywgaW5mby52b3RlVHlwZV0gPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuc3BsaXQoJyAnKTtcbiAgICAkLnBvc3QoJy9hcGkvcmV2aWV3cy92b3RlJywgeyBpbmZvIH0sIHRoaXMudXBkYXRlVm90ZXMuYmluZCh0aGlzKSk7XG4gIH1cblxuICB1cGRhdGVWb3Rlcyh2b3RlSW5mbykge1xuICAgIGlmICh2b3RlSW5mby5tc2cgPT09ICdTdWNjZXNzJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+IHtcbiAgICAgICAgY29uc3QgcmV2aWV3cyA9IHN0YXRlLnJldmlld3MubWFwKChyZXZpZXcpID0+IHtcbiAgICAgICAgICBpZiAocmV2aWV3LklEID09PSB2b3RlSW5mby5yZXZpZXdJZCkge1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZFJldmlldyA9IHJldmlldztcbiAgICAgICAgICAgIHVwZGF0ZWRSZXZpZXdbdm90ZUluZm8udm90ZVR5cGUudG9VcHBlckNhc2UoKV0gKz0gMTtcbiAgICAgICAgICAgIHJldHVybiB1cGRhdGVkUmV2aWV3O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmV2aWV3O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJldmlld3M7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcmV2aWV3cyA9IHRoaXMuc3RhdGUucmV2aWV3cztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFJldmlld0xpc3Qgdm90ZUNsaWNrPXt0aGlzLm9uVm90ZUNsaWNrfSByZXZpZXdzPXtyZXZpZXdzfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiJdfQ==