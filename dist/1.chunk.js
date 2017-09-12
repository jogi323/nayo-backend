webpackJsonp([1,7],{

/***/ 900:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_menu_menu_service__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_settings_settings_service__ = __webpack_require__(901);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu__ = __webpack_require__(941);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_routing_module__ = __webpack_require__(940);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_component__ = __webpack_require__(915);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_top_navbar_top_navbar_component__ = __webpack_require__(939);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_top_navbar_navsearch_navsearch_component__ = __webpack_require__(938);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_side_navbar_side_navbar_component__ = __webpack_require__(937);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_product_catalog_product_catalog_component__ = __webpack_require__(914);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_portal_home_portal_home_component__ = __webpack_require__(913);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_portal_home_carousal_carousal_component__ = __webpack_require__(934);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_portal_home_products_products_component__ = __webpack_require__(936);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_portal_home_categories_categories_component__ = __webpack_require__(935);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_characteristics_characteristics_component__ = __webpack_require__(911);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_orders_orders_component__ = __webpack_require__(912);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_footer_footer_component__ = __webpack_require__(933);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Shared Module

//Shared Services
//import { SettingsService } from '../shared/services/settings/settings.service';



//Home Module Routing

//Home Module Components












var HomeModule = (function () {
    function HomeModule(menuService) {
        this.menuService = menuService;
        menuService.addMenu(__WEBPACK_IMPORTED_MODULE_6__menu__["a" /* menu */]);
    }
    return HomeModule;
}());
HomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_7__home_routing_module__["a" /* HomeRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_product_catalog_product_catalog_component__["a" /* ProductCatalogComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_portal_home_portal_home_component__["a" /* PortalHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_portal_home_carousal_carousal_component__["a" /* CarousalComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_portal_home_products_products_component__["a" /* ProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_portal_home_categories_categories_component__["a" /* CategoriesComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_top_navbar_top_navbar_component__["a" /* TopNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_top_navbar_navsearch_navsearch_component__["a" /* NavsearchComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_side_navbar_side_navbar_component__["a" /* SideNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_characteristics_characteristics_component__["a" /* CharacteristicsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_orders_orders_component__["a" /* OrdersComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_characteristics_characteristics_component__["a" /* CharacteristicsComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__services_settings_settings_service__["a" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_4__services_menu_menu_service__["a" /* MenuService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_menu_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_menu_menu_service__["a" /* MenuService */]) === "function" && _a || Object])
], HomeModule);

var _a;
//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 901:
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

/***/ 911:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_settings_settings_service__ = __webpack_require__(901);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacteristicsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CharacteristicsComponent = (function () {
    function CharacteristicsComponent(settings) {
        this.settings = settings;
        this.currentCharacteristicId = 0;
        this.showProductDetails = false;
        this.characteristics = [
            { id: "1",
                description: "vechile identification number",
                value: [
                    { charValu: "1231", valueDesc: "abcd", pricing: "100", status: '' },
                    { charValu: "8888", valueDesc: "abc", pricing: "600", status: '' },
                    { charValu: "9999", valueDesc: "abd", pricing: "1000", status: '' }
                ]
            },
            {
                id: "2",
                description: "paint code",
                value: [
                    { charValu: "a3da", valueDesc: "abcd", pricing: "200", status: '' },
                    { charValu: "678", valueDesc: "fvdg", pricing: "400", status: '' }
                ]
            },
            {
                id: "3",
                description: "door",
                value: []
            },
            {
                id: "4",
                description: "front options",
                value: [
                    { charValu: "234", valueDesc: "gyth", pricing: "", status: '' }
                ]
            },
            { id: "5", description: "interior options", value: [] },
            { id: "6", description: "passenger side door", value: [{ charValu: "8907", valueDesc: "fgtyh", pricing: "1000", status: '' }] },
            { id: "7", description: "driver side door", value: [] },
            { id: "8", description: "interior lights", value: [{ charValu: "0987", valueDesc: "hbgyt", pricing: "2000", status: '' }] },
        ];
    }
    CharacteristicsComponent.prototype.toggleShowProductDetails = function () {
        this.showProductDetails = !this.showProductDetails;
    };
    CharacteristicsComponent.prototype.showVlaues = function (event, index) {
        this.currentCharacteristicId = index;
    };
    CharacteristicsComponent.prototype.selectCharacteristic = function () {
        for (var i = 0; i < this.characteristics[this.currentCharacteristicId].value.lenght; i++) {
            this.characteristics[this.currentCharacteristicId].value[i].status = '';
        }
        this.characteristics[this.currentCharacteristicId].value[this.selectedCharacteristic].status = 'selected';
        this.selectedCharacteristic = null;
    };
    CharacteristicsComponent.prototype.findSelectedCharacteristicValue = function (index) {
        for (var i = 0; i < this.characteristics[index].value.length; i++) {
            if (this.characteristics[index].value[i].status == 'selected') {
                return this.characteristics[index].value[i].charValu;
            }
        }
    };
    CharacteristicsComponent.prototype.findSelectedCharacteristicDesc = function (index) {
        for (var i = 0; i < this.characteristics[index].value.length; i++) {
            if (this.characteristics[index].value[i].status == 'selected') {
                return this.characteristics[index].value[i].valueDesc;
            }
        }
    };
    CharacteristicsComponent.prototype.findSelectedCharacteristicPricing = function (index) {
        for (var i = 0; i < this.characteristics[index].value.length; i++) {
            if (this.characteristics[index].value[i].status == 'selected') {
                return this.characteristics[index].value[i].pricing;
            }
        }
    };
    CharacteristicsComponent.prototype.ngOnInit = function () {
    };
    return CharacteristicsComponent;
}());
CharacteristicsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-characteristics',
        template: __webpack_require__(978),
        styles: [__webpack_require__(949)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_settings_settings_service__["a" /* SettingsService */]) === "function" && _a || Object])
], CharacteristicsComponent);

var _a;
//# sourceMappingURL=characteristics.component.js.map

/***/ }),

/***/ 912:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrdersComponent = (function () {
    function OrdersComponent() {
        this.items = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
            'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
            'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
            'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
            'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',
            'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
            'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
            'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
            'The Hague', 'Turin', 'Valencia', 'Vienna', 'Vilnius', 'Warsaw', 'Wrocław',
            'Zagreb', 'Zaragoza', 'Łódź'];
    }
    OrdersComponent.prototype.ngOnInit = function () {
    };
    return OrdersComponent;
}());
OrdersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-orders',
        template: __webpack_require__(980),
        styles: [__webpack_require__(951)]
    }),
    __metadata("design:paramtypes", [])
], OrdersComponent);

//# sourceMappingURL=orders.component.js.map

/***/ }),

/***/ 913:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortalHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortalHomeComponent = (function () {
    function PortalHomeComponent() {
    }
    PortalHomeComponent.prototype.ngOnInit = function () {
    };
    return PortalHomeComponent;
}());
PortalHomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-portal-home',
        template: __webpack_require__(983),
        styles: [__webpack_require__(954)]
    }),
    __metadata("design:paramtypes", [])
], PortalHomeComponent);

//# sourceMappingURL=portal-home.component.js.map

/***/ }),

/***/ 914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settings_settings_service__ = __webpack_require__(901);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCatalogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductCatalogComponent = (function () {
    function ProductCatalogComponent(fb, settings) {
        this.settings = settings;
        // Model Driven validation
        this.valForm = fb.group({
            'style': [{ value: null, disabled: false }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'color': [{ value: null, disabled: false }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'brand': [{ value: null, disabled: false }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'model': [{ value: null, disabled: false }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
        this.styles = [
            { id: "0", name: "dotted" },
            { id: "1", name: "striped" },
            { id: "2", name: "checks" },
            { id: "3", name: "lined" },
            { id: "4", name: "solid" },
            { id: "5", name: "plain" }
        ];
        this.colors = [
            { id: "0", name: "pink" },
            { id: "1", name: "inverse" },
            { id: "2", name: "purple" },
            { id: "3", name: "green" },
            { id: "4", name: "warning" },
            { id: "5", name: "info" },
            { id: "6", name: "success" },
            { id: "7", name: "primary" },
            { id: "8", name: "danger" },
        ];
        this.brands = [
            { id: "0", name: "audi" },
            { id: "1", name: "honda" },
            { id: "2", name: "maruti" },
            { id: "3", name: "benz" },
            { id: "4", name: "merc" }
        ];
        this.products = [
            { id: "0", name: "swift", colo: "red", image: "p0.png" },
            { id: "1", name: "civic", color: "white", image: "p1.png" },
            { id: "2", name: "brio", color: "green", image: "p2.png" },
            { id: "3", name: "verna", color: "blue", image: "p3.png" },
            { id: "4", name: "indica", color: "black", image: "p1.png" },
            { id: "5", name: "polo", color: "yellow", image: "p0.png" }
        ];
        this.models = [
            { id: "0", name: "2017" },
            { id: "1", name: "2016" },
            { id: "2", name: "2015" },
            { id: "3", name: "2014" },
            { id: "4", name: "2013" },
            { id: "5", name: "2012" }
        ];
        this.currentColor = null;
    }
    ProductCatalogComponent.prototype.styleSelected = function (event) {
        this.products = [
            { id: "0", name: "swift", color: "red" },
            { id: "1", name: "civic", color: "white" },
            { id: "2", name: "brio", color: "green" },
            { id: "3", name: "verna", color: "blue" },
            { id: "4", name: "indica", color: "black" },
            { id: "5", name: "polo", color: "yellow" },
            { id: "5", name: "vent", color: "brown" },
            { id: "5", name: "kwid", color: "blue" }
        ];
    };
    ProductCatalogComponent.prototype.colorSelected = function (color) {
        this.currentColor = color;
        this.products = [
            { id: "0", name: "swift", color: color, image: "p0.png" },
            { id: "1", name: "civic", color: color, image: "p1.png" },
            { id: "4", name: "indica", color: color, image: "p1.png" },
            { id: "5", name: "polo", color: color, image: "p0.png" }
        ];
    };
    ProductCatalogComponent.prototype.brandSelected = function (event) {
        this.products = [
            { id: "0", name: "swift", color: "blue", image: "p0.png" },
            { id: "1", name: "civic", color: "red", image: "p1.png" },
            { id: "4", name: "indica", color: "black", image: "p1.png" },
            { id: "5", name: "polo", color: "yellow", image: "p0.png" }
        ];
    };
    ProductCatalogComponent.prototype.modelSelected = function (event) {
        this.products = [
            { id: "0", name: "swift", color: "red" },
            { id: "1", name: "civic", color: "white" },
            { id: "2", name: "brio", color: "green" },
            { id: "3", name: "verna", color: "blue" },
            { id: "4", name: "indica", color: "black" },
            { id: "5", name: "polo", color: "yellow" }
        ];
    };
    ProductCatalogComponent.prototype.submitForm = function ($ev, value) {
        $ev.preventDefault();
        for (var c in this.valForm.controls) {
            this.valForm.controls[c].markAsTouched();
        }
        if (this.valForm.valid) {
            console.log('Valid!');
        }
        console.log(value);
    };
    ProductCatalogComponent.prototype.ngOnInit = function () {
    };
    return ProductCatalogComponent;
}());
ProductCatalogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-catalog',
        template: __webpack_require__(985),
        styles: [__webpack_require__(956)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_settings_settings_service__["a" /* SettingsService */]) === "function" && _b || Object])
], ProductCatalogComponent);

var _a, _b;
//# sourceMappingURL=product-catalog.component.js.map

/***/ }),

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(989),
        styles: [__webpack_require__(960)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 916:
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

/***/ 933:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(979),
        styles: [__webpack_require__(950)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 934:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarousalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarousalComponent = (function () {
    function CarousalComponent() {
        this.slides = [];
        // init carousel
        this.addSlide(4);
        this.addSlide(7);
        this.addSlide(8);
    }
    CarousalComponent.prototype.ngOnInit = function () {
    };
    // CAROUSEL METHODS
    CarousalComponent.prototype.addSlide = function (id) {
        if (id === void 0) { id = 8; }
        this.slides.push({
            image: 'assets/img/bg' + id + '.jpg',
            text: ['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4] + "\n      " + ['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]
        });
    };
    return CarousalComponent;
}());
CarousalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-carousal',
        template: __webpack_require__(981),
        styles: [__webpack_require__(952)]
    }),
    __metadata("design:paramtypes", [])
], CarousalComponent);

//# sourceMappingURL=carousal.component.js.map

/***/ }),

/***/ 935:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoriesComponent = (function () {
    function CategoriesComponent() {
    }
    CategoriesComponent.prototype.ngOnInit = function () {
    };
    return CategoriesComponent;
}());
CategoriesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-categories',
        template: __webpack_require__(982),
        styles: [__webpack_require__(953)]
    }),
    __metadata("design:paramtypes", [])
], CategoriesComponent);

//# sourceMappingURL=categories.component.js.map

/***/ }),

/***/ 936:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsComponent = (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-products',
        template: __webpack_require__(984),
        styles: [__webpack_require__(955)]
    }),
    __metadata("design:paramtypes", [])
], ProductsComponent);

//# sourceMappingURL=products.component.js.map

/***/ }),

/***/ 937:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settings_settings_service__ = __webpack_require__(901);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_menu_menu_service__ = __webpack_require__(916);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideNavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SideNavbarComponent = (function () {
    function SideNavbarComponent(menu, settings, injector) {
        this.menu = menu;
        this.settings = settings;
        this.injector = injector;
        this.menuItems = menu.getMenu();
    }
    SideNavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router = this.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]);
        this.router.events.subscribe(function (val) {
            // close any submenu opened when route changes
            _this.removeFloatingNav();
            // scroll view to top
            window.scrollTo(0, 0);
        });
    };
    SideNavbarComponent.prototype.toggleSubmenuClick = function (event) {
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
    SideNavbarComponent.prototype.closeMenu = function (elem) {
        elem.height(elem[0].scrollHeight); // set height
        elem.height(0); // and move to zero to collapse
        elem.removeClass('opening');
    };
    SideNavbarComponent.prototype.toggleSubmenuHover = function (event) {
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
    SideNavbarComponent.prototype.listenForExternalClicks = function () {
        var _this = this;
        var $doc = $(document).on('click.sidebar', function (e) {
            if (!$(e.target).parents('.aside').length) {
                _this.removeFloatingNav();
                $doc.off('click.sidebar');
            }
        });
    };
    SideNavbarComponent.prototype.removeFloatingNav = function () {
        $('.nav-floating').remove();
    };
    SideNavbarComponent.prototype.isSidebarCollapsed = function () {
        return this.settings.layout.isCollapsed;
    };
    SideNavbarComponent.prototype.isSidebarCollapsedText = function () {
        return this.settings.layout.isCollapsedText;
    };
    SideNavbarComponent.prototype.isEnabledHover = function () {
        return this.settings.layout.asideHover;
    };
    return SideNavbarComponent;
}());
SideNavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-side-navbar',
        template: __webpack_require__(986),
        styles: [__webpack_require__(957)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_menu_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_menu_menu_service__["a" /* MenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_settings_settings_service__["a" /* SettingsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _c || Object])
], SideNavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=side-navbar.component.js.map

/***/ }),

/***/ 938:
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
        template: __webpack_require__(987),
        styles: [__webpack_require__(958)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], NavsearchComponent);

var _a;
//# sourceMappingURL=navsearch.component.js.map

/***/ }),

/***/ 939:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_settings_settings_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_themes_themes_service__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopNavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var screenfull = __webpack_require__(451);
var browser = __webpack_require__(450);



var TopNavbarComponent = (function () {
    function TopNavbarComponent(settings, themes, topNavbarService) {
        // show only a few items on demo
        // this.menuItems = menu.getMenu().slice(0,4); // for horizontal layout
        this.settings = settings;
        this.themes = themes;
        this.topNavbarService = topNavbarService;
        this.navCollapsed = true; // for horizontal layout
        this.menuItems = []; // for horizontal layout
    }
    TopNavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.topNavbarService.url = 'http://localhost:4200/src/app/shared/data.json';
        this.topNavbarService.getData().subscribe(function (res) {
            _this.logo = res[0].logo.src;
            _this.themes.setTheme(res[0].default);
        });
        this.isNavSearchVisible = false;
        if (browser.msie) {
            this.fsbutton.nativeElement.style.display = 'none';
        }
    };
    // toggleUserBlock(event) {
    //     event.preventDefault();
    //     this.userblockService.toggleVisibility();
    // }
    TopNavbarComponent.prototype.openNavSearch = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.setNavSearchVisible(true);
    };
    TopNavbarComponent.prototype.setNavSearchVisible = function (stat) {
        // console.log(stat);
        this.isNavSearchVisible = stat;
    };
    TopNavbarComponent.prototype.getNavSearchVisible = function () {
        return this.isNavSearchVisible;
    };
    TopNavbarComponent.prototype.toggleOffsidebar = function () {
        this.settings.layout.offsidebarOpen = !this.settings.layout.offsidebarOpen;
    };
    TopNavbarComponent.prototype.toggleCollapsedSideabar = function () {
        this.settings.layout.isCollapsed = !this.settings.layout.isCollapsed;
    };
    TopNavbarComponent.prototype.isCollapsedText = function () {
        return this.settings.layout.isCollapsedText;
    };
    TopNavbarComponent.prototype.toggleFullScreen = function (event) {
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
    return TopNavbarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fsbutton'),
    __metadata("design:type", Object)
], TopNavbarComponent.prototype, "fsbutton", void 0);
TopNavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-top-navbar',
        template: __webpack_require__(988),
        styles: [__webpack_require__(959)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_settings_settings_service__["a" /* SettingsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__core_themes_themes_service__["a" /* ThemesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_themes_themes_service__["a" /* ThemesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _c || Object])
], TopNavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=top-navbar.component.js.map

/***/ }),

/***/ 940:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__(915);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_portal_home_portal_home_component__ = __webpack_require__(913);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_product_catalog_product_catalog_component__ = __webpack_require__(914);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_characteristics_characteristics_component__ = __webpack_require__(911);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_orders_orders_component__ = __webpack_require__(912);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_portal_home_portal_home_component__["a" /* PortalHomeComponent */] },
            { path: 'products', component: __WEBPACK_IMPORTED_MODULE_4__components_product_catalog_product_catalog_component__["a" /* ProductCatalogComponent */] },
            { path: 'characteristics', component: __WEBPACK_IMPORTED_MODULE_5__components_characteristics_characteristics_component__["a" /* CharacteristicsComponent */] },
            { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_6__components_orders_orders_component__["a" /* OrdersComponent */] },
        ]
    },
];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    return HomeRoutingModule;
}());
HomeRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], HomeRoutingModule);

//# sourceMappingURL=home-routing.module.js.map

/***/ }),

/***/ 941:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return menu; });
var Home = {
    text: 'Home',
    link: '/home',
    icon: 'icon-home'
};
var Dashboard = {
    text: 'Dashboard',
    link: '/dashboard',
    icon: 'icon-speedometer',
    submenu: [
        {
            text: 'Dashbord v1',
            link: '/dashboard/v1'
        },
        {
            text: 'Dashbord v2',
            link: '/dashboard/v2'
        },
        {
            text: 'Dashbord v3',
            link: '/dashboard/v3'
        }
    ]
};
var Widgets = {
    text: 'Widgets',
    link: '/widgets',
    icon: 'icon-grid'
};
var Elements = {
    text: 'Elements',
    link: '/elements',
    icon: 'icon-chemistry',
    submenu: [
        {
            text: 'Buttons',
            link: '/elements/buttons'
        },
        {
            text: 'Interaction',
            link: '/elements/interaction'
        },
        {
            text: 'Notification',
            link: '/elements/notification'
        },
        {
            text: 'SweetAlert',
            link: '/elements/sweetalert'
        },
        {
            text: 'Spinners',
            link: '/elements/spinners'
        },
        {
            text: 'Dropdown',
            link: '/elements/dropdown'
        },
        {
            text: 'Nav Tree',
            link: '/elements/navtree'
        },
        {
            text: 'Sortable',
            link: '/elements/sortable'
        },
        {
            text: 'Grid',
            link: '/elements/grid'
        },
        {
            text: 'Grid Masonry',
            link: '/elements/gridmasonry'
        },
        {
            text: 'Typography',
            link: '/elements/typography'
        },
        {
            text: 'Font Icons',
            link: '/elements/iconsfont'
        },
        {
            text: 'Weahter Icons',
            link: '/elements/iconsweather'
        },
        {
            text: 'Colors',
            link: '/elements/colors'
        },
        {
            text: 'Infinite Scroll',
            link: '/elements/infinitescroll'
        }
    ]
};
var Forms = {
    text: 'Forms',
    link: '/forms',
    icon: 'icon-note',
    submenu: [
        {
            text: 'Standard',
            link: '/forms/standard'
        },
        {
            text: 'Extended',
            link: '/forms/extended'
        },
        {
            text: 'Validation',
            link: '/forms/validation'
        },
        {
            text: 'Upload',
            link: '/forms/upload'
        },
        {
            text: 'Image Crop',
            link: '/forms/cropper'
        }
    ]
};
var Charts = {
    text: 'Charts',
    link: '/charts',
    icon: 'icon-graph',
    submenu: [
        {
            text: 'Flot',
            link: '/charts/flot'
        },
        {
            text: 'Radial',
            link: '/charts/radial'
        },
        {
            text: 'ChartJS',
            link: '/charts/chartjs'
        }
    ]
};
var Tables = {
    text: 'Tables',
    link: '/tables',
    icon: 'icon-grid',
    submenu: [
        {
            text: 'Standard',
            link: '/tables/standard'
        },
        {
            text: 'Extended',
            link: '/tables/extended'
        },
        {
            text: 'Data-Tables',
            link: '/tables/datatable'
        },
        {
            text: 'Angular Grid',
            link: '/tables/aggrid'
        }
    ]
};
var Maps = {
    text: 'Maps',
    link: '/maps',
    icon: 'icon-map',
    submenu: [
        {
            text: 'Google',
            link: '/maps/google'
        },
        {
            text: 'Vector',
            link: '/maps/vector'
        }
    ]
};
var Pages = {
    text: 'Pages',
    link: '/pages',
    icon: 'icon-doc',
    submenu: [
        {
            text: 'Login',
            link: '/login'
        },
        {
            text: 'Register',
            link: '/register'
        },
        {
            text: 'Recover',
            link: '/recover'
        },
        {
            text: 'Lock',
            link: '/lock'
        },
        {
            text: '404',
            link: '/404'
        },
        {
            text: '500',
            link: '/500'
        },
        {
            text: 'Maintenance',
            link: '/maintenance'
        }
    ]
};
var Blog = {
    text: 'Blog',
    link: '/blog',
    icon: 'icon-notebook',
    submenu: [
        {
            text: 'List',
            link: '/blog/list'
        },
        {
            text: 'Post',
            link: '/blog/post'
        },
        {
            text: 'Articles',
            link: '/blog/articles'
        },
        {
            text: 'Article View',
            link: '/blog/articleview'
        }
    ]
};
var Ecommerce = {
    text: 'Ecommerce',
    link: '/ecommerce',
    icon: 'icon-basket-loaded',
    submenu: [
        {
            text: 'Orders',
            link: '/ecommerce/orders'
        },
        {
            text: 'Order View',
            link: '/ecommerce/orderview'
        },
        {
            text: 'Products',
            link: '/ecommerce/products'
        },
        {
            text: 'Product View',
            link: '/ecommerce/productview'
        },
        {
            text: 'Checkout',
            link: '/ecommerce/checkout'
        }
    ]
};
var Extras = {
    text: 'Extras',
    link: '/extras',
    icon: 'icon-cup',
    submenu: [
        {
            text: 'Contacts',
            link: '/extras/contacts'
        },
        {
            text: 'Contact details',
            link: '/extras/contactdetails'
        },
        {
            text: 'Projects',
            link: '/extras/projects'
        },
        {
            text: 'Projects details',
            link: '/extras/projectsdetails'
        },
        {
            text: 'Team Viewer',
            link: '/extras/teamviewer'
        },
        {
            text: 'Social Board',
            link: '/extras/socialboard'
        },
        {
            text: 'Vote links',
            link: '/extras/votelinks'
        },
        {
            text: 'Bug tracker',
            link: '/extras/bugtracker'
        },
        {
            text: 'Faq',
            link: '/extras/faq'
        },
        {
            text: 'Help center',
            link: '/extras/helpcenter'
        },
        {
            text: 'Followers',
            link: '/extras/followers'
        },
        {
            text: 'Settings',
            link: '/extras/settings'
        },
        {
            text: 'Plans',
            link: '/extras/plans'
        },
        {
            text: 'File manager',
            link: '/extras/filemanager'
        },
        {
            text: 'Forum',
            link: '/extras/forum'
        },
        {
            text: 'Mailbox',
            link: '/extras/mailbox'
        },
        {
            text: 'Timeline',
            link: '/extras/timeline'
        },
        {
            text: 'Calendar',
            link: '/extras/calendar'
        },
        {
            text: 'Invoice',
            link: '/extras/invoice'
        },
        {
            text: 'Search',
            link: '/extras/search'
        },
        {
            text: 'Todo list',
            link: '/extras/todolist'
        },
        {
            text: 'Profile',
            link: '/extras/profile'
        },
        {
            text: 'Code editor',
            link: '/extras/codeeditor'
        }
    ]
};
var headingMain = {
    text: 'Main Navigation',
    heading: true
};
var headingComponents = {
    text: 'Components',
    heading: true
};
var headingMore = {
    text: 'More',
    heading: true
};
var menu = [
    headingMain,
    Home,
    Dashboard,
    Widgets,
    headingComponents,
    Elements,
    Forms,
    Charts,
    Tables,
    Maps,
    headingMore,
    Pages,
    Blog,
    Ecommerce,
    Extras
];
//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 949:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".contentWrapperTopMargin {\n  margin-top: 0px; }\n\n@media only screen and (max-width: 767px) {\n  .contentWrapperTopMargin {\n    margin-top: 128px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 950:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 951:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".contentWrapperTopMargin {\n  margin-top: 55px; }\n\n@media only screen and (max-width: 767px) {\n  .contentWrapperTopMargin {\n    margin-top: 128px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 952:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".carousel-images {\n  width: 100%;\n  height: 500px;\n  margin-top: 4%; }\n\n.carousel-caption {\n  padding-bottom: 20% !important; }\n\n.btn-primary-outline {\n  background-color: transparent;\n  border-color: #ccc;\n  color: #ccc; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 953:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 954:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".carousel-images {\n  width: 100%;\n  height: 400px; }\n\n.carousel-main {\n  padding: 0px; }\n\n.thumbnail {\n  position: relative; }\n\n.caption {\n  position: absolute;\n  top: 45%;\n  left: 0;\n  width: 100%;\n  color: white; }\n\n.btn-primary-outline {\n  background-color: transparent;\n  border-color: #ccc; }\n\ndiv .horizontal {\n  height: 272px; }\n\n.img-responsive {\n  width: 100%; }\n\nimg.horizontal {\n  height: 272px !important; }\n\nimg.img-responsive.vertical {\n  height: 200px !important; }\n\na#product-details {\n  color: white; }\n\nspan.details {\n  margin-left: 2%; }\n\n.half-float {\n  margin-bottom: 0px !important; }\n\n@media only screen and (min-width: 1185px) {\n  .catageoryTopMargin {\n    margin-top: -230px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 955:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".thumbnail {\n  position: relative; }\n\n.caption {\n  position: absolute;\n  top: 50%;\n  left: 15%;\n  width: 90%;\n  color: white; }\n\n.products-main {\n  margin-top: 2%; }\n\nh2 {\n  color: #656565; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 956:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "/* ========================================================================\r\n     Component: media-queries\r\n ========================================================================== */\n.home-container {\n  margin: 0 auto;\n  max-width: 970px; }\n  .home-container .home-logo {\n    width: 240px; }\n  @media only screen and (max-width: 768px) {\n    .home-container .home-text {\n      text-align: center; } }\n\n.currentColor {\n  border: 3px solid rgba(255, 255, 255, 0.5); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 957:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 958:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 959:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".btn-primary-outline {\n  background-color: transparent;\n  border-color: #ccc;\n  color: #ccc; }\n\n.brand {\n  font-size: 30px;\n  font-weight: 900;\n  color: white;\n  font-family: inherit;\n  padding-top: 7% !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 960:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 978:
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-h\">\r\n    <div class=\"wrapper\">\r\n        <section>\r\n            <!-- Page content-->\r\n            <div class=\"content-wrapper contentWrapperTopMargin\" >\r\n                <!-- START panel-->\r\n                <div class=\"panel widget\">\r\n                    <div class=\"panel-body\">\r\n                        <div class=\"row row-table\">\r\n                            <div class=\"col-xs-2 \">\r\n                                <img class=\"img-thumbnail img-circle img-responsive thumb96\" src=\"assets/img/product7.png\" alt=\"Image\" />\r\n                            </div>\r\n                            <div class=\"col-xs-7\">\r\n                                \r\n                                <h3 class=\"mt0\">Product Name</h3>\r\n                                <p class=\"text-muted\">Our award-winning steel roofing offers timeless \r\n                                    beauty and an unmatched quality.</p>\r\n                                    <p class=\"text-muted\" *ngIf=\"showProductDetails\"> Engineered to withstand the most extreme weather conditions \r\n                                     - hail, wind, snow and ice, while maintaining its original look for years to come.\r\n                                    Home and business owners alike will have peace of mind knowing their products are\r\n                                    backed with a lifetime, non-prorated warranty. </p>\r\n                                <a><small (click)=\"toggleShowProductDetails()\" *ngIf=\"!showProductDetails\" class=\"pull-right\">View Details</small></a>\r\n                                <a><small (click)=\"toggleShowProductDetails()\" *ngIf=\"showProductDetails\" class=\"pull-right\">Close</small></a>\r\n                            </div>\r\n                            <div class=\"col-xs-2\">\r\n                                <div ><a class=\"btn btn-success\" [routerLink]=\"'/home/products'\">Change Product</a>\r\n                                </div>    \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">Customize this product</div>\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table table-bordered table-hover\" id=\"table-ext-3\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>ID</th>\r\n                                    <th>Description</th>\r\n                                    <th>Chosen option</th>\r\n                                    <th>List of Values</th>\r\n                                    <th>Description of chosen option</th>\r\n                                    <th>Price</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let characteristic of characteristics; let i = 'index'\">\r\n                                    <td>{{characteristic.id}}</td>\r\n                                    <td>{{characteristic.description}}</td>\r\n                                    <td>{{findSelectedCharacteristicValue(i)}}</td>\r\n                                    <td><a class=\"label label-danger\" (click)=showVlaues($event,i) data-toggle=\"modal\" data-target=\"#characteristicModal\" *ngIf=\"characteristic.value.length\">Select</a></td>\r\n                                    <td>{{findSelectedCharacteristicDesc(i)}}</td>\r\n                                    <td>{{findSelectedCharacteristicPricing(i)}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                    <!-- END table-responsive-->\r\n                    \r\n                </div>\r\n                <!-- Characteristic Modal -->\r\n                  <div class=\"modal fade\" id=\"characteristicModal\" role=\"dialog\">\r\n                    <div class=\"modal-dialog\">\r\n                    \r\n                      <!-- Modal content-->\r\n                      <div class=\"modal-content\">\r\n                        <div class=\"modal-header\">\r\n                          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                          <h4 class=\"modal-title\">Select Value for Characteristic</h4>\r\n                        </div>\r\n                        <div class=\"modal-body\">\r\n                            <table class=\"table table-bordered table-hover\" id=\"table-ext-3\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>Characteristic value</th>\r\n                                        <th>Value Description</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <td>\r\n                                            <select class=\"form-control\" [(ngModel)]=\"selectedCharacteristic\">\r\n                                                <option *ngFor=\"let characteristic of characteristics[currentCharacteristicId].value; let i = 'index'\" value={{i}}>{{characteristic.charValu}}</option>\r\n                                            </select>\r\n                                        </td>\r\n                                        <td><span *ngIf=\"selectedCharacteristic\">{{characteristics[currentCharacteristicId].value[selectedCharacteristic].valueDesc}}</span></td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                        <div class=\"modal-footer\">\r\n                          <button type=\"button\" class=\"btn btn-default\" (click)=\"selectCharacteristic()\" data-dismiss=\"modal\">Submit</button>\r\n                        </div>\r\n                      </div>\r\n                      \r\n                    </div>\r\n                  </div>\r\n                <!-- End of Characteristic Modal -->\r\n            </div>\r\n        </section>\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 979:
/***/ (function(module, exports) {

module.exports = "<span>&copy; nayo</span>"

/***/ }),

/***/ 980:
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-h\">\r\n  <div class=\"wrapper\">\r\n      <!-- <section> -->\r\n          <!-- Page content-->\r\n          <div class=\"content-wrapper contentWrapperTopMargin\" >\r\n            <div class=\"content-heading\">Search\r\n                <small>Search and filter results</small>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-9\">\r\n                    <div class=\"form-group mb-xl\">\r\n                        <input class=\"form-control mb\" type=\"text\" placeholder=\"Search products, people, apps, etc.\" />\r\n                        <div class=\"clearfix\">\r\n                            <button class=\"pull-left btn btn-default\" type=\"button\">Search</button>\r\n                            <!-- <div class=\"pull-right\">\r\n                                <label class=\"checkbox-inline c-checkbox\">\r\n                                    <input id=\"inlineCheckbox10\" type=\"checkbox\" value=\"option1\" />\r\n                                    <span class=\"fa fa-check\"></span>Products</label>\r\n                                <label class=\"checkbox-inline c-checkbox\">\r\n                                    <input id=\"inlineCheckbox20\" type=\"checkbox\" value=\"option2\" />\r\n                                    <span class=\"fa fa-check\"></span>People</label>\r\n                                <label class=\"checkbox-inline c-checkbox\">\r\n                                    <input id=\"inlineCheckbox30\" type=\"checkbox\" value=\"option3\" />\r\n                                    <span class=\"fa fa-check\"></span>Apps</label>\r\n                            </div> -->\r\n                        </div>\r\n                    </div>\r\n                    <!-- START panel-->\r\n                    <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">Recent Orders\r\n                        </div>\r\n                        <!-- START table-responsive-->\r\n                        <div class=\"table-responsive\">\r\n                            <table class=\"table table-striped table-bordered table-hover\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <!-- <th checkAll>\r\n                                            <div class=\"checkbox c-checkbox\" tooltip=\"Check All\">\r\n                                                <label>\r\n                                                    <input type=\"checkbox\" />\r\n                                                    <span class=\"fa fa-check\"></span>\r\n                                                </label>\r\n                                            </div>\r\n                                        </th>\r\n                                        <th>Description</th> -->\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <td>\r\n                                            <!-- <div class=\"checkbox c-checkbox\">\r\n                                                <label>\r\n                                                    <input type=\"checkbox\" />\r\n                                                    <span class=\"fa fa-check\"></span>\r\n                                                </label>\r\n                                            </div> -->\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"media-box\">\r\n                                                <a class=\"pull-left\" href=\"#\">\r\n                                                    <img class=\"media-box-object img-responsive img-rounded thumb64\" src=\"assets/img/dummy.png\" alt=\"\" />\r\n                                                </a>\r\n                                                <div class=\"media-box-body\">\r\n                                                    <div class=\"pull-right btn btn-info btn-sm\">View</div>\r\n                                                    <h4 class=\"media-box-heading\">Product 1</h4>\r\n                                                    <small class=\"text-muted\">Category1, Category2</small>\r\n                                                    <p>Sed gravida auctor odio. Sed viverra rutrum hendrerit. Praesent dapibus justo dolor. Suspendisse rhoncus consectetur eros vehicula accumsan.</p>\r\n                                                </div>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>\r\n                                            <!-- <div class=\"checkbox c-checkbox\">\r\n                                                <label>\r\n                                                    <input type=\"checkbox\" />\r\n                                                    <span class=\"fa fa-check\"></span>\r\n                                                </label>\r\n                                            </div> -->\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"media-box\">\r\n                                                <a class=\"pull-left\" href=\"#\">\r\n                                                    <img class=\"media-box-object img-responsive img-rounded thumb64\" src=\"assets/img/dummy.png\" alt=\"\" />\r\n                                                </a>\r\n                                                <div class=\"media-box-body\">\r\n                                                    <div class=\"pull-right btn btn-info btn-sm\">View</div>\r\n                                                    <h4 class=\"media-box-heading\">Product 2</h4>\r\n                                                    <small class=\"text-muted\">Category1, Category2</small>\r\n                                                    <p>Sed gravida auctor odio. Sed viverra rutrum hendrerit. Praesent dapibus justo dolor. Suspendisse rhoncus consectetur eros vehicula accumsan.</p>\r\n                                                </div>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>\r\n                                            <!-- <div class=\"checkbox c-checkbox\">\r\n                                                <label>\r\n                                                    <input type=\"checkbox\" />\r\n                                                    <span class=\"fa fa-check\"></span>\r\n                                                </label>\r\n                                            </div> -->\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"media-box\">\r\n                                                <a class=\"pull-left\" href=\"#\">\r\n                                                    <img class=\"media-box-object img-responsive img-rounded thumb64\" src=\"assets/img/dummy.png\" alt=\"\" />\r\n                                                </a>\r\n                                                <div class=\"media-box-body\">\r\n                                                    <div class=\"pull-right btn btn-info btn-sm\">View</div>\r\n                                                    <h4 class=\"media-box-heading\">Product 3</h4>\r\n                                                    <small class=\"text-muted\">Category1, Category2</small>\r\n                                                    <p>Sed gravida auctor odio. Sed viverra rutrum hendrerit. Praesent dapibus justo dolor. Suspendisse rhoncus consectetur eros vehicula accumsan.</p>\r\n                                                </div>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>\r\n                                            <!-- <div class=\"checkbox c-checkbox\">\r\n                                                <label>\r\n                                                    <input type=\"checkbox\" />\r\n                                                    <span class=\"fa fa-check\"></span>\r\n                                                </label>\r\n                                            </div> -->\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"media-box\">\r\n                                                <a class=\"pull-left\" href=\"#\">\r\n                                                    <img class=\"media-box-object img-responsive img-rounded thumb64\" src=\"assets/img/dummy.png\" alt=\"\" />\r\n                                                </a>\r\n                                                <div class=\"media-box-body\">\r\n                                                    <div class=\"pull-right btn btn-info btn-sm\">View</div>\r\n                                                    <h4 class=\"media-box-heading\">Product 4</h4>\r\n                                                    <small class=\"text-muted\">Category1, Category2</small>\r\n                                                    <p>Sed gravida auctor odio. Sed viverra rutrum hendrerit. Praesent dapibus justo dolor. Suspendisse rhoncus consectetur eros vehicula accumsan.</p>\r\n                                                </div>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>\r\n                                            <!-- <div class=\"checkbox c-checkbox\">\r\n                                                <label>\r\n                                                    <input type=\"checkbox\" />\r\n                                                    <span class=\"fa fa-check\"></span>\r\n                                                </label>\r\n                                            </div> -->\r\n                                        </td>\r\n                                        <td>\r\n                                            <div class=\"media-box\">\r\n                                                <a class=\"pull-left\" href=\"#\">\r\n                                                    <img class=\"media-box-object img-responsive img-rounded thumb64\" src=\"assets/img/dummy.png\" alt=\"\" />\r\n                                                </a>\r\n                                                <div class=\"media-box-body\">\r\n                                                    <div class=\"pull-right btn btn-info btn-sm\">View</div>\r\n                                                    <h4 class=\"media-box-heading\">Product 5</h4>\r\n                                                    <small class=\"text-muted\">Category1, Category2</small>\r\n                                                    <p>Sed gravida auctor odio. Sed viverra rutrum hendrerit. Praesent dapibus justo dolor. Suspendisse rhoncus consectetur eros vehicula accumsan.</p>\r\n                                                </div>\r\n                                            </div>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                        <!-- END table-responsive-->\r\n                        <div class=\"panel-footer\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-lg-2\">\r\n                                    <!-- <button class=\"btn btn-sm btn-default\">Clear</button> -->\r\n                                </div>\r\n                                <div class=\"col-lg-8\"></div>\r\n                                <div class=\"col-lg-2 text-right\">\r\n                                    <ul class=\"pagination pagination-sm\">\r\n                                        <li class=\"active\"><a href=\"#\">1</a>\r\n                                        </li>\r\n                                        <li><a href=\"#\">2</a>\r\n                                        </li>\r\n                                        <li><a href=\"#\">3</a>\r\n                                        </li>\r\n                                        <li><a href=\"#\">»</a>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- END panel-->\r\n                </div>\r\n                <div class=\"col-lg-3\">\r\n                    <h3 class=\"m0 pb-lg\">Filters</h3>\r\n                    <!-- <div class=\"form-group mb-xl\">\r\n                        <label class=\"control-label mb\">by Text</label>\r\n                        <br/>\r\n                        <ng-select [allowClear]=\"true\" [items]=\"items\" placeholder=\"Nothing selected\"></ng-select>\r\n                    </div> -->\r\n                    <div class=\"form-group mb-xl\">\r\n                        <label class=\"control-label mb\">From Date</label>\r\n                        <br/>\r\n                        <p class=\"input-group\">\r\n                            <input class=\"form-control\" type=\"date\" />\r\n                            <span class=\"input-group-btn\">\r\n                            <button class=\"btn btn-default\" type=\"button\">\r\n                                <em class=\"fa fa-calendar\"></em>\r\n                            </button>\r\n                        </span>\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"form-group mb-xl\">\r\n                        <label class=\"control-label mb\">To Date</label>\r\n                        <br/>\r\n                        <p class=\"input-group\">\r\n                            <input class=\"form-control\" type=\"date\" />\r\n                            <span class=\"input-group-btn\">\r\n                            <button class=\"btn btn-default\" type=\"button\">\r\n                                <em class=\"fa fa-calendar\"></em>\r\n                            </button>\r\n                        </span>\r\n                        </p>\r\n                    </div>\r\n                    <!-- <div class=\"form-group mb-xl\">\r\n                        <label class=\"control-label mb\">by Date</label>\r\n                        <br/>\r\n                        <p class=\"input-group\">\r\n                            <input class=\"form-control\" type=\"date\" />\r\n                            <span class=\"input-group-btn\">\r\n                            <button class=\"btn btn-default\" type=\"button\">\r\n                                <em class=\"fa fa-calendar\"></em>\r\n                            </button>\r\n                        </span>\r\n                        </p>\r\n                    </div> -->\r\n                    <div class=\"form-group mb-xl\">\r\n                      <label class=\"control-label mb\">by Range</label>\r\n                      <br>\r\n                      <input type=\"text\" class=\"slider slider-lg form-control\">\r\n                    </div>\r\n                    <button class=\"btn btn-default btn-lg\">Apply</button>\r\n                </div>\r\n            </div>\r\n            \r\n          </div>\r\n      <!-- </section> -->\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ 981:
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"panel panel-default\">-->\r\n<div class=\"carousel-main\">\r\n  <carousel [interval]=\"2000\" [noWrap]=\"false\">\r\n    <slide *ngFor=\"let slidez of slides; let index=index\" [active]=\"slidez.active\">\r\n      <img [src]=\"slidez.image\" class=\"img-responsive carousel-images\">\r\n      <div class=\"carousel-caption\">\r\n        <h1>Excellence in exterior building products</h1>\r\n        <button class=\"mb-sm btn btn-primary-outline\" [routerLink]=\"'/home/products'\" type=\"button\">View Products</button>\r\n      </div>\r\n    </slide>\r\n  </carousel>\r\n</div>\r\n<!--</div>-->\r\n"

/***/ }),

/***/ 982:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-6\">\r\n  <!-- START widget-->\r\n  <div class=\"panel widget\">\r\n    <div class=\"row row-table row-flush\">\r\n      <div class=\"col-xs-5\">\r\n        <picture class=\"lateral-picture\">\r\n          <img src=\"assets/img/bg10.jpg\" alt=\"\" />\r\n        </picture>\r\n      </div>\r\n      <div class=\"col-xs-7 align-middle p-lg\">\r\n        <p>\r\n          <span class=\"text-lg\">16</span>Aug</p>\r\n        <p>\r\n          <strong>EVENT INVITATION</strong>\r\n        </p>\r\n        <p>Donec posuere neque in elit luctus tempor consequat enim egestas. Nulla dictum egestas leo at lobortis.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- END widget-->\r\n</div>\r\n    <div class=\"col-lg-6\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget\">\r\n            <div class=\"panel-body text-center bg-center\">\r\n                <!--<div class=\"row row-table\">-->\r\n                    <div class=\"col-xs-12\">\r\n                        <img class=\"img img-responsive\" src=\"assets/img/bg4.jpg\" alt=\"Image\" />\r\n                    </div>\r\n                <!--</div>-->\r\n            </div>\r\n            <div class=\"panel-body text-center bg-gray-darker\">\r\n                <div class=\"row row-table\">\r\n                    <div class=\"col-xs-4\">\r\n                        <a class=\"text-white\" href=\"#\">\r\n                            <em class=\"fa fa-twitter fa-2x\"></em>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"col-xs-4\">\r\n                        <a class=\"text-white\" href=\"#\">\r\n                            <em class=\"fa fa-facebook fa-2x\"></em>\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"col-xs-4\">\r\n                        <a class=\"text-white\" href=\"#\">\r\n                            <em class=\"fa fa-comments fa-2x\"></em>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"list-group\">\r\n                <a class=\"list-group-item\" href=\"#\">\r\n                    <span class=\"label label-primary pull-right\">15</span>\r\n                    <em class=\"fa fa-fw fa-clock-o text-muted\"></em>Recent Activity</a>\r\n                <a class=\"list-group-item\" href=\"#\">\r\n                    <span class=\"label label-primary pull-right\">100</span>\r\n                    <em class=\"fa fa-fw fa-user text-muted\"></em>Following</a>\r\n                <a class=\"list-group-item\" href=\"#\">\r\n                    <span class=\"label label-primary pull-right\">300</span>\r\n                    <em class=\"fa fa-fw fa-folder-open-o text-muted\"></em>Photos</a>\r\n            </div>\r\n        </div>\r\n        <!-- END widget-->\r\n    </div>"

/***/ }),

/***/ 983:
/***/ (function(module, exports) {

module.exports = "<!--Carousal Selector-->\r\n\r\n<app-carousal></app-carousal>\r\n\r\n<!--Products Selector-->\r\n<!-- <app-products></app-products> -->\r\n<!--Categoriees Selector-->\r\n<!-- <app-categories></app-categories> -->\r\n<section>\r\n\r\n    <!-- Page content-->\r\n    <div class=\"content-wrapper\">\r\n        <div class=\"content-heading\">Products Avilable \r\n            <small>these are our top selling products</small>\r\n        </div>\r\n    </div>\r\n</section>\r\n<div class=\"container-fluid\" style=\"background:transparent;\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\r\n            <!-- START widget-->\r\n            <!--<div class=\"panel widget horizontal\">\r\n                <div class=\"row row-table row-flush\">\r\n                    <div class=\"col-xs-8 col-lg-8 col-md-8 col-sm-8\">\r\n                        <img class=\"img-responsive horizontal\" src=\"assets/img/product2.PNG\" alt=\"\" />\r\n                    </div>\r\n                    <div class=\"col-xs-4 col-sm-4 col-md-4col-lg-4  bg-info\">\r\n                        <span class=\"details\"> Some details about this product.</span><br>\r\n                        <a [routerLink]=\"''\" id=\"product-details\">For more......</a>\r\n                    </div>\r\n                </div>\r\n            </div>-->\r\n             <div class=\"panel widget\">\r\n                <img class=\"img-responsive vertical\" src=\"assets/img/product8.png\" alt=\"Image\" />\r\n                <div class=\"panel-body\">\r\n                    <div class=\"row row-table text-center\">\r\n                        <!-- <span> Some details about this product.</span><br> -->\r\n                        <h3 class=\"m0\">Roofing</h3>\r\n                        <a [routerLink]=\"'/home/products'\"><small>View details</small></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- END widget-->\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\r\n            <!-- START widget-->\r\n            <div class=\"panel widget\">\r\n                <img class=\"img-responsive vertical\" src=\"assets/img/product10.png\" alt=\"Image\" />\r\n                <div class=\"panel-body\">\r\n                    <div class=\"row row-table text-center\">\r\n                            <h3 class=\"m0\">Sliding</h3>\r\n                            <a [routerLink]=\"'/home/products'\"><small>View details</small></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- END widget-->\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\r\n            <!-- START widget-->\r\n            <div class=\"panel widget\">\r\n                <img class=\"img-responsive vertical\" src=\"assets/img/product9.png\" alt=\"Image\" />\r\n                <div class=\"panel-body\">\r\n                    <div class=\"row row-table text-center\">\r\n                            <h3 class=\"m0\">Soffit</h3>\r\n                            <a [routerLink]=\"'/home/products'\"><small>View details</small></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n                <!-- END widget-->\r\n            </div> \r\n             <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\r\n            <!-- START widget-->\r\n            <div class=\"panel widget\">\r\n                <img class=\"img-responsive vertical\" src=\"assets/img/product7.png\" alt=\"Image\" />\r\n                <div class=\"panel-body\">\r\n                    <div class=\"row row-table text-center\">\r\n                            <h3 class=\"m0\">Rain Ware</h3>\r\n                            <a [routerLink]=\"'/home/products'\"><small>View details</small></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- END widget-->\r\n        </div>    \r\n</div>\r\n</div>\r\n<!-- <section> -->\r\n<div class=\"content-wrapper\">\r\n    <div class=\"content-heading\">Categories\r\n        <small>Categories of procuts avilable</small>\r\n    </div>\r\n</div>\r\n<div class=\"container-fluid\" style=\"background:transparent;\">\r\n\r\n    <div class=\"col-lg-6\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget\">\r\n            <div class=\"row row-table row-flush\">\r\n                <div class=\"col-xs-6\">\r\n                    <picture class=\"lateral-picture\">\r\n                        <img src=\"assets/img/product8.png\" alt=\"\" />\r\n                    </picture>\r\n                </div>\r\n                <div class=\"col-xs-6 align-middle p-lg\">\r\n                    <!--<div class=\"pull-right\"><a class=\"btn btn-primary btn-sm\" href=\"#\">Register</a>\r\n                    </div>\r\n                    <p>\r\n                        <span class=\"text-lg\">16</span>Aug</p>\r\n                    <p>\r\n                        <strong>EVENT INVITATION</strong>\r\n                    </p>-->\r\n                     <h3 class=\"m0\">Siding</h3>\r\n                    <p class=\"text-muted\">Some tag</p>\r\n                    <p>Donec posuere neque in elit luctus tempor consequat enim egestas. Nulla dictum egestas leo at lobortis.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END widget-->\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget\">\r\n            <div class=\"half-float\">\r\n                <img class=\"img-responsive second-catageroies\" src=\"assets/img/product8.png\" alt=\"\" />\r\n                <div class=\"half-float-bottom\">\r\n                    <!-- <img class=\"img-thumbnail img-circle thumb128\" src=\"assets/img/user/09.jpg\" alt=\"Image\" /> -->\r\n                </div>\r\n            </div>\r\n            <div class=\"panel-body text-center\">\r\n                <h3 class=\"m0\">Roofing</h3>\r\n                <p class=\"text-muted\">Some tag</p>\r\n                <p>Proin metus justo, commodo in ultrices at, lobortis sit amet dui. Fusce dolor purus, adipiscing a tempus\r\n                    at, gravida vel purus.</p>\r\n            </div>\r\n            <!--<div class=\"panel-body text-center bg-gray-dark\">\r\n                <div class=\"row row-table\">\r\n                    <div class=\"col-xs-4\">\r\n                        <h3 class=\"m0\">400</h3>\r\n                        <p class=\"m0\">Photos</p>\r\n                    </div>\r\n                    <div class=\"col-xs-4\">\r\n                        <h3 class=\"m0\">2000</h3>\r\n                        <p class=\"m0\">Likes</p>\r\n                    </div>\r\n                    <div class=\"col-xs-4\">\r\n                        <h3 class=\"m0\">500</h3>\r\n                        <p class=\"m0\">Following</p>\r\n                    </div>\r\n                </div>\r\n            </div>-->\r\n        </div>\r\n        <!-- END widget-->\r\n    </div>\r\n    <div class=\"col-lg-6 catageoryTopMargin\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget\">\r\n            <div class=\"half-float\">\r\n                <img class=\"img-responsive\" src=\"assets/img/product10.png\" alt=\"\" />\r\n                <div class=\"half-float-bottom\">\r\n                    <!-- <img class=\"img-thumbnail img-circle thumb128\" src=\"assets/img/user/09.jpg\" alt=\"Image\" /> -->\r\n                </div>\r\n            </div>\r\n            <div class=\"panel-body text-center\">\r\n                <h3 class=\"m0\">Rainware</h3>\r\n                <p class=\"text-muted\">Some tag</p>\r\n                <p>Proin metus justo, commodo in ultrices at, lobortis sit amet dui. Fusce dolor purus, adipiscing a tempus\r\n                    at, gravida vel purus.</p>\r\n            </div>\r\n            <!--<div class=\"panel-body text-center bg-gray-dark\">\r\n                <div class=\"row row-table\">\r\n                    <div class=\"col-xs-4\">\r\n                        <h3 class=\"m0\">400</h3>\r\n                        <p class=\"m0\">Photos</p>\r\n                    </div>\r\n                    <div class=\"col-xs-4\">\r\n                        <h3 class=\"m0\">2000</h3>\r\n                        <p class=\"m0\">Likes</p>\r\n                    </div>\r\n                    <div class=\"col-xs-4\">\r\n                        <h3 class=\"m0\">500</h3>\r\n                        <p class=\"m0\">Following</p>\r\n                    </div>\r\n                </div>\r\n            </div>-->\r\n        </div>\r\n        <!-- END widget-->\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget\">\r\n            <div class=\"row row-table row-flush\">\r\n                <div class=\"col-xs-6\">\r\n                    <picture class=\"lateral-picture\">\r\n                        <img src=\"assets/img/product9.png\" alt=\"\" />\r\n                    </picture>\r\n                </div>\r\n                <div class=\"col-xs-6 align-middle p-lg\">\r\n                    <!--<div class=\"pull-right\"><a class=\"btn btn-primary btn-sm\" href=\"#\">Register</a>\r\n                    </div>\r\n                    <p>\r\n                        <span class=\"text-lg\">16</span>Aug</p>\r\n                    <p>\r\n                        <strong>EVENT INVITATION</strong>\r\n                    </p>-->\r\n                    <h3 class=\"m0\">Saffit,Fascia&Trim</h3>\r\n                    <p class=\"text-muted\">Some tag</p>\r\n                    <p>Donec posuere neque in elit luctus tempor consequat enim egestas. Nulla dictum egestas leo at lobortis.</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END widget-->\r\n    </div>\r\n</div>"

/***/ }),

/***/ 984:
/***/ (function(module, exports) {

module.exports = "<!-- START panel-->\r\n<div class=\"col-md-12 products-main\">\r\n  <div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n      <h2>New Arrivals</h2>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n      <!--<div class=\"row\">-->\r\n        <div class=\"col-lg-3\">\r\n          <!-- START widget-->\r\n          <div class=\"panel widget\">\r\n            <img class=\"img-responsive\" src=\"assets/img/product1.PNG\" alt=\"Image\" />\r\n            <div class=\"panel-body\">\r\n              <div class=\"row row-table text-center\">\r\n                <a>View details <span class=\"fa fa-angle-double-right\"></span></a>\r\n              </div>\r\n            </div>\r\n            <div class=\"caption\">\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, quisquam?</p>\r\n            </div>\r\n          </div>\r\n          <!-- END widget-->\r\n        </div>\r\n        <div class=\"col-lg-3\">\r\n          <!-- START widget-->\r\n          <div class=\"panel widget\">\r\n            <img class=\"img-responsive\" src=\"assets/img/bg1.jpg\" alt=\"Image\" />\r\n            <div class=\"panel-body\">\r\n              <div class=\"row row-table text-center\">\r\n                <a>View details <span class=\"fa fa-angle-double-right\"></span></a>\r\n              </div>\r\n            </div>\r\n            <div class=\"caption\">\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, quisquam?</p>\r\n            </div>\r\n          </div>\r\n          <!-- END widget-->\r\n        </div>\r\n        <div class=\"col-lg-3\">\r\n          <!-- START widget-->\r\n          <div class=\"panel widget\">\r\n            <img class=\"img-responsive\" src=\"assets/img/bg1.jpg\" alt=\"Image\" />\r\n            <div class=\"panel-body\">\r\n              <div class=\"row row-table text-center\">\r\n                <a>View details <span class=\"fa fa-angle-double-right\"></span></a>\r\n              </div>\r\n            </div>\r\n            <div class=\"caption\">\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, quisquam?</p>\r\n            </div>\r\n          </div>\r\n          <!-- END widget-->\r\n        </div>\r\n        <div class=\"col-lg-3\">\r\n          <!-- START widget-->\r\n          <div class=\"panel widget\">\r\n            <img class=\"img-responsive\" src=\"assets/img/bg1.jpg\" alt=\"Image\" />\r\n            <div class=\"panel-body\">\r\n              <div class=\"row row-table text-center\">\r\n                <a>View details <span class=\"fa fa-angle-double-right\"></span></a>\r\n              </div>\r\n            </div>\r\n            <div class=\"caption\">\r\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, quisquam?</p>\r\n            </div>\r\n          </div>\r\n          <!-- END widget-->\r\n        </div>\r\n      <!--</div>-->\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- END panel-->"

/***/ }),

/***/ 985:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <!-- <div class=\"row product-catalog-main\"> -->\r\n    <!-- <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6\"> -->\r\n    <div class=\"aside\">\r\n        <!-- START Sidebar (left)-->\r\n        <div class=\"aside-inner\">\r\n            <nav class=\"sidebar\" sidebar-anyclick-close=\"\" [class.show-scrollbar]=\"settings.layout.asideScrollbar\">\r\n                <br>\r\n                <div class=\"container-fluid\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-12\">\r\n                            <form [formGroup]=\"valForm\" class=\"form-validate form-horizontal\" (submit)=\"submitForm($event, valForm.value)\" novalidate=\"\">\r\n                                <!-- START sidebar nav-->\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-2 control-label float-left pull-left\">Style</label>\r\n                                    <div class=\"col-sm-12\">\r\n                                        <select class=\"form-control\" formControlName=\"style\" [formControl]=\"valForm.controls['style']\" (change)=\"styleSelected($event)\">\r\n                                                    <option *ngFor=\"let style of styles\" value={{style.id}}>{{style.name}}</option>\r\n                                            </select>\r\n                                        <span class=\"text-danger\" *ngIf=\"valForm.controls['style'].hasError('required') && (valForm.controls['style'].dirty || valForm.controls['style'].touched)\">This field is required</span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-2 control-label pull-left\">Color</label>\r\n                                    <div class=\"col-sm-12\">\r\n                                        <div class=\"panel-body\">\r\n\r\n                                            <ul class=\"list-inline external-event-color-selector\">\r\n                                                <li *ngFor=\"let color of colors\" class=\"p0\">\r\n                                                    <a class=\"circle circle-{{color.name}} circle-xl\" (click)=\"colorSelected(color.id)\" [ngClass]=\"{'currentColor':currentColor == color.id}\"></a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-2 control-label pull-left\">Brand</label>\r\n                                    <div class=\"col-sm-12\">\r\n                                        <select class=\"form-control\" formControlName=\"brand\" [formControl]=\"valForm.controls['brand']\" (change)=\"brandSelected($event)\">\r\n                                                    <option *ngFor=\"let brand of brands\" value={{brand.id}}>{{brand.name}}</option>\r\n                                                </select>\r\n                                        <span class=\"text-danger\" *ngIf=\"valForm.controls['brand'].hasError('required') && (valForm.controls['brand'].dirty || valForm.controls['brand'].touched)\">This field is required</span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"col-sm-2 control-label pull-left\">Model</label>\r\n                                    <div class=\"col-sm-12\">\r\n                                        <select class=\"form-control\" formControlName=\"model\" [formControl]=\"valForm.controls['model']\" (change)=\"modelSelected($event)\">\r\n                                                    <option *ngFor=\"let model of models\" value={{model.id}}>{{model.name}}</option>\r\n                                                </select>\r\n                                        <span class=\"text-danger\" *ngIf=\"valForm.controls['model'].hasError('required') && (valForm.controls['model'].dirty || valForm.controls['model'].touched)\">This field is required</span>\r\n                                    </div>\r\n                                </div>\r\n                                <!-- END sidebar nav-->\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n        </div>\r\n        <!-- END Sidebar (left)-->\r\n    </div>\r\n    <!-- </div> -->\r\n    <!-- offsidebar-->\r\n    <!--<app-offsidebar class=\"offsidebar\"></app-offsidebar>-->\r\n    <!-- Main section-->\r\n    <!-- <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-6\"> -->\r\n    <section>\r\n        <!-- Page content-->\r\n        <div class=\"content-wrapper\">\r\n            <div class=\"content-heading\">Product Catalog\r\n                <small>Search for the product you wish to have</small>\r\n            </div>\r\n            <div *ngFor=\"let product of products\">\r\n                <div class=\"col-lg-4\">\r\n                    <!-- START widget-->\r\n                    <div class=\"panel widget\">\r\n                        <div class=\"panel-body text-center bg-center\" style=\"background-image: url('assets/img/bg4.jpg')\">\r\n                            <div class=\"row row-table\">\r\n                                <div class=\"col-xs-12 text-white\">\r\n                                    <br><br><br>\r\n                                    <!-- <img class=\"img-thumbnail img-circle thumb128\" src=\"assets/img/user/06.jpg\" alt=\"Image\" /> -->\r\n                                    <h3 class=\"m0\">{{product.name}}</h3>\r\n                                    <p class=\"m0\">\r\n                                        <em></em>some info</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"panel-body text-center bg-gray-lighter\">\r\n                            <div class=\"row row-table\">\r\n                                <div class=\"col-xs-12\">\r\n                                    <a class=\"text-{{product.color}}\" [routerLink]=\"'/home/characteristics'\">\r\n                                        product name\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- END widget-->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <!-- </div> -->\r\n    <!-- </div> -->\r\n</div>"

/***/ }),

/***/ 986:
/***/ (function(module, exports) {

module.exports = "<!-- START Sidebar (left)-->\n<div class=\"aside-inner\">\n    <nav class=\"sidebar\" sidebar-anyclick-close=\"\" [class.show-scrollbar]=\"settings.layout.asideScrollbar\">\n\n        <!-- START sidebar nav-->\n        <ul class=\"nav\">\n\n\n            <li *ngFor='let item of menuItems' [ngClass]=\"{'nav-heading': item.heading}\" [routerLinkActive]=\"['active']\">\n                <!-- menu heading -->\n                <span *ngIf=\"item.heading\">{{(item.translate | translate) || item.text}}</span>\n                <!-- external links -->\n                <a *ngIf=\"!item.heading && !item.submenu && item.elink\" [attr.target]=\"item.target\" [attr.href]=\"item.elink\" title=\"{{item.text}}\">\n                    <span class=\"pull-right\" *ngIf=\"item.alert\" [ngClass]=\"item.label || 'label label-success'\">{{item.alert}}</span>\n                    <em class=\"{{item.icon}}\" *ngIf=\"item.icon\"></em>\n                    <span>{{(item.translate | translate) || item.text}}</span>\n                </a>\n                <!-- single menu item -->\n                <a *ngIf=\"!item.heading && !item.submenu && !item.elink\" [routerLink]=\"item.link\" [attr.route]=\"item.link\" title=\"{{item.text}}\"\n                    (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\n                    <span class=\"pull-right\" *ngIf=\"item.alert\" [ngClass]=\"item.label || 'label label-success'\">{{item.alert}}</span>\n                    <em class=\"{{item.icon}}\" *ngIf=\"item.icon\"></em>\n                    <span>{{(item.translate | translate) || item.text}}</span>\n                </a>\n                <!-- has submenu -->\n                <a *ngIf=\"!item.heading && item.submenu\" title=\"{{item.text}}\"\n                    (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\n                        <span class=\"pull-right\" *ngIf=\"item.alert\" [ngClass]=\"item.label || 'label label-success'\">{{item.alert}}</span>\n                        <em class=\"{{item.icon}}\" *ngIf=\"item.icon\"></em>\n                        <span>{{(item.translate | translate) || item.text}}</span>\n                </a>\n                <!-- SUBLEVEL -->\n                <ul *ngIf=\"item.submenu\" class=\"nav sidebar-subnav\" [routerLinkActive]=\"['opening']\">\n                    <li class=\"sidebar-subnav-header\">{{(item.translate | translate) || item.text}}</li>\n                    <li *ngFor='let subitem of item.submenu' [routerLinkActive]=\"['active']\">\n                        <!-- sublevel: external links -->\n                        <a *ngIf=\"!subitem.heading && !subitem.submenu && subitem.elink\" [attr.target]=\"subitem.target\" [attr.href]=\"subitem.elink\" title=\"{{subitem.text}}\">\n                            <span class=\"pull-right\" *ngIf=\"subitem.alert\" [ngClass]=\"subitem.label || 'label label-success'\">{{subitem.alert}}</span>\n                            <em class=\"{{subitem.icon}}\" *ngIf=\"subitem.icon\"></em>\n                            <span>{{(subitem.translate | translate) || subitem.text}}</span>\n                        </a>\n                        <!-- sublevel: single menu item  -->\n                        <a *ngIf=\"!subitem.submenu && !subitem.elink\" [routerLink]=\"subitem.link\" [attr.route]=\"subitem.link\" title=\"{{subitem.text}}\">\n                            <span class=\"pull-right\" *ngIf=\"subitem.alert\" [ngClass]=\"subitem.label || 'label label-success'\">{{subitem.alert}}</span>\n                            <em class=\"{{subitem.icon}}\" *ngIf=\"subitem.icon\"></em>\n                            <span>{{(subitem.translate | translate) || subitem.text}}</span>\n                        </a>\n                        <!-- sublevel: has submenu -->\n                        <a *ngIf=\"subitem.submenu\" title=\"{{subitem.text}}\"\n                            (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\n                                <span class=\"pull-right\" *ngIf=\"subitem.alert\" [ngClass]=\"subitem.label || 'label label-success'\">{{subitem.alert}}</span>\n                                <em class=\"{{subitem.icon}}\" *ngIf=\"subitem.icon\"></em>\n                                <span>{{(subitem.translate | translate) || subitem.text}}</span>\n                        </a>\n                        <!-- SUBLEVEL 2 -->\n                        <ul *ngIf=\"subitem.submenu\" class=\"nav sidebar-subnav level2\" [routerLinkActive]=\"['opening']\">\n                            <li *ngFor='let subitem2 of subitem.submenu' [routerLinkActive]=\"['active']\">\n                                <!-- sublevel 2: single menu item  -->\n                                <a *ngIf=\"!subitem2.submenu\" [routerLink]=\"subitem2.link\" [attr.route]=\"subitem2.link\" title=\"{{subitem2.text}}\">\n                                    <span class=\"pull-right\" *ngIf=\"subitem2.alert\" [ngClass]=\"subitem2.label || 'label label-success'\">{{subitem2.alert}}</span>\n                                    <em class=\"{{subitem2.icon}}\" *ngIf=\"subitem2.icon\"></em>\n                                    <span>{{(subitem2.translate | translate) || subitem2.text}}</span>\n                                </a>\n                                <!-- sublevel2: has submenu -->\n                                <a *ngIf=\"subitem2.submenu\" title=\"{{subitem2.text}}\"\n                                    (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\n                                        <span class=\"pull-right\" *ngIf=\"subitem2.alert\" [ngClass]=\"subitem2.label || 'label label-success'\">{{subitem2.alert}}</span>\n                                        <em class=\"{{subitem2.icon}}\" *ngIf=\"subitem2.icon\"></em>\n                                        <span>{{(subitem2.translate | translate) || subitem2.text}}</span>\n                                </a>\n                                <!-- SUBLEVEL 3 -->\n                                <ul *ngIf=\"subitem2.submenu\" class=\"nav sidebar-subnav level3\" [routerLinkActive]=\"['opening']\">\n                                    <li *ngFor='let subitem3 of subitem2.submenu' [routerLinkActive]=\"['active']\">\n                                        <!-- sublevel 2: single menu item  -->\n                                        <a *ngIf=\"!subitem3.submenu\" [routerLink]=\"subitem3.link\" [attr.route]=\"subitem3.link\" title=\"{{subitem3.text}}\">\n                                            <span class=\"pull-right\" *ngIf=\"subitem3.alert\" [ngClass]=\"subitem3.label || 'label label-success'\">{{subitem3.alert}}</span>\n                                            <em class=\"{{subitem3.icon}}\" *ngIf=\"subitem3.icon\"></em>\n                                            <span>{{(subitem3.translate | translate) || subitem3.text}}</span>\n                                        </a>\n                                        <!-- sublevel3: has submenu -->\n                                        <a *ngIf=\"subitem3.submenu\" title=\"{{subitem3.text}}\"\n                                            (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\n                                                <span class=\"pull-right\" *ngIf=\"subitem3.alert\" [ngClass]=\"subitem3.label || 'label label-success'\">{{subitem3.alert}}</span>\n                                                <em class=\"{{subitem3.icon}}\" *ngIf=\"subitem3.icon\"></em>\n                                                <span>{{(subitem3.translate | translate) || subitem3.text}}</span>\n                                        </a>\n                                        <!-- SUBLEVEL 4 -->\n                                        <ul *ngIf=\"subitem3.submenu\" class=\"nav sidebar-subnav level3\" [routerLinkActive]=\"['opening']\">\n                                            <li *ngFor='let subitem4 of subitem3.submenu' [routerLinkActive]=\"['active']\">\n                                                <!-- sublevel 2: single menu item  -->\n                                                <a *ngIf=\"!subitem4.submenu\" [routerLink]=\"subitem4.link\" [attr.route]=\"subitem4.link\" title=\"{{subitem4.text}}\">\n                                                    <span class=\"pull-right\" *ngIf=\"subitem4.alert\" [ngClass]=\"subitem4.label || 'label label-success'\">{{subitem4.alert}}</span>\n                                                    <em class=\"{{subitem4.icon}}\" *ngIf=\"subitem4.icon\"></em>\n                                                    <span>{{(subitem4.translate | translate) || subitem4.text}}</span>\n                                                </a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                </ul>\n                            <li>\n                        </ul>\n                    <li>\n                </ul>\n            </li>\n\n        </ul>\n        <!-- END sidebar nav-->\n\n    </nav>\n</div>\n<!-- END Sidebar (left)-->\n\n"

/***/ }),

/***/ 987:
/***/ (function(module, exports) {

module.exports = "<!-- START Search form-->\r\n<form class=\"navbar-form\" role=\"search\" action=\"search.html\" [class.open]=\"visible\" (submit)=\"handleForm()\">\r\n    <div class=\"form-group has-feedback\">\r\n        <input [(ngModel)]=\"term\" name=\"term\" class=\"form-control\" type=\"text\" placeholder=\"{{'header.search.PLACEHOLDER' | translate}}\" />\r\n        <div class=\"fa fa-times form-control-feedback\" (click)=\"closeNavSearch()\"></div>\r\n    </div>\r\n    <button class=\"hidden btn btn-default\" type=\"submit\">Submit</button>\r\n</form>\r\n<!-- END Search form-->\r\n"

/***/ }),

/***/ 988:
/***/ (function(module, exports) {

module.exports = "<!-- START Top Navbar-->\r\n<nav class=\"navbar topnavbar\" role=\"navigation\">\r\n    <!-- START navbar header-->\r\n    <div class=\"navbar-header\">\r\n        <a class=\"navbar-brand\" [routerLink]=\"'/home'\">\r\n            <div class=\"brand-logo\">\r\n                <img class=\"img-responsive\" src=\"{{logo}}\" alt=\"App Logo\" />\r\n            </div>\r\n            <div class=\"brand-logo-collapsed\">\r\n                <img class=\"img-responsive\" src=\"{{logo}}\" alt=\"App Logo\" />\r\n            </div>\r\n            <!-- <a class=\"navbar-brand brand\" [routerLink]=\"'/home'\">\r\n                nayo\r\n            </a> -->\r\n        </a>\r\n    </div>\r\n    <!-- END navbar header-->\r\n    <!-- START Nav wrapper-->\r\n    <div class=\"nav-wrapper\">\r\n        <!-- START Left navbar-->\r\n        <ul class=\"nav navbar-nav\">\r\n            <li>\r\n                <!-- Button used to collapse the left sidebar. Only visible on tablet and desktops-->\r\n                <!--<a class=\"hidden-xs\" trigger-resize=\"\" (click)=\"toggleCollapsedSideabar()\" *ngIf=\"!isCollapsedText()\">\r\n                    <em class=\"fa fa-navicon\"></em>\r\n                </a>-->\r\n                <!-- Button to show/hide the sidebar on mobile. Visible on mobile only.-->\r\n                <a class=\"visible-xs sidebar-toggle\" (click)=\"settings.layout.asideToggled =! settings.layout.asideToggled\">\r\n                    <em class=\"fa fa-navicon\"></em>\r\n                </a>\r\n            </li>\r\n            <!-- START User avatar toggle-->\r\n            <!--<li>-->\r\n                <!-- Button used to collapse the left sidebar. Only visible on tablet and desktops-->\r\n                <!--<a (click)=\"toggleUserBlock($event)\">\r\n                    <em class=\"icon-user\"></em>\r\n                </a>\r\n            </li>-->\r\n            <!-- END User avatar toggle-->\r\n            <!-- START lock screen-->\r\n            <!--<li>\r\n                <a  title=\"Lock screen\" [routerLink]=\"'/lock'\">\r\n                    <em class=\"icon-lock\"></em>\r\n                </a>\r\n            </li>-->\r\n            <!-- END lock screen-->\r\n        </ul>\r\n        <!-- END Left navbar-->\r\n        <!-- START Right Navbar-->\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n            <!-- Search icon-->\r\n            <li>\r\n                <a (click)=\"openNavSearch($event)\">\r\n                    <em class=\"icon-magnifier\"></em>\r\n                </a>\r\n            </li>\r\n            <!-- Fullscreen (only desktops)-->\r\n            <!-- <li class=\"visible-lg\">\r\n                <a #fsbutton (click)=\"toggleFullScreen($event)\">\r\n                    <em class=\"fa fa-expand\"></em>\r\n                </a>\r\n            </li> -->\r\n            <li class=\"visible-lg\">\r\n                <a #fsbutton [routerLink]=\"'/login'\">Login\r\n                </a>\r\n            </li>\r\n            <li class=\"visible-lg\">\r\n                <a #fsbutton [routerLink]=\"'/register'\">Signup\r\n                </a>\r\n            </li>\r\n            <!-- START Alert menu-->\r\n            <li class=\"dropdown dropdown-list\" dropdown>\r\n                <a dropdownToggle>\r\n                    <em class=\"icon-bell\"></em>\r\n                    <div class=\"label label-danger\">11</div>\r\n                </a>\r\n                <!-- START Dropdown menu-->\r\n                <ul *dropdownMenu class=\"dropdown-menu animated flipInX\">\r\n                    <li>\r\n                        <!-- START list group-->\r\n                        <div class=\"list-group\">\r\n                            <!-- list item-->\r\n                            <a class=\"list-group-item\">\r\n                                <div class=\"media-box\">\r\n                                    <div class=\"pull-left\">\r\n                                        <em class=\"fa fa-twitter fa-2x text-info\"></em>\r\n                                    </div>\r\n                                    <div class=\"media-box-body clearfix\">\r\n                                        <p class=\"m0\">New followers</p>\r\n                                        <p class=\"m0 text-muted\">\r\n                                            <small>1 new follower</small>\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                            </a>\r\n                            <!-- list item-->\r\n                            <a class=\"list-group-item\">\r\n                                <div class=\"media-box\">\r\n                                    <div class=\"pull-left\">\r\n                                        <em class=\"fa fa-envelope fa-2x text-warning\"></em>\r\n                                    </div>\r\n                                    <div class=\"media-box-body clearfix\">\r\n                                        <p class=\"m0\">New e-mails</p>\r\n                                        <p class=\"m0 text-muted\">\r\n                                            <small>You have 10 new emails</small>\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                            </a>\r\n                            <!-- list item-->\r\n                            <a class=\"list-group-item\">\r\n                                <div class=\"media-box\">\r\n                                    <div class=\"pull-left\">\r\n                                        <em class=\"fa fa-tasks fa-2x text-success\"></em>\r\n                                    </div>\r\n                                    <div class=\"media-box-body clearfix\">\r\n                                        <p class=\"m0\">Pending Tasks</p>\r\n                                        <p class=\"m0 text-muted\">\r\n                                            <small>11 pending task</small>\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                            </a>\r\n                            <!-- last list item-->\r\n                            <a class=\"list-group-item\">\r\n                                <small translate=\"topbar.notification.MORE\">More notifications</small>\r\n                                <span class=\"label label-danger pull-right\">14</span>\r\n                            </a>\r\n                        </div>\r\n                        <!-- END list group-->\r\n                    </li>\r\n                </ul>\r\n                <!-- END Dropdown menu-->\r\n            </li>\r\n            <!-- END Alert menu-->\r\n            <!-- START Offsidebar button-->\r\n            <!--<li>\r\n                <a (click)=\"toggleOffsidebar()\">\r\n                    <em class=\"icon-notebook\"></em>\r\n                </a>\r\n            </li>-->\r\n            <!-- END Offsidebar menu-->\r\n        </ul>\r\n        <!-- END Right Navbar-->\r\n    </div>\r\n    <!-- END Nav wrapper-->\r\n\r\n    <app-navsearch [visible]=\"getNavSearchVisible()\" (onclose)=\"setNavSearchVisible(false)\"></app-navsearch>\r\n\r\n</nav>\r\n<!-- END Top Navbar-->\r\n"

/***/ }),

/***/ 989:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <!-- Top Navbar -->\r\n    <app-top-navbar class=\"topnavbar-wrapper\"></app-top-navbar>\r\n    <!-- Child Routing -->\r\n    <router-outlet></router-outlet>\r\n    \r\n</div>\r\n<!-- Page footer-->\r\n<footer app-footer></footer>"

/***/ })

});
//# sourceMappingURL=1.chunk.js.map