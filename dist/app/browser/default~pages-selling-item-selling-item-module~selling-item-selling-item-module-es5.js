(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-selling-item-selling-item-module~selling-item-selling-item-module"], {
    /***/
    "0Fnc":
    /*!*********************************************************!*\
      !*** ./src/app/pages/selling-item/selling-item.page.ts ***!
      \*********************************************************/

    /*! exports provided: SellingItemPage */

    /***/
    function Fnc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellingItemPage", function () {
        return SellingItemPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _Services_account_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../Services/account/item-service */
      "n6XZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shell/aspect-ratio/aspect-ratio.component */
      "B7gC");
      /* harmony import */


      var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shell/image-shell/image-shell.component */
      "2gss");
      /* harmony import */


      var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../shell/text-shell/text-shell.component */
      "zK/y");

      var _c0 = function _c0() {
        return {
          w: 1,
          h: 1
        };
      };

      function SellingItemPage_ion_item_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-item", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-row", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-col", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "app-aspect-ratio", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-image-shell", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-col", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h3", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "app-text-shell", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "h5", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "app-text-shell", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var msg_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", msg_r1.image)("alt", "item image");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", msg_r1 == null ? null : msg_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", msg_r1 == null ? null : msg_r1.price);
        }
      }

      var _c1 = function _c1() {
        return ["/public-profile"];
      };

      var _c2 = function _c2() {
        return ["item"];
      };

      var SellingItemPage = /*#__PURE__*/function () {
        function SellingItemPage(itemService, router, actionSheetController) {
          _classCallCheck(this, SellingItemPage);

          this.itemService = itemService;
          this.router = router;
          this.actionSheetController = actionSheetController;
        }

        _createClass(SellingItemPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.itemService.getItems().subscribe(function (data) {
              console.log(JSON.stringify(data));
              _this.msgs = data;
            });
          }
        }, {
          key: "presentActionSheet",
          value: function presentActionSheet() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var actionSheet, _yield$actionSheet$on, role;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.actionSheetController.create({
                        header: 'Albums',
                        cssClass: 'my-custom-class',
                        buttons: [{
                          text: 'Delete',
                          role: 'destructive',
                          icon: 'trash',
                          handler: function handler() {
                            console.log('Delete clicked');
                          }
                        }, {
                          text: 'Share',
                          icon: 'share',
                          handler: function handler() {
                            console.log('Share clicked');
                          }
                        }, {
                          text: 'Play (open modal)',
                          icon: 'caret-forward-circle',
                          handler: function handler() {
                            console.log('Play clicked');
                          }
                        }, {
                          text: 'Favorite',
                          icon: 'heart',
                          handler: function handler() {
                            console.log('Favorite clicked');
                          }
                        }, {
                          text: 'Cancel',
                          icon: 'close',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context.sent;
                      _context.next = 5;
                      return actionSheet.present();

                    case 5:
                      _context.next = 7;
                      return actionSheet.onDidDismiss();

                    case 7:
                      _yield$actionSheet$on = _context.sent;
                      role = _yield$actionSheet$on.role;
                      console.log('onDidDismiss resolved with role', role);

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return SellingItemPage;
      }();

      SellingItemPage.ɵfac = function SellingItemPage_Factory(t) {
        return new (t || SellingItemPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_Services_account_item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]));
      };

      SellingItemPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: SellingItemPage,
        selectors: [["app-selling-item"]],
        decls: 32,
        vars: 5,
        consts: [[1, "ion-no-border"], ["slot", "start"], ["defaultHref", "/redmarket/selling"], ["lines", "none", "button", "", "detail", "", "ion-activatable", "", "ripple-parent", "", 1, "item-header", 3, "routerLink"], ["src", "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"], [1, "item-profile"], [1, "sale-action"], [1, "btn-row"], ["size", "5"], ["color", "primary", "expand", "block"], ["size", "2"], ["fill", "clear", 3, "click"], ["slot", "icon-only", "name", "ellipsis-vertical-outline", "color", "primary"], [1, "messages"], [1, "firebase-listing-content"], ["lines", "full", 1, "items-list", 3, "routerLink"], ["class", "list-item", "button", "", "mode", "ios", 4, "ngFor", "ngForOf"], ["button", "", "mode", "ios", 1, "list-item"], [1, "user-row"], ["size", "3", 1, "user-image-wrapper"], [3, "ratio"], ["animation", "spinner", 1, "user-image", 3, "src", "alt"], [1, "user-data-wrapper"], [1, "user-info"], [1, "user-name"], ["animation", "bouncing", 3, "data"], [1, "user-age"]],
        template: function SellingItemPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-back-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Item Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-item", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Item Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "$20");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "20 Views");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ion-row", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ion-col", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "ion-button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Mark as sold");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "ion-col", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "ion-button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Sell fasterr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "ion-col", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "ion-button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SellingItemPage_Template_ion_button_click_24_listener() {
              return ctx.presentActionSheet();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "ion-icon", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Messages");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "ion-content", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "ion-list", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, SellingItemPage_ion_item_31_Template, 11, 6, "ion-item", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.msgs);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_6__["AspectRatioComponent"], _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_7__["ImageShellComponent"], _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_8__["TextShellComponent"]],
        styles: [".item-profile[_ngcontent-%COMP%] {\n  line-height: 1.7px;\n}\n.item-profile[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n  text-overflow: ellipsis;\n}\n.item-profile[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 0.2;\n}\nion-title[_ngcontent-%COMP%] {\n  font-weight: bolder !important;\n  font-size: 20px !important;\n}\n.item-header[_ngcontent-%COMP%] {\n  --min-height: 120px;\n  max-height: 250px !important;\n}\n.item-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 5px;\n  height: 100px;\n  width: 90px;\n  max-width: 100px;\n  max-height: 120px;\n  border-radius: 25px !important;\n  margin-right: 12px;\n}\n.item-header[_ngcontent-%COMP%]   .input-wraper[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 5px;\n}\n.item-header[_ngcontent-%COMP%]   .input-wraper[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%] {\n  height: 70px;\n  width: 100px;\n  padding: 10px;\n}\n.btn-row[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n.messages[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  color: var(--ion-text-color);\n}\n.sale-action[_ngcontent-%COMP%] {\n  background: var(--ion-color-step-100);\n}\n.items-list[_ngcontent-%COMP%] {\n  margin-bottom: 80px;\n}\n.items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%] {\n  --padding-start: var(--page-margin);\n  --padding-end: 0px;\n  --inner-padding-start: 0px;\n  --inner-padding-end: var(--page-margin);\n  --inner-padding-top: calc(var(--page-margin) / 2);\n  --inner-padding-bottom: calc(var(--page-margin) / 2);\n}\n.items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  width: 100%;\n}\n.items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%]   .user-image-wrapper[_ngcontent-%COMP%] {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n  border-radius: 20px;\n}\n.items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%] {\n  border-radius: 16px;\n}\n.items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%] {\n  -webkit-padding-start: calc(var(--page-margin) / 2);\n          padding-inline-start: calc(var(--page-margin) / 2);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n.items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-bottom: calc(var(--page-margin) / 4);\n  font-size: 16px;\n}\n.items-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   .user-row[_ngcontent-%COMP%]   .user-data-wrapper[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-age[_ngcontent-%COMP%] {\n  margin: 0px;\n  color: rgba(var(--ion-color-dark-rgb), 0.4);\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlbGxpbmctaXRlbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFJRSxrQkFBQTtBQUZGO0FBR0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQURKO0FBR0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQURKO0FBSUE7RUFDRSw4QkFBQTtFQUNBLDBCQUFBO0FBREY7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsNEJBQUE7QUFBRjtBQUVFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUVFO0VBQ0UsYUFBQTtFQUNBLFFBQUE7QUFBSjtBQUNJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ047QUFHQTtFQUNFLGlCQUFBO0FBQUY7QUFHRTtFQUNFLGlCQUFBO0VBQ0EsNEJBQUE7QUFBSjtBQUdBO0VBQ0UscUNBQUE7QUFBRjtBQUVBO0VBQ0UsbUJBQUE7QUFDRjtBQUFFO0VBQ0UsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUNBQUE7RUFDQSxpREFBQTtFQUNBLG9EQUFBO0FBRUo7QUFBSTtFQUNFLDhCQUFBO0VBQ0EsV0FBQTtBQUVOO0FBQU07RUFDRSxpREFBQTtVQUFBLGdEQUFBO0VBQ0EsbUJBQUE7QUFFUjtBQUFNO0VBQ0UsbUJBQUE7QUFFUjtBQUNNO0VBQ0UsbURBQUE7VUFBQSxrREFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBQ1I7QUFFVTtFQUNFLDJDQUFBO0FBQVo7QUFHVTtFQUNFLFdBQUE7RUFDQSwyQ0FBQTtFQUNBLGVBQUE7QUFEWjtBQUlVO0VBQ0UsV0FBQTtFQUNBLDJDQUFBO0VBQ0EsZUFBQTtBQUZaIiwiZmlsZSI6InNlbGxpbmctaXRlbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1wcm9maWxlIHtcbiAgLy8gZGlzcGxheTogZmxleDtcbiAgLy8gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLy8gZ2FwOiAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjdweDtcbiAgaDUge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG4gIGg0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMC4yO1xuICB9XG59XG5pb24tdGl0bGV7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXIgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG4uaXRlbS1oZWFkZXIge1xuICAtLW1pbi1oZWlnaHQ6IDEyMHB4O1xuICBtYXgtaGVpZ2h0OiAyNTBweCAhaW1wb3J0YW50O1xuXG4gIGltZyB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAxMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICB9XG4gIC5pbnB1dC13cmFwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA1cHg7XG4gICAgLnVzZXItaW1hZ2Utd3JhcHBlciB7XG4gICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgfVxufVxuLmJ0bi1yb3cge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi5tZXNzYWdlcyB7XG4gIGgzIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICB9XG59XG4uc2FsZS1hY3Rpb257XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTEwMCk7XG59XG4uaXRlbXMtbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gIC5saXN0LWl0ZW0ge1xuICAgIC0tcGFkZGluZy1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgLS1pbm5lci1wYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXG4gICAgLnVzZXItcm93IHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAudXNlci1pbWFnZS13cmFwcGVyIHtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgfVxuICAgICAgLnVzZXItaW1hZ2Uge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICAudXNlci1kYXRhLXdyYXBwZXIge1xuICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgLnVzZXItaW5mbyB7XG4gICAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnVzZXItbmFtZSB7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnVzZXItYWdlIHtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC40KTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "4NZG":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/selling-item/selling-item-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: SellingItemPageRoutingModule */

    /***/
    function NZG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellingItemPageRoutingModule", function () {
        return SellingItemPageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _selling_item_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./selling-item.page */
      "0Fnc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _selling_item_page__WEBPACK_IMPORTED_MODULE_1__["SellingItemPage"]
      }];

      var SellingItemPageRoutingModule = function SellingItemPageRoutingModule() {
        _classCallCheck(this, SellingItemPageRoutingModule);
      };

      SellingItemPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: SellingItemPageRoutingModule
      });
      SellingItemPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function SellingItemPageRoutingModule_Factory(t) {
          return new (t || SellingItemPageRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SellingItemPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "sZbN":
    /*!***********************************************************!*\
      !*** ./src/app/pages/selling-item/selling-item.module.ts ***!
      \***********************************************************/

    /*! exports provided: SellingItemPageModule */

    /***/
    function sZbN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SellingItemPageModule", function () {
        return SellingItemPageModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _selling_item_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./selling-item-routing.module */
      "4NZG");
      /* harmony import */


      var _selling_item_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./selling-item.page */
      "0Fnc");
      /* harmony import */


      var _Services_account_item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../Services/account/item-service */
      "n6XZ");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SellingItemPageModule = function SellingItemPageModule() {
        _classCallCheck(this, SellingItemPageModule);
      };

      SellingItemPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: SellingItemPageModule
      });
      SellingItemPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        factory: function SellingItemPageModule_Factory(t) {
          return new (t || SellingItemPageModule)();
        },
        providers: [_Services_account_item_service__WEBPACK_IMPORTED_MODULE_5__["ItemService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _selling_item_routing_module__WEBPACK_IMPORTED_MODULE_3__["SellingItemPageRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](SellingItemPageModule, {
          declarations: [_selling_item_page__WEBPACK_IMPORTED_MODULE_4__["SellingItemPage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _selling_item_routing_module__WEBPACK_IMPORTED_MODULE_3__["SellingItemPageRoutingModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~pages-selling-item-selling-item-module~selling-item-selling-item-module-es5.js.map