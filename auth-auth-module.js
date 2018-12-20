(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/auth/components/dashboard/dashboard.component.ts");
/* harmony import */ var _auth_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.routes */ "./src/app/auth/auth.routes.ts");
/* harmony import */ var _shareds_shareds_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shareds/shareds.module */ "./src/app/shareds/shareds.module.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/auth/components/profile/profile.component.ts");
/* harmony import */ var _components_register_employee_register_employee_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/register-employee/register-employee.component */ "./src/app/auth/components/register-employee/register-employee.component.ts");
/* harmony import */ var _components_register_customer_register_customer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/register-customer/register-customer.component */ "./src/app/auth/components/register-customer/register-customer.component.ts");









var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], _components_register_employee_register_employee_component__WEBPACK_IMPORTED_MODULE_7__["RegisterEmployeeComponent"], _components_register_customer_register_customer_component__WEBPACK_IMPORTED_MODULE_8__["RegisterCustomerComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _auth_routes__WEBPACK_IMPORTED_MODULE_4__["AuthRoutes"],
                _shareds_shareds_module__WEBPACK_IMPORTED_MODULE_5__["SharedsModule"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.routes.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.routes.ts ***!
  \*************************************/
/*! exports provided: AuthRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutes", function() { return AuthRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.url */ "./src/app/auth/auth.url.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/auth/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/auth/components/profile/profile.component.ts");
/* harmony import */ var _components_register_employee_register_employee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register-employee/register-employee.component */ "./src/app/auth/components/register-employee/register-employee.component.ts");
/* harmony import */ var _components_register_customer_register_customer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/register-customer/register-customer.component */ "./src/app/auth/components/register-customer/register-customer.component.ts");






var RouteList = [
    { path: '', redirectTo: _auth_url__WEBPACK_IMPORTED_MODULE_1__["AuthURL"].Dashboard, pathMatch: 'full' },
    { path: _auth_url__WEBPACK_IMPORTED_MODULE_1__["AuthURL"].Dashboard, component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: _auth_url__WEBPACK_IMPORTED_MODULE_1__["AuthURL"].Profile, component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] },
    { path: _auth_url__WEBPACK_IMPORTED_MODULE_1__["AuthURL"].RegisterEmployee, component: _components_register_employee_register_employee_component__WEBPACK_IMPORTED_MODULE_4__["RegisterEmployeeComponent"] },
    { path: _auth_url__WEBPACK_IMPORTED_MODULE_1__["AuthURL"].RegisterCustomer, component: _components_register_customer_register_customer_component__WEBPACK_IMPORTED_MODULE_5__["RegisterCustomerComponent"] }
];
var AuthRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(RouteList);


/***/ }),

/***/ "./src/app/auth/components/dashboard/dashboard.component.html":
/*!********************************************************************!*\
  !*** ./src/app/auth/components/dashboard/dashboard.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-auth-content>\n    <div class=\"app-title\">\n        <div>\n          <h1><i class=\"fa fa-dashboard\"></i> แผงควบคุม</h1>\n          <p>ดูรายการต่างๆ ที่นี่</p>\n        </div>\n        <ul class=\"app-breadcrumb breadcrumb\">\n          <li class=\"breadcrumb-item\"><i class=\"fa fa-home fa-lg\"></i></li>\n          <li class=\"breadcrumb-item\"><a href=\"#\">แผงควบคุม</a></li>\n        </ul>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6 col-lg-3\">\n          <div class=\"widget-small primary coloured-icon\"><i class=\"icon fa fa-users fa-3x\"></i>\n            <div class=\"info\">\n              <h4>พนักงาน</h4>\n              <p><b>5</b></p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6 col-lg-3\">\n          <div class=\"widget-small info coloured-icon\"><i class=\"icon fa fa-thumbs-o-up fa-3x\"></i>\n            <div class=\"info\">\n              <h4>ลูกค้า</h4>\n              <p><b>25</b></p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6 col-lg-3\">\n          <div class=\"widget-small warning coloured-icon\"><i class=\"icon fa fa-files-o fa-3x\"></i>\n            <div class=\"info\">\n              <h4>จำนวนที่จอง</h4>\n              <p><b>10</b></p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6 col-lg-3\">\n          <div class=\"widget-small danger coloured-icon\"><i class=\"icon fa fa-star fa-3x\"></i>\n            <div class=\"info\">\n              <h4>รายได้</h4>\n              <p><b>500</b></p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"tile\">\n            <h3 class=\"tile-title\">กราฟแสดงยอดต่อเดือน</h3>\n            <div class=\"embed-responsive embed-responsive-16by9\">\n              <canvas class=\"embed-responsive-item\" id=\"lineChartDemo\"></canvas>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"tile\">\n            <h3 class=\"tile-title\">สถานที่ที่สั่งจอง</h3>\n            <div class=\"embed-responsive embed-responsive-16by9\">\n              <canvas class=\"embed-responsive-item\" id=\"pieChartDemo\"></canvas>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"tile\">\n            <h3 class=\"tile-title\">Features</h3>\n            <ul>\n              <li>Built with Bootstrap 4, SASS and PUG.js</li>\n              <li>Fully responsive and modular code</li>\n              <li>Seven pages including login, user profile and print friendly invoice page</li>\n              <li>Smart integration of forgot password on login page</li>\n              <li>Chart.js integration to display responsive charts</li>\n              <li>Widgets to effectively display statistics</li>\n              <li>Data tables with sort, search and paginate functionality</li>\n              <li>Custom form elements like toggle buttons, auto-complete, tags and date-picker</li>\n              <li>A inbuilt toast library for providing meaningful response messages to user's actions</li>\n            </ul>\n            <p>Vali is a free and responsive admin theme built with Bootstrap 4, SASS and PUG.js. It's fully customizable and modular.</p>\n            <p>Vali is is light-weight, expendable and good looking theme. The theme has all the features required in a dashboard theme but this features are built like plug and play module. Take a look at the <a href=\"http://pratikborsadiya.in/blog/vali-admin\" target=\"_blank\">documentation</a> about customizing the theme colors and functionality.</p>\n            <p class=\"mt-4 mb-4\"><a class=\"btn btn-primary mr-2 mb-2\" href=\"http://pratikborsadiya.in/blog/vali-admin\" target=\"_blank\"><i class=\"fa fa-file\"></i>Docs</a><a class=\"btn btn-info mr-2 mb-2\" href=\"https://github.com/pratikborsadiya/vali-admin\" target=\"_blank\"><i class=\"fa fa-github\"></i>GitHub</a><a class=\"btn btn-success mr-2 mb-2\" href=\"https://github.com/pratikborsadiya/vali-admin/archive/master.zip\" target=\"_blank\"><i class=\"fa fa-download\"></i>Download</a></p>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"tile\">\n            <h3 class=\"tile-title\">Compatibility with frameworks</h3>\n            <p>This theme is not built for a specific framework or technology like Angular or React etc. But due to it's modular nature it's very easy to incorporate it into any front-end or back-end framework like Angular, React or Laravel.</p>\n            <p>Go to <a href=\"http://pratikborsadiya.in/blog/vali-admin\" target=\"_blank\">documentation</a> for more details about integrating this theme with various frameworks.</p>\n            <p>The source code is available on GitHub. If anything is missing or weird please report it as an issue on <a href=\"https://github.com/pratikborsadiya/vali-admin\" target=\"_blank\">GitHub</a>. If you want to contribute to this theme pull requests are always welcome.</p>\n          </div>\n        </div>\n      </div>\n</app-auth-content>\n\n"

/***/ }),

/***/ "./src/app/auth/components/dashboard/dashboard.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/auth/components/dashboard/dashboard.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/auth/components/dashboard/dashboard.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/auth/components/dashboard/dashboard.component.ts ***!
  \******************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.initialLoadChartJS();
    };
    DashboardComponent.prototype.initialLoadChartJS = function () {
        var data = {
            labels: ["January", "February", "March", "April", "May"],
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [65, 59, 80, 81, 56]
                },
                {
                    label: "My Second dataset",
                    fillColor: "rgba(151,187,205,0.2)",
                    strokeColor: "rgba(151,187,205,1)",
                    pointColor: "rgba(151,187,205,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,1)",
                    data: [28, 48, 40, 19, 86]
                }
            ]
        };
        var pdata = [
            {
                value: 300,
                color: "#46BFBD",
                highlight: "#5AD3D1",
                label: "Complete"
            },
            {
                value: 50,
                color: "#F7464A",
                highlight: "#FF5A5E",
                label: "In-Progress"
            }
        ];
        var ctxl = $("#lineChartDemo").get(0).getContext("2d");
        var lineChart = new Chart(ctxl).Line(data);
        var ctxp = $("#pieChartDemo").get(0).getContext("2d");
        var pieChart = new Chart(ctxp).Pie(pdata);
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/auth/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/auth/components/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/auth/components/profile/profile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/auth/components/profile/profile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-auth-content>\n    <div class=\"app-title\">\n        <div>\n          <h1><i class=\"fa fa-dashboard\"></i> Blank Page</h1>\n          <p>Start a beautiful journey here</p>\n        </div>\n        <ul class=\"app-breadcrumb breadcrumb\">\n          <li class=\"breadcrumb-item\"><i class=\"fa fa-home fa-lg\"></i></li>\n          <li class=\"breadcrumb-item\"><a href=\"#\">Blank Page</a></li>\n        </ul>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"tile\">\n            <div class=\"tile-body\">Create a beautiful dashboard</div>\n          </div>\n        </div>\n      </div>\n</app-auth-content>"

/***/ }),

/***/ "./src/app/auth/components/profile/profile.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/auth/components/profile/profile.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/components/profile/profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/auth/components/profile/profile.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/auth/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/auth/components/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/auth/components/register-customer/register-customer.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/auth/components/register-customer/register-customer.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-auth-content>\n    <div class=\"app-title\">\n        <div>\n          <h1><i class=\"fa fa-dashboard\"></i> เพิ่มข้อมูลคนขับรถ/ไกด์</h1>\n          <p>เพิ่มข้อมูลลูกค้าที่นี้</p>\n        </div>\n        <ul class=\"app-breadcrumb breadcrumb\">\n          <li class=\"breadcrumb-item\"><i class=\"fa fa-home fa-lg\"></i></li>\n          <li class=\"breadcrumb-item\"><a href=\"#\">เพิ่มข้อมูลคนขับรถ/ไกด์</a></li>\n        </ul>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"tile\">\n            <div class=\"tile-body\">Create a beautiful dashboard</div>\n          </div>\n        </div>\n      </div>\n</app-auth-content>"

/***/ }),

/***/ "./src/app/auth/components/register-customer/register-customer.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/auth/components/register-customer/register-customer.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci1jdXN0b21lci9yZWdpc3Rlci1jdXN0b21lci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/components/register-customer/register-customer.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/auth/components/register-customer/register-customer.component.ts ***!
  \**********************************************************************************/
/*! exports provided: RegisterCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterCustomerComponent", function() { return RegisterCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterCustomerComponent = /** @class */ (function () {
    function RegisterCustomerComponent() {
    }
    RegisterCustomerComponent.prototype.ngOnInit = function () {
    };
    RegisterCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-customer',
            template: __webpack_require__(/*! ./register-customer.component.html */ "./src/app/auth/components/register-customer/register-customer.component.html"),
            styles: [__webpack_require__(/*! ./register-customer.component.scss */ "./src/app/auth/components/register-customer/register-customer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterCustomerComponent);
    return RegisterCustomerComponent;
}());



/***/ }),

/***/ "./src/app/auth/components/register-employee/register-employee.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/auth/components/register-employee/register-employee.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-auth-content>\n    <section class=\"login-content\">\n      <div class=\"login-box\">\n        <form class=\"login-form\" (submit)=\"onSubmit()\" [formGroup]=\"form\">\n          <h3 class=\"login-head\"><i class=\"fa fa-lg fa-fw fa-user\"></i>ลงทะเบียนพนักงาน</h3>\n          <div class=\"form-group\">\n            <label class=\"control-label\">ชื่อ</label>\n            <input class=\"form-control\" formControlName=\"firstname\" type=\"text\" placeholder=\"กรุณากรอกข้อมูล\" autofocus>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label\">นามสกุล</label>\n            <input class=\"form-control\" formControlName=\"lastname\" type=\"text\" placeholder=\"กรุณากรอกข้อมูล\">\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label\">เลขประชาชน</label>\n            <input class=\"form-control\" formControlName=\"cardid\" type=\"text\" placeholder=\"กรุณากรอกข้อมูล\">\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label\">เงินเดือน</label>\n            <input class=\"form-control\" formControlName=\"salary\" type=\"text\" placeholder=\"กรุณากรอกข้อมูล\">\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label\">อีเมล์</label>\n            <input class=\"form-control\" formControlName=\"email\" type=\"text\" placeholder=\"กรุณากรอกข้อมูล\">\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label\">รหัสผ่าน</label>\n            <input class=\"form-control\" formControlName=\"password\" type=\"password\" placeholder=\"กรุณากรอกข้อมูล\">\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label\">ยืนยันรหัสผ่าน</label>\n            <input class=\"form-control\" formControlName=\"cpassword\" type=\"password\" placeholder=\"กรุณากรอกข้อมูล\">\n          </div>\n          <div class=\"form-group btn-container\">\n            <button class=\"btn btn-primary btn-block\"><i class=\"fa fa-sign-in fa-lg fa-fw\"></i>ลงทะเบียน</button>\n          </div>\n        </form>\n      </div>\n    </section>\n</app-auth-content>"

/***/ }),

/***/ "./src/app/auth/components/register-employee/register-employee.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/auth/components/register-employee/register-employee.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-box {\n  min-height: 800px;\n  margin-bottom: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNpbnRvc2gvQW5ndWxhci9pYmlzLWFwcC9zcmMvYXBwL2F1dGgvY29tcG9uZW50cy9yZWdpc3Rlci1lbXBsb3llZS9yZWdpc3Rlci1lbXBsb3llZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFpQjtFQUNqQixvQkFBbUIsRUFDdEIiLCJmaWxlIjoicmVnaXN0ZXItZW1wbG95ZWUvcmVnaXN0ZXItZW1wbG95ZWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tYm94IHtcbiAgICBtaW4taGVpZ2h0OiA4MDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/auth/components/register-employee/register-employee.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/auth/components/register-employee/register-employee.component.ts ***!
  \**********************************************************************************/
/*! exports provided: RegisterEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterEmployeeComponent", function() { return RegisterEmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_app_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.url */ "./src/app/app.url.ts");
/* harmony import */ var _auth_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth.url */ "./src/app/auth/auth.url.ts");
/* harmony import */ var src_app_shareds_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shareds/services/alert.service */ "./src/app/shareds/services/alert.service.ts");
/* harmony import */ var src_app_shareds_services_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shareds/services/account.service */ "./src/app/shareds/services/account.service.ts");







var RegisterEmployeeComponent = /** @class */ (function () {
    function RegisterEmployeeComponent(builder, alert, account) {
        this.builder = builder;
        this.alert = alert;
        this.account = account;
        this.AppURL = src_app_app_url__WEBPACK_IMPORTED_MODULE_3__["AppURL"];
        this.AuthURL = _auth_url__WEBPACK_IMPORTED_MODULE_4__["AuthURL"];
        this.initialCreateFormData();
    }
    RegisterEmployeeComponent.prototype.ngOnInit = function () {
    };
    RegisterEmployeeComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.invalid)
            return this.alert.something_wrong();
        this.account.onRegister(this.form.value)
            .then(function (res) { return console.log(res); })
            .catch(function (err) { return _this.alert.notify(err.Message); });
    };
    RegisterEmployeeComponent.prototype.initialCreateFormData = function () {
        this.form = this.builder.group({
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            cardid: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            salary: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[A-z0-9]{6,15}$/)]],
            cpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.comparePassword('password')]]
        });
    };
    RegisterEmployeeComponent.prototype.comparePassword = function (passwordField) {
        return function (confirm_password) {
            if (!confirm_password.parent)
                return;
            var password = confirm_password.parent.get(passwordField);
            var passwordSubscribe = password.valueChanges.subscribe(function () {
                confirm_password.updateValueAndValidity();
                passwordSubscribe.unsubscribe();
            });
            if (confirm_password.value === password.value)
                return;
            return { compare: true };
        };
    };
    RegisterEmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-employee',
            template: __webpack_require__(/*! ./register-employee.component.html */ "./src/app/auth/components/register-employee/register-employee.component.html"),
            styles: [__webpack_require__(/*! ./register-employee.component.scss */ "./src/app/auth/components/register-employee/register-employee.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_shareds_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            src_app_shareds_services_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"]])
    ], RegisterEmployeeComponent);
    return RegisterEmployeeComponent;
}());



/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map