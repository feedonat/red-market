(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firebase-auth-firebase-auth-module"], {
    /***/
    "duP/":
    /*!*******************************************************!*\
      !*** ./src/app/firebase/auth/firebase-auth.module.ts ***!
      \*******************************************************/

    /*! exports provided: FirebaseAuthModule */

    /***/
    function duP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FirebaseAuthModule", function () {
        return FirebaseAuthModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");
      /* harmony import */


      var _firebase_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./firebase-auth.service */
      "T7tK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        children: [// /firebase/auth redirect
        {
          path: '',
          redirectTo: 'sign-in',
          pathMatch: 'full'
        }, {
          path: 'sign-in',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | sign-in-firebase-sign-in-module */
            [__webpack_require__.e("default~pages-onboarding-onboarding-module~sign-in-firebase-sign-in-module"), __webpack_require__.e("sign-in-firebase-sign-in-module")]).then(__webpack_require__.bind(null,
            /*! ./sign-in/firebase-sign-in.module */
            "ROOv")).then(function (m) {
              return m.FirebaseSignInPageModule;
            });
          }
        }, {
          path: 'sign-up',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | sign-up-firebase-sign-up-module */
            "default~app-firebase-auth-sign-up-firebase-sign-up-module~sign-up-firebase-sign-up-module").then(__webpack_require__.bind(null,
            /*! ./sign-up/firebase-sign-up.module */
            "RMgo")).then(function (m) {
              return m.FirebaseSignUpPageModule;
            });
          }
        }, {
          path: 'profile',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | profile-firebase-profile-module */
            "default~app-firebase-auth-profile-firebase-profile-module~profile-firebase-profile-module").then(__webpack_require__.bind(null,
            /*! ./profile/firebase-profile.module */
            "iNMq")).then(function (m) {
              return m.FirebaseProfilePageModule;
            });
          }
        }]
      }];

      var FirebaseAuthModule = function FirebaseAuthModule() {
        _classCallCheck(this, FirebaseAuthModule);
      };

      FirebaseAuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: FirebaseAuthModule
      });
      FirebaseAuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        factory: function FirebaseAuthModule_Factory(t) {
          return new (t || FirebaseAuthModule)();
        },
        providers: [_firebase_auth_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseAuthService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](FirebaseAuthModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=firebase-auth-firebase-auth-module-es5.js.map