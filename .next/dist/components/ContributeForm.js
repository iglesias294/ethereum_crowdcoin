'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Ari/Desktop/kickstart/components/ContributeForm.js';


var ContributeForm = function (_Component) {
  (0, _inherits3.default)(ContributeForm, _Component);

  function ContributeForm() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ContributeForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      loading: false,
      errorMessage: ''
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var campaign, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                campaign = (0, _campaign2.default)(_this.props.address);

                _this.setState({ loading: true, errorMessage: '' });
                _context.prev = 3;
                _context.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context.sent;
                _context.next = 9;
                return campaign.methods.contribute().send({
                  from: accounts[0],
                  value: _web2.default.utils.toWei(_this.state.value, 'ether')
                });

              case 9:
                _routes.Router.replaceRoute('/campaigns/' + _this.props.address);
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](3);

                _this.setState({ errorMessage: _context.t0 });

              case 15:
                _this.setState({ loading: false, value: '' });

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[3, 12]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ContributeForm, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, 'Amount to Contribute'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.value,
        label: 'ether',
        labelPosition: 'right',
        onChange: function onChange(event) {
          return _this3.setState({ value: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Ooops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, 'Contribute!')));
    }
  }]);

  return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQnV0dG9uIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiUm91dGVyIiwiQ29udHJpYnV0ZUZvcm0iLCJzdGF0ZSIsInZhbHVlIiwibG9hZGluZyIsImVycm9yTWVzc2FnZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInV0aWxzIiwidG9XZWkiLCJyZXBsYWNlUm91dGUiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQU8sQUFBUzs7QUFDL0IsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQWM7Ozs7Ozs7SSxBQUVqQjs7Ozs7Ozs7Ozs7Ozs7OzROLEFBQ0o7YUFBUSxBQUNDLEFBQ1A7ZUFGTSxBQUVHLEFBQ1Q7b0JBQWMsQSxBQUhSO0FBQUEsQUFDTixhLEFBSUY7MkZBQVcsaUJBQUEsQUFBTyxPQUFQO3NCQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNUO3NCQUFBLEFBQU0sQUFDQTtBQUZHLDJCQUVRLHdCQUFTLE1BQUEsQUFBSyxNQUZ0QixBQUVRLEFBQW9CLEFBQ3JDOztzQkFBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxjQUh0QixBQUdULEFBQWMsQUFBK0I7Z0NBSHBDO2dDQUFBO3VCQUtnQixjQUFBLEFBQUssSUFMckIsQUFLZ0IsQUFBUzs7bUJBQTFCO0FBTEMsb0NBQUE7Z0NBQUE7Z0NBTUQsQUFBUyxRQUFULEFBQWlCLGFBQWpCLEFBQThCO3dCQUM1QixTQURpQyxBQUNqQyxBQUFTLEFBQ2Y7eUJBQU8sY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFNLE1BQUEsQUFBSyxNQUF0QixBQUE0QixPQVI5QixBQU1ELEFBQW1DLEFBRWhDLEFBQW1DO0FBRkgsQUFDdkMsaUJBREk7O21CQUlOOytCQUFBLEFBQU8sNkJBQTJCLE1BQUEsQUFBSyxNQVZoQyxBQVVQLEFBQTZDO2dDQVZ0QztBQUFBOzttQkFBQTtnQ0FBQTtnREFZUDs7c0JBQUEsQUFBSyxTQUFTLEVBQUMsdUJBWlIsQUFZUCxBQUFjOzttQkFHaEI7c0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE9BQU8sT0FmdkIsQUFlVCxBQUFjLEFBQXlCOzttQkFmOUI7bUJBQUE7Z0NBQUE7O0FBQUE7aUNBQUE7QTs7Ozs7Ozs7Ozs2QkFpQkY7bUJBQ1Y7OzZCQUVFLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtvQkFBbkQ7c0JBQUEsQUFDRztBQURIO09BQUEsa0JBQ0ksY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EseUNBQUEsQUFBQztlQUNRLEtBQUEsQUFBSyxNQURkLEFBQ29CLEFBQ2xCO2VBRkYsQUFFUSxBQUNOO3VCQUhGLEFBR2dCLEFBQ2Q7a0JBQVUseUJBQUE7aUJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxPQUFPLE1BQUEsQUFBTSxPQUF0QyxBQUFTLEFBQWMsQUFBc0I7QUFKekQ7O29CQUFBO3NCQUZGLEFBRUUsQUFNRTtBQU5GO0FBQ0UsMEJBS0EsQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixVQUFTLFNBQVMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EO29CQUFuRDtzQkFSSixBQVFJLEFBQ0E7QUFEQTswQkFDQSxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0M7b0JBQXBDO3NCQUFBO0FBQUE7U0FaVCxBQUVFLEFBQ0csQUFTSSxBQUtQOzs7OztBQXpDMEIsQSxBQTRDN0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiQ29udHJpYnV0ZUZvcm0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL0FyaS9EZXNrdG9wL2tpY2tzdGFydCJ9