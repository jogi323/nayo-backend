webpackJsonp([1,7],{

/***/ 896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_routing_module__ = __webpack_require__(909);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_component__ = __webpack_require__(901);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__ = __webpack_require__(899);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__top_navbar_top_navbar_component__ = __webpack_require__(914);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__top_navbar_navsearch_navsearch_component__ = __webpack_require__(913);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__side_navbar_side_navbar_component__ = __webpack_require__(911);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__side_navbar_userblock_userblock_component__ = __webpack_require__(912);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_theme_settings_theme_settings_component__ = __webpack_require__(900);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core_menu_menu_service__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__side_navbar_userblock_userblock_service__ = __webpack_require__(902);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__menu__ = __webpack_require__(910);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Shared module

// Dashoard Routing

// Dasboard and it's child components







//Services
// import { SettingsService } from './services/settings/settings.service';

// import { ThemesService } from './services/themes/themes.service';

//Naigation Menu

var DashboardModule = (function () {
    function DashboardModule(menuService) {
        this.menuService = menuService;
        menuService.addMenu(__WEBPACK_IMPORTED_MODULE_14__menu__["a" /* menu */]);
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__dashboard_routing_module__["a" /* DashboardRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_11__components_theme_settings_theme_settings_component__["a" /* ThemeSettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__top_navbar_top_navbar_component__["a" /* TopNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__side_navbar_side_navbar_component__["a" /* SideNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__top_navbar_navsearch_navsearch_component__["a" /* NavsearchComponent */],
            __WEBPACK_IMPORTED_MODULE_10__side_navbar_userblock_userblock_component__["a" /* UserblockComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__side_navbar_userblock_userblock_service__["a" /* UserblockService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_12__core_menu_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__core_menu_menu_service__["a" /* MenuService */]) === "function" && _a || Object])
], DashboardModule);

var _a;
//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 899:
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
        template: __webpack_require__(943),
        styles: [__webpack_require__(924)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 900:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_themes_themes_service__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeSettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThemeSettingsComponent = (function () {
    function ThemeSettingsComponent(settings, themes) {
        this.settings = settings;
        this.themes = themes;
        this.currentTheme = themes.getDefaultTheme();
        // this.selectedLanguage = this.getLangs()[0].code;
    }
    ThemeSettingsComponent.prototype.ngOnInit = function () {
    };
    ThemeSettingsComponent.prototype.setTheme = function () {
        this.themes.setTheme(this.currentTheme);
    };
    return ThemeSettingsComponent;
}());
ThemeSettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-theme-settings',
        template: __webpack_require__(944),
        styles: [__webpack_require__(925)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__["a" /* SettingsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_themes_themes_service__["a" /* ThemesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_themes_themes_service__["a" /* ThemesService */]) === "function" && _b || Object])
], ThemeSettingsComponent);

var _a, _b;
//# sourceMappingURL=theme-settings.component.js.map

/***/ }),

/***/ 901:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(945),
        styles: [__webpack_require__(926)]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 902:
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

/***/ }),

/***/ 909:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__(901);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__(899);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_theme_settings_theme_settings_component__ = __webpack_require__(900);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */],
        children: [
            //{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */] },
            { path: 'themesettings', component: __WEBPACK_IMPORTED_MODULE_4__components_theme_settings_theme_settings_component__["a" /* ThemeSettingsComponent */] }
        ]
    },
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    return DashboardRoutingModule;
}());
DashboardRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], DashboardRoutingModule);

//# sourceMappingURL=dashboard-routing.module.js.map

/***/ }),

/***/ 910:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return menu; });
var Home = {
    text: 'Home',
    link: '/home',
    icon: 'icon-home'
};
var theme = {
    text: 'Theme Settings',
    link: '/dashboard/themesettings',
    icon: 'icon-settings'
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
    theme,
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

/***/ 911:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_settings_settings_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_menu_menu_service__ = __webpack_require__(94);
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
        template: __webpack_require__(946),
        styles: [__webpack_require__(927)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__core_menu_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_menu_menu_service__["a" /* MenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_settings_settings_service__["a" /* SettingsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _c || Object])
], SideNavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=side-navbar.component.js.map

/***/ }),

/***/ 912:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__userblock_service__ = __webpack_require__(902);
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
            picture: 'assets/img/user/02.jpg'
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
        template: __webpack_require__(947),
        styles: [__webpack_require__(928)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__userblock_service__["a" /* UserblockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__userblock_service__["a" /* UserblockService */]) === "function" && _a || Object])
], UserblockComponent);

var _a;
//# sourceMappingURL=userblock.component.js.map

/***/ }),

/***/ 913:
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
        template: __webpack_require__(948),
        styles: [__webpack_require__(929)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], NavsearchComponent);

var _a;
//# sourceMappingURL=navsearch.component.js.map

/***/ }),

/***/ 914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_menu_menu_service__ = __webpack_require__(94);
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

var screenfull = __webpack_require__(449);
var browser = __webpack_require__(448);



var TopNavbarComponent = (function () {
    function TopNavbarComponent(menu, settings, themes) {
        this.menu = menu;
        this.settings = settings;
        this.themes = themes;
        this.navCollapsed = true; // for horizontal layout
        this.menuItems = []; // for horizontal layout
        this.currentTheme = 'A';
        // show only a few items on demo
        this.menuItems = menu.getMenu().slice(0, 4); // for horizontal layout
    }
    TopNavbarComponent.prototype.ngOnInit = function () {
        this.themes.setTheme(this.currentTheme);
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
        template: __webpack_require__(949),
        styles: [__webpack_require__(930)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_menu_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_menu_menu_service__["a" /* MenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_settings_settings_service__["a" /* SettingsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__core_themes_themes_service__["a" /* ThemesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_themes_themes_service__["a" /* ThemesService */]) === "function" && _c || Object])
], TopNavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=top-navbar.component.js.map

/***/ }),

/***/ 924:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 925:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 926:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 927:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 928:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 929:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 930:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".btn-primary-outline {\n  background-color: transparent;\n  border-color: #ccc;\n  color: #ccc; }\n\n.brand {\n  font-size: 30px;\n  font-weight: 900;\n  color: white;\n  font-family: inherit;\n  padding-top: 7% !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 943:
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ 944:
/***/ (function(module, exports) {

module.exports = "<tabset [justified]=\"true\">\n    <tab>\n        <ng-template tabHeading>\n            <em class=\"icon-equalizer fa-lg\"></em>\n        </ng-template>\n        <h3 class=\"text-center text-thin\">Settings</h3>\n        <!-- Theme Settings -->\n        <div class=\"p\">\n            <h4 class=\"text-muted text-thin\">Themes</h4>\n            <div class=\"table-grid mb\">\n                <div class=\"col mb\">\n                    <div class=\"setting-color\">\n                        <label>\n                          <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"A\" />\n                          <span class=\"icon-check\"></span>\n                          <span class=\"split\">\n                <span class=\"color bg-info\"></span>\n                          <span class=\"color bg-info-light\"></span>\n                          </span>\n                          <span class=\"color bg-white\"></span>\n                      </label>\n                    </div>\n                </div>\n                <div class=\"col mb\">\n                    <div class=\"setting-color\">\n                        <label>\n                          <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"B\" />\n                          <span class=\"icon-check\"></span>\n                          <span class=\"split\">\n                <span class=\"color bg-green\"></span>\n                          <span class=\"color bg-green-light\"></span>\n                          </span>\n                          <span class=\"color bg-white\"></span>\n                      </label>\n                    </div>\n                </div>\n                <div class=\"col mb\">\n                    <div class=\"setting-color\">\n                        <label>\n                          <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"C\" />\n                          <span class=\"icon-check\"></span>\n                          <span class=\"split\">\n                <span class=\"color bg-purple\"></span>\n                          <span class=\"color bg-purple-light\"></span>\n                          </span>\n                          <span class=\"color bg-white\"></span>\n                      </label>\n                    </div>\n                </div>\n                <div class=\"col mb\">\n                    <div class=\"setting-color\">\n                        <label>\n                          <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"D\" />\n                          <span class=\"icon-check\"></span>\n                          <span class=\"split\">\n                <span class=\"color bg-danger\"></span>\n                          <span class=\"color bg-danger-light\"></span>\n                          </span>\n                          <span class=\"color bg-white\"></span>\n                      </label>\n                    </div>\n                </div>\n            </div>\n            <div class=\"table-grid mb\">\n                <div class=\"col mb\">\n                    <div class=\"setting-color\">\n                        <label>\n                          <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"E\" />\n                          <span class=\"icon-check\"></span>\n                          <span class=\"split\">\n                <span class=\"color bg-info-dark\"></span>\n                          <span class=\"color bg-info\"></span>\n                          </span>\n                          <span class=\"color bg-gray-dark\"></span>\n                      </label>\n                    </div>\n                </div>\n                <div class=\"col mb\">\n                    <div class=\"setting-color\">\n                        <label>\n                          <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"F\" />\n                          <span class=\"icon-check\"></span>\n                          <span class=\"split\">\n                <span class=\"color bg-green-dark\"></span>\n                          <span class=\"color bg-green\"></span>\n                          </span>\n                          <span class=\"color bg-gray-dark\"></span>\n                      </label>\n                    </div>\n                </div>\n                <div class=\"col mb\">\n                    <div class=\"setting-color\">\n                        <label>\n                          <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"G\" />\n                          <span class=\"icon-check\"></span>\n                          <span class=\"split\">\n                <span class=\"color bg-purple-dark\"></span>\n                          <span class=\"color bg-purple\"></span>\n                          </span>\n                          <span class=\"color bg-gray-dark\"></span>\n                      </label>\n                    </div>\n                </div>\n                <div class=\"col mb\">\n                    <div class=\"setting-color\">\n                        <label>\n                          <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"H\" />\n                          <span class=\"icon-check\"></span>\n                          <span class=\"split\">\n                <span class=\"color bg-danger-dark\"></span>\n                          <span class=\"color bg-danger\"></span>\n                          </span>\n                          <span class=\"color bg-gray-dark\"></span>\n                      </label>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- Layout Seettings -->\n        <div class=\"p\">\n            <h4 class=\"text-muted text-thin\">Layout</h4>\n            <div class=\"clearfix\">\n                <p class=\"pull-left\">Fixed</p>\n                <div class=\"pull-right\">\n                    <label class=\"switch\">\n                      <input type=\"checkbox\" [(ngModel)]=\"settings.layout.isFixed\" />\n                      <span></span>\n                  </label>\n                </div>\n            </div>\n            <div class=\"clearfix\">\n                <p class=\"pull-left\">Boxed</p>\n                <div class=\"pull-right\">\n                    <label class=\"switch\">\n                      <input type=\"checkbox\" [(ngModel)]=\"settings.layout.isBoxed\" />\n                      <span></span>\n                  </label>\n                </div>\n            </div>\n            <!-- <div class=\"clearfix\">\n                <p class=\"pull-left\">RTL</p>\n                <div class=\"pull-right\">\n                <label class=\"switch\">\n                    <input type=\"checkbox\" [(ngModel)]=\"layoutRTL\"/>\n                    <span></span>\n                </label>\n                </div>\n            </div> -->\n        </div>\n        <div class=\"p\" *ngIf=\"!settings.layout.horizontal\">\n            <h4 class=\"text-muted text-thin\">Aside</h4>\n            <div class=\"clearfix\">\n                <p class=\"pull-left\">Collapsed</p>\n                <div class=\"pull-right\">\n                    <label class=\"switch\">\n                      <input type=\"checkbox\" [(ngModel)]=\"settings.layout.isCollapsed\" [disabled]=\"settings.layout.isCollapsedText\" />\n                      <span></span>\n                  </label>\n                </div>\n            </div>\n            <div class=\"clearfix\">\n                <p class=\"pull-left\">Collapsed Text</p>\n                <div class=\"pull-right\">\n                    <label class=\"switch\">\n                      <input type=\"checkbox\" [(ngModel)]=\"settings.layout.isCollapsedText\" [disabled]=\"settings.layout.isCollapsed\" />\n                      <span></span>\n                  </label>\n                </div>\n            </div>\n            <div class=\"clearfix\">\n                <p class=\"pull-left\">Float</p>\n                <div class=\"pull-right\">\n                    <label class=\"switch\">\n                      <input type=\"checkbox\" [(ngModel)]=\"settings.layout.isFloat\" />\n                      <span></span>\n                  </label>\n                </div>\n            </div>\n            <div class=\"clearfix\">\n                <p class=\"pull-left\">Hover</p>\n                <div class=\"pull-right\">\n                    <label class=\"switch\">\n                      <input type=\"checkbox\" [(ngModel)]=\"settings.layout.asideHover\" />\n                      <span></span>\n                  </label>\n                </div>\n            </div>\n            <div class=\"clearfix\">\n                <p class=\"pull-left\">Show Scrollbar</p>\n                <div class=\"pull-right\">\n                    <label class=\"switch\">\n                      <input type=\"checkbox\" [(ngModel)]=\"settings.layout.asideScrollbar\" />\n                      <span></span>\n                  </label>\n                </div>\n            </div>\n        </div>\n        <!-- <div class=\"p\">\n          <h4 class=\"text-muted text-thin\">Language</h4>\n          <select class=\"form-control\" [ngModel]=\"selectedLanguage\" (ngModelChange)=\"setLang($event)\">\n              <option [value]=\"lang.code\" *ngFor=\"let lang of getLangs()\">{{lang.text}}</option>\n          </select>\n      </div> -->\n    </tab>\n    <!-- <tab>\n      <ng-template tabHeading>\n          <em class=\"icon-user fa-lg\"></em>\n      </ng-template> -->\n    <!-- Extra items-->\n    <!-- <div class=\"p\">\n          <p>\n              <small class=\"text-muted\">Tasks completion</small>\n          </p>\n          <div class=\"progress progress-xs m0\">\n              <div role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar progress-bar-success progress-80\">\n                  <span class=\"sr-only\">80% Complete</span>\n              </div>\n          </div>\n      </div>\n      <div class=\"p\">\n          <p>\n              <small class=\"text-muted\">Upload quota</small>\n          </p>\n          <div class=\"progress progress-xs m0\">\n              <div role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" class=\"progress-bar progress-bar-warning progress-40\">\n                  <span class=\"sr-only\">40% Complete</span>\n              </div>\n          </div>\n      </div>\n  </tab> -->\n</tabset>"

/***/ }),

/***/ 945:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <!-- top navbar-->\r\n    <app-top-navbar class=\"topnavbar-wrapper\"></app-top-navbar>\r\n    <!-- sidebar-->\r\n    <app-side-navbar class=\"aside\"></app-side-navbar>\r\n    <!-- offsidebar-->\r\n    <!--<app-offsidebar class=\"offsidebar\"></app-offsidebar>-->\r\n    <!-- Main section-->\r\n    <section>\r\n        <!-- Page content-->\r\n        <div class=\"content-wrapper\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </section>\r\n    <!-- Page footer-->\r\n    <!--<footer app-footer></footer>-->\r\n</div>"

/***/ }),

/***/ 946:
/***/ (function(module, exports) {

module.exports = "<!-- START Sidebar (left)-->\n<div class=\"aside-inner\">\n    <nav class=\"sidebar\" sidebar-anyclick-close=\"\" [class.show-scrollbar]=\"settings.layout.asideScrollbar\">\n\n        <!-- START sidebar nav-->\n        <ul class=\"nav\">\n\n            <!-- START user info-->\n            <li class=\"has-user-block\">\n                <app-userblock></app-userblock>\n            </li>\n            <!-- END user info-->\n\n            <li *ngFor='let item of menuItems' [ngClass]=\"{'nav-heading': item.heading}\" [routerLinkActive]=\"['active']\">\n                <!-- menu heading -->\n                <span *ngIf=\"item.heading\">{{(item.translate | translate) || item.text}}</span>\n                <!-- external links -->\n                <a *ngIf=\"!item.heading && !item.submenu && item.elink\" [attr.target]=\"item.target\" [attr.href]=\"item.elink\" title=\"{{item.text}}\">\n                    <span class=\"pull-right\" *ngIf=\"item.alert\" [ngClass]=\"item.label || 'label label-success'\">{{item.alert}}</span>\n                    <em class=\"{{item.icon}}\" *ngIf=\"item.icon\"></em>\n                    <span>{{(item.translate | translate) || item.text}}</span>\n                </a>\n                <!-- single menu item -->\n                <a *ngIf=\"!item.heading && !item.submenu && !item.elink\" [routerLink]=\"item.link\" [attr.route]=\"item.link\" title=\"{{item.text}}\"\n                    (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\n                    <span class=\"pull-right\" *ngIf=\"item.alert\" [ngClass]=\"item.label || 'label label-success'\">{{item.alert}}</span>\n                    <em class=\"{{item.icon}}\" *ngIf=\"item.icon\"></em>\n                    <span>{{(item.translate | translate) || item.text}}</span>\n                </a>\n                <!-- has submenu -->\n                <a *ngIf=\"!item.heading && item.submenu\" title=\"{{item.text}}\"\n                    (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\n                        <span class=\"pull-right\" *ngIf=\"item.alert\" [ngClass]=\"item.label || 'label label-success'\">{{item.alert}}</span>\n                        <em class=\"{{item.icon}}\" *ngIf=\"item.icon\"></em>\n                        <span>{{(item.translate | translate) || item.text}}</span>\n                </a>\n                <!-- SUBLEVEL -->\n                <ul *ngIf=\"item.submenu\" class=\"nav sidebar-subnav\" [routerLinkActive]=\"['opening']\">\n                    <li class=\"sidebar-subnav-header\">{{(item.translate | translate) || item.text}}</li>\n                    <li *ngFor='let subitem of item.submenu' [routerLinkActive]=\"['active']\">\n                        <!-- sublevel: external links -->\n                        <a *ngIf=\"!subitem.heading && !subitem.submenu && subitem.elink\" [attr.target]=\"subitem.target\" [attr.href]=\"subitem.elink\" title=\"{{subitem.text}}\">\n                            <span class=\"pull-right\" *ngIf=\"subitem.alert\" [ngClass]=\"subitem.label || 'label label-success'\">{{subitem.alert}}</span>\n                            <em class=\"{{subitem.icon}}\" *ngIf=\"subitem.icon\"></em>\n                            <span>{{(subitem.translate | translate) || subitem.text}}</span>\n                        </a>\n                        <!-- sublevel: single menu item  -->\n                        <a *ngIf=\"!subitem.submenu && !subitem.elink\" [routerLink]=\"subitem.link\" [attr.route]=\"subitem.link\" title=\"{{subitem.text}}\">\n                            <span class=\"pull-right\" *ngIf=\"subitem.alert\" [ngClass]=\"subitem.label || 'label label-success'\">{{subitem.alert}}</span>\n                            <em class=\"{{subitem.icon}}\" *ngIf=\"subitem.icon\"></em>\n                            <span>{{(subitem.translate | translate) || subitem.text}}</span>\n                        </a>\n                        <!-- sublevel: has submenu -->\n                        <a *ngIf=\"subitem.submenu\" title=\"{{subitem.text}}\"\n                            (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\n                                <span class=\"pull-right\" *ngIf=\"subitem.alert\" [ngClass]=\"subitem.label || 'label label-success'\">{{subitem.alert}}</span>\n                                <em class=\"{{subitem.icon}}\" *ngIf=\"subitem.icon\"></em>\n                                <span>{{(subitem.translate | translate) || subitem.text}}</span>\n                        </a>\n                        <!-- SUBLEVEL 2 -->\n                        <ul *ngIf=\"subitem.submenu\" class=\"nav sidebar-subnav level2\" [routerLinkActive]=\"['opening']\">\n                            <li *ngFor='let subitem2 of subitem.submenu' [routerLinkActive]=\"['active']\">\n                                <!-- sublevel 2: single menu item  -->\n                                <a *ngIf=\"!subitem2.submenu\" [routerLink]=\"subitem2.link\" [attr.route]=\"subitem2.link\" title=\"{{subitem2.text}}\">\n                                    <span class=\"pull-right\" *ngIf=\"subitem2.alert\" [ngClass]=\"subitem2.label || 'label label-success'\">{{subitem2.alert}}</span>\n                                    <em class=\"{{subitem2.icon}}\" *ngIf=\"subitem2.icon\"></em>\n                                    <span>{{(subitem2.translate | translate) || subitem2.text}}</span>\n                                </a>\n                                <!-- sublevel2: has submenu -->\n                                <a *ngIf=\"subitem2.submenu\" title=\"{{subitem2.text}}\"\n                                    (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\n                                        <span class=\"pull-right\" *ngIf=\"subitem2.alert\" [ngClass]=\"subitem2.label || 'label label-success'\">{{subitem2.alert}}</span>\n                                        <em class=\"{{subitem2.icon}}\" *ngIf=\"subitem2.icon\"></em>\n                                        <span>{{(subitem2.translate | translate) || subitem2.text}}</span>\n                                </a>\n                                <!-- SUBLEVEL 3 -->\n                                <ul *ngIf=\"subitem2.submenu\" class=\"nav sidebar-subnav level3\" [routerLinkActive]=\"['opening']\">\n                                    <li *ngFor='let subitem3 of subitem2.submenu' [routerLinkActive]=\"['active']\">\n                                        <!-- sublevel 2: single menu item  -->\n                                        <a *ngIf=\"!subitem3.submenu\" [routerLink]=\"subitem3.link\" [attr.route]=\"subitem3.link\" title=\"{{subitem3.text}}\">\n                                            <span class=\"pull-right\" *ngIf=\"subitem3.alert\" [ngClass]=\"subitem3.label || 'label label-success'\">{{subitem3.alert}}</span>\n                                            <em class=\"{{subitem3.icon}}\" *ngIf=\"subitem3.icon\"></em>\n                                            <span>{{(subitem3.translate | translate) || subitem3.text}}</span>\n                                        </a>\n                                        <!-- sublevel3: has submenu -->\n                                        <a *ngIf=\"subitem3.submenu\" title=\"{{subitem3.text}}\"\n                                            (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\n                                                <span class=\"pull-right\" *ngIf=\"subitem3.alert\" [ngClass]=\"subitem3.label || 'label label-success'\">{{subitem3.alert}}</span>\n                                                <em class=\"{{subitem3.icon}}\" *ngIf=\"subitem3.icon\"></em>\n                                                <span>{{(subitem3.translate | translate) || subitem3.text}}</span>\n                                        </a>\n                                        <!-- SUBLEVEL 4 -->\n                                        <ul *ngIf=\"subitem3.submenu\" class=\"nav sidebar-subnav level3\" [routerLinkActive]=\"['opening']\">\n                                            <li *ngFor='let subitem4 of subitem3.submenu' [routerLinkActive]=\"['active']\">\n                                                <!-- sublevel 2: single menu item  -->\n                                                <a *ngIf=\"!subitem4.submenu\" [routerLink]=\"subitem4.link\" [attr.route]=\"subitem4.link\" title=\"{{subitem4.text}}\">\n                                                    <span class=\"pull-right\" *ngIf=\"subitem4.alert\" [ngClass]=\"subitem4.label || 'label label-success'\">{{subitem4.alert}}</span>\n                                                    <em class=\"{{subitem4.icon}}\" *ngIf=\"subitem4.icon\"></em>\n                                                    <span>{{(subitem4.translate | translate) || subitem4.text}}</span>\n                                                </a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                </ul>\n                            <li>\n                        </ul>\n                    <li>\n                </ul>\n            </li>\n\n        </ul>\n        <!-- END sidebar nav-->\n\n    </nav>\n</div>\n<!-- END Sidebar (left)-->\n"

/***/ }),

/***/ 947:
/***/ (function(module, exports) {

module.exports = "<div class=\"item user-block\" *ngIf=\"userBlockIsVisible()\">\r\n    <!-- User picture-->\r\n    <div class=\"user-block-picture\">\r\n        <div class=\"user-block-status\">\r\n            <img class=\"img-thumbnail img-circle\" [src]=\"user.picture\" alt=\"Avatar\" />\r\n            <div class=\"circle circle-success circle-lg\"></div>\r\n        </div>\r\n    </div>\r\n    <!-- Name and Job-->\r\n    <div class=\"user-block-info\">\r\n        <span class=\"user-block-name\">Welcome Ashok</span>\r\n        <span class=\"user-block-role\">Programmer</span>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 948:
/***/ (function(module, exports) {

module.exports = "<!-- START Search form-->\r\n<form class=\"navbar-form\" role=\"search\" action=\"search.html\" [class.open]=\"visible\" (submit)=\"handleForm()\">\r\n    <div class=\"form-group has-feedback\">\r\n        <input [(ngModel)]=\"term\" name=\"term\" class=\"form-control\" type=\"text\" placeholder=\"{{'header.search.PLACEHOLDER' | translate}}\" />\r\n        <div class=\"fa fa-times form-control-feedback\" (click)=\"closeNavSearch()\"></div>\r\n    </div>\r\n    <button class=\"hidden btn btn-default\" type=\"submit\">Submit</button>\r\n</form>\r\n<!-- END Search form-->\r\n"

/***/ }),

/***/ 949:
/***/ (function(module, exports) {

module.exports = "<!-- START Top Navbar-->\r\n<nav class=\"navbar topnavbar\" role=\"navigation\">\r\n    <!-- START navbar header-->\r\n    <div class=\"navbar-header\">\r\n        <a class=\"navbar-brand\" [routerLink]=\"'/'\">\r\n            <div class=\"brand-logo\">\r\n                <img class=\"img-responsive\" src=\"assets/img/logo.png\" alt=\"App Logo\" />\r\n            </div>\r\n            <div class=\"brand-logo-collapsed\">\r\n                <img class=\"img-responsive\" src=\"assets/img/logo.png\" alt=\"App Logo\" />\r\n            </div>\r\n        </a>\r\n            <!-- <a class=\"navbar-brand brand\" [routerLink]=\"'/home'\"> -->\r\n                <!--<svg viewbox=\"0 0 220 44\" width=\"220\" height=\"44\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <title>EDCO Products, Steel Roofing and Siding</title>\r\n                    <g class=\"logoMark\">\r\n                        <path d=\"M1.4,2.4h38v39.2h-38V2.4z\" fill=\"#fff\"> </path>\r\n                        <path d=\"M0.1,1v42h40.6V1H0.1z M3.5,37.4V8.1l10.3,14.4L3.5,37.4z M15.2,39.7V5.2l12.1,17.6L15.2,39.7z M28.8,37.4 L29,7.8L38.9,23L28.8,37.4z\"\r\n                            fill=\"#c6202c\"> </path>\r\n                    </g>-->\r\n                    <!--<path class=\"logoType\" d=\"M46.092.98h37.793v10.11h-21.43v5.963h20.5V27.18h-20.5v5.716H84.32V43.02H46.092V.98m40.03 0h24.537c12.48 0 21.29 4.1 21.29 21.144 0 15.903-9.48 20.897-21.97 20.897H86.13zm16.734 31.555h4.162c6.063 0 7.43-3.85 7.43-10.833 0-7.23-1.49-10.97-7.48-10.97h-4.1zm68.542 9.517a49.372 49.372 0 0 1-12 1.69c-14.475 0-26.09-7.33-26.09-22.338 0-14.1 12.112-21.145 26.09-21.145a60.752 60.752 0 0 1 11.876 1.31v11.11a28.947 28.947 0 0 0-8.36-1.59c-7.12 0-12.5 3.68-12.5 10.56 0 7.2 4.995 10.89 11.927 10.89a28.078 28.078 0 0 0 9.07-1.655zm24.252 1.69c-15.232 0-24.165-7.405-24.165-21.742 0-14.088 8.945-21.74 24.165-21.74C210.893.257 220 7.91 220 22c0 14.337-9.107 21.742-24.35 21.742m0-10.126c6.62 0 6.808-7.106 6.882-11.616-.074-3.913-.497-11.63-6.883-11.63-6.18 0-6.68 7.704-6.68 11.63 0 4.51.69 11.616 6.68 11.616\">\r\n                    </path>-->\r\n                <!--</svg>-->\r\n                <!-- nayo\r\n            </a> -->\r\n    </div>\r\n    <!-- END navbar header-->\r\n    <!-- START Nav wrapper-->\r\n    <div class=\"nav-wrapper\">\r\n        <!-- START Left navbar-->\r\n        <ul class=\"nav navbar-nav\">\r\n            <li>\r\n        <!-- Button used to collapse the left sidebar. Only visible on tablet and desktops-->\r\n        <a class=\"hidden-xs\" trigger-resize=\"\" (click)=\"toggleCollapsedSideabar()\" *ngIf=\"!isCollapsedText()\">\r\n                    <em class=\"fa fa-navicon\"></em>\r\n                </a>\r\n        <!-- Button to show/hide the sidebar on mobile. Visible on mobile only.-->\r\n        <a class=\"visible-xs sidebar-toggle\" (click)=\"settings.layout.asideToggled =! settings.layout.asideToggled\">\r\n                    <em class=\"fa fa-navicon\"></em>\r\n                </a>\r\n        </li>\r\n        <!-- START User avatar toggle-->\r\n        <!--<li>-->\r\n        <!-- Button used to collapse the left sidebar. Only visible on tablet and desktops-->\r\n        <!--<a (click)=\"toggleUserBlock($event)\">\r\n                    <em class=\"icon-user\"></em>\r\n                </a>\r\n            </li>-->\r\n        <!-- END User avatar toggle-->\r\n        <!-- START lock screen-->\r\n        <!--<li>\r\n                <a  title=\"Lock screen\" [routerLink]=\"'/lock'\">\r\n                    <em class=\"icon-lock\"></em>\r\n                </a>\r\n            </li>-->\r\n        <!-- END lock screen-->\r\n        </ul>\r\n        <!-- END Left navbar-->\r\n        <!-- START Right Navbar-->\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n            <!-- Search icon-->\r\n            <li>\r\n                <a (click)=\"openNavSearch($event)\">\r\n                    <em class=\"icon-magnifier\"></em>\r\n                </a>\r\n            </li>\r\n            <!-- Fullscreen (only desktops)-->\r\n            <!-- <li class=\"visible-lg\">\r\n                <a #fsbutton (click)=\"toggleFullScreen($event)\">\r\n                    <em class=\"fa fa-expand\"></em>\r\n                </a>\r\n            </li> -->\r\n            <!--<li class=\"visible-lg\">\r\n                <a #fsbutton [routerLink]=\"'/login'\">Login\r\n                </a>\r\n            </li>-->\r\n            <!-- START Alert menu-->\r\n            <li class=\"dropdown dropdown-list\" dropdown>\r\n                <a dropdownToggle>\r\n                    <em class=\"icon-bell\"></em>\r\n                    <div class=\"label label-danger\">11</div>\r\n                </a>\r\n                <!-- START Dropdown menu-->\r\n                <ul *dropdownMenu class=\"dropdown-menu animated flipInX\">\r\n                    <li>\r\n                        <!-- START list group-->\r\n                        <div class=\"list-group\">\r\n                            <!-- list item-->\r\n                            <a class=\"list-group-item\">\r\n                                <div class=\"media-box\">\r\n                                    <div class=\"pull-left\">\r\n                                        <em class=\"fa fa-twitter fa-2x text-info\"></em>\r\n                                    </div>\r\n                                    <div class=\"media-box-body clearfix\">\r\n                                        <p class=\"m0\">New followers</p>\r\n                                        <p class=\"m0 text-muted\">\r\n                                            <small>1 new follower</small>\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                            </a>\r\n                            <!-- list item-->\r\n                            <a class=\"list-group-item\">\r\n                                <div class=\"media-box\">\r\n                                    <div class=\"pull-left\">\r\n                                        <em class=\"fa fa-envelope fa-2x text-warning\"></em>\r\n                                    </div>\r\n                                    <div class=\"media-box-body clearfix\">\r\n                                        <p class=\"m0\">New e-mails</p>\r\n                                        <p class=\"m0 text-muted\">\r\n                                            <small>You have 10 new emails</small>\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                            </a>\r\n                            <!-- list item-->\r\n                            <a class=\"list-group-item\">\r\n                                <div class=\"media-box\">\r\n                                    <div class=\"pull-left\">\r\n                                        <em class=\"fa fa-tasks fa-2x text-success\"></em>\r\n                                    </div>\r\n                                    <div class=\"media-box-body clearfix\">\r\n                                        <p class=\"m0\">Pending Tasks</p>\r\n                                        <p class=\"m0 text-muted\">\r\n                                            <small>11 pending task</small>\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                            </a>\r\n                            <!-- last list item-->\r\n                            <a class=\"list-group-item\">\r\n                                <small translate=\"topbar.notification.MORE\">More notifications</small>\r\n                                <span class=\"label label-danger pull-right\">14</span>\r\n                            </a>\r\n                        </div>\r\n                        <!-- END list group-->\r\n                    </li>\r\n                </ul>\r\n                <!-- END Dropdown menu-->\r\n            </li>\r\n            <!-- END Alert menu-->\r\n            <!-- START Offsidebar button-->\r\n            <!--<li>\r\n                <a (click)=\"toggleOffsidebar()\">\r\n                    <em class=\"icon-notebook\"></em>\r\n                </a>\r\n            </li>-->\r\n            <!-- END Offsidebar menu-->\r\n        </ul>\r\n        <!-- END Right Navbar-->\r\n    </div>\r\n    <!-- END Nav wrapper-->\r\n\r\n    <app-navsearch [visible]=\"getNavSearchVisible()\" (onclose)=\"setNavSearchVisible(false)\"></app-navsearch>\r\n\r\n</nav>\r\n<!-- END Top Navbar-->"

/***/ })

});
//# sourceMappingURL=1.chunk.js.map