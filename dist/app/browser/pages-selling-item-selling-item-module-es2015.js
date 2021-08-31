(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-selling-item-selling-item-module"],{

/***/ "n6XZ":
/*!**************************************************!*\
  !*** ./src/app/Services/account/item-service.ts ***!
  \**************************************************/
/*! exports provided: ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ItemService {
    constructor(http) {
        this.http = http;
    }
    getItems() {
        return this.http.get('./assets/sample-data/item/items.json');
    }
    getSellerItems() {
        return this.http.get('./assets/sample-data/item/items.json');
    }
    getOneItem() {
        return this.http.get('./assets/sample-data/item/single-item.json');
    }
}
ItemService.ɵfac = function ItemService_Factory(t) { return new (t || ItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ItemService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ItemService, factory: ItemService.ɵfac });


/***/ })

}]);
//# sourceMappingURL=pages-selling-item-selling-item-module-es2015.js.map