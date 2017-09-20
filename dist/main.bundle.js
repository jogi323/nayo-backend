webpackJsonp([3,7],{

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var themeA = __webpack_require__(703);
var themeB = __webpack_require__(704);
var themeC = __webpack_require__(705);
var themeD = __webpack_require__(706);
var themeE = __webpack_require__(707);
var themeF = __webpack_require__(708);
var themeG = __webpack_require__(709);
var themeH = __webpack_require__(710);
var ThemesService = (function () {
    function ThemesService() {
        this.createStyle();
        this.setTheme(this.defaultTheme);
    }
    ThemesService.prototype.createStyle = function () {
        var head = document.head || document.getElementsByTagName('head')[0];
        this.styleTag = document.createElement('style');
        this.styleTag.type = 'text/css';
        this.styleTag.id = 'appthemes';
        head.appendChild(this.styleTag);
    };
    ThemesService.prototype.setTheme = function (name) {
        switch (name) {
            case 'A':
                this.injectStylesheet(themeA);
                break;
            case 'B':
                this.injectStylesheet(themeB);
                break;
            case 'C':
                this.injectStylesheet(themeC);
                break;
            case 'D':
                this.injectStylesheet(themeD);
                break;
            case 'E':
                this.injectStylesheet(themeE);
                break;
            case 'F':
                this.injectStylesheet(themeF);
                break;
            case 'G':
                this.injectStylesheet(themeG);
                break;
            case 'H':
                this.injectStylesheet(themeH);
                break;
        }
    };
    ThemesService.prototype.injectStylesheet = function (css) {
        this.styleTag.innerHTML = css;
    };
    ThemesService.prototype.getDefaultTheme = function () {
        return this.defaultTheme;
    };
    return ThemesService;
}());
ThemesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ThemesService);

//# sourceMappingURL=themes.service.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_toaster_angular2_toaster__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_accordion__ = __webpack_require__(778);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_alert__ = __webpack_require__(780);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_buttons__ = __webpack_require__(782);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_carousel__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_collapse__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_dropdown__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap_modal__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap_pagination__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_progressbar__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_rating__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap_tabs__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_bootstrap_timepicker__ = __webpack_require__(801);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_bootstrap_tooltip__ = __webpack_require__(803);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ngx_bootstrap_typeahead__ = __webpack_require__(805);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ngx_bootstrap_datepicker__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__directives_flot_flot_directive__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__directives_sparkline_sparkline_directive__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__directives_easypiechart_easypiechart_directive__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__colors_colors_service__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__directives_checkall_checkall_directive__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__directives_vectormap_vectormap_directive__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__directives_now_now_directive__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__directives_scrollable_scrollable_directive__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__directives_jqcloud_jqcloud_directive__ = __webpack_require__(473);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























// https://angular.io/styleguide#!#04-10
var SharedModule = SharedModule_1 = (function () {
    // https://github.com/ocombe/ng2-translate/issues/209
    function SharedModule() {
    }
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1
        };
    };
    return SharedModule;
}());
SharedModule = SharedModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["a" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_accordion__["a" /* AccordionModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_alert__["a" /* AlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_buttons__["a" /* ButtonsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_carousel__["a" /* CarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_collapse__["a" /* CollapseModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_20_ngx_bootstrap_datepicker__["a" /* DatepickerModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap_pagination__["a" /* PaginationModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_progressbar__["a" /* ProgressbarModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_rating__["a" /* RatingModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap_tabs__["a" /* TabsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_17_ngx_bootstrap_timepicker__["a" /* TimepickerModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_18_ngx_bootstrap_tooltip__["a" /* TooltipModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_19_ngx_bootstrap_typeahead__["a" /* TypeaheadModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_angular2_toaster_angular2_toaster__["a" /* ToasterModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_24__colors_colors_service__["a" /* ColorsService */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_21__directives_flot_flot_directive__["a" /* FlotDirective */],
            __WEBPACK_IMPORTED_MODULE_22__directives_sparkline_sparkline_directive__["a" /* SparklineDirective */],
            __WEBPACK_IMPORTED_MODULE_23__directives_easypiechart_easypiechart_directive__["a" /* EasypiechartDirective */],
            __WEBPACK_IMPORTED_MODULE_25__directives_checkall_checkall_directive__["a" /* CheckallDirective */],
            __WEBPACK_IMPORTED_MODULE_26__directives_vectormap_vectormap_directive__["a" /* VectormapDirective */],
            __WEBPACK_IMPORTED_MODULE_27__directives_now_now_directive__["a" /* NowDirective */],
            __WEBPACK_IMPORTED_MODULE_28__directives_scrollable_scrollable_directive__["a" /* ScrollableDirective */],
            __WEBPACK_IMPORTED_MODULE_29__directives_jqcloud_jqcloud_directive__["a" /* JqcloudDirective */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["a" /* TranslateModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_accordion__["a" /* AccordionModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_alert__["a" /* AlertModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap_buttons__["a" /* ButtonsModule */],
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_carousel__["a" /* CarouselModule */],
            __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_collapse__["a" /* CollapseModule */],
            __WEBPACK_IMPORTED_MODULE_20_ngx_bootstrap_datepicker__["a" /* DatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */],
            __WEBPACK_IMPORTED_MODULE_12_ngx_bootstrap_modal__["a" /* ModalModule */],
            __WEBPACK_IMPORTED_MODULE_13_ngx_bootstrap_pagination__["a" /* PaginationModule */],
            __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_progressbar__["a" /* ProgressbarModule */],
            __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_rating__["a" /* RatingModule */],
            __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap_tabs__["a" /* TabsModule */],
            __WEBPACK_IMPORTED_MODULE_17_ngx_bootstrap_timepicker__["a" /* TimepickerModule */],
            __WEBPACK_IMPORTED_MODULE_18_ngx_bootstrap_tooltip__["a" /* TooltipModule */],
            __WEBPACK_IMPORTED_MODULE_19_ngx_bootstrap_typeahead__["a" /* TypeaheadModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_toaster_angular2_toaster__["a" /* ToasterModule */],
            __WEBPACK_IMPORTED_MODULE_21__directives_flot_flot_directive__["a" /* FlotDirective */],
            __WEBPACK_IMPORTED_MODULE_22__directives_sparkline_sparkline_directive__["a" /* SparklineDirective */],
            __WEBPACK_IMPORTED_MODULE_23__directives_easypiechart_easypiechart_directive__["a" /* EasypiechartDirective */],
            __WEBPACK_IMPORTED_MODULE_25__directives_checkall_checkall_directive__["a" /* CheckallDirective */],
            __WEBPACK_IMPORTED_MODULE_26__directives_vectormap_vectormap_directive__["a" /* VectormapDirective */],
            __WEBPACK_IMPORTED_MODULE_27__directives_now_now_directive__["a" /* NowDirective */],
            __WEBPACK_IMPORTED_MODULE_28__directives_scrollable_scrollable_directive__["a" /* ScrollableDirective */],
            __WEBPACK_IMPORTED_MODULE_29__directives_jqcloud_jqcloud_directive__["a" /* JqcloudDirective */],
        ]
    })
], SharedModule);

var SharedModule_1;
//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(settings) {
        this.settings = settings;
    }
    Object.defineProperty(AppComponent.prototype, "isFixed", {
        get: function () { return this.settings.layout.isFixed; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AppComponent.prototype, "isCollapsed", {
        get: function () { return this.settings.layout.isCollapsed; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AppComponent.prototype, "isBoxed", {
        get: function () { return this.settings.layout.isBoxed; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AppComponent.prototype, "useFullLayout", {
        get: function () { return this.settings.layout.useFullLayout; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AppComponent.prototype, "hiddenFooter", {
        get: function () { return this.settings.layout.hiddenFooter; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AppComponent.prototype, "horizontal", {
        get: function () { return this.settings.layout.horizontal; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AppComponent.prototype, "isFloat", {
        get: function () { return this.settings.layout.isFloat; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AppComponent.prototype, "offsidebarOpen", {
        get: function () { return this.settings.layout.offsidebarOpen; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AppComponent.prototype, "asideToggled", {
        get: function () { return this.settings.layout.asideToggled; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(AppComponent.prototype, "isCollapsedText", {
        get: function () { return this.settings.layout.isCollapsedText; },
        enumerable: true,
        configurable: true
    });
    ;
    AppComponent.prototype.ngOnInit = function () {
        $(document).on('click', '[href="#"]', function (e) { return e.preventDefault(); });
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.layout-fixed'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], AppComponent.prototype, "isFixed", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.aside-collapsed'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], AppComponent.prototype, "isCollapsed", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.layout-boxed'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], AppComponent.prototype, "isBoxed", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.layout-fs'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], AppComponent.prototype, "useFullLayout", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.hidden-footer'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], AppComponent.prototype, "hiddenFooter", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.layout-h'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], AppComponent.prototype, "horizontal", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.aside-float'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], AppComponent.prototype, "isFloat", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.offsidebar-open'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], AppComponent.prototype, "offsidebarOpen", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.aside-toggled'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], AppComponent.prototype, "asideToggled", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.aside-collapsed-text'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], AppComponent.prototype, "isCollapsedText", null);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(831),
        styles: [__webpack_require__(691)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__["a" /* SettingsService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TranslatorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TranslatorService = (function () {
    function TranslatorService(translate) {
        this.translate = translate;
        this.defaultLanguage = 'en';
        this.availablelangs = [
            { code: 'en', text: 'English' },
            { code: 'es_AR', text: 'Spanish' }
        ];
        if (!translate.getDefaultLang())
            translate.setDefaultLang(this.defaultLanguage);
        this.useLanguage();
    }
    TranslatorService.prototype.useLanguage = function (lang) {
        if (lang === void 0) { lang = null; }
        this.translate.use(lang || this.translate.getDefaultLang());
    };
    TranslatorService.prototype.getAvailableLanguages = function () {
        return this.availablelangs;
    };
    return TranslatorService;
}());
TranslatorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object])
], TranslatorService);

var _a;
//# sourceMappingURL=translator.service.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_validation__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(settings, fb) {
        this.settings = settings;
        this.valForm = fb.group({
            'email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3_ng2_validation__["CustomValidators"].email])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
        });
    }
    LoginComponent.prototype.submitForm = function ($ev, value) {
        $ev.preventDefault();
        for (var c in this.valForm.controls) {
            this.valForm.controls[c].markAsTouched();
        }
        if (this.valForm.valid) {
            console.log('Valid!');
            console.log(value);
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(839),
        styles: [__webpack_require__(699)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__["a" /* SettingsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_validation__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoverUsernameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecoverUsernameComponent = (function () {
    function RecoverUsernameComponent(settings, fb) {
        this.settings = settings;
        this.valForm = fb.group({
            'email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3_ng2_validation__["CustomValidators"].email])]
        });
    }
    RecoverUsernameComponent.prototype.submitForm = function ($ev, value) {
        $ev.preventDefault();
        for (var c in this.valForm.controls) {
            this.valForm.controls[c].markAsTouched();
        }
        if (this.valForm.valid) {
            console.log('Valid!');
            console.log(value);
        }
    };
    RecoverUsernameComponent.prototype.ngOnInit = function () {
    };
    return RecoverUsernameComponent;
}());
RecoverUsernameComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-recover-username',
        template: __webpack_require__(840),
        styles: [__webpack_require__(700)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__["a" /* SettingsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _b || Object])
], RecoverUsernameComponent);

var _a, _b;
//# sourceMappingURL=recover-username.component.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_validation__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecoverComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecoverComponent = (function () {
    function RecoverComponent(settings, fb) {
        this.settings = settings;
        this.valForm = fb.group({
            'email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3_ng2_validation__["CustomValidators"].email])]
        });
    }
    RecoverComponent.prototype.submitForm = function ($ev, value) {
        $ev.preventDefault();
        for (var c in this.valForm.controls) {
            this.valForm.controls[c].markAsTouched();
        }
        if (this.valForm.valid) {
            console.log('Valid!');
            console.log(value);
        }
    };
    RecoverComponent.prototype.ngOnInit = function () {
    };
    return RecoverComponent;
}());
RecoverComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-recover',
        template: __webpack_require__(841),
        styles: [__webpack_require__(701)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__["a" /* SettingsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _b || Object])
], RecoverComponent);

var _a, _b;
//# sourceMappingURL=recover.component.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_validation__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(settings, fb) {
        this.settings = settings;
        var password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('^[a-zA-Z0-9]{6,10}$')]));
        var certainPassword = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3_ng2_validation__["CustomValidators"].equalTo(password));
        this.passwordForm = fb.group({
            'password': password,
            'confirmPassword': certainPassword
        });
        this.valForm = fb.group({
            'name': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)])],
            'email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3_ng2_validation__["CustomValidators"].email])],
            'accountagreed': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'passwordGroup': this.passwordForm,
            'address': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(10)])],
            'company': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)])],
            'phone': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(9)])],
            'pincode': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(5)])],
        });
    }
    RegisterComponent.prototype.submitForm = function ($ev, value) {
        $ev.preventDefault();
        for (var c in this.valForm.controls) {
            this.valForm.controls[c].markAsTouched();
        }
        for (var c in this.passwordForm.controls) {
            this.passwordForm.controls[c].markAsTouched();
        }
        if (this.valForm.valid) {
            console.log('Valid!');
            console.log(value);
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(842),
        styles: [__webpack_require__(702)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__["a" /* SettingsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsService = (function () {
    function SettingsService() {
        // User Settings
        // -----------------------------------
        this.user = {
            name: 'John',
            job: 'ng-developer',
            picture: 'assets/img/user/02.jpg'
        };
        // App Settings
        // -----------------------------------
        this.app = {
            name: 'Angle',
            description: 'Angular Bootstrap Admin Template',
            year: ((new Date()).getFullYear())
        };
        // Layout Settings
        // -----------------------------------
        this.layout = {
            isFixed: true,
            isCollapsed: false,
            isBoxed: false,
            isRTL: false,
            horizontal: false,
            isFloat: false,
            asideHover: false,
            theme: null,
            asideScrollbar: false,
            isCollapsedText: false,
            useFullLayout: false,
            hiddenFooter: false,
            offsidebarOpen: false,
            asideToggled: false,
            viewAnimation: 'ng-fadeInUp'
        };
    }
    SettingsService.prototype.getAppSetting = function (name) {
        return name ? this.app[name] : this.app;
    };
    SettingsService.prototype.getUserSetting = function (name) {
        return name ? this.user[name] : this.user;
    };
    SettingsService.prototype.getLayoutSetting = function (name) {
        return name ? this.layout[name] : this.layout;
    };
    SettingsService.prototype.setAppSetting = function (name, value) {
        if (typeof this.app[name] !== 'undefined') {
            this.app[name] = value;
        }
    };
    SettingsService.prototype.setUserSetting = function (name, value) {
        if (typeof this.user[name] !== 'undefined') {
            this.user[name] = value;
        }
    };
    SettingsService.prototype.setLayoutSetting = function (name, value) {
        if (typeof this.layout[name] !== 'undefined') {
            return this.layout[name] = value;
        }
    };
    SettingsService.prototype.toggleLayoutSetting = function (name) {
        return this.setLayoutSetting(name, !this.getLayoutSetting(name));
    };
    return SettingsService;
}());
SettingsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SettingsService);

//# sourceMappingURL=settings.service.js.map

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dashboard/dashboard.module": [
		899,
		0
	],
	"./home/home.module": [
		900,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 425;


/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendor_ts__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(478);





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
var p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
p.then(function () { window.appBootstrap && window.appBootstrap(); });
// .catch(err => console.error(err));
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(854);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppService = (function () {
    function AppService(http) {
        this.http = http;
    }
    AppService.prototype.getData = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */];
        headers.append('Content-Type', 'application/json; charset=utf-8');
        return this.http.get(this.url, { headers: headers }).map(function (res) {
            return res.json();
        });
    };
    AppService.prototype.postData = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */];
        headers.append('Content-Type', 'application/json; charset=utf-8');
        return this.http.post(this.url, this.data, { headers: headers }).map(function (res) {
            console.log(res.json());
            return res.json();
        });
    };
    return AppService;
}());
AppService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AppService);

var _a;
//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColorsService = (function () {
    function ColorsService() {
        this.APP_COLORS = {
            'primary': '#5d9cec',
            'success': '#27c24c',
            'info': '#23b7e5',
            'warning': '#ff902b',
            'danger': '#f05050',
            'inverse': '#131e26',
            'green': '#37bc9b',
            'pink': '#f532e5',
            'purple': '#7266ba',
            'dark': '#3a3f51',
            'yellow': '#fad732',
            'gray-darker': '#232735',
            'gray-dark': '#3a3f51',
            'gray': '#dde6e9',
            'gray-light': '#e4eaec',
            'gray-lighter': '#edf1f2'
        };
    }
    ColorsService.prototype.byName = function (name) {
        // console.log(name +' -> ' + this.APP_COLORS[name])
        return (this.APP_COLORS[name] || '#fff');
    };
    return ColorsService;
}());
ColorsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ColorsService);

//# sourceMappingURL=colors.service.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recover_recover_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recover_username_recover_username_component__ = __webpack_require__(162);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
// import { NgModule } from '@angular/core';






var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
        ]
    },
    // Not lazy-loaded routes
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__register_register_component__["a" /* RegisterComponent */] },
    { path: 'recover', component: __WEBPACK_IMPORTED_MODULE_3__recover_recover_component__["a" /* RecoverComponent */] },
    { path: 'recoverusername', component: __WEBPACK_IMPORTED_MODULE_5__recover_username_recover_username_component__["a" /* RecoverUsernameComponent */] },
    // { path: 'lock', component: LockComponent },
    // { path: 'maintenance', component: MaintenanceComponent },
    // { path: '404', component: Error404Component },
    // { path: '500', component: Error500Component },
    // Not found
    { path: '**', redirectTo: 'home' }
];
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
//export class AppRoutingModule { }
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: false });
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_service__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_core_module__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__layout_layout_module__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__register_register_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__recover_recover_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__recover_username_recover_username_component__ = __webpack_require__(162);
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
 // this is needed!




//Parent Component

//Services

//Main Routing

//Lazy Loading Modules



// import { RoutesModule } from './routes/routes.module';
//Basic Components




// https://github.com/ocombe/ng2-translate/issues/218
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__recover_recover_component__["a" /* RecoverComponent */],
            __WEBPACK_IMPORTED_MODULE_14__recover_username_recover_username_component__["a" /* RecoverUsernameComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_8__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_9__layout_layout_module__["a" /* LayoutModule */],
            __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__["a" /* SharedModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]]
                }
            })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__app_service__["a" /* AppService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__themes_themes_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__translator_translator_service__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__module_import_guard__ = __webpack_require__(461);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var CoreModule = (function () {
    function CoreModule(parentModule) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__module_import_guard__["a" /* throwIfAlreadyLoaded */])(parentModule, 'CoreModule');
    }
    return CoreModule;
}());
CoreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__settings_settings_service__["a" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_2__themes_themes_service__["a" /* ThemesService */],
            __WEBPACK_IMPORTED_MODULE_3__translator_translator_service__["a" /* TranslatorService */],
            __WEBPACK_IMPORTED_MODULE_4__menu_menu_service__["a" /* MenuService */]
        ],
        declarations: [],
        exports: []
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"])()),
    __metadata("design:paramtypes", [CoreModule])
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = throwIfAlreadyLoaded;
// https://angular.io/styleguide#!#04-12
// https://angular.io/styleguide#!#04-12
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}
//# sourceMappingURL=module-import-guard.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = (function () {
    function FooterComponent(settings) {
        this.settings = settings;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: '[app-footer]',
        template: __webpack_require__(832),
        styles: [__webpack_require__(692)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__["a" /* SettingsService */]) === "function" && _a || Object])
], FooterComponent);

var _a;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_userblock_userblock_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_settings_settings_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_menu_menu_service__ = __webpack_require__(95);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var screenfull = __webpack_require__(452);
var browser = __webpack_require__(451);



var HeaderComponent = (function () {
    function HeaderComponent(menu, userblockService, settings) {
        this.menu = menu;
        this.userblockService = userblockService;
        this.settings = settings;
        this.navCollapsed = true; // for horizontal layout
        this.menuItems = []; // for horizontal layout
        // show only a few items on demo
        this.menuItems = menu.getMenu().slice(0, 4); // for horizontal layout
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.isNavSearchVisible = false;
        if (browser.msie) {
            this.fsbutton.nativeElement.style.display = 'none';
        }
    };
    HeaderComponent.prototype.toggleUserBlock = function (event) {
        event.preventDefault();
        this.userblockService.toggleVisibility();
    };
    HeaderComponent.prototype.openNavSearch = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.setNavSearchVisible(true);
    };
    HeaderComponent.prototype.setNavSearchVisible = function (stat) {
        // console.log(stat);
        this.isNavSearchVisible = stat;
    };
    HeaderComponent.prototype.getNavSearchVisible = function () {
        return this.isNavSearchVisible;
    };
    HeaderComponent.prototype.toggleOffsidebar = function () {
        this.settings.layout.offsidebarOpen = !this.settings.layout.offsidebarOpen;
    };
    HeaderComponent.prototype.toggleCollapsedSideabar = function () {
        this.settings.layout.isCollapsed = !this.settings.layout.isCollapsed;
    };
    HeaderComponent.prototype.isCollapsedText = function () {
        return this.settings.layout.isCollapsedText;
    };
    HeaderComponent.prototype.toggleFullScreen = function (event) {
        if (screenfull.enabled) {
            screenfull.toggle();
        }
        // Switch icon indicator
        var el = $(this.fsbutton.nativeElement);
        if (screenfull.isFullscreen) {
            el.children('em').removeClass('fa-expand').addClass('fa-compress');
        }
        else {
            el.children('em').removeClass('fa-compress').addClass('fa-expand');
        }
    };
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fsbutton'),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "fsbutton", void 0);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(833),
        styles: [__webpack_require__(693)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__core_menu_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_menu_menu_service__["a" /* MenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__sidebar_userblock_userblock_service__["a" /* UserblockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sidebar_userblock_userblock_service__["a" /* UserblockService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__core_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_settings_settings_service__["a" /* SettingsService */]) === "function" && _c || Object])
], HeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavsearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavsearchComponent = (function () {
    function NavsearchComponent(elem) {
        this.elem = elem;
        this.onclose = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NavsearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        $(document)
            .on('keyup', function (event) {
            if (event.keyCode === 27) {
                _this.closeNavSearch();
            }
        })
            .on('click', function (event) {
            if (!$.contains(_this.elem.nativeElement, event.target)) {
                _this.closeNavSearch();
            }
        });
    };
    NavsearchComponent.prototype.closeNavSearch = function () {
        this.visible = false;
        this.onclose.emit();
    };
    NavsearchComponent.prototype.ngOnChanges = function (changes) {
        // console.log(changes['visible'].currentValue)
        if (changes['visible'].currentValue === true) {
            this.elem.nativeElement.querySelector('input').focus();
        }
    };
    NavsearchComponent.prototype.handleForm = function () {
        console.log('Form submit: ' + this.term);
    };
    return NavsearchComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], NavsearchComponent.prototype, "visible", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], NavsearchComponent.prototype, "onclose", void 0);
NavsearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navsearch',
        template: __webpack_require__(834),
        styles: [__webpack_require__(694)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], NavsearchComponent);

var _a;
//# sourceMappingURL=navsearch.component.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    return LayoutComponent;
}());
LayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-layout',
        template: __webpack_require__(835),
        styles: [__webpack_require__(695)]
    }),
    __metadata("design:paramtypes", [])
], LayoutComponent);

//# sourceMappingURL=layout.component.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar_sidebar_component__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_navsearch_navsearch_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__offsidebar_offsidebar_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sidebar_userblock_userblock_component__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sidebar_userblock_userblock_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__ = __webpack_require__(157);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var LayoutModule = (function () {
    function LayoutModule() {
    }
    return LayoutModule;
}());
LayoutModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__["a" /* SharedModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__sidebar_userblock_userblock_service__["a" /* UserblockService */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__layout_component__["a" /* LayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_2__sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_6__sidebar_userblock_userblock_component__["a" /* UserblockComponent */],
            __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_4__header_navsearch_navsearch_component__["a" /* NavsearchComponent */],
            __WEBPACK_IMPORTED_MODULE_5__offsidebar_offsidebar_component__["a" /* OffsidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__["a" /* FooterComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__layout_component__["a" /* LayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_2__sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_6__sidebar_userblock_userblock_component__["a" /* UserblockComponent */],
            __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_4__header_navsearch_navsearch_component__["a" /* NavsearchComponent */],
            __WEBPACK_IMPORTED_MODULE_5__offsidebar_offsidebar_component__["a" /* OffsidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__["a" /* FooterComponent */]
        ]
    })
], LayoutModule);

//# sourceMappingURL=layout.module.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_themes_themes_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_translator_translator_service__ = __webpack_require__(160);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffsidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OffsidebarComponent = (function () {
    function OffsidebarComponent(settings, themes, translator) {
        this.settings = settings;
        this.themes = themes;
        this.translator = translator;
        this.currentTheme = themes.getDefaultTheme();
        this.selectedLanguage = this.getLangs()[0].code;
    }
    OffsidebarComponent.prototype.ngOnInit = function () { };
    OffsidebarComponent.prototype.setTheme = function () {
        this.themes.setTheme(this.currentTheme);
    };
    OffsidebarComponent.prototype.getLangs = function () {
        return this.translator.getAvailableLanguages();
    };
    OffsidebarComponent.prototype.setLang = function (value) {
        this.translator.useLanguage(value);
    };
    return OffsidebarComponent;
}());
OffsidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-offsidebar',
        template: __webpack_require__(836),
        styles: [__webpack_require__(696)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__["a" /* SettingsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_themes_themes_service__["a" /* ThemesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_themes_themes_service__["a" /* ThemesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__core_translator_translator_service__["a" /* TranslatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_translator_translator_service__["a" /* TranslatorService */]) === "function" && _c || Object])
], OffsidebarComponent);

var _a, _b, _c;
//# sourceMappingURL=offsidebar.component.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_menu_menu_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_settings_settings_service__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = (function () {
    function SidebarComponent(menu, settings, injector) {
        this.menu = menu;
        this.settings = settings;
        this.injector = injector;
        this.menuItems = menu.getMenu();
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router = this.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]);
        this.router.events.subscribe(function (val) {
            // close any submenu opened when route changes
            _this.removeFloatingNav();
            // scroll view to top
            window.scrollTo(0, 0);
        });
    };
    SidebarComponent.prototype.toggleSubmenuClick = function (event) {
        var _this = this;
        if (!this.isSidebarCollapsed() && !this.isSidebarCollapsedText() && !this.isEnabledHover()) {
            event.preventDefault();
            var target = $(event.target || event.srcElement || event.currentTarget);
            var ul_1, anchor = target;
            // find the UL
            if (!target.is('a')) {
                anchor = target.parent('a').first();
            }
            ul_1 = anchor.next();
            // hide other submenus
            var parentNav_1 = ul_1.parents('.sidebar-subnav');
            $('.sidebar-subnav').each(function (idx, el) {
                var $el = $(el);
                // if element is not a parent or self ul
                if (!$el.is(parentNav_1) && !$el.is(ul_1)) {
                    _this.closeMenu($el);
                }
            });
            // abort if not UL to process
            if (!ul_1.length) {
                return;
            }
            // any child menu should start closed
            ul_1.find('.sidebar-subnav').each(function (idx, el) {
                _this.closeMenu($(el));
            });
            // toggle UL height
            if (parseInt(ul_1.height(), 0)) {
                this.closeMenu(ul_1);
            }
            else {
                // expand menu
                ul_1.on('transitionend', function () {
                    ul_1.height('auto').off('transitionend');
                }).height(ul_1[0].scrollHeight);
                // add class to manage animation
                ul_1.addClass('opening');
            }
        }
    };
    // Close menu collapsing height
    SidebarComponent.prototype.closeMenu = function (elem) {
        elem.height(elem[0].scrollHeight); // set height
        elem.height(0); // and move to zero to collapse
        elem.removeClass('opening');
    };
    SidebarComponent.prototype.toggleSubmenuHover = function (event) {
        var self = this;
        if (this.isSidebarCollapsed() || this.isSidebarCollapsedText() || this.isEnabledHover()) {
            event.preventDefault();
            this.removeFloatingNav();
            var target = $(event.target || event.srcElement || event.currentTarget);
            var ul = void 0, anchor = target;
            // find the UL
            if (!target.is('a')) {
                anchor = target.parent('a');
            }
            ul = anchor.next();
            if (!ul.length) {
                return; // if not submenu return
            }
            var $aside = $('.aside');
            var $asideInner = $aside.children('.aside-inner'); // for top offset calculation
            var $sidebar = $asideInner.children('.sidebar');
            var mar = parseInt($asideInner.css('padding-top'), 0) + parseInt($aside.css('padding-top'), 0);
            var itemTop = ((anchor.parent().position().top) + mar) - $sidebar.scrollTop();
            var floatingNav_1 = ul.clone().appendTo($aside);
            var vwHeight = $(window).height();
            // let itemTop = anchor.position().top || anchor.offset().top;
            floatingNav_1
                .removeClass('opening') // necesary for demo if switched between normal//collapsed mode
                .addClass('nav-floating')
                .css({
                position: this.settings.layout.isFixed ? 'fixed' : 'absolute',
                top: itemTop,
                bottom: (floatingNav_1.outerHeight(true) + itemTop > vwHeight) ? 0 : 'auto'
            });
            floatingNav_1
                .on('mouseleave', function () { floatingNav_1.remove(); })
                .find('a').on('click', function (e) {
                e.preventDefault(); // prevents page reload on click
                // get the exact route path to navigate
                self.router.navigate([$(this).attr('route')]);
            });
            this.listenForExternalClicks();
        }
    };
    SidebarComponent.prototype.listenForExternalClicks = function () {
        var _this = this;
        var $doc = $(document).on('click.sidebar', function (e) {
            if (!$(e.target).parents('.aside').length) {
                _this.removeFloatingNav();
                $doc.off('click.sidebar');
            }
        });
    };
    SidebarComponent.prototype.removeFloatingNav = function () {
        $('.nav-floating').remove();
    };
    SidebarComponent.prototype.isSidebarCollapsed = function () {
        return this.settings.layout.isCollapsed;
    };
    SidebarComponent.prototype.isSidebarCollapsedText = function () {
        return this.settings.layout.isCollapsedText;
    };
    SidebarComponent.prototype.isEnabledHover = function () {
        return this.settings.layout.asideHover;
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(837),
        styles: [__webpack_require__(697)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_menu_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_menu_menu_service__["a" /* MenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__core_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_settings_settings_service__["a" /* SettingsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _c || Object])
], SidebarComponent);

var _a, _b, _c;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__userblock_service__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserblockComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserblockComponent = (function () {
    function UserblockComponent(userblockService) {
        this.userblockService = userblockService;
        this.user = {
            picture: 'assets/img/user/01.jpg'
        };
    }
    UserblockComponent.prototype.ngOnInit = function () {
    };
    UserblockComponent.prototype.userBlockIsVisible = function () {
        return this.userblockService.getVisibility();
    };
    return UserblockComponent;
}());
UserblockComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-userblock',
        template: __webpack_require__(838),
        styles: [__webpack_require__(698)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__userblock_service__["a" /* UserblockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__userblock_service__["a" /* UserblockService */]) === "function" && _a || Object])
], UserblockComponent);

var _a;
//# sourceMappingURL=userblock.component.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckallDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckallDirective = (function () {
    function CheckallDirective(el) {
        this.el = el;
        var $element = $(el.nativeElement);
        $element.on('change', function () {
            var index = $element.index() + 1, checkbox = $element.find('input[type="checkbox"]'), table = $element.parents('table');
            // Make sure to affect only the correct checkbox column
            table.find('tbody > tr > td:nth-child(' + index + ') input[type="checkbox"]')
                .prop('checked', checkbox[0].checked);
        });
    }
    return CheckallDirective;
}());
CheckallDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[checkAll]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], CheckallDirective);

var _a;
//# sourceMappingURL=checkall.directive.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EasypiechartDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EasypiechartDirective = (function () {
    function EasypiechartDirective(element) {
        this.element = element;
        /**
         * default easy pie chart options
         * @type {Object}
         */
        this.defaultOptions = {
            barColor: '#ef1e25',
            trackColor: '#f9f9f9',
            scaleColor: '#dfe0e0',
            scaleLength: 5,
            lineCap: 'round',
            lineWidth: 3,
            size: 110,
            rotate: 0,
            animate: {
                duration: 1000,
                enabled: true
            }
        };
        this.percent = this.percent || 0;
        this.options = $.extend({}, this.defaultOptions, this.options);
    }
    EasypiechartDirective.prototype.ngOnInit = function () {
        if (EasyPieChart) {
            this.pieChart = new EasyPieChart(this.element.nativeElement, this.options);
            this.pieChart.update(this.percent);
        }
    };
    EasypiechartDirective.prototype.ngOnChanges = function (changes) {
        if (this.pieChart && changes['percent']) {
            this.pieChart.update(this.percent);
        }
    };
    return EasypiechartDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], EasypiechartDirective.prototype, "percent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], EasypiechartDirective.prototype, "options", void 0);
EasypiechartDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[easypiechart]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], EasypiechartDirective);

var _a;
//# sourceMappingURL=easypiechart.directive.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlotDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlotDirective = (function () {
    function FlotDirective(el) {
        this.el = el;
        this.ready = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.element = $(this.el.nativeElement);
        if (!$.plot) {
            console.log('Flot chart no available.');
        }
        this.plot = null;
    }
    FlotDirective.prototype.ngOnInit = function () { };
    FlotDirective.prototype.ngOnChanges = function (changes) {
        if (!$.plot) {
            return;
        }
        if (changes['dataset']) {
            this.onDatasetChanged(this.dataset);
        }
        if (changes['series']) {
            this.onSerieToggled(this.series);
        }
    };
    FlotDirective.prototype.init = function () {
        var heightDefault = 220;
        this.width = this.attrWidth || '100%';
        this.height = this.height || heightDefault;
        this.element.css({
            width: this.width,
            height: this.height
        });
        var plotObj;
        if (!this.dataset || !this.options) {
            return;
        }
        plotObj = $.plot(this.el.nativeElement, this.dataset, this.options);
        if (this.ready) {
            this.ready.next({ plot: plotObj });
        }
        return plotObj;
    };
    FlotDirective.prototype.onDatasetChanged = function (dataset) {
        if (this.plot) {
            this.plot.setData(dataset);
            this.plot.setupGrid();
            return this.plot.draw();
        }
        else {
            this.plot = this.init();
            this.onSerieToggled(this.series);
            return this.plot;
        }
    };
    FlotDirective.prototype.onSerieToggled = function (series) {
        if (!this.plot || !series) {
            return;
        }
        var someData = this.plot.getData();
        for (var sName in series) {
            series[sName].forEach(toggleFor(sName));
        }
        this.plot.setData(someData);
        this.plot.draw();
        function toggleFor(sName) {
            return function (s, i) {
                if (someData[i] && someData[i][sName]) {
                    someData[i][sName].show = s;
                }
            };
        }
    };
    FlotDirective.prototype.ngOnDestroy = function () {
        if (this.plot) {
            this.plot.shutdown();
        }
    };
    return FlotDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FlotDirective.prototype, "dataset", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FlotDirective.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FlotDirective.prototype, "attrWidth", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], FlotDirective.prototype, "height", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FlotDirective.prototype, "series", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], FlotDirective.prototype, "ready", void 0);
FlotDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[flot]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], FlotDirective);

var _a;
//# sourceMappingURL=flot.directive.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JqcloudDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JqcloudDirective = (function () {
    function JqcloudDirective(element) {
        this.initialized = false; // flag to not update before plugin was initialized
        this.$elem = $(element.nativeElement);
        this.options = $.fn.jQCloud.defaults.get();
    }
    JqcloudDirective.prototype.ngOnInit = function () {
        var opts = {};
        if (this.width) {
            opts.width = this.width;
        }
        if (this.height) {
            opts.height = this.height;
        }
        if (this.steps) {
            opts.steps = this.steps;
        }
        $.extend(this.options, opts);
        this.$elem.jQCloud(this.words, opts);
        this.initialized = true;
    };
    JqcloudDirective.prototype.ngOnChanges = function (changes) {
        if (this.initialized && this.words && changes['words']) {
            this.$elem.jQCloud('update', this.words);
        }
    };
    JqcloudDirective.prototype.ngOnDestroy = function () {
        this.$elem.jQCloud('destroy');
    };
    return JqcloudDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], JqcloudDirective.prototype, "words", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], JqcloudDirective.prototype, "width", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], JqcloudDirective.prototype, "height", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], JqcloudDirective.prototype, "steps", void 0);
JqcloudDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[jqcloud]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], JqcloudDirective);

var _a;
//# sourceMappingURL=jqcloud.directive.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NowDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NowDirective = (function () {
    function NowDirective(element) {
        this.element = element;
    }
    NowDirective.prototype.ngOnInit = function () {
        this.updateTime();
        this.intervalId = setInterval(this.updateTime.bind(this), 1000);
    };
    NowDirective.prototype.updateTime = function () {
        var dt = __WEBPACK_IMPORTED_MODULE_1_moment__().format(this.format);
        this.element.nativeElement.innerHTML = dt;
    };
    NowDirective.prototype.ngOnDestroy = function () {
        clearInterval(this.intervalId);
    };
    return NowDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NowDirective.prototype, "format", void 0);
NowDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[now]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], NowDirective);

var _a;
//# sourceMappingURL=now.directive.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollableDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScrollableDirective = (function () {
    function ScrollableDirective(element) {
        this.element = element;
        this.defaultHeight = 250;
    }
    ScrollableDirective.prototype.ngOnInit = function () {
        $(this.element.nativeElement).slimScroll({
            height: (this.height || this.defaultHeight)
        });
    };
    return ScrollableDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], ScrollableDirective.prototype, "height", void 0);
ScrollableDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'scrollable'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], ScrollableDirective);

var _a;
//# sourceMappingURL=scrollable.directive.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SparklineDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SparklineDirective = (function () {
    function SparklineDirective(el) {
        this.el = el;
        // generate a unique resize event so we can detach later
        this.resizeEventId = 'resize.sparkline' + 1324;
        this.$element = $(el.nativeElement);
    }
    SparklineDirective.prototype.ngOnInit = function () {
        this.initSparkLine();
    };
    SparklineDirective.prototype.initSparkLine = function () {
        var _this = this;
        var options = this.sparkline, data = this.$element.data();
        if (!options) {
            options = data;
        }
        else {
            if (data) {
                options = $.extend({}, options, data);
            }
        }
        options.type = options.type || 'bar'; // default chart is bar
        options.disableHiddenCheck = true;
        this.$element.sparkline('html', options);
        if (options.resize) {
            $(window).on(this.resizeEventId, function () {
                _this.$element.sparkline('html', options);
            });
        }
    };
    SparklineDirective.prototype.ngOnDestroy = function () {
        $(window).off(this.resizeEventId);
    };
    return SparklineDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SparklineDirective.prototype, "sparkline", void 0);
SparklineDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[sparkline]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], SparklineDirective);

var _a;
//# sourceMappingURL=sparkline.directive.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VectormapDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VectormapDirective = (function () {
    function VectormapDirective(element) {
        this.element = element;
    }
    VectormapDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.$element = $(this.element.nativeElement);
        this.$element.css('height', this.mapHeight);
        if (!this.$element.vectorMap) {
            return;
        }
        this.$element.vectorMap({
            map: this.mapName,
            backgroundColor: this.mapOptions.bgColor,
            zoomMin: 1,
            zoomMax: 8,
            zoomOnScroll: false,
            regionStyle: {
                initial: {
                    'fill': this.mapOptions.regionFill,
                    'fill-opacity': 1,
                    'stroke': 'none',
                    'stroke-width': 1.5,
                    'stroke-opacity': 1
                },
                hover: {
                    'fill-opacity': 0.8
                },
                selected: {
                    fill: 'blue'
                },
                selectedHover: {}
            },
            focusOn: { x: 0.4, y: 0.6, scale: this.mapOptions.scale },
            markerStyle: {
                initial: {
                    fill: this.mapOptions.markerColor,
                    stroke: this.mapOptions.markerColor
                }
            },
            onRegionLabelShow: function (e, el, code) {
                if (_this.seriesData && _this.seriesData[code]) {
                    el.html(el.html() + ': ' + _this.seriesData[code] + ' visitors');
                }
            },
            markers: this.markersData,
            series: {
                regions: [{
                        values: this.seriesData,
                        scale: this.mapOptions.scaleColors,
                        normalizeFunction: 'polynomial'
                    }]
            },
        });
    };
    return VectormapDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], VectormapDirective.prototype, "mapHeight", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], VectormapDirective.prototype, "mapName", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], VectormapDirective.prototype, "mapOptions", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], VectormapDirective.prototype, "seriesData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], VectormapDirective.prototype, "markersData", void 0);
VectormapDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[vectormap]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], VectormapDirective);

var _a;
//# sourceMappingURL=vectormap.directive.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modernizr_js__ = __webpack_require__(883);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modernizr_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__modernizr_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_ika_jvectormap_jquery_jvectormap_1_2_2_min_js__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_ika_jvectormap_jquery_jvectormap_1_2_2_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__node_modules_ika_jvectormap_jquery_jvectormap_1_2_2_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_ika_jvectormap_jquery_jvectormap_world_mill_en_js__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_ika_jvectormap_jquery_jvectormap_world_mill_en_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_ika_jvectormap_jquery_jvectormap_world_mill_en_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_ika_jvectormap_jquery_jvectormap_us_mill_en_js__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_ika_jvectormap_jquery_jvectormap_us_mill_en_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__node_modules_ika_jvectormap_jquery_jvectormap_us_mill_en_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_jquery_slimscroll_jquery_slimscroll_js__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_jquery_slimscroll_jquery_slimscroll_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__node_modules_jquery_slimscroll_jquery_slimscroll_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_codemirror_lib_codemirror_js__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_codemirror_lib_codemirror_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__node_modules_codemirror_lib_codemirror_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_codemirror_mode_javascript_javascript_js__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_codemirror_mode_javascript_javascript_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__node_modules_codemirror_mode_javascript_javascript_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__node_modules_codemirror_mode_xml_xml_js__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__node_modules_codemirror_mode_xml_xml_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__node_modules_codemirror_mode_xml_xml_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__node_modules_codemirror_mode_htmlmixed_htmlmixed_js__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__node_modules_codemirror_mode_htmlmixed_htmlmixed_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__node_modules_codemirror_mode_htmlmixed_htmlmixed_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__node_modules_codemirror_mode_css_css_js__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__node_modules_codemirror_mode_css_css_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__node_modules_codemirror_mode_css_css_js__);
 // 'npm run modernizr' to create this file









//# sourceMappingURL=vendor.js.map

/***/ }),

/***/ 691:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 692:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 693:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 694:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 695:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 696:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 697:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 698:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 699:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 700:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 703:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "/* ========================================================================\n     Component: media-queries\n ========================================================================== */\n/* ========================================================================\n   Component: layout\n ========================================================================== */\nbody,\n.wrapper > section {\n  background-color: #f5f7fa; }\n\n.wrapper > .aside {\n  background-color: #fff; }\n\n/* ========================================================================\n   Component: top-navbar\n ========================================================================== */\n.topnavbar {\n  background-color: #fff; }\n  .topnavbar .navbar-header {\n    background-color: transparent;\n    background-image: linear-gradient(to right, #23b7e5 0%, #51c6ea 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF23B7E5', endColorstr='#FF51C6EA', GradientType=1); }\n    @media only screen and (min-width: 768px) {\n      .topnavbar .navbar-header {\n        background-image: none; } }\n  .topnavbar .navbar-nav > li > .navbar-text {\n    color: #23b7e5; }\n  .topnavbar .navbar-nav > li > a,\n  .topnavbar .navbar-nav > .open > a {\n    color: #23b7e5; }\n    .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n    .topnavbar .navbar-nav > .open > a:hover,\n    .topnavbar .navbar-nav > .open > a:focus {\n      color: #117391; }\n  .topnavbar .navbar-nav > .active > a, .topnavbar .navbar-nav > .active > a:hover, .topnavbar .navbar-nav > .active > a:focus,\n  .topnavbar .navbar-nav > .open > a,\n  .topnavbar .navbar-nav > .open > a:hover,\n  .topnavbar .navbar-nav > .open > a:focus {\n    background-color: transparent; }\n  .topnavbar .navbar-nav > li > [data-toggle='navbar-search'] {\n    color: #fff; }\n  .topnavbar .nav-wrapper {\n    background-color: #23b7e5;\n    background-image: linear-gradient(to right, #23b7e5 0%, #51c6ea 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF23B7E5', endColorstr='#FF51C6EA', GradientType=1); }\n\n@media only screen and (min-width: 768px) {\n  .topnavbar {\n    background-color: #23b7e5;\n    background-image: linear-gradient(to right, #23b7e5 0%, #51c6ea 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF23B7E5', endColorstr='#FF51C6EA', GradientType=1); }\n    .topnavbar .navbar-nav > .open > a, .topnavbar .navbar-nav > .open > a:hover, .topnavbar .navbar-nav > .open > a:focus {\n      box-shadow: 0 -3px 0 rgba(255, 255, 255, 0.5) inset; }\n    .topnavbar .navbar-nav > li > .navbar-text {\n      color: #fff; }\n    .topnavbar .navbar-nav > li > a,\n    .topnavbar .navbar-nav > .open > a {\n      color: #fff; }\n      .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n      .topnavbar .navbar-nav > .open > a:hover,\n      .topnavbar .navbar-nav > .open > a:focus {\n        color: #117391; } }\n\n/* ========================================================================\n   Component: sidebar\n ========================================================================== */\n.sidebar {\n  background-color: #fff; }\n  .sidebar .nav-heading {\n    color: #919DA8; }\n  .sidebar .nav > li > a,\n  .sidebar .nav > li > .nav-item {\n    color: #515253; }\n    .sidebar .nav > li > a:focus, .sidebar .nav > li > a:hover,\n    .sidebar .nav > li > .nav-item:focus,\n    .sidebar .nav > li > .nav-item:hover {\n      color: #23b7e5; }\n    .sidebar .nav > li > a > em,\n    .sidebar .nav > li > .nav-item > em {\n      color: inherits; }\n  .sidebar .nav > li.active,\n  .sidebar .nav > li.active > a,\n  .sidebar .nav > li.active .nav, .sidebar .nav > li.open,\n  .sidebar .nav > li.open > a,\n  .sidebar .nav > li.open .nav {\n    background-color: #fcfcfc;\n    color: #23b7e5; }\n  .sidebar .nav > li.active > a > em, .sidebar .nav > li.open > a > em {\n    color: #23b7e5; }\n  .sidebar .nav > li.active {\n    border-left-color: #23b7e5; }\n\n.sidebar-subnav {\n  background-color: #fff; }\n  .sidebar-subnav > .sidebar-subnav-header {\n    color: #515253; }\n  .sidebar-subnav > li > a,\n  .sidebar-subnav > li > .nav-item {\n    color: #515253; }\n    .sidebar-subnav > li > a:focus, .sidebar-subnav > li > a:hover,\n    .sidebar-subnav > li > .nav-item:focus,\n    .sidebar-subnav > li > .nav-item:hover {\n      color: #23b7e5; }\n  .sidebar-subnav > li.active > a,\n  .sidebar-subnav > li.active > .nav-item {\n    color: #23b7e5; }\n    .sidebar-subnav > li.active > a:after,\n    .sidebar-subnav > li.active > .nav-item:after {\n      border-color: #23b7e5;\n      background-color: #23b7e5; }\n\n/* ========================================================================\n   Component: offsidebar\n ========================================================================== */\n.offsidebar {\n  border-left: 1px solid greyscale(#cccccc);\n  background-color: #fff;\n  color: #515253; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "/* ========================================================================\n     Component: media-queries\n ========================================================================== */\n/* ========================================================================\n   Component: layout\n ========================================================================== */\nbody,\n.wrapper > section {\n  background-color: #f5f7fa; }\n\n.wrapper > .aside {\n  background-color: #fff; }\n\n/* ========================================================================\n   Component: top-navbar\n ========================================================================== */\n.topnavbar {\n  background-color: #fff; }\n  .topnavbar .navbar-header {\n    background-color: transparent;\n    background-image: linear-gradient(to right, #37bc9b 0%, #58ceb1 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF37BC9B', endColorstr='#FF58CEB1', GradientType=1); }\n    @media only screen and (min-width: 768px) {\n      .topnavbar .navbar-header {\n        background-image: none; } }\n  .topnavbar .navbar-nav > li > .navbar-text {\n    color: #37bc9b; }\n  .topnavbar .navbar-nav > li > a,\n  .topnavbar .navbar-nav > .open > a {\n    color: #37bc9b; }\n    .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n    .topnavbar .navbar-nav > .open > a:hover,\n    .topnavbar .navbar-nav > .open > a:focus {\n      color: #206d5a; }\n  .topnavbar .navbar-nav > .active > a, .topnavbar .navbar-nav > .active > a:hover, .topnavbar .navbar-nav > .active > a:focus,\n  .topnavbar .navbar-nav > .open > a,\n  .topnavbar .navbar-nav > .open > a:hover,\n  .topnavbar .navbar-nav > .open > a:focus {\n    background-color: transparent; }\n  .topnavbar .navbar-nav > li > [data-toggle='navbar-search'] {\n    color: #fff; }\n  .topnavbar .nav-wrapper {\n    background-color: #37bc9b;\n    background-image: linear-gradient(to right, #37bc9b 0%, #58ceb1 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF37BC9B', endColorstr='#FF58CEB1', GradientType=1); }\n\n@media only screen and (min-width: 768px) {\n  .topnavbar {\n    background-color: #37bc9b;\n    background-image: linear-gradient(to right, #37bc9b 0%, #58ceb1 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF37BC9B', endColorstr='#FF58CEB1', GradientType=1); }\n    .topnavbar .navbar-nav > .open > a, .topnavbar .navbar-nav > .open > a:hover, .topnavbar .navbar-nav > .open > a:focus {\n      box-shadow: 0 -3px 0 rgba(255, 255, 255, 0.5) inset; }\n    .topnavbar .navbar-nav > li > .navbar-text {\n      color: #fff; }\n    .topnavbar .navbar-nav > li > a,\n    .topnavbar .navbar-nav > .open > a {\n      color: #fff; }\n      .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n      .topnavbar .navbar-nav > .open > a:hover,\n      .topnavbar .navbar-nav > .open > a:focus {\n        color: #206d5a; } }\n\n/* ========================================================================\n   Component: sidebar\n ========================================================================== */\n.sidebar {\n  background-color: #fff; }\n  .sidebar .nav-heading {\n    color: #919DA8; }\n  .sidebar .nav > li > a,\n  .sidebar .nav > li > .nav-item {\n    color: #515253; }\n    .sidebar .nav > li > a:focus, .sidebar .nav > li > a:hover,\n    .sidebar .nav > li > .nav-item:focus,\n    .sidebar .nav > li > .nav-item:hover {\n      color: #37bc9b; }\n    .sidebar .nav > li > a > em,\n    .sidebar .nav > li > .nav-item > em {\n      color: inherits; }\n  .sidebar .nav > li.active,\n  .sidebar .nav > li.active > a,\n  .sidebar .nav > li.active .nav, .sidebar .nav > li.open,\n  .sidebar .nav > li.open > a,\n  .sidebar .nav > li.open .nav {\n    background-color: #fcfcfc;\n    color: #37bc9b; }\n  .sidebar .nav > li.active > a > em, .sidebar .nav > li.open > a > em {\n    color: #37bc9b; }\n  .sidebar .nav > li.active {\n    border-left-color: #37bc9b; }\n\n.sidebar-subnav {\n  background-color: #fff; }\n  .sidebar-subnav > .sidebar-subnav-header {\n    color: #515253; }\n  .sidebar-subnav > li > a,\n  .sidebar-subnav > li > .nav-item {\n    color: #515253; }\n    .sidebar-subnav > li > a:focus, .sidebar-subnav > li > a:hover,\n    .sidebar-subnav > li > .nav-item:focus,\n    .sidebar-subnav > li > .nav-item:hover {\n      color: #37bc9b; }\n  .sidebar-subnav > li.active > a,\n  .sidebar-subnav > li.active > .nav-item {\n    color: #37bc9b; }\n    .sidebar-subnav > li.active > a:after,\n    .sidebar-subnav > li.active > .nav-item:after {\n      border-color: #37bc9b;\n      background-color: #37bc9b; }\n\n/* ========================================================================\n   Component: offsidebar\n ========================================================================== */\n.offsidebar {\n  border-left: 1px solid greyscale(#cccccc);\n  background-color: #fff;\n  color: #515253; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "/* ========================================================================\n     Component: media-queries\n ========================================================================== */\n/* ========================================================================\n   Component: layout\n ========================================================================== */\nbody,\n.wrapper > section {\n  background-color: #f5f7fa; }\n\n.wrapper > .aside {\n  background-color: #fff; }\n\n/* ========================================================================\n   Component: top-navbar\n ========================================================================== */\n.topnavbar {\n  background-color: #fff; }\n  .topnavbar .navbar-header {\n    background-color: transparent;\n    background-image: linear-gradient(to right, #7266ba 0%, #9289ca 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF7266BA', endColorstr='#FF9289CA', GradientType=1); }\n    @media only screen and (min-width: 768px) {\n      .topnavbar .navbar-header {\n        background-image: none; } }\n  .topnavbar .navbar-nav > li > .navbar-text {\n    color: #7266ba; }\n  .topnavbar .navbar-nav > li > a,\n  .topnavbar .navbar-nav > .open > a {\n    color: #7266ba; }\n    .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n    .topnavbar .navbar-nav > .open > a:hover,\n    .topnavbar .navbar-nav > .open > a:focus {\n      color: #443a80; }\n  .topnavbar .navbar-nav > .active > a, .topnavbar .navbar-nav > .active > a:hover, .topnavbar .navbar-nav > .active > a:focus,\n  .topnavbar .navbar-nav > .open > a,\n  .topnavbar .navbar-nav > .open > a:hover,\n  .topnavbar .navbar-nav > .open > a:focus {\n    background-color: transparent; }\n  .topnavbar .navbar-nav > li > [data-toggle='navbar-search'] {\n    color: #fff; }\n  .topnavbar .nav-wrapper {\n    background-color: #7266ba;\n    background-image: linear-gradient(to right, #7266ba 0%, #9289ca 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF7266BA', endColorstr='#FF9289CA', GradientType=1); }\n\n@media only screen and (min-width: 768px) {\n  .topnavbar {\n    background-color: #7266ba;\n    background-image: linear-gradient(to right, #7266ba 0%, #9289ca 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF7266BA', endColorstr='#FF9289CA', GradientType=1); }\n    .topnavbar .navbar-nav > .open > a, .topnavbar .navbar-nav > .open > a:hover, .topnavbar .navbar-nav > .open > a:focus {\n      box-shadow: 0 -3px 0 rgba(255, 255, 255, 0.5) inset; }\n    .topnavbar .navbar-nav > li > .navbar-text {\n      color: #fff; }\n    .topnavbar .navbar-nav > li > a,\n    .topnavbar .navbar-nav > .open > a {\n      color: #fff; }\n      .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n      .topnavbar .navbar-nav > .open > a:hover,\n      .topnavbar .navbar-nav > .open > a:focus {\n        color: #443a80; } }\n\n/* ========================================================================\n   Component: sidebar\n ========================================================================== */\n.sidebar {\n  background-color: #fff; }\n  .sidebar .nav-heading {\n    color: #919DA8; }\n  .sidebar .nav > li > a,\n  .sidebar .nav > li > .nav-item {\n    color: #515253; }\n    .sidebar .nav > li > a:focus, .sidebar .nav > li > a:hover,\n    .sidebar .nav > li > .nav-item:focus,\n    .sidebar .nav > li > .nav-item:hover {\n      color: #7266ba; }\n    .sidebar .nav > li > a > em,\n    .sidebar .nav > li > .nav-item > em {\n      color: inherits; }\n  .sidebar .nav > li.active,\n  .sidebar .nav > li.active > a,\n  .sidebar .nav > li.active .nav, .sidebar .nav > li.open,\n  .sidebar .nav > li.open > a,\n  .sidebar .nav > li.open .nav {\n    background-color: #fcfcfc;\n    color: #7266ba; }\n  .sidebar .nav > li.active > a > em, .sidebar .nav > li.open > a > em {\n    color: #7266ba; }\n  .sidebar .nav > li.active {\n    border-left-color: #7266ba; }\n\n.sidebar-subnav {\n  background-color: #fff; }\n  .sidebar-subnav > .sidebar-subnav-header {\n    color: #515253; }\n  .sidebar-subnav > li > a,\n  .sidebar-subnav > li > .nav-item {\n    color: #515253; }\n    .sidebar-subnav > li > a:focus, .sidebar-subnav > li > a:hover,\n    .sidebar-subnav > li > .nav-item:focus,\n    .sidebar-subnav > li > .nav-item:hover {\n      color: #7266ba; }\n  .sidebar-subnav > li.active > a,\n  .sidebar-subnav > li.active > .nav-item {\n    color: #7266ba; }\n    .sidebar-subnav > li.active > a:after,\n    .sidebar-subnav > li.active > .nav-item:after {\n      border-color: #7266ba;\n      background-color: #7266ba; }\n\n/* ========================================================================\n   Component: offsidebar\n ========================================================================== */\n.offsidebar {\n  border-left: 1px solid greyscale(#cccccc);\n  background-color: #fff;\n  color: #515253; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "/* ========================================================================\n     Component: media-queries\n ========================================================================== */\n/* ========================================================================\n   Component: layout\n ========================================================================== */\nbody,\n.wrapper > section {\n  background-color: #f5f7fa; }\n\n.wrapper > .aside {\n  background-color: #fff; }\n\n/* ========================================================================\n   Component: top-navbar\n ========================================================================== */\n.topnavbar {\n  background-color: #fff; }\n  .topnavbar .navbar-header {\n    background-color: transparent;\n    background-image: linear-gradient(to right, #f05050 0%, #f47f7f 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFF05050', endColorstr='#FFF47F7F', GradientType=1); }\n    @media only screen and (min-width: 768px) {\n      .topnavbar .navbar-header {\n        background-image: none; } }\n  .topnavbar .navbar-nav > li > .navbar-text {\n    color: #f05050; }\n  .topnavbar .navbar-nav > li > a,\n  .topnavbar .navbar-nav > .open > a {\n    color: #f05050; }\n    .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n    .topnavbar .navbar-nav > .open > a:hover,\n    .topnavbar .navbar-nav > .open > a:focus {\n      color: #c91111; }\n  .topnavbar .navbar-nav > .active > a, .topnavbar .navbar-nav > .active > a:hover, .topnavbar .navbar-nav > .active > a:focus,\n  .topnavbar .navbar-nav > .open > a,\n  .topnavbar .navbar-nav > .open > a:hover,\n  .topnavbar .navbar-nav > .open > a:focus {\n    background-color: transparent; }\n  .topnavbar .navbar-nav > li > [data-toggle='navbar-search'] {\n    color: #fff; }\n  .topnavbar .nav-wrapper {\n    background-color: #f05050;\n    background-image: linear-gradient(to right, #f05050 0%, #f47f7f 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFF05050', endColorstr='#FFF47F7F', GradientType=1); }\n\n@media only screen and (min-width: 768px) {\n  .topnavbar {\n    background-color: #f05050;\n    background-image: linear-gradient(to right, #f05050 0%, #f47f7f 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFF05050', endColorstr='#FFF47F7F', GradientType=1); }\n    .topnavbar .navbar-nav > .open > a, .topnavbar .navbar-nav > .open > a:hover, .topnavbar .navbar-nav > .open > a:focus {\n      box-shadow: 0 -3px 0 rgba(255, 255, 255, 0.5) inset; }\n    .topnavbar .navbar-nav > li > .navbar-text {\n      color: #fff; }\n    .topnavbar .navbar-nav > li > a,\n    .topnavbar .navbar-nav > .open > a {\n      color: #fff; }\n      .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n      .topnavbar .navbar-nav > .open > a:hover,\n      .topnavbar .navbar-nav > .open > a:focus {\n        color: #c91111; } }\n\n/* ========================================================================\n   Component: sidebar\n ========================================================================== */\n.sidebar {\n  background-color: #fff; }\n  .sidebar .nav-heading {\n    color: #919DA8; }\n  .sidebar .nav > li > a,\n  .sidebar .nav > li > .nav-item {\n    color: #515253; }\n    .sidebar .nav > li > a:focus, .sidebar .nav > li > a:hover,\n    .sidebar .nav > li > .nav-item:focus,\n    .sidebar .nav > li > .nav-item:hover {\n      color: #f05050; }\n    .sidebar .nav > li > a > em,\n    .sidebar .nav > li > .nav-item > em {\n      color: inherits; }\n  .sidebar .nav > li.active,\n  .sidebar .nav > li.active > a,\n  .sidebar .nav > li.active .nav, .sidebar .nav > li.open,\n  .sidebar .nav > li.open > a,\n  .sidebar .nav > li.open .nav {\n    background-color: #fcfcfc;\n    color: #f05050; }\n  .sidebar .nav > li.active > a > em, .sidebar .nav > li.open > a > em {\n    color: #f05050; }\n  .sidebar .nav > li.active {\n    border-left-color: #f05050; }\n\n.sidebar-subnav {\n  background-color: #fff; }\n  .sidebar-subnav > .sidebar-subnav-header {\n    color: #515253; }\n  .sidebar-subnav > li > a,\n  .sidebar-subnav > li > .nav-item {\n    color: #515253; }\n    .sidebar-subnav > li > a:focus, .sidebar-subnav > li > a:hover,\n    .sidebar-subnav > li > .nav-item:focus,\n    .sidebar-subnav > li > .nav-item:hover {\n      color: #f05050; }\n  .sidebar-subnav > li.active > a,\n  .sidebar-subnav > li.active > .nav-item {\n    color: #f05050; }\n    .sidebar-subnav > li.active > a:after,\n    .sidebar-subnav > li.active > .nav-item:after {\n      border-color: #f05050;\n      background-color: #f05050; }\n\n/* ========================================================================\n   Component: offsidebar\n ========================================================================== */\n.offsidebar {\n  border-left: 1px solid greyscale(#cccccc);\n  background-color: #fff;\n  color: #515253; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "/* ========================================================================\n     Component: media-queries\n ========================================================================== */\n/* ========================================================================\n   Component: layout\n ========================================================================== */\nbody,\n.wrapper > section {\n  background-color: #f5f7fa; }\n\n.wrapper > .aside {\n  background-color: #3a3f51; }\n\n/* ========================================================================\n   Component: top-navbar\n ========================================================================== */\n.topnavbar {\n  background-color: #fff; }\n  .topnavbar .navbar-header {\n    background-color: transparent;\n    background-image: linear-gradient(to right, #1797be 0%, #23b7e5 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF1797BE', endColorstr='#FF23B7E5', GradientType=1); }\n    @media only screen and (min-width: 768px) {\n      .topnavbar .navbar-header {\n        background-image: none; } }\n  .topnavbar .navbar-nav > li > .navbar-text {\n    color: #1797be; }\n  .topnavbar .navbar-nav > li > a,\n  .topnavbar .navbar-nav > .open > a {\n    color: #1797be; }\n    .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n    .topnavbar .navbar-nav > .open > a:hover,\n    .topnavbar .navbar-nav > .open > a:focus {\n      color: #0c4f63; }\n  .topnavbar .navbar-nav > .active > a, .topnavbar .navbar-nav > .active > a:hover, .topnavbar .navbar-nav > .active > a:focus,\n  .topnavbar .navbar-nav > .open > a,\n  .topnavbar .navbar-nav > .open > a:hover,\n  .topnavbar .navbar-nav > .open > a:focus {\n    background-color: transparent; }\n  .topnavbar .navbar-nav > li > [data-toggle='navbar-search'] {\n    color: #fff; }\n  .topnavbar .nav-wrapper {\n    background-color: #1797be;\n    background-image: linear-gradient(to right, #1797be 0%, #23b7e5 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF1797BE', endColorstr='#FF23B7E5', GradientType=1); }\n\n@media only screen and (min-width: 768px) {\n  .topnavbar {\n    background-color: #1797be;\n    background-image: linear-gradient(to right, #1797be 0%, #23b7e5 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF1797BE', endColorstr='#FF23B7E5', GradientType=1); }\n    .topnavbar .navbar-nav > .open > a, .topnavbar .navbar-nav > .open > a:hover, .topnavbar .navbar-nav > .open > a:focus {\n      box-shadow: 0 -3px 0 rgba(255, 255, 255, 0.5) inset; }\n    .topnavbar .navbar-nav > li > .navbar-text {\n      color: #fff; }\n    .topnavbar .navbar-nav > li > a,\n    .topnavbar .navbar-nav > .open > a {\n      color: #fff; }\n      .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n      .topnavbar .navbar-nav > .open > a:hover,\n      .topnavbar .navbar-nav > .open > a:focus {\n        color: #0c4f63; } }\n\n/* ========================================================================\n   Component: sidebar\n ========================================================================== */\n.sidebar {\n  background-color: #3a3f51; }\n  .sidebar .nav-heading {\n    color: #919DA8; }\n  .sidebar .nav > li > a,\n  .sidebar .nav > li > .nav-item {\n    color: #e1e2e3; }\n    .sidebar .nav > li > a:focus, .sidebar .nav > li > a:hover,\n    .sidebar .nav > li > .nav-item:focus,\n    .sidebar .nav > li > .nav-item:hover {\n      color: #1797be; }\n    .sidebar .nav > li > a > em,\n    .sidebar .nav > li > .nav-item > em {\n      color: inherits; }\n  .sidebar .nav > li.active,\n  .sidebar .nav > li.active > a,\n  .sidebar .nav > li.active .nav, .sidebar .nav > li.open,\n  .sidebar .nav > li.open > a,\n  .sidebar .nav > li.open .nav {\n    background-color: #383d4e;\n    color: #1797be; }\n  .sidebar .nav > li.active > a > em, .sidebar .nav > li.open > a > em {\n    color: #1797be; }\n  .sidebar .nav > li.active {\n    border-left-color: #1797be; }\n\n.sidebar-subnav {\n  background-color: #3a3f51; }\n  .sidebar-subnav > .sidebar-subnav-header {\n    color: #e1e2e3; }\n  .sidebar-subnav > li > a,\n  .sidebar-subnav > li > .nav-item {\n    color: #e1e2e3; }\n    .sidebar-subnav > li > a:focus, .sidebar-subnav > li > a:hover,\n    .sidebar-subnav > li > .nav-item:focus,\n    .sidebar-subnav > li > .nav-item:hover {\n      color: #1797be; }\n  .sidebar-subnav > li.active > a,\n  .sidebar-subnav > li.active > .nav-item {\n    color: #1797be; }\n    .sidebar-subnav > li.active > a:after,\n    .sidebar-subnav > li.active > .nav-item:after {\n      border-color: #1797be;\n      background-color: #1797be; }\n\n/* ========================================================================\n   Component: offsidebar\n ========================================================================== */\n.offsidebar {\n  border-left: 1px solid greyscale(#cccccc);\n  background-color: #fff;\n  color: #515253; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "/* ========================================================================\n     Component: media-queries\n ========================================================================== */\n/* ========================================================================\n   Component: layout\n ========================================================================== */\nbody,\n.wrapper > section {\n  background-color: #f5f7fa; }\n\n.wrapper > .aside {\n  background-color: #3a3f51; }\n\n/* ========================================================================\n   Component: top-navbar\n ========================================================================== */\n.topnavbar {\n  background-color: #fff; }\n  .topnavbar .navbar-header {\n    background-color: transparent;\n    background-image: linear-gradient(to right, #2b957a 0%, #37bc9b 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF2B957A', endColorstr='#FF37BC9B', GradientType=1); }\n    @media only screen and (min-width: 768px) {\n      .topnavbar .navbar-header {\n        background-image: none; } }\n  .topnavbar .navbar-nav > li > .navbar-text {\n    color: #2b957a; }\n  .topnavbar .navbar-nav > li > a,\n  .topnavbar .navbar-nav > .open > a {\n    color: #2b957a; }\n    .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n    .topnavbar .navbar-nav > .open > a:hover,\n    .topnavbar .navbar-nav > .open > a:focus {\n      color: #144639; }\n  .topnavbar .navbar-nav > .active > a, .topnavbar .navbar-nav > .active > a:hover, .topnavbar .navbar-nav > .active > a:focus,\n  .topnavbar .navbar-nav > .open > a,\n  .topnavbar .navbar-nav > .open > a:hover,\n  .topnavbar .navbar-nav > .open > a:focus {\n    background-color: transparent; }\n  .topnavbar .navbar-nav > li > [data-toggle='navbar-search'] {\n    color: #fff; }\n  .topnavbar .nav-wrapper {\n    background-color: #2b957a;\n    background-image: linear-gradient(to right, #2b957a 0%, #37bc9b 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF2B957A', endColorstr='#FF37BC9B', GradientType=1); }\n\n@media only screen and (min-width: 768px) {\n  .topnavbar {\n    background-color: #2b957a;\n    background-image: linear-gradient(to right, #2b957a 0%, #37bc9b 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF2B957A', endColorstr='#FF37BC9B', GradientType=1); }\n    .topnavbar .navbar-nav > .open > a, .topnavbar .navbar-nav > .open > a:hover, .topnavbar .navbar-nav > .open > a:focus {\n      box-shadow: 0 -3px 0 rgba(255, 255, 255, 0.5) inset; }\n    .topnavbar .navbar-nav > li > .navbar-text {\n      color: #fff; }\n    .topnavbar .navbar-nav > li > a,\n    .topnavbar .navbar-nav > .open > a {\n      color: #fff; }\n      .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n      .topnavbar .navbar-nav > .open > a:hover,\n      .topnavbar .navbar-nav > .open > a:focus {\n        color: #144639; } }\n\n/* ========================================================================\n   Component: sidebar\n ========================================================================== */\n.sidebar {\n  background-color: #3a3f51; }\n  .sidebar .nav-heading {\n    color: #919DA8; }\n  .sidebar .nav > li > a,\n  .sidebar .nav > li > .nav-item {\n    color: #e1e2e3; }\n    .sidebar .nav > li > a:focus, .sidebar .nav > li > a:hover,\n    .sidebar .nav > li > .nav-item:focus,\n    .sidebar .nav > li > .nav-item:hover {\n      color: #2b957a; }\n    .sidebar .nav > li > a > em,\n    .sidebar .nav > li > .nav-item > em {\n      color: inherits; }\n  .sidebar .nav > li.active,\n  .sidebar .nav > li.active > a,\n  .sidebar .nav > li.active .nav, .sidebar .nav > li.open,\n  .sidebar .nav > li.open > a,\n  .sidebar .nav > li.open .nav {\n    background-color: #383d4e;\n    color: #2b957a; }\n  .sidebar .nav > li.active > a > em, .sidebar .nav > li.open > a > em {\n    color: #2b957a; }\n  .sidebar .nav > li.active {\n    border-left-color: #2b957a; }\n\n.sidebar-subnav {\n  background-color: #3a3f51; }\n  .sidebar-subnav > .sidebar-subnav-header {\n    color: #e1e2e3; }\n  .sidebar-subnav > li > a,\n  .sidebar-subnav > li > .nav-item {\n    color: #e1e2e3; }\n    .sidebar-subnav > li > a:focus, .sidebar-subnav > li > a:hover,\n    .sidebar-subnav > li > .nav-item:focus,\n    .sidebar-subnav > li > .nav-item:hover {\n      color: #2b957a; }\n  .sidebar-subnav > li.active > a,\n  .sidebar-subnav > li.active > .nav-item {\n    color: #2b957a; }\n    .sidebar-subnav > li.active > a:after,\n    .sidebar-subnav > li.active > .nav-item:after {\n      border-color: #2b957a;\n      background-color: #2b957a; }\n\n/* ========================================================================\n   Component: offsidebar\n ========================================================================== */\n.offsidebar {\n  border-left: 1px solid greyscale(#cccccc);\n  background-color: #fff;\n  color: #515253; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 709:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "/* ========================================================================\n     Component: media-queries\n ========================================================================== */\n/* ========================================================================\n   Component: layout\n ========================================================================== */\nbody,\n.wrapper > section {\n  background-color: #f5f7fa; }\n\n.wrapper > .aside {\n  background-color: #3a3f51; }\n\n/* ========================================================================\n   Component: top-navbar\n ========================================================================== */\n.topnavbar {\n  background-color: #fff; }\n  .topnavbar .navbar-header {\n    background-color: transparent;\n    background-image: linear-gradient(to right, #564aa3 0%, #7266ba 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF564AA3', endColorstr='#FF7266BA', GradientType=1); }\n    @media only screen and (min-width: 768px) {\n      .topnavbar .navbar-header {\n        background-image: none; } }\n  .topnavbar .navbar-nav > li > .navbar-text {\n    color: #564aa3; }\n  .topnavbar .navbar-nav > li > a,\n  .topnavbar .navbar-nav > .open > a {\n    color: #564aa3; }\n    .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n    .topnavbar .navbar-nav > .open > a:hover,\n    .topnavbar .navbar-nav > .open > a:focus {\n      color: #312a5d; }\n  .topnavbar .navbar-nav > .active > a, .topnavbar .navbar-nav > .active > a:hover, .topnavbar .navbar-nav > .active > a:focus,\n  .topnavbar .navbar-nav > .open > a,\n  .topnavbar .navbar-nav > .open > a:hover,\n  .topnavbar .navbar-nav > .open > a:focus {\n    background-color: transparent; }\n  .topnavbar .navbar-nav > li > [data-toggle='navbar-search'] {\n    color: #fff; }\n  .topnavbar .nav-wrapper {\n    background-color: #564aa3;\n    background-image: linear-gradient(to right, #564aa3 0%, #7266ba 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF564AA3', endColorstr='#FF7266BA', GradientType=1); }\n\n@media only screen and (min-width: 768px) {\n  .topnavbar {\n    background-color: #564aa3;\n    background-image: linear-gradient(to right, #564aa3 0%, #7266ba 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FF564AA3', endColorstr='#FF7266BA', GradientType=1); }\n    .topnavbar .navbar-nav > .open > a, .topnavbar .navbar-nav > .open > a:hover, .topnavbar .navbar-nav > .open > a:focus {\n      box-shadow: 0 -3px 0 rgba(255, 255, 255, 0.5) inset; }\n    .topnavbar .navbar-nav > li > .navbar-text {\n      color: #fff; }\n    .topnavbar .navbar-nav > li > a,\n    .topnavbar .navbar-nav > .open > a {\n      color: #fff; }\n      .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n      .topnavbar .navbar-nav > .open > a:hover,\n      .topnavbar .navbar-nav > .open > a:focus {\n        color: #312a5d; } }\n\n/* ========================================================================\n   Component: sidebar\n ========================================================================== */\n.sidebar {\n  background-color: #3a3f51; }\n  .sidebar .nav-heading {\n    color: #919DA8; }\n  .sidebar .nav > li > a,\n  .sidebar .nav > li > .nav-item {\n    color: #e1e2e3; }\n    .sidebar .nav > li > a:focus, .sidebar .nav > li > a:hover,\n    .sidebar .nav > li > .nav-item:focus,\n    .sidebar .nav > li > .nav-item:hover {\n      color: #9289ca; }\n    .sidebar .nav > li > a > em,\n    .sidebar .nav > li > .nav-item > em {\n      color: inherits; }\n  .sidebar .nav > li.active,\n  .sidebar .nav > li.active > a,\n  .sidebar .nav > li.active .nav, .sidebar .nav > li.open,\n  .sidebar .nav > li.open > a,\n  .sidebar .nav > li.open .nav {\n    background-color: #383d4e;\n    color: #9289ca; }\n  .sidebar .nav > li.active > a > em, .sidebar .nav > li.open > a > em {\n    color: #9289ca; }\n  .sidebar .nav > li.active {\n    border-left-color: #9289ca; }\n\n.sidebar-subnav {\n  background-color: #3a3f51; }\n  .sidebar-subnav > .sidebar-subnav-header {\n    color: #e1e2e3; }\n  .sidebar-subnav > li > a,\n  .sidebar-subnav > li > .nav-item {\n    color: #e1e2e3; }\n    .sidebar-subnav > li > a:focus, .sidebar-subnav > li > a:hover,\n    .sidebar-subnav > li > .nav-item:focus,\n    .sidebar-subnav > li > .nav-item:hover {\n      color: #9289ca; }\n  .sidebar-subnav > li.active > a,\n  .sidebar-subnav > li.active > .nav-item {\n    color: #9289ca; }\n    .sidebar-subnav > li.active > a:after,\n    .sidebar-subnav > li.active > .nav-item:after {\n      border-color: #9289ca;\n      background-color: #9289ca; }\n\n/* ========================================================================\n   Component: offsidebar\n ========================================================================== */\n.offsidebar {\n  border-left: 1px solid greyscale(#cccccc);\n  background-color: #fff;\n  color: #515253; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 710:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "/* ========================================================================\n     Component: media-queries\n ========================================================================== */\n/* ========================================================================\n   Component: layout\n ========================================================================== */\nbody,\n.wrapper > section {\n  background-color: #f5f7fa; }\n\n.wrapper > .aside {\n  background-color: #3a3f51; }\n\n/* ========================================================================\n   Component: top-navbar\n ========================================================================== */\n.topnavbar {\n  background-color: #fff; }\n  .topnavbar .navbar-header {\n    background-color: transparent;\n    background-image: linear-gradient(to right, #ec2121 0%, #f05050 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFEC2121', endColorstr='#FFF05050', GradientType=1); }\n    @media only screen and (min-width: 768px) {\n      .topnavbar .navbar-header {\n        background-image: none; } }\n  .topnavbar .navbar-nav > li > .navbar-text {\n    color: #ec2121; }\n  .topnavbar .navbar-nav > li > a,\n  .topnavbar .navbar-nav > .open > a {\n    color: #ec2121; }\n    .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n    .topnavbar .navbar-nav > .open > a:hover,\n    .topnavbar .navbar-nav > .open > a:focus {\n      color: #9a0d0d; }\n  .topnavbar .navbar-nav > .active > a, .topnavbar .navbar-nav > .active > a:hover, .topnavbar .navbar-nav > .active > a:focus,\n  .topnavbar .navbar-nav > .open > a,\n  .topnavbar .navbar-nav > .open > a:hover,\n  .topnavbar .navbar-nav > .open > a:focus {\n    background-color: transparent; }\n  .topnavbar .navbar-nav > li > [data-toggle='navbar-search'] {\n    color: #fff; }\n  .topnavbar .nav-wrapper {\n    background-color: #ec2121;\n    background-image: linear-gradient(to right, #ec2121 0%, #f05050 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFEC2121', endColorstr='#FFF05050', GradientType=1); }\n\n@media only screen and (min-width: 768px) {\n  .topnavbar {\n    background-color: #ec2121;\n    background-image: linear-gradient(to right, #ec2121 0%, #f05050 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#FFEC2121', endColorstr='#FFF05050', GradientType=1); }\n    .topnavbar .navbar-nav > .open > a, .topnavbar .navbar-nav > .open > a:hover, .topnavbar .navbar-nav > .open > a:focus {\n      box-shadow: 0 -3px 0 rgba(255, 255, 255, 0.5) inset; }\n    .topnavbar .navbar-nav > li > .navbar-text {\n      color: #fff; }\n    .topnavbar .navbar-nav > li > a,\n    .topnavbar .navbar-nav > .open > a {\n      color: #fff; }\n      .topnavbar .navbar-nav > li > a:hover, .topnavbar .navbar-nav > li > a:focus,\n      .topnavbar .navbar-nav > .open > a:hover,\n      .topnavbar .navbar-nav > .open > a:focus {\n        color: #9a0d0d; } }\n\n/* ========================================================================\n   Component: sidebar\n ========================================================================== */\n.sidebar {\n  background-color: #3a3f51; }\n  .sidebar .nav-heading {\n    color: #919DA8; }\n  .sidebar .nav > li > a,\n  .sidebar .nav > li > .nav-item {\n    color: #e1e2e3; }\n    .sidebar .nav > li > a:focus, .sidebar .nav > li > a:hover,\n    .sidebar .nav > li > .nav-item:focus,\n    .sidebar .nav > li > .nav-item:hover {\n      color: #f05050; }\n    .sidebar .nav > li > a > em,\n    .sidebar .nav > li > .nav-item > em {\n      color: inherits; }\n  .sidebar .nav > li.active,\n  .sidebar .nav > li.active > a,\n  .sidebar .nav > li.active .nav, .sidebar .nav > li.open,\n  .sidebar .nav > li.open > a,\n  .sidebar .nav > li.open .nav {\n    background-color: #383d4e;\n    color: #f05050; }\n  .sidebar .nav > li.active > a > em, .sidebar .nav > li.open > a > em {\n    color: #f05050; }\n  .sidebar .nav > li.active {\n    border-left-color: #f05050; }\n\n.sidebar-subnav {\n  background-color: #3a3f51; }\n  .sidebar-subnav > .sidebar-subnav-header {\n    color: #e1e2e3; }\n  .sidebar-subnav > li > a,\n  .sidebar-subnav > li > .nav-item {\n    color: #e1e2e3; }\n    .sidebar-subnav > li > a:focus, .sidebar-subnav > li > a:hover,\n    .sidebar-subnav > li > .nav-item:focus,\n    .sidebar-subnav > li > .nav-item:hover {\n      color: #f05050; }\n  .sidebar-subnav > li.active > a,\n  .sidebar-subnav > li.active > .nav-item {\n    color: #f05050; }\n    .sidebar-subnav > li.active > a:after,\n    .sidebar-subnav > li.active > .nav-item:after {\n      border-color: #f05050;\n      background-color: #f05050; }\n\n/* ========================================================================\n   Component: offsidebar\n ========================================================================== */\n.offsidebar {\n  border-left: 1px solid greyscale(#cccccc);\n  background-color: #fff;\n  color: #515253; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 726:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 226,
	"./af.js": 226,
	"./ar": 233,
	"./ar-dz": 227,
	"./ar-dz.js": 227,
	"./ar-kw": 228,
	"./ar-kw.js": 228,
	"./ar-ly": 229,
	"./ar-ly.js": 229,
	"./ar-ma": 230,
	"./ar-ma.js": 230,
	"./ar-sa": 231,
	"./ar-sa.js": 231,
	"./ar-tn": 232,
	"./ar-tn.js": 232,
	"./ar.js": 233,
	"./az": 234,
	"./az.js": 234,
	"./be": 235,
	"./be.js": 235,
	"./bg": 236,
	"./bg.js": 236,
	"./bn": 237,
	"./bn.js": 237,
	"./bo": 238,
	"./bo.js": 238,
	"./br": 239,
	"./br.js": 239,
	"./bs": 240,
	"./bs.js": 240,
	"./ca": 241,
	"./ca.js": 241,
	"./cs": 242,
	"./cs.js": 242,
	"./cv": 243,
	"./cv.js": 243,
	"./cy": 244,
	"./cy.js": 244,
	"./da": 245,
	"./da.js": 245,
	"./de": 248,
	"./de-at": 246,
	"./de-at.js": 246,
	"./de-ch": 247,
	"./de-ch.js": 247,
	"./de.js": 248,
	"./dv": 249,
	"./dv.js": 249,
	"./el": 250,
	"./el.js": 250,
	"./en-au": 251,
	"./en-au.js": 251,
	"./en-ca": 252,
	"./en-ca.js": 252,
	"./en-gb": 253,
	"./en-gb.js": 253,
	"./en-ie": 254,
	"./en-ie.js": 254,
	"./en-nz": 255,
	"./en-nz.js": 255,
	"./eo": 256,
	"./eo.js": 256,
	"./es": 258,
	"./es-do": 257,
	"./es-do.js": 257,
	"./es.js": 258,
	"./et": 259,
	"./et.js": 259,
	"./eu": 260,
	"./eu.js": 260,
	"./fa": 261,
	"./fa.js": 261,
	"./fi": 262,
	"./fi.js": 262,
	"./fo": 263,
	"./fo.js": 263,
	"./fr": 266,
	"./fr-ca": 264,
	"./fr-ca.js": 264,
	"./fr-ch": 265,
	"./fr-ch.js": 265,
	"./fr.js": 266,
	"./fy": 267,
	"./fy.js": 267,
	"./gd": 268,
	"./gd.js": 268,
	"./gl": 269,
	"./gl.js": 269,
	"./gom-latn": 270,
	"./gom-latn.js": 270,
	"./he": 271,
	"./he.js": 271,
	"./hi": 272,
	"./hi.js": 272,
	"./hr": 273,
	"./hr.js": 273,
	"./hu": 274,
	"./hu.js": 274,
	"./hy-am": 275,
	"./hy-am.js": 275,
	"./id": 276,
	"./id.js": 276,
	"./is": 277,
	"./is.js": 277,
	"./it": 278,
	"./it.js": 278,
	"./ja": 279,
	"./ja.js": 279,
	"./jv": 280,
	"./jv.js": 280,
	"./ka": 281,
	"./ka.js": 281,
	"./kk": 282,
	"./kk.js": 282,
	"./km": 283,
	"./km.js": 283,
	"./kn": 284,
	"./kn.js": 284,
	"./ko": 285,
	"./ko.js": 285,
	"./ky": 286,
	"./ky.js": 286,
	"./lb": 287,
	"./lb.js": 287,
	"./lo": 288,
	"./lo.js": 288,
	"./lt": 289,
	"./lt.js": 289,
	"./lv": 290,
	"./lv.js": 290,
	"./me": 291,
	"./me.js": 291,
	"./mi": 292,
	"./mi.js": 292,
	"./mk": 293,
	"./mk.js": 293,
	"./ml": 294,
	"./ml.js": 294,
	"./mr": 295,
	"./mr.js": 295,
	"./ms": 297,
	"./ms-my": 296,
	"./ms-my.js": 296,
	"./ms.js": 297,
	"./my": 298,
	"./my.js": 298,
	"./nb": 299,
	"./nb.js": 299,
	"./ne": 300,
	"./ne.js": 300,
	"./nl": 302,
	"./nl-be": 301,
	"./nl-be.js": 301,
	"./nl.js": 302,
	"./nn": 303,
	"./nn.js": 303,
	"./pa-in": 304,
	"./pa-in.js": 304,
	"./pl": 305,
	"./pl.js": 305,
	"./pt": 307,
	"./pt-br": 306,
	"./pt-br.js": 306,
	"./pt.js": 307,
	"./ro": 308,
	"./ro.js": 308,
	"./ru": 309,
	"./ru.js": 309,
	"./sd": 310,
	"./sd.js": 310,
	"./se": 311,
	"./se.js": 311,
	"./si": 312,
	"./si.js": 312,
	"./sk": 313,
	"./sk.js": 313,
	"./sl": 314,
	"./sl.js": 314,
	"./sq": 315,
	"./sq.js": 315,
	"./sr": 317,
	"./sr-cyrl": 316,
	"./sr-cyrl.js": 316,
	"./sr.js": 317,
	"./ss": 318,
	"./ss.js": 318,
	"./sv": 319,
	"./sv.js": 319,
	"./sw": 320,
	"./sw.js": 320,
	"./ta": 321,
	"./ta.js": 321,
	"./te": 322,
	"./te.js": 322,
	"./tet": 323,
	"./tet.js": 323,
	"./th": 324,
	"./th.js": 324,
	"./tl-ph": 325,
	"./tl-ph.js": 325,
	"./tlh": 326,
	"./tlh.js": 326,
	"./tr": 327,
	"./tr.js": 327,
	"./tzl": 328,
	"./tzl.js": 328,
	"./tzm": 330,
	"./tzm-latn": 329,
	"./tzm-latn.js": 329,
	"./tzm.js": 330,
	"./uk": 331,
	"./uk.js": 331,
	"./ur": 332,
	"./ur.js": 332,
	"./uz": 334,
	"./uz-latn": 333,
	"./uz-latn.js": 333,
	"./uz.js": 334,
	"./vi": 335,
	"./vi.js": 335,
	"./x-pseudo": 336,
	"./x-pseudo.js": 336,
	"./yo": 337,
	"./yo.js": 337,
	"./zh-cn": 338,
	"./zh-cn.js": 338,
	"./zh-hk": 339,
	"./zh-hk.js": 339,
	"./zh-tw": 340,
	"./zh-tw.js": 340
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 726;


/***/ }),

/***/ 831:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 832:
/***/ (function(module, exports) {

module.exports = "<span>&copy; {{settings.app.year}} - {{ settings.app.name }}</span>"

/***/ }),

/***/ 833:
/***/ (function(module, exports) {

module.exports = "<!-- START Top Navbar-->\n<nav class=\"navbar topnavbar\" role=\"navigation\">\n    <!-- START navbar header-->\n    <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"#/\">\n            <div class=\"brand-logo\">\n                <img class=\"img-responsive\" src=\"assets/img/logo.png\" alt=\"App Logo\" />\n            </div>\n            <div class=\"brand-logo-collapsed\">\n                <img class=\"img-responsive\" src=\"assets/img/logo-single.png\" alt=\"App Logo\" />\n            </div>\n        </a>\n    </div>\n    <!-- END navbar header-->\n    <!-- START Nav wrapper-->\n    <div class=\"nav-wrapper\">\n        <!-- START Left navbar-->\n        <ul class=\"nav navbar-nav\">\n            <li>\n                <!-- Button used to collapse the left sidebar. Only visible on tablet and desktops-->\n                <a class=\"hidden-xs\" trigger-resize=\"\" (click)=\"toggleCollapsedSideabar()\" *ngIf=\"!isCollapsedText()\">\n                    <em class=\"fa fa-navicon\"></em>\n                </a>\n                <!-- Button to show/hide the sidebar on mobile. Visible on mobile only.-->\n                <a class=\"visible-xs sidebar-toggle\" (click)=\"settings.layout.asideToggled =! settings.layout.asideToggled\">\n                    <em class=\"fa fa-navicon\"></em>\n                </a>\n            </li>\n            <!-- START User avatar toggle-->\n            <li>\n                <!-- Button used to collapse the left sidebar. Only visible on tablet and desktops-->\n                <a (click)=\"toggleUserBlock($event)\">\n                    <em class=\"icon-user\"></em>\n                </a>\n            </li>\n            <!-- END User avatar toggle-->\n            <!-- START lock screen-->\n            <li>\n                <a  title=\"Lock screen\" [routerLink]=\"'/lock'\">\n                    <em class=\"icon-lock\"></em>\n                </a>\n            </li>\n            <!-- END lock screen-->\n        </ul>\n        <!-- END Left navbar-->\n        <!-- START Right Navbar-->\n        <ul class=\"nav navbar-nav navbar-right\">\n            <!-- Search icon-->\n            <li>\n                <a (click)=\"openNavSearch($event)\">\n                    <em class=\"icon-magnifier\"></em>\n                </a>\n            </li>\n            <!-- Fullscreen (only desktops)-->\n            <li class=\"visible-lg\">\n                <a #fsbutton (click)=\"toggleFullScreen($event)\">\n                    <em class=\"fa fa-expand\"></em>\n                </a>\n            </li>\n            <!-- START Alert menu-->\n            <li class=\"dropdown dropdown-list\" dropdown>\n                <a dropdownToggle>\n                    <em class=\"icon-bell\"></em>\n                    <div class=\"label label-danger\">11</div>\n                </a>\n                <!-- START Dropdown menu-->\n                <ul *dropdownMenu class=\"dropdown-menu animated flipInX\">\n                    <li>\n                        <!-- START list group-->\n                        <div class=\"list-group\">\n                            <!-- list item-->\n                            <a class=\"list-group-item\">\n                                <div class=\"media-box\">\n                                    <div class=\"pull-left\">\n                                        <em class=\"fa fa-twitter fa-2x text-info\"></em>\n                                    </div>\n                                    <div class=\"media-box-body clearfix\">\n                                        <p class=\"m0\">New followers</p>\n                                        <p class=\"m0 text-muted\">\n                                            <small>1 new follower</small>\n                                        </p>\n                                    </div>\n                                </div>\n                            </a>\n                            <!-- list item-->\n                            <a class=\"list-group-item\">\n                                <div class=\"media-box\">\n                                    <div class=\"pull-left\">\n                                        <em class=\"fa fa-envelope fa-2x text-warning\"></em>\n                                    </div>\n                                    <div class=\"media-box-body clearfix\">\n                                        <p class=\"m0\">New e-mails</p>\n                                        <p class=\"m0 text-muted\">\n                                            <small>You have 10 new emails</small>\n                                        </p>\n                                    </div>\n                                </div>\n                            </a>\n                            <!-- list item-->\n                            <a class=\"list-group-item\">\n                                <div class=\"media-box\">\n                                    <div class=\"pull-left\">\n                                        <em class=\"fa fa-tasks fa-2x text-success\"></em>\n                                    </div>\n                                    <div class=\"media-box-body clearfix\">\n                                        <p class=\"m0\">Pending Tasks</p>\n                                        <p class=\"m0 text-muted\">\n                                            <small>11 pending task</small>\n                                        </p>\n                                    </div>\n                                </div>\n                            </a>\n                            <!-- last list item-->\n                            <a class=\"list-group-item\">\n                                <small translate=\"topbar.notification.MORE\">More notifications</small>\n                                <span class=\"label label-danger pull-right\">14</span>\n                            </a>\n                        </div>\n                        <!-- END list group-->\n                    </li>\n                </ul>\n                <!-- END Dropdown menu-->\n            </li>\n            <!-- END Alert menu-->\n            <!-- START Offsidebar button-->\n            <li>\n                <a (click)=\"toggleOffsidebar()\">\n                    <em class=\"icon-notebook\"></em>\n                </a>\n            </li>\n            <!-- END Offsidebar menu-->\n        </ul>\n        <!-- END Right Navbar-->\n    </div>\n    <!-- END Nav wrapper-->\n\n    <!-- <app-navsearch [visible]=\"getNavSearchVisible()\" (onclose)=\"setNavSearchVisible(false)\"></app-navsearch> -->\n\n</nav>\n<!-- END Top Navbar-->\n"

/***/ }),

/***/ 834:
/***/ (function(module, exports) {

module.exports = "<!-- START Search form-->\n<form class=\"navbar-form\" role=\"search\" action=\"search.html\" [class.open]=\"visible\" (submit)=\"handleForm()\">\n    <div class=\"form-group has-feedback\">\n        <input [(ngModel)]=\"term\" name=\"term\" class=\"form-control\" type=\"text\" placeholder=\"{{'header.search.PLACEHOLDER' | translate}}\" />\n        <div class=\"fa fa-times form-control-feedback\" (click)=\"closeNavSearch()\"></div>\n    </div>\n    <button class=\"hidden btn btn-default\" type=\"submit\">Submit</button>\n</form>\n<!-- END Search form-->\n"

/***/ }),

/***/ 835:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <!-- top navbar-->\n    <app-header class=\"topnavbar-wrapper\"></app-header>\n    <!-- sidebar-->\n    <app-sidebar class=\"aside\"></app-sidebar>\n    <!-- offsidebar-->\n    <app-offsidebar class=\"offsidebar\"></app-offsidebar>\n    <!-- Main section-->\n    <section>\n        <!-- Page content-->\n        <div class=\"content-wrapper\">\n            <router-outlet></router-outlet>\n        </div>\n    </section>\n    <!-- Page footer-->\n    <footer app-footer></footer>\n</div>"

/***/ }),

/***/ 836:
/***/ (function(module, exports) {

module.exports = "<tabset [justified]=\"true\">\n    <tab>\n        <ng-template tabHeading>\n            <em class=\"icon-equalizer fa-lg\"></em>\n        </ng-template>\n        <h3 class=\"text-center text-thin\" [innerHTML]=\"'offsidebar.setting.SETTINGS' | translate\"></h3>\n        <div class=\"p\">\n            <h4 class=\"text-muted text-thin\">Themes</h4>\n            <div class=\"table-grid mb\">\n                <div class=\"col mb\">\n                    <div class=\"setting-color\">\n                        <label>\n                            <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"A\" />\n                            <span class=\"icon-check\"></span>\n                            <span class=\"split\">\n                  <span class=\"color bg-info\"></span>\n                            <span class=\"color bg-info-light\"></span>\n                            </span>\n                            <span class=\"color bg-white\"></span>\n                        </label>\n                    </div>\n                </div>\n                <div class=\"col mb\">\n                    <div class=\"setting-color\">\n                        <label>\n                            <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"B\" />\n                            <span class=\"icon-check\"></span>\n                            <span class=\"split\">\n                  <span class=\"color bg-green\"></span>\n                            <span class=\"color bg-green-light\"></span>\n                            </span>\n                            <span class=\"color bg-white\"></span>\n                        </label>\n                    </div>\n                </div>\n                <div class=\"col mb\">\n                    <div class=\"setting-color\">\n                        <label>\n                            <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"C\" />\n                            <span class=\"icon-check\"></span>\n                            <span class=\"split\">\n                  <span class=\"color bg-purple\"></span>\n                            <span class=\"color bg-purple-light\"></span>\n                            </span>\n                            <span class=\"color bg-white\"></span>\n                        </label>\n                    </div>\n                </div>\n                <div class=\"col mb\">\n                    <div class=\"setting-color\">\n                        <label>\n                            <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"D\" />\n                            <span class=\"icon-check\"></span>\n                            <span class=\"split\">\n                  <span class=\"color bg-danger\"></span>\n                            <span class=\"color bg-danger-light\"></span>\n                            </span>\n                            <span class=\"color bg-white\"></span>\n                        </label>\n                    </div>\n                </div>\n            </div>\n            <div class=\"table-grid mb\">\n                <div class=\"col mb\">\n                    <div class=\"setting-color\">\n                        <label>\n                            <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"E\" />\n                            <span class=\"icon-check\"></span>\n                            <span class=\"split\">\n                  <span class=\"color bg-info-dark\"></span>\n                            <span class=\"color bg-info\"></span>\n                            </span>\n                            <span class=\"color bg-gray-dark\"></span>\n                        </label>\n                    </div>\n                </div>\n                <div class=\"col mb\">\n                    <div class=\"setting-color\">\n                        <label>\n                            <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"F\" />\n                            <span class=\"icon-check\"></span>\n                            <span class=\"split\">\n                  <span class=\"color bg-green-dark\"></span>\n                            <span class=\"color bg-green\"></span>\n                            </span>\n                            <span class=\"color bg-gray-dark\"></span>\n                        </label>\n                    </div>\n                </div>\n                <div class=\"col mb\">\n                    <div class=\"setting-color\">\n                        <label>\n                            <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"G\" />\n                            <span class=\"icon-check\"></span>\n                            <span class=\"split\">\n                  <span class=\"color bg-purple-dark\"></span>\n                            <span class=\"color bg-purple\"></span>\n                            </span>\n                            <span class=\"color bg-gray-dark\"></span>\n                        </label>\n                    </div>\n                </div>\n                <div class=\"col mb\">\n                    <div class=\"setting-color\">\n                        <label>\n                            <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"H\" />\n                            <span class=\"icon-check\"></span>\n                            <span class=\"split\">\n                  <span class=\"color bg-danger-dark\"></span>\n                            <span class=\"color bg-danger\"></span>\n                            </span>\n                            <span class=\"color bg-gray-dark\"></span>\n                        </label>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"p\">\n            <h4 class=\"text-muted text-thin\">Layout</h4>\n            <div class=\"clearfix\">\n                <p class=\"pull-left\">Fixed</p>\n                <div class=\"pull-right\">\n                    <label class=\"switch\">\n                        <input type=\"checkbox\" [(ngModel)]=\"settings.layout.isFixed\" />\n                        <span></span>\n                    </label>\n                </div>\n            </div>\n            <div class=\"clearfix\">\n                <p class=\"pull-left\">Boxed</p>\n                <div class=\"pull-right\">\n                    <label class=\"switch\">\n                        <input type=\"checkbox\" [(ngModel)]=\"settings.layout.isBoxed\" />\n                        <span></span>\n                    </label>\n                </div>\n            </div>\n            <!--\n    <div class=\"clearfix\">\n      <p class=\"pull-left\">RTL</p>\n      <div class=\"pull-right\">\n         <label class=\"switch\">\n            <input type=\"checkbox\" [(ngModel)]=\"layoutRTL\"/>\n            <span></span>\n         </label>\n      </div>\n    </div>\n    -->\n        </div>\n        <div class=\"p\" *ngIf=\"!settings.layout.horizontal\">\n            <h4 class=\"text-muted text-thin\">Aside</h4>\n            <div class=\"clearfix\">\n                <p class=\"pull-left\">Collapsed</p>\n                <div class=\"pull-right\">\n                    <label class=\"switch\">\n                        <input type=\"checkbox\" [(ngModel)]=\"settings.layout.isCollapsed\" [disabled]=\"settings.layout.isCollapsedText\" />\n                        <span></span>\n                    </label>\n                </div>\n            </div>\n            <div class=\"clearfix\">\n                <p class=\"pull-left\">Collapsed Text</p>\n                <div class=\"pull-right\">\n                    <label class=\"switch\">\n                        <input type=\"checkbox\" [(ngModel)]=\"settings.layout.isCollapsedText\" [disabled]=\"settings.layout.isCollapsed\" />\n                        <span></span>\n                    </label>\n                </div>\n            </div>\n            <div class=\"clearfix\">\n                <p class=\"pull-left\">Float</p>\n                <div class=\"pull-right\">\n                    <label class=\"switch\">\n                        <input type=\"checkbox\" [(ngModel)]=\"settings.layout.isFloat\" />\n                        <span></span>\n                    </label>\n                </div>\n            </div>\n            <div class=\"clearfix\">\n                <p class=\"pull-left\">Hover</p>\n                <div class=\"pull-right\">\n                    <label class=\"switch\">\n                        <input type=\"checkbox\" [(ngModel)]=\"settings.layout.asideHover\" />\n                        <span></span>\n                    </label>\n                </div>\n            </div>\n            <div class=\"clearfix\">\n                <p class=\"pull-left\">Show Scrollbar</p>\n                <div class=\"pull-right\">\n                    <label class=\"switch\">\n                        <input type=\"checkbox\" [(ngModel)]=\"settings.layout.asideScrollbar\" />\n                        <span></span>\n                    </label>\n                </div>\n            </div>\n        </div>\n        <div class=\"p\">\n            <h4 class=\"text-muted text-thin\">Language</h4>\n            <select class=\"form-control\" [ngModel]=\"selectedLanguage\" (ngModelChange)=\"setLang($event)\">\n                <option [value]=\"lang.code\" *ngFor=\"let lang of getLangs()\">{{lang.text}}</option>\n            </select>\n        </div>\n    </tab>\n    <tab>\n        <ng-template tabHeading>\n            <em class=\"icon-user fa-lg\"></em>\n        </ng-template>\n        <h3 class=\"text-center text-thin\">Connections</h3>\n        <ul class=\"nav\">\n            <!-- START list title-->\n            <li class=\"p\">\n                <small class=\"text-muted\">ONLINE</small>\n            </li>\n            <!-- END list title-->\n            <li>\n                <!-- START User status-->\n                <a href=\"#\" class=\"media-box p mt0\">\n                    <span class=\"pull-right\">\n                                 <span class=\"circle circle-success circle-lg\"></span>\n                    </span>\n                    <span class=\"pull-left\">\n                                 <!-- Contact avatar-->\n                                 <img src=\"assets/img/user/05.jpg\" alt=\"Image\" class=\"media-box-object img-circle thumb48\">\n                              </span>\n                    <!-- Contact info-->\n                    <span class=\"media-box-body\">\n                                 <span class=\"media-box-heading\">\n                                    <strong>Juan Sims</strong>\n                                    <br>\n                                    <small class=\"text-muted\">Designeer</small>\n                                 </span>\n                    </span>\n                </a>\n                <!-- END User status-->\n                <!-- START User status-->\n                <a href=\"#\" class=\"media-box p mt0\">\n                    <span class=\"pull-right\">\n                                 <span class=\"circle circle-success circle-lg\"></span>\n                    </span>\n                    <span class=\"pull-left\">\n                                 <!-- Contact avatar-->\n                                 <img src=\"assets/img/user/06.jpg\" alt=\"Image\" class=\"media-box-object img-circle thumb48\">\n                              </span>\n                    <!-- Contact info-->\n                    <span class=\"media-box-body\">\n                                 <span class=\"media-box-heading\">\n                                    <strong>Maureen Jenkins</strong>\n                                    <br>\n                                    <small class=\"text-muted\">Designeer</small>\n                                 </span>\n                    </span>\n                </a>\n                <!-- END User status-->\n                <!-- START User status-->\n                <a href=\"#\" class=\"media-box p mt0\">\n                    <span class=\"pull-right\">\n                                 <span class=\"circle circle-danger circle-lg\"></span>\n                    </span>\n                    <span class=\"pull-left\">\n                                 <!-- Contact avatar-->\n                                 <img src=\"assets/img/user/07.jpg\" alt=\"Image\" class=\"media-box-object img-circle thumb48\">\n                              </span>\n                    <!-- Contact info-->\n                    <span class=\"media-box-body\">\n                                 <span class=\"media-box-heading\">\n                                    <strong>Billie Dunn</strong>\n                                    <br>\n                                    <small class=\"text-muted\">Designeer</small>\n                                 </span>\n                    </span>\n                </a>\n                <!-- END User status-->\n                <!-- START User status-->\n                <a href=\"#\" class=\"media-box p mt0\">\n                    <span class=\"pull-right\">\n                                 <span class=\"circle circle-warning circle-lg\"></span>\n                    </span>\n                    <span class=\"pull-left\">\n                                 <!-- Contact avatar-->\n                                 <img src=\"assets/img/user/08.jpg\" alt=\"Image\" class=\"media-box-object img-circle thumb48\">\n                              </span>\n                    <!-- Contact info-->\n                    <span class=\"media-box-body\">\n                                 <span class=\"media-box-heading\">\n                                    <strong>Tomothy Roberts</strong>\n                                    <br>\n                                    <small class=\"text-muted\">Designer</small>\n                                 </span>\n                    </span>\n                </a>\n                <!-- END User status-->\n            </li>\n            <!-- START list title-->\n            <li class=\"p\">\n                <small class=\"text-muted\">OFFLINE</small>\n            </li>\n            <!-- END list title-->\n            <li>\n                <!-- START User status-->\n                <a href=\"#\" class=\"media-box p mt0\">\n                    <span class=\"pull-right\">\n                                 <span class=\"circle circle-lg\"></span>\n                    </span>\n                    <span class=\"pull-left\">\n                                 <!-- Contact avatar-->\n                                 <img src=\"assets/img/user/09.jpg\" alt=\"Image\" class=\"media-box-object img-circle thumb48\">\n                              </span>\n                    <!-- Contact info-->\n                    <span class=\"media-box-body\">\n                                 <span class=\"media-box-heading\">\n                                    <strong>Lawrence Robinson</strong>\n                                    <br>\n                                    <small class=\"text-muted\">Developer</small>\n                                 </span>\n                    </span>\n                </a>\n                <!-- END User status-->\n                <!-- START User status-->\n                <a href=\"#\" class=\"media-box p mt0\">\n                    <span class=\"pull-right\">\n                                 <span class=\"circle circle-lg\"></span>\n                    </span>\n                    <span class=\"pull-left\">\n                                 <!-- Contact avatar-->\n                                 <img src=\"assets/img/user/10.jpg\" alt=\"Image\" class=\"media-box-object img-circle thumb48\">\n                              </span>\n                    <!-- Contact info-->\n                    <span class=\"media-box-body\">\n                                 <span class=\"media-box-heading\">\n                                    <strong>Tyrone Owens</strong>\n                                    <br>\n                                    <small class=\"text-muted\">Designer</small>\n                                 </span>\n                    </span>\n                </a>\n                <!-- END User status-->\n            </li>\n            <li>\n                <div class=\"p-lg text-center\">\n                    <!-- Optional link to list more users-->\n                    <a href=\"#\" title=\"See more contacts\" class=\"btn btn-purple btn-sm\">\n                        <strong>Load more..</strong>\n                    </a>\n                </div>\n            </li>\n        </ul>\n        <!-- Extra items-->\n        <div class=\"p\">\n            <p>\n                <small class=\"text-muted\">Tasks completion</small>\n            </p>\n            <div class=\"progress progress-xs m0\">\n                <div role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar progress-bar-success progress-80\">\n                    <span class=\"sr-only\">80% Complete</span>\n                </div>\n            </div>\n        </div>\n        <div class=\"p\">\n            <p>\n                <small class=\"text-muted\">Upload quota</small>\n            </p>\n            <div class=\"progress progress-xs m0\">\n                <div role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar progress-bar-warning progress-40\">\n                    <span class=\"sr-only\">40% Complete</span>\n                </div>\n            </div>\n        </div>\n    </tab>\n</tabset>\n"

/***/ }),

/***/ 837:
/***/ (function(module, exports) {

module.exports = "<!-- START Sidebar (left)-->\n<div class=\"aside-inner\">\n    <nav class=\"sidebar\" sidebar-anyclick-close=\"\" [class.show-scrollbar]=\"settings.layout.asideScrollbar\">\n\n        <!-- START sidebar nav-->\n        <ul class=\"nav\">\n\n            <!-- START user info-->\n            <li class=\"has-user-block\">\n                <app-userblock></app-userblock>\n            </li>\n            <!-- END user info-->\n\n            <li *ngFor='let item of menuItems' [ngClass]=\"{'nav-heading': item.heading}\" [routerLinkActive]=\"['active']\">\n                <!-- menu heading -->\n                <span *ngIf=\"item.heading\">{{(item.translate | translate) || item.text}}</span>\n                <!-- external links -->\n                <a *ngIf=\"!item.heading && !item.submenu && item.elink\" [attr.target]=\"item.target\" [attr.href]=\"item.elink\" title=\"{{item.text}}\">\n                    <span class=\"pull-right\" *ngIf=\"item.alert\" [ngClass]=\"item.label || 'label label-success'\">{{item.alert}}</span>\n                    <em class=\"{{item.icon}}\" *ngIf=\"item.icon\"></em>\n                    <span>{{(item.translate | translate) || item.text}}</span>\n                </a>\n                <!-- single menu item -->\n                <a *ngIf=\"!item.heading && !item.submenu && !item.elink\" [routerLink]=\"item.link\" [attr.route]=\"item.link\" title=\"{{item.text}}\"\n                    (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\n                    <span class=\"pull-right\" *ngIf=\"item.alert\" [ngClass]=\"item.label || 'label label-success'\">{{item.alert}}</span>\n                    <em class=\"{{item.icon}}\" *ngIf=\"item.icon\"></em>\n                    <span>{{(item.translate | translate) || item.text}}</span>\n                </a>\n                <!-- has submenu -->\n                <a *ngIf=\"!item.heading && item.submenu\" title=\"{{item.text}}\"\n                    (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\n                        <span class=\"pull-right\" *ngIf=\"item.alert\" [ngClass]=\"item.label || 'label label-success'\">{{item.alert}}</span>\n                        <em class=\"{{item.icon}}\" *ngIf=\"item.icon\"></em>\n                        <span>{{(item.translate | translate) || item.text}}</span>\n                </a>\n                <!-- SUBLEVEL -->\n                <ul *ngIf=\"item.submenu\" class=\"nav sidebar-subnav\" [routerLinkActive]=\"['opening']\">\n                    <li class=\"sidebar-subnav-header\">{{(item.translate | translate) || item.text}}</li>\n                    <li *ngFor='let subitem of item.submenu' [routerLinkActive]=\"['active']\">\n                        <!-- sublevel: external links -->\n                        <a *ngIf=\"!subitem.heading && !subitem.submenu && subitem.elink\" [attr.target]=\"subitem.target\" [attr.href]=\"subitem.elink\" title=\"{{subitem.text}}\">\n                            <span class=\"pull-right\" *ngIf=\"subitem.alert\" [ngClass]=\"subitem.label || 'label label-success'\">{{subitem.alert}}</span>\n                            <em class=\"{{subitem.icon}}\" *ngIf=\"subitem.icon\"></em>\n                            <span>{{(subitem.translate | translate) || subitem.text}}</span>\n                        </a>\n                        <!-- sublevel: single menu item  -->\n                        <a *ngIf=\"!subitem.submenu && !subitem.elink\" [routerLink]=\"subitem.link\" [attr.route]=\"subitem.link\" title=\"{{subitem.text}}\">\n                            <span class=\"pull-right\" *ngIf=\"subitem.alert\" [ngClass]=\"subitem.label || 'label label-success'\">{{subitem.alert}}</span>\n                            <em class=\"{{subitem.icon}}\" *ngIf=\"subitem.icon\"></em>\n                            <span>{{(subitem.translate | translate) || subitem.text}}</span>\n                        </a>\n                        <!-- sublevel: has submenu -->\n                        <a *ngIf=\"subitem.submenu\" title=\"{{subitem.text}}\"\n                            (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\n                                <span class=\"pull-right\" *ngIf=\"subitem.alert\" [ngClass]=\"subitem.label || 'label label-success'\">{{subitem.alert}}</span>\n                                <em class=\"{{subitem.icon}}\" *ngIf=\"subitem.icon\"></em>\n                                <span>{{(subitem.translate | translate) || subitem.text}}</span>\n                        </a>\n                        <!-- SUBLEVEL 2 -->\n                        <ul *ngIf=\"subitem.submenu\" class=\"nav sidebar-subnav level2\" [routerLinkActive]=\"['opening']\">\n                            <li *ngFor='let subitem2 of subitem.submenu' [routerLinkActive]=\"['active']\">\n                                <!-- sublevel 2: single menu item  -->\n                                <a *ngIf=\"!subitem2.submenu\" [routerLink]=\"subitem2.link\" [attr.route]=\"subitem2.link\" title=\"{{subitem2.text}}\">\n                                    <span class=\"pull-right\" *ngIf=\"subitem2.alert\" [ngClass]=\"subitem2.label || 'label label-success'\">{{subitem2.alert}}</span>\n                                    <em class=\"{{subitem2.icon}}\" *ngIf=\"subitem2.icon\"></em>\n                                    <span>{{(subitem2.translate | translate) || subitem2.text}}</span>\n                                </a>\n                                <!-- sublevel2: has submenu -->\n                                <a *ngIf=\"subitem2.submenu\" title=\"{{subitem2.text}}\"\n                                    (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\n                                        <span class=\"pull-right\" *ngIf=\"subitem2.alert\" [ngClass]=\"subitem2.label || 'label label-success'\">{{subitem2.alert}}</span>\n                                        <em class=\"{{subitem2.icon}}\" *ngIf=\"subitem2.icon\"></em>\n                                        <span>{{(subitem2.translate | translate) || subitem2.text}}</span>\n                                </a>\n                                <!-- SUBLEVEL 3 -->\n                                <ul *ngIf=\"subitem2.submenu\" class=\"nav sidebar-subnav level3\" [routerLinkActive]=\"['opening']\">\n                                    <li *ngFor='let subitem3 of subitem2.submenu' [routerLinkActive]=\"['active']\">\n                                        <!-- sublevel 2: single menu item  -->\n                                        <a *ngIf=\"!subitem3.submenu\" [routerLink]=\"subitem3.link\" [attr.route]=\"subitem3.link\" title=\"{{subitem3.text}}\">\n                                            <span class=\"pull-right\" *ngIf=\"subitem3.alert\" [ngClass]=\"subitem3.label || 'label label-success'\">{{subitem3.alert}}</span>\n                                            <em class=\"{{subitem3.icon}}\" *ngIf=\"subitem3.icon\"></em>\n                                            <span>{{(subitem3.translate | translate) || subitem3.text}}</span>\n                                        </a>\n                                        <!-- sublevel3: has submenu -->\n                                        <a *ngIf=\"subitem3.submenu\" title=\"{{subitem3.text}}\"\n                                            (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\n                                                <span class=\"pull-right\" *ngIf=\"subitem3.alert\" [ngClass]=\"subitem3.label || 'label label-success'\">{{subitem3.alert}}</span>\n                                                <em class=\"{{subitem3.icon}}\" *ngIf=\"subitem3.icon\"></em>\n                                                <span>{{(subitem3.translate | translate) || subitem3.text}}</span>\n                                        </a>\n                                        <!-- SUBLEVEL 4 -->\n                                        <ul *ngIf=\"subitem3.submenu\" class=\"nav sidebar-subnav level3\" [routerLinkActive]=\"['opening']\">\n                                            <li *ngFor='let subitem4 of subitem3.submenu' [routerLinkActive]=\"['active']\">\n                                                <!-- sublevel 2: single menu item  -->\n                                                <a *ngIf=\"!subitem4.submenu\" [routerLink]=\"subitem4.link\" [attr.route]=\"subitem4.link\" title=\"{{subitem4.text}}\">\n                                                    <span class=\"pull-right\" *ngIf=\"subitem4.alert\" [ngClass]=\"subitem4.label || 'label label-success'\">{{subitem4.alert}}</span>\n                                                    <em class=\"{{subitem4.icon}}\" *ngIf=\"subitem4.icon\"></em>\n                                                    <span>{{(subitem4.translate | translate) || subitem4.text}}</span>\n                                                </a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                </ul>\n                            <li>\n                        </ul>\n                    <li>\n                </ul>\n            </li>\n\n        </ul>\n        <!-- END sidebar nav-->\n\n    </nav>\n</div>\n<!-- END Sidebar (left)-->\n"

/***/ }),

/***/ 838:
/***/ (function(module, exports) {

module.exports = "<div class=\"item user-block\" *ngIf=\"userBlockIsVisible()\">\n    <!-- User picture-->\n    <div class=\"user-block-picture\">\n        <div class=\"user-block-status\">\n            <img class=\"img-thumbnail img-circle\" [src]=\"user.picture\" alt=\"Avatar\" />\n            <div class=\"circle circle-success circle-lg\"></div>\n        </div>\n    </div>\n    <!-- Name and Job-->\n    <div class=\"user-block-info\">\n        <span class=\"user-block-name\">{{ 'sidebar.WELCOME' | translate }}  John</span>\n        <span class=\"user-block-role\">Programmer</span>\n    </div>\n</div>\n"

/***/ }),

/***/ 839:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"block-center mt-xl wd-xl\">\n        <!-- START panel-->\n        <div class=\"panel panel-dark panel-flat\">\n            <div class=\"panel-heading text-center\">\n                <a href=\"#\">\n                    <img class=\"block-center img-rounded\" src=\"assets/img/logo.png\" alt=\"Image\" width=\"190\" height=\"29\" />\n                </a>\n            </div>\n            <div class=\"panel-body\">\n                <p class=\"text-center pv\">SIGN IN TO CONTINUE.</p>\n                <form [formGroup]=\"valForm\" class=\"form-validate mb-lg\" role=\"form\" name=\"loginForm\" novalidate=\"\" (submit)=\"submitForm($event, valForm.value)\">\n                    <div class=\"form-group has-feedback\">\n                        <input class=\"form-control\" id=\"exampleInputEmail1\" type=\"email\" name=\"email\" placeholder=\"Enter email\" autocomplete=\"off\" formControlName=\"email\" required=\"\" />\n                        <span class=\"fa fa-envelope form-control-feedback text-muted\"></span>\n                        <span class=\"text-danger\" *ngIf=\"valForm.controls['email'].hasError('required') && (valForm.controls['email'].dirty || valForm.controls['email'].touched)\">This field is required</span>\n                        <span class=\"text-danger\" *ngIf=\"valForm.controls['email'].hasError('email') && (valForm.controls['email'].dirty || valForm.controls['email'].touched)\">This field must be a valid email address</span>\n                    </div>\n                    <div class=\"form-group has-feedback\">\n                        <input class=\"form-control\" id=\"exampleInputPassword1\" type=\"password\" name=\"password\" placeholder=\"Password\" formControlName=\"password\" required=\"\" />\n                        <span class=\"fa fa-lock form-control-feedback text-muted\"></span>\n                        <span class=\"text-danger\" *ngIf=\"valForm.controls['password'].hasError('required') && (valForm.controls['password'].dirty || valForm.controls['password'].touched)\">This field is required</span>\n                    </div>\n                    <div class=\"clearfix\">\n                        <div class=\"checkbox c-checkbox pull-left mt0\">\n                            <label>\n                                <input type=\"checkbox\" value=\"\" name=\"account_remember\"/>\n                                <span class=\"fa fa-check\"></span>Remember Me</label>\n                        </div><br>\n                        <div class=\"pull-right\"><a class=\"text-muted\" [routerLink]=\"'/recover'\">Forgot your password?</a>\n                        </div><br>\n                        <div class=\"pull-right\"><a class=\"text-muted\" [routerLink]=\"'/recoverusername'\">Forgot your username?</a>\n                        </div>\n                    </div>\n                    <button class=\"btn btn-block btn-primary mt-lg\" type=\"submit\">Login</button>\n                </form>\n                <!-- <div class=\"alert alert-danger text-center\" ></div> -->\n                <p class=\"pt-lg text-center\">Need to Signup?</p><a class=\"btn btn-block btn-default\" [routerLink]=\"'/register'\">Register Now</a>\n            </div>\n        </div>\n        <!-- END panel-->\n        <!--<div class=\"p-lg text-center\">\n            <span>&copy;</span>\n            <span>{{ settings.app.year }}</span>\n            <span>-</span>\n            <span>{{ settings.app.name }}</span>\n            <br/>\n            <span>{{ settings.app.description }}</span>\n        </div>-->\n    </div>\n</div>"

/***/ }),

/***/ 840:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"block-center mt-xl wd-xl\">\n        <!-- START panel-->\n        <div class=\"panel panel-dark panel-flat\">\n            <div class=\"panel-heading text-center\">\n                <a href=\"#\">\n                    <img class=\"block-center img-rounded\" src=\"assets/img/logo.png\" alt=\"Image\" width=\"190\" height=\"29\" />\n                </a>\n            </div>\n            <div class=\"panel-body\">\n                <p class=\"text-center pv\">USERNAME RESET</p>\n                <form [formGroup]=\"valForm\" class=\"form-validate\" role=\"form\" name=\"recoverForm\" novalidate=\"\" (submit)=\"submitForm($event, valForm.value)\">\n                    <p class=\"text-center\">Fill with your mail to receive instructions on how to reset your username.</p>\n                    <div class=\"form-group has-feedback\">\n                        <label class=\"text-muted\">Email address</label>\n                        <input class=\"form-control\" type=\"email\" name=\"email\" placeholder=\"Enter email\" autocomplete=\"off\" formControlName=\"email\"/>\n                        <span class=\"fa fa-envelope form-control-feedback text-muted\"></span>\n                        <span class=\"text-danger\" *ngIf=\"valForm.controls['email'].hasError('required') && (valForm.controls['email'].dirty || valForm.controls['email'].touched)\">This field is required</span>\n                        <span class=\"text-danger\" *ngIf=\"valForm.controls['email'].hasError('email') && (valForm.controls['email'].dirty || valForm.controls['email'].touched)\">This field must be a valid email address</span>\n                    </div>\n                    <button class=\"btn btn-danger btn-block\" type=\"submit\">Reset</button><br>\n                    <div class=\"pull-right\">\n                        <a class=\"text-muted\" [routerLink]=\"'/login'\">Login</a>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 841:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"block-center mt-xl wd-xl\">\n        <!-- START panel-->\n        <div class=\"panel panel-dark panel-flat\">\n            <div class=\"panel-heading text-center\">            \n                <a href=\"#\">\n                    <img class=\"block-center img-rounded\" src=\"assets/img/logo.png\" alt=\"Image\" width=\"190\" height=\"29\" />\n                </a>\n            </div>\n            <div class=\"panel-body\">\n                <p class=\"text-center pv\">PASSWORD RESET</p>\n                <form [formGroup]=\"valForm\" class=\"form-validate\" role=\"form\" name=\"recoverForm\" novalidate=\"\" (submit)=\"submitForm($event, valForm.value)\">\n                    <p class=\"text-center\">Fill with your mail to receive instructions on how to reset your password.</p>\n                    <div class=\"form-group has-feedback\">\n                        <label class=\"text-muted\">Email address</label>\n                        <input class=\"form-control\" type=\"email\" name=\"email\" placeholder=\"Enter email\" autocomplete=\"off\" formControlName=\"email\"/>\n                        <span class=\"fa fa-envelope form-control-feedback text-muted\"></span>\n                        <span class=\"text-danger\" *ngIf=\"valForm.controls['email'].hasError('required') && (valForm.controls['email'].dirty || valForm.controls['email'].touched)\">This field is required</span>\n                        <span class=\"text-danger\" *ngIf=\"valForm.controls['email'].hasError('email') && (valForm.controls['email'].dirty || valForm.controls['email'].touched)\">This field must be a valid email address</span>\n                    </div>\n                    <button class=\"btn btn-danger btn-block\" type=\"submit\">Reset</button><br>\n                    <div class=\"pull-right\">\n                        <a class=\"text-muted\" [routerLink]=\"'/login'\">Login</a>\n                    </div>\n                </form>\n            </div>\n        </div>\n        <!-- END panel-->\n        <!--<div class=\"p-lg text-center\">\n            <span>&copy;</span>\n            <span>{{ settings.app.year }}</span>\n            <span>-</span>\n            <span>{{ settings.app.name }}</span>\n            <br/>\n            <span>{{ settings.app.description }}</span>\n        </div>-->\n    </div>\n</div>\n"

/***/ }),

/***/ 842:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"block-center mt-xl wd-xl\">\n        <!-- START panel-->\n        <div class=\"panel panel-dark panel-flat\">\n            <div class=\"panel-heading text-center\">                 \n                <a href=\"#\">\n                    <img class=\"block-center img-rounded\" src=\"assets/img/logo.png\" alt=\"Image\" width=\"190\" height=\"29\" />\n                </a>\n            </div>\n            <div class=\"panel-body\">\n                <!--<p class=\"text-center pv\">SIGNUP TO GET INSTANT ACCESS.</p>-->\n                <form [formGroup]=\"valForm\" class=\"form-validate mb-lg\" role=\"form\" name=\"registerForm\" novalidate=\"\" (submit)=\"submitForm($event, valForm.value)\">\n                    <div class=\"form-group has-feedback\">\n                        <!--<label class=\"text-muted\">Full name</label>-->\n                        <input class=\"form-control\" type=\"text\" name=\"account_name\" placeholder=\"Enter Name\" autocomplete=\"off\" formControlName=\"name\" required=\"\" />\n                        <span class=\"fa fa-user-o form-control-feedback text-muted\"></span>\n                        <span class=\"text-danger\" *ngIf=\"valForm.controls['name'].hasError('required') && (valForm.controls['name'].dirty || valForm.controls['name'].touched)\">Name is required</span>\n                        <span class=\"text-danger\" *ngIf=\"valForm.controls['name'].hasError('minlength') && (valForm.controls['name'].dirty || valForm.controls['name'].touched)\">Name must contain atleast 2 characters</span>\n                    </div>\n                    <div class=\"form-group has-feedback\">\n                        <!--<label class=\"text-muted\">Email address</label>-->\n                        <input class=\"form-control\" type=\"email\" name=\"account_email\" placeholder=\"Enter email\" autocomplete=\"off\" formControlName=\"email\" required=\"\" />\n                        <span class=\"fa fa-envelope form-control-feedback text-muted\"></span>\n                        <span class=\"text-danger\" *ngIf=\"valForm.controls['email'].hasError('required') && (valForm.controls['email'].dirty || valForm.controls['email'].touched)\">Email is required</span>\n                        <span class=\"text-danger\" *ngIf=\"valForm.controls['email'].hasError('email') && (valForm.controls['email'].dirty || valForm.controls['email'].touched)\">This field must be a valid email address</span>\n                    </div>\n                    <div formGroupName=\"passwordGroup\">\n                        <div class=\"form-group has-feedback\">\n                            <!--<label class=\"text-muted\">Password</label>-->\n                            <input class=\"form-control\" id=\"id-password\" type=\"password\" name=\"password\" placeholder=\"Enter Password\" formControlName=\"password\" [formControl]=\"valForm.get('passwordGroup.password')\"/>\n                            <span class=\"fa fa-lock form-control-feedback text-muted\"></span>\n                            <span class=\"text-danger\" *ngIf=\"valForm.get('passwordGroup.password').hasError('required') && (valForm.get('passwordGroup.password').dirty || valForm.get('passwordGroup.password').touched)\">Password is required</span>\n                            <span class=\"text-danger\" *ngIf=\"valForm.get('passwordGroup.password').hasError('pattern') && (valForm.get('passwordGroup.password').dirty || valForm.get('passwordGroup.password').touched)\">Input should match 'a-zA-Z0-9' and 6-10 length</span>\n                        </div>\n                        <div class=\"form-group has-feedback\">\n                            <!--<label class=\"text-muted\">Retype Password</label>-->\n                            <input class=\"form-control\" type=\"password\" name=\"confirmPassword\" placeholder=\"Confirm Password\" formControlName=\"confirmPassword\" [formControl]=\"valForm.get('passwordGroup.confirmPassword')\"/>\n                            <span class=\"fa fa-lock form-control-feedback text-muted\"></span>\n\n                            <span class=\"text-danger\" *ngIf=\"valForm.get('passwordGroup.confirmPassword').hasError('equalTo')\">Password does Not match</span>\n                        </div>\n                    </div>\n                    <div class=\"form-group has-feedback\">\n                        <!--<label class=\"text-muted\">address</label>-->\n                        <input class=\"form-control\" type=\"description\" name=\"account_address\" placeholder=\"Enter address\" autocomplete=\"off\" formControlName=\"address\" required=\"\" />\n                        <span class=\"fa fa-address-card form-control-feedback text-muted\"></span>\n                        <span class=\"text-danger\" *ngIf=\"valForm.controls['address'].hasError('required') && (valForm.controls['address'].dirty || valForm.controls['address'].touched)\">address is required</span>\n                        <span class=\"text-danger\" *ngIf=\"valForm.controls['address'].hasError('minlength') && (valForm.controls['address'].dirty || valForm.controls['address'].touched)\">address must contain atlest 10 characters</span>\n                    </div>\n                    <div class=\"form-group has-feedback\">\n                        <!--<label class=\"text-muted\">address</label>-->\n                        <input class=\"form-control\" type=\"description\" name=\"account_company\" placeholder=\"Enter company name\" autocomplete=\"off\" formControlName=\"company\" required=\"\" />\n                        <span class=\"fa fa-briefcase form-control-feedback text-muted\"></span>\n                        <span class=\"text-danger\" *ngIf=\"valForm.controls['company'].hasError('required') && (valForm.controls['company'].dirty || valForm.controls['company'].touched)\">Company name is required</span>\n                        <span class=\"text-danger\" *ngIf=\"valForm.controls['company'].hasError('minlength') && (valForm.controls['company'].dirty || valForm.controls['company'].touched)\">Company name must contain atlest 2 characters</span>\n                    </div>\n                    <div class=\"form-group has-feedback\">\n                        <!--<label class=\"text-muted\">Phone Number</label>-->\n                        <input class=\"form-control\" type=\"number\" name=\"account_phone\" placeholder=\"Enter Mobile number\" autocomplete=\"off\" formControlName=\"phone\" required=\"\" />\n                        <span class=\"fa fa-phone-square form-control-feedback text-muted\"></span>\n                        <span class=\"text-danger\" *ngIf=\"valForm.controls['phone'].hasError('required') && (valForm.controls['phone'].dirty || valForm.controls['phone'].touched)\">Phone Number is required</span>\n                        <span class=\"text-danger\" *ngIf=\"valForm.controls['phone'].hasError('minlength') && (valForm.controls['phone'].dirty || valForm.controls['phone'].touched)\">Must contain atleast 10 number</span>\n                    </div>\n                    <div class=\"form-group has-feedback\">\n                        <!--<label class=\"text-muted\">Phone Number</label>-->\n                        <input class=\"form-control\" type=\"number\" name=\"account_pincode\" placeholder=\"Enter Pin code\" autocomplete=\"off\" formControlName=\"pincode\" required=\"\" />\n                        <span class=\"fa fa-ellipsis-h form-control-feedback text-muted\"></span>\n                        <span class=\"text-danger\" *ngIf=\"valForm.controls['pincode'].hasError('required') && (valForm.controls['pincode'].dirty || valForm.controls['pincode'].touched)\">Pin Code is required</span>\n                        <span class=\"text-danger\" *ngIf=\"valForm.controls['pincode'].hasError('minlength') && (valForm.controls['pincode'].dirty || valForm.controls['pincode'].touched)\">Must contain atleast 6 numbers</span>\n                    </div>\n                    <div class=\"clearfix\">\n                        <div class=\"checkbox c-checkbox pull-left mt0\">\n                            <label>\n                                <input type=\"checkbox\" required=\"\" name=\"account_agreed\" formControlName=\"accountagreed\" />\n                                <span class=\"fa fa-check\"></span>I agree with the <a href=\"#\">terms</a>\n                            </label>\n                        </div>\n                    </div>\n                    <span class=\"text-danger\" *ngIf=\"valForm.controls['accountagreed'].hasError('required') && (valForm.controls['accountagreed'].dirty || valForm.controls['accountagreed'].touched)\">You must agree the terms</span>\n                    <button class=\"btn btn-block btn-primary mt-lg\" type=\"submit\">Create account</button>\n                </form>\n                <!-- <div class=\"alert alert-danger text-center\"></div> -->\n                <p class=\"pt-lg text-center\">Have an account?</p><a class=\"btn btn-block btn-default\" [routerLink]=\"'/login'\">Signin</a>\n            </div>\n        </div>\n        <!-- END panel-->\n        <!--<div class=\"p-lg text-center\">\n            <span>&copy;</span>\n            <span>{{ settings.app.year }}</span>\n            <span>-</span>\n            <span>{{ settings.app.name }}</span>\n            <br/>\n            <span>{{ settings.app.description }}</span>\n        </div>-->\n    </div>\n</div>\n"

/***/ }),

/***/ 883:
/***/ (function(module, exports) {

/*!
 * modernizr v3.3.1
 * Build http://modernizr.com/download?-bgpositionshorthand-bgpositionxy-bgrepeatspace_bgrepeatround-bgsizecover-borderradius-cssanimations-csscalc-csstransforms-csstransforms3d-csstransitions-flexboxtweener-fontface-inlinesvg-localstorage-multiplebgs-preserve3d-sessionstorage-smil-svg-svgasimg-svgclippaths-svgfilters-svgforeignobject-websqldatabase-setclasses-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */

/*
 * Modernizr tests which native CSS3 and HTML5 features are available in the
 * current UA and makes the results available to you in two ways: as properties on
 * a global `Modernizr` object, and as classes on the `<html>` element. This
 * information allows you to progressively enhance your pages with a granular level
 * of control over the experience.
*/

;(function(window, document, undefined){
  var tests = [];
  

  /**
   *
   * ModernizrProto is the constructor for Modernizr
   *
   * @class
   * @access public
   */

  var ModernizrProto = {
    // The current version, dummy
    _version: '3.3.1',

    // Any settings that don't work as separate modules
    // can go in here as configuration.
    _config: {
      'classPrefix': '',
      'enableClasses': true,
      'enableJSClass': true,
      'usePrefixes': true
    },

    // Queue of tests
    _q: [],

    // Stub these for people who are listening
    on: function(test, cb) {
      // I don't really think people should do this, but we can
      // safe guard it a bit.
      // -- NOTE:: this gets WAY overridden in src/addTest for actual async tests.
      // This is in case people listen to synchronous tests. I would leave it out,
      // but the code to *disallow* sync tests in the real version of this
      // function is actually larger than this.
      var self = this;
      setTimeout(function() {
        cb(self[test]);
      }, 0);
    },

    addTest: function(name, fn, options) {
      tests.push({name: name, fn: fn, options: options});
    },

    addAsyncTest: function(fn) {
      tests.push({name: null, fn: fn});
    }
  };

  

  // Fake some of Object.create so we can force non test results to be non "own" properties.
  var Modernizr = function() {};
  Modernizr.prototype = ModernizrProto;

  // Leak modernizr globally when you `require` it rather than force it here.
  // Overwrite name so constructor name is nicer :D
  Modernizr = new Modernizr();

  

  var classes = [];
  

  /**
   * is returns a boolean if the typeof an obj is exactly type.
   *
   * @access private
   * @function is
   * @param {*} obj - A thing we want to check the type of
   * @param {string} type - A string to compare the typeof against
   * @returns {boolean}
   */

  function is(obj, type) {
    return typeof obj === type;
  }
  ;

  /**
   * Run through all tests and detect their support in the current UA.
   *
   * @access private
   */

  function testRunner() {
    var featureNames;
    var feature;
    var aliasIdx;
    var result;
    var nameIdx;
    var featureName;
    var featureNameSplit;

    for (var featureIdx in tests) {
      if (tests.hasOwnProperty(featureIdx)) {
        featureNames = [];
        feature = tests[featureIdx];
        // run the test, throw the return value into the Modernizr,
        // then based on that boolean, define an appropriate className
        // and push it into an array of classes we'll join later.
        //
        // If there is no name, it's an 'async' test that is run,
        // but not directly added to the object. That should
        // be done with a post-run addTest call.
        if (feature.name) {
          featureNames.push(feature.name.toLowerCase());

          if (feature.options && feature.options.aliases && feature.options.aliases.length) {
            // Add all the aliases into the names list
            for (aliasIdx = 0; aliasIdx < feature.options.aliases.length; aliasIdx++) {
              featureNames.push(feature.options.aliases[aliasIdx].toLowerCase());
            }
          }
        }

        // Run the test, or use the raw value if it's not a function
        result = is(feature.fn, 'function') ? feature.fn() : feature.fn;


        // Set each of the names on the Modernizr object
        for (nameIdx = 0; nameIdx < featureNames.length; nameIdx++) {
          featureName = featureNames[nameIdx];
          // Support dot properties as sub tests. We don't do checking to make sure
          // that the implied parent tests have been added. You must call them in
          // order (either in the test, or make the parent test a dependency).
          //
          // Cap it to TWO to make the logic simple and because who needs that kind of subtesting
          // hashtag famous last words
          featureNameSplit = featureName.split('.');

          if (featureNameSplit.length === 1) {
            Modernizr[featureNameSplit[0]] = result;
          } else {
            // cast to a Boolean, if not one already
            /* jshint -W053 */
            if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {
              Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);
            }

            Modernizr[featureNameSplit[0]][featureNameSplit[1]] = result;
          }

          classes.push((result ? '' : 'no-') + featureNameSplit.join('-'));
        }
      }
    }
  }
  ;

  /**
   * docElement is a convenience wrapper to grab the root element of the document
   *
   * @access private
   * @returns {HTMLElement|SVGElement} The root element of the document
   */

  var docElement = document.documentElement;
  

  /**
   * A convenience helper to check if the document we are running in is an SVG document
   *
   * @access private
   * @returns {boolean}
   */

  var isSVG = docElement.nodeName.toLowerCase() === 'svg';
  

  /**
   * setClasses takes an array of class names and adds them to the root element
   *
   * @access private
   * @function setClasses
   * @param {string[]} classes - Array of class names
   */

  // Pass in an and array of class names, e.g.:
  //  ['no-webp', 'borderradius', ...]
  function setClasses(classes) {
    var className = docElement.className;
    var classPrefix = Modernizr._config.classPrefix || '';

    if (isSVG) {
      className = className.baseVal;
    }

    // Change `no-js` to `js` (independently of the `enableClasses` option)
    // Handle classPrefix on this too
    if (Modernizr._config.enableJSClass) {
      var reJS = new RegExp('(^|\\s)' + classPrefix + 'no-js(\\s|$)');
      className = className.replace(reJS, '$1' + classPrefix + 'js$2');
    }

    if (Modernizr._config.enableClasses) {
      // Add the new classes
      className += ' ' + classPrefix + classes.join(' ' + classPrefix);
      isSVG ? docElement.className.baseVal = className : docElement.className = className;
    }

  }

  ;

  /**
   * createElement is a convenience wrapper around document.createElement. Since we
   * use createElement all over the place, this allows for (slightly) smaller code
   * as well as abstracting away issues with creating elements in contexts other than
   * HTML documents (e.g. SVG documents).
   *
   * @access private
   * @function createElement
   * @returns {HTMLElement|SVGElement} An HTML or SVG element
   */

  function createElement() {
    if (typeof document.createElement !== 'function') {
      // This is the case in IE7, where the type of createElement is "object".
      // For this reason, we cannot call apply() as Object is not a Function.
      return document.createElement(arguments[0]);
    } else if (isSVG) {
      return document.createElementNS.call(document, 'http://www.w3.org/2000/svg', arguments[0]);
    } else {
      return document.createElement.apply(document, arguments);
    }
  }

  ;
/*!
{
  "name": "Background Position Shorthand",
  "property": "bgpositionshorthand",
  "tags": ["css"],
  "builderAliases": ["css_backgroundposition_shorthand"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en/CSS/background-position"
  }, {
    "name": "W3 Spec",
    "href": "https://www.w3.org/TR/css3-background/#background-position"
  }, {
    "name": "Demo",
    "href": "https://jsfiddle.net/Blink/bBXvt/"
  }]
}
!*/
/* DOC
Detects if you can use the shorthand method to define multiple parts of an
element's background-position simultaniously.

eg `background-position: right 10px bottom 10px`
*/

  Modernizr.addTest('bgpositionshorthand', function() {
    var elem = createElement('a');
    var eStyle = elem.style;
    var val = 'right 10px bottom 10px';
    eStyle.cssText = 'background-position: ' + val + ';';
    return (eStyle.backgroundPosition === val);
  });


  /**
   * If the browsers follow the spec, then they would expose vendor-specific style as:
   *   elem.style.WebkitBorderRadius
   * instead of something like the following, which would be technically incorrect:
   *   elem.style.webkitBorderRadius

   * Webkit ghosts their properties in lowercase but Opera & Moz do not.
   * Microsoft uses a lowercase `ms` instead of the correct `Ms` in IE8+
   *   erik.eae.net/archives/2008/03/10/21.48.10/

   * More here: github.com/Modernizr/Modernizr/issues/issue/21
   *
   * @access private
   * @returns {string} The string representing the vendor-specific style properties
   */

  var omPrefixes = 'Moz O ms Webkit';
  

  var cssomPrefixes = (ModernizrProto._config.usePrefixes ? omPrefixes.split(' ') : []);
  ModernizrProto._cssomPrefixes = cssomPrefixes;
  


  /**
   * contains checks to see if a string contains another string
   *
   * @access private
   * @function contains
   * @param {string} str - The string we want to check for substrings
   * @param {string} substr - The substring we want to search the first string for
   * @returns {boolean}
   */

  function contains(str, substr) {
    return !!~('' + str).indexOf(substr);
  }

  ;

  /**
   * Create our "modernizr" element that we do most feature tests on.
   *
   * @access private
   */

  var modElem = {
    elem: createElement('modernizr')
  };

  // Clean up this element
  Modernizr._q.push(function() {
    delete modElem.elem;
  });

  

  var mStyle = {
    style: modElem.elem.style
  };

  // kill ref for gc, must happen before mod.elem is removed, so we unshift on to
  // the front of the queue.
  Modernizr._q.unshift(function() {
    delete mStyle.style;
  });

  

  /**
   * getBody returns the body of a document, or an element that can stand in for
   * the body if a real body does not exist
   *
   * @access private
   * @function getBody
   * @returns {HTMLElement|SVGElement} Returns the real body of a document, or an
   * artificially created element that stands in for the body
   */

  function getBody() {
    // After page load injecting a fake body doesn't work so check if body exists
    var body = document.body;

    if (!body) {
      // Can't use the real body create a fake one.
      body = createElement(isSVG ? 'svg' : 'body');
      body.fake = true;
    }

    return body;
  }

  ;

  /**
   * injectElementWithStyles injects an element with style element and some CSS rules
   *
   * @access private
   * @function injectElementWithStyles
   * @param {string} rule - String representing a css rule
   * @param {function} callback - A function that is used to test the injected element
   * @param {number} [nodes] - An integer representing the number of additional nodes you want injected
   * @param {string[]} [testnames] - An array of strings that are used as ids for the additional nodes
   * @returns {boolean}
   */

  function injectElementWithStyles(rule, callback, nodes, testnames) {
    var mod = 'modernizr';
    var style;
    var ret;
    var node;
    var docOverflow;
    var div = createElement('div');
    var body = getBody();

    if (parseInt(nodes, 10)) {
      // In order not to give false positives we create a node for each test
      // This also allows the method to scale for unspecified uses
      while (nodes--) {
        node = createElement('div');
        node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
        div.appendChild(node);
      }
    }

    style = createElement('style');
    style.type = 'text/css';
    style.id = 's' + mod;

    // IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
    // Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270
    (!body.fake ? div : body).appendChild(style);
    body.appendChild(div);

    if (style.styleSheet) {
      style.styleSheet.cssText = rule;
    } else {
      style.appendChild(document.createTextNode(rule));
    }
    div.id = mod;

    if (body.fake) {
      //avoid crashing IE8, if background image is used
      body.style.background = '';
      //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
      body.style.overflow = 'hidden';
      docOverflow = docElement.style.overflow;
      docElement.style.overflow = 'hidden';
      docElement.appendChild(body);
    }

    ret = callback(div, rule);
    // If this is done after page load we don't want to remove the body so check if body exists
    if (body.fake) {
      body.parentNode.removeChild(body);
      docElement.style.overflow = docOverflow;
      // Trigger layout so kinetic scrolling isn't disabled in iOS6+
      docElement.offsetHeight;
    } else {
      div.parentNode.removeChild(div);
    }

    return !!ret;

  }

  ;

  /**
   * domToCSS takes a camelCase string and converts it to kebab-case
   * e.g. boxSizing -> box-sizing
   *
   * @access private
   * @function domToCSS
   * @param {string} name - String name of camelCase prop we want to convert
   * @returns {string} The kebab-case version of the supplied name
   */

  function domToCSS(name) {
    return name.replace(/([A-Z])/g, function(str, m1) {
      return '-' + m1.toLowerCase();
    }).replace(/^ms-/, '-ms-');
  }
  ;

  /**
   * nativeTestProps allows for us to use native feature detection functionality if available.
   * some prefixed form, or false, in the case of an unsupported rule
   *
   * @access private
   * @function nativeTestProps
   * @param {array} props - An array of property names
   * @param {string} value - A string representing the value we want to check via @supports
   * @returns {boolean|undefined} A boolean when @supports exists, undefined otherwise
   */

  // Accepts a list of property names and a single value
  // Returns `undefined` if native detection not available
  function nativeTestProps(props, value) {
    var i = props.length;
    // Start with the JS API: http://www.w3.org/TR/css3-conditional/#the-css-interface
    if ('CSS' in window && 'supports' in window.CSS) {
      // Try every prefixed variant of the property
      while (i--) {
        if (window.CSS.supports(domToCSS(props[i]), value)) {
          return true;
        }
      }
      return false;
    }
    // Otherwise fall back to at-rule (for Opera 12.x)
    else if ('CSSSupportsRule' in window) {
      // Build a condition string for every prefixed variant
      var conditionText = [];
      while (i--) {
        conditionText.push('(' + domToCSS(props[i]) + ':' + value + ')');
      }
      conditionText = conditionText.join(' or ');
      return injectElementWithStyles('@supports (' + conditionText + ') { #modernizr { position: absolute; } }', function(node) {
        return getComputedStyle(node, null).position == 'absolute';
      });
    }
    return undefined;
  }
  ;

  /**
   * cssToDOM takes a kebab-case string and converts it to camelCase
   * e.g. box-sizing -> boxSizing
   *
   * @access private
   * @function cssToDOM
   * @param {string} name - String name of kebab-case prop we want to convert
   * @returns {string} The camelCase version of the supplied name
   */

  function cssToDOM(name) {
    return name.replace(/([a-z])-([a-z])/g, function(str, m1, m2) {
      return m1 + m2.toUpperCase();
    }).replace(/^-/, '');
  }
  ;

  // testProps is a generic CSS / DOM property test.

  // In testing support for a given CSS property, it's legit to test:
  //    `elem.style[styleName] !== undefined`
  // If the property is supported it will return an empty string,
  // if unsupported it will return undefined.

  // We'll take advantage of this quick test and skip setting a style
  // on our modernizr element, but instead just testing undefined vs
  // empty string.

  // Property names can be provided in either camelCase or kebab-case.

  function testProps(props, prefixed, value, skipValueTest) {
    skipValueTest = is(skipValueTest, 'undefined') ? false : skipValueTest;

    // Try native detect first
    if (!is(value, 'undefined')) {
      var result = nativeTestProps(props, value);
      if (!is(result, 'undefined')) {
        return result;
      }
    }

    // Otherwise do it properly
    var afterInit, i, propsLength, prop, before;

    // If we don't have a style element, that means we're running async or after
    // the core tests, so we'll need to create our own elements to use

    // inside of an SVG element, in certain browsers, the `style` element is only
    // defined for valid tags. Therefore, if `modernizr` does not have one, we
    // fall back to a less used element and hope for the best.
    var elems = ['modernizr', 'tspan'];
    while (!mStyle.style) {
      afterInit = true;
      mStyle.modElem = createElement(elems.shift());
      mStyle.style = mStyle.modElem.style;
    }

    // Delete the objects if we created them.
    function cleanElems() {
      if (afterInit) {
        delete mStyle.style;
        delete mStyle.modElem;
      }
    }

    propsLength = props.length;
    for (i = 0; i < propsLength; i++) {
      prop = props[i];
      before = mStyle.style[prop];

      if (contains(prop, '-')) {
        prop = cssToDOM(prop);
      }

      if (mStyle.style[prop] !== undefined) {

        // If value to test has been passed in, do a set-and-check test.
        // 0 (integer) is a valid property value, so check that `value` isn't
        // undefined, rather than just checking it's truthy.
        if (!skipValueTest && !is(value, 'undefined')) {

          // Needs a try catch block because of old IE. This is slow, but will
          // be avoided in most cases because `skipValueTest` will be used.
          try {
            mStyle.style[prop] = value;
          } catch (e) {}

          // If the property value has changed, we assume the value used is
          // supported. If `value` is empty string, it'll fail here (because
          // it hasn't changed), which matches how browsers have implemented
          // CSS.supports()
          if (mStyle.style[prop] != before) {
            cleanElems();
            return prefixed == 'pfx' ? prop : true;
          }
        }
        // Otherwise just return true, or the property name if this is a
        // `prefixed()` call
        else {
          cleanElems();
          return prefixed == 'pfx' ? prop : true;
        }
      }
    }
    cleanElems();
    return false;
  }

  ;

  /**
   * List of JavaScript DOM values used for tests
   *
   * @memberof Modernizr
   * @name Modernizr._domPrefixes
   * @optionName Modernizr._domPrefixes
   * @optionProp domPrefixes
   * @access public
   * @example
   *
   * Modernizr._domPrefixes is exactly the same as [_prefixes](#modernizr-_prefixes), but rather
   * than kebab-case properties, all properties are their Capitalized variant
   *
   * ```js
   * Modernizr._domPrefixes === [ "Moz", "O", "ms", "Webkit" ];
   * ```
   */

  var domPrefixes = (ModernizrProto._config.usePrefixes ? omPrefixes.toLowerCase().split(' ') : []);
  ModernizrProto._domPrefixes = domPrefixes;
  

  /**
   * fnBind is a super small [bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) polyfill.
   *
   * @access private
   * @function fnBind
   * @param {function} fn - a function you want to change `this` reference to
   * @param {object} that - the `this` you want to call the function with
   * @returns {function} The wrapped version of the supplied function
   */

  function fnBind(fn, that) {
    return function() {
      return fn.apply(that, arguments);
    };
  }

  ;

  /**
   * testDOMProps is a generic DOM property test; if a browser supports
   *   a certain property, it won't return undefined for it.
   *
   * @access private
   * @function testDOMProps
   * @param {array.<string>} props - An array of properties to test for
   * @param {object} obj - An object or Element you want to use to test the parameters again
   * @param {boolean|object} elem - An Element to bind the property lookup again. Use `false` to prevent the check
   */
  function testDOMProps(props, obj, elem) {
    var item;

    for (var i in props) {
      if (props[i] in obj) {

        // return the property name as a string
        if (elem === false) {
          return props[i];
        }

        item = obj[props[i]];

        // let's bind a function
        if (is(item, 'function')) {
          // bind to obj unless overriden
          return fnBind(item, elem || obj);
        }

        // return the unbound function or obj or value
        return item;
      }
    }
    return false;
  }

  ;

  /**
   * testPropsAll tests a list of DOM properties we want to check against.
   * We specify literally ALL possible (known and/or likely) properties on
   * the element including the non-vendor prefixed one, for forward-
   * compatibility.
   *
   * @access private
   * @function testPropsAll
   * @param {string} prop - A string of the property to test for
   * @param {string|object} [prefixed] - An object to check the prefixed properties on. Use a string to skip
   * @param {HTMLElement|SVGElement} [elem] - An element used to test the property and value against
   * @param {string} [value] - A string of a css value
   * @param {boolean} [skipValueTest] - An boolean representing if you want to test if value sticks when set
   */
  function testPropsAll(prop, prefixed, elem, value, skipValueTest) {

    var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
    props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

    // did they call .prefixed('boxSizing') or are we just testing a prop?
    if (is(prefixed, 'string') || is(prefixed, 'undefined')) {
      return testProps(props, prefixed, value, skipValueTest);

      // otherwise, they called .prefixed('requestAnimationFrame', window[, elem])
    } else {
      props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
      return testDOMProps(props, prefixed, elem);
    }
  }

  // Modernizr.testAllProps() investigates whether a given style property,
  // or any of its vendor-prefixed variants, is recognized
  //
  // Note that the property names must be provided in the camelCase variant.
  // Modernizr.testAllProps('boxSizing')
  ModernizrProto.testAllProps = testPropsAll;

  

  /**
   * testAllProps determines whether a given CSS property is supported in the browser
   *
   * @memberof Modernizr
   * @name Modernizr.testAllProps
   * @optionName Modernizr.testAllProps()
   * @optionProp testAllProps
   * @access public
   * @function testAllProps
   * @param {string} prop - String naming the property to test (either camelCase or kebab-case)
   * @param {string} [value] - String of the value to test
   * @param {boolean} [skipValueTest=false] - Whether to skip testing that the value is supported when using non-native detection
   * @example
   *
   * testAllProps determines whether a given CSS property, in some prefixed form,
   * is supported by the browser.
   *
   * ```js
   * testAllProps('boxSizing')  // true
   * ```
   *
   * It can optionally be given a CSS value in string form to test if a property
   * value is valid
   *
   * ```js
   * testAllProps('display', 'block') // true
   * testAllProps('display', 'penguin') // false
   * ```
   *
   * A boolean can be passed as a third parameter to skip the value check when
   * native detection (@supports) isn't available.
   *
   * ```js
   * testAllProps('shapeOutside', 'content-box', true);
   * ```
   */

  function testAllProps(prop, value, skipValueTest) {
    return testPropsAll(prop, undefined, undefined, value, skipValueTest);
  }
  ModernizrProto.testAllProps = testAllProps;
  
/*!
{
  "name": "Background Position XY",
  "property": "bgpositionxy",
  "tags": ["css"],
  "builderAliases": ["css_backgroundposition_xy"],
  "authors": ["Allan Lei", "Brandom Aaron"],
  "notes": [{
    "name": "Demo",
    "href": "https://jsfiddle.net/allanlei/R8AYS/"
  }, {
    "name": "Adapted From",
    "href": "https://github.com/brandonaaron/jquery-cssHooks/blob/master/bgpos.js"
  }]
}
!*/
/* DOC
Detects the ability to control an element's background position using css
*/

  Modernizr.addTest('bgpositionxy', function() {
    return testAllProps('backgroundPositionX', '3px', true) && testAllProps('backgroundPositionY', '5px', true);
  });

/*!
{
  "name": "Background Repeat",
  "property": ["bgrepeatspace", "bgrepeatround"],
  "tags": ["css"],
  "builderAliases": ["css_backgroundrepeat"],
  "authors": ["Ryan Seddon"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat"
  }, {
    "name": "Test Page",
    "href": "https://jsbin.com/uzesun/"
  }, {
    "name": "Demo",
    "href": "https://jsfiddle.net/ryanseddon/yMLTQ/6/"
  }]
}
!*/
/* DOC
Detects the ability to use round and space as properties for background-repeat
*/

  // Must value-test these
  Modernizr.addTest('bgrepeatround', testAllProps('backgroundRepeat', 'round'));
  Modernizr.addTest('bgrepeatspace', testAllProps('backgroundRepeat', 'space'));

/*!
{
  "name": "Background Size Cover",
  "property": "bgsizecover",
  "tags": ["css"],
  "builderAliases": ["css_backgroundsizecover"],
  "notes": [{
    "name" : "MDN Docs",
    "href": "https://developer.mozilla.org/en/CSS/background-size"
  }]
}
!*/

  // Must test value, as this specifically tests the `cover` value
  Modernizr.addTest('bgsizecover', testAllProps('backgroundSize', 'cover'));

/*!
{
  "name": "Border Radius",
  "property": "borderradius",
  "caniuse": "border-radius",
  "polyfills": ["css3pie"],
  "tags": ["css"],
  "notes": [{
    "name": "Comprehensive Compat Chart",
    "href": "https://muddledramblings.com/table-of-css3-border-radius-compliance"
  }]
}
!*/

  Modernizr.addTest('borderradius', testAllProps('borderRadius', '0px', true));

/*!
{
  "name": "CSS Animations",
  "property": "cssanimations",
  "caniuse": "css-animation",
  "polyfills": ["transformie", "csssandpaper"],
  "tags": ["css"],
  "warnings": ["Android < 4 will pass this test, but can only animate a single property at a time"],
  "notes": [{
    "name" : "Article: 'Dispelling the Android CSS animation myths'",
    "href": "https://goo.gl/OGw5Gm"
  }]
}
!*/
/* DOC
Detects whether or not elements can be animated using CSS
*/

  Modernizr.addTest('cssanimations', testAllProps('animationName', 'a', true));


  /**
   * List of property values to set for css tests. See ticket #21
   * http://git.io/vUGl4
   *
   * @memberof Modernizr
   * @name Modernizr._prefixes
   * @optionName Modernizr._prefixes
   * @optionProp prefixes
   * @access public
   * @example
   *
   * Modernizr._prefixes is the internal list of prefixes that we test against
   * inside of things like [prefixed](#modernizr-prefixed) and [prefixedCSS](#-code-modernizr-prefixedcss). It is simply
   * an array of kebab-case vendor prefixes you can use within your code.
   *
   * Some common use cases include
   *
   * Generating all possible prefixed version of a CSS property
   * ```js
   * var rule = Modernizr._prefixes.join('transform: rotate(20deg); ');
   *
   * rule === 'transform: rotate(20deg); webkit-transform: rotate(20deg); moz-transform: rotate(20deg); o-transform: rotate(20deg); ms-transform: rotate(20deg);'
   * ```
   *
   * Generating all possible prefixed version of a CSS value
   * ```js
   * rule = 'display:' +  Modernizr._prefixes.join('flex; display:') + 'flex';
   *
   * rule === 'display:flex; display:-webkit-flex; display:-moz-flex; display:-o-flex; display:-ms-flex; display:flex'
   * ```
   */

  var prefixes = (ModernizrProto._config.usePrefixes ? ' -webkit- -moz- -o- -ms- '.split(' ') : []);

  // expose these for the plugin API. Look in the source for how to join() them against your input
  ModernizrProto._prefixes = prefixes;

  
/*!
{
  "name": "CSS Calc",
  "property": "csscalc",
  "caniuse": "calc",
  "tags": ["css"],
  "builderAliases": ["css_calc"],
  "authors": ["@calvein"]
}
!*/
/* DOC
Method of allowing calculated values for length units. For example:

```css
//lem {
  width: calc(100% - 3em);
}
```
*/

  Modernizr.addTest('csscalc', function() {
    var prop = 'width:';
    var value = 'calc(10px);';
    var el = createElement('a');

    el.style.cssText = prop + prefixes.join(value + prop);

    return !!el.style.length;
  });

/*!
{
  "name": "CSS Transforms",
  "property": "csstransforms",
  "caniuse": "transforms2d",
  "tags": ["css"]
}
!*/

  Modernizr.addTest('csstransforms', function() {
    // Android < 3.0 is buggy, so we sniff and blacklist
    // http://git.io/hHzL7w
    return navigator.userAgent.indexOf('Android 2.') === -1 &&
           testAllProps('transform', 'scale(1)', true);
  });


  /**
   * testStyles injects an element with style element and some CSS rules
   *
   * @memberof Modernizr
   * @name Modernizr.testStyles
   * @optionName Modernizr.testStyles()
   * @optionProp testStyles
   * @access public
   * @function testStyles
   * @param {string} rule - String representing a css rule
   * @param {function} callback - A function that is used to test the injected element
   * @param {number} [nodes] - An integer representing the number of additional nodes you want injected
   * @param {string[]} [testnames] - An array of strings that are used as ids for the additional nodes
   * @returns {boolean}
   * @example
   *
   * `Modernizr.testStyles` takes a CSS rule and injects it onto the current page
   * along with (possibly multiple) DOM elements. This lets you check for features
   * that can not be detected by simply checking the [IDL](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Interface_development_guide/IDL_interface_rules).
   *
   * ```js
   * Modernizr.testStyles('#modernizr { width: 9px; color: papayawhip; }', function(elem, rule) {
   *   // elem is the first DOM node in the page (by default #modernizr)
   *   // rule is the first argument you supplied - the CSS rule in string form
   *
   *   addTest('widthworks', elem.style.width === '9px')
   * });
   * ```
   *
   * If your test requires multiple nodes, you can include a third argument
   * indicating how many additional div elements to include on the page. The
   * additional nodes are injected as children of the `elem` that is returned as
   * the first argument to the callback.
   *
   * ```js
   * Modernizr.testStyles('#modernizr {width: 1px}; #modernizr2 {width: 2px}', function(elem) {
   *   document.getElementById('modernizr').style.width === '1px'; // true
   *   document.getElementById('modernizr2').style.width === '2px'; // true
   *   elem.firstChild === document.getElementById('modernizr2'); // true
   * }, 1);
   * ```
   *
   * By default, all of the additional elements have an ID of `modernizr[n]`, where
   * `n` is its index (e.g. the first additional, second overall is `#modernizr2`,
   * the second additional is `#modernizr3`, etc.).
   * If you want to have more meaningful IDs for your function, you can provide
   * them as the fourth argument, as an array of strings
   *
   * ```js
   * Modernizr.testStyles('#foo {width: 10px}; #bar {height: 20px}', function(elem) {
   *   elem.firstChild === document.getElementById('foo'); // true
   *   elem.lastChild === document.getElementById('bar'); // true
   * }, 2, ['foo', 'bar']);
   * ```
   *
   */

  var testStyles = ModernizrProto.testStyles = injectElementWithStyles;
  
/*!
{
  "name": "CSS Supports",
  "property": "supports",
  "caniuse": "css-featurequeries",
  "tags": ["css"],
  "builderAliases": ["css_supports"],
  "notes": [{
    "name": "W3 Spec",
    "href": "http://dev.w3.org/csswg/css3-conditional/#at-supports"
  },{
    "name": "Related Github Issue",
    "href": "github.com/Modernizr/Modernizr/issues/648"
  },{
    "name": "W3 Info",
    "href": "http://dev.w3.org/csswg/css3-conditional/#the-csssupportsrule-interface"
  }]
}
!*/

  var newSyntax = 'CSS' in window && 'supports' in window.CSS;
  var oldSyntax = 'supportsCSS' in window;
  Modernizr.addTest('supports', newSyntax || oldSyntax);

/*!
{
  "name": "CSS Transforms 3D",
  "property": "csstransforms3d",
  "caniuse": "transforms3d",
  "tags": ["css"],
  "warnings": [
    "Chrome may occassionally fail this test on some systems; more info: https://code.google.com/p/chromium/issues/detail?id=129004"
  ]
}
!*/

  Modernizr.addTest('csstransforms3d', function() {
    var ret = !!testAllProps('perspective', '1px', true);
    var usePrefix = Modernizr._config.usePrefixes;

    // Webkit's 3D transforms are passed off to the browser's own graphics renderer.
    //   It works fine in Safari on Leopard and Snow Leopard, but not in Chrome in
    //   some conditions. As a result, Webkit typically recognizes the syntax but
    //   will sometimes throw a false positive, thus we must do a more thorough check:
    if (ret && (!usePrefix || 'webkitPerspective' in docElement.style)) {
      var mq;
      var defaultStyle = '#modernizr{width:0;height:0}';
      // Use CSS Conditional Rules if available
      if (Modernizr.supports) {
        mq = '@supports (perspective: 1px)';
      } else {
        // Otherwise, Webkit allows this media query to succeed only if the feature is enabled.
        // `@media (transform-3d),(-webkit-transform-3d){ ... }`
        mq = '@media (transform-3d)';
        if (usePrefix) {
          mq += ',(-webkit-transform-3d)';
        }
      }

      mq += '{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}';

      testStyles(defaultStyle + mq, function(elem) {
        ret = elem.offsetWidth === 7 && elem.offsetHeight === 18;
      });
    }

    return ret;
  });

/*!
{
  "name": "CSS Transform Style preserve-3d",
  "property": "preserve3d",
  "authors": ["edmellum"],
  "tags": ["css"],
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style"
  },{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/issues/762"
  }]
}
!*/
/* DOC
Detects support for `transform-style: preserve-3d`, for getting a proper 3D perspective on elements.
*/

  Modernizr.addTest('preserve3d', testAllProps('transformStyle', 'preserve-3d'));

/*!
{
  "name": "CSS Transitions",
  "property": "csstransitions",
  "caniuse": "css-transitions",
  "tags": ["css"]
}
!*/

  Modernizr.addTest('csstransitions', testAllProps('transition', 'all', true));

/*!
{
  "name": "Flexbox (tweener)",
  "property": "flexboxtweener",
  "tags": ["css"],
  "polyfills": ["flexie"],
  "notes": [{
    "name": "The _inbetween_ flexbox",
    "href": "https://www.w3.org/TR/2011/WD-css3-flexbox-20111129/"
  }],
  "warnings": ["This represents an old syntax, not the latest standard syntax."]
}
!*/

  Modernizr.addTest('flexboxtweener', testAllProps('flexAlign', 'end', true));

/*!
{
  "name": "@font-face",
  "property": "fontface",
  "authors": ["Diego Perini", "Mat Marquis"],
  "tags": ["css"],
  "knownBugs": [
    "False Positive: WebOS https://github.com/Modernizr/Modernizr/issues/342",
    "False Postive: WP7 https://github.com/Modernizr/Modernizr/issues/538"
  ],
  "notes": [{
    "name": "@font-face detection routine by Diego Perini",
    "href": "http://javascript.nwbox.com/CSSSupport/"
  },{
    "name": "Filament Group @font-face compatibility research",
    "href": "https://docs.google.com/presentation/d/1n4NyG4uPRjAA8zn_pSQ_Ket0RhcWC6QlZ6LMjKeECo0/edit#slide=id.p"
  },{
    "name": "Filament Grunticon/@font-face device testing results",
    "href": "https://docs.google.com/spreadsheet/ccc?key=0Ag5_yGvxpINRdHFYeUJPNnZMWUZKR2ItMEpRTXZPdUE#gid=0"
  },{
    "name": "CSS fonts on Android",
    "href": "https://stackoverflow.com/questions/3200069/css-fonts-on-android"
  },{
    "name": "@font-face and Android",
    "href": "http://archivist.incutio.com/viewlist/css-discuss/115960"
  }]
}
!*/

  var blacklist = (function() {
    var ua = navigator.userAgent;
    var wkvers = ua.match(/applewebkit\/([0-9]+)/gi) && parseFloat(RegExp.$1);
    var webos = ua.match(/w(eb)?osbrowser/gi);
    var wppre8 = ua.match(/windows phone/gi) && ua.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9;
    var oldandroid = wkvers < 533 && ua.match(/android/gi);
    return webos || oldandroid || wppre8;
  }());
  if (blacklist) {
    Modernizr.addTest('fontface', false);
  } else {
    testStyles('@font-face {font-family:"font";src:url("https://")}', function(node, rule) {
      var style = document.getElementById('smodernizr');
      var sheet = style.sheet || style.styleSheet;
      var cssText = sheet ? (sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || '') : '';
      var bool = /src/i.test(cssText) && cssText.indexOf(rule.split(' ')[0]) === 0;
      Modernizr.addTest('fontface', bool);
    });
  }
;
/*!
{
  "name": "SVG",
  "property": "svg",
  "caniuse": "svg",
  "tags": ["svg"],
  "authors": ["Erik Dahlstrom"],
  "polyfills": [
    "svgweb",
    "raphael",
    "amplesdk",
    "canvg",
    "svg-boilerplate",
    "sie",
    "dojogfx",
    "fabricjs"
  ]
}
!*/
/* DOC
Detects support for SVG in `<embed>` or `<object>` elements.
*/

  Modernizr.addTest('svg', !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect);


  /**
   * hasOwnProp is a shim for hasOwnProperty that is needed for Safari 2.0 support
   *
   * @author kangax
   * @access private
   * @function hasOwnProp
   * @param {object} object - The object to check for a property
   * @param {string} property - The property to check for
   * @returns {boolean}
   */

  // hasOwnProperty shim by kangax needed for Safari 2.0 support
  var hasOwnProp;

  (function() {
    var _hasOwnProperty = ({}).hasOwnProperty;
    /* istanbul ignore else */
    /* we have no way of testing IE 5.5 or safari 2,
     * so just assume the else gets hit */
    if (!is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined')) {
      hasOwnProp = function(object, property) {
        return _hasOwnProperty.call(object, property);
      };
    }
    else {
      hasOwnProp = function(object, property) { /* yes, this can give false positives/negatives, but most of the time we don't care about those */
        return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
      };
    }
  })();

  


   // _l tracks listeners for async tests, as well as tests that execute after the initial run
  ModernizrProto._l = {};

  /**
   * Modernizr.on is a way to listen for the completion of async tests. Being
   * asynchronous, they may not finish before your scripts run. As a result you
   * will get a possibly false negative `undefined` value.
   *
   * @memberof Modernizr
   * @name Modernizr.on
   * @access public
   * @function on
   * @param {string} feature - String name of the feature detect
   * @param {function} cb - Callback function returning a Boolean - true if feature is supported, false if not
   * @example
   *
   * ```js
   * Modernizr.on('flash', function( result ) {
   *   if (result) {
   *    // the browser has flash
   *   } else {
   *     // the browser does not have flash
   *   }
   * });
   * ```
   */

  ModernizrProto.on = function(feature, cb) {
    // Create the list of listeners if it doesn't exist
    if (!this._l[feature]) {
      this._l[feature] = [];
    }

    // Push this test on to the listener list
    this._l[feature].push(cb);

    // If it's already been resolved, trigger it on next tick
    if (Modernizr.hasOwnProperty(feature)) {
      // Next Tick
      setTimeout(function() {
        Modernizr._trigger(feature, Modernizr[feature]);
      }, 0);
    }
  };

  /**
   * _trigger is the private function used to signal test completion and run any
   * callbacks registered through [Modernizr.on](#modernizr-on)
   *
   * @memberof Modernizr
   * @name Modernizr._trigger
   * @access private
   * @function _trigger
   * @param {string} feature - string name of the feature detect
   * @param {function|boolean} [res] - A feature detection function, or the boolean =
   * result of a feature detection function
   */

  ModernizrProto._trigger = function(feature, res) {
    if (!this._l[feature]) {
      return;
    }

    var cbs = this._l[feature];

    // Force async
    setTimeout(function() {
      var i, cb;
      for (i = 0; i < cbs.length; i++) {
        cb = cbs[i];
        cb(res);
      }
    }, 0);

    // Don't trigger these again
    delete this._l[feature];
  };

  /**
   * addTest allows you to define your own feature detects that are not currently
   * included in Modernizr (under the covers it's the exact same code Modernizr
   * uses for its own [feature detections](https://github.com/Modernizr/Modernizr/tree/master/feature-detects)). Just like the offical detects, the result
   * will be added onto the Modernizr object, as well as an appropriate className set on
   * the html element when configured to do so
   *
   * @memberof Modernizr
   * @name Modernizr.addTest
   * @optionName Modernizr.addTest()
   * @optionProp addTest
   * @access public
   * @function addTest
   * @param {string|object} feature - The string name of the feature detect, or an
   * object of feature detect names and test
   * @param {function|boolean} test - Function returning true if feature is supported,
   * false if not. Otherwise a boolean representing the results of a feature detection
   * @example
   *
   * The most common way of creating your own feature detects is by calling
   * `Modernizr.addTest` with a string (preferably just lowercase, without any
   * punctuation), and a function you want executed that will return a boolean result
   *
   * ```js
   * Modernizr.addTest('itsTuesday', function() {
   *  var d = new Date();
   *  return d.getDay() === 2;
   * });
   * ```
   *
   * When the above is run, it will set Modernizr.itstuesday to `true` when it is tuesday,
   * and to `false` every other day of the week. One thing to notice is that the names of
   * feature detect functions are always lowercased when added to the Modernizr object. That
   * means that `Modernizr.itsTuesday` will not exist, but `Modernizr.itstuesday` will.
   *
   *
   *  Since we only look at the returned value from any feature detection function,
   *  you do not need to actually use a function. For simple detections, just passing
   *  in a statement that will return a boolean value works just fine.
   *
   * ```js
   * Modernizr.addTest('hasJquery', 'jQuery' in window);
   * ```
   *
   * Just like before, when the above runs `Modernizr.hasjquery` will be true if
   * jQuery has been included on the page. Not using a function saves a small amount
   * of overhead for the browser, as well as making your code much more readable.
   *
   * Finally, you also have the ability to pass in an object of feature names and
   * their tests. This is handy if you want to add multiple detections in one go.
   * The keys should always be a string, and the value can be either a boolean or
   * function that returns a boolean.
   *
   * ```js
   * var detects = {
   *  'hasjquery': 'jQuery' in window,
   *  'itstuesday': function() {
   *    var d = new Date();
   *    return d.getDay() === 2;
   *  }
   * }
   *
   * Modernizr.addTest(detects);
   * ```
   *
   * There is really no difference between the first methods and this one, it is
   * just a convenience to let you write more readable code.
   */

  function addTest(feature, test) {

    if (typeof feature == 'object') {
      for (var key in feature) {
        if (hasOwnProp(feature, key)) {
          addTest(key, feature[ key ]);
        }
      }
    } else {

      feature = feature.toLowerCase();
      var featureNameSplit = feature.split('.');
      var last = Modernizr[featureNameSplit[0]];

      // Again, we don't check for parent test existence. Get that right, though.
      if (featureNameSplit.length == 2) {
        last = last[featureNameSplit[1]];
      }

      if (typeof last != 'undefined') {
        // we're going to quit if you're trying to overwrite an existing test
        // if we were to allow it, we'd do this:
        //   var re = new RegExp("\\b(no-)?" + feature + "\\b");
        //   docElement.className = docElement.className.replace( re, '' );
        // but, no rly, stuff 'em.
        return Modernizr;
      }

      test = typeof test == 'function' ? test() : test;

      // Set the value (this is the magic, right here).
      if (featureNameSplit.length == 1) {
        Modernizr[featureNameSplit[0]] = test;
      } else {
        // cast to a Boolean, if not one already
        /* jshint -W053 */
        if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {
          Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);
        }

        Modernizr[featureNameSplit[0]][featureNameSplit[1]] = test;
      }

      // Set a single class (either `feature` or `no-feature`)
      /* jshint -W041 */
      setClasses([(!!test && test != false ? '' : 'no-') + featureNameSplit.join('-')]);
      /* jshint +W041 */

      // Trigger the event
      Modernizr._trigger(feature, test);
    }

    return Modernizr; // allow chaining.
  }

  // After all the tests are run, add self to the Modernizr prototype
  Modernizr._q.push(function() {
    ModernizrProto.addTest = addTest;
  });

  

/*!
{
  "name": "SVG as an <img> tag source",
  "property": "svgasimg",
  "caniuse" : "svg-img",
  "tags": ["svg"],
  "authors": ["Chris Coyier"],
  "notes": [{
    "name": "HTML5 Spec",
    "href": "http://www.w3.org/TR/html5/embedded-content-0.html#the-img-element"
  }]
}
!*/


  // Original Async test by Stu Cox
  // https://gist.github.com/chriscoyier/8774501

  // Now a Sync test based on good results here
  // http://codepen.io/chriscoyier/pen/bADFx

  // Note http://www.w3.org/TR/SVG11/feature#Image is *supposed* to represent
  // support for the `<image>` tag in SVG, not an SVG file linked from an `<img>`
  // tag in HTML – but it’s a heuristic which works
  Modernizr.addTest('svgasimg', document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#Image', '1.1'));


  /**
   * Object.prototype.toString can be used with every object and allows you to
   * get its class easily. Abstracting it off of an object prevents situations
   * where the toString property has been overridden
   *
   * @access private
   * @function toStringFn
   * @returns {function} An abstracted toString function
   */

  var toStringFn = ({}).toString;
  
/*!
{
  "name": "SVG clip paths",
  "property": "svgclippaths",
  "tags": ["svg"],
  "notes": [{
    "name": "Demo",
    "href": "http://srufaculty.sru.edu/david.dailey/svg/newstuff/clipPath4.svg"
  }]
}
!*/
/* DOC
Detects support for clip paths in SVG (only, not on HTML content).

See [this discussion](https://github.com/Modernizr/Modernizr/issues/213) regarding applying SVG clip paths to HTML content.
*/

  Modernizr.addTest('svgclippaths', function() {
    return !!document.createElementNS &&
      /SVGClipPath/.test(toStringFn.call(document.createElementNS('http://www.w3.org/2000/svg', 'clipPath')));
  });

/*!
{
  "name": "SVG filters",
  "property": "svgfilters",
  "caniuse": "svg-filters",
  "tags": ["svg"],
  "builderAliases": ["svg_filters"],
  "authors": ["Erik Dahlstrom"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/SVG11/filters.html"
  }]
}
!*/

  // Should fail in Safari: https://stackoverflow.com/questions/9739955/feature-detecting-support-for-svg-filters.
  Modernizr.addTest('svgfilters', function() {
    var result = false;
    try {
      result = 'SVGFEColorMatrixElement' in window &&
        SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE == 2;
    }
    catch (e) {}
    return result;
  });

/*!
{
  "name": "SVG foreignObject",
  "property": "svgforeignobject",
  "tags": ["svg"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/SVG11/extend.html"
  }]
}
!*/
/* DOC
Detects support for foreignObject tag in SVG.
*/

  Modernizr.addTest('svgforeignobject', function() {
    return !!document.createElementNS &&
      /SVGForeignObject/.test(toStringFn.call(document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject')));
  });

/*!
{
  "name": "Inline SVG",
  "property": "inlinesvg",
  "caniuse": "svg-html5",
  "tags": ["svg"],
  "notes": [{
    "name": "Test page",
    "href": "https://paulirish.com/demo/inline-svg"
  }, {
    "name": "Test page and results",
    "href": "https://codepen.io/eltonmesquita/full/GgXbvo/"
  }],
  "polyfills": ["inline-svg-polyfill"],
  "knownBugs": ["False negative on some Chromia browsers."]
}
!*/
/* DOC
Detects support for inline SVG in HTML (not within XHTML).
*/

  Modernizr.addTest('inlinesvg', function() {
    var div = createElement('div');
    div.innerHTML = '<svg/>';
    return (typeof SVGRect != 'undefined' && div.firstChild && div.firstChild.namespaceURI) == 'http://www.w3.org/2000/svg';
  });

/*!
{
  "name": "SVG SMIL animation",
  "property": "smil",
  "caniuse": "svg-smil",
  "tags": ["svg"],
  "notes": [{
  "name": "W3C Synchronised Multimedia spec",
  "href": "https://www.w3.org/AudioVideo/"
  }]
}
!*/

  // SVG SMIL animation
  Modernizr.addTest('smil', function() {
    return !!document.createElementNS &&
      /SVGAnimate/.test(toStringFn.call(document.createElementNS('http://www.w3.org/2000/svg', 'animate')));
  });

/*!
{
  "name": "Local Storage",
  "property": "localstorage",
  "caniuse": "namevalue-storage",
  "tags": ["storage"],
  "knownBugs": [],
  "notes": [],
  "warnings": [],
  "polyfills": [
    "joshuabell-polyfill",
    "cupcake",
    "storagepolyfill",
    "amplifyjs",
    "yui-cacheoffline"
  ]
}
!*/

  // In FF4, if disabled, window.localStorage should === null.

  // Normally, we could not test that directly and need to do a
  //   `('localStorage' in window) && ` test first because otherwise Firefox will
  //   throw bugzil.la/365772 if cookies are disabled

  // Also in iOS5 Private Browsing mode, attempting to use localStorage.setItem
  // will throw the exception:
  //   QUOTA_EXCEEDED_ERROR DOM Exception 22.
  // Peculiarly, getItem and removeItem calls do not throw.

  // Because we are forced to try/catch this, we'll go aggressive.

  // Just FWIW: IE8 Compat mode supports these features completely:
  //   www.quirksmode.org/dom/html5.html
  // But IE8 doesn't support either with local files

  Modernizr.addTest('localstorage', function() {
    var mod = 'modernizr';
    try {
      localStorage.setItem(mod, mod);
      localStorage.removeItem(mod);
      return true;
    } catch (e) {
      return false;
    }
  });

/*!
{
  "name": "Session Storage",
  "property": "sessionstorage",
  "tags": ["storage"],
  "polyfills": ["joshuabell-polyfill", "cupcake", "sessionstorage"]
}
!*/

  // Because we are forced to try/catch this, we'll go aggressive.

  // Just FWIW: IE8 Compat mode supports these features completely:
  //   www.quirksmode.org/dom/html5.html
  // But IE8 doesn't support either with local files
  Modernizr.addTest('sessionstorage', function() {
    var mod = 'modernizr';
    try {
      sessionStorage.setItem(mod, mod);
      sessionStorage.removeItem(mod);
      return true;
    } catch (e) {
      return false;
    }
  });

/*!
{
  "name": "Web SQL Database",
  "property": "websqldatabase",
  "caniuse": "sql-storage",
  "tags": ["storage"]
}
!*/

  // Chrome incognito mode used to throw an exception when using openDatabase
  // It doesn't anymore.
  Modernizr.addTest('websqldatabase', 'openDatabase' in window);

/*!
{
  "name": "CSS Multiple Backgrounds",
  "caniuse": "multibackgrounds",
  "property": "multiplebgs",
  "tags": ["css"]
}
!*/

  // Setting multiple images AND a color on the background shorthand property
  // and then querying the style.background property value for the number of
  // occurrences of "url(" is a reliable method for detecting ACTUAL support for this!

  Modernizr.addTest('multiplebgs', function() {
    var style = createElement('a').style;
    style.cssText = 'background:url(https://),url(https://),red url(https://)';

    // If the UA supports multiple backgrounds, there should be three occurrences
    // of the string "url(" in the return value for elemStyle.background
    return (/(url\s*\(.*?){3}/).test(style.background);
  });


  // Run each test
  testRunner();

  // Remove the "no-js" class if it exists
  setClasses(classes);

  delete ModernizrProto.addTest;
  delete ModernizrProto.addAsyncTest;

  // Run the things that are supposed to run after the tests
  for (var i = 0; i < Modernizr._q.length; i++) {
    Modernizr._q[i]();
  }

  // Leak Modernizr namespace
  window.Modernizr = Modernizr;


;

})(window, document);

/***/ }),

/***/ 896:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(426);


/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuService = (function () {
    function MenuService() {
        this.menuItems = [];
    }
    MenuService.prototype.addMenu = function (items) {
        var _this = this;
        items.forEach(function (item) {
            _this.menuItems.push(item);
        });
    };
    MenuService.prototype.getMenu = function () {
        return this.menuItems;
    };
    return MenuService;
}());
MenuService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], MenuService);

//# sourceMappingURL=menu.service.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserblockService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserblockService = (function () {
    function UserblockService() {
        // initially visible
        this.userBlockVisible = true;
    }
    UserblockService.prototype.getVisibility = function () {
        return this.userBlockVisible;
    };
    UserblockService.prototype.setVisibility = function (stat) {
        if (stat === void 0) { stat = true; }
        this.userBlockVisible = stat;
    };
    UserblockService.prototype.toggleVisibility = function () {
        this.userBlockVisible = !this.userBlockVisible;
    };
    return UserblockService;
}());
UserblockService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], UserblockService);

//# sourceMappingURL=userblock.service.js.map

/***/ })

},[896]);
//# sourceMappingURL=main.bundle.js.map