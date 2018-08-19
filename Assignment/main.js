(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/all-country/all-country.component.css":
/*!*******************************************************!*\
  !*** ./src/app/all-country/all-country.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/all-country/all-country.component.html":
/*!********************************************************!*\
  !*** ./src/app/all-country/all-country.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br>\n\n\n<div class=\"container\">\n  <div class=\"row\">\n      <a class=\"btn btn-primary\" [routerLink]=\"['/']\">Home</a>\n      <a class=\"btn btn-warning\" (click)=\"goBack()\" style=\"margin-left: 2vw\">Go Back </a>\n  </div>\n    <div class='row heading'><p class=\"para\"></p></div>\n  <div class=\"row\" *ngIf=\"countryData.length>0\">\n\n      <div class=\"card col-md-4 col-xs-12 col-sm-6 \" *ngFor=\"let country of countryData\" style=\"width: 18rem;margin-bottom: 2vh\" >\n        <img class=\"card-img-top\" src=\"{{country.flag}}\" alt=\"Country Flag\" style=\"height:30vh;\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{country.name}}</h5>\n          <p class=\"card-text\">Please find brief about {{country.name}} below</p>\n          <p>\n          <Strong>Capital</Strong>:{{country.capital}}<br>\n          <Strong>TimeZone</Strong>:{{country.timezones[0]}}<br>\n          <Strong>Population</Strong>:{{country.population}}<br>\n          </p>\n          <a class=\"btn btn-primary click\" [routerLink]=\"['/singleCountry',country.name]\">Explore More</a>\n          </div>\n      </div>\n\n  </div>\n\n  <div class=\"row\" >\n      <div class=\"card col-md-4 col-xs-12 col-sm-6 \" style=\"width: 18rem;margin-bottom: 2vh\" >\n        <img class=\"card-img-top\" src=\"{{countryData.flag}}\" alt=\"Country Flag\" style=\"height:30vh;\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{countryData.name}}</h5>\n          <p class=\"card-text\">Please find brief about {{countryData.name}} below</p>\n          <p>\n          <Strong>Capital</Strong>:{{countryData.capital}}<br>\n          <Strong>TimeZone</Strong>:{{countryData.timezones}}<br>\n          <Strong>Population</Strong>:{{countryData.population}}<br>\n          </p>\n          <a class=\"btn btn-primary click\" [routerLink]=\"['/singleCountry',countryData.name]\">Explore More</a>\n          </div>\n      </div>\n\n  </div>\n \n\n  <div class=\"row\">\n\n      \n  </div>\n\n  \n\n</div>"

/***/ }),

/***/ "./src/app/all-country/all-country.component.ts":
/*!******************************************************!*\
  !*** ./src/app/all-country/all-country.component.ts ***!
  \******************************************************/
/*! exports provided: AllCountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllCountryComponent", function() { return AllCountryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-service.service */ "./src/app/api-service.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AllCountryComponent = /** @class */ (function () {
    function AllCountryComponent(routes, apiService, router, location) {
        this.routes = routes;
        this.apiService = apiService;
        this.router = router;
        this.location = location;
        this.countryData = [];
        this.temporaryData = [];
    }
    AllCountryComponent.prototype.ngOnInit = function () {
        var _this = this;
        var region = this.routes.snapshot.paramMap.get('region');
        if (region.substr(region.length - 3) === '*c*') {
            var currencyName_1 = region.slice(0, -3);
            this.apiService.getAllCountrywithOutRegion().subscribe(function (data) {
                _this.countryData = data;
                jquery__WEBPACK_IMPORTED_MODULE_3___default()('.para').append("\n          <h5>Please find the list of Countries using Currency : " + _this.countryData[0].currencies[0].name + "</h5>\n          ");
                for (var index = 0; index < _this.countryData.length; index++) {
                    if (_this.countryData[index].currencies[0].name == currencyName_1) {
                        _this.temporaryData = _this.countryData[index];
                    }
                }
                _this.countryData = _this.temporaryData;
            }, function (error) {
                console.log("some error occured in all-country");
                console.log(error.errorMessage);
            });
        }
        else if (region.substr(region.length - 3) === '*l*') {
            //for language
            var LanguageName_1 = region.slice(0, -3);
            this.apiService.getAllCountrywithOutRegion().subscribe(function (data) {
                _this.countryData = data;
                jquery__WEBPACK_IMPORTED_MODULE_3___default()('.para').append("\n          <h5>Please find the list of Countries using Language : " + _this.countryData[0].languages[0].name + "</h5>\n          ");
                for (var index = 0; index < _this.countryData.length; index++) {
                    if (_this.countryData[index].languages[0].name == LanguageName_1) {
                        _this.temporaryData = _this.countryData[index];
                    }
                }
                _this.countryData = _this.temporaryData;
            }, function (error) {
                console.log("some error occured in all-country");
                console.log(error.errorMessage);
            });
        }
        else {
            this.apiService.getAllCountry(region).subscribe(function (data) {
                _this.countryData = data;
            }, function (error) {
                console.log("some error occured in all-country");
                console.log(error.errorMessage);
            });
        }
    };
    AllCountryComponent.prototype.goBack = function () {
        this.location.back();
    };
    AllCountryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-country',
            template: __webpack_require__(/*! ./all-country.component.html */ "./src/app/all-country/all-country.component.html"),
            styles: [__webpack_require__(/*! ./all-country.component.css */ "./src/app/all-country/all-country.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], AllCountryComponent);
    return AllCountryComponent;
}());



/***/ }),

/***/ "./src/app/api-service.service.ts":
/*!****************************************!*\
  !*** ./src/app/api-service.service.ts ***!
  \****************************************/
/*! exports provided: ApiServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiServiceService", function() { return ApiServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiServiceService = /** @class */ (function () {
    function ApiServiceService(http) {
        this.http = http;
        this.baseUrl = 'https://restcountries.eu/rest/v2/region/';
    }
    ApiServiceService.prototype.getAllCountry = function (region) {
        var allCountry = this.http.get('https://restcountries.eu/rest/v2/region/' + region.toLowerCase());
        return allCountry;
    };
    ApiServiceService.prototype.getSingleCountry = function (name) {
        var country = this.http.get('https://restcountries.eu/rest/v2/name/' + name);
        return country;
    };
    ApiServiceService.prototype.getAllCountrywithOutRegion = function () {
        var allCountry = this.http.get('https://restcountries.eu/rest/v2/');
        return allCountry;
    };
    ApiServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiServiceService);
    return ApiServiceService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav{\r\n    margin-bottom: 2vh;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n  <a class=\"navbar-brand\" href=\"#\">Assignment9</a>\n</nav>\n\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Assignment9';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _region_view_region_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./region-view/region-view.component */ "./src/app/region-view/region-view.component.ts");
/* harmony import */ var _all_country_all_country_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all-country/all-country.component */ "./src/app/all-country/all-country.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _single_country_single_country_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./single-country/single-country.component */ "./src/app/single-country/single-country.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _region_view_region_view_component__WEBPACK_IMPORTED_MODULE_5__["RegionViewComponent"],
                _all_country_all_country_component__WEBPACK_IMPORTED_MODULE_6__["AllCountryComponent"],
                _single_country_single_country_component__WEBPACK_IMPORTED_MODULE_8__["SingleCountryComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: 'home', component: _region_view_region_view_component__WEBPACK_IMPORTED_MODULE_5__["RegionViewComponent"] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'allCountry/:region', component: _all_country_all_country_component__WEBPACK_IMPORTED_MODULE_6__["AllCountryComponent"] },
                    { path: 'singleCountry/:country', component: _single_country_single_country_component__WEBPACK_IMPORTED_MODULE_8__["SingleCountryComponent"] },
                    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"] }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body { background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMC8yOS8xMiKqq3kAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAABHklEQVRIib2Vyw6EIAxFW5idr///Qx9sfG3pLEyJ3tAwi5EmBqRo7vHawiEEERHS6x7MTMxMVv6+z3tPMUYSkfTM/R0fEaG2bbMv+Gc4nZzn+dN4HAcREa3r+hi3bcuu68jLskhVIlW073tWaYlQ9+F9IpqmSfq+fwskhdO/AwmUTJXrOuaRQNeRkOd5lq7rXmS5InmERKoER/QMvUAPlZDHcZRhGN4CSeGY+aHMqgcks5RrHv/eeh455x5KrMq2yHQdibDO6ncG/KZWL7M8xDyS1/MIO0NJqdULLS81X6/X6aR0nqBSJcPeZnlZrzN477NKURn2Nus8sjzmEII0TfMiyxUuxphVWjpJkbx0btUnshRihVv70Bv8ItXq6Asoi/ZiCbU6YgAAAABJRU5ErkJggg==);}\r\n.error-template {padding: 40px 15px;text-align: center;}\r\n.error-actions {margin-top:15px;margin-bottom:15px;}\r\n.error-actions .btn { margin-right:10px; }"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br>\n<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-md-12\">\n          <div class=\"error-template\">\n              <h1>\n                  Oops!</h1>\n              <h2>\n                  404 Not Found</h2>\n              <div class=\"error-details\">\n                  Sorry, an error has occured, Requested page not found!\n              </div>\n              <div class=\"error-actions\">\n                  <a [routerLink]=\"['/home']\" class=\"btn btn-primary btn-lg\"><span class=\"glyphicon glyphicon-home\"></span>\n                      Take Me Home </a>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/region-view/region-view.component.css":
/*!*******************************************************!*\
  !*** ./src/app/region-view/region-view.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nbody,\r\n#slider,\r\n.wrap,\r\n.slide-content {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  width: 100%;\r\n  height: 100vh;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.wrap {\r\n  position: relative;\r\n}\r\n\r\n.slide {\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.slide0 {\r\n  background-image: url('Africa.jpg');\r\n}\r\n\r\n.slide1 {\r\n  background-image: url('Americas.jpg');\r\n}\r\n\r\n.slide2 {\r\n    background-image: url('Asia.jpg');\r\n  }\r\n\r\n.slide3 {\r\n    background-image: url('Europe.jpg');\r\n  }\r\n\r\n.slide4 {\r\n      background-image: url('Oceania.jpg');\r\n    }\r\n\r\n.slide-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n}\r\n\r\n.slide-content span{\r\n  text-align: center;\r\n  font-size: 3rem;\r\n  color: white;\r\n}\r\n\r\n.slide-content a{\r\n  text-align: center;\r\n  font-size: 2rem;\r\n  color: rgb(150, 42, 42);\r\n}\r\n\r\n.arrow {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 50%;\r\n  margin-top: -35px;\r\n  width: 0;\r\n  height: 0;\r\n  border-style: solid;\r\n}\r\n\r\n#arrow-left {\r\n  border-width: 20px 30px 20px 0;\r\n  border-color: transparent white transparent transparent;\r\n  left: 0;\r\n  margin-left: 10px;\r\n}\r\n\r\n#arrow-right {\r\n  border-width: 20px 0 20px 30px;\r\n  border-color: transparent transparent transparent white;\r\n  right: 0;\r\n  margin-right: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/region-view/region-view.component.html":
/*!********************************************************!*\
  !*** ./src/app/region-view/region-view.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap\">\n    <div id=\"arrow-left\" class=\"arrow\"></div>\n    <div id=\"slider\">\n      <div class=\"slide slide0\">\n        <div class=\"slide-content\">\n          <span>Welcome to {{regions[0]}} </span>\n          <a [routerLink]=\"['/allCountry',regions[0]]\">Click Here For More</a>\n        </div>\n      </div>\n      <div class=\"slide slide1\">\n        <div class=\"slide-content\">\n          <span>Welcome to {{regions[1]}}</span>\n          <a [routerLink]=\"['/allCountry',regions[1]]\">Click Here For More</a>\n        </div>\n      </div>\n      <div class=\"slide slide2\">\n        <div class=\"slide-content\">\n          <span>Welcome to {{regions[2]}}</span>\n          <a [routerLink]=\"['/allCountry',regions[2]]\">Click Here For More</a>\n        </div>\n      </div>\n      <div class=\"slide slide3\">\n          <div class=\"slide-content\">\n            <span>Welcome to {{regions[3]}}</span>\n            <a [routerLink]=\"['/allCountry',regions[3]]\">Click Here For More</a>\n          </div>\n        </div>\n        <div class=\"slide slide4\">\n            <div class=\"slide-content\">\n              <span>Welcome to {{regions[4]}}</span>\n              <a [routerLink]=\"['/allCountry',regions[4]]\">Click Here For More</a>\n            </div>\n          </div>\n    </div>\n    <div id=\"arrow-right\" class=\"arrow\"></div>\n  </div>\n"

/***/ }),

/***/ "./src/app/region-view/region-view.component.ts":
/*!******************************************************!*\
  !*** ./src/app/region-view/region-view.component.ts ***!
  \******************************************************/
/*! exports provided: RegionViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionViewComponent", function() { return RegionViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegionViewComponent = /** @class */ (function () {
    function RegionViewComponent() {
        this.regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
    }
    RegionViewComponent.prototype.ngOnInit = function () {
        this.jqueryFunction();
    };
    RegionViewComponent.prototype.jqueryFunction = function () {
        var sliderImage = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.slide');
        var arrowLeft = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#arrow-left');
        var arrowRight = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#arrow-right');
        var current = 0;
        function reset() {
            for (var i = 0; i < sliderImage.length; i++) {
                jquery__WEBPACK_IMPORTED_MODULE_1___default()('.slide' + i).css({ "display": "none" });
            }
        }
        function startSlide() {
            reset();
            jquery__WEBPACK_IMPORTED_MODULE_1___default()('.slide0').css({ "display": "block" });
        }
        // Show prev
        function slideLeft() {
            reset();
            sliderImage[current - 1].style.display = "block";
            current--;
        }
        // Show next
        function slideRight() {
            reset();
            sliderImage[current + 1].style.display = "block";
            current++;
        }
        // Left arrow click
        arrowLeft.click(function () {
            if (current === 0) {
                current = sliderImage.length;
            }
            slideLeft();
        });
        // Right arrow click
        arrowRight.click(function () {
            if (current === sliderImage.length - 1) {
                current = -1;
            }
            slideRight();
        });
        startSlide();
    };
    RegionViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-region-view',
            template: __webpack_require__(/*! ./region-view.component.html */ "./src/app/region-view/region-view.component.html"),
            styles: [__webpack_require__(/*! ./region-view.component.css */ "./src/app/region-view/region-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegionViewComponent);
    return RegionViewComponent;
}());



/***/ }),

/***/ "./src/app/single-country/single-country.component.css":
/*!*************************************************************!*\
  !*** ./src/app/single-country/single-country.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .list-group-item {\r\n    background-color: transparent;\r\n    border-top: 1px solid #ddd;\r\n    border-radius: 0;\r\n    color: #fff;\r\n    \r\n    } */"

/***/ }),

/***/ "./src/app/single-country/single-country.component.html":
/*!**************************************************************!*\
  !*** ./src/app/single-country/single-country.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"background-image: url(https://restcountries.eu/data/alb.svg);height:100vh;width:100vw;overflow-y:scroll\">\n  <a class=\"btn btn-primary\" [routerLink]=\"['/']\" style=\"margin-top:8vh;position: relative\">Home</a>\n  <a class=\"btn btn-warning\" (click)=\"goBack()\" style=\"margin-top:8vh;margin-left: 2vw;position: relative\">Go Back </a>\n\n  <div class=\"container content\" style=\"margin-top: 2vh\">\n    <div class=\"row\">\n      <div class=\"col \">\n        <ul class=\"list-group left\">\n        </ul>\n      </div>\n      <div class=\"col\">\n        <ul class=\"list-group right\">\n        </ul>\n\n        <div class=\"list-group object\">\n            \n            \n        </div>\n\n      </div>\n    </div>\n    <br><br>\n    <div class=\"row\">\n      <div class=\"col\">\n          <div class=\"list-group\">\n              <a class=\"list-group-item list-group-item-action active\">\n                Currency\n              </a>\n              <a class=\"list-group-item list-group-item-action\">Code:{{currency[\"code\"]}}</a>\n              <a class=\"list-group-item \" [routerLink]=\"['/allCountry',currency.name+'*c*']\">Name:{{currency.name}}</a>\n              <a class=\"list-group-item list-group-item-action\">Symbol:{{currency[\"symbol\"]}}</a>\n            </div>\n\n      </div>\n      <div class=\"col\">\n          <div class=\"list-group\">\n              <a class=\"list-group-item list-group-item-action active\">\n                Language\n              </a>\n              <div *ngFor=\"let item of language | keyvalue\">\n                  <a class=\"list-group-item list-group-item-action\" [routerLink]=\"['/allCountry',language['name']+'*l*']\">{{item.key}}:{{item.value}}</a>\n                  \n              </div>\n            </div>\n      </div>\n    </div>\n\n      \n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/single-country/single-country.component.ts":
/*!************************************************************!*\
  !*** ./src/app/single-country/single-country.component.ts ***!
  \************************************************************/
/*! exports provided: SingleCountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleCountryComponent", function() { return SingleCountryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-service.service */ "./src/app/api-service.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SingleCountryComponent = /** @class */ (function () {
    function SingleCountryComponent(route, apiService, location) {
        this.route = route;
        this.apiService = apiService;
        this.location = location;
        this.countryDetail = [];
        this.language = [];
    }
    SingleCountryComponent.prototype.ngOnInit = function () {
        var _this = this;
        var country = this.route.snapshot.paramMap.get('country');
        this.apiService.getSingleCountry(country).subscribe(function (data) {
            _this.countryDetail = data;
            _this.appendHtml(_this.countryDetail);
        }, function (error) {
            console.log('some error occured at single-country');
            console.log(error.errorMessage);
        });
    };
    SingleCountryComponent.prototype.appendHtml = function (details) {
        for (var _i = 0, details_1 = details; _i < details_1.length; _i++) {
            var element = details_1[_i];
            for (var fileds in element) {
                if (fileds == 'flag') {
                    var flag = element['flag'];
                    jquery__WEBPACK_IMPORTED_MODULE_3___default()('.container-fluid').css('background-image', 'url(' + flag + ')');
                }
                if (fileds == 'currencies') {
                    this.currency = element['currencies'][0];
                    this.language = element['languages'][0];
                }
                if (fileds != 'currencies' && fileds != 'languages' && fileds != 'regionalBlocs') {
                    if (typeof (element[fileds]) === 'object' && element[fileds]) {
                        if (element[fileds].length === 1) {
                            if (typeof (element[fileds]) !== 'object') {
                            }
                            else {
                                jquery__WEBPACK_IMPORTED_MODULE_3___default()('.right').append("\n                <li class=\"list-group-item\"><em>" + fileds.toUpperCase() + "</em> : " + element[fileds] + "</li>\n                ");
                            }
                        }
                        else {
                            jquery__WEBPACK_IMPORTED_MODULE_3___default()('.object').append("\n                <a class=\"list-group-item list-group-item-action active\">\n                " + fileds + "\n              </a>\n                ");
                            for (var index = 0; index < element[fileds].length; index++) {
                                jquery__WEBPACK_IMPORTED_MODULE_3___default()('.object').append("\n                    <a class=\"list-group-item list-group-item-action field\">" + element[fileds][index] + "</a>\n                    ");
                            }
                        }
                    }
                    else {
                        jquery__WEBPACK_IMPORTED_MODULE_3___default()('.left').append("\n              <li class=\"list-group-item\"><em>" + fileds.toUpperCase() + "</em> : " + element[fileds] + "</li>\n              ");
                    }
                }
            }
        }
    };
    SingleCountryComponent.prototype.goBack = function () {
        this.location.back();
    };
    SingleCountryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-country',
            template: __webpack_require__(/*! ./single-country.component.html */ "./src/app/single-country/single-country.component.html"),
            styles: [__webpack_require__(/*! ./single-country.component.css */ "./src/app/single-country/single-country.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], SingleCountryComponent);
    return SingleCountryComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Soumya Dhar\Desktop\Front-end\Github\FrontEnd\Assignment_9\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map