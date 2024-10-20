/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Bootstrap = /*#__PURE__*/function () {\n  function Bootstrap(app) {\n    _classCallCheck(this, Bootstrap);\n    _defineProperty(this, \"data\", [{\n      id: 1,\n      title: \"Gmail\",\n      url: \"https://mail.google.com/\",\n      username: \"app@gmail.com\",\n      password: \"123456\"\n    }, {\n      id: 2,\n      title: \"Version\",\n      url: \"https://gitlab.com/\",\n      username: \"app@gmail.com\",\n      password: \"1234\"\n    }]);\n    this.app = app;\n\n    //this.table.addEventListener(\"click\", this.handleClick.bind(this));\n  }\n  return _createClass(Bootstrap, [{\n    key: \"init\",\n    value: function init() {\n      if (this.app == null) {\n        throw new Error(\"Main app element not found.\");\n      }\n      console.log(this.app);\n      this.app.querySelector(\"#formSubmit\").addEventListener(\"click\", this.addItem.bind(this));\n      this.displayItem();\n    }\n  }, {\n    key: \"addItem\",\n    value: function addItem(el) {\n      console.log(el);\n      var title = this.app.querySelector(\"#title\");\n      var url = this.app.querySelector(\"#url\");\n      var username = this.app.querySelector(\"#username\");\n      var password = this.app.querySelector(\"#password\");\n      if (title.value == \"\") {\n        alert(\"Title is required.\");\n      } else if (url.value == \"\") {\n        alert(\"URL is required.\");\n      } else if (username.value == \"\") {\n        alert(\"username is required.\");\n      } else if (password.value == \"\") {\n        alert(\"password is required.\");\n      }\n      var data = {\n        id: this.data.length + 1,\n        title: title.value,\n        url: url.value,\n        username: username.value,\n        password: password.value\n      };\n\n      //this.validate(data);\n      this.data.push(data);\n      console.log(data);\n      //const url = this.app.getElementById(\"url\");\n      //reload\n      this.displayItem();\n    }\n  }, {\n    key: \"validate\",\n    value: function validate() {}\n  }, {\n    key: \"removeItem\",\n    value: function removeItem() {}\n  }, {\n    key: \"displayItem\",\n    value: function displayItem() {\n      var template = \"\";\n      this.data.forEach(function (element) {\n        template += \"<div>\\n        <div>Title: <b>\".concat(element.title, \"</b></div>\\n        <div>URL: <b>\").concat(element.url, \"</b></div>\\n        <div>Username: <b>\").concat(element.username, \"</b></div>\\n        <div>Password: <b>\").concat(element.password, \"</b></div>\\n        </div></br>\");\n      });\n      var table = this.app.querySelector(\"#table\");\n      table.innerHTML += template;\n    }\n  }, {\n    key: \"getItem\",\n    value: function getItem() {\n      /* fetch(\"./data.json\")\n            .then((response) => {\n              return response.json();\n            })\n            .then((json) => {\n              console.log(json);\n            })\n            .catch((error) => {\n              console.error(error);\n            }); */\n    }\n  }]);\n}();\nvar app = document.getElementById(\"app\");\n//console.log(app);\nvar boot = new Bootstrap(app);\nboot.init();\n\n//const data = new AccountModel();\n//console.log(\"data\");\n\n//const addForm = document.getElementById(\"formsubmit\");\n\n//# sourceURL=webpack://password-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;