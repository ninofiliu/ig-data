/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../dist/ig-data.js":
/*!**************************!*\
  !*** ../dist/ig-data.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function webpackUniversalModuleDefinition(root, factory) {\n\tif(true)\n\t\tmodule.exports = factory();\n\telse {}\n})(window, function() {\nreturn /******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, { enumerable: true, get: getter });\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// define __esModule on exports\n/******/ \t__webpack_require__.r = function(exports) {\n/******/ \t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n/******/ \t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n/******/ \t\t}\n/******/ \t\tObject.defineProperty(exports, '__esModule', { value: true });\n/******/ \t};\n/******/\n/******/ \t// create a fake namespace object\n/******/ \t// mode & 1: value is a module id, require it\n/******/ \t// mode & 2: merge all properties of value into the ns\n/******/ \t// mode & 4: return value when already ns object\n/******/ \t// mode & 8|1: behave like require\n/******/ \t__webpack_require__.t = function(value, mode) {\n/******/ \t\tif(mode & 1) value = __webpack_require__(value);\n/******/ \t\tif(mode & 8) return value;\n/******/ \t\tif((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;\n/******/ \t\tvar ns = Object.create(null);\n/******/ \t\t__webpack_require__.r(ns);\n/******/ \t\tObject.defineProperty(ns, 'default', { enumerable: true, value: value });\n/******/ \t\tif(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));\n/******/ \t\treturn ns;\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"\";\n/******/\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = \"./src/index.ts\");\n/******/ })\n/************************************************************************/\n/******/ ({\n\n/***/ \"./src/index.ts\":\n/*!**********************!*\\\n  !*** ./src/index.ts ***!\n  \\**********************/\n/*! exports provided: publication */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\neval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony import */ var _publication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./publication */ \\\"./src/publication/index.ts\\\");\\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \\\"publication\\\", function() { return _publication__WEBPACK_IMPORTED_MODULE_0__; });\\n\\r\\n\\r\\n\\n\\n//# sourceURL=webpack://ig-data/./src/index.ts?\");\n\n/***/ }),\n\n/***/ \"./src/publication/get-media.ts\":\n/*!**************************************!*\\\n  !*** ./src/publication/get-media.ts ***!\n  \\**************************************/\n/*! exports provided: default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\neval(\"__webpack_require__.r(__webpack_exports__);\\nvar getMediaImage = function (data) {\\r\\n    if ('display_resources' in data) {\\r\\n        return {\\r\\n            type: 'image',\\r\\n            width: data.dimensions.width,\\r\\n            height: data.dimensions.height,\\r\\n            src: data.display_resources[data.display_resources.length - 1].src\\r\\n        };\\r\\n    }\\r\\n    throw Error('TS2339');\\r\\n};\\r\\nvar getMediaVideo = function (data) {\\r\\n    if ('video_url' in data) {\\r\\n        return {\\r\\n            type: 'video',\\r\\n            width: data.dimensions.width,\\r\\n            height: data.dimensions.height,\\r\\n            src: data.video_url\\r\\n        };\\r\\n    }\\r\\n    throw Error('TS2339');\\r\\n};\\r\\nvar getMedia = function (data) { return data.__typename == 'GraphImage' ? getMediaImage(data) : getMediaVideo(data); };\\r\\n/* harmony default export */ __webpack_exports__[\\\"default\\\"] = (getMedia);\\r\\n\\n\\n//# sourceURL=webpack://ig-data/./src/publication/get-media.ts?\");\n\n/***/ }),\n\n/***/ \"./src/publication/index.ts\":\n/*!**********************************!*\\\n  !*** ./src/publication/index.ts ***!\n  \\**********************************/\n/*! exports provided: fromShortcode, fromUrl, fromSource */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\neval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"fromShortcode\\\", function() { return fromShortcode; });\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"fromUrl\\\", function() { return fromUrl; });\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"fromSource\\\", function() { return fromSource; });\\n/* harmony import */ var _get_media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-media */ \\\"./src/publication/get-media.ts\\\");\\n\\r\\nvar fromShortcode = function (shortcode) { return fromUrl(\\\"https://www.instagram.com/p/\\\" + shortcode); };\\r\\nvar fromUrl = function (url) { return fetch(url)\\r\\n    .then(function (resp) { return resp.text(); })\\r\\n    .then(function (source) { return fromSource(source); }); };\\r\\nvar fromSource = function (source) {\\r\\n    // page data\\r\\n    var html = (new DOMParser()).parseFromString(source, 'text/html');\\r\\n    var script = html.getElementsByTagName('script')[4].innerText;\\r\\n    script = script.substr(script.indexOf('{'));\\r\\n    script = script.substr(0, script.lastIndexOf('}') + 1);\\r\\n    var data = JSON.parse(script);\\r\\n    var dataMedia = data.entry_data.PostPage[0].graphql.shortcode_media; // shorthand\\r\\n    // publication data\\r\\n    var shortcode = dataMedia.shortcode;\\r\\n    var sidecar = dataMedia.__typename == 'GraphSidecar';\\r\\n    var location = dataMedia.location;\\r\\n    var media;\\r\\n    if (sidecar) {\\r\\n        if ('edge_sidecar_to_children' in dataMedia) {\\r\\n            media = dataMedia.edge_sidecar_to_children.edges.map(function (edge) { return Object(_get_media__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"])(edge.node); });\\r\\n        }\\r\\n        else {\\r\\n            throw Error('TS2339');\\r\\n        }\\r\\n    }\\r\\n    else {\\r\\n        media = Object(_get_media__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"])(dataMedia);\\r\\n    }\\r\\n    return Promise.resolve({\\r\\n        shortcode: shortcode,\\r\\n        sidecar: sidecar,\\r\\n        location: location,\\r\\n        media: media\\r\\n    });\\r\\n};\\r\\n\\r\\n\\n\\n//# sourceURL=webpack://ig-data/./src/publication/index.ts?\");\n\n/***/ })\n\n/******/ });\n});\n\n//# sourceURL=webpack:///../dist/ig-data.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const igData = __webpack_require__(/*! ../dist/ig-data */ \"../dist/ig-data.js\");\r\n\r\nconst shortcodes = {\r\n    image: 'BrDpCEFgv-l',\r\n    video: 'BllIKy3B6aO',\r\n    sidecar: 'Bp2Vke3A5wo'\r\n};\r\nfor (let type in shortcodes) {\r\n    igData.publication.fromShortcode(shortcodes[type])\r\n        .then(pub => console.log(`Shortcode ${shortcodes[type]} (${type}) works:`, pub))\r\n        .catch(reason => console.log(`Shortcode ${shortcodes[type]} (${type}) doesn't works:`, reason));\r\n}\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });