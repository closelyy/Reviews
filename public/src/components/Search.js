'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  text-align:right;\n  margin:0px auto 0px auto;\n'], ['\n  display: flex;\n  text-align:right;\n  margin:0px auto 0px auto;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n'], ['\n  display: flex;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SortOptions = _styledComponents2.default.div(_templateObject);

var SearchContainer = _styledComponents2.default.div(_templateObject2);

var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this.state = {
      searchQuery: '',
      sortOption: 0
    };
    _this.executeSearch = _this.executeSearch.bind(_this);
    _this.onSearchChange = _this.onSearchChange.bind(_this);
    _this.onSortChange = _this.onSortChange.bind(_this);
    return _this;
  }

  _createClass(Search, [{
    key: 'onSearchChange',
    value: function onSearchChange(e) {
      this.setState({
        searchQuery: e.target.value
      });
    }
  }, {
    key: 'executeSearch',
    value: function executeSearch() {
      this.props.search(this.state);
    }
  }, {
    key: 'onSortChange',
    value: function onSortChange(e) {
      this.setState({
        sortOption: e.target.value
      });
      setTimeout(this.executeSearch, 0);
    }
  }, {
    key: 'render',
    value: function render() {

      var sortOptions = ['Highest Rating', 'Lowest Rating', 'Newest', 'Oldest', 'Coolest', 'Funniest', 'Most Useful'];

      sortOptions = sortOptions.map(function (option, idx) {
        return _react2.default.createElement(
          'option',
          { value: idx },
          option
        );
      });

      return _react2.default.createElement(
        SearchContainer,
        null,
        _react2.default.createElement(
          'button',
          { type: 'submit', onClick: this.executeSearch },
          'Search'
        ),
        _react2.default.createElement('input', { type: 'text', onChange: this.onSearchChange, value: this.state.searchQuery }),
        _react2.default.createElement(
          SortOptions,
          null,
          _react2.default.createElement(
            'div',
            null,
            'Sort By: '
          ),
          _react2.default.createElement(
            'select',
            { id: 'sortSelect',
              onChange: this.onSortChange,
              value: this.props.sortOption },
            sortOptions
          )
        )
      );
    }
  }]);

  return Search;
}(_react2.default.Component);

;
exports.default = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9TZWFyY2guanN4Il0sIm5hbWVzIjpbIlNvcnRPcHRpb25zIiwic3R5bGVkIiwiZGl2IiwiU2VhcmNoQ29udGFpbmVyIiwiU2VhcmNoIiwicHJvcHMiLCJzdGF0ZSIsInNlYXJjaFF1ZXJ5Iiwic29ydE9wdGlvbiIsImV4ZWN1dGVTZWFyY2giLCJiaW5kIiwib25TZWFyY2hDaGFuZ2UiLCJvblNvcnRDaGFuZ2UiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlYXJjaCIsInNldFRpbWVvdXQiLCJzb3J0T3B0aW9ucyIsIm1hcCIsIm9wdGlvbiIsImlkeCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsY0FBY0MsMkJBQU9DLEdBQXJCLGlCQUFOOztBQU1BLElBQU1DLGtCQUFrQkYsMkJBQU9DLEdBQXpCLGtCQUFOOztJQUdNRSxNOzs7QUFFSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsbUJBQWEsRUFERjtBQUVYQyxrQkFBWTtBQUZELEtBQWI7QUFJQSxVQUFLQyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJDLElBQW5CLE9BQXJCO0FBQ0EsVUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CRCxJQUFwQixPQUF0QjtBQUNBLFVBQUtFLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkYsSUFBbEIsT0FBcEI7QUFSaUI7QUFTbEI7Ozs7bUNBRWNHLEMsRUFBRztBQUNoQixXQUFLQyxRQUFMLENBQWM7QUFDWlAscUJBQWFNLEVBQUVFLE1BQUYsQ0FBU0M7QUFEVixPQUFkO0FBR0Q7OztvQ0FFZTtBQUNkLFdBQUtYLEtBQUwsQ0FBV1ksTUFBWCxDQUFrQixLQUFLWCxLQUF2QjtBQUNEOzs7aUNBRVlPLEMsRUFBRztBQUNkLFdBQUtDLFFBQUwsQ0FBYztBQUNaTixvQkFBWUssRUFBRUUsTUFBRixDQUFTQztBQURULE9BQWQ7QUFHQUUsaUJBQVcsS0FBS1QsYUFBaEIsRUFBK0IsQ0FBL0I7QUFDRDs7OzZCQUVROztBQUVQLFVBQUlVLGNBQWMsQ0FBQyxnQkFBRCxFQUFtQixlQUFuQixFQUFvQyxRQUFwQyxFQUE4QyxRQUE5QyxFQUF3RCxTQUF4RCxFQUFtRSxVQUFuRSxFQUErRSxhQUEvRSxDQUFsQjs7QUFFQUEsb0JBQWNBLFlBQVlDLEdBQVosQ0FBZ0IsVUFBQ0MsTUFBRCxFQUFTQyxHQUFULEVBQWlCO0FBQzdDLGVBQ0U7QUFBQTtBQUFBLFlBQVEsT0FBT0EsR0FBZjtBQUFxQkQ7QUFBckIsU0FERjtBQUdELE9BSmEsQ0FBZDs7QUFNQSxhQUNFO0FBQUMsdUJBQUQ7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFRLE1BQUssUUFBYixFQUFzQixTQUFTLEtBQUtaLGFBQXBDO0FBQUE7QUFBQSxTQURGO0FBRUUsaURBQU8sTUFBSyxNQUFaLEVBQW1CLFVBQVUsS0FBS0UsY0FBbEMsRUFBa0QsT0FBTyxLQUFLTCxLQUFMLENBQVdDLFdBQXBFLEdBRkY7QUFHRTtBQUFDLHFCQUFEO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFFRTtBQUFBO0FBQUEsY0FBUSxJQUFHLFlBQVg7QUFDUSx3QkFBVSxLQUFLSyxZQUR2QjtBQUVRLHFCQUFPLEtBQUtQLEtBQUwsQ0FBV0csVUFGMUI7QUFHQ1c7QUFIRDtBQUZGO0FBSEYsT0FERjtBQWNEOzs7O0VBdERrQkksZ0JBQU1DLFM7O0FBd0QxQjtrQkFDY3BCLE0iLCJmaWxlIjoiU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBTb3J0T3B0aW9ucyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtYWxpZ246cmlnaHQ7XG4gIG1hcmdpbjowcHggYXV0byAwcHggYXV0bztcbmA7XG5cbmNvbnN0IFNlYXJjaENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VhcmNoUXVlcnk6ICcnLFxuICAgICAgc29ydE9wdGlvbjogMFxuICAgIH07XG4gICAgdGhpcy5leGVjdXRlU2VhcmNoID0gdGhpcy5leGVjdXRlU2VhcmNoLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblNlYXJjaENoYW5nZSA9IHRoaXMub25TZWFyY2hDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uU29ydENoYW5nZSA9IHRoaXMub25Tb3J0Q2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBvblNlYXJjaENoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWFyY2hRdWVyeTogZS50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBleGVjdXRlU2VhcmNoKCkge1xuICAgIHRoaXMucHJvcHMuc2VhcmNoKHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgb25Tb3J0Q2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNvcnRPcHRpb246IGUudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICAgIHNldFRpbWVvdXQodGhpcy5leGVjdXRlU2VhcmNoLCAwKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgIGxldCBzb3J0T3B0aW9ucyA9IFsnSGlnaGVzdCBSYXRpbmcnLCAnTG93ZXN0IFJhdGluZycsICdOZXdlc3QnLCAnT2xkZXN0JywgJ0Nvb2xlc3QnLCAnRnVubmllc3QnLCAnTW9zdCBVc2VmdWwnXVxuXG4gICAgc29ydE9wdGlvbnMgPSBzb3J0T3B0aW9ucy5tYXAoKG9wdGlvbiwgaWR4KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8b3B0aW9uIHZhbHVlPXtpZHh9PntvcHRpb259PC9vcHRpb24+XG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWFyY2hDb250YWluZXI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3RoaXMuZXhlY3V0ZVNlYXJjaH0+U2VhcmNoPC9idXR0b24+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLm9uU2VhcmNoQ2hhbmdlfSB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hRdWVyeX0gLz5cbiAgICAgICAgPFNvcnRPcHRpb25zPlxuICAgICAgICAgIDxkaXY+U29ydCBCeTogPC9kaXY+XG4gICAgICAgICAgPHNlbGVjdCBpZD1cInNvcnRTZWxlY3RcIiBcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uU29ydENoYW5nZX0gXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5zb3J0T3B0aW9ufT5cbiAgICAgICAgICB7c29ydE9wdGlvbnN9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvU29ydE9wdGlvbnM+XG4gICAgICA8L1NlYXJjaENvbnRhaW5lcj5cbiAgICApO1xuICB9XG5cbn07XG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7Il19