(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-firebase-auth-profile-firebase-profile-module~profile-firebase-profile-module"], {
    /***/
    "HTFn":
    /*!*************************************************************************************!*\
      !*** ./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth-guard.js ***!
      \*************************************************************************************/

    /*! exports provided: AngularFireAuthGuard, AngularFireAuthGuardModule, canActivate, customClaims, emailVerified, hasCustomClaim, idTokenResult, isNotAnonymous, loggedIn, redirectLoggedInTo, redirectUnauthorizedTo */

    /***/
    function HTFn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularFireAuthGuard", function () {
        return AngularFireAuthGuard;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularFireAuthGuardModule", function () {
        return AngularFireAuthGuardModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "canActivate", function () {
        return canActivate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "customClaims", function () {
        return customClaims;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "emailVerified", function () {
        return emailVerified;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hasCustomClaim", function () {
        return hasCustomClaim;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "idTokenResult", function () {
        return idTokenResult;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isNotAnonymous", function () {
        return isNotAnonymous;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loggedIn", function () {
        return loggedIn;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "redirectLoggedInTo", function () {
        return redirectLoggedInTo;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "redirectUnauthorizedTo", function () {
        return redirectUnauthorizedTo;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /**
       * @fileoverview added by tsickle
       * Generated from: auth-guard.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var ɵ0 =
      /**
      * @param {?} user
      * @return {?}
      */
      function ɵ0(user) {
        return !!user;
      };
      /** @type {?} */


      var loggedIn = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(ɵ0);

      var AngularFireAuthGuard =
      /**
       * @param {?} router
       * @param {?} auth
       */
      function AngularFireAuthGuard(router, auth) {
        var _this = this;

        _classCallCheck(this, AngularFireAuthGuard);

        this.router = router;
        this.auth = auth;

        this.canActivate =
        /**
        * @param {?} next
        * @param {?} state
        * @return {?}
        */
        function (next, state) {
          /** @type {?} */
          var authPipeFactory =
          /** @type {?} */
          next.data.authGuardPipe ||
          /**
          * @return {?}
          */
          function () {
            return loggedIn;
          };

          return _this.auth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), authPipeFactory(next, state), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
          /**
          * @param {?} can
          * @return {?}
          */
          function (can) {
            if (typeof can === 'boolean') {
              return can;
            } else if (Array.isArray(can)) {
              return _this.router.createUrlTree(can);
            } else {
              // TODO(EdricChan03): Add tests
              return _this.router.parseUrl(can);
            }
          }));
        };
      };

      AngularFireAuthGuard.ɵfac = function AngularFireAuthGuard_Factory(t) {
        return new (t || AngularFireAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]));
      };
      /** @nocollapse */


      AngularFireAuthGuard.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
        }];
      };
      /** @nocollapse */


      AngularFireAuthGuard.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function AngularFireAuthGuard_Factory() {
          return new AngularFireAuthGuard(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]));
        },
        token: AngularFireAuthGuard,
        providedIn: "any"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFireAuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'any'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
          }];
        }, null);
      })();

      if (false) {}
      /** @type {?} */


      var canActivate =
      /**
      * @param {?} pipe
      * @return {?}
      */
      function canActivate(pipe) {
        return {
          canActivate: [AngularFireAuthGuard],
          data: {
            authGuardPipe: pipe
          }
        };
      };

      var ɵ1 =
      /**
      * @param {?} user
      * @return {?}
      */
      function ɵ1(user) {
        return !!user && !user.isAnonymous;
      };
      /** @type {?} */


      var isNotAnonymous = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(ɵ1);

      var ɵ2 =
      /**
      * @param {?} user
      * @return {?}
      */
      function ɵ2(user) {
        return user ? user.getIdTokenResult() : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
      };
      /** @type {?} */


      var idTokenResult = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(ɵ2);

      var ɵ3 =
      /**
      * @param {?} user
      * @return {?}
      */
      function ɵ3(user) {
        return !!user && user.emailVerified;
      };
      /** @type {?} */


      var emailVerified = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(ɵ3);

      var ɵ4 =
      /**
      * @param {?} idTokenResult
      * @return {?}
      */
      function ɵ4(idTokenResult) {
        return idTokenResult ? idTokenResult.claims : [];
      };
      /** @type {?} */


      var customClaims = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["pipe"])(idTokenResult, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(ɵ4));
      /** @type {?} */

      var hasCustomClaim =
      /**
      * @param {?} claim
      * @return {?}
      */
      function hasCustomClaim(claim) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["pipe"])(customClaims, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
        /**
        * @param {?} claims
        * @return {?}
        */
        function (claims) {
          return claims.hasOwnProperty(claim);
        }));
      };
      /** @type {?} */


      var redirectUnauthorizedTo =
      /**
      * @param {?} redirect
      * @return {?}
      */
      function redirectUnauthorizedTo(redirect) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["pipe"])(loggedIn, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
        /**
        * @param {?} loggedIn
        * @return {?}
        */
        function (loggedIn) {
          return loggedIn || redirect;
        }));
      };
      /** @type {?} */


      var redirectLoggedInTo =
      /**
      * @param {?} redirect
      * @return {?}
      */
      function redirectLoggedInTo(redirect) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["pipe"])(loggedIn, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
        /**
        * @param {?} loggedIn
        * @return {?}
        */
        function (loggedIn) {
          return loggedIn && redirect || true;
        }));
      };
      /**
       * @fileoverview added by tsickle
       * Generated from: auth-guard.module.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */


      var AngularFireAuthGuardModule = function AngularFireAuthGuardModule() {
        _classCallCheck(this, AngularFireAuthGuardModule);
      };

      AngularFireAuthGuardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AngularFireAuthGuardModule
      });
      AngularFireAuthGuardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AngularFireAuthGuardModule_Factory(t) {
          return new (t || AngularFireAuthGuardModule)();
        },
        providers: [AngularFireAuthGuard]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFireAuthGuardModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            providers: [AngularFireAuthGuard]
          }]
        }], null, null);
      })();
      /**
       * @fileoverview added by tsickle
       * Generated from: public_api.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * Generated from: angular-fire-auth-guard.ts
       * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      //# sourceMappingURL=angular-fire-auth-guard.js.map

      /***/

    },

    /***/
    "Nq88":
    /*!****************************************************************!*\
      !*** ./src/app/firebase/auth/profile/firebase-profile.page.ts ***!
      \****************************************************************/

    /*! exports provided: FirebaseProfilePage */

    /***/
    function Nq88(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseProfilePage", function () {
        return FirebaseProfilePage;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _firebase_profile_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./firebase-profile.model */
      "Uz1e");
      /* harmony import */


      var _firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../firebase-auth.service */
      "T7tK");
      /* harmony import */


      var _utils_resolver_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../utils/resolver-helper */
      "evT8");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../shell/image-shell/image-shell.component */
      "2gss");
      /* harmony import */


      var _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shell/aspect-ratio/aspect-ratio.component */
      "B7gC");
      /* harmony import */


      var _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../shell/text-shell/text-shell.component */
      "zK/y");

      var _c0 = function _c0() {
        return {
          w: 1,
          h: 1
        };
      };

      var FirebaseProfilePage = /*#__PURE__*/function () {
        function FirebaseProfilePage(router, route, authService) {
          _classCallCheck(this, FirebaseProfilePage);

          this.router = router;
          this.route = route;
          this.authService = authService;
        }

        _createClass(FirebaseProfilePage, [{
          key: "isShell",
          get: function get() {
            return this.user && this.user.isShell ? true : false;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.subscriptions = this.route.data.pipe( // Extract data for this page
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (resolvedRouteData) {
              return _utils_resolver_helper__WEBPACK_IMPORTED_MODULE_3__["ResolverHelper"].extractData(resolvedRouteData.data, _firebase_profile_model__WEBPACK_IMPORTED_MODULE_1__["FirebaseProfileModel"]);
            })).subscribe(function (state) {
              _this2.user = state;
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "signOut",
          value: function signOut() {
            var _this3 = this;

            this.authService.signOut().subscribe(function () {
              // Sign-out successful.
              // Replace state as we are no longer authorized to access profile page.
              _this3.router.navigate(['firebase/auth/sign-in'], {
                replaceUrl: true
              });
            }, function (error) {
              console.log('signout error', error);
            });
          } // NOTE: Ionic only calls ngOnDestroy if the page was popped (ex: when navigating back)
          // Since ngOnDestroy might not fire when you navigate from the current page, use ionViewWillLeave to cleanup Subscriptions

        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.subscriptions.unsubscribe();
          }
        }]);

        return FirebaseProfilePage;
      }();

      FirebaseProfilePage.ɵfac = function FirebaseProfilePage_Factory(t) {
        return new (t || FirebaseProfilePage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_firebase_auth_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseAuthService"]));
      };

      FirebaseProfilePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: FirebaseProfilePage,
        selectors: [["app-firebase-profile"]],
        hostVars: 2,
        hostBindings: function FirebaseProfilePage_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("is-shell", ctx.isShell);
          }
        },
        decls: 37,
        vars: 11,
        consts: [[1, "ion-no-border"], ["slot", "start"], ["defaultHref", "app/categories"], [1, "user-content"], [1, "ion-no-padding"], ["animation", "spinner", 1, "user-image", "add-overlay", 3, "display", "src", "alt"], [3, "ratio"], [1, "user-details"], [1, "ion-no-padding", "details-wrapper"], [1, "user-name"], [3, "data"], ["name", "checkmark-circle", "color", "bright-pink"], [1, "user-role"], [1, "user-description"], ["lines", "3", 3, "data"], [1, "user-preferences-wrapper"], ["size", "12"], [1, "preference-name"], [1, "preference-value"], ["expand", "block", "fill", "outline", "color", "bright-blue", 1, "sign-out-btn", 3, "click"]],
        template: function FirebaseProfilePage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "ion-back-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-content", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-col", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "app-image-shell", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "app-aspect-ratio", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-row", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-col", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "h2", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "app-text-shell", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "ion-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "app-text-shell", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "p", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "app-text-shell", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "ion-row", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "ion-col", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "h4", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Mobile");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "app-text-shell", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "ion-col", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "h4", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "app-text-shell", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "ion-col", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "h4", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Auth Provider");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "app-text-shell", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "ion-col", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "ion-button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FirebaseProfilePage_Template_ion_button_click_35_listener() {
              return ctx.signOut();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Sign out");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("display", "cover")("src", ctx.user == null ? null : ctx.user.image)("alt", "item image");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ratio", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](10, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx.user == null ? null : ctx.user.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx.user == null ? null : ctx.user.role);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx.user == null ? null : ctx.user.description);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx.user == null ? null : ctx.user.phoneNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx.user == null ? null : ctx.user.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx.user == null ? null : ctx.user.provider);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCol"], _shell_image_shell_image_shell_component__WEBPACK_IMPORTED_MODULE_7__["ImageShellComponent"], _shell_aspect_ratio_aspect_ratio_component__WEBPACK_IMPORTED_MODULE_8__["AspectRatioComponent"], _shell_text_shell_text_shell_component__WEBPACK_IMPORTED_MODULE_9__["TextShellComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButton"]],
        styles: ["[_nghost-%COMP%] {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n  --ion-color-bright-blue: #001CFF;\n  --ion-color-bright-blue-rgb: 0,28,255;\n  --ion-color-bright-blue-contrast: #ffffff;\n  --ion-color-bright-blue-contrast-rgb: 255,255,255;\n  --ion-color-bright-blue-shade: #0019e0;\n  --ion-color-bright-blue-tint: #1a33ff;\n  --ion-color-bright-pink: #FF0DCB;\n  --ion-color-bright-pink-rgb: 255,13,203;\n  --ion-color-bright-pink-contrast: #ffffff;\n  --ion-color-bright-pink-contrast-rgb: 255,255,255;\n  --ion-color-bright-pink-shade: #e00bb3;\n  --ion-color-bright-pink-tint: #ff25d0;\n}\n[_nghost-%COMP%]   .ion-color-bright-blue[_ngcontent-%COMP%] {\n  --ion-color-base: var(--ion-color-bright-blue) !important;\n  --ion-color-base-rgb: var(--ion-color-bright-blue-rgb) !important;\n  --ion-color-contrast: var(--ion-color-bright-blue-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-bright-blue-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-bright-blue-shade) !important;\n  --ion-color-tint: var(--ion-color-bright-blue-tint) !important;\n}\n[_nghost-%COMP%]   .ion-color-bright-pink[_ngcontent-%COMP%] {\n  --ion-color-base: var(--ion-color-bright-pink) !important;\n  --ion-color-base-rgb: var(--ion-color-bright-pink-rgb) !important;\n  --ion-color-contrast: var(--ion-color-bright-pink-contrast) !important;\n  --ion-color-contrast-rgb: var(--ion-color-bright-pink-contrast-rgb) !important;\n  --ion-color-shade: var(--ion-color-bright-pink-shade) !important;\n  --ion-color-tint: var(--ion-color-bright-pink-tint) !important;\n}\nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --ion-toolbar-background: transparent;\n  --ion-toolbar-color: var(--ion-color-lightest);\n}\nion-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n}\n.user-content[_ngcontent-%COMP%] {\n  --background: var(--page-background);\n}\n.user-content[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  -webkit-margin-start: var(--page-margin);\n          margin-inline-start: var(--page-margin);\n  -webkit-margin-end: var(--page-margin);\n          margin-inline-end: var(--page-margin);\n  padding: var(--page-margin);\n  background-color: var(--ion-color-lightest);\n  border-radius: calc(var(--app-broad-radius) * 2);\n  text-align: center;\n  margin-top: calc(var(--page-margin) * -4);\n  box-shadow: 0px 10px 20px rgba(var(--ion-color-dark-rgb), 0.15), 0px 3px 6px rgba(var(--ion-color-dark-rgb), 0.1);\n}\n.user-content[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .details-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.user-content[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 22px;\n  margin-top: 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n  color: var(--ion-color-bright-blue);\n}\n.user-content[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  -webkit-margin-start: calc(var(--page-margin) / 2);\n          margin-inline-start: calc(var(--page-margin) / 2);\n  font-size: 18px;\n}\n.user-content[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%] {\n  display: block;\n  min-width: 40%;\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--ion-color-medium-shade);\n}\n.user-content[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .user-description[_ngcontent-%COMP%] {\n  min-width: 100%;\n  margin-top: var(--page-margin);\n  margin-bottom: 0px;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n.user-content[_ngcontent-%COMP%]   .user-preferences-wrapper[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n}\n.user-content[_ngcontent-%COMP%]   .user-preferences-wrapper[_ngcontent-%COMP%]   .preference-name[_ngcontent-%COMP%] {\n  margin: 0px 0px 5px;\n  font-size: 16px;\n  color: var(--ion-color-bright-pink);\n}\n.user-content[_ngcontent-%COMP%]   .user-preferences-wrapper[_ngcontent-%COMP%]   .preference-value[_ngcontent-%COMP%] {\n  margin: 0px 0px calc(var(--page-margin) / 2);\n  font-size: 14px;\n  line-height: 1.4;\n  color: var(--ion-color-dark-tint);\n}\n.user-content[_ngcontent-%COMP%]   .sign-out-btn[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-top: calc(var(--page-margin) * 4);\n  color: #001CFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2ZpcmViYXNlLXByb2ZpbGUucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vdGhlbWUvbWl4aW5zL2lvbi1jb2xvci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0Usc0NBQUE7RUFDQSw4Q0FBQTtFQUlFLGdDQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esc0NBQUE7RUFDQSxxQ0FBQTtFQUlBLGdDQUFBO0VBQ0EsdUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGlEQUFBO0VBQ0Esc0NBQUE7RUFDQSxxQ0FBQTtBQVRKO0FDWkU7RUFDRSx5REFBQTtFQUNBLGlFQUFBO0VBQ0Esc0VBQUE7RUFDQSw4RUFBQTtFQUNBLGdFQUFBO0VBQ0EsOERBQUE7QURjSjtBQ3BCRTtFQUNFLHlEQUFBO0VBQ0EsaUVBQUE7RUFDQSxzRUFBQTtFQUNBLDhFQUFBO0VBQ0EsZ0VBQUE7RUFDQSw4REFBQTtBRHNCSjtBQURFO0VBQ0UscUNBQUE7RUFDQSw4Q0FBQTtBQUlKO0FBQUE7RUFFRSxrQkFBQTtFQUNBLE1BQUE7QUFFRjtBQUNBO0VBQ0Usb0NBQUE7QUFFRjtBQUFFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esd0NBQUE7VUFBQSx1Q0FBQTtFQUNBLHNDQUFBO1VBQUEscUNBQUE7RUFDQSwyQkFBQTtFQUNBLDJDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBRUEsaUhBQUE7QUFDSjtBQUtJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUhOO0FBTUk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQ0FBQTtBQUpOO0FBTU07RUFDRSxrREFBQTtVQUFBLGlEQUFBO0VBQ0EsZUFBQTtBQUpSO0FBUUk7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0FBTk47QUFTSTtFQUNFLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0FBUE47QUFXRTtFQUNFLDhCQUFBO0VBRUEsMkJBQUE7QUFWSjtBQVlJO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUFWTjtBQWFJO0VBQ0UsNENBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtBQVhOO0FBZUU7RUFDRSxXQUFBO0VBQ0Esd0NBQUE7RUFDQSxjQUFBO0FBYkoiLCJmaWxlIjoiZmlyZWJhc2UtcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidGhlbWUvbWl4aW5zL2lvbi1jb2xvclwiO1xuXG4vLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWJyb2FkLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG5cbiAgLy8gQWRkIGN1c3RvbSBjb2xvcnMgdG8gdXNlIHdpdGggW2NvbG9yXSBwcm9wZXJ0eVxuICBAaW5jbHVkZSBpb24tY29sb3IoJ2JyaWdodC1ibHVlJykge1xuICAgIC0taW9uLWNvbG9yLWJyaWdodC1ibHVlOiAjMDAxQ0ZGO1xuICAgIC0taW9uLWNvbG9yLWJyaWdodC1ibHVlLXJnYjogMCwyOCwyNTU7XG4gICAgLS1pb24tY29sb3ItYnJpZ2h0LWJsdWUtY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLS1pb24tY29sb3ItYnJpZ2h0LWJsdWUtY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgICAtLWlvbi1jb2xvci1icmlnaHQtYmx1ZS1zaGFkZTogIzAwMTllMDtcbiAgICAtLWlvbi1jb2xvci1icmlnaHQtYmx1ZS10aW50OiAjMWEzM2ZmO1xuICB9XG5cbiAgQGluY2x1ZGUgaW9uLWNvbG9yKCdicmlnaHQtcGluaycpIHtcbiAgICAtLWlvbi1jb2xvci1icmlnaHQtcGluazogI0ZGMERDQjtcbiAgICAtLWlvbi1jb2xvci1icmlnaHQtcGluay1yZ2I6IDI1NSwxMywyMDM7XG4gICAgLS1pb24tY29sb3ItYnJpZ2h0LXBpbmstY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLS1pb24tY29sb3ItYnJpZ2h0LXBpbmstY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgICAtLWlvbi1jb2xvci1icmlnaHQtcGluay1zaGFkZTogI2UwMGJiMztcbiAgICAtLWlvbi1jb2xvci1icmlnaHQtcGluay10aW50OiAjZmYyNWQwO1xuICB9XG59XG5cbi8vIE5vdGU6ICBBbGwgdGhlIENTUyB2YXJpYWJsZXMgZGVmaW5lZCBiZWxvdyBhcmUgb3ZlcnJpZGVzIG9mIElvbmljIGVsZW1lbnRzIENTUyBDdXN0b20gUHJvcGVydGllc1xuaW9uLWhlYWRlciB7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0taW9uLXRvb2xiYXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAvLyBUbyBnZXQgdGhlIGlvbi1jb250ZW50IGJlaGluZCB0aGUgaW9uLWhlYWRlclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cblxuLnVzZXItY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcblxuICAudXNlci1kZXRhaWxzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMjtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLWFwcC1icm9hZC1yYWRpdXMpICogMik7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogLTQpO1xuICAgIC8vIHotM1xuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjE1KSxcbiAgICAgICAgICAgICAgICAwcHggM3B4IDZweCByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuMTApO1xuICAgIC8vIHotNFxuICAgIC8vIGJveC1zaGFkb3c6IDBweCAxNXB4IDI1cHggcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjE1KSxcbiAgICAvLyAgICAgICAgICAgICAwcHggNXB4IDEwcHggcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjA1KTtcblxuICAgIC5kZXRhaWxzLXdyYXBwZXIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIC51c2VyLW5hbWUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWJyaWdodC1ibHVlKTtcblxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnVzZXItcm9sZSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1pbi13aWR0aDogNDAlO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICB9XG5cbiAgICAudXNlci1kZXNjcmlwdGlvbiB7XG4gICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICB9XG4gIH1cblxuICAudXNlci1wcmVmZXJlbmNlcy13cmFwcGVyIHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICAucHJlZmVyZW5jZS1uYW1lIHtcbiAgICAgIG1hcmdpbjogMHB4IDBweCA1cHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWJyaWdodC1waW5rKTtcbiAgICB9XG5cbiAgICAucHJlZmVyZW5jZS12YWx1ZSB7XG4gICAgICBtYXJnaW46IDBweCAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gICAgfVxuICB9XG5cbiAgLnNpZ24tb3V0LWJ0biB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiA0KTtcbiAgICBjb2xvcjogIzAwMUNGRjtcbiAgfVxufVxuIiwiQG1peGluIGlvbi1jb2xvcigkY29sb3IpIHtcbiAgQGNvbnRlbnQ7XG5cbiAgLmlvbi1jb2xvci0jeyRjb2xvcn0ge1xuICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvcn0pICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvcn0tcmdiKSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItI3skY29sb3J9LWNvbnRyYXN0KSAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yfS1jb250cmFzdC1yZ2IpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci0jeyRjb2xvcn0tc2hhZGUpICFpbXBvcnRhbnQ7XG4gICAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLSN7JGNvbG9yfS10aW50KSAhaW1wb3J0YW50O1xuICB9XG59XG4iXX0= */", "app-image-shell.user-image[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--ion-color-bright-blue-rgb), 0.25);\n  --image-shell-spinner-color: var(--ion-color-bright-blue-tint);\n  --image-shell-border-radius: 0px 0px calc(var(--app-broad-radius) * 2) calc(var(--app-broad-radius) * 2);\n  --image-shell-overlay-background: linear-gradient(180deg, rgba(var(--ion-color-dark-rgb), 1) 0%, rgba(var(--ion-color-dark-rgb), 0.40) 25%, rgba(var(--ion-color-dark-rgb), 0.15) 100%);\n}\n\n.user-name[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 22px;\n  --text-shell-line-color: rgba(var(--ion-color-bright-blue-rgb), 0.20);\n  min-width: 180px;\n}\n\n.user-name[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  min-width: 0px;\n}\n\n.user-role[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 14px;\n  --text-shell-line-color: rgba(var(--ion-color-bright-blue-rgb), 0.15);\n  max-width: 40%;\n}\n\n.user-role[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n\n.user-description[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 14px;\n  --text-shell-line-color: rgba(var(--ion-color-bright-blue-rgb), 0.10);\n}\n\n.preference-value[_ngcontent-%COMP%]    > app-text-shell[_ngcontent-%COMP%] {\n  --text-shell-line-height: 14px;\n  --text-shell-line-color: rgba(var(--ion-color-bright-pink-rgb), 0.10);\n  max-width: 40%;\n}\n\n.preference-value[_ngcontent-%COMP%]    > app-text-shell.text-loaded[_ngcontent-%COMP%] {\n  max-width: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2ZpcmViYXNlLXByb2ZpbGUuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhFQUFBO0VBQ0EsOERBQUE7RUFDQSx3R0FBQTtFQUNBLHVMQUFBO0FBQ0Y7O0FBRUE7RUFDRSw4QkFBQTtFQUNBLHFFQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDRTtFQUNFLGNBQUE7QUFDSjs7QUFHQTtFQUNFLDhCQUFBO0VBQ0EscUVBQUE7RUFDQSxjQUFBO0FBQUY7O0FBRUU7RUFDRSxrQkFBQTtBQUFKOztBQUlBO0VBQ0UsOEJBQUE7RUFDQSxxRUFBQTtBQURGOztBQUlBO0VBQ0UsOEJBQUE7RUFDQSxxRUFBQTtFQUNBLGNBQUE7QUFERjs7QUFHRTtFQUNFLGtCQUFBO0FBREoiLCJmaWxlIjoiZmlyZWJhc2UtcHJvZmlsZS5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWltYWdlLXNoZWxsLnVzZXItaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItYnJpZ2h0LWJsdWUtcmdiKSwgMC4yNSk7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWJyaWdodC1ibHVlLXRpbnQpO1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IDBweCAwcHggY2FsYyh2YXIoLS1hcHAtYnJvYWQtcmFkaXVzKSAqIDIpIGNhbGModmFyKC0tYXBwLWJyb2FkLXJhZGl1cykgKiAyKTtcbiAgLS1pbWFnZS1zaGVsbC1vdmVybGF5LWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMSkgMCUsIHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC40MCkgMjUlLCByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuMTUpIDEwMCUpO1xufVxuXG4udXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDIycHg7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1icmlnaHQtYmx1ZS1yZ2IpLCAwLjIwKTtcbiAgbWluLXdpZHRoOiAxODBweDtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtaW4td2lkdGg6IDBweDtcbiAgfVxufVxuXG4udXNlci1yb2xlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1icmlnaHQtYmx1ZS1yZ2IpLCAwLjE1KTtcbiAgbWF4LXdpZHRoOiA0MCU7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG5cbi51c2VyLWRlc2NyaXB0aW9uID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1icmlnaHQtYmx1ZS1yZ2IpLCAwLjEwKTtcbn1cblxuLnByZWZlcmVuY2UtdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWJyaWdodC1waW5rLXJnYiksIDAuMTApO1xuICBtYXgtd2lkdGg6IDQwJTtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gIH1cbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "ZWqS":
    /*!********************************************************************!*\
      !*** ./src/app/firebase/auth/profile/firebase-profile.resolver.ts ***!
      \********************************************************************/

    /*! exports provided: FirebaseProfileResolver */

    /***/
    function ZWqS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseProfileResolver", function () {
        return FirebaseProfileResolver;
      });
      /* harmony import */


      var _firebase_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../firebase-auth.service */
      "T7tK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FirebaseProfileResolver = /*#__PURE__*/function () {
        function FirebaseProfileResolver(firebaseAuthService) {
          _classCallCheck(this, FirebaseProfileResolver);

          this.firebaseAuthService = firebaseAuthService;
        }

        _createClass(FirebaseProfileResolver, [{
          key: "resolve",
          value: function resolve() {
            var dataSource = this.firebaseAuthService.getProfileDataSource();
            var dataStore = this.firebaseAuthService.getProfileStore(dataSource);
            return dataStore;
          }
        }]);

        return FirebaseProfileResolver;
      }();

      FirebaseProfileResolver.ɵfac = function FirebaseProfileResolver_Factory(t) {
        return new (t || FirebaseProfileResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_firebase_auth_service__WEBPACK_IMPORTED_MODULE_0__["FirebaseAuthService"]));
      };

      FirebaseProfileResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: FirebaseProfileResolver,
        factory: FirebaseProfileResolver.ɵfac
      });
      /***/
    },

    /***/
    "evT8":
    /*!******************************************!*\
      !*** ./src/app/utils/resolver-helper.ts ***!
      \******************************************/

    /*! exports provided: ResolverHelper */

    /***/
    function evT8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResolverHelper", function () {
        return ResolverHelper;
      });
      /* harmony import */


      var _shell_data_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../shell/data-store */
      "f/Ol");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var ResolverHelper = /*#__PURE__*/function () {
        function ResolverHelper() {
          _classCallCheck(this, ResolverHelper);
        }

        _createClass(ResolverHelper, null, [{
          key: "extractData",
          value: // More info on function overloads here: https://www.typescriptlang.org/docs/handbook/functions.html#overloads
          function extractData(source, constructor) {
            if (source instanceof _shell_data_store__WEBPACK_IMPORTED_MODULE_0__["DataStore"]) {
              return source.state;
            } else if (source instanceof constructor) {
              // The right side of instanceof should be an expression evaluating to a constructor function (ie. a class), not a type
              // That's why we included an extra parameter which acts as a constructor function for type T
              // (see: https://github.com/microsoft/TypeScript/issues/5236)
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(source);
            }
          }
        }]);

        return ResolverHelper;
      }();
      /***/

    },

    /***/
    "iNMq":
    /*!******************************************************************!*\
      !*** ./src/app/firebase/auth/profile/firebase-profile.module.ts ***!
      \******************************************************************/

    /*! exports provided: FirebaseProfilePageModule */

    /***/
    function iNMq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseProfilePageModule", function () {
        return FirebaseProfilePageModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../components/components.module */
      "j1ZV");
      /* harmony import */


      var _firebase_profile_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./firebase-profile.page */
      "Nq88");
      /* harmony import */


      var _firebase_profile_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./firebase-profile.resolver */
      "ZWqS");
      /* harmony import */


      var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire/auth-guard */
      "HTFn");
      /* harmony import */


      var _firebase_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../firebase-auth.service */
      "T7tK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var redirectUnauthorizedToLogin = function redirectUnauthorizedToLogin() {
        return Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_7__["redirectUnauthorizedTo"])(['/firebase/auth/sign-in']);
      };

      var routes = [{
        path: '',
        component: _firebase_profile_page__WEBPACK_IMPORTED_MODULE_5__["FirebaseProfilePage"],
        canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthGuard"]],
        data: {
          authGuardPipe: redirectUnauthorizedToLogin
        },
        resolve: {
          data: _firebase_profile_resolver__WEBPACK_IMPORTED_MODULE_6__["FirebaseProfileResolver"]
        }
      }];

      var FirebaseProfilePageModule = function FirebaseProfilePageModule() {
        _classCallCheck(this, FirebaseProfilePageModule);
      };

      FirebaseProfilePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: FirebaseProfilePageModule
      });
      FirebaseProfilePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        factory: function FirebaseProfilePageModule_Factory(t) {
          return new (t || FirebaseProfilePageModule)();
        },
        providers: [_firebase_profile_resolver__WEBPACK_IMPORTED_MODULE_6__["FirebaseProfileResolver"], _firebase_auth_service__WEBPACK_IMPORTED_MODULE_8__["FirebaseAuthService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](FirebaseProfilePageModule, {
          declarations: [_firebase_profile_page__WEBPACK_IMPORTED_MODULE_5__["FirebaseProfilePage"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~app-firebase-auth-profile-firebase-profile-module~profile-firebase-profile-module-es5.js.map