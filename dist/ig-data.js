(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ig-data"] = factory();
	else
		root["ig-data"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: publication, user */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _publication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./publication */ \"./src/publication/index.ts\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"publication\", function() { return _publication__WEBPACK_IMPORTED_MODULE_0__; });\n/* harmony import */ var _profile_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile/user */ \"./src/profile/user.ts\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"user\", function() { return _profile_user__WEBPACK_IMPORTED_MODULE_1__; });\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://ig-data/./src/index.ts?");

/***/ }),

/***/ "./src/profile/user.ts":
/*!*****************************!*\
  !*** ./src/profile/user.ts ***!
  \*****************************/
/*! exports provided: fromUsername, fromUrl, fromSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fromUsername\", function() { return fromUsername; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fromUrl\", function() { return fromUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fromSource\", function() { return fromSource; });\n/* harmony import */ var _shared_data_from_source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/data-from-source */ \"./src/shared/data-from-source.ts\");\n/* harmony import */ var _types_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/errors */ \"./src/types/errors.ts\");\n\r\n\r\n/**\r\n * Get user data from username\r\n * @param username example: 'ssttaacckkyy'\r\n */\r\nvar fromUsername = function (username) { return fromUrl(\"https://www.instagram.com/\" + username); };\r\n/**\r\n * Get user data from profile url\r\n * @param url https://www.instagram.com/<username>\r\n */\r\nvar fromUrl = function (url) { return fetch(url)\r\n    .catch(function (reason) {\r\n    if (reason == 'TypeError: Failed to fetch')\r\n        throw Object(_types_errors__WEBPACK_IMPORTED_MODULE_1__[\"invalidUrlException\"])(url, 'profile');\r\n    throw reason;\r\n})\r\n    .then(function (resp) {\r\n    if (resp.status == 404)\r\n        throw Object(_types_errors__WEBPACK_IMPORTED_MODULE_1__[\"nonexistantUserException\"])(url);\r\n    return resp;\r\n})\r\n    .then(function (resp) { return resp.text(); })\r\n    .then(function (source) { return fromSource(source); }); };\r\n/**\r\n * Get user data from source code of profile page\r\n * @param source content of https://www.instagram.com/<username>\r\n */\r\nvar fromSource = function (source) {\r\n    var data = Object(_shared_data_from_source__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(source);\r\n    if ('ProfilePage' in data.entry_data) {\r\n        var userData = data.entry_data.ProfilePage[0].graphql.user; // shorthand\r\n        return Promise.resolve({\r\n            id: userData.id,\r\n            username: userData.username,\r\n            fullName: userData.full_name,\r\n            biography: userData.biography,\r\n            isPrivate: userData.is_private,\r\n            isVerified: userData.is_verified,\r\n            profilePicture: userData.profile_pic_url_hd,\r\n            followers: userData.edge_followed_by.count,\r\n            follows: userData.edge_follow.count,\r\n            externalUrl: userData.external_url\r\n        });\r\n    }\r\n    else {\r\n        throw Error('TS2339');\r\n    }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://ig-data/./src/profile/user.ts?");

/***/ }),

/***/ "./src/publication/get-media.ts":
/*!**************************************!*\
  !*** ./src/publication/get-media.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar getMediaImage = function (data) {\r\n    if ('display_resources' in data) {\r\n        return {\r\n            type: 'image',\r\n            width: data.dimensions.width,\r\n            height: data.dimensions.height,\r\n            src: data.display_resources[data.display_resources.length - 1].src\r\n        };\r\n    }\r\n    throw Error('TS2339');\r\n};\r\nvar getMediaVideo = function (data) {\r\n    if ('video_url' in data) {\r\n        return {\r\n            type: 'video',\r\n            width: data.dimensions.width,\r\n            height: data.dimensions.height,\r\n            src: data.video_url\r\n        };\r\n    }\r\n    throw Error('TS2339');\r\n};\r\nvar getMedia = function (data) { return data.__typename == 'GraphImage' ? getMediaImage(data) : getMediaVideo(data); };\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (getMedia);\r\n\n\n//# sourceURL=webpack://ig-data/./src/publication/get-media.ts?");

/***/ }),

/***/ "./src/publication/index.ts":
/*!**********************************!*\
  !*** ./src/publication/index.ts ***!
  \**********************************/
/*! exports provided: fromShortcode, fromUrl, fromSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fromShortcode\", function() { return fromShortcode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fromUrl\", function() { return fromUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fromSource\", function() { return fromSource; });\n/* harmony import */ var _get_media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-media */ \"./src/publication/get-media.ts\");\n/* harmony import */ var _types_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/errors */ \"./src/types/errors.ts\");\n/* harmony import */ var _shared_data_from_source__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/data-from-source */ \"./src/shared/data-from-source.ts\");\n\r\n\r\n\r\n\r\n/**\r\n * Get publication data from its shortcode\r\n * @param shortcode the 11 characters in the url of the publication: instagram.com/p/<shortcode>\r\n */\r\nvar fromShortcode = function (shortcode) { return fromUrl(\"https://www.instagram.com/p/\" + shortcode); };\r\n/**\r\n * Get publication data from its url\r\n * @param url the url of the publication, ex: https://www.instagram.com/p/BfJX1m1lZ5j/\r\n */\r\nvar fromUrl = function (url) { return fetch(url)\r\n    .catch(function (reason) {\r\n    if (reason == 'TypeError: Failed to fetch')\r\n        throw Object(_types_errors__WEBPACK_IMPORTED_MODULE_1__[\"invalidUrlException\"])(url, 'publication');\r\n    throw reason;\r\n})\r\n    .then(function (resp) {\r\n    if (resp.status == 404)\r\n        throw Object(_types_errors__WEBPACK_IMPORTED_MODULE_1__[\"nonexistantPublicationException\"])(url);\r\n    return resp;\r\n})\r\n    .then(function (resp) { return resp.text(); })\r\n    .then(function (source) { return fromSource(source); }); };\r\n/**\r\n * Get publication data from its source code\r\n * @param source example: content of https://www.instagram.com/p/BfJX1m1lZ5j/\r\n */\r\nvar fromSource = function (source) {\r\n    var data = Object(_shared_data_from_source__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(source);\r\n    // typeguard\r\n    if ('ProfilePage' in data.entry_data) {\r\n        // check if private\r\n        var isPrivate = data.entry_data.ProfilePage[0].graphql.user.is_private;\r\n        var username = data.entry_data.ProfilePage[0].graphql.user.username;\r\n        if (isPrivate) {\r\n            throw Object(_types_errors__WEBPACK_IMPORTED_MODULE_1__[\"privateUserException\"])(username);\r\n        }\r\n    }\r\n    // typeguard\r\n    if ('PostPage' in data.entry_data) {\r\n        // shorthand\r\n        var dataMedia = data.entry_data.PostPage[0].graphql.shortcode_media;\r\n        // publication data\r\n        var shortcode = dataMedia.shortcode;\r\n        var sidecar = dataMedia.__typename == 'GraphSidecar';\r\n        var location_1 = dataMedia.location;\r\n        var media = void 0;\r\n        if (sidecar) {\r\n            if ('edge_sidecar_to_children' in dataMedia) {\r\n                media = dataMedia.edge_sidecar_to_children.edges.map(function (edge) { return Object(_get_media__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(edge.node); });\r\n            }\r\n            else {\r\n                throw Error('TS2339');\r\n            }\r\n        }\r\n        else {\r\n            media = Object(_get_media__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(dataMedia);\r\n        }\r\n        return Promise.resolve({\r\n            shortcode: shortcode,\r\n            sidecar: sidecar,\r\n            location: location_1,\r\n            media: media\r\n        });\r\n    }\r\n};\r\n\r\n\n\n//# sourceURL=webpack://ig-data/./src/publication/index.ts?");

/***/ }),

/***/ "./src/shared/data-from-source.ts":
/*!****************************************!*\
  !*** ./src/shared/data-from-source.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * Get the content of window._sharedData\r\n * @param source source code of page (profile or publication)\r\n */\r\nvar dataFromSource = function (source) {\r\n    var html = (new DOMParser()).parseFromString(source, 'text/html');\r\n    var script = Array.from(html.getElementsByTagName('script'))\r\n        .map(function (elt) { return elt.innerText; })\r\n        .filter(function (text) { return /^[ ]*window._sharedData/.test(text); })[0];\r\n    script = script.substr(script.indexOf('{'));\r\n    script = script.substr(0, script.lastIndexOf('}') + 1);\r\n    return JSON.parse(script);\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (dataFromSource);\r\n\n\n//# sourceURL=webpack://ig-data/./src/shared/data-from-source.ts?");

/***/ }),

/***/ "./src/types/errors.ts":
/*!*****************************!*\
  !*** ./src/types/errors.ts ***!
  \*****************************/
/*! exports provided: privateUserException, nonexistantUserException, nonexistantPublicationException, invalidUrlException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"privateUserException\", function() { return privateUserException; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nonexistantUserException\", function() { return nonexistantUserException; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nonexistantPublicationException\", function() { return nonexistantPublicationException; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"invalidUrlException\", function() { return invalidUrlException; });\nvar privateUserException = function (username) {\r\n    return \"[ig-data:1]\\n    User '\" + username + \"' has a private account\\n    https://www.instagram.com/\" + username;\r\n};\r\nvar nonexistantUserException = function (url) {\r\n    return \"[ig-data:2]\\n    User doesn't exist\\n    \" + url;\r\n};\r\nvar nonexistantPublicationException = function (url) {\r\n    return \"[ig-data:3]\\n    Publication doesn't exist\\n    \" + url;\r\n};\r\nvar invalidUrlException = function (url, type) {\r\n    return \"[ig-data:4]\\n    Invalid \" + type + \" url '\" + url + \"'\";\r\n};\r\n\r\n\n\n//# sourceURL=webpack://ig-data/./src/types/errors.ts?");

/***/ })

/******/ });
});