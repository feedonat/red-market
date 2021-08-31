(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-selling-item-selling-item-module"], {
    /***/
    "n6XZ":
    /*!**************************************************!*\
      !*** ./src/app/Services/account/item-service.ts ***!
      \**************************************************/

    /*! exports provided: ItemService */

    /***/
    function n6XZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemService", function () {
        return ItemService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ItemService = /*#__PURE__*/function () {
        function ItemService(http) {
          _classCallCheck(this, ItemService);

          this.http = http;
        }

        _createClass(ItemService, [{
          key: "getItems",
          value: function getItems() {
            return this.http.get('./assets/sample-data/item/items.json');
          }
        }, {
          key: "getSellerItems",
          value: function getSellerItems() {
            return this.http.get('./assets/sample-data/item/items.json');
          }
        }, {
          key: "getOneItem",
          value: function getOneItem() {
            return this.http.get('./assets/sample-data/item/single-item.json');
          }
        }]);

        return ItemService;
      }();

      ItemService.ɵfac = function ItemService_Factory(t) {
        return new (t || ItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      ItemService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ItemService,
        factory: ItemService.ɵfac
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-selling-item-selling-item-module-es5.js.map