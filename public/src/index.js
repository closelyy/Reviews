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

var _Search = require('./components/Search.jsx');

var _Search2 = _interopRequireDefault(_Search);

var _ReviewList = require('./components/ReviewList.jsx');

var _ReviewList2 = _interopRequireDefault(_ReviewList);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      reviews: []
    };
    _this.onVoteClick = _this.onVoteClick.bind(_this);
    _this.searchQuery = _this.searchQuery.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      fetch('/api/reviews/39').then(function (response) {
        var res = response.json();
        return res;
      }).then(function (reviews) {
        console.log(reviews.length);
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
    key: 'searchQuery',
    value: function searchQuery(e) {
      console.log('search parameters: ', e);
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
        _react2.default.createElement(_Search2.default, { search: this.searchQuery }),
        _react2.default.createElement(_ReviewList2.default, { voteClick: this.onVoteClick, reviews: reviews })
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;


_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJyZXZpZXdzIiwib25Wb3RlQ2xpY2siLCJiaW5kIiwic2VhcmNoUXVlcnkiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsInJlcyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwic2V0U3RhdGUiLCJlIiwiaW5mbyIsInJldmlld0lkIiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwic3BsaXQiLCJ2b3RlVHlwZSIsIiQiLCJwb3N0IiwidXBkYXRlVm90ZXMiLCJ2b3RlSW5mbyIsIm1zZyIsIm1hcCIsInJldmlldyIsIklEIiwidXBkYXRlZFJldmlldyIsInRvVXBwZXJDYXNlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxlQUFTO0FBREUsS0FBYjtBQUdBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBbkI7QUFDQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJELElBQWpCLE9BQW5CO0FBTmlCO0FBT2xCOzs7O3dDQUVtQjtBQUFBOztBQUNsQkUsWUFBTSxpQkFBTixFQUNHQyxJQURILENBQ1EsVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCLFlBQU1DLE1BQU1ELFNBQVNFLElBQVQsRUFBWjtBQUNBLGVBQU9ELEdBQVA7QUFDRCxPQUpILEVBS0dGLElBTEgsQ0FLUSxVQUFDTCxPQUFELEVBQWE7QUFDakJTLGdCQUFRQyxHQUFSLENBQVlWLFFBQVFXLE1BQXBCO0FBQ0EsZUFBS0MsUUFBTCxDQUFjLEVBQUVaLGdCQUFGLEVBQWQ7QUFDRCxPQVJIO0FBU0Q7OztnQ0FFV2EsQyxFQUFHO0FBQ2IsVUFBTUMsT0FBTyxFQUFiO0FBQ0FBLFdBQUtDLFFBQUwsR0FBZ0JGLEVBQUVHLE1BQUYsQ0FBU0MsWUFBVCxDQUFzQixVQUF0QixDQUFoQjs7QUFGYSxrQ0FHT0osRUFBRUcsTUFBRixDQUFTQyxZQUFULENBQXNCLE9BQXRCLEVBQStCQyxLQUEvQixDQUFxQyxHQUFyQyxDQUhQOztBQUFBOztBQUdWSixXQUFLSyxRQUhLOztBQUliQyx1QkFBRUMsSUFBRixDQUFPLG1CQUFQLEVBQTRCLEVBQUVQLFVBQUYsRUFBNUIsRUFBc0MsS0FBS1EsV0FBTCxDQUFpQnBCLElBQWpCLENBQXNCLElBQXRCLENBQXRDO0FBQ0Q7OztnQ0FFV1csQyxFQUFHO0FBQ2JKLGNBQVFDLEdBQVIsd0JBQW1DRyxDQUFuQztBQUVEOzs7Z0NBRVdVLFEsRUFBVTtBQUNwQixVQUFJQSxTQUFTQyxHQUFULEtBQWlCLFNBQXJCLEVBQWdDO0FBQzlCLGFBQUtaLFFBQUwsQ0FBYyxVQUFDYixLQUFELEVBQVc7QUFDdkIsY0FBTUMsVUFBVUQsTUFBTUMsT0FBTixDQUFjeUIsR0FBZCxDQUFrQixVQUFDQyxNQUFELEVBQVk7QUFDNUMsZ0JBQUlBLE9BQU9DLEVBQVAsS0FBY0osU0FBU1IsUUFBM0IsRUFBcUM7QUFDbkMsa0JBQU1hLGdCQUFnQkYsTUFBdEI7QUFDQUUsNEJBQWNMLFNBQVNKLFFBQVQsQ0FBa0JVLFdBQWxCLEVBQWQsS0FBa0QsQ0FBbEQ7QUFDQSxxQkFBT0QsYUFBUDtBQUNEO0FBQ0QsbUJBQU9GLE1BQVA7QUFDRCxXQVBlLENBQWhCO0FBUUEsaUJBQU8xQixPQUFQO0FBQ0QsU0FWRDtBQVdEO0FBQ0Y7Ozs2QkFFUTtBQUNQLFVBQU1BLFVBQVUsS0FBS0QsS0FBTCxDQUFXQyxPQUEzQjtBQUNBLGFBQ0U7QUFBQTtBQUFBO0FBQ0Usc0NBQUMsZ0JBQUQsSUFBUSxRQUFRLEtBQUtHLFdBQXJCLEdBREY7QUFFRSxzQ0FBQyxvQkFBRCxJQUFZLFdBQVcsS0FBS0YsV0FBNUIsRUFBeUMsU0FBU0QsT0FBbEQ7QUFGRixPQURGO0FBTUQ7Ozs7RUExRGU4QixnQkFBTUMsUzs7a0JBNkRUbEMsRzs7O0FBRWZtQyxtQkFBU0MsTUFBVCxDQUFnQiw4QkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9jb21wb25lbnRzL1NlYXJjaC5qc3gnO1xuaW1wb3J0IFJldmlld0xpc3QgZnJvbSAnLi9jb21wb25lbnRzL1Jldmlld0xpc3QuanN4JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICByZXZpZXdzOiBbXSxcbiAgICB9O1xuICAgIHRoaXMub25Wb3RlQ2xpY2sgPSB0aGlzLm9uVm90ZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWFyY2hRdWVyeSA9IHRoaXMuc2VhcmNoUXVlcnkuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGZldGNoKCcvYXBpL3Jldmlld3MvMzknKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcyA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH0pXG4gICAgICAudGhlbigocmV2aWV3cykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXZpZXdzLmxlbmd0aCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZXZpZXdzIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBvblZvdGVDbGljayhlKSB7XG4gICAgY29uc3QgaW5mbyA9IHt9O1xuICAgIGluZm8ucmV2aWV3SWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3Jldmlld0lkJyk7XG4gICAgWywgaW5mby52b3RlVHlwZV0gPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuc3BsaXQoJyAnKTtcbiAgICAkLnBvc3QoJy9hcGkvcmV2aWV3cy92b3RlJywgeyBpbmZvIH0sIHRoaXMudXBkYXRlVm90ZXMuYmluZCh0aGlzKSk7XG4gIH1cblxuICBzZWFyY2hRdWVyeShlKSB7XG4gICAgY29uc29sZS5sb2coYHNlYXJjaCBwYXJhbWV0ZXJzOiBgLCBlKTtcblxuICB9XG5cbiAgdXBkYXRlVm90ZXModm90ZUluZm8pIHtcbiAgICBpZiAodm90ZUluZm8ubXNnID09PSAnU3VjY2VzcycpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJldmlld3MgPSBzdGF0ZS5yZXZpZXdzLm1hcCgocmV2aWV3KSA9PiB7XG4gICAgICAgICAgaWYgKHJldmlldy5JRCA9PT0gdm90ZUluZm8ucmV2aWV3SWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRSZXZpZXcgPSByZXZpZXc7XG4gICAgICAgICAgICB1cGRhdGVkUmV2aWV3W3ZvdGVJbmZvLnZvdGVUeXBlLnRvVXBwZXJDYXNlKCldICs9IDE7XG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlZFJldmlldztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJldmlldztcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXZpZXdzO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHJldmlld3MgPSB0aGlzLnN0YXRlLnJldmlld3M7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxTZWFyY2ggc2VhcmNoPXt0aGlzLnNlYXJjaFF1ZXJ5fSAvPlxuICAgICAgICA8UmV2aWV3TGlzdCB2b3RlQ2xpY2s9e3RoaXMub25Wb3RlQ2xpY2t9IHJldmlld3M9e3Jldmlld3N9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iXX0=