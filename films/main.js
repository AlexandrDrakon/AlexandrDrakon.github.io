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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers_popular_films_popular_films_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/popular-films/popular-films.component */ "./src/app/containers/popular-films/popular-films.component.ts");
/* harmony import */ var _containers_films_item_films_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/films-item/films-item.component */ "./src/app/containers/films-item/films-item.component.ts");
/* harmony import */ var _containers_favorite_films_favorite_films_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/favorite-films/favorite-films.component */ "./src/app/containers/favorite-films/favorite-films.component.ts");
/* harmony import */ var _resolvers_genres_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resolvers/genres.resolver */ "./src/app/resolvers/genres.resolver.ts");
/* harmony import */ var _resolvers_films_list_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resolvers/films-list.resolver */ "./src/app/resolvers/films-list.resolver.ts");
/* harmony import */ var _resolvers_films_item_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resolvers/films-item.resolver */ "./src/app/resolvers/films-item.resolver.ts");









var routes = [
    { path: 'popular-films', component: _containers_popular_films_popular_films_component__WEBPACK_IMPORTED_MODULE_3__["PopularFilmsComponent"], resolve: { genres: _resolvers_genres_resolver__WEBPACK_IMPORTED_MODULE_6__["GenresResolver"], filmsList: _resolvers_films_list_resolver__WEBPACK_IMPORTED_MODULE_7__["FilmsListResolver"] } },
    { path: 'popular-films/:id', component: _containers_films_item_films_item_component__WEBPACK_IMPORTED_MODULE_4__["FilmsItemComponent"], resolve: { filmsItem: _resolvers_films_item_resolver__WEBPACK_IMPORTED_MODULE_8__["FilmsItemResolver"] } },
    { path: 'favorite-films', component: _containers_favorite_films_favorite_films_component__WEBPACK_IMPORTED_MODULE_5__["FavoriteFilmsComponent"], resolve: { genres: _resolvers_genres_resolver__WEBPACK_IMPORTED_MODULE_6__["GenresResolver"] } },
    { path: '', redirectTo: '/popular-films', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-toolbar></app-toolbar>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _store_app__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./store/app */ "./src/app/store/app/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _interceptors_request_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./interceptors/request.interceptor */ "./src/app/interceptors/request.interceptor.ts");
/* harmony import */ var _containers_popular_films_popular_films_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./containers/popular-films/popular-films.component */ "./src/app/containers/popular-films/popular-films.component.ts");
/* harmony import */ var _pipes_genres_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pipes/genres.pipe */ "./src/app/pipes/genres.pipe.ts");
/* harmony import */ var _containers_films_item_films_item_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./containers/films-item/films-item.component */ "./src/app/containers/films-item/films-item.component.ts");
/* harmony import */ var _containers_recommended_films_recommended_films_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./containers/recommended-films/recommended-films.component */ "./src/app/containers/recommended-films/recommended-films.component.ts");
/* harmony import */ var _components_films_short_list_films_short_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/films-short-list/films-short-list.component */ "./src/app/components/films-short-list/films-short-list.component.ts");
/* harmony import */ var _containers_similar_films_similar_films_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./containers/similar-films/similar-films.component */ "./src/app/containers/similar-films/similar-films.component.ts");
/* harmony import */ var _containers_films_full_list_films_full_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./containers/films-full-list/films-full-list.component */ "./src/app/containers/films-full-list/films-full-list.component.ts");
/* harmony import */ var _containers_favorite_films_favorite_films_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./containers/favorite-films/favorite-films.component */ "./src/app/containers/favorite-films/favorite-films.component.ts");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/toolbar/toolbar.component */ "./src/app/components/toolbar/toolbar.component.ts");

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _containers_popular_films_popular_films_component__WEBPACK_IMPORTED_MODULE_16__["PopularFilmsComponent"],
                _pipes_genres_pipe__WEBPACK_IMPORTED_MODULE_17__["GenresPipe"],
                _containers_films_item_films_item_component__WEBPACK_IMPORTED_MODULE_18__["FilmsItemComponent"],
                _containers_recommended_films_recommended_films_component__WEBPACK_IMPORTED_MODULE_19__["RecommendedFilmsComponent"],
                _components_films_short_list_films_short_list_component__WEBPACK_IMPORTED_MODULE_20__["FilmsShortListComponent"],
                _containers_similar_films_similar_films_component__WEBPACK_IMPORTED_MODULE_21__["SimilarFilmsComponent"],
                _containers_films_full_list_films_full_list_component__WEBPACK_IMPORTED_MODULE_22__["FilmsFullListComponent"],
                _containers_favorite_films_favorite_films_component__WEBPACK_IMPORTED_MODULE_23__["FavoriteFilmsComponent"],
                _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_24__["ToolbarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_store_app__WEBPACK_IMPORTED_MODULE_13__["appReducers"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot(_store_app__WEBPACK_IMPORTED_MODULE_13__["appEffects"]),
                _ngrx_router_store__WEBPACK_IMPORTED_MODULE_10__["StoreRouterConnectingModule"].forRoot({ stateKey: 'router' }),
                !_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"].instrument() : [],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _interceptors_request_interceptor__WEBPACK_IMPORTED_MODULE_15__["RequestInterceptor"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/films-short-list/films-short-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/films-short-list/films-short-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li *ngFor=\"let film of films\">\n    <a [routerLink]=\"'/popular-films/' + film.id\">\n      <img\n        [src]=\"film.poster_path ? 'http://image.tmdb.org/t/p/w92/' + film.poster_path : ''\"\n        [alt]=\"film.title\"\n      >\n    </a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/films-short-list/films-short-list.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/films-short-list/films-short-list.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  display: flex;\n  overflow: auto;\n  margin: 0;\n  padding: 0; }\n\nli {\n  margin: 5px;\n  list-style: none; }\n\nimg {\n  display: block;\n  height: 138px;\n  width: 92px;\n  min-width: 92px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9maWxtcy1zaG9ydC1saXN0L0M6XFxVc2Vyc1xcQWxleGFuZHJcXERvY3VtZW50c1xcdGVzdC1wcm9qZWN0c1xcZmlsbXMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZpbG1zLXNob3J0LWxpc3RcXGZpbG1zLXNob3J0LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBR1o7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixXQUFXO0VBQ1gsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9maWxtcy1zaG9ydC1saXN0L2ZpbG1zLXNob3J0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmxpIHtcbiAgbWFyZ2luOiA1cHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEzOHB4O1xuICB3aWR0aDogOTJweDtcbiAgbWluLXdpZHRoOiA5MnB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/films-short-list/films-short-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/films-short-list/films-short-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: FilmsShortListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmsShortListComponent", function() { return FilmsShortListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilmsShortListComponent = /** @class */ (function () {
    function FilmsShortListComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FilmsShortListComponent.prototype, "films", void 0);
    FilmsShortListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-films-short-list',
            template: __webpack_require__(/*! ./films-short-list.component.html */ "./src/app/components/films-short-list/films-short-list.component.html"),
            styles: [__webpack_require__(/*! ./films-short-list.component.scss */ "./src/app/components/films-short-list/films-short-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FilmsShortListComponent);
    return FilmsShortListComponent;
}());



/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <a routerLink=\"/popular-films\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Популярные фильмы</a>\n  <a routerLink=\"/favorite-films\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Избранные фильмы</a>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  padding: 20px;\n  text-decoration: none;\n  color: #fff; }\n\na:hover,\n.active {\n  color: #e91e63; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b29sYmFyL0M6XFxVc2Vyc1xcQWxleGFuZHJcXERvY3VtZW50c1xcdGVzdC1wcm9qZWN0c1xcZmlsbXMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHRvb2xiYXJcXHRvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLFdBQVcsRUFBQTs7QUFHYjs7RUFFRSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5hOmhvdmVyLFxuLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZTkxZTYzO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.ts ***!
  \*********************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/components/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/components/toolbar/toolbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/containers/favorite-films/favorite-films.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/containers/favorite-films/favorite-films.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-films-full-list [films]=\"favoriteFilms\"></app-films-full-list>\n  <p *ngIf=\"!favoriteFilms.length\">Нет избранных фильмов</p>\n</div>\n"

/***/ }),

/***/ "./src/app/containers/favorite-films/favorite-films.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/containers/favorite-films/favorite-films.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin: 0 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVycy9mYXZvcml0ZS1maWxtcy9DOlxcVXNlcnNcXEFsZXhhbmRyXFxEb2N1bWVudHNcXHRlc3QtcHJvamVjdHNcXGZpbG1zL3NyY1xcYXBwXFxjb250YWluZXJzXFxmYXZvcml0ZS1maWxtc1xcZmF2b3JpdGUtZmlsbXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXJzL2Zhdm9yaXRlLWZpbG1zL2Zhdm9yaXRlLWZpbG1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/containers/favorite-films/favorite-films.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/containers/favorite-films/favorite-films.component.ts ***!
  \***********************************************************************/
/*! exports provided: FavoriteFilmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteFilmsComponent", function() { return FavoriteFilmsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_favorite_films__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/favorite-films */ "./src/app/store/favorite-films/index.ts");




var FavoriteFilmsComponent = /** @class */ (function () {
    function FavoriteFilmsComponent(store) {
        var _this = this;
        this.store = store;
        this.store.dispatch(new _store_favorite_films__WEBPACK_IMPORTED_MODULE_3__["GetFavoriteFilms"]());
        this.store.select(_store_favorite_films__WEBPACK_IMPORTED_MODULE_3__["selectFavoriteFilmsList"])
            .subscribe(function (list) { return _this.favoriteFilms = list || []; });
    }
    FavoriteFilmsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-favorite-films',
            template: __webpack_require__(/*! ./favorite-films.component.html */ "./src/app/containers/favorite-films/favorite-films.component.html"),
            styles: [__webpack_require__(/*! ./favorite-films.component.scss */ "./src/app/containers/favorite-films/favorite-films.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], FavoriteFilmsComponent);
    return FavoriteFilmsComponent;
}());



/***/ }),

/***/ "./src/app/containers/films-full-list/films-full-list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/containers/films-full-list/films-full-list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"5\" *ngIf=\"films.length\">\n  <mat-grid-tile *ngFor=\"let film of films\">\n    <mat-card>\n      <mat-card-header>\n        <mat-card-title>\n          <a [routerLink]=\"'/popular-films/' + film.id\">{{film.title}}</a>\n        </mat-card-title>\n        <mat-card-subtitle>Жанры: {{film | genres}}</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <div class=\"overview\">{{ film.overview || 'Описание отсутствует'}}</div>\n        <img\n          mat-card-image\n          [src]=\"film.poster_path ? 'http://image.tmdb.org/t/p/w92/' + film.poster_path : ''\"\n        >\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-button *ngIf=\"favoriteFilmsIds.indexOf(film.id) === -1\" (click)=\"addFavoriteFilm(film)\">Добавить в избранное</button>\n        <button mat-button *ngIf=\"favoriteFilmsIds.indexOf(film.id) !== -1\" (click)=\"deleteFavoriteFilm(film)\">Удалить из избранного</button>\n      </mat-card-actions>\n    </mat-card>\n  </mat-grid-tile>\n</mat-grid-list>\n"

/***/ }),

/***/ "./src/app/containers/films-full-list/films-full-list.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/containers/films-full-list/films-full-list.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  height: 320px;\n  width: 100%;\n  margin: 0 10px;\n  padding: 10px;\n  box-sizing: border-box;\n  overflow: hidden; }\n\nmat-card-content {\n  display: flex;\n  height: 138px;\n  justify-content: space-between; }\n\nmat-card-content .overview {\n    overflow: auto;\n    text-align: justify; }\n\nmat-card-content img[mat-card-image] {\n    height: 138px;\n    width: 92px;\n    min-width: 92px;\n    margin: 0 0 0 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVycy9maWxtcy1mdWxsLWxpc3QvQzpcXFVzZXJzXFxBbGV4YW5kclxcRG9jdW1lbnRzXFx0ZXN0LXByb2plY3RzXFxmaWxtcy9zcmNcXGFwcFxcY29udGFpbmVyc1xcZmlsbXMtZnVsbC1saXN0XFxmaWxtcy1mdWxsLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsV0FBVztFQUNYLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsOEJBQThCLEVBQUE7O0FBSGhDO0lBS0ksY0FBYztJQUNkLG1CQUFtQixFQUFBOztBQU52QjtJQVNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVycy9maWxtcy1mdWxsLWxpc3QvZmlsbXMtZnVsbC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgaGVpZ2h0OiAzMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5tYXQtY2FyZC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMzhweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAub3ZlcnZpZXcge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIH1cbiAgaW1nW21hdC1jYXJkLWltYWdlXSB7XG4gICAgaGVpZ2h0OiAxMzhweDtcbiAgICB3aWR0aDogOTJweDtcbiAgICBtaW4td2lkdGg6IDkycHg7XG4gICAgbWFyZ2luOiAwIDAgMCAxMHB4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/containers/films-full-list/films-full-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/containers/films-full-list/films-full-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: FilmsFullListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmsFullListComponent", function() { return FilmsFullListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_favorite_films__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/favorite-films */ "./src/app/store/favorite-films/index.ts");




var FilmsFullListComponent = /** @class */ (function () {
    function FilmsFullListComponent(store) {
        var _this = this;
        this.store = store;
        this.store.select(_store_favorite_films__WEBPACK_IMPORTED_MODULE_3__["selectFavoriteFilmsList"])
            .subscribe(function (list) {
            var favoriteFilms = list || [];
            _this.favoriteFilmsIds = favoriteFilms.map(function (film) { return film.id; });
        });
    }
    FilmsFullListComponent.prototype.addFavoriteFilm = function (film) {
        this.store.dispatch(new _store_favorite_films__WEBPACK_IMPORTED_MODULE_3__["AddFavoriteFilm"](film));
    };
    FilmsFullListComponent.prototype.deleteFavoriteFilm = function (film) {
        this.store.dispatch(new _store_favorite_films__WEBPACK_IMPORTED_MODULE_3__["DeleteFavoriteFilm"](film));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], FilmsFullListComponent.prototype, "films", void 0);
    FilmsFullListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-films-full-list',
            template: __webpack_require__(/*! ./films-full-list.component.html */ "./src/app/containers/films-full-list/films-full-list.component.html"),
            styles: [__webpack_require__(/*! ./films-full-list.component.scss */ "./src/app/containers/films-full-list/films-full-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], FilmsFullListComponent);
    return FilmsFullListComponent;
}());



/***/ }),

/***/ "./src/app/containers/films-item/films-item.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/containers/films-item/films-item.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card>\n    <mat-card-title>{{ filmsItem.title }}</mat-card-title>\n    <mat-card-subtitle>\n      <div>Жанры: {{filmsItem | genres}}</div>\n      <div>\n        <span>Страны:</span>\n        <span *ngFor=\"let country of filmsItem.production_countries; last as isLast\">\n          {{ country.name }}{{!isLast ? ',' : ''}}\n        </span>\n      </div>\n      <div>Средний рейтинг: {{filmsItem.vote_average}}</div>\n    </mat-card-subtitle>\n    \n    <mat-card-content>\n      <div>{{ filmsItem.overview || 'Описание отсутствует' }}</div>\n      <img\n        mat-card-image\n        [src]=\"filmsItem.poster_path ? 'http://image.tmdb.org/t/p/w342/' + filmsItem.poster_path: ''\"\n      >\n    </mat-card-content>\n    <mat-card-actions>\n      <button\n        mat-button\n        *ngIf=\"favoriteFilmsIds.indexOf(filmsItem.id) === -1\"\n        (click)=\"addFavoriteFilm(filmsItem)\"\n      >\n        Добавить в избранное\n      </button>\n      <button\n        mat-button\n        *ngIf=\"favoriteFilmsIds.indexOf(filmsItem.id) !== -1\"\n        (click)=\"deleteFavoriteFilm(filmsItem)\"\n      >\n        Удалить из избранного\n      </button>\n    </mat-card-actions>\n  </mat-card>\n\n  <app-recommended-films [filmId]=\"filmsItem.id\"></app-recommended-films>\n\n  <app-similar-films [filmId]=\"filmsItem.id\"></app-similar-films>\n</div>\n"

/***/ }),

/***/ "./src/app/containers/films-item/films-item.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/containers/films-item/films-item.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin: 0 20px; }\n\nmat-card {\n  width: 600px; }\n\nmat-card-title,\nmat-card-subtitle {\n  text-align: center; }\n\nmat-card-content {\n  display: flex;\n  text-align: justify; }\n\nimg[mat-card-image] {\n  display: block;\n  width: 300px;\n  min-width: 300px;\n  height: 450px;\n  margin: 0 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVycy9maWxtcy1pdGVtL0M6XFxVc2Vyc1xcQWxleGFuZHJcXERvY3VtZW50c1xcdGVzdC1wcm9qZWN0c1xcZmlsbXMvc3JjXFxhcHBcXGNvbnRhaW5lcnNcXGZpbG1zLWl0ZW1cXGZpbG1zLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsWUFBWSxFQUFBOztBQUdkOztFQUVFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVycy9maWxtcy1pdGVtL2ZpbG1zLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwIDIwcHg7XG59XG5cbm1hdC1jYXJkIHtcbiAgd2lkdGg6IDYwMHB4O1xufVxuXG5tYXQtY2FyZC10aXRsZSxcbm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5tYXQtY2FyZC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuaW1nW21hdC1jYXJkLWltYWdlXSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMzAwcHg7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIGhlaWdodDogNDUwcHg7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/containers/films-item/films-item.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/containers/films-item/films-item.component.ts ***!
  \***************************************************************/
/*! exports provided: FilmsItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmsItemComponent", function() { return FilmsItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_films__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/films */ "./src/app/store/films/index.ts");
/* harmony import */ var _store_favorite_films__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/favorite-films */ "./src/app/store/favorite-films/index.ts");





var FilmsItemComponent = /** @class */ (function () {
    function FilmsItemComponent(store) {
        var _this = this;
        this.store = store;
        this.store.dispatch(new _store_favorite_films__WEBPACK_IMPORTED_MODULE_4__["GetFavoriteFilms"]());
        this.store.select(_store_films__WEBPACK_IMPORTED_MODULE_3__["selectFilmsItem"])
            .subscribe(function (data) { return _this.filmsItem = data; });
        this.store.select(_store_favorite_films__WEBPACK_IMPORTED_MODULE_4__["selectFavoriteFilmsList"])
            .subscribe(function (list) {
            var favoriteFilms = list || [];
            _this.favoriteFilmsIds = favoriteFilms.map(function (film) { return film.id; });
        });
    }
    FilmsItemComponent.prototype.addFavoriteFilm = function (film) {
        this.store.dispatch(new _store_favorite_films__WEBPACK_IMPORTED_MODULE_4__["AddFavoriteFilm"](film));
    };
    FilmsItemComponent.prototype.deleteFavoriteFilm = function (film) {
        this.store.dispatch(new _store_favorite_films__WEBPACK_IMPORTED_MODULE_4__["DeleteFavoriteFilm"](film));
    };
    FilmsItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-films-item',
            template: __webpack_require__(/*! ./films-item.component.html */ "./src/app/containers/films-item/films-item.component.html"),
            styles: [__webpack_require__(/*! ./films-item.component.scss */ "./src/app/containers/films-item/films-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], FilmsItemComponent);
    return FilmsItemComponent;
}());



/***/ }),

/***/ "./src/app/containers/popular-films/popular-films.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/containers/popular-films/popular-films.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form (ngSubmit)=\"searchFilms()\">\n    <mat-form-field class=\"search\">\n      <input type=\"search\" matInput [(ngModel)]=\"seachText\" name=\"search\" placeholder=\"Поиск\">\n    </mat-form-field>\n    <button mat-icon-button type=\"submit\">\n      <mat-icon aria-label=\"Search\">search</mat-icon>\n    </button>\n  </form>\n\n  <app-films-full-list [films]=\"films$ | async\"></app-films-full-list>\n\n  <mat-paginator [length]=\"totalSize$ | async\"\n                 [pageSize]=\"pageSize$ | async\"\n                 (page)=\"onChangePage($event)\">\n  </mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/app/containers/popular-films/popular-films.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/containers/popular-films/popular-films.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin: 0 20px; }\n\n.search {\n  width: 300px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVycy9wb3B1bGFyLWZpbG1zL0M6XFxVc2Vyc1xcQWxleGFuZHJcXERvY3VtZW50c1xcdGVzdC1wcm9qZWN0c1xcZmlsbXMvc3JjXFxhcHBcXGNvbnRhaW5lcnNcXHBvcHVsYXItZmlsbXNcXHBvcHVsYXItZmlsbXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVycy9wb3B1bGFyLWZpbG1zL3BvcHVsYXItZmlsbXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwIDIwcHg7XG59XG4uc2VhcmNoIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/containers/popular-films/popular-films.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/containers/popular-films/popular-films.component.ts ***!
  \*********************************************************************/
/*! exports provided: PopularFilmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopularFilmsComponent", function() { return PopularFilmsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _store_films__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/films */ "./src/app/store/films/index.ts");
/* harmony import */ var _store_favorite_films__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/favorite-films */ "./src/app/store/favorite-films/index.ts");






var PopularFilmsComponent = /** @class */ (function () {
    function PopularFilmsComponent(store) {
        this.store = store;
        this.films$ = this.store.select(_store_films__WEBPACK_IMPORTED_MODULE_4__["selectFilmsList"]);
        this.pageSize$ = this.store.select(_store_films__WEBPACK_IMPORTED_MODULE_4__["selectFilmsPageSize"]);
        this.totalSize$ = this.store.select(_store_films__WEBPACK_IMPORTED_MODULE_4__["selectFilmsTotalSize"]);
        this.seachText = '';
        this.query = '';
    }
    PopularFilmsComponent.prototype.onChangePage = function (event) {
        this.getFilms(event.pageIndex + 1);
    };
    PopularFilmsComponent.prototype.searchFilms = function () {
        this.query = this.seachText;
        this.paginator.pageIndex = 0;
        this.getFilms();
    };
    PopularFilmsComponent.prototype.getFilms = function (page) {
        if (page === void 0) { page = 1; }
        if (!this.query) {
            this.store.dispatch(new _store_films__WEBPACK_IMPORTED_MODULE_4__["GetFilms"](page));
        }
        else {
            this.store.dispatch(new _store_films__WEBPACK_IMPORTED_MODULE_4__["SearchFilms"]({
                page: page,
                query: this.query
            }));
        }
    };
    PopularFilmsComponent.prototype.addFavoriteFilm = function (film) {
        this.store.dispatch(new _store_favorite_films__WEBPACK_IMPORTED_MODULE_5__["AddFavoriteFilm"](film));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], PopularFilmsComponent.prototype, "paginator", void 0);
    PopularFilmsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-popular-films',
            template: __webpack_require__(/*! ./popular-films.component.html */ "./src/app/containers/popular-films/popular-films.component.html"),
            styles: [__webpack_require__(/*! ./popular-films.component.scss */ "./src/app/containers/popular-films/popular-films.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], PopularFilmsComponent);
    return PopularFilmsComponent;
}());



/***/ }),

/***/ "./src/app/containers/recommended-films/recommended-films.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/containers/recommended-films/recommended-films.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Рекомендуемые фильмы</h2>\n\n<app-films-short-list [films]=\"recommendedFilms\"></app-films-short-list>\n"

/***/ }),

/***/ "./src/app/containers/recommended-films/recommended-films.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/containers/recommended-films/recommended-films.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvcmVjb21tZW5kZWQtZmlsbXMvcmVjb21tZW5kZWQtZmlsbXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/containers/recommended-films/recommended-films.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/containers/recommended-films/recommended-films.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RecommendedFilmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendedFilmsComponent", function() { return RecommendedFilmsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_films__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/films */ "./src/app/store/films/index.ts");




var RecommendedFilmsComponent = /** @class */ (function () {
    function RecommendedFilmsComponent(store) {
        var _this = this;
        this.store = store;
        this.store.select(_store_films__WEBPACK_IMPORTED_MODULE_3__["selectRecommendedFilms"])
            .subscribe(function (list) { return _this.recommendedFilms = list; });
    }
    RecommendedFilmsComponent.prototype.ngOnChanges = function () {
        this.store.dispatch(new _store_films__WEBPACK_IMPORTED_MODULE_3__["GetRecommendedFilms"](this.filmId));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RecommendedFilmsComponent.prototype, "filmId", void 0);
    RecommendedFilmsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recommended-films',
            template: __webpack_require__(/*! ./recommended-films.component.html */ "./src/app/containers/recommended-films/recommended-films.component.html"),
            styles: [__webpack_require__(/*! ./recommended-films.component.scss */ "./src/app/containers/recommended-films/recommended-films.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], RecommendedFilmsComponent);
    return RecommendedFilmsComponent;
}());



/***/ }),

/***/ "./src/app/containers/similar-films/similar-films.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/containers/similar-films/similar-films.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Похожие фильмы</h2>\n\n<app-films-short-list [films]=\"similarFilms\"></app-films-short-list>\n"

/***/ }),

/***/ "./src/app/containers/similar-films/similar-films.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/containers/similar-films/similar-films.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvc2ltaWxhci1maWxtcy9zaW1pbGFyLWZpbG1zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/containers/similar-films/similar-films.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/containers/similar-films/similar-films.component.ts ***!
  \*********************************************************************/
/*! exports provided: SimilarFilmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimilarFilmsComponent", function() { return SimilarFilmsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_films__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/films */ "./src/app/store/films/index.ts");




var SimilarFilmsComponent = /** @class */ (function () {
    function SimilarFilmsComponent(store) {
        var _this = this;
        this.store = store;
        this.store.select(_store_films__WEBPACK_IMPORTED_MODULE_3__["selectSimilarFilms"])
            .subscribe(function (list) { return _this.similarFilms = list; });
    }
    SimilarFilmsComponent.prototype.ngOnChanges = function () {
        this.store.dispatch(new _store_films__WEBPACK_IMPORTED_MODULE_3__["GetSimilarFilms"](this.filmId));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SimilarFilmsComponent.prototype, "filmId", void 0);
    SimilarFilmsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-similar-films',
            template: __webpack_require__(/*! ./similar-films.component.html */ "./src/app/containers/similar-films/similar-films.component.html"),
            styles: [__webpack_require__(/*! ./similar-films.component.scss */ "./src/app/containers/similar-films/similar-films.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], SimilarFilmsComponent);
    return SimilarFilmsComponent;
}());



/***/ }),

/***/ "./src/app/interceptors/request.interceptor.ts":
/*!*****************************************************!*\
  !*** ./src/app/interceptors/request.interceptor.ts ***!
  \*****************************************************/
/*! exports provided: RequestInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestInterceptor", function() { return RequestInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");



var RequestInterceptor = /** @class */ (function () {
    function RequestInterceptor() {
    }
    RequestInterceptor.prototype.intercept = function (req, next) {
        if (req.url.includes(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl)) {
            var paramReq = req.clone({
                params: req.params
                    .set('api_key', _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_key)
                    .set('language', 'ru')
            });
            return next.handle(paramReq);
        }
        return next.handle(req);
    };
    RequestInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], RequestInterceptor);
    return RequestInterceptor;
}());



/***/ }),

/***/ "./src/app/pipes/genres.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/genres.pipe.ts ***!
  \**************************************/
/*! exports provided: GenresPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenresPipe", function() { return GenresPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_genres__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/genres */ "./src/app/store/genres/index.ts");




var GenresPipe = /** @class */ (function () {
    function GenresPipe(store) {
        var _this = this;
        this.store = store;
        this.genresMap = {};
        this.store
            .select(_store_genres__WEBPACK_IMPORTED_MODULE_3__["selectGenresList"])
            .subscribe(function (genres) {
            _this.genresMap = {};
            if (genres) {
                genres.forEach(function (genre) {
                    _this.genresMap[genre.id] = genre.name;
                });
            }
        });
    }
    GenresPipe.prototype.transform = function (film) {
        var _this = this;
        if (film.genre_ids) {
            return film.genre_ids
                .map(function (id) { return _this.genresMap[id] || id; })
                .join(', ');
        }
        else if (film.genres) {
            return film.genres
                .map(function (item) { return item.name; })
                .join(', ');
        }
        return '';
    };
    GenresPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'genres'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], GenresPipe);
    return GenresPipe;
}());



/***/ }),

/***/ "./src/app/resolvers/films-item.resolver.ts":
/*!**************************************************!*\
  !*** ./src/app/resolvers/films-item.resolver.ts ***!
  \**************************************************/
/*! exports provided: FilmsItemResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmsItemResolver", function() { return FilmsItemResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _store_films__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/films */ "./src/app/store/films/index.ts");





var FilmsItemResolver = /** @class */ (function () {
    function FilmsItemResolver(store) {
        this.store = store;
    }
    FilmsItemResolver.prototype.resolve = function (snapshot) {
        var id = snapshot.params.id;
        this.store.dispatch(new _store_films__WEBPACK_IMPORTED_MODULE_4__["GetFilmsItem"](id));
        return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_films__WEBPACK_IMPORTED_MODULE_4__["selectFilmsItem"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(function (item) { return item && item.id === +id; }));
    };
    FilmsItemResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], FilmsItemResolver);
    return FilmsItemResolver;
}());



/***/ }),

/***/ "./src/app/resolvers/films-list.resolver.ts":
/*!**************************************************!*\
  !*** ./src/app/resolvers/films-list.resolver.ts ***!
  \**************************************************/
/*! exports provided: FilmsListResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmsListResolver", function() { return FilmsListResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _store_films__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/films */ "./src/app/store/films/index.ts");





var FilmsListResolver = /** @class */ (function () {
    function FilmsListResolver(store) {
        this.store = store;
    }
    FilmsListResolver.prototype.resolve = function () {
        this.store.dispatch(new _store_films__WEBPACK_IMPORTED_MODULE_4__["GetFilms"](1));
        return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_films__WEBPACK_IMPORTED_MODULE_4__["selectFilmsList"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    };
    FilmsListResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], FilmsListResolver);
    return FilmsListResolver;
}());



/***/ }),

/***/ "./src/app/resolvers/genres.resolver.ts":
/*!**********************************************!*\
  !*** ./src/app/resolvers/genres.resolver.ts ***!
  \**********************************************/
/*! exports provided: GenresResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenresResolver", function() { return GenresResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _store_genres__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/genres */ "./src/app/store/genres/index.ts");





var GenresResolver = /** @class */ (function () {
    function GenresResolver(store) {
        this.store = store;
    }
    GenresResolver.prototype.resolve = function () {
        this.initGenres();
        return this.waitForGenresToLoad();
    };
    GenresResolver.prototype.initGenres = function () {
        var _this = this;
        this.store
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .subscribe(function (store) {
            if (!store.genres.genres) {
                return _this.store.dispatch(new _store_genres__WEBPACK_IMPORTED_MODULE_4__["GetGenres"]());
            }
        });
    };
    GenresResolver.prototype.waitForGenresToLoad = function () {
        return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_genres__WEBPACK_IMPORTED_MODULE_4__["selectGenresList"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (genres) { return !!genres; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    };
    GenresResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], GenresResolver);
    return GenresResolver;
}());



/***/ }),

/***/ "./src/app/services/favorite-films.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/favorite-films.service.ts ***!
  \****************************************************/
/*! exports provided: FavoriteFilmsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteFilmsService", function() { return FavoriteFilmsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FavoriteFilmsService = /** @class */ (function () {
    function FavoriteFilmsService() {
        this.KEY_LOCAL_STORAGE = 'favorite-films';
    }
    FavoriteFilmsService.prototype.getFavoriteFilms = function () {
        return JSON.parse(localStorage.getItem(this.KEY_LOCAL_STORAGE)) || [];
    };
    FavoriteFilmsService.prototype.addFavoriteFilm = function (film) {
        var favoriteFilms = JSON.parse(localStorage.getItem(this.KEY_LOCAL_STORAGE)) || [];
        var isFindFilm = favoriteFilms.some(function (item) { return item.id === film.id; });
        if (!isFindFilm) {
            var newFavoriteFilms = favoriteFilms.concat(film);
            localStorage.setItem(this.KEY_LOCAL_STORAGE, JSON.stringify(newFavoriteFilms));
            return newFavoriteFilms;
        }
        return favoriteFilms;
    };
    FavoriteFilmsService.prototype.deleteFavoriteFilm = function (film) {
        var favoriteFilms = JSON.parse(localStorage.getItem(this.KEY_LOCAL_STORAGE)) || [];
        var isFindFilm = favoriteFilms.some(function (item) { return item.id === film.id; });
        if (isFindFilm) {
            var newFavoriteFilms = favoriteFilms.filter(function (item) { return item.id !== film.id; });
            localStorage.setItem(this.KEY_LOCAL_STORAGE, JSON.stringify(newFavoriteFilms));
            return newFavoriteFilms;
        }
        return favoriteFilms;
    };
    FavoriteFilmsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FavoriteFilmsService);
    return FavoriteFilmsService;
}());



/***/ }),

/***/ "./src/app/services/films.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/films.service.ts ***!
  \*******************************************/
/*! exports provided: FilmsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmsService", function() { return FilmsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var FilmsService = /** @class */ (function () {
    function FilmsService(http) {
        this.http = http;
        this.urlPopularFilms = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/movie/popular";
        this.urlSearchFilms = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/search/movie";
    }
    FilmsService.prototype.getFilms = function (page) {
        var params = {
            page: "" + page
        };
        return this.http.get(this.urlPopularFilms, { params: params });
    };
    FilmsService.prototype.searchFilms = function (data) {
        var params = {
            page: "" + data.page,
            query: data.query
        };
        return this.http.get(this.urlSearchFilms, { params: params });
    };
    FilmsService.prototype.getFilmsItem = function (id) {
        var urlFilm = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/movie/" + id;
        return this.http.get(urlFilm);
    };
    FilmsService.prototype.getRecommendedFilms = function (id) {
        var urlRecommendedFilms = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/movie/" + id + "/recommendations";
        return this.http.get(urlRecommendedFilms);
    };
    FilmsService.prototype.getSimilarFilms = function (id) {
        var urlSimilarFilms = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/movie/" + id + "/similar";
        return this.http.get(urlSimilarFilms);
    };
    FilmsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FilmsService);
    return FilmsService;
}());



/***/ }),

/***/ "./src/app/services/genres.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/genres.service.ts ***!
  \********************************************/
/*! exports provided: GenresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenresService", function() { return GenresService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var GenresService = /** @class */ (function () {
    function GenresService(http) {
        this.http = http;
        this.genresUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/genre/movie/list";
    }
    GenresService.prototype.getGenres = function () {
        return this.http.get(this.genresUrl);
    };
    GenresService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GenresService);
    return GenresService;
}());



/***/ }),

/***/ "./src/app/store/app/app.effects.ts":
/*!******************************************!*\
  !*** ./src/app/store/app/app.effects.ts ***!
  \******************************************/
/*! exports provided: appEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appEffects", function() { return appEffects; });
/* harmony import */ var _films__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../films */ "./src/app/store/films/index.ts");
/* harmony import */ var _genres__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../genres */ "./src/app/store/genres/index.ts");
/* harmony import */ var _favorite_films__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../favorite-films */ "./src/app/store/favorite-films/index.ts");



var appEffects = [_films__WEBPACK_IMPORTED_MODULE_0__["FilmsEffects"], _genres__WEBPACK_IMPORTED_MODULE_1__["GenresEffects"], _favorite_films__WEBPACK_IMPORTED_MODULE_2__["FavoriteFilmsEffects"]];


/***/ }),

/***/ "./src/app/store/app/app.reducers.ts":
/*!*******************************************!*\
  !*** ./src/app/store/app/app.reducers.ts ***!
  \*******************************************/
/*! exports provided: appReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducers", function() { return appReducers; });
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _films__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../films */ "./src/app/store/films/index.ts");
/* harmony import */ var _genres__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../genres */ "./src/app/store/genres/index.ts");
/* harmony import */ var _favorite_films__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../favorite-films */ "./src/app/store/favorite-films/index.ts");




var appReducers = {
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__["routerReducer"],
    films: _films__WEBPACK_IMPORTED_MODULE_1__["filmsReducers"],
    favoriteFilms: _favorite_films__WEBPACK_IMPORTED_MODULE_3__["favoriteFilmsReducers"],
    genres: _genres__WEBPACK_IMPORTED_MODULE_2__["genresReducers"]
};


/***/ }),

/***/ "./src/app/store/app/app.state.ts":
/*!****************************************!*\
  !*** ./src/app/store/app/app.state.ts ***!
  \****************************************/
/*! exports provided: initialAppState, getInitialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialAppState", function() { return initialAppState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialState", function() { return getInitialState; });
/* harmony import */ var _films__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../films */ "./src/app/store/films/index.ts");
/* harmony import */ var _genres__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../genres */ "./src/app/store/genres/index.ts");
/* harmony import */ var _favorite_films__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../favorite-films */ "./src/app/store/favorite-films/index.ts");



var initialAppState = {
    films: _films__WEBPACK_IMPORTED_MODULE_0__["initialFilmsState"],
    favoriteFilms: _favorite_films__WEBPACK_IMPORTED_MODULE_2__["initialFavoriteFilmsState"],
    genres: _genres__WEBPACK_IMPORTED_MODULE_1__["initialGenresState"]
};
function getInitialState() {
    return initialAppState;
}


/***/ }),

/***/ "./src/app/store/app/index.ts":
/*!************************************!*\
  !*** ./src/app/store/app/index.ts ***!
  \************************************/
/*! exports provided: initialAppState, getInitialState, appReducers, appEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.state */ "./src/app/store/app/app.state.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialAppState", function() { return _app_state__WEBPACK_IMPORTED_MODULE_0__["initialAppState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInitialState", function() { return _app_state__WEBPACK_IMPORTED_MODULE_0__["getInitialState"]; });

/* harmony import */ var _app_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.reducers */ "./src/app/store/app/app.reducers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appReducers", function() { return _app_reducers__WEBPACK_IMPORTED_MODULE_1__["appReducers"]; });

/* harmony import */ var _app_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.effects */ "./src/app/store/app/app.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appEffects", function() { return _app_effects__WEBPACK_IMPORTED_MODULE_2__["appEffects"]; });






/***/ }),

/***/ "./src/app/store/favorite-films/favorite-films.action.ts":
/*!***************************************************************!*\
  !*** ./src/app/store/favorite-films/favorite-films.action.ts ***!
  \***************************************************************/
/*! exports provided: EFavoriteFilms, GetFavoriteFilms, GetFavoriteFilmsSuccess, AddFavoriteFilm, AddFavoriteFilmSuccess, DeleteFavoriteFilm, DeleteFavoriteFilmSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EFavoriteFilms", function() { return EFavoriteFilms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFavoriteFilms", function() { return GetFavoriteFilms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFavoriteFilmsSuccess", function() { return GetFavoriteFilmsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFavoriteFilm", function() { return AddFavoriteFilm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFavoriteFilmSuccess", function() { return AddFavoriteFilmSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteFavoriteFilm", function() { return DeleteFavoriteFilm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteFavoriteFilmSuccess", function() { return DeleteFavoriteFilmSuccess; });
var EFavoriteFilms;
(function (EFavoriteFilms) {
    EFavoriteFilms["GetFavoriteFilms"] = "[FavoriteFilms] Get Favorite Films";
    EFavoriteFilms["GetFavoriteFilmsSuccess"] = "[FavoriteFilms] Get Favorite Films Success";
    EFavoriteFilms["AddFavoriteFilm"] = "[FavoriteFilms] Add Favorite Film";
    EFavoriteFilms["AddFavoriteFilmSuccess"] = "[FavoriteFilms] Add Favorite Film Success";
    EFavoriteFilms["DeleteFavoriteFilm"] = "[FavoriteFilms] Delete Favorite Film";
    EFavoriteFilms["DeleteFavoriteFilmSuccess"] = "[FavoriteFilms] Delete Favorite Film Success";
})(EFavoriteFilms || (EFavoriteFilms = {}));
var GetFavoriteFilms = /** @class */ (function () {
    function GetFavoriteFilms() {
        this.type = EFavoriteFilms.GetFavoriteFilms;
    }
    return GetFavoriteFilms;
}());

var GetFavoriteFilmsSuccess = /** @class */ (function () {
    function GetFavoriteFilmsSuccess(payload) {
        this.payload = payload;
        this.type = EFavoriteFilms.GetFavoriteFilmsSuccess;
    }
    return GetFavoriteFilmsSuccess;
}());

var AddFavoriteFilm = /** @class */ (function () {
    function AddFavoriteFilm(payload) {
        this.payload = payload;
        this.type = EFavoriteFilms.AddFavoriteFilm;
    }
    return AddFavoriteFilm;
}());

var AddFavoriteFilmSuccess = /** @class */ (function () {
    function AddFavoriteFilmSuccess(payload) {
        this.payload = payload;
        this.type = EFavoriteFilms.AddFavoriteFilmSuccess;
    }
    return AddFavoriteFilmSuccess;
}());

var DeleteFavoriteFilm = /** @class */ (function () {
    function DeleteFavoriteFilm(payload) {
        this.payload = payload;
        this.type = EFavoriteFilms.DeleteFavoriteFilm;
    }
    return DeleteFavoriteFilm;
}());

var DeleteFavoriteFilmSuccess = /** @class */ (function () {
    function DeleteFavoriteFilmSuccess(payload) {
        this.payload = payload;
        this.type = EFavoriteFilms.DeleteFavoriteFilmSuccess;
    }
    return DeleteFavoriteFilmSuccess;
}());



/***/ }),

/***/ "./src/app/store/favorite-films/favorite-films.effects.ts":
/*!****************************************************************!*\
  !*** ./src/app/store/favorite-films/favorite-films.effects.ts ***!
  \****************************************************************/
/*! exports provided: FavoriteFilmsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteFilmsEffects", function() { return FavoriteFilmsEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_favorite_films_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/favorite-films.service */ "./src/app/services/favorite-films.service.ts");
/* harmony import */ var _favorite_films_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favorite-films.action */ "./src/app/store/favorite-films/favorite-films.action.ts");







var FavoriteFilmsEffects = /** @class */ (function () {
    function FavoriteFilmsEffects(favoriteFilmsService, actions$) {
        var _this = this;
        this.favoriteFilmsService = favoriteFilmsService;
        this.actions$ = actions$;
        this.getFavoriteFilms$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_favorite_films_action__WEBPACK_IMPORTED_MODULE_6__["EFavoriteFilms"].GetFavoriteFilms), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () { return _this.favoriteFilmsService.getFavoriteFilms(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (films) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _favorite_films_action__WEBPACK_IMPORTED_MODULE_6__["GetFavoriteFilmsSuccess"](films)); }));
        this.addFavoriteFilm$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_favorite_films_action__WEBPACK_IMPORTED_MODULE_6__["EFavoriteFilms"].AddFavoriteFilm), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (film) { return _this.favoriteFilmsService.addFavoriteFilm(film); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (films) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _favorite_films_action__WEBPACK_IMPORTED_MODULE_6__["AddFavoriteFilmSuccess"](films)); }));
        this.deleteFavoriteFilm$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_favorite_films_action__WEBPACK_IMPORTED_MODULE_6__["EFavoriteFilms"].DeleteFavoriteFilm), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (film) { return _this.favoriteFilmsService.deleteFavoriteFilm(film); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (films) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _favorite_films_action__WEBPACK_IMPORTED_MODULE_6__["DeleteFavoriteFilmSuccess"](films)); }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FavoriteFilmsEffects.prototype, "getFavoriteFilms$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FavoriteFilmsEffects.prototype, "addFavoriteFilm$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FavoriteFilmsEffects.prototype, "deleteFavoriteFilm$", void 0);
    FavoriteFilmsEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_favorite_films_service__WEBPACK_IMPORTED_MODULE_5__["FavoriteFilmsService"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]])
    ], FavoriteFilmsEffects);
    return FavoriteFilmsEffects;
}());



/***/ }),

/***/ "./src/app/store/favorite-films/favorite-films.reducers.ts":
/*!*****************************************************************!*\
  !*** ./src/app/store/favorite-films/favorite-films.reducers.ts ***!
  \*****************************************************************/
/*! exports provided: favoriteFilmsReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "favoriteFilmsReducers", function() { return favoriteFilmsReducers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _favorite_films_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorite-films.action */ "./src/app/store/favorite-films/favorite-films.action.ts");
/* harmony import */ var _favorite_films_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./favorite-films.state */ "./src/app/store/favorite-films/favorite-films.state.ts");



var favoriteFilmsReducers = function (state, action) {
    if (state === void 0) { state = _favorite_films_state__WEBPACK_IMPORTED_MODULE_2__["initialFavoriteFilmsState"]; }
    switch (action.type) {
        case _favorite_films_action__WEBPACK_IMPORTED_MODULE_1__["EFavoriteFilms"].GetFavoriteFilmsSuccess:
        case _favorite_films_action__WEBPACK_IMPORTED_MODULE_1__["EFavoriteFilms"].AddFavoriteFilmSuccess:
        case _favorite_films_action__WEBPACK_IMPORTED_MODULE_1__["EFavoriteFilms"].DeleteFavoriteFilmSuccess: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { list: action.payload });
        }
        default:
            return state;
    }
};


/***/ }),

/***/ "./src/app/store/favorite-films/favorite-films.selector.ts":
/*!*****************************************************************!*\
  !*** ./src/app/store/favorite-films/favorite-films.selector.ts ***!
  \*****************************************************************/
/*! exports provided: selectFavoriteFilmsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFavoriteFilmsList", function() { return selectFavoriteFilmsList; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var selectFavoriteFilms = function (state) { return state.favoriteFilms; };
var selectFavoriteFilmsList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFavoriteFilms, function (state) { return state.list; });


/***/ }),

/***/ "./src/app/store/favorite-films/favorite-films.state.ts":
/*!**************************************************************!*\
  !*** ./src/app/store/favorite-films/favorite-films.state.ts ***!
  \**************************************************************/
/*! exports provided: initialFavoriteFilmsState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialFavoriteFilmsState", function() { return initialFavoriteFilmsState; });
var initialFavoriteFilmsState = {
    list: null
};


/***/ }),

/***/ "./src/app/store/favorite-films/index.ts":
/*!***********************************************!*\
  !*** ./src/app/store/favorite-films/index.ts ***!
  \***********************************************/
/*! exports provided: initialFavoriteFilmsState, EFavoriteFilms, GetFavoriteFilms, GetFavoriteFilmsSuccess, AddFavoriteFilm, AddFavoriteFilmSuccess, DeleteFavoriteFilm, DeleteFavoriteFilmSuccess, favoriteFilmsReducers, FavoriteFilmsEffects, selectFavoriteFilmsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _favorite_films_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorite-films.state */ "./src/app/store/favorite-films/favorite-films.state.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialFavoriteFilmsState", function() { return _favorite_films_state__WEBPACK_IMPORTED_MODULE_0__["initialFavoriteFilmsState"]; });

/* harmony import */ var _favorite_films_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorite-films.action */ "./src/app/store/favorite-films/favorite-films.action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EFavoriteFilms", function() { return _favorite_films_action__WEBPACK_IMPORTED_MODULE_1__["EFavoriteFilms"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetFavoriteFilms", function() { return _favorite_films_action__WEBPACK_IMPORTED_MODULE_1__["GetFavoriteFilms"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetFavoriteFilmsSuccess", function() { return _favorite_films_action__WEBPACK_IMPORTED_MODULE_1__["GetFavoriteFilmsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddFavoriteFilm", function() { return _favorite_films_action__WEBPACK_IMPORTED_MODULE_1__["AddFavoriteFilm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddFavoriteFilmSuccess", function() { return _favorite_films_action__WEBPACK_IMPORTED_MODULE_1__["AddFavoriteFilmSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteFavoriteFilm", function() { return _favorite_films_action__WEBPACK_IMPORTED_MODULE_1__["DeleteFavoriteFilm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteFavoriteFilmSuccess", function() { return _favorite_films_action__WEBPACK_IMPORTED_MODULE_1__["DeleteFavoriteFilmSuccess"]; });

/* harmony import */ var _favorite_films_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./favorite-films.reducers */ "./src/app/store/favorite-films/favorite-films.reducers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "favoriteFilmsReducers", function() { return _favorite_films_reducers__WEBPACK_IMPORTED_MODULE_2__["favoriteFilmsReducers"]; });

/* harmony import */ var _favorite_films_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favorite-films.effects */ "./src/app/store/favorite-films/favorite-films.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FavoriteFilmsEffects", function() { return _favorite_films_effects__WEBPACK_IMPORTED_MODULE_3__["FavoriteFilmsEffects"]; });

/* harmony import */ var _favorite_films_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./favorite-films.selector */ "./src/app/store/favorite-films/favorite-films.selector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectFavoriteFilmsList", function() { return _favorite_films_selector__WEBPACK_IMPORTED_MODULE_4__["selectFavoriteFilmsList"]; });








/***/ }),

/***/ "./src/app/store/films/films.action.ts":
/*!*********************************************!*\
  !*** ./src/app/store/films/films.action.ts ***!
  \*********************************************/
/*! exports provided: EFilmsActions, GetFilms, GetFilmsSuccess, SearchFilms, SearchFilmsSuccess, GetFilmsItem, GetFilmsItemSuccess, GetRecommendedFilms, GetRecommendedFilmsSuccess, GetSimilarFilms, GetSimilarFilmsSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EFilmsActions", function() { return EFilmsActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFilms", function() { return GetFilms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFilmsSuccess", function() { return GetFilmsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilms", function() { return SearchFilms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilmsSuccess", function() { return SearchFilmsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFilmsItem", function() { return GetFilmsItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFilmsItemSuccess", function() { return GetFilmsItemSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetRecommendedFilms", function() { return GetRecommendedFilms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetRecommendedFilmsSuccess", function() { return GetRecommendedFilmsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSimilarFilms", function() { return GetSimilarFilms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSimilarFilmsSuccess", function() { return GetSimilarFilmsSuccess; });
var EFilmsActions;
(function (EFilmsActions) {
    EFilmsActions["GetFilms"] = "[Films] Get Films";
    EFilmsActions["GetFilmsSuccess"] = "[Films] Get Films Success";
    EFilmsActions["SearchFilms"] = "[Films] Search Films";
    EFilmsActions["SearchFilmsSuccess"] = "[Films] Search Films Success";
    EFilmsActions["GetFilmsItem"] = "[Films] Get Films Item";
    EFilmsActions["GetFilmsItemSuccess"] = "[Films] Get Films Item Success";
    EFilmsActions["GetRecommendedFilms"] = "[Films] Get Recommended Films";
    EFilmsActions["GetRecommendedFilmsSuccess"] = "[Films] Get Recommended Films Success";
    EFilmsActions["GetSimilarFilms"] = "[Films] Get Similar Films";
    EFilmsActions["GetSimilarFilmsSuccess"] = "[Films] Get Similar Films Success";
})(EFilmsActions || (EFilmsActions = {}));
var GetFilms = /** @class */ (function () {
    function GetFilms(payload) {
        this.payload = payload;
        this.type = EFilmsActions.GetFilms;
    }
    return GetFilms;
}());

var GetFilmsSuccess = /** @class */ (function () {
    function GetFilmsSuccess(payload) {
        this.payload = payload;
        this.type = EFilmsActions.GetFilmsSuccess;
    }
    return GetFilmsSuccess;
}());

var SearchFilms = /** @class */ (function () {
    function SearchFilms(payload) {
        this.payload = payload;
        this.type = EFilmsActions.SearchFilms;
    }
    return SearchFilms;
}());

var SearchFilmsSuccess = /** @class */ (function () {
    function SearchFilmsSuccess(payload) {
        this.payload = payload;
        this.type = EFilmsActions.SearchFilmsSuccess;
    }
    return SearchFilmsSuccess;
}());

var GetFilmsItem = /** @class */ (function () {
    function GetFilmsItem(payload) {
        this.payload = payload;
        this.type = EFilmsActions.GetFilmsItem;
    }
    return GetFilmsItem;
}());

var GetFilmsItemSuccess = /** @class */ (function () {
    function GetFilmsItemSuccess(payload) {
        this.payload = payload;
        this.type = EFilmsActions.GetFilmsItemSuccess;
    }
    return GetFilmsItemSuccess;
}());

var GetRecommendedFilms = /** @class */ (function () {
    function GetRecommendedFilms(payload) {
        this.payload = payload;
        this.type = EFilmsActions.GetRecommendedFilms;
    }
    return GetRecommendedFilms;
}());

var GetRecommendedFilmsSuccess = /** @class */ (function () {
    function GetRecommendedFilmsSuccess(payload) {
        this.payload = payload;
        this.type = EFilmsActions.GetRecommendedFilmsSuccess;
    }
    return GetRecommendedFilmsSuccess;
}());

var GetSimilarFilms = /** @class */ (function () {
    function GetSimilarFilms(payload) {
        this.payload = payload;
        this.type = EFilmsActions.GetSimilarFilms;
    }
    return GetSimilarFilms;
}());

var GetSimilarFilmsSuccess = /** @class */ (function () {
    function GetSimilarFilmsSuccess(payload) {
        this.payload = payload;
        this.type = EFilmsActions.GetSimilarFilmsSuccess;
    }
    return GetSimilarFilmsSuccess;
}());



/***/ }),

/***/ "./src/app/store/films/films.effects.ts":
/*!**********************************************!*\
  !*** ./src/app/store/films/films.effects.ts ***!
  \**********************************************/
/*! exports provided: FilmsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmsEffects", function() { return FilmsEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_films_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/films.service */ "./src/app/services/films.service.ts");
/* harmony import */ var _films_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./films.action */ "./src/app/store/films/films.action.ts");







var FilmsEffects = /** @class */ (function () {
    function FilmsEffects(filmsService, actions$) {
        var _this = this;
        this.filmsService = filmsService;
        this.actions$ = actions$;
        this.getFilms$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_films_action__WEBPACK_IMPORTED_MODULE_6__["EFilmsActions"].GetFilms), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (page) { return _this.filmsService.getFilms(page); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (response) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _films_action__WEBPACK_IMPORTED_MODULE_6__["GetFilmsSuccess"](response)); }));
        this.searchFilms$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_films_action__WEBPACK_IMPORTED_MODULE_6__["EFilmsActions"].SearchFilms), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (data) { return _this.filmsService.searchFilms(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (response) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _films_action__WEBPACK_IMPORTED_MODULE_6__["SearchFilmsSuccess"](response)); }));
        this.getFilmsItem$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_films_action__WEBPACK_IMPORTED_MODULE_6__["EFilmsActions"].GetFilmsItem), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (id) { return _this.filmsService.getFilmsItem(id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (response) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _films_action__WEBPACK_IMPORTED_MODULE_6__["GetFilmsItemSuccess"](response)); }));
        this.getRecommendedFilms$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_films_action__WEBPACK_IMPORTED_MODULE_6__["EFilmsActions"].GetRecommendedFilms), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (id) { return _this.filmsService.getRecommendedFilms(id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (response) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _films_action__WEBPACK_IMPORTED_MODULE_6__["GetRecommendedFilmsSuccess"](response)); }));
        this.getSimilarFilms$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_films_action__WEBPACK_IMPORTED_MODULE_6__["EFilmsActions"].GetSimilarFilms), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (id) { return _this.filmsService.getSimilarFilms(id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (response) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _films_action__WEBPACK_IMPORTED_MODULE_6__["GetSimilarFilmsSuccess"](response)); }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FilmsEffects.prototype, "getFilms$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FilmsEffects.prototype, "searchFilms$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FilmsEffects.prototype, "getFilmsItem$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FilmsEffects.prototype, "getRecommendedFilms$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FilmsEffects.prototype, "getSimilarFilms$", void 0);
    FilmsEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_films_service__WEBPACK_IMPORTED_MODULE_5__["FilmsService"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]])
    ], FilmsEffects);
    return FilmsEffects;
}());



/***/ }),

/***/ "./src/app/store/films/films.reducers.ts":
/*!***********************************************!*\
  !*** ./src/app/store/films/films.reducers.ts ***!
  \***********************************************/
/*! exports provided: filmsReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filmsReducers", function() { return filmsReducers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _films_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./films.action */ "./src/app/store/films/films.action.ts");
/* harmony import */ var _films_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./films.state */ "./src/app/store/films/films.state.ts");



var filmsReducers = function (state, action) {
    if (state === void 0) { state = _films_state__WEBPACK_IMPORTED_MODULE_2__["initialFilmsState"]; }
    switch (action.type) {
        case _films_action__WEBPACK_IMPORTED_MODULE_1__["EFilmsActions"].GetFilmsSuccess:
        case _films_action__WEBPACK_IMPORTED_MODULE_1__["EFilmsActions"].SearchFilmsSuccess: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { films: {
                    list: action.payload.results,
                    pagination: {
                        page: action.payload.page,
                        pageSize: action.payload.results.length,
                        totalSize: action.payload.total_results
                    }
                } });
        }
        case _films_action__WEBPACK_IMPORTED_MODULE_1__["EFilmsActions"].GetFilmsItemSuccess: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { filmsItem: action.payload });
        }
        case _films_action__WEBPACK_IMPORTED_MODULE_1__["EFilmsActions"].GetRecommendedFilmsSuccess: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { recommendedFilms: {
                    list: action.payload.results
                } });
        }
        case _films_action__WEBPACK_IMPORTED_MODULE_1__["EFilmsActions"].GetSimilarFilmsSuccess: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { similarFilms: {
                    list: action.payload.results
                } });
        }
        default:
            return state;
    }
};


/***/ }),

/***/ "./src/app/store/films/films.selector.ts":
/*!***********************************************!*\
  !*** ./src/app/store/films/films.selector.ts ***!
  \***********************************************/
/*! exports provided: selectFilmsList, selectFilmsPageSize, selectFilmsTotalSize, selectFilmsItem, selectRecommendedFilms, selectSimilarFilms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilmsList", function() { return selectFilmsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilmsPageSize", function() { return selectFilmsPageSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilmsTotalSize", function() { return selectFilmsTotalSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFilmsItem", function() { return selectFilmsItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRecommendedFilms", function() { return selectRecommendedFilms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSimilarFilms", function() { return selectSimilarFilms; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var selectFilms = function (state) { return state.films; };
var selectFilmsList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFilms, function (state) { return state.films.list; });
var selectFilmsPageSize = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFilms, function (state) { return state.films.pagination.pageSize; });
var selectFilmsTotalSize = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFilms, function (state) { return state.films.pagination.totalSize; });
var selectFilmsItem = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFilms, function (state) { return state.filmsItem; });
var selectRecommendedFilms = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFilms, function (state) { return state.recommendedFilms.list; });
var selectSimilarFilms = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFilms, function (state) { return state.similarFilms.list; });


/***/ }),

/***/ "./src/app/store/films/films.state.ts":
/*!********************************************!*\
  !*** ./src/app/store/films/films.state.ts ***!
  \********************************************/
/*! exports provided: initialFilmsState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialFilmsState", function() { return initialFilmsState; });
var initialFilmsState = {
    films: {
        list: null,
        pagination: {
            page: null,
            pageSize: null,
            totalSize: null
        }
    },
    filmsItem: null,
    recommendedFilms: {
        list: null
    },
    similarFilms: {
        list: null
    }
};


/***/ }),

/***/ "./src/app/store/films/index.ts":
/*!**************************************!*\
  !*** ./src/app/store/films/index.ts ***!
  \**************************************/
/*! exports provided: initialFilmsState, EFilmsActions, GetFilms, GetFilmsSuccess, SearchFilms, SearchFilmsSuccess, GetFilmsItem, GetFilmsItemSuccess, GetRecommendedFilms, GetRecommendedFilmsSuccess, GetSimilarFilms, GetSimilarFilmsSuccess, filmsReducers, selectFilmsList, selectFilmsPageSize, selectFilmsTotalSize, selectFilmsItem, selectRecommendedFilms, selectSimilarFilms, FilmsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _films_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./films.state */ "./src/app/store/films/films.state.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialFilmsState", function() { return _films_state__WEBPACK_IMPORTED_MODULE_0__["initialFilmsState"]; });

/* harmony import */ var _films_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./films.action */ "./src/app/store/films/films.action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EFilmsActions", function() { return _films_action__WEBPACK_IMPORTED_MODULE_1__["EFilmsActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetFilms", function() { return _films_action__WEBPACK_IMPORTED_MODULE_1__["GetFilms"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetFilmsSuccess", function() { return _films_action__WEBPACK_IMPORTED_MODULE_1__["GetFilmsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchFilms", function() { return _films_action__WEBPACK_IMPORTED_MODULE_1__["SearchFilms"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchFilmsSuccess", function() { return _films_action__WEBPACK_IMPORTED_MODULE_1__["SearchFilmsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetFilmsItem", function() { return _films_action__WEBPACK_IMPORTED_MODULE_1__["GetFilmsItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetFilmsItemSuccess", function() { return _films_action__WEBPACK_IMPORTED_MODULE_1__["GetFilmsItemSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetRecommendedFilms", function() { return _films_action__WEBPACK_IMPORTED_MODULE_1__["GetRecommendedFilms"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetRecommendedFilmsSuccess", function() { return _films_action__WEBPACK_IMPORTED_MODULE_1__["GetRecommendedFilmsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetSimilarFilms", function() { return _films_action__WEBPACK_IMPORTED_MODULE_1__["GetSimilarFilms"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetSimilarFilmsSuccess", function() { return _films_action__WEBPACK_IMPORTED_MODULE_1__["GetSimilarFilmsSuccess"]; });

/* harmony import */ var _films_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./films.reducers */ "./src/app/store/films/films.reducers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filmsReducers", function() { return _films_reducers__WEBPACK_IMPORTED_MODULE_2__["filmsReducers"]; });

/* harmony import */ var _films_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./films.selector */ "./src/app/store/films/films.selector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectFilmsList", function() { return _films_selector__WEBPACK_IMPORTED_MODULE_3__["selectFilmsList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectFilmsPageSize", function() { return _films_selector__WEBPACK_IMPORTED_MODULE_3__["selectFilmsPageSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectFilmsTotalSize", function() { return _films_selector__WEBPACK_IMPORTED_MODULE_3__["selectFilmsTotalSize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectFilmsItem", function() { return _films_selector__WEBPACK_IMPORTED_MODULE_3__["selectFilmsItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectRecommendedFilms", function() { return _films_selector__WEBPACK_IMPORTED_MODULE_3__["selectRecommendedFilms"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSimilarFilms", function() { return _films_selector__WEBPACK_IMPORTED_MODULE_3__["selectSimilarFilms"]; });

/* harmony import */ var _films_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./films.effects */ "./src/app/store/films/films.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilmsEffects", function() { return _films_effects__WEBPACK_IMPORTED_MODULE_4__["FilmsEffects"]; });








/***/ }),

/***/ "./src/app/store/genres/genres.action.ts":
/*!***********************************************!*\
  !*** ./src/app/store/genres/genres.action.ts ***!
  \***********************************************/
/*! exports provided: EGenresActions, GetGenres, GetGenresSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EGenresActions", function() { return EGenresActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetGenres", function() { return GetGenres; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetGenresSuccess", function() { return GetGenresSuccess; });
var EGenresActions;
(function (EGenresActions) {
    EGenresActions["GetGenres"] = "[Genres] Get Genres";
    EGenresActions["GetGenresSuccess"] = "[Genres] Get Genres Success";
})(EGenresActions || (EGenresActions = {}));
var GetGenres = /** @class */ (function () {
    function GetGenres() {
        this.type = EGenresActions.GetGenres;
    }
    return GetGenres;
}());

var GetGenresSuccess = /** @class */ (function () {
    function GetGenresSuccess(payload) {
        this.payload = payload;
        this.type = EGenresActions.GetGenresSuccess;
    }
    return GetGenresSuccess;
}());



/***/ }),

/***/ "./src/app/store/genres/genres.effects.ts":
/*!************************************************!*\
  !*** ./src/app/store/genres/genres.effects.ts ***!
  \************************************************/
/*! exports provided: GenresEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenresEffects", function() { return GenresEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_genres_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/genres.service */ "./src/app/services/genres.service.ts");
/* harmony import */ var _genres_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./genres.action */ "./src/app/store/genres/genres.action.ts");







var GenresEffects = /** @class */ (function () {
    function GenresEffects(genresService, actions$) {
        var _this = this;
        this.genresService = genresService;
        this.actions$ = actions$;
        this.getGenres$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_genres_action__WEBPACK_IMPORTED_MODULE_6__["EGenresActions"].GetGenres), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () { return _this.genresService.getGenres(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (data) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _genres_action__WEBPACK_IMPORTED_MODULE_6__["GetGenresSuccess"](data.genres)); }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GenresEffects.prototype, "getGenres$", void 0);
    GenresEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_genres_service__WEBPACK_IMPORTED_MODULE_5__["GenresService"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]])
    ], GenresEffects);
    return GenresEffects;
}());



/***/ }),

/***/ "./src/app/store/genres/genres.reducers.ts":
/*!*************************************************!*\
  !*** ./src/app/store/genres/genres.reducers.ts ***!
  \*************************************************/
/*! exports provided: genresReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genresReducers", function() { return genresReducers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _genres_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./genres.action */ "./src/app/store/genres/genres.action.ts");
/* harmony import */ var _genres_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./genres.state */ "./src/app/store/genres/genres.state.ts");



var genresReducers = function (state, action) {
    if (state === void 0) { state = _genres_state__WEBPACK_IMPORTED_MODULE_2__["initialGenresState"]; }
    switch (action.type) {
        case _genres_action__WEBPACK_IMPORTED_MODULE_1__["EGenresActions"].GetGenresSuccess: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { genres: action.payload });
        }
        default:
            return state;
    }
};


/***/ }),

/***/ "./src/app/store/genres/genres.selector.ts":
/*!*************************************************!*\
  !*** ./src/app/store/genres/genres.selector.ts ***!
  \*************************************************/
/*! exports provided: selectGenresList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectGenresList", function() { return selectGenresList; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var selectGenres = function (state) { return state.genres; };
var selectGenresList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectGenres, function (state) { return state.genres; });


/***/ }),

/***/ "./src/app/store/genres/genres.state.ts":
/*!**********************************************!*\
  !*** ./src/app/store/genres/genres.state.ts ***!
  \**********************************************/
/*! exports provided: initialGenresState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialGenresState", function() { return initialGenresState; });
var initialGenresState = {
    genres: null
};


/***/ }),

/***/ "./src/app/store/genres/index.ts":
/*!***************************************!*\
  !*** ./src/app/store/genres/index.ts ***!
  \***************************************/
/*! exports provided: initialGenresState, EGenresActions, GetGenres, GetGenresSuccess, genresReducers, GenresEffects, selectGenresList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _genres_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./genres.state */ "./src/app/store/genres/genres.state.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialGenresState", function() { return _genres_state__WEBPACK_IMPORTED_MODULE_0__["initialGenresState"]; });

/* harmony import */ var _genres_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./genres.action */ "./src/app/store/genres/genres.action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EGenresActions", function() { return _genres_action__WEBPACK_IMPORTED_MODULE_1__["EGenresActions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetGenres", function() { return _genres_action__WEBPACK_IMPORTED_MODULE_1__["GetGenres"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetGenresSuccess", function() { return _genres_action__WEBPACK_IMPORTED_MODULE_1__["GetGenresSuccess"]; });

/* harmony import */ var _genres_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./genres.reducers */ "./src/app/store/genres/genres.reducers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "genresReducers", function() { return _genres_reducers__WEBPACK_IMPORTED_MODULE_2__["genresReducers"]; });

/* harmony import */ var _genres_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./genres.effects */ "./src/app/store/genres/genres.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GenresEffects", function() { return _genres_effects__WEBPACK_IMPORTED_MODULE_3__["GenresEffects"]; });

/* harmony import */ var _genres_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./genres.selector */ "./src/app/store/genres/genres.selector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectGenresList", function() { return _genres_selector__WEBPACK_IMPORTED_MODULE_4__["selectGenresList"]; });








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
    production: false,
    apiUrl: 'https://api.themoviedb.org/3',
    api_key: '35dcc51b87d5fba60596de5869711487'
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Alexandr\Documents\test-projects\films\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map