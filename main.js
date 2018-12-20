(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/auth.module": [
		"./src/app/auth/auth.module.ts",
		"auth-auth-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"app sidebar-mini rtl\">\n <router-outlet></router-outlet>\n</section>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9hcHAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        App.initialToggleBar();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _shareds_shareds_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shareds/shareds.module */ "./src/app/shareds/shareds.module.ts");
/* harmony import */ var _shareds_services_authen_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shareds/services/authen.service */ "./src/app/shareds/services/authen.service.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_6__["AppRoutes"],
                _shareds_shareds_module__WEBPACK_IMPORTED_MODULE_7__["SharedsModule"]
            ],
            providers: [_shareds_services_authen_service__WEBPACK_IMPORTED_MODULE_8__["AuthenService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.url */ "./src/app/app.url.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");




var RouteList = [
    { path: '', redirectTo: _app_url__WEBPACK_IMPORTED_MODULE_1__["AppURL"].Login, pathMatch: 'full' },
    { path: _app_url__WEBPACK_IMPORTED_MODULE_1__["AppURL"].Login, component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: _app_url__WEBPACK_IMPORTED_MODULE_1__["AppURL"].Register, component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: _app_url__WEBPACK_IMPORTED_MODULE_1__["AppURL"].Auth, loadChildren: './auth/auth.module#AuthModule' }
];
var AppRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(RouteList);


/***/ }),

/***/ "./src/app/app.url.ts":
/*!****************************!*\
  !*** ./src/app/app.url.ts ***!
  \****************************/
/*! exports provided: AppURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppURL", function() { return AppURL; });
var AppURL = {
    Login: 'login',
    Register: 'register',
    Auth: 'auth'
};


/***/ }),

/***/ "./src/app/auth/auth.url.ts":
/*!**********************************!*\
  !*** ./src/app/auth/auth.url.ts ***!
  \**********************************/
/*! exports provided: AuthURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthURL", function() { return AuthURL; });
var AuthURL = {
    Dashboard: 'dashboard',
    Profile: 'profile',
    RegisterEmployee: 'register-employee',
    RegisterCustomer: 'register-customer'
};


/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"material-half-bg\">\n  <div class=\"cover\"></div>\n</section>\n<section class=\"login-content\">\n  <div class=\"logo\">\n    <h1>IbisTour</h1>\n  </div>\n  <div class=\"login-box\">\n    <form class=\"login-form\" [formGroup]=\"form\" (submit)=\"onSubmit()\">\n      <h3 class=\"login-head\"><i class=\"fa fa-lg fa-fw fa-user\"></i>เข้าสู่ระบบ</h3>\n      <div class=\"form-group\">\n        <label class=\"control-label\">อีเมล์</label>\n        <input class=\"form-control\" formControlName=\"email\" type=\"text\" placeholder=\"กรุณากรอกข้อมูล\" autofocus>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">รหัสผ่าน</label>\n        <input class=\"form-control\" formControlName=\"password\" type=\"password\" placeholder=\"กรุณากรอกข้อมูล\">\n      </div>\n      <div class=\"form-group\">\n        <div class=\"utility\">\n          <div class=\"animated-checkbox\">\n            <label>\n              <input type=\"checkbox\" formControlName=\"remember\"><span class=\"label-text\">ให้ฉันอยู่ในระบบ</span>\n            </label>\n          </div>\n          <p class=\"semibold-text mb-2\"><a href=\"#\" data-toggle=\"flip\">ลืมรหัสผ่าน ?</a></p>\n        </div>\n      </div>\n      <div class=\"form-group btn-container\">\n        <button class=\"btn btn-primary btn-block\"><i class=\"fa fa-sign-in fa-lg fa-fw\"></i>เข้าสู่ระบบ</button>\n      </div>\n      <p class=\"semibold-text mb-2 text-center mt-3\"><a [routerLink]=\"['/',AppURL.Register]\">ลงทะเบียน</a></p>\n    </form>\n    <form class=\"forget-form\" action=\"index.html\">\n      <h3 class=\"login-head\"><i class=\"fa fa-lg fa-fw fa-lock\"></i>ลืมรหัสผ่าน ?</h3>\n      <div class=\"form-group\">\n        <label class=\"control-label\">อีเมล์</label>\n        <input class=\"form-control\" type=\"text\" placeholder=\"กรุณากรอกข้อมูล\">\n      </div>\n      <div class=\"form-group btn-container\">\n        <button class=\"btn btn-primary btn-block\"><i class=\"fa fa-unlock fa-lg fa-fw\"></i>รีเซต</button>\n      </div>\n      <div class=\"form-group mt-3\">\n        <p class=\"semibold-text mb-0\"><a href=\"#\" data-toggle=\"flip\"><i class=\"fa fa-angle-left fa-fw\"></i> กลับไปหน้าล็อกอิน</a></p>\n      </div>\n    </form>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-box {\n  min-height: 410px;\n  margin-bottom: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNpbnRvc2gvQW5ndWxhci9pYmlzLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBaUI7RUFDakIsb0JBQW1CLEVBQ3RCIiwiZmlsZSI6Ii4uLy4uL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tYm94IHtcbiAgICBtaW4taGVpZ2h0OiA0MTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.url */ "./src/app/app.url.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shareds_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shareds/services/alert.service */ "./src/app/shareds/services/alert.service.ts");
/* harmony import */ var src_app_shareds_services_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shareds/services/account.service */ "./src/app/shareds/services/account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_auth_auth_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/auth/auth.url */ "./src/app/auth/auth.url.ts");
/* harmony import */ var src_app_shareds_services_authen_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shareds/services/authen.service */ "./src/app/shareds/services/authen.service.ts");









var LoginComponent = /** @class */ (function () {
    function LoginComponent(builder, alert, account, router, authen) {
        this.builder = builder;
        this.alert = alert;
        this.account = account;
        this.router = router;
        this.authen = authen;
        this.AppURL = src_app_app_url__WEBPACK_IMPORTED_MODULE_2__["AppURL"];
        this.initialFormData();
    }
    LoginComponent.prototype.ngOnInit = function () {
        App.initialLoadPageForgotPassword();
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.invalid)
            return this.alert.something_wrong();
        return this.account
            .onLogin(this.form.value)
            .then(function (res) {
            _this.alert.notify("เข้าสู่ระบบสำเร็จ");
            _this.authen.setAuthentication(res.accessToken);
            _this.router.navigate(['/', src_app_app_url__WEBPACK_IMPORTED_MODULE_2__["AppURL"].Auth, src_app_auth_auth_url__WEBPACK_IMPORTED_MODULE_7__["AuthURL"].Dashboard]);
        })
            .catch(function (err) { return _this.alert.notify(err.Message); });
    };
    LoginComponent.prototype.initialFormData = function () {
        this.form = this.builder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            remember: [true]
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_shareds_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            src_app_shareds_services_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_shareds_services_authen_service__WEBPACK_IMPORTED_MODULE_8__["AuthenService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"material-half-bg\">\n  <div class=\"cover\"></div>\n</section>\n<section class=\"login-content\">\n  <div class=\"logo\">\n    <h1>IbisTour</h1>\n  </div>\n  <div class=\"login-box\">\n    <form class=\"login-form\" action=\"index.html\">\n      <h3 class=\"login-head\"><i class=\"fa fa-lg fa-fw fa-user\"></i>ลงทะเบียน</h3>\n      <div class=\"form-group\">\n        <label class=\"control-label\">ชื่อ</label>\n        <input class=\"form-control\" type=\"text\" placeholder=\"กรุณากรอกข้อมูล\" autofocus>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">นามสกุล</label>\n        <input class=\"form-control\" type=\"password\" placeholder=\"กรุณากรอกข้อมูล\">\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">เลขประชาชน</label>\n        <input class=\"form-control\" type=\"text\" placeholder=\"กรุณากรอกข้อมูล\">\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">อีเมล์</label>\n        <input class=\"form-control\" type=\"text\" placeholder=\"กรุณากรอกข้อมูล\">\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">รหัสผ่าน</label>\n        <input class=\"form-control\" type=\"text\" placeholder=\"กรุณากรอกข้อมูล\">\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">ยืนยันรหัสผ่าน</label>\n        <input class=\"form-control\" type=\"text\" placeholder=\"กรุณากรอกข้อมูล\">\n      </div>\n      <div class=\"form-group btn-container\">\n        <button class=\"btn btn-primary btn-block\"><i class=\"fa fa-sign-in fa-lg fa-fw\"></i>ลงทะเบียน</button>\n        <p class=\"semibold-text mb-2 text-center mt-3\"><a [routerLink]=\"['/',AppURL.Login]\">เข้าสู่ระบบ</a></p>\n      </div>\n    </form>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/register/register.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-box {\n  min-height: 700px;\n  margin-bottom: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNpbnRvc2gvQW5ndWxhci9pYmlzLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBaUI7RUFDakIsb0JBQW1CLEVBQ3RCIiwiZmlsZSI6Ii4uLy4uL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tYm94IHtcbiAgICBtaW4taGVpZ2h0OiA3MDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.url */ "./src/app/app.url.ts");



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
        this.AppURL = src_app_app_url__WEBPACK_IMPORTED_MODULE_2__["AppURL"];
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/components/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/shareds/components/auth-content/auth-content.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/shareds/components/auth-content/auth-content.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-auth-navbar></app-auth-navbar>\n<app-auth-sidebar></app-auth-sidebar>\n<main class=\"app-content\">\n  <ng-content></ng-content>\n</main>"

/***/ }),

/***/ "./src/app/shareds/components/auth-content/auth-content.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/shareds/components/auth-content/auth-content.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9zaGFyZWRzL2NvbXBvbmVudHMvYXV0aC1jb250ZW50L2F1dGgtY29udGVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shareds/components/auth-content/auth-content.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shareds/components/auth-content/auth-content.component.ts ***!
  \***************************************************************************/
/*! exports provided: AuthContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContentComponent", function() { return AuthContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthContentComponent = /** @class */ (function () {
    function AuthContentComponent() {
    }
    AuthContentComponent.prototype.ngOnInit = function () {
        App.initialToggleBar();
    };
    AuthContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth-content',
            template: __webpack_require__(/*! ./auth-content.component.html */ "./src/app/shareds/components/auth-content/auth-content.component.html"),
            styles: [__webpack_require__(/*! ./auth-content.component.scss */ "./src/app/shareds/components/auth-content/auth-content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthContentComponent);
    return AuthContentComponent;
}());



/***/ }),

/***/ "./src/app/shareds/components/auth-navbar/auth-navbar.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/shareds/components/auth-navbar/auth-navbar.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar-->\n<header class=\"app-header\"><a class=\"app-header__logo\" href=\"index.html\">IbisTour</a>\n  <!-- Sidebar toggle button--><a class=\"app-sidebar__toggle\" href=\"#\" data-toggle=\"sidebar\" aria-label=\"Hide Sidebar\"></a>\n  <!-- Navbar Right Menu-->\n  <ul class=\"app-nav\">\n    <li class=\"app-search\">\n      <input class=\"app-search__input\" type=\"search\" placeholder=\"Search\">\n      <button class=\"app-search__button\"><i class=\"fa fa-search\"></i></button>\n    </li>\n    <!--Notification Menu-->\n    <li class=\"dropdown\"><a class=\"app-nav__item\" href=\"#\" data-toggle=\"dropdown\" aria-label=\"Show notifications\"><i class=\"fa fa-bell-o fa-lg\"></i></a>\n      <ul class=\"app-notification dropdown-menu dropdown-menu-right\">\n        <li class=\"app-notification__title\">You have 4 new notifications.</li>\n        <div class=\"app-notification__content\">\n          <li><a class=\"app-notification__item\" href=\"javascript:;\"><span class=\"app-notification__icon\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-circle fa-stack-2x text-primary\"></i><i class=\"fa fa-envelope fa-stack-1x fa-inverse\"></i></span></span>\n              <div>\n                <p class=\"app-notification__message\">Lisa sent you a mail</p>\n                <p class=\"app-notification__meta\">2 min ago</p>\n              </div></a></li>\n          <li><a class=\"app-notification__item\" href=\"javascript:;\"><span class=\"app-notification__icon\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-circle fa-stack-2x text-danger\"></i><i class=\"fa fa-hdd-o fa-stack-1x fa-inverse\"></i></span></span>\n              <div>\n                <p class=\"app-notification__message\">Mail server not working</p>\n                <p class=\"app-notification__meta\">5 min ago</p>\n              </div></a></li>\n          <li><a class=\"app-notification__item\" href=\"javascript:;\"><span class=\"app-notification__icon\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-circle fa-stack-2x text-success\"></i><i class=\"fa fa-money fa-stack-1x fa-inverse\"></i></span></span>\n              <div>\n                <p class=\"app-notification__message\">Transaction complete</p>\n                <p class=\"app-notification__meta\">2 days ago</p>\n              </div></a></li>\n          <div class=\"app-notification__content\">\n            <li><a class=\"app-notification__item\" href=\"javascript:;\"><span class=\"app-notification__icon\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-circle fa-stack-2x text-primary\"></i><i class=\"fa fa-envelope fa-stack-1x fa-inverse\"></i></span></span>\n                <div>\n                  <p class=\"app-notification__message\">Lisa sent you a mail</p>\n                  <p class=\"app-notification__meta\">2 min ago</p>\n                </div></a></li>\n            <li><a class=\"app-notification__item\" href=\"javascript:;\"><span class=\"app-notification__icon\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-circle fa-stack-2x text-danger\"></i><i class=\"fa fa-hdd-o fa-stack-1x fa-inverse\"></i></span></span>\n                <div>\n                  <p class=\"app-notification__message\">Mail server not working</p>\n                  <p class=\"app-notification__meta\">5 min ago</p>\n                </div></a></li>\n            <li><a class=\"app-notification__item\" href=\"javascript:;\"><span class=\"app-notification__icon\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-circle fa-stack-2x text-success\"></i><i class=\"fa fa-money fa-stack-1x fa-inverse\"></i></span></span>\n                <div>\n                  <p class=\"app-notification__message\">Transaction complete</p>\n                  <p class=\"app-notification__meta\">2 days ago</p>\n                </div></a></li>\n          </div>\n        </div>\n        <li class=\"app-notification__footer\"><a href=\"#\">See all notifications.</a></li>\n      </ul>\n    </li>\n    <!-- User Menu-->\n    <li class=\"dropdown\"><a class=\"app-nav__item\" href=\"#\" data-toggle=\"dropdown\" aria-label=\"Open Profile Menu\"><i class=\"fa fa-user fa-lg\"></i></a>\n      <ul class=\"dropdown-menu settings-menu dropdown-menu-right\">\n        <li><a class=\"dropdown-item\" href=\"page-user.html\"><i class=\"fa fa-cog fa-lg\"></i> ตั้งค่า</a></li>\n        <li><a class=\"dropdown-item\" [routerLink]=\"['/',AppURL.Auth,AuthURL.Profile]\"><i class=\"fa fa-user fa-lg\"></i> ข้อมูลส่วนตัว</a></li>\n        <li><a class=\"dropdown-item\" (click)=\"onLogout()\"><i class=\"fa fa-sign-out fa-lg\"></i> ออกจากระบบ</a></li>\n      </ul>\n    </li>\n  </ul>\n</header>"

/***/ }),

/***/ "./src/app/shareds/components/auth-navbar/auth-navbar.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/shareds/components/auth-navbar/auth-navbar.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi9zaGFyZWRzL2NvbXBvbmVudHMvYXV0aC1uYXZiYXIvYXV0aC1uYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shareds/components/auth-navbar/auth-navbar.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shareds/components/auth-navbar/auth-navbar.component.ts ***!
  \*************************************************************************/
/*! exports provided: AuthNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthNavbarComponent", function() { return AuthNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.url */ "./src/app/app.url.ts");
/* harmony import */ var src_app_auth_auth_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.url */ "./src/app/auth/auth.url.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/shareds/services/alert.service.ts");
/* harmony import */ var _services_authen_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/authen.service */ "./src/app/shareds/services/authen.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var AuthNavbarComponent = /** @class */ (function () {
    function AuthNavbarComponent(alert, authen, router) {
        this.alert = alert;
        this.authen = authen;
        this.router = router;
        this.AppURL = src_app_app_url__WEBPACK_IMPORTED_MODULE_2__["AppURL"];
        this.AuthURL = src_app_auth_auth_url__WEBPACK_IMPORTED_MODULE_3__["AuthURL"];
    }
    AuthNavbarComponent.prototype.ngOnInit = function () {
    };
    AuthNavbarComponent.prototype.onLogout = function () {
        this.authen.clsAuthentication();
        this.alert.notify("ออกจากระบบสำเร็จ", "success");
        this.router.navigate(['/', src_app_app_url__WEBPACK_IMPORTED_MODULE_2__["AppURL"].Login]);
    };
    AuthNavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth-navbar',
            template: __webpack_require__(/*! ./auth-navbar.component.html */ "./src/app/shareds/components/auth-navbar/auth-navbar.component.html"),
            styles: [__webpack_require__(/*! ./auth-navbar.component.scss */ "./src/app/shareds/components/auth-navbar/auth-navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
            _services_authen_service__WEBPACK_IMPORTED_MODULE_5__["AuthenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AuthNavbarComponent);
    return AuthNavbarComponent;
}());



/***/ }),

/***/ "./src/app/shareds/components/auth-sidebar/auth-sidebar.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/shareds/components/auth-sidebar/auth-sidebar.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Sidebar menu-->\n<div class=\"app-sidebar__overlay\" data-toggle=\"sidebar\"></div>\n<aside class=\"app-sidebar\">\n  <div class=\"app-sidebar__user\">\n    <img class=\"app-sidebar__user-avatar\" [src]=\"EmployeeLogin.image\" alt=\"User Image\">\n    <img *ngIf=\"!EmployeeLogin.image\" class=\"app-sidebar__user-avatar\" [src]=\"EmployeeLogin.image\" alt=\"User Image\">\n    <div>\n      <p class=\"app-sidebar__user-name\">{{EmployeeLogin.firstname}} {{EmployeeLogin.lastname}}</p>\n      <p class=\"app-sidebar__user-designation\">{{EmployeeLogin.position}}</p>\n    </div>\n  </div>\n  <ul class=\"app-menu\">\n    <li><a class=\"app-menu__item\" [routerLink]=\"['/',AppURL.Auth,AuthURL.Dashboard]\"><i class=\"app-menu__icon fa fa-dashboard\"></i><span class=\"app-menu__label\">แผงควบคุม</span></a></li>\n    <li class=\"treeview\"><a class=\"app-menu__item\" href=\"#\" data-toggle=\"treeview\"><i class=\"app-menu__icon fa fa-ticket\"></i><span class=\"app-menu__label\">ตั๋ว</span><i class=\"treeview-indicator fa fa-angle-right\"></i></a>\n      <ul class=\"treeview-menu\">\n        <li><a class=\"treeview-item\" href=\"#\"><i class=\"icon fa fa-circle-o\"></i> ออกตั๋ว</a></li>\n        <li><a class=\"treeview-item\" href=\"#\"><i class=\"icon fa fa-circle-o\"></i> คืนตั๋ว</a></li>\n      </ul>\n    </li>\n    <li class=\"treeview\"><a class=\"app-menu__item\" href=\"#\" data-toggle=\"treeview\"><i class=\"app-menu__icon fa fa-users\"></i><span class=\"app-menu__label\">พนักงาน</span><i class=\"treeview-indicator fa fa-angle-right\"></i></a>\n      <ul class=\"treeview-menu\">\n        <li><a class=\"treeview-item\" [routerLink]=\"['/',AppURL.Auth,AuthURL.RegisterEmployee]\"><i class=\"icon fa fa-circle-o\"></i> เพิ่มพนักงาน</a></li>\n        <li><a class=\"treeview-item\" href=\"#\"><i class=\"icon fa fa-circle-o\"></i> ข้อมูลพนักงาน</a></li>\n      </ul>\n    </li>\n    <li class=\"treeview\"><a class=\"app-menu__item\" href=\"#\" data-toggle=\"treeview\"><i class=\"app-menu__icon fa fa-id-card\"></i><span class=\"app-menu__label\">ไกด์/คนขับรถ</span><i class=\"treeview-indicator fa fa-angle-right\"></i></a>\n      <ul class=\"treeview-menu\">\n        <li><a class=\"treeview-item\" [routerLink]=\"['/',AppURL.Auth,AuthURL.RegisterCustomer]\"><i class=\"icon fa fa-circle-o\"></i> เพิ่มไกด์/คนขับรถ</a></li>\n        <li><a class=\"treeview-item\" href=\"#\"><i class=\"icon fa fa-circle-o\"></i> ข้อมูลไกด์/คนขับรถ</a></li>\n      </ul>\n    </li>\n    <li class=\"treeview\"><a class=\"app-menu__item\" href=\"#\" data-toggle=\"treeview\"><i class=\"app-menu__icon fa fa-file-text\"></i><span class=\"app-menu__label\">เอกสาร</span><i class=\"treeview-indicator fa fa-angle-right\"></i></a>\n      <ul class=\"treeview-menu\">\n        <li><a class=\"treeview-item\" href=\"blank-page.html\"><i class=\"icon fa fa-circle-o\"></i> Blank Page</a></li>\n        <li><a class=\"treeview-item\" href=\"page-login.html\"><i class=\"icon fa fa-circle-o\"></i> Login Page</a></li>\n        <li><a class=\"treeview-item\" href=\"page-lockscreen.html\"><i class=\"icon fa fa-circle-o\"></i> Lockscreen Page</a></li>\n        <li><a class=\"treeview-item\" href=\"page-user.html\"><i class=\"icon fa fa-circle-o\"></i> User Page</a></li>\n        <li><a class=\"treeview-item\" href=\"page-invoice.html\"><i class=\"icon fa fa-circle-o\"></i> Invoice Page</a></li>\n        <li><a class=\"treeview-item\" href=\"page-calendar.html\"><i class=\"icon fa fa-circle-o\"></i> Calendar Page</a></li>\n        <li><a class=\"treeview-item\" href=\"page-mailbox.html\"><i class=\"icon fa fa-circle-o\"></i> Mailbox</a></li>\n        <li><a class=\"treeview-item\" href=\"page-error.html\"><i class=\"icon fa fa-circle-o\"></i> Error Page</a></li>\n      </ul>\n    </li>\n  </ul>\n</aside>"

/***/ }),

/***/ "./src/app/shareds/components/auth-sidebar/auth-sidebar.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/shareds/components/auth-sidebar/auth-sidebar.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-sidebar__user-avatar {\n  width: 48px;\n  height: 48px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNpbnRvc2gvQW5ndWxhci9pYmlzLWFwcC9zcmMvYXBwL3NoYXJlZHMvY29tcG9uZW50cy9hdXRoLXNpZGViYXIvYXV0aC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVTtFQUNWLGFBQVcsRUFDZCIsImZpbGUiOiIuLi8uLi9zaGFyZWRzL2NvbXBvbmVudHMvYXV0aC1zaWRlYmFyL2F1dGgtc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtc2lkZWJhcl9fdXNlci1hdmF0YXJ7XG4gICAgd2lkdGg6NDhweDtcbiAgICBoZWlnaHQ6NDhweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shareds/components/auth-sidebar/auth-sidebar.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shareds/components/auth-sidebar/auth-sidebar.component.ts ***!
  \***************************************************************************/
/*! exports provided: AuthSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSidebarComponent", function() { return AuthSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.url */ "./src/app/app.url.ts");
/* harmony import */ var src_app_auth_auth_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.url */ "./src/app/auth/auth.url.ts");
/* harmony import */ var _services_authen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authen.service */ "./src/app/shareds/services/authen.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/shareds/services/alert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/account.service */ "./src/app/shareds/services/account.service.ts");








var AuthSidebarComponent = /** @class */ (function () {
    function AuthSidebarComponent(authen, alert, router, account) {
        var _this = this;
        this.authen = authen;
        this.alert = alert;
        this.router = router;
        this.account = account;
        this.AppURL = src_app_app_url__WEBPACK_IMPORTED_MODULE_2__["AppURL"];
        this.AuthURL = src_app_auth_auth_url__WEBPACK_IMPORTED_MODULE_3__["AuthURL"];
        this.account.
            onGetEmployeeLogin(this.authen.getAuthentication())
            .then(function (employeeLogin) { return _this.EmployeeLogin = employeeLogin; })
            .catch(function (err) {
            _this.alert.notify("Access Token ไม่ถูกต้อง");
            _this.router.navigate(['/', src_app_app_url__WEBPACK_IMPORTED_MODULE_2__["AppURL"].Login]);
        });
    }
    AuthSidebarComponent.prototype.ngOnInit = function () {
    };
    AuthSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth-sidebar',
            template: __webpack_require__(/*! ./auth-sidebar.component.html */ "./src/app/shareds/components/auth-sidebar/auth-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./auth-sidebar.component.scss */ "./src/app/shareds/components/auth-sidebar/auth-sidebar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authen_service__WEBPACK_IMPORTED_MODULE_4__["AuthenService"],
            _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _services_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"]])
    ], AuthSidebarComponent);
    return AuthSidebarComponent;
}());



/***/ }),

/***/ "./src/app/shareds/services/account.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shareds/services/account.service.ts ***!
  \*****************************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])();
var AccountService = /** @class */ (function () {
    function AccountService() {
        this.mockUserData = [
            {
                id: '1',
                firstname: "อัมม้าร",
                lastname: "โลหิตคุปต์",
                cardid: "1419901780246",
                salary: 8000000,
                email: "dontwaves@gmail.com",
                password: "123456",
                position: "โปรแกรมเมอร์",
                image: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg',
                createDate: new Date,
                updateDate: new Date
            },
            {
                id: '2',
                firstname: "Ammar",
                lastname: "Lohitkupt",
                cardid: "1419901780246",
                salary: 8000000,
                email: "mail@gmail.com",
                password: "123456",
                position: "โปรแกรมเมอร์",
                image: './../../assets/images/no-image.jpg',
                createDate: new Date,
                updateDate: new Date
            },
            {
                id: '3',
                firstname: "XXXX",
                lastname: "xxxx",
                cardid: "1419901780246",
                salary: 8000000,
                email: "mail@mail.com",
                password: "123456",
                position: "โปรแกรมเมอร์",
                image: './../../assets/images/no-image.jpg',
                createDate: new Date,
                updateDate: new Date
            }
        ];
    }
    AccountService.prototype.onGetEmployeeLogin = function (accessToken) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var employeeLogin = _this.mockUserData.find(function (employeeLogin) { return accessToken == employeeLogin.id; });
            if (!employeeLogin)
                return reject({ Message: 'Access Token ไม่ถูกต้อง' });
            resolve(employeeLogin);
        });
    };
    AccountService.prototype.onRegister = function (model) {
        return new Promise(function (resolve, reject) {
            resolve(model);
        });
    };
    AccountService.prototype.onLogin = function (model) {
        var item = this.mockUserData.find(function (item) { return model.email == item.email && model.password == item.password; });
        return new Promise(function (resolve, reject) {
            if (!item)
                return reject({ Message: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง' });
            resolve({
                accessToken: item.id
            });
        });
    };
    return AccountService;
}());



/***/ }),

/***/ "./src/app/shareds/services/alert.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shareds/services/alert.service.ts ***!
  \***************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlertService = /** @class */ (function () {
    function AlertService() {
    }
    AlertService.prototype.notify = function (message, type) {
        if (type === void 0) { type = 'warning'; }
        $.notify({
            // options
            icon: 'glyphicon glyphicon-warning-sign',
            title: 'แจ้งเตือน:',
            message: message,
        }, {
            // settings
            element: 'body',
            position: null,
            type: type,
            allow_dismiss: true,
            newest_on_top: false,
            showProgressbar: false,
            placement: {
                from: "top",
                align: "right"
            },
            offset: 20,
            spacing: 10,
            z_index: 1031,
            delay: 5000,
            timer: 1000,
            url_target: '_blank',
            mouse_over: null,
            animate: {
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
            },
            onShow: null,
            onShown: null,
            onClose: null,
            onClosed: null,
            icon_type: 'class',
            template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
                '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
                '<span data-notify="icon"></span> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    AlertService.prototype.something_wrong = function (message) {
        if (message === void 0) { message = 'ข้อมูลบางอย่างไมถูกต้อง'; }
        this.notify(message);
    };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/shareds/services/authen.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shareds/services/authen.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenService", function() { return AuthenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])();
var AuthenService = /** @class */ (function () {
    function AuthenService() {
        this.accessKey = "accessKey";
    }
    AuthenService.prototype.setAuthentication = function (accessToken) {
        localStorage.setItem(this.accessKey, accessToken);
    };
    AuthenService.prototype.getAuthentication = function () {
        return localStorage.getItem(this.accessKey);
    };
    AuthenService.prototype.clsAuthentication = function () {
        localStorage.removeItem(this.accessKey);
    };
    return AuthenService;
}());



/***/ }),

/***/ "./src/app/shareds/shareds.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shareds/shareds.module.ts ***!
  \*******************************************/
/*! exports provided: SharedsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedsModule", function() { return SharedsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _components_auth_navbar_auth_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/auth-navbar/auth-navbar.component */ "./src/app/shareds/components/auth-navbar/auth-navbar.component.ts");
/* harmony import */ var _components_auth_sidebar_auth_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/auth-sidebar/auth-sidebar.component */ "./src/app/shareds/components/auth-sidebar/auth-sidebar.component.ts");
/* harmony import */ var _components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/auth-content/auth-content.component */ "./src/app/shareds/components/auth-content/auth-content.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/alert.service */ "./src/app/shareds/services/alert.service.ts");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/account.service */ "./src/app/shareds/services/account.service.ts");











var SharedsModule = /** @class */ (function () {
    function SharedsModule() {
    }
    SharedsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_auth_navbar_auth_navbar_component__WEBPACK_IMPORTED_MODULE_5__["AuthNavbarComponent"],
                _components_auth_sidebar_auth_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["AuthSidebarComponent"],
                _components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_7__["AuthContentComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            exports: [
                _components_auth_navbar_auth_navbar_component__WEBPACK_IMPORTED_MODULE_5__["AuthNavbarComponent"],
                _components_auth_sidebar_auth_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["AuthSidebarComponent"],
                _components_auth_content_auth_content_component__WEBPACK_IMPORTED_MODULE_7__["AuthContentComponent"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [
                _services_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"],
                _services_account_service__WEBPACK_IMPORTED_MODULE_10__["AccountService"]
            ]
        })
    ], SharedsModule);
    return SharedsModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/macintosh/Angular/ibis-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map