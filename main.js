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
    // creating the general project / list 
    let result = _todo_list_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createList('General','General list',[],true);
    result.project.addTodo('Empty trash','Empty the trash can','2023-09-27','low',false);
    createProject(result.project);

    const createFillerProject = ()=>{
        let result = _todo_list_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createList('Pets','My pets',[],false);
        result.project.addTodo('Feed puppy','Feed the puppy some food','2023-09-27','medium',false);
        result.project.addTodo('Clean cat','Clean Monchon the cat','2023-09-27','heigh',false);
        result.project.addTodo('Buy new toys','Buy some new toys for Monchon','2023-09-27','low',false);
        createProject(result.project);
    }
    createFillerProject();
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
    updateTodo(id,title, description, dueDate, priority, isDone){
        let index = this.todos.map((e)=> e.id).indexOf(id);
        this.todos[index] = new _todo__WEBPACK_IMPORTED_MODULE_0__["default"](title, description, dueDate, priority, isDone);
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
        console.log(taskId,projectId);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZ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QUk7QUFDM0I7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBLFlBQVk7O0FBRVosQ0FBQztBQUNELGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7O0FDeEJ0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUksRUFBQzs7Ozs7OztVQ1ZwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBb0I7QUFDc0I7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3BvcHVwLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8tbGlzdC1tYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweCA7XG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ib2R5e1xuICAgIG1pbi1oZWlnaHQ6IDEwMHN2aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYXBwe1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDlmcjtcbiAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xufVxuLmFwcCA+IGhlYWRlcntcbiAgICBncmlkLWFyZWE6IDEvMS8xLzM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2IoMjQxLCAyNDEsIDI0MSk7XG5cbn1cbi5hcHAgPiBhc2lkZXtcbiAgICBncmlkLWFyZWE6IDIvMS8zLzI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGdhcDogMTBweDtcblxufVxuLmFwcCA+IGFzaWRlID4gKntcbiAgICBtaW4taGVpZ2h0OiAzNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG4uYXBwID4gYXNpZGUgPiAqe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLmFwcCA+IHNlY3Rpb257XG4gICAgZ3JpZC1hcmVhOiAyLzIvMy8zO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbmJ1dHRvbntcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uYWRkLXRhc2stcG9wdXAsIC5hZGQtcHJvamVjdC1wb3B1cHtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAyMHB4IDI1cHggLTVweCwgcmdiYSgwLCAwLCAwLCAwLjA0KSAwcHggMTBweCAxMHB4IC01cHg7XG59XG4uYWRkLXRhc2stcG9wdXAgdWwsIC5hZGQtcHJvamVjdC1wb3B1cCB1bHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xufVxuLmFkZC10YXNrLXBvcHVwIHVsIGxpLCAuYWRkLXByb2plY3QtcG9wdXAgdWwgbGl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hZGQtdGFzay1wb3B1cCB1bCBsaSA+IGxhYmVsLCAuYWRkLXByb2plY3QtcG9wdXAgdWwgbGkgPiBsYWJlbHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYWRkLXRhc2stcG9wdXAgdWwgbGkgPiA6bm90KCNpcy1kb25lKSwgLmFkZC1wcm9qZWN0LXBvcHVwIGxpID4gKiB7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHdpZHRoOiA1MCU7XG59XG4uYWRkLXRhc2stcG9wdXAgdWwgbGk6aGFzKCNpcy1kb25lKXtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5pbnB1dCwgc2VsZWN0e1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyNDEsIDI0MSk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxubGVnZW5ke1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG4uaGlkZGVue1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4uY2xvc2V7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG4udGFzay1saXN0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGdhcDogNXB4O1xufVxuLnRhc2stbGlzdCA+ICp7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNjEpIDBweCAzcHggMTJweDtcbn1cbi50YXNrLWxpc3QgIC50b2Rve1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuYnV0dG9uLmNsb3Nle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbiAgICBjb2xvcjogcmVkO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5idXR0b24uZGVsZXRle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBjb2xvcjogcmdiKDEyOSwgMCwgMCk7XG59XG4uc2VsZWN0ZWQtcHJvamVjdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA2MSkgMHB4IDNweCAxMnB4O1xuXG59XG4udG9kb3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi50b2RvLWJ1dHRvbnN7XG4gICAgZGlzcGxheTogIGZsZXg7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG4ucHJvamVjdHMtaGVhZGVyLCAudG9kby1oZWFkZXJ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udG9kby1oZWFkZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG5hc2lkZSAucHJvamVjdHMtaGVhZGVye1xuICAgIHBhZGRpbmc6IDBweDtcbn1cbi5hZGQtcHJvamVjdCwgLmFkZC10YXNre1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBwYWRkaW5nOiAycHggMTBweDtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDYxKSAwcHggM3B4IDEycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgcGFkZGluZy10b3A6IDZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xufVxuLmFkZC1wcm9qZWN0OmhvdmVyLCAuYWRkLXRhc2s6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6ICMwMDk1ZmY7XG59XG4uaGVhZGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4uYWRkLXRhc2stcG9wdXAgLmFkZCwgLmFkZC1wcm9qZWN0LXBvcHVwIC5hZGR7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5wcmlvcml0eXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiA4MHB4O1xufVxuLmxvd3tcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoNDcsIDI1NSwgNTcpO1xuICAgIGNvbG9yOiByZ2IoNDcsIDI1NSwgNTcpO1xufVxuLm1lZGl1bXtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCAxOTYsIDApO1xuICAgIGNvbG9yOiByZ2IoMjU1LCAxOTYsIDApO1xufVxuLmhlaWdoe1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNTUsIDAsIDApO1xuICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcbn1cbi50b2RvLXRpdGxle1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLnRvZG8tZGV0YWlsc3tcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5zaG93bntcbiAgICBoZWlnaHQ6IDBweDtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4uZHVlLWRhdGV7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsYUFBYTtJQUNiLG1KQUFtSjtJQUNuSixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsMkNBQTJDOztBQUUvQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixTQUFTOztBQUViO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULHlGQUF5RjtBQUM3RjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7QUFDQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osVUFBVTtBQUNkO0FBQ0E7SUFDSSw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixRQUFRO0FBQ1o7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQiw2Q0FBNkM7QUFDakQ7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsNkNBQTZDOztBQUVqRDtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsU0FBUztJQUNULG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsNkNBQTZDO0lBQzdDLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHggO1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJvZHl7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHN2aDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYXBwe1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDlmcjtcXG4gICAgbWluLWhlaWdodDogaW5oZXJpdDtcXG59XFxuLmFwcCA+IGhlYWRlcntcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMS8zO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiKDI0MSwgMjQxLCAyNDEpO1xcblxcbn1cXG4uYXBwID4gYXNpZGV7XFxuICAgIGdyaWQtYXJlYTogMi8xLzMvMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBnYXA6IDEwcHg7XFxuXFxufVxcbi5hcHAgPiBhc2lkZSA+ICp7XFxuICAgIG1pbi1oZWlnaHQ6IDM1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5hcHAgPiBhc2lkZSA+ICp7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG4uYXBwID4gc2VjdGlvbntcXG4gICAgZ3JpZC1hcmVhOiAyLzIvMy8zO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5idXR0b257XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmFkZC10YXNrLXBvcHVwLCAuYWRkLXByb2plY3QtcG9wdXB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAyMHB4IDI1cHggLTVweCwgcmdiYSgwLCAwLCAwLCAwLjA0KSAwcHggMTBweCAxMHB4IC01cHg7XFxufVxcbi5hZGQtdGFzay1wb3B1cCB1bCwgLmFkZC1wcm9qZWN0LXBvcHVwIHVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcbi5hZGQtdGFzay1wb3B1cCB1bCBsaSwgLmFkZC1wcm9qZWN0LXBvcHVwIHVsIGxpe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5hZGQtdGFzay1wb3B1cCB1bCBsaSA+IGxhYmVsLCAuYWRkLXByb2plY3QtcG9wdXAgdWwgbGkgPiBsYWJlbHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmFkZC10YXNrLXBvcHVwIHVsIGxpID4gOm5vdCgjaXMtZG9uZSksIC5hZGQtcHJvamVjdC1wb3B1cCBsaSA+ICoge1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcbi5hZGQtdGFzay1wb3B1cCB1bCBsaTpoYXMoI2lzLWRvbmUpe1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbmlucHV0LCBzZWxlY3R7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyNDEsIDI0MSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxubGVnZW5ke1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5oaWRkZW57XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5jbG9zZXtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcbi50YXNrLWxpc3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGdhcDogNXB4O1xcbn1cXG4udGFzay1saXN0ID4gKntcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDYxKSAwcHggM3B4IDEycHg7XFxufVxcbi50YXNrLWxpc3QgIC50b2Rve1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuYnV0dG9uLmNsb3Nle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5idXR0b24uZGVsZXRle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGNvbG9yOiByZ2IoMTI5LCAwLCAwKTtcXG59XFxuLnNlbGVjdGVkLXByb2plY3R7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA2MSkgMHB4IDNweCAxMnB4O1xcblxcbn1cXG4udG9kb3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi50b2RvLWJ1dHRvbnN7XFxuICAgIGRpc3BsYXk6ICBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbn1cXG4ucHJvamVjdHMtaGVhZGVyLCAudG9kby1oZWFkZXJ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4udG9kby1oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuYXNpZGUgLnByb2plY3RzLWhlYWRlcntcXG4gICAgcGFkZGluZzogMHB4O1xcbn1cXG4uYWRkLXByb2plY3QsIC5hZGQtdGFza3tcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBwYWRkaW5nOiAycHggMTBweDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjA2MSkgMHB4IDNweCAxMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHBhZGRpbmctdG9wOiA2cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XFxufVxcbi5hZGQtcHJvamVjdDpob3ZlciwgLmFkZC10YXNrOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6ICMwMDk1ZmY7XFxufVxcbi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcbi5hZGQtdGFzay1wb3B1cCAuYWRkLCAuYWRkLXByb2plY3QtcG9wdXAgLmFkZHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuLnByaW9yaXR5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDgwcHg7XFxufVxcbi5sb3d7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig0NywgMjU1LCA1Nyk7XFxuICAgIGNvbG9yOiByZ2IoNDcsIDI1NSwgNTcpO1xcbn1cXG4ubWVkaXVte1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCAxOTYsIDApO1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMTk2LCAwKTtcXG59XFxuLmhlaWdoe1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCAwLCAwKTtcXG4gICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xcbn1cXG4udG9kby10aXRsZXtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuLnRvZG8tZGV0YWlsc3tcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnNob3due1xcbiAgICBoZWlnaHQ6IDBweDtcXG4gICAgcGFkZGluZy10b3A6IDBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcXG59XFxuLmR1ZS1kYXRle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgbWFuYWdlciBmcm9tIFwiLi90b2RvLWxpc3QtbWFuYWdlclwiO1xuaW1wb3J0IHBvcHVwTWFuYWdlciBmcm9tIFwiLi9wb3B1cC1tYW5hZ2VyXCI7XG5cbmNvbnN0IERPTW1hbmFnZXIgPSAoKCk9PntcbiAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhc2lkZScpO1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbGlzdCcpO1xuICAgIGNvbnN0IHRvZG9IZWFkZXJQcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1oZWFkZXIgPiBwJyk7XG4gICAgbGV0IHByb2plY3RzID0gW107XG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0SWQgPSBudWxsO1xuICAgIGNvbnN0IHVwZGF0ZVRhc2tzID0gKHByb2plY3QpPT57XG4gICAgICAgIHRhc2tMaXN0LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBwcm9qZWN0LnRvZG9zLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICB0YXNrTGlzdC5hcHBlbmQoY3JlYXRlVGFzayh0YXNrLCBwcm9qZWN0KSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRvZG9IZWFkZXJQcm9qZWN0VGl0bGUuaW5uZXJUZXh0ID0gcHJvamVjdC5uYW1lO1xuICAgIH1cbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKHByb2plY3QpPT57XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0SWQgPSBwcm9qZWN0LmlkO1xuICAgICAgICBsZXQgcHJvamVjdEJhciA9IGNyZWF0ZVByb2plY3RCYXIocHJvamVjdCk7XG4gICAgICAgIHByb2plY3RzLnB1c2goe3Byb2plY3RCYXI6IHByb2plY3RCYXIsIHByb2plY3Q6IHByb2plY3R9KTtcbiAgICAgICAgdXBkYXRlVGFza3MocHJvamVjdCk7XG4gICAgICAgIHVwZGF0ZVNlbGVjdGVkQ2xhc3MocHJvamVjdC5pZCk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgIH1cbiAgICBjb25zdCBjcmVhdGVUYXNrID0gKHRvZG8sIHByb2plY3QpPT57XG4gICAgICAgIGxldCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gYCR7dG9kby50aXRsZX1gO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RvLXRpdGxlJyk7XG4gICAgICAgIGxldCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBsZXQgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidXR0b25zLmNsYXNzTGlzdC5hZGQoJ3RvZG8tYnV0dG9ucycpO1xuICAgICAgICBjbG9zZUJ1dHRvbi5pbm5lclRleHQgPSAnRGVsZXRlJztcbiAgICAgICAgY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG4gICAgICAgIGxldCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGVkaXRCdXR0b24uaW5uZXJUZXh0ID0gJ0VkaXQnXG4gICAgICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChldmVudCk9PntcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgcG9wdXBNYW5hZ2VyLnNob3dVcGRhdGVQb3B1cCh0b2RvLmlkLHByb2plY3QuaWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByaW9yaXR5LmlubmVyVGV4dCA9IHRvZG8ucHJpb3JpdHk7XG4gICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5JywgdG9kby5wcmlvcml0eSlcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZHVlRGF0ZS5pbm5lclRleHQgPSB0b2RvLmR1ZURhdGU7XG4gICAgICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZCgnZHVlLWRhdGUnKVxuICAgICAgICBidXR0b25zLmFwcGVuZChkdWVEYXRlLCBwcmlvcml0eSxjbG9zZUJ1dHRvbiwgZWRpdEJ1dHRvbik7XG4gICAgICAgIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRldGFpbHMuaW5uZXJUZXh0ID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICAgICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKCd0b2RvLWRldGFpbHMnKVxuICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcbiAgICAgICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKCdzaG93bicpO1xuICAgICAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgZGV0YWlscy5jbGFzc0xpc3QudG9nZ2xlKCdzaG93bicpO1xuICAgICAgICB9KVxuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2suYXBwZW5kKHRpdGxlLGJ1dHRvbnMpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKHRhc2ssIGRldGFpbHMpO1xuICAgICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgIHByb2plY3QucmVtb3ZlVG9kbyh0b2RvLmlkKTtcbiAgICAgICAgICAgIHVwZGF0ZVRhc2tzKHByb2plY3QpO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0QmFyID0gKHByb2plY3QpPT57XG4gICAgICAgIGxldCBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYmFyLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLXByb2plY3QnKTtcbiAgICAgICAgbGV0IGJhck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGJhck5hbWUuaW5uZXJUZXh0ID0gcHJvamVjdC5uYW1lO1xuICAgICAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5pbm5lclRleHQgPSAnRGVsZXRlJztcbiAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpO1xuICAgICAgICBiYXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3QocHJvamVjdC5pZCk7XG4gICAgICAgIH0pXG4gICAgICAgIGlmKHByb2plY3QuaXNQZXJzaXN0ZW50KXtcbiAgICAgICAgICAgIGJhci5hcHBlbmQoYmFyTmFtZSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgYmFyLmFwcGVuZChiYXJOYW1lLCBkZWxldGVCdXR0b24pO1xuICAgICAgICB9XG4gICAgICAgIHByb2plY3RzTGlzdC5hcHBlbmQoYmFyKTtcbiAgICAgICAgYmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgdXBkYXRlVGFza3MocHJvamVjdCk7XG4gICAgICAgICAgICB1cGRhdGVTZWxlY3RlZENsYXNzKHByb2plY3QuaWQpO1xuICAgICAgICAgICAgY3VycmVudFByb2plY3RJZCA9IHByb2plY3QuaWQ7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBiYXI7XG4gICAgfVxuICAgIGNvbnN0IHVwZGF0ZVNlbGVjdGVkQ2xhc3MgPSAoaWQpPT57XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKHByb2plY3RzW2ldLnByb2plY3QuaWQgPT0gaWQpe1xuICAgICAgICAgICAgICAgIHByb2plY3RzW2ldLnByb2plY3RCYXIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtcHJvamVjdCcpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcHJvamVjdHNbaV0ucHJvamVjdEJhci5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC1wcm9qZWN0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0SWQpPT57XG4gICAgICAgIGxldCBpbmRleCA9IHByb2plY3RzLm1hcCgoZSk9PiBlLnByb2plY3QuaWQpLmluZGV4T2YocHJvamVjdElkKTtcbiAgICAgICAgbWFuYWdlci5yZW1vdmVMaXN0KHByb2plY3RJZCk7XG4gICAgICAgIHByb2plY3RzW2luZGV4XS5wcm9qZWN0QmFyLnJlbW92ZSgpO1xuICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsMSk7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0SWQgPSAwO1xuICAgICAgICB1cGRhdGVTZWxlY3RlZENsYXNzKDApO1xuICAgICAgICB1cGRhdGVUYXNrcyhwcm9qZWN0c1swXS5wcm9qZWN0KVxuICAgIH1cbiAgICBjb25zdCBhZGRUYXNrID0gKHRhc2tJbnB1dCk9PntcbiAgICAgICAgbGV0IGluZGV4ID0gcHJvamVjdHMubWFwKChlKT0+IGUucHJvamVjdC5pZCkuaW5kZXhPZihjdXJyZW50UHJvamVjdElkKTtcbiAgICAgICAgcHJvamVjdHNbaW5kZXhdLnByb2plY3QuYWRkVG9kbyh0YXNrSW5wdXQudGl0bGUsIHRhc2tJbnB1dC5kZXNjcmlwdGlvbiwgdGFza0lucHV0LmR1ZURhdGUsIHRhc2tJbnB1dC5wcmlvcml0eSwgdGFza0lucHV0LmlzRG9uZSk7XG4gICAgICAgIHVwZGF0ZVRhc2tzKHByb2plY3RzW2luZGV4XS5wcm9qZWN0KTtcbiAgICB9XG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0SW5wdXQpPT57XG4gICAgICAgIGxldCByZXN1bHQgPSBtYW5hZ2VyLmNyZWF0ZUxpc3QocHJvamVjdElucHV0LnRpdGxlLHByb2plY3RJbnB1dC5kZXNjcmlwdGlvbixbXSxmYWxzZSk7XG4gICAgICAgIGNyZWF0ZVByb2plY3QocmVzdWx0LnByb2plY3QpO1xuICAgIH1cbiAgICAvLyBjcmVhdGluZyB0aGUgZ2VuZXJhbCBwcm9qZWN0IC8gbGlzdCBcbiAgICBsZXQgcmVzdWx0ID0gbWFuYWdlci5jcmVhdGVMaXN0KCdHZW5lcmFsJywnR2VuZXJhbCBsaXN0JyxbXSx0cnVlKTtcbiAgICByZXN1bHQucHJvamVjdC5hZGRUb2RvKCdFbXB0eSB0cmFzaCcsJ0VtcHR5IHRoZSB0cmFzaCBjYW4nLCcyMDIzLTA5LTI3JywnbG93JyxmYWxzZSk7XG4gICAgY3JlYXRlUHJvamVjdChyZXN1bHQucHJvamVjdCk7XG5cbiAgICBjb25zdCBjcmVhdGVGaWxsZXJQcm9qZWN0ID0gKCk9PntcbiAgICAgICAgbGV0IHJlc3VsdCA9IG1hbmFnZXIuY3JlYXRlTGlzdCgnUGV0cycsJ015IHBldHMnLFtdLGZhbHNlKTtcbiAgICAgICAgcmVzdWx0LnByb2plY3QuYWRkVG9kbygnRmVlZCBwdXBweScsJ0ZlZWQgdGhlIHB1cHB5IHNvbWUgZm9vZCcsJzIwMjMtMDktMjcnLCdtZWRpdW0nLGZhbHNlKTtcbiAgICAgICAgcmVzdWx0LnByb2plY3QuYWRkVG9kbygnQ2xlYW4gY2F0JywnQ2xlYW4gTW9uY2hvbiB0aGUgY2F0JywnMjAyMy0wOS0yNycsJ2hlaWdoJyxmYWxzZSk7XG4gICAgICAgIHJlc3VsdC5wcm9qZWN0LmFkZFRvZG8oJ0J1eSBuZXcgdG95cycsJ0J1eSBzb21lIG5ldyB0b3lzIGZvciBNb25jaG9uJywnMjAyMy0wOS0yNycsJ2xvdycsZmFsc2UpO1xuICAgICAgICBjcmVhdGVQcm9qZWN0KHJlc3VsdC5wcm9qZWN0KTtcbiAgICB9XG4gICAgY3JlYXRlRmlsbGVyUHJvamVjdCgpO1xuICAgIHJldHVybiB7YWRkVGFzaywgYWRkUHJvamVjdCwgdXBkYXRlVGFza3N9XG59KSgpO1xuZXhwb3J0IGRlZmF1bHQgRE9NbWFuYWdlcjsiLCJpbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCI7XG5jbGFzcyBMaXN0e1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCB0b2RvcywgaXNQZXJzaXN0ZW50KXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnRvZG9zID0gdG9kb3M7XG4gICAgICAgIHRoaXMuaXNQZXJzaXN0ZW50ID0gaXNQZXJzaXN0ZW50O1xuICAgICAgICB0aGlzLmlkID0gbnVsbDtcbiAgICB9XG4gICAgYWRkVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0RvbmUpe1xuICAgICAgICBsZXQgdG9kbyA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzRG9uZSk7XG4gICAgICAgIHRvZG8uaWQgPSB0aGlzLnRvZG9zLmxlbmd0aDtcbiAgICAgICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pO1xuICAgIH1cbiAgICByZW1vdmVUb2RvKGlkKXtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy50b2Rvcy5tYXAoKGUpPT4gZS5pZCkuaW5kZXhPZihpZCk7XG4gICAgICAgIHRoaXMudG9kb3Muc3BsaWNlKGluZGV4LDEpO1xuICAgIH1cbiAgICB1cGRhdGVUb2RvKGlkLHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzRG9uZSl7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMudG9kb3MubWFwKChlKT0+IGUuaWQpLmluZGV4T2YoaWQpO1xuICAgICAgICB0aGlzLnRvZG9zW2luZGV4XSA9IG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzRG9uZSk7XG4gICAgfVxuICAgIGdldFRvZG8oaWQpe1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnRvZG9zLm1hcCgoZSk9PiBlLmlkKS5pbmRleE9mKGlkKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb3NbaW5kZXhdO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IExpc3Q7IiwiaW1wb3J0IERPTW1hbmFnZXIgZnJvbSBcIi4vRE9NLW1hbmFnZXJcIjtcbmltcG9ydCBtYW5hZ2VyIGZyb20gXCIuL3RvZG8tbGlzdC1tYW5hZ2VyXCI7XG5jb25zdCBwb3B1cE1hbmFnZXIgPSAoKCk9PntcbiAgICBjb25zdCBhZGRUYXNrUG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stcG9wdXAnKTtcbiAgICBjb25zdCBhZGRUYXNrUG9wVXBUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1wb3B1cCA+IC5oZWFkZXIgPiAgbGVnZW5kJyk7XG4gICAgY29uc3QgYWRkVGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stdGl0bGUnKTtcbiAgICBjb25zdCBhZGRUYXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kc2MnKTtcbiAgICBjb25zdCBhZGRUYXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKTtcbiAgICBjb25zdCBhZGRUYXNrSXNEb25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lzLWRvbmUnKTtcbiAgICBjb25zdCBhZGRUYXNrRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRhdGUnKVxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stcG9wdXAgLmFkZCcpO1xuICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2snKTtcbiAgICBjb25zdCBjbG9zZVRhc2tQb3BVcEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1wb3B1cCA+IC5oZWFkZXIgPiAuY2xvc2UnKTtcbiAgICBcbiAgICBjb25zdCBhZGRQcm9qZWN0UG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtcG9wdXAnKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC10aXRsZScpO1xuICAgIGNvbnN0IGFkZFByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWRlc2NyaXB0aW9uJyk7XG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1wb3B1cCAuYWRkJyk7XG4gICAgY29uc3QgY2xvc2VQcm9qZWN0UG9wVXBCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtcG9wdXAgPiAuaGVhZGVyID4gLmNsb3NlJyk7XG5cbiAgICBsZXQgcG9wdXBDYWxsID0gKCk9PntcbiAgICAgICAgRE9NbWFuYWdlci5hZGRQcm9qZWN0KGdldFByb2plY3RQb1B1cElucHV0KCkpO1xuICAgIH1cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0Jyk7XG4gICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGV2ZW50KT0+e1xuICAgICAgICBhZGRQcm9qZWN0UG9wVXAuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIGFkZFByb2plY3RQb3BVcC5yZXNldCgpO1xuICAgICAgICBhZGRQcm9qZWN0VGl0bGUuZm9jdXMoKTtcbiAgICAgICAgYWRkUHJvamVjdFRpdGxlLnNlbGVjdCgpO1xuICAgIH0pXG4gICAgY2xvc2VQcm9qZWN0UG9wVXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChldmVudCk9PntcbiAgICAgICAgYWRkUHJvamVjdFBvcFVwLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pXG4gICAgY29uc3Qgc2V0VGFza1BvcFVwID0gKHRpdGxlLCBidXR0b25UZXh0KT0+e1xuICAgICAgICBhZGRUYXNrUG9wVXBUaXRsZS5pbm5lclRleHQgPSB0aXRsZTtcbiAgICAgICAgYWRkVGFza0J1dHRvbi5pbm5lclRleHQgPSBidXR0b25UZXh0O1xuICAgICAgICBcbiAgICB9XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGV2ZW50KT0+e1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZihhZGRQcm9qZWN0UG9wVXAuY2hlY2tWYWxpZGl0eSgpKXtcbiAgICAgICAgICAgIGFkZFByb2plY3RQb3BVcC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIERPTW1hbmFnZXIuYWRkUHJvamVjdChnZXRQcm9qZWN0UG9QdXBJbnB1dCgpKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBhZGRQcm9qZWN0UG9wVXAucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgY2xvc2VUYXNrUG9wVXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChldmVudCk9PntcbiAgICAgICAgYWRkVGFza1BvcFVwLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pXG4gICAgYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGV2ZW50KT0+e1xuICAgICAgICBhZGRUYXNrUG9wVXAuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIGFkZFRhc2tQb3BVcC5yZXNldCgpO1xuICAgICAgICBhZGRUYXNrVGl0bGUuZm9jdXMoKTtcbiAgICAgICAgYWRkVGFza1RpdGxlLnNlbGVjdCgpO1xuICAgICAgICBzZXRUYXNrUG9wVXAoJ0FkZCBuZXcgdGFzaycsICdBZGQnKTtcbiAgICAgICAgcG9wdXBDYWxsID0gKCk9PntcbiAgICAgICAgICAgIERPTW1hbmFnZXIuYWRkVGFzayhnZXRUYXNrUG9wVXBJbnB1dCgpKTtcbiAgICAgICAgfVxuXG4gICAgfSlcbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZXZlbnQpPT57XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmKGFkZFRhc2tQb3BVcC5jaGVja1ZhbGlkaXR5KCkpe1xuICAgICAgICAgICAgYWRkVGFza1BvcFVwLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgcG9wdXBDYWxsKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBhZGRUYXNrUG9wVXAucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgY29uc3Qgc2hvd1VwZGF0ZVBvcHVwID0gKHRhc2tJZCwgcHJvamVjdElkKT0+e1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrSWQscHJvamVjdElkKTtcbiAgICAgICAgc2V0VGFza1BvcFVwKCdVcGRhdGUgdG9kbycsICdVcGRhdGUnKTtcbiAgICAgICAgYWRkVGFza1BvcFVwLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICBhZGRUYXNrUG9wVXAucmVzZXQoKTtcbiAgICAgICAgbGV0IHRvZG8gID0gbWFuYWdlci5nZXRMaXN0KHByb2plY3RJZCkuZ2V0VG9kbyh0YXNrSWQpO1xuICAgICAgICBhZGRUYXNrVGl0bGUudmFsdWUgPSB0b2RvLnRpdGxlO1xuICAgICAgICBhZGRUYXNrRGVzY3JpcHRpb24udmFsdWUgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgICAgICBhZGRUYXNrRHVlRGF0ZS52YWx1ZSA9IHRvZG8uZHVlRGF0ZTtcbiAgICAgICAgYWRkVGFza1ByaW9yaXR5LnZhbHVlID0gdG9kby5wcmlvcml0eTtcbiAgICAgICAgYWRkVGFza0lzRG9uZS5jaGVja2VkID0gdG9kby5pc0RvbmU7XG4gICAgICAgIHBvcHVwQ2FsbCA9ICgpPT57XG4gICAgICAgICAgICBsZXQgaW5wdXQgPSBnZXRUYXNrUG9wVXBJbnB1dCgpO1xuICAgICAgICAgICAgbWFuYWdlci5nZXRMaXN0KHByb2plY3RJZCkudXBkYXRlVG9kbyh0YXNrSWQsIGlucHV0LnRpdGxlLCBpbnB1dC5kZXNjcmlwdGlvbiwgaW5wdXQuZHVlRGF0ZSwgaW5wdXQucHJpb3JpdHksIGlucHV0LmlzRG9uZSlcbiAgICAgICAgICAgIERPTW1hbmFnZXIudXBkYXRlVGFza3MobWFuYWdlci5nZXRMaXN0KHByb2plY3RJZCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGdldFRhc2tQb3BVcElucHV0ID0gKCk9PntcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpdGxlOiBhZGRUYXNrVGl0bGUudmFsdWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYWRkVGFza0Rlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICAgICAgZHVlRGF0ZTogYWRkVGFza0R1ZURhdGUudmFsdWUsXG4gICAgICAgICAgICBwcmlvcml0eTogYWRkVGFza1ByaW9yaXR5LnZhbHVlLFxuICAgICAgICAgICAgaXNEb25lOiBhZGRUYXNrSXNEb25lLmNoZWNrZWQsXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZ2V0UHJvamVjdFBvUHVwSW5wdXQgPSAoKT0+e1xuICAgICAgICByZXR1cm57XG4gICAgICAgICAgICB0aXRsZTogYWRkUHJvamVjdFRpdGxlLnZhbHVlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGFkZFByb2plY3REZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge3Nob3dVcGRhdGVQb3B1cH1cbn0pKCk7XG5leHBvcnQgZGVmYXVsdCBwb3B1cE1hbmFnZXI7IiwiaW1wb3J0IExpc3QgZnJvbSBcIi4vbGlzdFwiO1xuY29uc3QgbWFuYWdlciA9ICgoKT0+e1xuICAgIGxldCBsaXN0cyA9IFtdO1xuICAgIGNvbnN0IHJlbW92ZUxpc3QgPSAoaWQpPT57XG4gICAgICAgIGxldCBpbmRleCA9IGxpc3RzLm1hcCgoZSk9PiBlLmlkKS5pbmRleE9mKGlkKTtcbiAgICAgICAgbGlzdHMuc3BsaWNlKGluZGV4LDEpO1xuICAgIH0gXG4gICAgY29uc3QgZ2V0Q3VycmVudExpc3RzID0gKCkgPT4gbGlzdHM7XG4gICAgY29uc3QgZ2V0TGlzdEluZGV4QnlJZCA9IChpZCk9PntcbiAgICAgICAgcmV0dXJuIGxpc3RzLm1hcCgoZSk9PiBlLmlkKS5pbmRleE9mKGlkKTtcbiAgICB9IFxuICAgIGNvbnN0IGdldExpc3QgPSAoaWQpPT57XG4gICAgICAgIGxldCBpbmRleCA9IGdldExpc3RJbmRleEJ5SWQoaWQpO1xuICAgICAgICByZXR1cm4gbGlzdHNbaW5kZXhdO1xuICAgIH1cbiAgICBjb25zdCBjcmVhdGVMaXN0ID0gKG5hbWUsIGRlc2NyaXB0aW9uLCB0b2RvcywgaXNQZXJzaXN0ZW50KT0+e1xuICAgICAgICBsZXQgbGlzdCA9IG5ldyBMaXN0KG5hbWUsIGRlc2NyaXB0aW9uLCB0b2RvcywgaXNQZXJzaXN0ZW50KTtcbiAgICAgICAgbGlzdC5pZCA9IGxpc3RzLmxlbmd0aDtcbiAgICAgICAgbGlzdHMucHVzaChsaXN0KTtcbiAgICAgICAgcmV0dXJuIHtpZDogbGlzdC5pZCwgcHJvamVjdDogbGlzdH07XG4gICAgfVxuICAgIHJldHVybiB7Y3JlYXRlTGlzdCwgcmVtb3ZlTGlzdCwgZ2V0Q3VycmVudExpc3RzLCBnZXRMaXN0fTtcblxufSkoKTtcbmV4cG9ydCBkZWZhdWx0IG1hbmFnZXI7IiwiY2xhc3MgVG9kbyB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaXNEb25lKXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5pc0RvbmUgPSBpc0RvbmU7XG4gICAgICAgIHRoaXMuaWQgPSBudWxsO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IG1hbmFnZXIgZnJvbSBcIi4vdG9kby1saXN0LW1hbmFnZXJcIjtcbmltcG9ydCBET01tYW5hZ2VyIGZyb20gXCIuL0RPTS1tYW5hZ2VyXCI7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==