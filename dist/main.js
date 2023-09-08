/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
        return list.id;
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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo_list_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-list-manager */ "./src/todo-list-manager.js");

let listId = _todo_list_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createList('MyList','My nice big list',[],false);
console.log(_todo_list_manager__WEBPACK_IMPORTED_MODULE_0__["default"].getList(listId));
_todo_list_manager__WEBPACK_IMPORTED_MODULE_0__["default"].getList(listId).addTodo('Feed Dog', 'Feed dog some food', 'dueDate', 'medium', false);
_todo_list_manager__WEBPACK_IMPORTED_MODULE_0__["default"].getList(listId).addTodo('Feed Dog #2', 'Feed dog some food', 'dueDate', 'medium', false);
console.log(_todo_list_manager__WEBPACK_IMPORTED_MODULE_0__["default"].getList(listId));
_todo_list_manager__WEBPACK_IMPORTED_MODULE_0__["default"].getList(listId).removeTodo(1);
console.log(_todo_list_manager__WEBPACK_IMPORTED_MODULE_0__["default"].getList(listId));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDZDQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7QUNuQk87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDZDQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTs7QUFFWixDQUFDO0FBQ0QsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7QUN4QnRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7O1VDVnBCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOMEM7QUFDMUMsYUFBYSwwREFBTztBQUNwQixZQUFZLDBEQUFPO0FBQ25CLDBEQUFPO0FBQ1AsMERBQU87QUFDUCxZQUFZLDBEQUFPO0FBQ25CLDBEQUFPO0FBQ1AsWUFBWSwwREFBTyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9saXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLWxpc3QtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kb1wiO1xuY2xhc3MgTGlzdHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgdG9kb3MsIGlzUGVyc2lzdGVudCl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy50b2RvcyA9IHRvZG9zO1xuICAgICAgICB0aGlzLmlzUGVyc2lzdGVudCA9IGlzUGVyc2lzdGVudDtcbiAgICAgICAgdGhpcy5pZCA9IG51bGw7XG4gICAgfVxuICAgIGFkZFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaXNEb25lKXtcbiAgICAgICAgbGV0IHRvZG8gPSBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0RvbmUpO1xuICAgICAgICB0b2RvLmlkID0gdGhpcy50b2Rvcy5sZW5ndGg7XG4gICAgICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcbiAgICB9XG4gICAgcmVtb3ZlVG9kbyhpZCl7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMudG9kb3MubWFwKChlKT0+IGUuaWQpLmluZGV4T2YoaWQpO1xuICAgICAgICB0aGlzLnRvZG9zLnNwbGljZShpbmRleCwxKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBMaXN0OyIsImltcG9ydCBMaXN0IGZyb20gXCIuL2xpc3RcIjtcbmNvbnN0IG1hbmFnZXIgPSAoKCk9PntcbiAgICBsZXQgbGlzdHMgPSBbXTtcbiAgICBjb25zdCByZW1vdmVMaXN0ID0gKGlkKT0+e1xuICAgICAgICBsZXQgaW5kZXggPSBsaXN0cy5tYXAoKGUpPT4gZS5pZCkuaW5kZXhPZihpZCk7XG4gICAgICAgIGxpc3RzLnNwbGljZShpbmRleCwxKTtcbiAgICB9IFxuICAgIGNvbnN0IGdldEN1cnJlbnRMaXN0cyA9ICgpID0+IGxpc3RzO1xuICAgIGNvbnN0IGdldExpc3RJbmRleEJ5SWQgPSAoaWQpPT57XG4gICAgICAgIHJldHVybiBsaXN0cy5tYXAoKGUpPT4gZS5pZCkuaW5kZXhPZihpZCk7XG4gICAgfSBcbiAgICBjb25zdCBnZXRMaXN0ID0gKGlkKT0+e1xuICAgICAgICBsZXQgaW5kZXggPSBnZXRMaXN0SW5kZXhCeUlkKGlkKTtcbiAgICAgICAgcmV0dXJuIGxpc3RzW2luZGV4XTtcbiAgICB9XG4gICAgY29uc3QgY3JlYXRlTGlzdCA9IChuYW1lLCBkZXNjcmlwdGlvbiwgdG9kb3MsIGlzUGVyc2lzdGVudCk9PntcbiAgICAgICAgbGV0IGxpc3QgPSBuZXcgTGlzdChuYW1lLCBkZXNjcmlwdGlvbiwgdG9kb3MsIGlzUGVyc2lzdGVudCk7XG4gICAgICAgIGxpc3QuaWQgPSBsaXN0cy5sZW5ndGg7XG4gICAgICAgIGxpc3RzLnB1c2gobGlzdCk7XG4gICAgICAgIHJldHVybiBsaXN0LmlkO1xuICAgIH1cbiAgICByZXR1cm4ge2NyZWF0ZUxpc3QsIHJlbW92ZUxpc3QsIGdldEN1cnJlbnRMaXN0cywgZ2V0TGlzdH07XG5cbn0pKCk7XG5leHBvcnQgZGVmYXVsdCBtYW5hZ2VyOyIsImNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzRG9uZSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuaXNEb25lID0gaXNEb25lO1xuICAgICAgICB0aGlzLmlkID0gbnVsbDtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBUb2RvO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbWFuYWdlciBmcm9tIFwiLi90b2RvLWxpc3QtbWFuYWdlclwiO1xubGV0IGxpc3RJZCA9IG1hbmFnZXIuY3JlYXRlTGlzdCgnTXlMaXN0JywnTXkgbmljZSBiaWcgbGlzdCcsW10sZmFsc2UpO1xuY29uc29sZS5sb2cobWFuYWdlci5nZXRMaXN0KGxpc3RJZCkpO1xubWFuYWdlci5nZXRMaXN0KGxpc3RJZCkuYWRkVG9kbygnRmVlZCBEb2cnLCAnRmVlZCBkb2cgc29tZSBmb29kJywgJ2R1ZURhdGUnLCAnbWVkaXVtJywgZmFsc2UpO1xubWFuYWdlci5nZXRMaXN0KGxpc3RJZCkuYWRkVG9kbygnRmVlZCBEb2cgIzInLCAnRmVlZCBkb2cgc29tZSBmb29kJywgJ2R1ZURhdGUnLCAnbWVkaXVtJywgZmFsc2UpO1xuY29uc29sZS5sb2cobWFuYWdlci5nZXRMaXN0KGxpc3RJZCkpO1xubWFuYWdlci5nZXRMaXN0KGxpc3RJZCkucmVtb3ZlVG9kbygxKTtcbmNvbnNvbGUubG9nKG1hbmFnZXIuZ2V0TGlzdChsaXN0SWQpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==