(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-in-firebase-sign-in-module"],{

/***/ "ROOv":
/*!******************************************************************!*\
  !*** ./src/app/firebase/auth/sign-in/firebase-sign-in.module.ts ***!
  \******************************************************************/
/*! exports provided: FirebaseSignInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseSignInPageModule", function() { return FirebaseSignInPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _firebase_sign_in_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./firebase-sign-in.page */ "axc3");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/components.module */ "j1ZV");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth-guard */ "HTFn");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










// Firebase guard to redirect logged in users to profile
const redirectLoggedInToProfile = (next) => Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(user => {
    // when queryParams['auth-redirect'] don't redirect because we want
    // the component to handle the redirection
    if (user !== null && !next.queryParams['auth-redirect']) {
        return ['home'];
    }
    else {
        return true;
    }
});
const routes = [
    {
        path: '',
        component: _firebase_sign_in_page__WEBPACK_IMPORTED_MODULE_4__["FirebaseSignInPage"],
        canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthGuard"]],
        data: { authGuardPipe: redirectLoggedInToProfile }
    }
];
class FirebaseSignInPageModule {
}
FirebaseSignInPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: FirebaseSignInPageModule });
FirebaseSignInPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function FirebaseSignInPageModule_Factory(t) { return new (t || FirebaseSignInPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](FirebaseSignInPageModule, { declarations: [_firebase_sign_in_page__WEBPACK_IMPORTED_MODULE_4__["FirebaseSignInPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=sign-in-firebase-sign-in-module-es2015.js.map