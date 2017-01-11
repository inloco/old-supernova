"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Button = require("./Button");

var _Button2 = _interopRequireDefault(_Button);

var _Icon = require("./Icon");

var _Icon2 = _interopRequireDefault(_Icon);

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBox = function (_React$Component) {
  _inherits(SearchBox, _React$Component);

  function SearchBox(props) {
    _classCallCheck(this, SearchBox);

    var _this = _possibleConstructorReturn(this, (SearchBox.__proto__ || Object.getPrototypeOf(SearchBox)).call(this, props));

    _this.state = {
      results: props.results,
      selectedResultsIds: [],
      latestResultsIds: props.results.map(function (result) {
        return result.id;
      }),
      expandedResults: false
    };
    return _this;
  }

  _createClass(SearchBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var body = document.querySelector('body');

      body.onclick = this.handleOutsideClick.bind(this);
    }
  }, {
    key: "handleOutsideClick",
    value: function handleOutsideClick(event) {
      if (event.target !== this.input) {
        this.setState({ expandedResults: false });
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.updateResultsIfIsNeeded(nextProps);
      this.selectNewResultIfIsNeeded(nextProps);
    }
  }, {
    key: "updateResultsIfIsNeeded",
    value: function updateResultsIfIsNeeded(nextProps) {
      if (nextProps.results !== this.props.results) {
        this.setState({
          latestResultsIds: nextProps.results.map(function (result) {
            return result.id;
          }),
          results: _lodash2.default.unionBy(nextProps.results, this.state.results, "id")
        });
      }
    }
  }, {
    key: "selectNewResultIfIsNeeded",
    value: function selectNewResultIfIsNeeded(nextProps) {
      var nextSelectedResult = nextProps.selectedResult;

      if (!nextSelectedResult) return undefined;

      var existentResult = this.state.results.find(function (result) {
        return result.id === nextSelectedResult.id;
      });

      if (existentResult) {
        return this.updateSelectedResult(nextSelectedResult);
      }

      if (nextSelectedResult !== this.props.selectedResult) {
        this.setState({
          results: [].concat(_toConsumableArray(this.state.results), [nextSelectedResult]),
          selectedResultsIds: [nextSelectedResult.id]
        });
      }
    }
  }, {
    key: "updateSelectedResult",
    value: function updateSelectedResult(updatedResult) {
      this.setState({
        results: this.state.results.map(function (result) {
          return result.id === updatedResult.id ? updatedResult : result;
        })
      });
    }
  }, {
    key: "render",
    value: function render() {
      var haveSelectedResults = this.getSelectedResults().length > 0;
      var shouldShowInput = !(this.props.single && haveSelectedResults);

      return _react2.default.createElement(
        "div",
        { className: "sn-search-box" },
        this.renderSelectedResults(),
        shouldShowInput && this.renderInput()
      );
    }
  }, {
    key: "renderSelectedResults",
    value: function renderSelectedResults() {
      var _this2 = this;

      var selectedResults = this.getSelectedResults();

      if (selectedResults.length === 0) return null;

      return _react2.default.createElement(
        "ul",
        { className: "sn-search-box__selected" },
        selectedResults.map(function (result) {
          return _react2.default.createElement(
            "li",
            { key: result.id },
            _this2.renderSelectedResultCard(result)
          );
        })
      );
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      var _this3 = this;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement("input", {
          ref: function ref(input) {
            return _this3.input = input;
          },
          type: "text",
          className: "sn-search-box__input",
          placeholder: this.props.label,
          autoComplete: "off",
          onFocus: this.handleInputFocus.bind(this),
          onChange: this.handleInputChange.bind(this) }),
        _react2.default.createElement("span", { className: "sn-search-box__input--icon" }),
        this.hasMinimumInputLength() && this.renderResults(),
        this.renderHelpMessage()
      );
    }
  }, {
    key: "getSelectedResults",
    value: function getSelectedResults() {
      var _this4 = this;

      var _state = this.state;
      var results = _state.results;
      var selectedResultsIds = _state.selectedResultsIds;


      return results.filter(function (result) {
        return _this4.resultIsSelected(result);
      });
    }
  }, {
    key: "resultIsSelected",
    value: function resultIsSelected(result) {
      return this.state.selectedResultsIds.includes(result.id);
    }
  }, {
    key: "renderSelectedResultCard",
    value: function renderSelectedResultCard(selectedResult) {
      var CustomComponent = this.props.component;

      if (CustomComponent) {
        return _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(CustomComponent, { result: selectedResult }),
          _react2.default.createElement("button", {
            type: "button",
            className: "sn-search-box__item-button sn-search-box__item-button--top",
            onClick: this.handleUnselectClick.bind(this, selectedResult) })
        );
      }

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: "sn-search-box__item-content" },
          selectedResult.title
        ),
        _react2.default.createElement("button", {
          type: "button",
          className: "sn-search-box__item-button",
          onClick: this.handleUnselectClick.bind(this, selectedResult) })
      );
    }
  }, {
    key: "handleInputFocus",
    value: function handleInputFocus() {
      this.setState({ expandedResults: true });
    }
  }, {
    key: "handleUnselectClick",
    value: function handleUnselectClick(unselectedResult) {
      this.unselectResult(unselectedResult);

      this.input && this.input.focus();
    }
  }, {
    key: "unselectResult",
    value: function unselectResult(unselectedResult) {
      var _this5 = this;

      var selectedResultsIds = this.state.selectedResultsIds;


      if (this.props.shouldUnselectResult()) {
        this.setState({
          selectedResultsIds: selectedResultsIds.filter(function (resultId) {
            return unselectedResult.id !== resultId;
          })
        }, function () {
          return _this5.props.onUnselectResult(unselectedResult);
        });
      }
    }
  }, {
    key: "handleInputChange",
    value: function handleInputChange(event) {
      if (typeof this.props.onChange === "function") {
        this.props.onChange(event);
      }

      this.setState({
        results: this.state.results.map(function (result) {
          var matched = result.title.toLowerCase().includes(event.target.value.toLowerCase());

          return _extends({}, result, { matched: matched });
        })
      });
    }
  }, {
    key: "hasMinimumInputLength",
    value: function hasMinimumInputLength() {
      return this.input && this.input.value.length > 1;
    }
  }, {
    key: "renderResults",
    value: function renderResults() {
      var _this6 = this;

      var visibleResults = this.getVisibleResults();
      var isEmpty = visibleResults.length === 0;
      var hasAddButton = this.props.addButton;

      return _react2.default.createElement(
        "ul",
        {
          className: "sn-search-box__results",
          style: { display: this.state.expandedResults ? 'block' : 'none' } },
        isEmpty && this.renderEmptyMessage(),
        !isEmpty && visibleResults.map(function (result) {
          return _react2.default.createElement(
            "li",
            { key: result.id },
            _this6.renderResultCard(result)
          );
        }),
        hasAddButton && this.renderAddButton()
      );
    }
  }, {
    key: "renderAddButton",
    value: function renderAddButton() {
      return _react2.default.createElement(
        "li",
        { className: "sn-search-box__results--action" },
        _react2.default.createElement(
          "div",
          { className: "sn-search-box__item-content" },
          _react2.default.createElement(
            _Button2.default,
            { size: "xs", onClick: this.props.addButton.onClick },
            _react2.default.createElement(_Icon2.default, { code: "add" }),
            _react2.default.createElement(
              "span",
              { className: "is-hidden--tablet-threshold" },
              this.props.addButton.label
            )
          )
        )
      );
    }
  }, {
    key: "getVisibleResults",
    value: function getVisibleResults() {
      var _this7 = this;

      var currentResults = this.getCurrentResults();

      return this.props.ajax ? currentResults.filter(function (result) {
        return !_this7.resultIsSelected(result);
      }) : currentResults.filter(function (result) {
        return !_this7.resultIsSelected(result) && result.matched;
      });
    }
  }, {
    key: "getCurrentResults",
    value: function getCurrentResults() {
      var _state2 = this.state;
      var latestResultsIds = _state2.latestResultsIds;
      var results = _state2.results;


      return results.filter(function (result) {
        return latestResultsIds.includes(result.id);
      });
    }
  }, {
    key: "renderEmptyMessage",
    value: function renderEmptyMessage() {
      return _react2.default.createElement(
        "li",
        { className: "sn-search-box__results--no-results" },
        _react2.default.createElement(
          "div",
          { className: "sn-search-box__item-content" },
          "Nenhum resultado encontrado."
        )
      );
    }
  }, {
    key: "renderResultCard",
    value: function renderResultCard(result) {
      return _react2.default.createElement(
        "div",
        { onClick: this.handleResultCardMouseDown.bind(this, result) },
        _react2.default.createElement(
          "div",
          { className: "sn-search-box__item-content" },
          _react2.default.createElement(
            "div",
            { className: "sn-grid sn-grid--responsive-mobile-lg sn-grid--cell-gutter" },
            _react2.default.createElement(
              "div",
              { className: "sn-cell--1" },
              _react2.default.createElement(
                "span",
                { className: "sn-typo--font-bold" },
                result.title
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "sn-cell--auto sn-cell--text-right" },
              _react2.default.createElement(
                "span",
                { className: "sn-typo--caption sn-color--secondary-text" },
                result.info
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "sn-grid sn-grid--responsive-mobile-lg" },
            _react2.default.createElement(
              "div",
              { className: "sn-cell--1" },
              _react2.default.createElement(
                "span",
                { className: "sn-typo--caption sn-color--secondary-text" },
                result.subtitle
              )
            )
          )
        ),
        _react2.default.createElement("button", { type: "button", className: "sn-search-box__item-button" })
      );
    }
  }, {
    key: "handleResultCardMouseDown",
    value: function handleResultCardMouseDown(result, event) {
      this.selectResult(result);

      this.input.focus();
      this.input.value = "";
    }
  }, {
    key: "selectResult",
    value: function selectResult(selectedResult) {
      var _this8 = this;

      var selectedResultsIds = this.state.selectedResultsIds;


      this.setState({
        selectedResultsIds: selectedResultsIds.concat(selectedResult.id)
      }, function () {
        return _this8.props.onSelectResult(selectedResult);
      });
    }
  }, {
    key: "renderHelpMessage",
    value: function renderHelpMessage() {
      return _react2.default.createElement(
        "span",
        { className: this.getHelpMessageClassName() },
        this.props.helpMessage
      );
    }
  }, {
    key: "getHelpMessageClassName",
    value: function getHelpMessageClassName() {
      return "sn-search-box__message " + this.getTypeMessageClassName();
    }
  }, {
    key: "getTypeMessageClassName",
    value: function getTypeMessageClassName() {
      var typeMessage = this.props.typeMessage;


      return typeMessage ? "sn-search-box__message--" + typeMessage : "";
    }
  }]);

  return SearchBox;
}(_react2.default.Component);

SearchBox.defaultProps = {
  results: [],
  shouldUnselectResult: function shouldUnselectResult() {
    return true;
  }
};

exports.default = SearchBox;