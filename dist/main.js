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
    display: flex;
    font-weight: bold;
    align-items: center;
    justify-content: start;
    padding-left: 10px;
    border-bottom: 2px solid rgb(241, 241, 241);

}
.app > aside{
    grid-area: 2/1/3/2;
    background-color: rgb(250, 250, 250);
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;

}
.app > aside > *{
    min-height: 35px;
    padding: 10px;
}
.app > aside > *{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 6px;
}
.app > section{
    grid-area: 2/2/3/3;
    display: flex;
    flex-direction: column;
}
button{
    border: none;
    padding: 10px 20px 10px 20px;
    background-color: #000000;
    cursor: pointer;
    font-weight: 500;
    border-radius: 6px;
    color: white;
}
.add-task-popup, .add-project-popup{
    border-radius: 6px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
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
    display: flex;
    align-items: center;
}
.add-task-popup ul li > :not(#is-done), .add-project-popup li > * {
    height: 35px;
    width: 50%;
}
.add-task-popup ul li:has(#is-done){
    justify-content: space-between;
}
input, select{
    padding-left: 10px;
    padding-right: 10px;
    border: none;
    background-color: rgb(241, 241, 241);
    border-radius: 6px;
}
legend{
    text-align: center;
    font-weight: bold;
    font-size: 16px;
}
.hidden{
    display: none;
}
.close{
    align-self: flex-end;
}
.task-list{
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 5px;
}
.task-list > *{
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.061) 0px 3px 12px;
}
.task-list  .todo{
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-radius: 6px;
}
button.close{
    background-color: transparent;
    border: 2px solid red;
    color: red;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
}
button.delete{
    background-color: red;
    color: rgb(129, 0, 0);
}
.selected-project{
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.061) 0px 3px 12px;

}
.todo{
    background-color: white;
}
.todo-buttons{
    display:  flex;
    gap: 10px;
    align-items: center;
    align-items: stretch;
}
.projects-header, .todo-header{
    font-weight: bold;
}
.todo-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}

aside .projects-header{
    padding: 0px;
}
.add-project, .add-task{
    font-size: 25px;
    padding: 2px 10px;
    box-shadow: rgba(0, 0, 0, 0.061) 0px 3px 12px;
    background-color: white;
    color: black;
    display: flex;
    align-items: center;
    font-size: 16px;
    padding-top: 6px;
    padding-bottom: 6px;
}
.add-project:hover, .add-task:hover{
    background-color: white;
    color: #0095ff;
}
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
}
.add-task-popup .add, .add-project-popup .add{
    margin-top: 20px;
}
.priority{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px 5px 10px;
    border-radius: 5px;
    width: 80px;
}
.low{
    border: 2px solid rgb(47, 255, 57);
    color: rgb(47, 255, 57);
}
.medium{
    border: 2px solid rgb(255, 196, 0);
    color: rgb(255, 196, 0);
}
.heigh{
    border: 2px solid rgb(255, 0, 0);
    color: rgb(255, 0, 0);
}
.todo-title{
    text-transform: capitalize;
    font-weight: bold;
    padding-left: 10px;
    display: flex;
    align-items: center;
    font-style: italic;
}
.todo-details{
    padding: 10px;
    transition: 0.2s;
    overflow: hidden;
}
.shown{
    height: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
}
.due-date{
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,WAAW;IACX,aAAa;IACb,mJAAmJ;IACnJ,gBAAgB;AACpB;AACA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,2BAA2B;IAC3B,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,iBAAiB;IACjB,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,2CAA2C;;AAE/C;AACA;IACI,kBAAkB;IAClB,oCAAoC;IACpC,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,SAAS;;AAEb;AACA;IACI,gBAAgB;IAChB,aAAa;AACjB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,YAAY;IACZ,4BAA4B;IAC5B,yBAAyB;IACzB,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,uBAAuB;IACvB,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,yFAAyF;AAC7F;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,UAAU;AACd;AACA;IACI,8BAA8B;AAClC;AACA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,oCAAoC;IACpC,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;AACA;IACI,aAAa;AACjB;AACA;IACI,oBAAoB;AACxB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,QAAQ;AACZ;AACA;IACI,kBAAkB;IAClB,6CAA6C;AACjD;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,aAAa;IACb,kBAAkB;AACtB;AACA;IACI,6BAA6B;IAC7B,qBAAqB;IACrB,UAAU;IACV,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,qBAAqB;IACrB,qBAAqB;AACzB;AACA;IACI,oCAAoC;IACpC,6CAA6C;;AAEjD;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,cAAc;IACd,SAAS;IACT,mBAAmB;IACnB,oBAAoB;AACxB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB;AACA;IACI,eAAe;IACf,iBAAiB;IACjB,6CAA6C;IAC7C,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,gBAAgB;IAChB,mBAAmB;AACvB;AACA;IACI,uBAAuB;IACvB,cAAc;AAClB;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,oBAAoB;AACxB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,0BAA0B;IAC1B,kBAAkB;IAClB,WAAW;AACf;AACA;IACI,kCAAkC;IAClC,uBAAuB;AAC3B;AACA;IACI,kCAAkC;IAClC,uBAAuB;AAC3B;AACA;IACI,gCAAgC;IAChC,qBAAqB;AACzB;AACA;IACI,0BAA0B;IAC1B,iBAAiB;IACjB,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,gBAAgB;IAChB,gBAAgB;AACpB;AACA;IACI,WAAW;IACX,gBAAgB;IAChB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;AACvB","sourcesContent":["*{\n    box-sizing: border-box;\n    margin: 0px;\n    padding: 0px ;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    list-style: none;\n}\nbody{\n    min-height: 100svh;\n    position: relative;\n}\n.app{\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 1fr 9fr;\n    min-height: inherit;\n}\n.app > header{\n    grid-area: 1/1/1/3;\n    display: flex;\n    font-weight: bold;\n    align-items: center;\n    justify-content: start;\n    padding-left: 10px;\n    border-bottom: 2px solid rgb(241, 241, 241);\n\n}\n.app > aside{\n    grid-area: 2/1/3/2;\n    background-color: rgb(250, 250, 250);\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    gap: 10px;\n\n}\n.app > aside > *{\n    min-height: 35px;\n    padding: 10px;\n}\n.app > aside > *{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 6px;\n}\n.app > section{\n    grid-area: 2/2/3/3;\n    display: flex;\n    flex-direction: column;\n}\nbutton{\n    border: none;\n    padding: 10px 20px 10px 20px;\n    background-color: #000000;\n    cursor: pointer;\n    font-weight: 500;\n    border-radius: 6px;\n    color: white;\n}\n.add-task-popup, .add-project-popup{\n    border-radius: 6px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;\n}\n.add-task-popup ul, .add-project-popup ul{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n.add-task-popup ul li, .add-project-popup ul li{\n    display: flex;\n    gap: 10px;\n    align-items: center;\n}\n.add-task-popup ul li > label, .add-project-popup ul li > label{\n    display: flex;\n    align-items: center;\n}\n.add-task-popup ul li > :not(#is-done), .add-project-popup li > * {\n    height: 35px;\n    width: 50%;\n}\n.add-task-popup ul li:has(#is-done){\n    justify-content: space-between;\n}\ninput, select{\n    padding-left: 10px;\n    padding-right: 10px;\n    border: none;\n    background-color: rgb(241, 241, 241);\n    border-radius: 6px;\n}\nlegend{\n    text-align: center;\n    font-weight: bold;\n    font-size: 16px;\n}\n.hidden{\n    display: none;\n}\n.close{\n    align-self: flex-end;\n}\n.task-list{\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    gap: 5px;\n}\n.task-list > *{\n    border-radius: 6px;\n    box-shadow: rgba(0, 0, 0, 0.061) 0px 3px 12px;\n}\n.task-list  .todo{\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n    border-radius: 6px;\n}\nbutton.close{\n    background-color: transparent;\n    border: 2px solid red;\n    color: red;\n    border-radius: 6px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\nbutton.delete{\n    background-color: red;\n    color: rgb(129, 0, 0);\n}\n.selected-project{\n    background-color: rgb(255, 255, 255);\n    box-shadow: rgba(0, 0, 0, 0.061) 0px 3px 12px;\n\n}\n.todo{\n    background-color: white;\n}\n.todo-buttons{\n    display:  flex;\n    gap: 10px;\n    align-items: center;\n    align-items: stretch;\n}\n.projects-header, .todo-header{\n    font-weight: bold;\n}\n.todo-header{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 10px;\n}\n\naside .projects-header{\n    padding: 0px;\n}\n.add-project, .add-task{\n    font-size: 25px;\n    padding: 2px 10px;\n    box-shadow: rgba(0, 0, 0, 0.061) 0px 3px 12px;\n    background-color: white;\n    color: black;\n    display: flex;\n    align-items: center;\n    font-size: 16px;\n    padding-top: 6px;\n    padding-bottom: 6px;\n}\n.add-project:hover, .add-task:hover{\n    background-color: white;\n    color: #0095ff;\n}\n.header{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-bottom: 20px;\n}\n.add-task-popup .add, .add-project-popup .add{\n    margin-top: 20px;\n}\n.priority{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 5px 10px 5px 10px;\n    border-radius: 5px;\n    width: 80px;\n}\n.low{\n    border: 2px solid rgb(47, 255, 57);\n    color: rgb(47, 255, 57);\n}\n.medium{\n    border: 2px solid rgb(255, 196, 0);\n    color: rgb(255, 196, 0);\n}\n.heigh{\n    border: 2px solid rgb(255, 0, 0);\n    color: rgb(255, 0, 0);\n}\n.todo-title{\n    text-transform: capitalize;\n    font-weight: bold;\n    padding-left: 10px;\n    display: flex;\n    align-items: center;\n    font-style: italic;\n}\n.todo-details{\n    padding: 10px;\n    transition: 0.2s;\n    overflow: hidden;\n}\n.shown{\n    height: 0px;\n    padding-top: 0px;\n    padding-bottom: 0px;\n}\n.due-date{\n    display: flex;\n    align-items: center;\n    padding-left: 10px;\n    padding-right: 10px;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _storage_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage-manager */ "./src/storage-manager.js");



const DOMmanager = (()=>{
    const projectsList = document.querySelector('aside');
    const taskList = document.querySelector('.task-list');
    const todoHeaderProjectTitle = document.querySelector('.todo-header > p');
    let projects = [];
    let currentProjectId = null;
    const updateTasks = (project)=>{
        taskList.innerHTML = '';
        project.todos.forEach(task => {
            taskList.append(createTask(task, project))
        });
        todoHeaderProjectTitle.innerText = project.name;
    }
    const createProject = (project)=>{
        currentProjectId = project.id;
        let projectBar = createProjectBar(project);
        projects.push({projectBar: projectBar, project: project});
        updateTasks(project);
        updateSelectedClass(project.id);
        return project;
    }
    const createTask = (todo, project)=>{
        let task = document.createElement('div');
        let title = document.createElement('p');
        title.innerText = `${todo.title}`;
        title.classList.add('todo-title');
        let closeButton = document.createElement('button');
        let buttons = document.createElement('div');
        buttons.classList.add('todo-buttons');
        closeButton.innerText = 'Delete';
        closeButton.classList.add('delete');
        let editButton = document.createElement('button');
        editButton.innerText = 'Edit'
        editButton.addEventListener('click',(event)=>{
            event.stopPropagation();
            _popup_manager__WEBPACK_IMPORTED_MODULE_1__["default"].showUpdatePopup(todo.id,project.id);
        });
        let priority = document.createElement('div');
        priority.innerText = todo.priority;
        priority.classList.add('priority', todo.priority)
        let dueDate = document.createElement('div');
        dueDate.innerText = todo.dueDate;
        dueDate.classList.add('due-date')
        buttons.append(dueDate, priority,closeButton, editButton);
        let details = document.createElement('div');
        details.innerText = todo.description;
        details.classList.add('todo-details')
        task.classList.add('todo');
        details.classList.add('shown');
        task.addEventListener('click',()=>{
            details.classList.toggle('shown');
        })
        let container = document.createElement('div');
        task.append(title,buttons);
        container.append(task, details);
        closeButton.addEventListener('click',()=>{
            project.removeTodo(todo.id);
            updateTasks(project);
        })
        return container;
    }
    const createProjectBar = (project)=>{
        let bar = document.createElement('div');
        bar.classList.add('selected-project');
        let barName = document.createElement('p');
        barName.innerText = project.name;
        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.classList.add('delete');
        bar.classList.add('project');
        deleteButton.addEventListener('click',(e)=>{
            e.stopPropagation();
            deleteProject(project.id);
        })
        if(project.isPersistent){
            bar.append(barName);
        }else{
            bar.append(barName, deleteButton);
        }
        projectsList.append(bar);
        bar.addEventListener('click',()=>{
            updateTasks(project);
            updateSelectedClass(project.id);
            currentProjectId = project.id;
        })
        return bar;
    }
    const updateSelectedClass = (id)=>{
        for (let i = 0; i < projects.length; i++) {
            if(projects[i].project.id == id){
                projects[i].projectBar.classList.add('selected-project');
            }else{
                projects[i].projectBar.classList.remove('selected-project');
            }
                
        }
    }
    const deleteProject = (projectId)=>{
        let index = projects.map((e)=> e.project.id).indexOf(projectId);
        _todo_list_manager__WEBPACK_IMPORTED_MODULE_0__["default"].removeList(projectId);
        projects[index].projectBar.remove();
        projects.splice(index,1);
        currentProjectId = 0;
        updateSelectedClass(0);
        updateTasks(projects[0].project)
    }
    const addTask = (taskInput)=>{
        let index = projects.map((e)=> e.project.id).indexOf(currentProjectId);
        projects[index].project.addTodo(taskInput.title, taskInput.description, taskInput.dueDate, taskInput.priority, taskInput.isDone);
        updateTasks(projects[index].project);
    }
    const addProject = (projectInput)=>{
        let result = _todo_list_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createList(projectInput.title,projectInput.description,[],false);
        createProject(result.project);
    }
    
    const displayStoredProjects = ()=>{
        let data = _storage_manager__WEBPACK_IMPORTED_MODULE_2__["default"].loadProjects();
        for (let i = 0; i < data.length; i++) {
            let result = _todo_list_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createList(data[i].name,data[i].description,[],data[i].isPersistent);
            for (let j = 0; j < data[i].todos.length; j++) {
                let todo = data[i].todos[j];
                result.project.addTodo(todo.title,todo.description,todo.dueDate,todo.priority,todo.isDone);
            }
            createProject(result.project);
        }
    }
    displayStoredProjects();
    // creating the general project / list 
    if(!localStorage.getItem('created-genera-project')){
        let result = _todo_list_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createList('General','General list',[],true);
        result.project.addTodo('Pet the cat','Pet the cat, once only!','2029-09-27','medium',false);
        localStorage.setItem('created-genera-project',true);
        createProject(result.project);
    }
    return {addTask, addProject, updateTasks}
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
/* harmony import */ var _storage_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage-manager */ "./src/storage-manager.js");


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
        _storage_manager__WEBPACK_IMPORTED_MODULE_1__["default"].storeProjects();
    }
    removeTodo(id){
        let index = this.todos.map((e)=> e.id).indexOf(id);
        this.todos.splice(index,1);
        _storage_manager__WEBPACK_IMPORTED_MODULE_1__["default"].storeProjects();
    }
    updateTodo(id,title, description, dueDate, priority, isDone){
        let index = this.todos.map((e)=> e.id).indexOf(id);
        this.todos[index] = new _todo__WEBPACK_IMPORTED_MODULE_0__["default"](title, description, dueDate, priority, isDone);
        _storage_manager__WEBPACK_IMPORTED_MODULE_1__["default"].storeProjects();
    }
    getTodo(id){
        let index = this.todos.map((e)=> e.id).indexOf(id);
        return this.todos[index];
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
/* harmony import */ var _todo_list_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-list-manager */ "./src/todo-list-manager.js");


const popupManager = (()=>{
    const addTaskPopUp = document.querySelector('.add-task-popup');
    const addTaskPopUpTitle = document.querySelector('.add-task-popup > .header >  legend');
    const addTaskTitle = document.querySelector('#task-title');
    const addTaskDescription = document.querySelector('#task-dsc');
    const addTaskPriority = document.querySelector('#priority');
    const addTaskIsDone = document.querySelector('#is-done');
    const addTaskDueDate = document.querySelector('#task-date')
    const addTaskButton = document.querySelector('.add-task-popup .add');
    const addTask = document.querySelector('.add-task');
    const closeTaskPopUpButton = document.querySelector('.add-task-popup > .header > .close');
    
    const addProjectPopUp = document.querySelector('.add-project-popup');
    const addProjectTitle = document.querySelector('#project-title');
    const addProjectDescription = document.querySelector('#project-description');
    const addProjectButton = document.querySelector('.add-project-popup .add');
    const closeProjectPopUpButton = document.querySelector('.add-project-popup > .header > .close');

    let popupCall = ()=>{
        _DOM_manager__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(getProjectPoPupInput());
    }
    const addProject = document.querySelector('.add-project');
    addProject.addEventListener('click',(event)=>{
        addProjectPopUp.classList.remove('hidden');
        addProjectPopUp.reset();
        addProjectTitle.focus();
        addProjectTitle.select();
    })
    closeProjectPopUpButton.addEventListener('click',(event)=>{
        addProjectPopUp.classList.add('hidden');
        event.preventDefault();
    })
    const setTaskPopUp = (title, buttonText)=>{
        addTaskPopUpTitle.innerText = title;
        addTaskButton.innerText = buttonText;
        
    }
    addProjectButton.addEventListener('click',(event)=>{
        event.preventDefault();
        if(addProjectPopUp.checkValidity()){
            addProjectPopUp.classList.add('hidden');
            _DOM_manager__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(getProjectPoPupInput());
        }else{
            addProjectPopUp.reportValidity();
        }
    })
    closeTaskPopUpButton.addEventListener('click',(event)=>{
        addTaskPopUp.classList.add('hidden');
        event.preventDefault();
    })
    addTask.addEventListener('click',(event)=>{
        addTaskPopUp.classList.remove('hidden');
        addTaskPopUp.reset();
        addTaskTitle.focus();
        addTaskTitle.select();
        setTaskPopUp('Add new task', 'Add');
        popupCall = ()=>{
            _DOM_manager__WEBPACK_IMPORTED_MODULE_0__["default"].addTask(getTaskPopUpInput());
        }

    })
    addTaskButton.addEventListener('click',(event)=>{
        event.preventDefault();
        if(addTaskPopUp.checkValidity()){
            addTaskPopUp.classList.add('hidden');
            popupCall();
            
        }else{
            addTaskPopUp.reportValidity();
        }
    })
    const showUpdatePopup = (taskId, projectId)=>{
        setTaskPopUp('Update todo', 'Update');
        addTaskPopUp.classList.remove('hidden');
        addTaskPopUp.reset();
        let todo  = _todo_list_manager__WEBPACK_IMPORTED_MODULE_1__["default"].getList(projectId).getTodo(taskId);
        addTaskTitle.value = todo.title;
        addTaskDescription.value = todo.description;
        addTaskDueDate.value = todo.dueDate;
        addTaskPriority.value = todo.priority;
        addTaskIsDone.checked = todo.isDone;
        popupCall = ()=>{
            let input = getTaskPopUpInput();
            _todo_list_manager__WEBPACK_IMPORTED_MODULE_1__["default"].getList(projectId).updateTodo(taskId, input.title, input.description, input.dueDate, input.priority, input.isDone)
            _DOM_manager__WEBPACK_IMPORTED_MODULE_0__["default"].updateTasks(_todo_list_manager__WEBPACK_IMPORTED_MODULE_1__["default"].getList(projectId));
        }
    }
    const getTaskPopUpInput = ()=>{
        return {
            title: addTaskTitle.value,
            description: addTaskDescription.value,
            dueDate: addTaskDueDate.value,
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
    return {showUpdatePopup}
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupManager);

/***/ }),

/***/ "./src/storage-manager.js":
/*!********************************!*\
  !*** ./src/storage-manager.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo_list_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-list-manager */ "./src/todo-list-manager.js");

const storageManager = (()=>{

    const storeProjects = ()=>{
        localStorage.setItem('projects',JSON.stringify(_todo_list_manager__WEBPACK_IMPORTED_MODULE_0__["default"].getCurrentLists()))
    }
    const loadProjects = ()=>{
        let data = JSON.parse(localStorage.getItem('projects'));
        if(data){
            return JSON.parse(localStorage.getItem('projects'));
        } else{
            return [];
        }
    }
    loadProjects();
    return {storeProjects, loadProjects}
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storageManager);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZ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QUFZO0FBQ1osQ0FBQztBQUNELGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7OztBQzFHZTtBQUMxQzs7QUFFQTtBQUNBLHVEQUF1RCwwREFBTztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRCxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7QUNqQkg7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDZDQUFJO0FBQzNCO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNELGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7O0FDdkJ0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUksRUFBQzs7Ozs7OztVQ1ZwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBb0I7QUFDc0I7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BvcHVwLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0b3JhZ2UtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby1saXN0LW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4IDtcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbmJvZHl7XG4gICAgbWluLWhlaWdodDogMTAwc3ZoO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hcHB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOWZyO1xuICAgIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XG59XG4uYXBwID4gaGVhZGVye1xuICAgIGdyaWQtYXJlYTogMS8xLzEvMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigyNDEsIDI0MSwgMjQxKTtcblxufVxuLmFwcCA+IGFzaWRle1xuICAgIGdyaWQtYXJlYTogMi8xLzMvMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAyNTAsIDI1MCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZ2FwOiAxMHB4O1xuXG59XG4uYXBwID4gYXNpZGUgPiAqe1xuICAgIG1pbi1oZWlnaHQ6IDM1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbi5hcHAgPiBhc2lkZSA+ICp7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4uYXBwID4gc2VjdGlvbntcbiAgICBncmlkLWFyZWE6IDIvMi8zLzM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuYnV0dG9ue1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5hZGQtdGFzay1wb3B1cCwgLmFkZC1wcm9qZWN0LXBvcHVwe1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDIwcHggMjVweCAtNXB4LCByZ2JhKDAsIDAsIDAsIDAuMDQpIDBweCAxMHB4IDEwcHggLTVweDtcbn1cbi5hZGQtdGFzay1wb3B1cCB1bCwgLmFkZC1wcm9qZWN0LXBvcHVwIHVse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG59XG4uYWRkLXRhc2stcG9wdXAgdWwgbGksIC5hZGQtcHJvamVjdC1wb3B1cCB1bCBsaXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFkZC10YXNrLXBvcHVwIHVsIGxpID4gbGFiZWwsIC5hZGQtcHJvamVjdC1wb3B1cCB1bCBsaSA+IGxhYmVse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hZGQtdGFzay1wb3B1cCB1bCBsaSA+IDpub3QoI2lzLWRvbmUpLCAuYWRkLXByb2plY3QtcG9wdXAgbGkgPiAqIHtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDUwJTtcbn1cbi5hZGQtdGFzay1wb3B1cCB1bCBsaTpoYXMoI2lzLWRvbmUpe1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbmlucHV0LCBzZWxlY3R7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDI0MSwgMjQxKTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5sZWdlbmR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5oaWRkZW57XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5jbG9zZXtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cbi50YXNrLWxpc3R7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZ2FwOiA1cHg7XG59XG4udGFzay1saXN0ID4gKntcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA2MSkgMHB4IDNweCAxMnB4O1xufVxuLnRhc2stbGlzdCAgLnRvZG97XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5idXR0b24uY2xvc2V7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuICAgIGNvbG9yOiByZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmJ1dHRvbi5kZWxldGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGNvbG9yOiByZ2IoMTI5LCAwLCAwKTtcbn1cbi5zZWxlY3RlZC1wcm9qZWN0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDYxKSAwcHggM3B4IDEycHg7XG5cbn1cbi50b2Rve1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnRvZG8tYnV0dG9uc3tcbiAgICBkaXNwbGF5OiAgZmxleDtcbiAgICBnYXA6IDEwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cbi5wcm9qZWN0cy1oZWFkZXIsIC50b2RvLWhlYWRlcntcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi50b2RvLWhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbmFzaWRlIC5wcm9qZWN0cy1oZWFkZXJ7XG4gICAgcGFkZGluZzogMHB4O1xufVxuLmFkZC1wcm9qZWN0LCAuYWRkLXRhc2t7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHBhZGRpbmc6IDJweCAxMHB4O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNjEpIDBweCAzcHggMTJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XG59XG4uYWRkLXByb2plY3Q6aG92ZXIsIC5hZGQtdGFzazpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogIzAwOTVmZjtcbn1cbi5oZWFkZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi5hZGQtdGFzay1wb3B1cCAuYWRkLCAuYWRkLXByb2plY3QtcG9wdXAgLmFkZHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnByaW9yaXR5e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDgwcHg7XG59XG4ubG93e1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig0NywgMjU1LCA1Nyk7XG4gICAgY29sb3I6IHJnYig0NywgMjU1LCA1Nyk7XG59XG4ubWVkaXVte1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNTUsIDE5NiwgMCk7XG4gICAgY29sb3I6IHJnYigyNTUsIDE5NiwgMCk7XG59XG4uaGVpZ2h7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgMCwgMCk7XG4gICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xufVxuLnRvZG8tdGl0bGV7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4udG9kby1kZXRhaWxze1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnNob3due1xuICAgIGhlaWdodDogMHB4O1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbi5kdWUtZGF0ZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUpBQW1KO0lBQ25KLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQiwyQ0FBMkM7O0FBRS9DO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFNBQVM7O0FBRWI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lB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QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweCA7XFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYm9keXtcXG4gICAgbWluLWhlaWdodDogMTAwc3ZoO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5hcHB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgOWZyO1xcbiAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xcbn1cXG4uYXBwID4gaGVhZGVye1xcbiAgICBncmlkLWFyZWE6IDEvMS8xLzM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMjQxLCAyNDEsIDI0MSk7XFxuXFxufVxcbi5hcHAgPiBhc2lkZXtcXG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAyNTAsIDI1MCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGdhcDogMTBweDtcXG5cXG59XFxuLmFwcCA+IGFzaWRlID4gKntcXG4gICAgbWluLWhlaWdodDogMzVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuLmFwcCA+IGFzaWRlID4gKntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcbi5hcHAgPiBzZWN0aW9ue1xcbiAgICBncmlkLWFyZWE6IDIvMi8zLzM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbmJ1dHRvbntcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uYWRkLXRhc2stcG9wdXAsIC5hZGQtcHJvamVjdC1wb3B1cHtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDIwcHggMjVweCAtNXB4LCByZ2JhKDAsIDAsIDAsIDAuMDQpIDBweCAxMHB4IDEwcHggLTVweDtcXG59XFxuLmFkZC10YXNrLXBvcHVwIHVsLCAuYWRkLXByb2plY3QtcG9wdXAgdWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuLmFkZC10YXNrLXBvcHVwIHVsIGxpLCAuYWRkLXByb2plY3QtcG9wdXAgdWwgbGl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmFkZC10YXNrLXBvcHVwIHVsIGxpID4gbGFiZWwsIC5hZGQtcHJvamVjdC1wb3B1cCB1bCBsaSA+IGxhYmVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYWRkLXRhc2stcG9wdXAgdWwgbGkgPiA6bm90KCNpcy1kb25lKSwgLmFkZC1wcm9qZWN0LXBvcHVwIGxpID4gKiB7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuLmFkZC10YXNrLXBvcHVwIHVsIGxpOmhhcygjaXMtZG9uZSl7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuaW5wdXQsIHNlbGVjdHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDI0MSwgMjQxKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5sZWdlbmR7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLmhpZGRlbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLmNsb3Nle1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuLnRhc2stbGlzdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcbi50YXNrLWxpc3QgPiAqe1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNjEpIDBweCAzcHggMTJweDtcXG59XFxuLnRhc2stbGlzdCAgLnRvZG97XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5idXR0b24uY2xvc2V7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmJ1dHRvbi5kZWxldGV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgY29sb3I6IHJnYigxMjksIDAsIDApO1xcbn1cXG4uc2VsZWN0ZWQtcHJvamVjdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDYxKSAwcHggM3B4IDEycHg7XFxuXFxufVxcbi50b2Rve1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLnRvZG8tYnV0dG9uc3tcXG4gICAgZGlzcGxheTogIGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcbi5wcm9qZWN0cy1oZWFkZXIsIC50b2RvLWhlYWRlcntcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi50b2RvLWhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5hc2lkZSAucHJvamVjdHMtaGVhZGVye1xcbiAgICBwYWRkaW5nOiAwcHg7XFxufVxcbi5hZGQtcHJvamVjdCwgLmFkZC10YXNre1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIHBhZGRpbmc6IDJweCAxMHB4O1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDYxKSAwcHggM3B4IDEycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgcGFkZGluZy10b3A6IDZweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDZweDtcXG59XFxuLmFkZC1wcm9qZWN0OmhvdmVyLCAuYWRkLXRhc2s6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogIzAwOTVmZjtcXG59XFxuLmhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuLmFkZC10YXNrLXBvcHVwIC5hZGQsIC5hZGQtcHJvamVjdC1wb3B1cCAuYWRke1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG4ucHJpb3JpdHl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogODBweDtcXG59XFxuLmxvd3tcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDQ3LCAyNTUsIDU3KTtcXG4gICAgY29sb3I6IHJnYig0NywgMjU1LCA1Nyk7XFxufVxcbi5tZWRpdW17XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNTUsIDE5NiwgMCk7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAxOTYsIDApO1xcbn1cXG4uaGVpZ2h7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNTUsIDAsIDApO1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxufVxcbi50b2RvLXRpdGxle1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG4udG9kby1kZXRhaWxze1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uc2hvd257XFxuICAgIGhlaWdodDogMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xcbn1cXG4uZHVlLWRhdGV7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBtYW5hZ2VyIGZyb20gXCIuL3RvZG8tbGlzdC1tYW5hZ2VyXCI7XG5pbXBvcnQgcG9wdXBNYW5hZ2VyIGZyb20gXCIuL3BvcHVwLW1hbmFnZXJcIjtcbmltcG9ydCBzdG9yYWdlTWFuYWdlciBmcm9tIFwiLi9zdG9yYWdlLW1hbmFnZXJcIjtcbmNvbnN0IERPTW1hbmFnZXIgPSAoKCk9PntcbiAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhc2lkZScpO1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbGlzdCcpO1xuICAgIGNvbnN0IHRvZG9IZWFkZXJQcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1oZWFkZXIgPiBwJyk7XG4gICAgbGV0IHByb2plY3RzID0gW107XG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0SWQgPSBudWxsO1xuICAgIGNvbnN0IHVwZGF0ZVRhc2tzID0gKHByb2plY3QpPT57XG4gICAgICAgIHRhc2tMaXN0LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBwcm9qZWN0LnRvZG9zLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICB0YXNrTGlzdC5hcHBlbmQoY3JlYXRlVGFzayh0YXNrLCBwcm9qZWN0KSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRvZG9IZWFkZXJQcm9qZWN0VGl0bGUuaW5uZXJUZXh0ID0gcHJvamVjdC5uYW1lO1xuICAgIH1cbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKHByb2plY3QpPT57XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0SWQgPSBwcm9qZWN0LmlkO1xuICAgICAgICBsZXQgcHJvamVjdEJhciA9IGNyZWF0ZVByb2plY3RCYXIocHJvamVjdCk7XG4gICAgICAgIHByb2plY3RzLnB1c2goe3Byb2plY3RCYXI6IHByb2plY3RCYXIsIHByb2plY3Q6IHByb2plY3R9KTtcbiAgICAgICAgdXBkYXRlVGFza3MocHJvamVjdCk7XG4gICAgICAgIHVwZGF0ZVNlbGVjdGVkQ2xhc3MocHJvamVjdC5pZCk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgIH1cbiAgICBjb25zdCBjcmVhdGVUYXNrID0gKHRvZG8sIHByb2plY3QpPT57XG4gICAgICAgIGxldCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gYCR7dG9kby50aXRsZX1gO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RvLXRpdGxlJyk7XG4gICAgICAgIGxldCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBsZXQgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidXR0b25zLmNsYXNzTGlzdC5hZGQoJ3RvZG8tYnV0dG9ucycpO1xuICAgICAgICBjbG9zZUJ1dHRvbi5pbm5lclRleHQgPSAnRGVsZXRlJztcbiAgICAgICAgY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG4gICAgICAgIGxldCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGVkaXRCdXR0b24uaW5uZXJUZXh0ID0gJ0VkaXQnXG4gICAgICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChldmVudCk9PntcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgcG9wdXBNYW5hZ2VyLnNob3dVcGRhdGVQb3B1cCh0b2RvLmlkLHByb2plY3QuaWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByaW9yaXR5LmlubmVyVGV4dCA9IHRvZG8ucHJpb3JpdHk7XG4gICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5JywgdG9kby5wcmlvcml0eSlcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZHVlRGF0ZS5pbm5lclRleHQgPSB0b2RvLmR1ZURhdGU7XG4gICAgICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZCgnZHVlLWRhdGUnKVxuICAgICAgICBidXR0b25zLmFwcGVuZChkdWVEYXRlLCBwcmlvcml0eSxjbG9zZUJ1dHRvbiwgZWRpdEJ1dHRvbik7XG4gICAgICAgIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRldGFpbHMuaW5uZXJUZXh0ID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICAgICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKCd0b2RvLWRldGFpbHMnKVxuICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcbiAgICAgICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKCdzaG93bicpO1xuICAgICAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgZGV0YWlscy5jbGFzc0xpc3QudG9nZ2xlKCdzaG93bicpO1xuICAgICAgICB9KVxuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2suYXBwZW5kKHRpdGxlLGJ1dHRvbnMpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKHRhc2ssIGRldGFpbHMpO1xuICAgICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgIHByb2plY3QucmVtb3ZlVG9kbyh0b2RvLmlkKTtcbiAgICAgICAgICAgIHVwZGF0ZVRhc2tzKHByb2plY3QpO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0QmFyID0gKHByb2plY3QpPT57XG4gICAgICAgIGxldCBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYmFyLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLXByb2plY3QnKTtcbiAgICAgICAgbGV0IGJhck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGJhck5hbWUuaW5uZXJUZXh0ID0gcHJvamVjdC5uYW1lO1xuICAgICAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5pbm5lclRleHQgPSAnRGVsZXRlJztcbiAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpO1xuICAgICAgICBiYXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3QocHJvamVjdC5pZCk7XG4gICAgICAgIH0pXG4gICAgICAgIGlmKHByb2plY3QuaXNQZXJzaXN0ZW50KXtcbiAgICAgICAgICAgIGJhci5hcHBlbmQoYmFyTmFtZSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgYmFyLmFwcGVuZChiYXJOYW1lLCBkZWxldGVCdXR0b24pO1xuICAgICAgICB9XG4gICAgICAgIHByb2plY3RzTGlzdC5hcHBlbmQoYmFyKTtcbiAgICAgICAgYmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgdXBkYXRlVGFza3MocHJvamVjdCk7XG4gICAgICAgICAgICB1cGRhdGVTZWxlY3RlZENsYXNzKHByb2plY3QuaWQpO1xuICAgICAgICAgICAgY3VycmVudFByb2plY3RJZCA9IHByb2plY3QuaWQ7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBiYXI7XG4gICAgfVxuICAgIGNvbnN0IHVwZGF0ZVNlbGVjdGVkQ2xhc3MgPSAoaWQpPT57XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKHByb2plY3RzW2ldLnByb2plY3QuaWQgPT0gaWQpe1xuICAgICAgICAgICAgICAgIHByb2plY3RzW2ldLnByb2plY3RCYXIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtcHJvamVjdCcpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcHJvamVjdHNbaV0ucHJvamVjdEJhci5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC1wcm9qZWN0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0SWQpPT57XG4gICAgICAgIGxldCBpbmRleCA9IHByb2plY3RzLm1hcCgoZSk9PiBlLnByb2plY3QuaWQpLmluZGV4T2YocHJvamVjdElkKTtcbiAgICAgICAgbWFuYWdlci5yZW1vdmVMaXN0KHByb2plY3RJZCk7XG4gICAgICAgIHByb2plY3RzW2luZGV4XS5wcm9qZWN0QmFyLnJlbW92ZSgpO1xuICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsMSk7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0SWQgPSAwO1xuICAgICAgICB1cGRhdGVTZWxlY3RlZENsYXNzKDApO1xuICAgICAgICB1cGRhdGVUYXNrcyhwcm9qZWN0c1swXS5wcm9qZWN0KVxuICAgIH1cbiAgICBjb25zdCBhZGRUYXNrID0gKHRhc2tJbnB1dCk9PntcbiAgICAgICAgbGV0IGluZGV4ID0gcHJvamVjdHMubWFwKChlKT0+IGUucHJvamVjdC5pZCkuaW5kZXhPZihjdXJyZW50UHJvamVjdElkKTtcbiAgICAgICAgcHJvamVjdHNbaW5kZXhdLnByb2plY3QuYWRkVG9kbyh0YXNrSW5wdXQudGl0bGUsIHRhc2tJbnB1dC5kZXNjcmlwdGlvbiwgdGFza0lucHV0LmR1ZURhdGUsIHRhc2tJbnB1dC5wcmlvcml0eSwgdGFza0lucHV0LmlzRG9uZSk7XG4gICAgICAgIHVwZGF0ZVRhc2tzKHByb2plY3RzW2luZGV4XS5wcm9qZWN0KTtcbiAgICB9XG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0SW5wdXQpPT57XG4gICAgICAgIGxldCByZXN1bHQgPSBtYW5hZ2VyLmNyZWF0ZUxpc3QocHJvamVjdElucHV0LnRpdGxlLHByb2plY3RJbnB1dC5kZXNjcmlwdGlvbixbXSxmYWxzZSk7XG4gICAgICAgIGNyZWF0ZVByb2plY3QocmVzdWx0LnByb2plY3QpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBkaXNwbGF5U3RvcmVkUHJvamVjdHMgPSAoKT0+e1xuICAgICAgICBsZXQgZGF0YSA9IHN0b3JhZ2VNYW5hZ2VyLmxvYWRQcm9qZWN0cygpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBtYW5hZ2VyLmNyZWF0ZUxpc3QoZGF0YVtpXS5uYW1lLGRhdGFbaV0uZGVzY3JpcHRpb24sW10sZGF0YVtpXS5pc1BlcnNpc3RlbnQpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkYXRhW2ldLnRvZG9zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRvZG8gPSBkYXRhW2ldLnRvZG9zW2pdO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wcm9qZWN0LmFkZFRvZG8odG9kby50aXRsZSx0b2RvLmRlc2NyaXB0aW9uLHRvZG8uZHVlRGF0ZSx0b2RvLnByaW9yaXR5LHRvZG8uaXNEb25lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3QocmVzdWx0LnByb2plY3QpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRpc3BsYXlTdG9yZWRQcm9qZWN0cygpO1xuICAgIC8vIGNyZWF0aW5nIHRoZSBnZW5lcmFsIHByb2plY3QgLyBsaXN0IFxuICAgIGlmKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3JlYXRlZC1nZW5lcmEtcHJvamVjdCcpKXtcbiAgICAgICAgbGV0IHJlc3VsdCA9IG1hbmFnZXIuY3JlYXRlTGlzdCgnR2VuZXJhbCcsJ0dlbmVyYWwgbGlzdCcsW10sdHJ1ZSk7XG4gICAgICAgIHJlc3VsdC5wcm9qZWN0LmFkZFRvZG8oJ1BldCB0aGUgY2F0JywnUGV0IHRoZSBjYXQsIG9uY2Ugb25seSEnLCcyMDI5LTA5LTI3JywnbWVkaXVtJyxmYWxzZSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjcmVhdGVkLWdlbmVyYS1wcm9qZWN0Jyx0cnVlKTtcbiAgICAgICAgY3JlYXRlUHJvamVjdChyZXN1bHQucHJvamVjdCk7XG4gICAgfVxuICAgIHJldHVybiB7YWRkVGFzaywgYWRkUHJvamVjdCwgdXBkYXRlVGFza3N9XG59KSgpO1xuZXhwb3J0IGRlZmF1bHQgRE9NbWFuYWdlcjsiLCJpbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCI7XG5pbXBvcnQgc3RvcmFnZU1hbmFnZXIgZnJvbSBcIi4vc3RvcmFnZS1tYW5hZ2VyXCI7XG5jbGFzcyBMaXN0e1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCB0b2RvcywgaXNQZXJzaXN0ZW50KXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnRvZG9zID0gdG9kb3M7XG4gICAgICAgIHRoaXMuaXNQZXJzaXN0ZW50ID0gaXNQZXJzaXN0ZW50O1xuICAgICAgICB0aGlzLmlkID0gbnVsbDtcbiAgICB9XG4gICAgYWRkVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0RvbmUpe1xuICAgICAgICBsZXQgdG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzRG9uZSk7XG4gICAgICAgIHRvZG8uaWQgPSB0aGlzLnRvZG9zLmxlbmd0aDtcbiAgICAgICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pO1xuICAgICAgICBzdG9yYWdlTWFuYWdlci5zdG9yZVByb2plY3RzKCk7XG4gICAgfVxuICAgIHJlbW92ZVRvZG8oaWQpe1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnRvZG9zLm1hcCgoZSk9PiBlLmlkKS5pbmRleE9mKGlkKTtcbiAgICAgICAgdGhpcy50b2Rvcy5zcGxpY2UoaW5kZXgsMSk7XG4gICAgICAgIHN0b3JhZ2VNYW5hZ2VyLnN0b3JlUHJvamVjdHMoKTtcbiAgICB9XG4gICAgdXBkYXRlVG9kbyhpZCx0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0RvbmUpe1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnRvZG9zLm1hcCgoZSk9PiBlLmlkKS5pbmRleE9mKGlkKTtcbiAgICAgICAgdGhpcy50b2Rvc1tpbmRleF0gPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0RvbmUpO1xuICAgICAgICBzdG9yYWdlTWFuYWdlci5zdG9yZVByb2plY3RzKCk7XG4gICAgfVxuICAgIGdldFRvZG8oaWQpe1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnRvZG9zLm1hcCgoZSk9PiBlLmlkKS5pbmRleE9mKGlkKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb3NbaW5kZXhdO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IExpc3Q7IiwiaW1wb3J0IERPTW1hbmFnZXIgZnJvbSBcIi4vRE9NLW1hbmFnZXJcIjtcbmltcG9ydCBtYW5hZ2VyIGZyb20gXCIuL3RvZG8tbGlzdC1tYW5hZ2VyXCI7XG5jb25zdCBwb3B1cE1hbmFnZXIgPSAoKCk9PntcbiAgICBjb25zdCBhZGRUYXNrUG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stcG9wdXAnKTtcbiAgICBjb25zdCBhZGRUYXNrUG9wVXBUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1wb3B1cCA+IC5oZWFkZXIgPiAgbGVnZW5kJyk7XG4gICAgY29uc3QgYWRkVGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stdGl0bGUnKTtcbiAgICBjb25zdCBhZGRUYXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kc2MnKTtcbiAgICBjb25zdCBhZGRUYXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKTtcbiAgICBjb25zdCBhZGRUYXNrSXNEb25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lzLWRvbmUnKTtcbiAgICBjb25zdCBhZGRUYXNrRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRhdGUnKVxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stcG9wdXAgLmFkZCcpO1xuICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2snKTtcbiAgICBjb25zdCBjbG9zZVRhc2tQb3BVcEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1wb3B1cCA+IC5oZWFkZXIgPiAuY2xvc2UnKTtcbiAgICBcbiAgICBjb25zdCBhZGRQcm9qZWN0UG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtcG9wdXAnKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC10aXRsZScpO1xuICAgIGNvbnN0IGFkZFByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWRlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1wb3B1cCAuYWRkJyk7XG4gICAgY29uc3QgY2xvc2VQcm9qZWN0UG9wVXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtcG9wdXAgPiAuaGVhZGVyID4gLmNsb3NlJyk7XG5cbiAgICBsZXQgcG9wdXBDYWxsID0gKCk9PntcbiAgICAgICAgRE9NbWFuYWdlci5hZGRQcm9qZWN0KGdldFByb2plY3RQb1B1cElucHV0KCkpO1xuICAgIH1cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0Jyk7XG4gICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGV2ZW50KT0+e1xuICAgICAgICBhZGRQcm9qZWN0UG9wVXAuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIGFkZFByb2plY3RQb3BVcC5yZXNldCgpO1xuICAgICAgICBhZGRQcm9qZWN0VGl0bGUuZm9jdXMoKTtcbiAgICAgICAgYWRkUHJvamVjdFRpdGxlLnNlbGVjdCgpO1xuICAgIH0pXG4gICAgY2xvc2VQcm9qZWN0UG9wVXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChldmVudCk9PntcbiAgICAgICAgYWRkUHJvamVjdFBvcFVwLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pXG4gICAgY29uc3Qgc2V0VGFza1BvcFVwID0gKHRpdGxlLCBidXR0b25UZXh0KT0+e1xuICAgICAgICBhZGRUYXNrUG9wVXBUaXRsZS5pbm5lclRleHQgPSB0aXRsZTtcbiAgICAgICAgYWRkVGFza0J1dHRvbi5pbm5lclRleHQgPSBidXR0b25UZXh0O1xuICAgICAgICBcbiAgICB9XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGV2ZW50KT0+e1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZihhZGRQcm9qZWN0UG9wVXAuY2hlY2tWYWxpZGl0eSgpKXtcbiAgICAgICAgICAgIGFkZFByb2plY3RQb3BVcC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIERPTW1hbmFnZXIuYWRkUHJvamVjdChnZXRQcm9qZWN0UG9QdXBJbnB1dCgpKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBhZGRQcm9qZWN0UG9wVXAucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgY2xvc2VUYXNrUG9wVXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChldmVudCk9PntcbiAgICAgICAgYWRkVGFza1BvcFVwLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pXG4gICAgYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGV2ZW50KT0+e1xuICAgICAgICBhZGRUYXNrUG9wVXAuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIGFkZFRhc2tQb3BVcC5yZXNldCgpO1xuICAgICAgICBhZGRUYXNrVGl0bGUuZm9jdXMoKTtcbiAgICAgICAgYWRkVGFza1RpdGxlLnNlbGVjdCgpO1xuICAgICAgICBzZXRUYXNrUG9wVXAoJ0FkZCBuZXcgdGFzaycsICdBZGQnKTtcbiAgICAgICAgcG9wdXBDYWxsID0gKCk9PntcbiAgICAgICAgICAgIERPTW1hbmFnZXIuYWRkVGFzayhnZXRUYXNrUG9wVXBJbnB1dCgpKTtcbiAgICAgICAgfVxuXG4gICAgfSlcbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZXZlbnQpPT57XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmKGFkZFRhc2tQb3BVcC5jaGVja1ZhbGlkaXR5KCkpe1xuICAgICAgICAgICAgYWRkVGFza1BvcFVwLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgcG9wdXBDYWxsKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBhZGRUYXNrUG9wVXAucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgY29uc3Qgc2hvd1VwZGF0ZVBvcHVwID0gKHRhc2tJZCwgcHJvamVjdElkKT0+e1xuICAgICAgICBzZXRUYXNrUG9wVXAoJ1VwZGF0ZSB0b2RvJywgJ1VwZGF0ZScpO1xuICAgICAgICBhZGRUYXNrUG9wVXAuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIGFkZFRhc2tQb3BVcC5yZXNldCgpO1xuICAgICAgICBsZXQgdG9kbyAgPSBtYW5hZ2VyLmdldExpc3QocHJvamVjdElkKS5nZXRUb2RvKHRhc2tJZCk7XG4gICAgICAgIGFkZFRhc2tUaXRsZS52YWx1ZSA9IHRvZG8udGl0bGU7XG4gICAgICAgIGFkZFRhc2tEZXNjcmlwdGlvbi52YWx1ZSA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgICAgIGFkZFRhc2tEdWVEYXRlLnZhbHVlID0gdG9kby5kdWVEYXRlO1xuICAgICAgICBhZGRUYXNrUHJpb3JpdHkudmFsdWUgPSB0b2RvLnByaW9yaXR5O1xuICAgICAgICBhZGRUYXNrSXNEb25lLmNoZWNrZWQgPSB0b2RvLmlzRG9uZTtcbiAgICAgICAgcG9wdXBDYWxsID0gKCk9PntcbiAgICAgICAgICAgIGxldCBpbnB1dCA9IGdldFRhc2tQb3BVcElucHV0KCk7XG4gICAgICAgICAgICBtYW5hZ2VyLmdldExpc3QocHJvamVjdElkKS51cGRhdGVUb2RvKHRhc2tJZCwgaW5wdXQudGl0bGUsIGlucHV0LmRlc2NyaXB0aW9uLCBpbnB1dC5kdWVEYXRlLCBpbnB1dC5wcmlvcml0eSwgaW5wdXQuaXNEb25lKVxuICAgICAgICAgICAgRE9NbWFuYWdlci51cGRhdGVUYXNrcyhtYW5hZ2VyLmdldExpc3QocHJvamVjdElkKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZ2V0VGFza1BvcFVwSW5wdXQgPSAoKT0+e1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGU6IGFkZFRhc2tUaXRsZS52YWx1ZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBhZGRUYXNrRGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgICAgICBkdWVEYXRlOiBhZGRUYXNrRHVlRGF0ZS52YWx1ZSxcbiAgICAgICAgICAgIHByaW9yaXR5OiBhZGRUYXNrUHJpb3JpdHkudmFsdWUsXG4gICAgICAgICAgICBpc0RvbmU6IGFkZFRhc2tJc0RvbmUuY2hlY2tlZCxcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBnZXRQcm9qZWN0UG9QdXBJbnB1dCA9ICgpPT57XG4gICAgICAgIHJldHVybntcbiAgICAgICAgICAgIHRpdGxlOiBhZGRQcm9qZWN0VGl0bGUudmFsdWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYWRkUHJvamVjdERlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7c2hvd1VwZGF0ZVBvcHVwfVxufSkoKTtcbmV4cG9ydCBkZWZhdWx0IHBvcHVwTWFuYWdlcjsiLCJpbXBvcnQgbWFuYWdlciBmcm9tIFwiLi90b2RvLWxpc3QtbWFuYWdlclwiO1xuY29uc3Qgc3RvcmFnZU1hbmFnZXIgPSAoKCk9PntcblxuICAgIGNvbnN0IHN0b3JlUHJvamVjdHMgPSAoKT0+e1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLEpTT04uc3RyaW5naWZ5KG1hbmFnZXIuZ2V0Q3VycmVudExpc3RzKCkpKVxuICAgIH1cbiAgICBjb25zdCBsb2FkUHJvamVjdHMgPSAoKT0+e1xuICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xuICAgICAgICBpZihkYXRhKXtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxvYWRQcm9qZWN0cygpO1xuICAgIHJldHVybiB7c3RvcmVQcm9qZWN0cywgbG9hZFByb2plY3RzfVxufSkoKTtcbmV4cG9ydCBkZWZhdWx0IHN0b3JhZ2VNYW5hZ2VyOyIsImltcG9ydCBMaXN0IGZyb20gXCIuL2xpc3RcIjtcbmNvbnN0IG1hbmFnZXIgPSAoKCk9PntcbiAgICBsZXQgbGlzdHMgPSBbXTtcbiAgICBjb25zdCByZW1vdmVMaXN0ID0gKGlkKT0+e1xuICAgICAgICBsZXQgaW5kZXggPSBsaXN0cy5tYXAoKGUpPT4gZS5pZCkuaW5kZXhPZihpZCk7XG4gICAgICAgIGxpc3RzLnNwbGljZShpbmRleCwxKTtcbiAgICB9IFxuICAgIGNvbnN0IGdldEN1cnJlbnRMaXN0cyA9ICgpID0+IGxpc3RzO1xuICAgIGNvbnN0IGdldExpc3RJbmRleEJ5SWQgPSAoaWQpPT57XG4gICAgICAgIHJldHVybiBsaXN0cy5tYXAoKGUpPT4gZS5pZCkuaW5kZXhPZihpZCk7XG4gICAgfSBcbiAgICBjb25zdCBnZXRMaXN0ID0gKGlkKT0+e1xuICAgICAgICBsZXQgaW5kZXggPSBnZXRMaXN0SW5kZXhCeUlkKGlkKTtcbiAgICAgICAgcmV0dXJuIGxpc3RzW2luZGV4XTtcbiAgICB9XG4gICAgY29uc3QgY3JlYXRlTGlzdCA9IChuYW1lLCBkZXNjcmlwdGlvbiwgdG9kb3MsIGlzUGVyc2lzdGVudCk9PntcbiAgICAgICAgbGV0IGxpc3QgPSBuZXcgTGlzdChuYW1lLCBkZXNjcmlwdGlvbiwgdG9kb3MsIGlzUGVyc2lzdGVudCk7XG4gICAgICAgIGxpc3QuaWQgPSBsaXN0cy5sZW5ndGg7XG4gICAgICAgIGxpc3RzLnB1c2gobGlzdCk7XG4gICAgICAgIHJldHVybiB7aWQ6IGxpc3QuaWQsIHByb2plY3Q6IGxpc3R9O1xuICAgIH1cbiAgICByZXR1cm4ge2NyZWF0ZUxpc3QsIHJlbW92ZUxpc3QsIGdldEN1cnJlbnRMaXN0cywgZ2V0TGlzdH07XG59KSgpO1xuZXhwb3J0IGRlZmF1bHQgbWFuYWdlcjsiLCJjbGFzcyBUb2RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0RvbmUpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmlzRG9uZSA9IGlzRG9uZTtcbiAgICAgICAgdGhpcy5pZCA9IG51bGw7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVG9kbztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgbWFuYWdlciBmcm9tIFwiLi90b2RvLWxpc3QtbWFuYWdlclwiO1xuaW1wb3J0IERPTW1hbmFnZXIgZnJvbSBcIi4vRE9NLW1hbmFnZXJcIjtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9