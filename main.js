/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    box-sizing: border-box;
    margin: 0px;
    padding: 0px ;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    list-style: none;
}
body{
    min-height: 100svh;
    position: relative;
}
.app{
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 9fr;
    min-height: inherit;
}
.app > header{
    grid-area: 1/1/1/3;
    background-color: rgb(187, 232, 255);
    display: flex;
    align-items: center;
    justify-content: start;
    padding-left: 20px;
}
.app > aside{
    grid-area: 2/1/3/2;
    background-color: rgb(0, 114, 175);
    display: flex;
    flex-direction: column;
}
.app > aside > *{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.app > section{
    grid-area: 2/2/3/3;
    background-color: rgb(228, 251, 255);
    display: flex;
    flex-direction: column;
}
button{
    border: none;
    padding: 10px 20px 10px 20px;
    background-color: rgb(0, 128, 255);
}
.add-task-popup, .add-project-popup{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.add-task-popup ul, .add-project-popup ul{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.add-task-popup ul li, .add-project-popup ul li{
    display: flex;
    gap: 10px;
    align-items: center;
}
.add-task-popup ul li > label, .add-project-popup ul li > label{
    flex-grow: 1;
}
.add-task-popup ul li > *, .add-project-popup li > *{
    height: 25px;
}
input{
    padding-left: 10px;
    border: 1px solid black;
}
legend{
    text-align: center;
    font-weight: bold;
    font-size: 25px;
}
.hidden{
    display: none;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,WAAW;IACX,aAAa;IACb,mJAAmJ;IACnJ,gBAAgB;AACpB;AACA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;IAC3B,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,oCAAoC;IACpC,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,kCAAkC;IAClC,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;AACA;IACI,kBAAkB;IAClB,oCAAoC;IACpC,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,YAAY;IACZ,4BAA4B;IAC5B,kCAAkC;AACtC;AACA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,uBAAuB;IACvB,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;AACvB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,uBAAuB;AAC3B;AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;AACA;IACI,aAAa;AACjB","sourcesContent":["*{\n    box-sizing: border-box;\n    margin: 0px;\n    padding: 0px ;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    list-style: none;\n}\nbody{\n    min-height: 100svh;\n    position: relative;\n}\n.app{\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 1fr 9fr;\n    min-height: inherit;\n}\n.app > header{\n    grid-area: 1/1/1/3;\n    background-color: rgb(187, 232, 255);\n    display: flex;\n    align-items: center;\n    justify-content: start;\n    padding-left: 20px;\n}\n.app > aside{\n    grid-area: 2/1/3/2;\n    background-color: rgb(0, 114, 175);\n    display: flex;\n    flex-direction: column;\n}\n.app > aside > *{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.app > section{\n    grid-area: 2/2/3/3;\n    background-color: rgb(228, 251, 255);\n    display: flex;\n    flex-direction: column;\n}\nbutton{\n    border: none;\n    padding: 10px 20px 10px 20px;\n    background-color: rgb(0, 128, 255);\n}\n.add-task-popup, .add-project-popup{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n.add-task-popup ul, .add-project-popup ul{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n.add-task-popup ul li, .add-project-popup ul li{\n    display: flex;\n    gap: 10px;\n    align-items: center;\n}\n.add-task-popup ul li > label, .add-project-popup ul li > label{\n    flex-grow: 1;\n}\n.add-task-popup ul li > *, .add-project-popup li > *{\n    height: 25px;\n}\ninput{\n    padding-left: 10px;\n    border: 1px solid black;\n}\nlegend{\n    text-align: center;\n    font-weight: bold;\n    font-size: 25px;\n}\n.hidden{\n    display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM-manager.js":
/*!****************************!*\
  !*** ./src/DOM-manager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo_list_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-list-manager */ "./src/todo-list-manager.js");
/* harmony import */ var _popup_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup-manager */ "./src/popup-manager.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/todo.js");



const DOMmanager = (()=>{
    const createProjectButton = document.querySelector('.add-project');
    const projectsList = document.querySelector('aside');
    const taskList = document.querySelector('.task-list');
    let projects = [];
    let currentProjectId = null;
    const updateTasks = (project)=>{
        taskList.innerHTML = '';
        project.todos.forEach(task => {
            taskList.append(createTask(task))
        });
    }
    const createProject = (project)=>{
        currentProjectId = project.id;
        let projectBar = createProjectBar(project);
        projects.push({projectBar: projectBar, project: project});
        updateTasks(project);
    }
    const createTask = (todo)=>{
        let task = document.createElement('div');
        let title = document.createElement('p');
        title.innerText = todo.title;
        task.append(title);
        return task;
    }
    const createProjectBar = (project)=>{
        let bar = document.createElement('div');
        let barName = document.createElement('p');
        barName.innerText = project.name;
        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'X';
        deleteButton.addEventListener('click',(e)=>{
            deleteProject(project.id);
        })
        if(project.isPersistent){
            bar.append(barName);
        }else{
            bar.append(barName, deleteButton);
        }
        projectsList.append(bar);
        return bar;
    }
    const deleteProject = (projectId)=>{
        let index = projects.map((e)=> e.project.id).indexOf(projectId);
        _todo_list_manager__WEBPACK_IMPORTED_MODULE_0__["default"].removeList(projectId);
        projects[index].projectBar.remove();
        projects.splice(index,1);
    }
    const addTask = (taskInput)=>{
        let index = projects.map((e)=> e.project.id).indexOf(currentProjectId);
        index = index<0? 0 : index;
        projects[index].project.addTodo(taskInput.title, taskInput.description, 'today', taskInput.priority, taskInput.isDone);
        updateTasks(projects[index].project);
    }
    const addProject = (projectInput)=>{
        let result = _todo_list_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createList(projectInput.title,projectInput.description,[],false);
        createProject(result.project);
    }
    // creating the general project / list 
    let result = _todo_list_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createList('General','General list',[],true);
    createProject(result.project);
    return {addTask, addProject}
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMmanager);

/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");

class List{
    constructor(name, description, todos, isPersistent){
        this.name = name;
        this.description = description;
        this.todos = todos;
        this.isPersistent = isPersistent;
        this.id = null;
    }
    addTodo(title, description, dueDate, priority, isDone){
        let todo = new _todo__WEBPACK_IMPORTED_MODULE_0__["default"](title, description, dueDate, priority, isDone);
        todo.id = this.todos.length;
        this.todos.push(todo);
    }
    removeTodo(id){
        let index = this.todos.map((e)=> e.id).indexOf(id);
        this.todos.splice(index,1);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);

/***/ }),

/***/ "./src/popup-manager.js":
/*!******************************!*\
  !*** ./src/popup-manager.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOM_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM-manager */ "./src/DOM-manager.js");

const popupManager = (()=>{
    const addTaskPopUp = document.querySelector('.add-task-popup');
    const addTaskTitle = document.querySelector('#task-title');
    const addTaskDescription = document.querySelector('#task-dsc');
    const addTaskPriority = document.querySelector('#priority');
    const addTaskIsDone = document.querySelector('#is-done');
    const addTaskButton = document.querySelector('.add-task-popup .add');
    const addTask = document.querySelector('.add-task');
    
    const addProjectPopUp = document.querySelector('.add-project-popup');
    const addProjectTitle = document.querySelector('#project-title');
    const addProjectDescription = document.querySelector('#project-description');
    const addProjectButton = document.querySelector('.add-project-popup .add');
    const addProject = document.querySelector('.add-project');
    addProject.addEventListener('click',(event)=>{
        addProjectPopUp.classList.remove('hidden');
        addProjectPopUp.reset();
    })
    addProjectButton.addEventListener('click',(event)=>{
        event.preventDefault();
        if(addProjectPopUp.checkValidity()){
            addProjectPopUp.classList.add('hidden');
            _DOM_manager__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(getProjectPoPupInput());
        }else{
            addProjectPopUp.reportValidity();
        }
    })
    addTask.addEventListener('click',(event)=>{
        addTaskPopUp.classList.remove('hidden');
        addTaskPopUp.reset();
    })
    addTaskButton.addEventListener('click',(event)=>{
        event.preventDefault();
        if(addTaskPopUp.checkValidity()){
            addTaskPopUp.classList.add('hidden');
            _DOM_manager__WEBPACK_IMPORTED_MODULE_0__["default"].addTask(getTaskPopUpInput());
        }else{
            addTaskPopUp.reportValidity();
        }
    })
    const getTaskPopUpInput = ()=>{
        return {
            title: addTaskTitle.value,
            description: addTaskDescription.value,
            priority: addTaskPriority.value,
            isDone: addTaskIsDone.checked,
        }
    }
    const getProjectPoPupInput = ()=>{
        return{
            title: addProjectTitle.value,
            description: addProjectDescription.value,
        }
    }
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupManager);

/***/ }),

/***/ "./src/todo-list-manager.js":
/*!**********************************!*\
  !*** ./src/todo-list-manager.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ "./src/list.js");

const manager = (()=>{
    let lists = [];
    const removeList = (id)=>{
        let index = lists.map((e)=> e.id).indexOf(id);
        lists.splice(index,1);
    } 
    const getCurrentLists = () => lists;
    const getListIndexById = (id)=>{
        return lists.map((e)=> e.id).indexOf(id);
    } 
    const getList = (id)=>{
        let index = getListIndexById(id);
        return lists[index];
    }
    const createList = (name, description, todos, isPersistent)=>{
        let list = new _list__WEBPACK_IMPORTED_MODULE_0__["default"](name, description, todos, isPersistent);
        list.id = lists.length;
        lists.push(list);
        return {id: list.id, project: list};
    }
    return {createList, removeList, getCurrentLists, getList};

})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (manager);

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Todo {
    constructor(title, description, dueDate, priority, isDone){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isDone = isDone;
        this.id = null;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todo_list_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-list-manager */ "./src/todo-list-manager.js");
/* harmony import */ var _DOM_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM-manager */ "./src/DOM-manager.js");





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLDRCQUE0Qiw2QkFBNkIsa0JBQWtCLG9CQUFvQiwwSkFBMEosdUJBQXVCLEdBQUcsT0FBTyx5QkFBeUIseUJBQXlCLEdBQUcsT0FBTyxvQkFBb0IscUNBQXFDLGtDQUFrQywwQkFBMEIsR0FBRyxnQkFBZ0IseUJBQXlCLDJDQUEyQyxvQkFBb0IsMEJBQTBCLDZCQUE2Qix5QkFBeUIsR0FBRyxlQUFlLHlCQUF5Qix5Q0FBeUMsb0JBQW9CLDZCQUE2QixHQUFHLG1CQUFtQixvQkFBb0IsMEJBQTBCLHFDQUFxQyxHQUFHLGlCQUFpQix5QkFBeUIsMkNBQTJDLG9CQUFvQiw2QkFBNkIsR0FBRyxTQUFTLG1CQUFtQixtQ0FBbUMseUNBQXlDLEdBQUcsc0NBQXNDLHlCQUF5QixlQUFlLGdCQUFnQix1Q0FBdUMsOEJBQThCLG9CQUFvQixvQkFBb0IsNkJBQTZCLGdCQUFnQixHQUFHLDRDQUE0QyxvQkFBb0IsNkJBQTZCLGdCQUFnQixHQUFHLGtEQUFrRCxvQkFBb0IsZ0JBQWdCLDBCQUEwQixHQUFHLGtFQUFrRSxtQkFBbUIsR0FBRyx1REFBdUQsbUJBQW1CLEdBQUcsUUFBUSx5QkFBeUIsOEJBQThCLEdBQUcsU0FBUyx5QkFBeUIsd0JBQXdCLHNCQUFzQixHQUFHLFVBQVUsb0JBQW9CLEdBQUcsbUJBQW1CO0FBQ3Z5RjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQzVGMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYjBDO0FBQ0M7QUFDakI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIseUNBQXlDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMERBQU87QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwREFBTztBQUM1QjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMERBQU87QUFDeEI7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNELGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7OztBQ2xFQztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNkNBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7OztBQ25Cb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0RBQVU7QUFDdEIsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvREFBVTtBQUN0QixTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7OztBQ3hERDtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNkNBQUk7QUFDM0I7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBLFlBQVk7O0FBRVosQ0FBQztBQUNELGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7O0FDeEJ0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUksRUFBQzs7Ozs7OztVQ1ZwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBb0I7QUFDc0I7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BvcHVwLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8tbGlzdC1tYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweCA7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ib2R5e1xuICAgIG1pbi1oZWlnaHQ6IDEwMHN2aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYXBwe1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDlmcjtcbiAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xufVxuLmFwcCA+IGhlYWRlcntcbiAgICBncmlkLWFyZWE6IDEvMS8xLzM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NywgMjMyLCAyNTUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5hcHAgPiBhc2lkZXtcbiAgICBncmlkLWFyZWE6IDIvMS8zLzI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDExNCwgMTc1KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYXBwID4gYXNpZGUgPiAqe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uYXBwID4gc2VjdGlvbntcbiAgICBncmlkLWFyZWE6IDIvMi8zLzM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOCwgMjUxLCAyNTUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbmJ1dHRvbntcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTI4LCAyNTUpO1xufVxuLmFkZC10YXNrLXBvcHVwLCAuYWRkLXByb2plY3QtcG9wdXB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG59XG4uYWRkLXRhc2stcG9wdXAgdWwsIC5hZGQtcHJvamVjdC1wb3B1cCB1bHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xufVxuLmFkZC10YXNrLXBvcHVwIHVsIGxpLCAuYWRkLXByb2plY3QtcG9wdXAgdWwgbGl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hZGQtdGFzay1wb3B1cCB1bCBsaSA+IGxhYmVsLCAuYWRkLXByb2plY3QtcG9wdXAgdWwgbGkgPiBsYWJlbHtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG4uYWRkLXRhc2stcG9wdXAgdWwgbGkgPiAqLCAuYWRkLXByb2plY3QtcG9wdXAgbGkgPiAqe1xuICAgIGhlaWdodDogMjVweDtcbn1cbmlucHV0e1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cbmxlZ2VuZHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuLmhpZGRlbntcbiAgICBkaXNwbGF5OiBub25lO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsYUFBYTtJQUNiLG1KQUFtSjtJQUNuSixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4IDtcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ib2R5e1xcbiAgICBtaW4taGVpZ2h0OiAxMDBzdmg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmFwcHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA5ZnI7XFxuICAgIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XFxufVxcbi5hcHAgPiBoZWFkZXJ7XFxuICAgIGdyaWQtYXJlYTogMS8xLzEvMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NywgMjMyLCAyNTUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcbi5hcHAgPiBhc2lkZXtcXG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTE0LCAxNzUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uYXBwID4gYXNpZGUgPiAqe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5hcHAgPiBzZWN0aW9ue1xcbiAgICBncmlkLWFyZWE6IDIvMi8zLzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjgsIDI1MSwgMjU1KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuYnV0dG9ue1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMjgsIDI1NSk7XFxufVxcbi5hZGQtdGFzay1wb3B1cCwgLmFkZC1wcm9qZWN0LXBvcHVwe1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4uYWRkLXRhc2stcG9wdXAgdWwsIC5hZGQtcHJvamVjdC1wb3B1cCB1bHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4uYWRkLXRhc2stcG9wdXAgdWwgbGksIC5hZGQtcHJvamVjdC1wb3B1cCB1bCBsaXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYWRkLXRhc2stcG9wdXAgdWwgbGkgPiBsYWJlbCwgLmFkZC1wcm9qZWN0LXBvcHVwIHVsIGxpID4gbGFiZWx7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuLmFkZC10YXNrLXBvcHVwIHVsIGxpID4gKiwgLmFkZC1wcm9qZWN0LXBvcHVwIGxpID4gKntcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5pbnB1dHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxubGVnZW5ke1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxufVxcbi5oaWRkZW57XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgbWFuYWdlciBmcm9tIFwiLi90b2RvLWxpc3QtbWFuYWdlclwiO1xuaW1wb3J0IHBvcHVwTWFuYWdlciBmcm9tIFwiLi9wb3B1cC1tYW5hZ2VyXCI7XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCI7XG5jb25zdCBET01tYW5hZ2VyID0gKCgpPT57XG4gICAgY29uc3QgY3JlYXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpO1xuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJyk7XG4gICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1saXN0Jyk7XG4gICAgbGV0IHByb2plY3RzID0gW107XG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0SWQgPSBudWxsO1xuICAgIGNvbnN0IHVwZGF0ZVRhc2tzID0gKHByb2plY3QpPT57XG4gICAgICAgIHRhc2tMaXN0LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBwcm9qZWN0LnRvZG9zLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICB0YXNrTGlzdC5hcHBlbmQoY3JlYXRlVGFzayh0YXNrKSlcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAocHJvamVjdCk9PntcbiAgICAgICAgY3VycmVudFByb2plY3RJZCA9IHByb2plY3QuaWQ7XG4gICAgICAgIGxldCBwcm9qZWN0QmFyID0gY3JlYXRlUHJvamVjdEJhcihwcm9qZWN0KTtcbiAgICAgICAgcHJvamVjdHMucHVzaCh7cHJvamVjdEJhcjogcHJvamVjdEJhciwgcHJvamVjdDogcHJvamVjdH0pO1xuICAgICAgICB1cGRhdGVUYXNrcyhwcm9qZWN0KTtcbiAgICB9XG4gICAgY29uc3QgY3JlYXRlVGFzayA9ICh0b2RvKT0+e1xuICAgICAgICBsZXQgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRpdGxlLmlubmVyVGV4dCA9IHRvZG8udGl0bGU7XG4gICAgICAgIHRhc2suYXBwZW5kKHRpdGxlKTtcbiAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgfVxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3RCYXIgPSAocHJvamVjdCk9PntcbiAgICAgICAgbGV0IGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgYmFyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgYmFyTmFtZS5pbm5lclRleHQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmlubmVyVGV4dCA9ICdYJztcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3QocHJvamVjdC5pZCk7XG4gICAgICAgIH0pXG4gICAgICAgIGlmKHByb2plY3QuaXNQZXJzaXN0ZW50KXtcbiAgICAgICAgICAgIGJhci5hcHBlbmQoYmFyTmFtZSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgYmFyLmFwcGVuZChiYXJOYW1lLCBkZWxldGVCdXR0b24pO1xuICAgICAgICB9XG4gICAgICAgIHByb2plY3RzTGlzdC5hcHBlbmQoYmFyKTtcbiAgICAgICAgcmV0dXJuIGJhcjtcbiAgICB9XG4gICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0SWQpPT57XG4gICAgICAgIGxldCBpbmRleCA9IHByb2plY3RzLm1hcCgoZSk9PiBlLnByb2plY3QuaWQpLmluZGV4T2YocHJvamVjdElkKTtcbiAgICAgICAgbWFuYWdlci5yZW1vdmVMaXN0KHByb2plY3RJZCk7XG4gICAgICAgIHByb2plY3RzW2luZGV4XS5wcm9qZWN0QmFyLnJlbW92ZSgpO1xuICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsMSk7XG4gICAgfVxuICAgIGNvbnN0IGFkZFRhc2sgPSAodGFza0lucHV0KT0+e1xuICAgICAgICBsZXQgaW5kZXggPSBwcm9qZWN0cy5tYXAoKGUpPT4gZS5wcm9qZWN0LmlkKS5pbmRleE9mKGN1cnJlbnRQcm9qZWN0SWQpO1xuICAgICAgICBpbmRleCA9IGluZGV4PDA/IDAgOiBpbmRleDtcbiAgICAgICAgcHJvamVjdHNbaW5kZXhdLnByb2plY3QuYWRkVG9kbyh0YXNrSW5wdXQudGl0bGUsIHRhc2tJbnB1dC5kZXNjcmlwdGlvbiwgJ3RvZGF5JywgdGFza0lucHV0LnByaW9yaXR5LCB0YXNrSW5wdXQuaXNEb25lKTtcbiAgICAgICAgdXBkYXRlVGFza3MocHJvamVjdHNbaW5kZXhdLnByb2plY3QpO1xuICAgIH1cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3RJbnB1dCk9PntcbiAgICAgICAgbGV0IHJlc3VsdCA9IG1hbmFnZXIuY3JlYXRlTGlzdChwcm9qZWN0SW5wdXQudGl0bGUscHJvamVjdElucHV0LmRlc2NyaXB0aW9uLFtdLGZhbHNlKTtcbiAgICAgICAgY3JlYXRlUHJvamVjdChyZXN1bHQucHJvamVjdCk7XG4gICAgfVxuICAgIC8vIGNyZWF0aW5nIHRoZSBnZW5lcmFsIHByb2plY3QgLyBsaXN0IFxuICAgIGxldCByZXN1bHQgPSBtYW5hZ2VyLmNyZWF0ZUxpc3QoJ0dlbmVyYWwnLCdHZW5lcmFsIGxpc3QnLFtdLHRydWUpO1xuICAgIGNyZWF0ZVByb2plY3QocmVzdWx0LnByb2plY3QpO1xuICAgIHJldHVybiB7YWRkVGFzaywgYWRkUHJvamVjdH1cbn0pKCk7XG5leHBvcnQgZGVmYXVsdCBET01tYW5hZ2VyOyIsImltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG9cIjtcbmNsYXNzIExpc3R7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIHRvZG9zLCBpc1BlcnNpc3RlbnQpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMudG9kb3MgPSB0b2RvcztcbiAgICAgICAgdGhpcy5pc1BlcnNpc3RlbnQgPSBpc1BlcnNpc3RlbnQ7XG4gICAgICAgIHRoaXMuaWQgPSBudWxsO1xuICAgIH1cbiAgICBhZGRUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzRG9uZSl7XG4gICAgICAgIGxldCB0b2RvID0gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaXNEb25lKTtcbiAgICAgICAgdG9kby5pZCA9IHRoaXMudG9kb3MubGVuZ3RoO1xuICAgICAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XG4gICAgfVxuICAgIHJlbW92ZVRvZG8oaWQpe1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnRvZG9zLm1hcCgoZSk9PiBlLmlkKS5pbmRleE9mKGlkKTtcbiAgICAgICAgdGhpcy50b2Rvcy5zcGxpY2UoaW5kZXgsMSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTGlzdDsiLCJpbXBvcnQgRE9NbWFuYWdlciBmcm9tIFwiLi9ET00tbWFuYWdlclwiO1xuY29uc3QgcG9wdXBNYW5hZ2VyID0gKCgpPT57XG4gICAgY29uc3QgYWRkVGFza1BvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLXBvcHVwJyk7XG4gICAgY29uc3QgYWRkVGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stdGl0bGUnKTtcbiAgICBjb25zdCBhZGRUYXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kc2MnKTtcbiAgICBjb25zdCBhZGRUYXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKTtcbiAgICBjb25zdCBhZGRUYXNrSXNEb25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lzLWRvbmUnKTtcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLXBvcHVwIC5hZGQnKTtcbiAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrJyk7XG4gICAgXG4gICAgY29uc3QgYWRkUHJvamVjdFBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LXBvcHVwJyk7XG4gICAgY29uc3QgYWRkUHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUnKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1kZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtcG9wdXAgLmFkZCcpO1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QnKTtcbiAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZXZlbnQpPT57XG4gICAgICAgIGFkZFByb2plY3RQb3BVcC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgYWRkUHJvamVjdFBvcFVwLnJlc2V0KCk7XG4gICAgfSlcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZXZlbnQpPT57XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmKGFkZFByb2plY3RQb3BVcC5jaGVja1ZhbGlkaXR5KCkpe1xuICAgICAgICAgICAgYWRkUHJvamVjdFBvcFVwLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgRE9NbWFuYWdlci5hZGRQcm9qZWN0KGdldFByb2plY3RQb1B1cElucHV0KCkpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGFkZFByb2plY3RQb3BVcC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICBhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZXZlbnQpPT57XG4gICAgICAgIGFkZFRhc2tQb3BVcC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgYWRkVGFza1BvcFVwLnJlc2V0KCk7XG4gICAgfSlcbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZXZlbnQpPT57XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmKGFkZFRhc2tQb3BVcC5jaGVja1ZhbGlkaXR5KCkpe1xuICAgICAgICAgICAgYWRkVGFza1BvcFVwLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgRE9NbWFuYWdlci5hZGRUYXNrKGdldFRhc2tQb3BVcElucHV0KCkpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGFkZFRhc2tQb3BVcC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICBjb25zdCBnZXRUYXNrUG9wVXBJbnB1dCA9ICgpPT57XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aXRsZTogYWRkVGFza1RpdGxlLnZhbHVlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGFkZFRhc2tEZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgICAgICAgIHByaW9yaXR5OiBhZGRUYXNrUHJpb3JpdHkudmFsdWUsXG4gICAgICAgICAgICBpc0RvbmU6IGFkZFRhc2tJc0RvbmUuY2hlY2tlZCxcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBnZXRQcm9qZWN0UG9QdXBJbnB1dCA9ICgpPT57XG4gICAgICAgIHJldHVybntcbiAgICAgICAgICAgIHRpdGxlOiBhZGRQcm9qZWN0VGl0bGUudmFsdWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYWRkUHJvamVjdERlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICB9XG4gICAgfVxufSkoKTtcbmV4cG9ydCBkZWZhdWx0IHBvcHVwTWFuYWdlcjsiLCJpbXBvcnQgTGlzdCBmcm9tIFwiLi9saXN0XCI7XG5jb25zdCBtYW5hZ2VyID0gKCgpPT57XG4gICAgbGV0IGxpc3RzID0gW107XG4gICAgY29uc3QgcmVtb3ZlTGlzdCA9IChpZCk9PntcbiAgICAgICAgbGV0IGluZGV4ID0gbGlzdHMubWFwKChlKT0+IGUuaWQpLmluZGV4T2YoaWQpO1xuICAgICAgICBsaXN0cy5zcGxpY2UoaW5kZXgsMSk7XG4gICAgfSBcbiAgICBjb25zdCBnZXRDdXJyZW50TGlzdHMgPSAoKSA9PiBsaXN0cztcbiAgICBjb25zdCBnZXRMaXN0SW5kZXhCeUlkID0gKGlkKT0+e1xuICAgICAgICByZXR1cm4gbGlzdHMubWFwKChlKT0+IGUuaWQpLmluZGV4T2YoaWQpO1xuICAgIH0gXG4gICAgY29uc3QgZ2V0TGlzdCA9IChpZCk9PntcbiAgICAgICAgbGV0IGluZGV4ID0gZ2V0TGlzdEluZGV4QnlJZChpZCk7XG4gICAgICAgIHJldHVybiBsaXN0c1tpbmRleF07XG4gICAgfVxuICAgIGNvbnN0IGNyZWF0ZUxpc3QgPSAobmFtZSwgZGVzY3JpcHRpb24sIHRvZG9zLCBpc1BlcnNpc3RlbnQpPT57XG4gICAgICAgIGxldCBsaXN0ID0gbmV3IExpc3QobmFtZSwgZGVzY3JpcHRpb24sIHRvZG9zLCBpc1BlcnNpc3RlbnQpO1xuICAgICAgICBsaXN0LmlkID0gbGlzdHMubGVuZ3RoO1xuICAgICAgICBsaXN0cy5wdXNoKGxpc3QpO1xuICAgICAgICByZXR1cm4ge2lkOiBsaXN0LmlkLCBwcm9qZWN0OiBsaXN0fTtcbiAgICB9XG4gICAgcmV0dXJuIHtjcmVhdGVMaXN0LCByZW1vdmVMaXN0LCBnZXRDdXJyZW50TGlzdHMsIGdldExpc3R9O1xuXG59KSgpO1xuZXhwb3J0IGRlZmF1bHQgbWFuYWdlcjsiLCJjbGFzcyBUb2RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0RvbmUpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmlzRG9uZSA9IGlzRG9uZTtcbiAgICAgICAgdGhpcy5pZCA9IG51bGw7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVG9kbztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgbWFuYWdlciBmcm9tIFwiLi90b2RvLWxpc3QtbWFuYWdlclwiO1xuaW1wb3J0IERPTW1hbmFnZXIgZnJvbSBcIi4vRE9NLW1hbmFnZXJcIjtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9