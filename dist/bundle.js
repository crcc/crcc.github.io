/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Rx = __webpack_require__(1);
	/*
	Text Area
	*/
	var textArea = document.getElementById('text');
	function getText() {
	    return textArea.value;
	}
	var textSubscriber = Rx.Subscriber.create(function (text) { return textArea.value = text || ''; }, function (err) { return console.log(err); }, function () { return console.log('done'); });
	/* Text Area */
	/*
	Buttons
	*/
	// swap two lines and join
	var swapTwoLinesAndJoinButton = document.getElementById('swapTwoLines_join');
	var swapTwoLinesAndJoin$ = Rx.Observable.fromEvent(swapTwoLinesAndJoinButton, 'click');
	/* Buttons */
	/*
	Functions
	*/
	// swap two lines and join
	var EMPTY_LINE_REGEX = /^[ \t]*$/;
	function swapTwoLinesAndJoin(text, sep) {
	    if (sep === void 0) { sep = ' '; }
	    var result = [];
	    var state = 1;
	    // 1 means that we need first line of two lines to be joined
	    // 2 means that we need second line of two lines to be joined
	    for (var _i = 0, _a = text.split('\n'); _i < _a.length; _i++) {
	        var line = _a[_i];
	        if (EMPTY_LINE_REGEX.test(line)) {
	            result.push(line);
	        }
	        else if (state === 1) {
	            result.push(line);
	            state = 2;
	        }
	        else {
	            var firstLine = result.pop();
	            result.push(line + sep + firstLine);
	            state = 1;
	        }
	    }
	    return result.join('\n');
	}
	/* Functions */
	/*
	Combine All Parts
	*/
	swapTwoLinesAndJoin$
	    .map(function (_) { return swapTwoLinesAndJoin(getText()); })
	    .subscribe(textSubscriber);
	/* Combine All Parts */ 


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = Rx;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map