(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-public-profile-public-profile-module"], {
    /***/
    "/OGD":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/public-profile/public-profile-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: PublicProfilePageRoutingModule */

    /***/
    function OGD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PublicProfilePageRoutingModule", function () {
        return PublicProfilePageRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _public_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./public-profile.page */
      "7axg");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _public_profile_page__WEBPACK_IMPORTED_MODULE_1__["PublicProfilePage"]
      }];

      var PublicProfilePageRoutingModule = function PublicProfilePageRoutingModule() {
        _classCallCheck(this, PublicProfilePageRoutingModule);
      };

      PublicProfilePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: PublicProfilePageRoutingModule
      });
      PublicProfilePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function PublicProfilePageRoutingModule_Factory(t) {
          return new (t || PublicProfilePageRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PublicProfilePageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "7axg":
    /*!*************************************************************!*\
      !*** ./src/app/pages/public-profile/public-profile.page.ts ***!
      \*************************************************************/

    /*! exports provided: PublicProfilePage */

    /***/
    function axg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PublicProfilePage", function () {
        return PublicProfilePage;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _Services_account_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../Services/account/item-service */
      "n6XZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function PublicProfilePage_ion_col_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-col", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-badge");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var review_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](review_r2);
        }
      }

      function PublicProfilePage_ion_col_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-col", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-card", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-ripple-effect");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", item_r3 == null ? null : item_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        }
      }

      var PublicProfilePage = /*#__PURE__*/function () {
        function PublicProfilePage(itemService) {
          _classCallCheck(this, PublicProfilePage);

          this.itemService = itemService;
          this.reviews = [];
        }

        _createClass(PublicProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.reviews.push("Friendly");
            this.reviews.push("On time");
            this.reviews.push("Communicative");
            this.reviews.push("Item as described");
            this.items = this.itemService.getItems().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(10));
          }
        }]);

        return PublicProfilePage;
      }();

      PublicProfilePage.ɵfac = function PublicProfilePage_Factory(t) {
        return new (t || PublicProfilePage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_Services_account_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"]));
      };

      PublicProfilePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: PublicProfilePage,
        selectors: [["app-public-profile"]],
        decls: 54,
        vars: 4,
        consts: [[1, "ion-no-border"], ["mode", "ios"], ["slot", "start"], ["defaultHref", "/redmarket", "mode", "md"], ["slot", "end"], ["slot", "icon-only", "name", "ellipsis-vertical-outline", "color", "primary"], [1, "profile-ion-col"], ["src", "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"], [1, "profile"], [1, "rating"], [1, "follow"], ["color", "primary", "expand", "block"], [1, "ion-row-follower"], [1, "bold-title"], [1, "ion-row-padding"], ["class", "review", 4, "ngFor", "ngForOf"], ["class", "ion-col-items", "size-xs", "6", "size-sm", "4", "size-lg", "3", 4, "ngFor", "ngForOf"], [1, "review"], ["size-xs", "6", "size-sm", "4", "size-lg", "3", 1, "ion-col-items"], ["ion-activatable", "", "ripple-parent", "", "mode", "ios", "routerLink", "/item-detail", 1, "shadow", "ion-no-margin", "ion-margin-bottom"], [1, "cover-img", 3, "src"]],
        template: function PublicProfilePage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-title", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-buttons", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-back-button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-buttons", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-button");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "ion-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-col", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-avatar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-col");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Kedirosa Moha");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Joind Mar 2020");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Richardson TX");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "* * * * *");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "ion-row", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "ion-col");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "ion-button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Follow");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "ion-row", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "ion-col");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "ion-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "60 | Bought");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "20 | Sold");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "ion-col");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "ion-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "60 | Follower");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "200 | Following");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Review");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "ion-row", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, PublicProfilePage_ion_col_46_Template, 3, 1, "ion-col", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Items from this seler");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "ion-grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, PublicProfilePage_ion_col_52_Template, 4, 1, "ion-col", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](53, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](46);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.reviews);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](53, 2, ctx.items));
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBadge"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRippleEffect"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
        styles: ["ion-content[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.profile-ion-col[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  width: 70px;\n  max-width: 80px;\n  margin-top: 20px;\n}\n\n.profile-ion-col[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 65px;\n  height: 65px;\n  max-height: 70px;\n  max-width: 70px;\n}\n\n.ion-row-follower[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin-top: -3px;\n  text-align: center;\n  align-items: center;\n}\n\n.ion-row-follower[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: bolder;\n}\n\n.follow[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.ion-col-items[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.bold-title[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n\n.review[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\nion-card[_ngcontent-%COMP%]   .cover-img[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-white);\n  background-size: cover;\n  background-position: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: relative;\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding: 10px;\n}\n\nion-badge[_ngcontent-%COMP%] {\n  padding: 8px;\n  border-radius: 30px;\n}\n\n.ion-row-padding[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  padding-right: 20px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3B1YmxpYy1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUNJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDUjs7QUFPSTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUVBLGtCQUFBO0VBQ0EsbUJBQUE7QUFMUjs7QUFNUTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQUpaOztBQVVBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQVBKOztBQVNBO0VBQ0ksWUFBQTtBQU5KOztBQVFBO0VBQ0Usa0JBQUE7QUFMRjs7QUFRQTtFQUNHLGNBQUE7QUFMSDs7QUFRQTtFQUNJLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtBQUxKOztBQVNBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0FBTko7O0FBUUE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFMSjs7QUFPQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBSkoiLCJmaWxlIjoicHVibGljLXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbi5wcm9maWxlLWlvbi1jb2x7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgbWF4LXdpZHRoOiA4MHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG5cblxuICAgIGltZ3tcbiAgICAgICAgd2lkdGg6IDY1cHg7XG4gICAgICAgIGhlaWdodDogNjVweDtcbiAgICAgICAgbWF4LWhlaWdodDogNzBweDtcbiAgICAgICAgbWF4LXdpZHRoOiA3MHB4O1xuICAgIH1cbn1cbi5pb24tcm93LWZvbGxvd2Vye1xuXG4gICAgLy8gbWFyZ2luOiAwIGF1dG87XG4gICAgLy8gcGFkZGluZzogMTBweDtcbiAgICBpb24tY29se1xuICAgIGlvbi1jYXJke1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtM3B4O1xuICAgICAgICAvLyBtYXJnaW4tbGVmdDogLTVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBoNXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgIH1cbiAgICAgICAgfVxuXG59XG4gICAgfVxuLmZvbGxvd3tcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cbi5pb24tY29sLWl0ZW1ze1xuICAgIHBhZGRpbmc6IDVweDtcbn1cbi5ib2xkLXRpdGxle1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG5cbn1cbi5yZXZpZXd7XG4gICBtYXJnaW46IDAgYXV0bztcbn1cbmlvbi1jYXJke1xuLmNvdmVyLWltZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgXG4gIH1cbn1cbmlvbi10b29sYmFye1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5pb24tYmFkZ2V7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG4uaW9uLXJvdy1wYWRkaW5ne1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG59Il19 */"]
      });
      /***/
    },

    /***/
    "VVA+":
    /*!***************************************************************!*\
      !*** ./src/app/pages/public-profile/public-profile.module.ts ***!
      \***************************************************************/

    /*! exports provided: PublicProfilePageModule */

    /***/
    function VVA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PublicProfilePageModule", function () {
        return PublicProfilePageModule;
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


      var _public_profile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./public-profile-routing.module */
      "/OGD");
      /* harmony import */


      var _public_profile_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./public-profile.page */
      "7axg");
      /* harmony import */


      var _Services_account_item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../Services/account/item-service */
      "n6XZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PublicProfilePageModule = function PublicProfilePageModule() {
        _classCallCheck(this, PublicProfilePageModule);
      };

      PublicProfilePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: PublicProfilePageModule
      });
      PublicProfilePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        factory: function PublicProfilePageModule_Factory(t) {
          return new (t || PublicProfilePageModule)();
        },
        providers: [_Services_account_item_service__WEBPACK_IMPORTED_MODULE_5__["ItemService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _public_profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["PublicProfilePageRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PublicProfilePageModule, {
          declarations: [_public_profile_page__WEBPACK_IMPORTED_MODULE_4__["PublicProfilePage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _public_profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["PublicProfilePageRoutingModule"]]
        });
      })();
      /***/

    },

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
//# sourceMappingURL=pages-public-profile-public-profile-module-es5.js.map