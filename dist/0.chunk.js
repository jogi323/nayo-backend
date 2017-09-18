webpackJsonp([0,7],{

/***/ 1000:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(15);
var ng_table_component_1 = __webpack_require__(905);
var ng_table_filtering_directive_1 = __webpack_require__(902);
var ng_table_paging_directive_1 = __webpack_require__(903);
var ng_table_sorting_directive_1 = __webpack_require__(904);
var Ng2TableModule = (function () {
    function Ng2TableModule() {
    }
    Ng2TableModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [ng_table_component_1.NgTableComponent, ng_table_filtering_directive_1.NgTableFilteringDirective, ng_table_paging_directive_1.NgTablePagingDirective, ng_table_sorting_directive_1.NgTableSortingDirective],
                    exports: [ng_table_component_1.NgTableComponent, ng_table_filtering_directive_1.NgTableFilteringDirective, ng_table_paging_directive_1.NgTablePagingDirective, ng_table_sorting_directive_1.NgTableSortingDirective]
                },] },
    ];
    /** @nocollapse */
    Ng2TableModule.ctorParameters = [];
    return Ng2TableModule;
}());
exports.Ng2TableModule = Ng2TableModule;


/***/ }),

/***/ 1001:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var ng_table_component_1 = __webpack_require__(905);
var ng_table_filtering_directive_1 = __webpack_require__(902);
var ng_table_paging_directive_1 = __webpack_require__(903);
var ng_table_sorting_directive_1 = __webpack_require__(904);
__export(__webpack_require__(905));
__export(__webpack_require__(902));
__export(__webpack_require__(903));
__export(__webpack_require__(904));
__export(__webpack_require__(999));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    directives: [
        ng_table_component_1.NgTableComponent,
        ng_table_filtering_directive_1.NgTableFilteringDirective,
        ng_table_sorting_directive_1.NgTableSortingDirective,
        ng_table_paging_directive_1.NgTablePagingDirective
    ]
};
var ng_table_module_1 = __webpack_require__(1000);
exports.Ng2TableModule = ng_table_module_1.Ng2TableModule;


/***/ }),

/***/ 1002:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Activity Reports</div>\r\n<!-- START row-->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget\">\r\n            <div class=\"panel-body\">\r\n                <div class=\"text-right text-muted\">\r\n                    <em class=\"fa fa-retweet fa-2x\"></em>\r\n                </div>\r\n                <h3 class=\"mt0\">99.999</h3>\r\n                <p class=\"text-muted\">Returning Users</p>\r\n                <div class=\"progress progress-striped progress-xs\">\r\n                    <div class=\"progress-bar progress-bar-warning progress-60\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"70\">\r\n                        <span class=\"sr-only\">60% Complete</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END widget-->\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget\">\r\n            <div class=\"panel-body\">\r\n                <div class=\"text-right text-muted\">\r\n                    <em class=\"fa fa-angle-double-left fa-2x\"></em>\r\n                </div>\r\n                <h3 class=\"mt0\">300</h3>\r\n                <p class=\"text-muted\">Orders Returned</p>\r\n                <div class=\"progress progress-striped progress-xs\">\r\n                    <div class=\"progress-bar progress-bar-green progress-80\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                        <span class=\"sr-only\">80% Complete</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END widget-->\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget\">\r\n            <div class=\"panel-body\">\r\n                <div class=\"text-right text-muted\">\r\n                    <em class=\"fa fa-exclamation fa-2x\"></em>\r\n                </div>\r\n                <h3 class=\"mt0\">1000</h3>\r\n                <p class=\"text-muted\">Failed to orders</p>\r\n                <div class=\"progress progress-striped progress-xs\">\r\n                    <div class=\"progress-bar progress-bar-info progress-40\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\">\r\n                        <span class=\"sr-only\">40% Complete</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END widget-->\r\n    </div>\r\n</div>\r\n<!-- END row-->\r\n<!-- START row-->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget\">\r\n            <div class=\"row row-table row-flush\">\r\n                <div class=\"col-xs-6 bb br\">\r\n                    <div class=\"row row-table row-flush\">\r\n                        <div class=\"col-xs-4 text-center text-info\">\r\n                            <em class=\"fa fa-users fa-2x\"></em>\r\n                        </div>\r\n                        <div class=\"col-xs-8\">\r\n                            <div class=\"panel-body text-center\">\r\n                                <h4 class=\"mt0\">10k</h4>\r\n                                <p class=\"mb0 text-muted\">VISITORS</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xs-6 bb\">\r\n                    <div class=\"row row-table row-flush\">\r\n                        <div class=\"col-xs-4 text-center text-success\">\r\n                            <em class=\"fa fa-sign-in fa-2x\"></em>\r\n                        </div>\r\n                        <div class=\"col-xs-8\">\r\n                            <div class=\"panel-body text-center\">\r\n                                <h4 class=\"mt0\">7K</h4>\r\n                                <p class=\"mb0 text-muted\">Logins</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row row-table row-flush\">\r\n                <div class=\"col-xs-6 br\">\r\n                    <div class=\"row row-table row-flush\">\r\n                        <div class=\"col-xs-4 text-center text-inverse\">\r\n                            <em class=\"fa fa-registered fa-2x\"></em>\r\n                        </div>\r\n                        <div class=\"col-xs-8\">\r\n                            <div class=\"panel-body text-center\">\r\n                                <h4 class=\"mt0\">2K</h4>\r\n                                <p class=\"mb0 text-muted\">Registered</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xs-6\">\r\n                    <div class=\"row row-table row-flush\">\r\n                        <div class=\"col-xs-4 text-center text-danger\">\r\n                            <em class=\"fa fa-exclamation-triangle fa-2x\"></em>\r\n                        </div>\r\n                        <div class=\"col-xs-8\">\r\n                            <div class=\"panel-body text-center\">\r\n                                <h4 class=\"mt0\">500</h4>\r\n                                <p class=\"mb0 text-muted\">Failed</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END widget-->\r\n        <!-- START widget-->\r\n        <div class=\"panel widget\">\r\n            <div class=\"row row-table row-flush\">\r\n                <div class=\"col-xs-6 bb br\">\r\n                    <div class=\"row row-table row-flush\">\r\n                        <div class=\"col-xs-4 text-center text-info\">\r\n                            <!-- Bar chart-->\r\n                            <div [sparkline]=\"sparkOptions1\"  values=\"5,9,4,1,3,4,7,5\"></div>\r\n                        </div>\r\n                        <div class=\"col-xs-8\">\r\n                            <div class=\"panel-body text-center\">\r\n                                <h4 class=\"mt0\">10k</h4>\r\n                                <p class=\"mb0 text-muted\">ORDERS</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xs-6 bb\">\r\n                    <div class=\"row row-table row-flush\">\r\n                        <div class=\"col-xs-4 text-center text-danger\">\r\n                            <!-- Bar chart-->\r\n                            <div [sparkline]=\"sparkOptions1\" values=\"1,2,3,4,5,6,7,8,9\"></div>\r\n                        </div>\r\n                        <div class=\"col-xs-8\">\r\n                            <div class=\"panel-body text-center\">\r\n                                <h4 class=\"mt0\">1K</h4>\r\n                                <p class=\"mb0 text-muted\">RETURNS</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row row-table row-flush\">\r\n                <div class=\"col-xs-6 br\">\r\n                    <div class=\"row row-table row-flush\">\r\n                        <div class=\"col-xs-4 text-center text-inverse\">\r\n                            <!-- Bar chart-->\r\n                            <div [sparkline]=\"sparkOptions1\" values=\"1,0,4,9,5,7,8,4,7\"></div>\r\n                        </div>\r\n                        <div class=\"col-xs-8\">\r\n                            <div class=\"panel-body text-center\">\r\n                                <h4 class=\"mt0\">2K</h4>\r\n                                <p class=\"mb0 text-muted\">IN CART</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-xs-6\">\r\n                    <div class=\"row row-table row-flush\">\r\n                        <div class=\"col-xs-4 text-center text-success\">\r\n                            <!-- Bar chart-->\r\n                            <div [sparkline]=\"sparkOptions1\" values=\"1,5,2,2,8,4,4,8\"></div>\r\n                        </div>\r\n                        <div class=\"col-xs-8\">\r\n                            <div class=\"panel-body text-center\">\r\n                                <h4 class=\"mt0\">9k</h4>\r\n                                <p class=\"mb0 text-muted\">DELIVERED</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END widget-->\r\n    </div>\r\n    <div class=\"col-lg-8\">\r\n        <h4>Bar Chart</h4>\r\n        <div>\r\n           <canvas baseChart [chartType]=\"'bar'\" [options]=\"barOptions\" [datasets]=\"barData.datasets\" [colors]=\"barColors\" [labels]=\"barData.labels\" [legend]=\"false\" height=\"120\"></canvas>\r\n        </div>\r\n     </div>\r\n</div>\r\n<!-- END row-->\r\n\r\n\r\n"

/***/ }),

/***/ 1003:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">\r\n  Dashboard\r\n  <small>{{ 'dashboard.WELCOME' | translate }} !</small>\r\n</div>\r\n<!-- START widgets box-->\r\n<div class=\"row\">\r\n  <div class=\"col-lg-3 col-sm-6\">\r\n      <!-- START widget-->\r\n      <div class=\"panel widget bg-primary\">\r\n          <div class=\"row row-table\">\r\n              <div class=\"col-xs-4 text-center bg-primary-dark pv-lg\">\r\n                  <em class=\"fa fa-truck fa-3x\"></em>\r\n              </div>\r\n              <div class=\"col-xs-8 pv-lg\">\r\n                  <div class=\"h2 mt0\">1700\r\n                    <!-- <small>total</small> -->\r\n                  </div>\r\n                  <div class=\"text-uppercase\">Orders</div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"col-lg-3 col-sm-6\">\r\n      <!-- START widget-->\r\n      <div class=\"panel widget bg-purple\">\r\n          <div class=\"row row-table\">\r\n              <div class=\"col-xs-4 text-center bg-purple-dark pv-lg\">\r\n                  <em class=\"fa fa-user fa-3x\"></em>\r\n              </div>\r\n              <div class=\"col-xs-8 pv-lg\">\r\n                  <div class=\"h2 mt0\">700\r\n                  </div>\r\n                  <div class=\"text-uppercase\">Users</div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"col-lg-3 col-md-6 col-sm-12\">\r\n      <!-- START widget-->\r\n      <div class=\"panel widget bg-green\">\r\n          <div class=\"row row-table\">\r\n              <div class=\"col-xs-4 text-center bg-green-dark pv-lg\">\r\n                  <em class=\"fa fa-eye fa-3x\"></em>\r\n              </div>\r\n              <div class=\"col-xs-8 pv-lg\">\r\n                  <div class=\"h2 mt0\">5000</div>\r\n                  <div class=\"text-uppercase\">Visitors</div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"col-lg-3 col-md-6 col-sm-12\">\r\n      <!-- START date widget-->\r\n      <div class=\"panel widget bg-green\">\r\n        <div class=\"row row-table\">\r\n            <div class=\"col-xs-4 text-center bg-green-dark pv-lg\">\r\n                <em class=\"fa fa-money fa-3x\"></em>\r\n            </div>\r\n            <div class=\"col-xs-8 pv-lg\">\r\n                <div class=\"h2 mt0\">$ 90000</div>\r\n                <div class=\"text-uppercase\">Sales</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n      <!-- END date widget    -->\r\n  </div>\r\n</div>\r\n<!-- END widgets box-->\r\n<div class=\"row\">\r\n  <!-- START dashboard main content-->\r\n  <div class=\"col-lg-9\">\r\n      <!-- START chart-->\r\n      <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n              <!-- START widget-->\r\n              <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                      <div class=\"panel-title\">Inbound visitor statistics</div>\r\n                  </div>\r\n                  <div class=\"panel-body\">\r\n                      <div flot [dataset]=\"splineData\" [options]=\"splineOptions\" height=\"260\"></div>\r\n                  </div>\r\n              </div>\r\n              <!-- END widget-->\r\n          </div>\r\n      </div>\r\n      <!-- END chart-->\r\n      \r\n      <div class=\"row\">\r\n          <div class=\"col-lg-4\">\r\n              <!-- START widget-->\r\n              <div class=\"panel widget\">\r\n                  <div class=\"panel-body\">\r\n                      <div class=\"clearfix\">\r\n                          <h3 class=\"pull-left text-muted mt0\">300</h3>\r\n                          <em class=\"pull-right text-muted fa fa-shopping-cart  fa-2x\"></em>\r\n                      </div>\r\n                      <div class=\"pv-lg\" [sparkline]=\"sparkOptions2\" values=\"1,3,4,7,5,9,4,4,7,5,9,6,4\"></div>\r\n                      <p>\r\n                          <small class=\"text-muted\">Cart to bag</small>\r\n                      </p>\r\n                      <progressbar class=\"progress-striped progress-xs\" value=\"80\" type=\"info\">80%</progressbar>\r\n                  </div>\r\n              </div>\r\n              <!-- END widget-->\r\n          </div>\r\n          <div class=\"col-lg-8\">\r\n              <div class=\"panel panel-default\">\r\n                  <div class=\"panel-heading\">\r\n                      <!-- <div class=\"pull-right label label-danger\">5</div>\r\n                      <div class=\"pull-right label label-success\">12</div> -->\r\n                      <div class=\"panel-title\">Top selling products</div>\r\n                  </div>\r\n                  <!-- START list group-->\r\n                  <scrollable class=\"list-group\" height=\"180\">\r\n                      <!-- START list group item-->\r\n                      <a class=\"list-group-item\" href=\"\">\r\n                          <div class=\"media-box\">\r\n                              <div class=\"pull-left\">\r\n                                  <img class=\"media-box-object img-circle thumb32\" src=\"assets/img/product7.png\" alt=\"Image\" />\r\n                              </div>\r\n                              <div class=\"media-box-body clearfix\">\r\n                                  <small class=\"pull-right\">200</small>\r\n                                  <strong class=\"media-box-heading text-primary\">\r\n                            <span class=\"text-left\"></span>Product 1</strong>\r\n                                  <p class=\"mb-sm\">\r\n                                      <small>some description about the product</small>\r\n                                  </p>\r\n                              </div>\r\n                          </div>\r\n                      </a>\r\n                      <!-- END list group item-->\r\n                      <!-- START list group item-->\r\n                      <a class=\"list-group-item\" href=\"\">\r\n                        <div class=\"media-box\">\r\n                            <div class=\"pull-left\">\r\n                                <img class=\"media-box-object img-circle thumb32\" src=\"assets/img/product8.png\" alt=\"Image\" />\r\n                            </div>\r\n                            <div class=\"media-box-body clearfix\">\r\n                                <small class=\"pull-right\">180</small>\r\n                                <strong class=\"media-box-heading text-primary\">\r\n                          <span class=\"text-left\"></span>Product 2</strong>\r\n                                <p class=\"mb-sm\">\r\n                                    <small>some description about the product</small>\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                    <!-- END list group item-->\r\n                      <!-- START list group item-->\r\n                      <a class=\"list-group-item\" href=\"\">\r\n                        <div class=\"media-box\">\r\n                            <div class=\"pull-left\">\r\n                                <img class=\"media-box-object img-circle thumb32\" src=\"assets/img/product9.png\" alt=\"Image\" />\r\n                            </div>\r\n                            <div class=\"media-box-body clearfix\">\r\n                                <small class=\"pull-right\">150</small>\r\n                                <strong class=\"media-box-heading text-primary\">\r\n                          <span class=\"text-left\"></span>Product 3</strong>\r\n                                <p class=\"mb-sm\">\r\n                                    <small>some description about the product</small>\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                    <!-- END list group item-->\r\n                      <!-- START list group item-->\r\n                      <a class=\"list-group-item\" href=\"\">\r\n                        <div class=\"media-box\">\r\n                            <div class=\"pull-left\">\r\n                                <img class=\"media-box-object img-circle thumb32\" src=\"assets/img/product10.png\" alt=\"Image\" />\r\n                            </div>\r\n                            <div class=\"media-box-body clearfix\">\r\n                                <small class=\"pull-right\">135</small>\r\n                                <strong class=\"media-box-heading text-primary\">\r\n                          <span class=\"text-left\"></span>Product 4</strong>\r\n                                <p class=\"mb-sm\">\r\n                                    <small>some description about the product</small>\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                    <!-- END list group item-->\r\n                      <!-- START list group item-->\r\n                      <a class=\"list-group-item\" href=\"\">\r\n                        <div class=\"media-box\">\r\n                            <div class=\"pull-left\">\r\n                                <img class=\"media-box-object img-circle thumb32\" src=\"assets/img/product7.png\" alt=\"Image\" />\r\n                            </div>\r\n                            <div class=\"media-box-body clearfix\">\r\n                                <small class=\"pull-right\">111</small>\r\n                                <strong class=\"media-box-heading text-primary\">\r\n                          <span class=\"text-left\"></span>Product 5</strong>\r\n                                <p class=\"mb-sm\">\r\n                                    <small>some description about the product</small>\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                    <!-- END list group item-->                      \r\n                  </scrollable>\r\n                  <!-- END list group-->\r\n                  <!-- START panel footer-->\r\n                  <div class=\"panel-footer clearfix\">\r\n                      <div class=\"input-group\">\r\n                          <input class=\"form-control input-sm\" type=\"text\" placeholder=\"Search message ..\" />\r\n                          <span class=\"input-group-btn\">\r\n                      <button class=\"btn btn-default btn-sm\" type=\"submit\"><i class=\"fa fa-search\"></i>\r\n                      </button>\r\n                   </span>\r\n                      </div>\r\n                  </div>\r\n                  <!-- END panel-footer-->\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <!-- END dashboard main content-->\r\n  <!-- START dashboard sidebar-->\r\n  <aside class=\"col-lg-3\">\r\n      <!-- START loader widget-->\r\n      <div class=\"panel panel-default\">\r\n          <div class=\"panel-body\">\r\n              <a class=\"text-muted pull-right\" href=\"\">\r\n                  <em class=\"fa fa-arrow-right\"></em>\r\n              </a>\r\n              <div class=\"text-info\">Average Monthly Orders</div>\r\n              <div class=\"text-center pv-xl\">\r\n                  <div class=\"easypie-chart easypie-chart-lg\" easypiechart [options]=\"pieOptions\" [percent]=\"easyPiePercent\">\r\n                      <span>{{easyPiePercent}}%</span>\r\n                  </div>\r\n              </div>\r\n              <div class=\"text-center\" [sparkline]=\"sparkOptions1\"  values=\"5,4,8,7,8,5,4,6,5,5,9,4,6,3,4,7,5,4,7\"></div>\r\n          </div>\r\n          <div class=\"panel-footer\">\r\n              <p class=\"text-muted\">\r\n                  <em class=\"fa fa-upload fa-fw\"></em>\r\n                  <span>This Month</span>\r\n                  <span class=\"text-dark\">300 orders</span>\r\n              </p>\r\n          </div>\r\n      </div>\r\n      <!-- END loader widget-->\r\n      <!-- START messages and activity-->\r\n      <div class=\"panel panel-default\">\r\n          <div class=\"panel-heading\">\r\n              <div class=\"panel-title\">Last orders</div>\r\n          </div>\r\n          <!-- START list group-->\r\n          <div class=\"list-group\">\r\n              \r\n              <!-- START list group item-->\r\n              <div class=\"list-group-item\">\r\n                  <div class=\"media-box\">\r\n                    <div class=\"pull-left\">\r\n                      <img class=\"media-box-object img-circle thumb32\" src=\"assets/img/product7.png\" alt=\"Image\" />\r\n                    </div>\r\n                    <div class=\"media-box-body clearfix\">\r\n                        <small class=\"text-muted pull-right ml\">15h</small>\r\n                        <div class=\"media-box-heading\"><a class=\"text-success m0\" href=\"\">Product 1</a>\r\n                        </div>\r\n                        <p class=\"m0\">\r\n                            <small>On\r\n                        <em>10/08/2017 09:00 am</em>\r\n                    </small>\r\n                        </p>\r\n                    </div>\r\n                  </div>\r\n              </div>\r\n              <!-- END list group item-->\r\n              <!-- START list group item-->\r\n              <div class=\"list-group-item\">\r\n                <div class=\"media-box\">\r\n                  <div class=\"pull-left\">\r\n                    <img class=\"media-box-object img-circle thumb32\" src=\"assets/img/product7.png\" alt=\"Image\" />\r\n                  </div>\r\n                  <div class=\"media-box-body clearfix\">\r\n                      <small class=\"text-muted pull-right ml\">1D</small>\r\n                      <div class=\"media-box-heading\"><a class=\"text-success m0\" href=\"\">Product 2</a>\r\n                      </div>\r\n                      <p class=\"m0\">\r\n                          <small>On\r\n                      <em>05/08/2017 09:00 am</em>\r\n                  </small>\r\n                      </p>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n            <!-- END list group item-->\r\n            <!-- START list group item-->\r\n            <div class=\"list-group-item\">\r\n              <div class=\"media-box\">\r\n                <div class=\"pull-left\">\r\n                  <img class=\"media-box-object img-circle thumb32\" src=\"assets/img/product7.png\" alt=\"Image\" />\r\n                </div>\r\n                <div class=\"media-box-body clearfix\">\r\n                    <small class=\"text-muted pull-right ml\">15d</small>\r\n                    <div class=\"media-box-heading\"><a class=\"text-success m0\" href=\"\">Product 3</a>\r\n                    </div>\r\n                    <p class=\"m0\">\r\n                        <small>On\r\n                    <em>2/7/2015 09:00 am</em>\r\n                </small>\r\n                    </p>\r\n                </div>\r\n              </div>\r\n          </div>\r\n          <!-- END list group item-->\r\n          <!-- START list group item-->\r\n          <div class=\"list-group-item\">\r\n            <div class=\"media-box\">\r\n              <div class=\"pull-left\">\r\n                <img class=\"media-box-object img-circle thumb32\" src=\"assets/img/product7.png\" alt=\"Image\" />\r\n              </div>\r\n              <div class=\"media-box-body clearfix\">\r\n                  <small class=\"text-muted pull-right ml\">21d</small>\r\n                  <div class=\"media-box-heading\"><a class=\"text-success m0\" href=\"\">Product 4</a>\r\n                  </div>\r\n                  <p class=\"m0\">\r\n                      <small>On\r\n                  <em>23/06/2017 09:00 am</em>\r\n              </small>\r\n                  </p>\r\n              </div>\r\n            </div>\r\n        </div>\r\n        <!-- END list group item-->\r\n        <!-- START list group item-->\r\n        <div class=\"list-group-item\">\r\n          <div class=\"media-box\">\r\n              <div class=\"pull-left\">\r\n                <img class=\"media-box-object img-circle thumb32\" src=\"assets/img/product7.png\" alt=\"Image\" />\r\n              </div>\r\n              <div class=\"media-box-body clearfix\">\r\n                  <small class=\"text-muted pull-right ml\">45d</small>\r\n                  <div class=\"media-box-heading\"><a class=\"text-success m0\" href=\"\">Product 5</a>\r\n                  </div>\r\n                  <p class=\"m0\">\r\n                      <small>On\r\n                 <em>10/05/2017 09:00 am</em>\r\n              </small>\r\n                  </p>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <!-- END list group item-->\r\n      \r\n          </div>\r\n          <!-- END list group-->\r\n          <!-- START panel footer-->\r\n          <div class=\"panel-footer clearfix\">\r\n              <a class=\"pull-left\" href=\"\">\r\n                  <small>Load more</small>\r\n              </a>\r\n          </div>\r\n          <!-- END panel-footer-->\r\n      </div>\r\n      <!-- END messages and activity-->\r\n  </aside>\r\n  <!-- END dashboard sidebar-->\r\n</div>\r\n"

/***/ }),

/***/ 1004:
/***/ (function(module, exports) {

module.exports = "<tabset [justified]=\"true\">\n  <tab>\n    <ng-template tabHeading>\n      <h4 class=\"text-muted text-thin\">Products <i class=\"fa fa-upload fa-lg\" aria-hidden=\"true\"></i></h4>\n    </ng-template>\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h4 class=\"text-muted text-thin\">Product 1</h4>\n          </div>\n          <hr>\n          <div class=\"panel-body\">\n            <form novalidate #product1Form = 'ngForm'>\n              <div class=\"form-group\">\n              <label class=\"text-muted text-thin\">Select your product image</label>\n              <label for=\"image-input\" class=\"file-upload\">\n                  <button class=\"btn btn-default btn-block\">Upload Image</button>\n                  <input  type=\"file\" name=\"product1Image\" (change)=\"product1ImageUpload($event)\" >\n              </label>\n            </div>\n              <div class=\"result\" *ngIf='image1.src'>\n                  <label class=\"text-muted text-thin\">Image Preview</label>\n                  <img src=\"{{image1.src}}\" width=\"200px\" height=\"200px\">\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"productName\" class=\"text-muted text-thin\">Product name</label>\n                  <input type=\"text\" name=\"product1name\" class=\"form-control\" [(ngModel)] = 'product1Data.product1name' #product1name = 'ngModel'>\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"productDesc\" class=\"text-muted text-thin\">Product description</label>\n                  <!-- <input type=\"text\" name=\"product1desc\" class=\"form-control\"> -->\n                  <textarea class=\"form-control\" rows=\"3\"  name=\"product1desc\" [(ngModel)] = 'product1Data.product1desc' #product1desc = 'ngModel'></textarea>\n              </div>\n              <button class=\"btn btn-primary pull-right\" [disabled]=\"!product1Form.form.valid\"  (click)='saveProduct1Data(product1Data); product1Form.reset()'>Save</button>\n            </form>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n              <h4 class=\"text-muted text-thin\">Product 2</h4>\n            </div>\n            <hr>\n            <div class=\"panel-body\">\n              <form novalidate #product2Form = 'ngForm'>\n                <div class=\"form-group\">\n                <label class=\"text-muted text-thin\">Select your product image</label>\n                <label for=\"image-input\" class=\"file-upload\">\n                    <button class=\"btn btn-default btn-block\">Upload Image</button>\n                    <input  type=\"file\" name=\"product2Image\" (change)=\"product2ImageUpload($event)\" >\n                </label>\n              </div>\n                <div class=\"result\" *ngIf='image2.src'>\n                    <label class=\"text-muted text-thin\">Image Preview</label>\n                    <img src=\"{{image2.src}}\" width=\"200px\" height=\"200px\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"productName\" class=\"text-muted text-thin\">Product name</label>\n                    <input type=\"text\" name=\"product2name\" class=\"form-control\" [(ngModel)] = 'product2Data.product2name' #product2name = 'ngModel'>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"productDesc\" class=\"text-muted text-thin\">Product description</label>\n                    <!-- <input type=\"text\" name=\"product2desc\" class=\"form-control\"> -->\n                    <textarea class=\"form-control\" rows=\"3\"  name=\"product2desc\" [(ngModel)] = 'product2Data.product2desc' #product2desc = 'ngModel'></textarea>\n                </div>\n                <button class=\"btn btn-primary pull-right\" [disabled]=\"!product2Form.form.valid\"  (click)='saveProduct2Data(product2Data); product2Form.reset()'>Save</button>\n              </form>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                <h4 class=\"text-muted text-thin\">Product 3</h4>\n              </div>\n              <hr>\n              <div class=\"panel-body\">\n                <form novalidate #product3Form = 'ngForm'>\n                  <div class=\"form-group\">\n                  <label class=\"text-muted text-thin\">Select your product image</label>\n                  <label for=\"image-input\" class=\"file-upload\">\n                      <button class=\"btn btn-default btn-block\">Upload Image</button>\n                      <input  type=\"file\" name=\"product3Image\" (change)=\"product3ImageUpload($event)\" >\n                  </label>\n                </div>\n                  <div class=\"result\" *ngIf='image3.src'>\n                      <label class=\"text-muted text-thin\">Image Preview</label>\n                      <img src=\"{{image3.src}}\" width=\"200px\" height=\"200px\">\n                  </div>\n                  <div class=\"form-group\">\n                      <label for=\"productName\" class=\"text-muted text-thin\">Product name</label>\n                      <input type=\"text\" name=\"product3name\" class=\"form-control\" [(ngModel)] = 'product3Data.product3name' #product3name = 'ngModel'>\n                  </div>\n                  <div class=\"form-group\">\n                      <label for=\"productDesc\" class=\"text-muted text-thin\">Product description</label>\n                      <!-- <input type=\"text\" name=\"product3desc\" class=\"form-control\"> -->\n                      <textarea class=\"form-control\" rows=\"3\"  name=\"product3desc\" [(ngModel)] = 'product3Data.product3desc' #product3desc = 'ngModel'></textarea>\n                  </div>\n                  <button class=\"btn btn-primary pull-right\" [disabled]=\"!product3Form.form.valid\"  (click)='saveProduct3Data(product3Data); product3Form.reset()'>Save</button>\n                </form>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n              <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                  <h4 class=\"text-muted text-thin\">Product 4</h4>\n                </div>\n                <hr>\n                <div class=\"panel-body\">\n                  <form novalidate #product4Form = 'ngForm'>\n                    <div class=\"form-group\">\n                    <label class=\"text-muted text-thin\">Select your product image</label>\n                    <label for=\"image-input\" class=\"file-upload\">\n                        <button class=\"btn btn-default btn-block\">Upload Image</button>\n                        <input  type=\"file\" name=\"product4Image\" (change)=\"product4ImageUpload($event)\" >\n                    </label>\n                  </div>\n                    <div class=\"result\" *ngIf='image4.src'>\n                        <label class=\"text-muted text-thin\">Image Preview</label>\n                        <img src=\"{{image4.src}}\" width=\"200px\" height=\"200px\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"productName\" class=\"text-muted text-thin\">Product name</label>\n                        <input type=\"text\" name=\"product4name\" class=\"form-control\" [(ngModel)] = 'product4Data.product4name' #product4name = 'ngModel'>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"productDesc\" class=\"text-muted text-thin\">Product description</label>\n                        <!-- <input type=\"text\" name=\"product4desc\" class=\"form-control\"> -->\n                        <textarea class=\"form-control\" rows=\"3\"  name=\"product4desc\" [(ngModel)] = 'product4Data.product4desc' #product4desc = 'ngModel'></textarea>\n                    </div>\n                    <button class=\"btn btn-primary pull-right\" [disabled]=\"!product4Form.form.valid\"  (click)='saveProduct4Data(product4Data); product4Form.reset()'>Save</button>\n                  </form>\n                </div>\n              </div>\n            </div>\n    </div>\n  </tab>\n  <tab>\n    <ng-template tabHeading>\n      <h4 class=\"text-muted text-thin\">Banners <i class=\"fa fa-upload fa-lg\" aria-hidden=\"true\"></i></h4>\n    </ng-template>\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h4 class=\"text-muted text-thin\">Banners 1</h4>\n          </div>\n          <hr>\n          <div class=\"panel-body\">\n            <form novalidate #banner1Form = 'ngForm'>\n              <div class=\"form-group\">\n              <label class=\"text-muted text-thin\">Select your Banner image</label>\n              <label for=\"image-input\" class=\"file-upload\">\n                  <button class=\"btn btn-default btn-block\">Upload Image</button>\n                  <input  type=\"file\" name=\"banner1Image\" (change)=\"banner1ImageUpload($event)\" >\n              </label>\n            </div>\n              <div class=\"result\" *ngIf='banner1.src'>\n                  <label class=\"text-muted text-thin\">Banner Preview</label>\n                  <img src=\"{{banner1.src}}\" width=\"200px\" height=\"200px\">\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"bannerName\" class=\"text-muted text-thin\">Name</label>\n                  <input type=\"text\" name=\"banner1name\" class=\"form-control\" [(ngModel)] = 'banner1Data.banner1name' #banner1name = 'ngModel'>\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"bannerDesc\" class=\"text-muted text-thin\">Banner description</label>\n                  <!-- <input type=\"text\" name=\"product1desc\" class=\"form-control\"> -->\n                  <textarea class=\"form-control\" rows=\"3\"  name=\"banner1desc\" [(ngModel)] = 'banner1Data.banner1desc' #banner1desc = 'ngModel'></textarea>\n              </div>\n              <button class=\"btn btn-primary pull-right\" [disabled]=\"!banner1Form.form.valid\"  (click)='saveBanner1Data(banner1Data); banner1Form.reset()'>Save</button>\n            </form>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h4 class=\"text-muted text-thin\">Banners 2</h4>\n          </div>\n          <hr>\n          <div class=\"panel-body\">\n            <form novalidate #banner2Form = 'ngForm'>\n              <div class=\"form-group\">\n              <label class=\"text-muted text-thin\">Select your Banner image</label>\n              <label for=\"image-input\" class=\"file-upload\">\n                  <button class=\"btn btn-default btn-block\">Upload Image</button>\n                  <input  type=\"file\" name=\"banner2Image\" (change)=\"banner2ImageUpload($event)\" >\n              </label>\n            </div>\n              <div class=\"result\" *ngIf='banner2.src'>\n                  <label class=\"text-muted text-thin\">Banner Preview</label>\n                  <img src=\"{{banner2.src}}\" width=\"200px\" height=\"200px\">\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"bannerName\" class=\"text-muted text-thin\">Name</label>\n                  <input type=\"text\" name=\"banner2name\" class=\"form-control\" [(ngModel)] = 'banner2Data.banner2name' #banner2name = 'ngModel'>\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"bannerDesc\" class=\"text-muted text-thin\">Banner description</label>\n                  <!-- <input type=\"text\" name=\"product2desc\" class=\"form-control\"> -->\n                  <textarea class=\"form-control\" rows=\"3\"  name=\"banner2desc\" [(ngModel)] = 'banner2Data.banner2desc' #banner2desc = 'ngModel'></textarea>\n              </div>\n              <button class=\"btn btn-primary pull-right\" [disabled]=\"!banner2Form.form.valid\"  (click)='saveBanner2Data(banner2Data); banner2Form.reset()'>Save</button>\n            </form>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h4 class=\"text-muted text-thin\">Banners 3</h4>\n          </div>\n          <hr>\n          <div class=\"panel-body\">\n            <form novalidate #banner3Form = 'ngForm'>\n              <div class=\"form-group\">\n              <label class=\"text-muted text-thin\">Select your Banner image</label>\n              <label for=\"image-input\" class=\"file-upload\">\n                  <button class=\"btn btn-default btn-block\">Upload Image</button>\n                  <input  type=\"file\" name=\"banner3Image\" (change)=\"banner3ImageUpload($event)\" >\n              </label>\n            </div>\n              <div class=\"result\" *ngIf='banner3.src'>\n                  <label class=\"text-muted text-thin\">Banner Preview</label>\n                  <img src=\"{{banner3.src}}\" width=\"200px\" height=\"200px\">\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"bannerName\" class=\"text-muted text-thin\">Name</label>\n                  <input type=\"text\" name=\"banner3name\" class=\"form-control\" [(ngModel)] = 'banner3Data.banner3name' #banner3name = 'ngModel'>\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"bannerDesc\" class=\"text-muted text-thin\">Banner description</label>\n                  <textarea class=\"form-control\" rows=\"3\"  name=\"banner3desc\" [(ngModel)] = 'banner3Data.banner3desc' #banner3desc = 'ngModel'></textarea>\n              </div>\n              <button class=\"btn btn-primary pull-right\" [disabled]=\"!banner3Form.form.valid\"  (click)='saveBanner3Data(banner3Data); banner3Form.reset()'>Save</button>\n            </form>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h4 class=\"text-muted text-thin\">Banners 4</h4>\n          </div>\n          <hr>\n          <div class=\"panel-body\">\n            <form novalidate #banner4Form = 'ngForm'>\n              <div class=\"form-group\">\n              <label class=\"text-muted text-thin\">Select your Banner image</label>\n              <label for=\"image-input\" class=\"file-upload\">\n                  <button class=\"btn btn-default btn-block\">Upload Image</button>\n                  <input  type=\"file\" name=\"banner4Image\" (change)=\"banner4ImageUpload($event)\" >\n              </label>\n            </div>\n              <div class=\"result\" *ngIf='banner4.src'>\n                  <label class=\"text-muted text-thin\">Banner Preview</label>\n                  <img src=\"{{banner4.src}}\" width=\"200px\" height=\"200px\">\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"bannerName\" class=\"text-muted text-thin\">Name</label>\n                  <input type=\"text\" name=\"banner4name\" class=\"form-control\" [(ngModel)] = 'banner4Data.banner4name' #banner4name = 'ngModel'>\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"bannerDesc\" class=\"text-muted text-thin\">Banner description</label>\n                  <textarea class=\"form-control\" rows=\"4\"  name=\"banner4desc\" [(ngModel)] = 'banner4Data.banner4desc' #banner4desc = 'ngModel'></textarea>\n              </div>\n              <button class=\"btn btn-primary pull-right\" [disabled]=\"!banner4Form.form.valid\"  (click)='saveBanner4Data(banner4Data); banner4Form.reset()'>Save</button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </tab>\n  <tab>\n    <ng-template tabHeading>\n      <h4 class=\"text-muted text-thin\">Catagories <i class=\"fa fa-upload fa-lg\" aria-hidden=\"true\"></i></h4>\n    </ng-template>\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h4 class=\"text-muted text-thin\">Catagory 1</h4>\n          </div>\n          <hr>\n          <div class=\"panel-body\">\n            <form novalidate #catagory1Form = 'ngForm'>\n              <div class=\"form-group\">\n              <label class=\"text-muted text-thin\">Select your catagory image</label>\n              <label for=\"image-input\" class=\"file-upload\">\n                  <button class=\"btn btn-default btn-block\">Upload Image</button>\n                  <input  type=\"file\" name=\"catagory1Image\" (change)=\"catagory1ImageUpload($event)\" >\n              </label>\n            </div>\n              <div class=\"result\" *ngIf='catagory1.src'>\n                  <label class=\"text-muted text-thin\">Catagory Preview</label>\n                  <img src=\"{{catagory1.src}}\" width=\"200px\" height=\"200px\">\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"catagoryName\" class=\"text-muted text-thin\">catagory name</label>\n                  <input type=\"text\" name=\"catagory1name\" class=\"form-control\" [(ngModel)] = 'catagory1Data.catagory1name' #catagory1name = 'ngModel'>\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"catagoryDesc\" class=\"text-muted text-thin\">catagory description</label>\n                  <textarea class=\"form-control\" rows=\"3\"  name=\"catagory1desc\" [(ngModel)] = 'catagory1Data.catagory1desc' #catagory1desc = 'ngModel'></textarea>\n              </div>\n              <button class=\"btn btn-primary pull-right\" [disabled]=\"!catagory1Form.form.valid\"  (click)='savecatagory1Data(catagory1Data); catagory1Form.reset()'>Save</button>\n            </form>\n          </div>\n        </div>\n      </div>\n        <div class=\"col-md-3\">\n          <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n              <h4 class=\"text-muted text-thin\">Catagory 2</h4>\n            </div>\n            <hr>\n            <div class=\"panel-body\">\n              <form novalidate #catagory2Form = 'ngForm'>\n                <div class=\"form-group\">\n                <label class=\"text-muted text-thin\">Select your catagory image</label>\n                <label for=\"image-input\" class=\"file-upload\">\n                    <button class=\"btn btn-default btn-block\">Upload Image</button>\n                    <input  type=\"file\" name=\"catagory2Image\" (change)=\"catagory2ImageUpload($event)\" >\n                </label>\n              </div>\n                <div class=\"result\" *ngIf='catagory2.src'>\n                    <label class=\"text-muted text-thin\">Catagory Preview</label>\n                    <img src=\"{{catagory2.src}}\" width=\"200px\" height=\"200px\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"catagoryName\" class=\"text-muted text-thin\">catagory name</label>\n                    <input type=\"text\" name=\"catagory2name\" class=\"form-control\" [(ngModel)] = 'catagory2Data.catagory2name' #catagory2name = 'ngModel'>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"catagoryDesc\" class=\"text-muted text-thin\">catagory description</label>\n                    <textarea class=\"form-control\" rows=\"3\"  name=\"catagory2desc\" [(ngModel)] = 'catagory2Data.catagory2desc' #catagory2desc = 'ngModel'></textarea>\n                </div>\n                <button class=\"btn btn-primary pull-right\" [disabled]=\"!catagory2Form.form.valid\"  (click)='savecatagory2Data(catagory2Data); catagory2Form.reset()'>Save</button>\n              </form>\n            </div>\n          </div>\n        </div>\n          <div class=\"col-md-3\">\n            <div class=\"panel panel-default\">\n              <div class=\"panel-heading\">\n                <h4 class=\"text-muted text-thin\">Catagory 3</h4>\n              </div>\n              <hr>\n              <div class=\"panel-body\">\n                <form novalidate #catagory3Form = 'ngForm'>\n                  <div class=\"form-group\">\n                  <label class=\"text-muted text-thin\">Select your catagory image</label>\n                  <label for=\"image-input\" class=\"file-upload\">\n                      <button class=\"btn btn-default btn-block\">Upload Image</button>\n                      <input  type=\"file\" name=\"catagory3Image\" (change)=\"catagory3ImageUpload($event)\" >\n                  </label>\n                </div>\n                  <div class=\"result\" *ngIf='catagory3.src'>\n                      <label class=\"text-muted text-thin\">Catagory Preview</label>\n                      <img src=\"{{catagory3.src}}\" width=\"200px\" height=\"200px\">\n                  </div>\n                  <div class=\"form-group\">\n                      <label for=\"catagoryName\" class=\"text-muted text-thin\">catagory name</label>\n                      <input type=\"text\" name=\"catagory3name\" class=\"form-control\" [(ngModel)] = 'catagory3Data.catagory3name' #catagory3name = 'ngModel'>\n                  </div>\n                  <div class=\"form-group\">\n                      <label for=\"catagoryDesc\" class=\"text-muted text-thin\">catagory description</label>\n                      <textarea class=\"form-control\" rows=\"3\"  name=\"catagory3desc\" [(ngModel)] = 'catagory3Data.catagory3desc' #catagory3desc = 'ngModel'></textarea>\n                  </div>\n                  <button class=\"btn btn-primary pull-right\" [disabled]=\"!catagory3Form.form.valid\"  (click)='savecatagory3Data(catagory3Data); catagory3Form.reset()'>Save</button>\n                </form>\n              </div>\n            </div>\n          </div>\n            <div class=\"col-md-3\">\n              <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                  <h4 class=\"text-muted text-thin\">Catagory 4</h4>\n                </div>\n                <hr>\n                <div class=\"panel-body\">\n                  <form novalidate #catagory4Form = 'ngForm'>\n                    <div class=\"form-group\">\n                    <label class=\"text-muted text-thin\">Select your catagory image</label>\n                    <label for=\"image-input\" class=\"file-upload\">\n                        <button class=\"btn btn-default btn-block\">Upload Image</button>\n                        <input  type=\"file\" name=\"catagory4Image\" (change)=\"catagory4ImageUpload($event)\" >\n                    </label>\n                  </div>\n                    <div class=\"result\" *ngIf='catagory4.src'>\n                        <label class=\"text-muted text-thin\">Catagory Preview</label>\n                        <img src=\"{{catagory4.src}}\" width=\"200px\" height=\"200px\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"catagoryName\" class=\"text-muted text-thin\">catagory name</label>\n                        <input type=\"text\" name=\"catagory4name\" class=\"form-control\" [(ngModel)] = 'catagory4Data.catagory4name' #catagory4name = 'ngModel'>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"catagoryDesc\" class=\"text-muted text-thin\">catagory description</label>\n                        <textarea class=\"form-control\" rows=\"3\"  name=\"catagory4desc\" [(ngModel)] = 'catagory4Data.catagory4desc' #catagory4desc = 'ngModel'></textarea>\n                    </div>\n                    <button class=\"btn btn-primary pull-right\" [disabled]=\"!catagory4Form.form.valid\"  (click)='savecatagory4Data(catagory4Data); catagory4Form.reset()'>Save</button>\n                  </form>\n                </div>\n              </div>\n            </div>\n      \n    </div>\n  </tab>\n</tabset>"

/***/ }),

/***/ 1005:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  home-page works!\r\n</p>\r\n"

/***/ }),

/***/ 1006:
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ 1007:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">Sales Report</div>\r\n\r\n<!-- START row-->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-3\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget\">\r\n            <div class=\"row row-table row-flush\">\r\n                <div class=\"col-xs-4 bg-info text-center\">\r\n                    <em class=\"fa fa-line-chart fa-2x\"></em>\r\n                </div>\r\n                <div class=\"col-xs-8\">\r\n                    <div class=\"panel-body text-center\">\r\n                        <h4 class=\"mt0\">$ 13363534</h4>\r\n                        <p class=\"mb0 text-muted\">Total Sales</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END widget-->\r\n    </div>\r\n    <div class=\"col-lg-3\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget\">\r\n            <div class=\"row row-table row-flush\">\r\n                <div class=\"col-xs-4 bg-danger text-center\">\r\n                    <em class=\"fa fa-filter fa-2x\"></em>\r\n                </div>\r\n                <div class=\"col-xs-8\">\r\n                    <div class=\"panel-body text-center\">\r\n                        <h4 class=\"mt0\">$56546</h4>\r\n                        <p class=\"mb0 text-muted\">Average Sales</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END widget-->\r\n    </div>\r\n    <div class=\"col-lg-3\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget\">\r\n            <div class=\"row row-table row-flush\">\r\n                <div class=\"col-xs-4 bg-inverse text-center\">\r\n                    <em class=\"fa fa-percent fa-2x\"></em>\r\n                </div>\r\n                <div class=\"col-xs-8\">\r\n                    <div class=\"panel-body text-center\">\r\n                        <h4 class=\"mt0\">$234</h4>\r\n                        <p class=\"mb0 text-muted\">Total Tax</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END widget-->\r\n    </div>\r\n    <div class=\"col-lg-3\">\r\n        <!-- START widget-->\r\n        <div class=\"panel widget\">\r\n            <div class=\"row row-table row-flush\">\r\n                <div class=\"col-xs-4 bg-green text-center\">\r\n                    <em class=\"fa fa-gift fa-2x\"></em>\r\n                </div>\r\n                <div class=\"col-xs-8\">\r\n                    <div class=\"panel-body text-center\">\r\n                        <h4 class=\"mt0\">$838</h4>\r\n                        <p class=\"mb0 text-muted\">Total C0upons</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- END widget-->\r\n    </div>\r\n</div>\r\n<!-- END row-->\r\n<!-- START panel tab-->\r\n<div class=\"row\">\r\n    <div class=\"col-lg-9\">\r\n        <div class=\"form-group mb-xl\">\r\n            <input class=\"form-control mb\" type=\"text\" placeholder=\"Search products, products, etc.\" />\r\n        </div>\r\n        <div class=\"panel\">\r\n                \r\n            <tabset class=\"bg-white p0\" [justified]=\"true\">\r\n                \r\n                <tab>\r\n                    <ng-template tabHeading>\r\n                        <em class=\"fa fa-money fa-fw\"></em>Transactions Panel\r\n                    </ng-template>\r\n                    <div>\r\n                        <!-- START table responsive-->\r\n                        <div class=\"table-responsive\">\r\n                            <table class=\"table table-bordered table-hover table-striped\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>Order #</th>\r\n                                        <th>Order Date</th>\r\n                                        <th>Order Time</th>\r\n                                        <th>Amount (USD)</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <td>3326</td>\r\n                                        <td>10/21/2013</td>\r\n                                        <td>3:29 PM</td>\r\n                                        <td>$321.33</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>3325</td>\r\n                                        <td>10/21/2013</td>\r\n                                        <td>3:20 PM</td>\r\n                                        <td>$234.34</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>3324</td>\r\n                                        <td>10/21/2013</td>\r\n                                        <td>3:03 PM</td>\r\n                                        <td>$724.17</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>3323</td>\r\n                                        <td>10/21/2013</td>\r\n                                        <td>3:00 PM</td>\r\n                                        <td>$23.71</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>3322</td>\r\n                                        <td>10/21/2013</td>\r\n                                        <td>2:49 PM</td>\r\n                                        <td>$8345.23</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>3321</td>\r\n                                        <td>10/21/2013</td>\r\n                                        <td>2:23 PM</td>\r\n                                        <td>$245.12</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>3320</td>\r\n                                        <td>10/21/2013</td>\r\n                                        <td>2:15 PM</td>\r\n                                        <td>$5663.54</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>3319</td>\r\n                                        <td>10/21/2013</td>\r\n                                        <td>2:13 PM</td>\r\n                                        <td>$943.45</td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                        <!-- END table responsive-->\r\n                        <div class=\"panel-footer text-right\"><a class=\"btn btn-default btn-sm\" href=\"#\">View All Transactions</a>\r\n                        </div>\r\n                    </div>\r\n                </tab>\r\n            </tabset>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-lg-3\">\r\n        <h3 class=\"m0 pb-lg\">Search Orders</h3>\r\n        <!-- <div class=\"form-group mb-xl\">\r\n            <label class=\"control-label mb\">by Text</label>\r\n            <br/>\r\n            <ng-select [allowClear]=\"true\" [items]=\"items\" placeholder=\"Nothing selected\"></ng-select>\r\n        </div> -->\r\n        <div class=\"form-group mb-xl\">\r\n            <label class=\"control-label mb\">From Date</label>\r\n            <br/>\r\n            <p class=\"input-group\">\r\n                <input class=\"form-control\" type=\"date\" />\r\n                <span class=\"input-group-btn\">\r\n                <button class=\"btn btn-default\" type=\"button\">\r\n                    <em class=\"fa fa-calendar\"></em>\r\n                </button>\r\n            </span>\r\n            </p>\r\n        </div>\r\n        <div class=\"form-group mb-xl\">\r\n            <label class=\"control-label mb\">To Date</label>\r\n            <br/>\r\n            <p class=\"input-group\">\r\n                <input class=\"form-control\" type=\"date\" />\r\n                <span class=\"input-group-btn\">\r\n                <button class=\"btn btn-default\" type=\"button\">\r\n                    <em class=\"fa fa-calendar\"></em>\r\n                </button>\r\n            </span>\r\n            </p>\r\n        </div>\r\n        <!-- <div class=\"form-group mb-xl\">\r\n            <label class=\"control-label mb\">by Date</label>\r\n            <br/>\r\n            <p class=\"input-group\">\r\n                <input class=\"form-control\" type=\"date\" />\r\n                <span class=\"input-group-btn\">\r\n                <button class=\"btn btn-default\" type=\"button\">\r\n                    <em class=\"fa fa-calendar\"></em>\r\n                </button>\r\n            </span>\r\n            </p>\r\n        </div> -->\r\n        <div class=\"form-group mb-xl\">\r\n          <label class=\"control-label mb\">Order no:</label>\r\n          <br>\r\n          <input type=\"text\" class=\"slider slider-lg form-control\">\r\n        </div>\r\n        <button class=\"btn btn-default btn-lg\">Apply</button>\r\n    </div>\r\n</div>\r\n<!-- END panel tab-->\r\n"

/***/ }),

/***/ 1008:
/***/ (function(module, exports) {

module.exports = "<tabset [justified]=\"true\">\r\n    <tab>\r\n        <ng-template tabHeading>\r\n            <em class=\"icon-equalizer fa-lg\"></em>\r\n        </ng-template>\r\n        <!-- <h3 class=\"text-center text-thin\">Settings</h3> -->\r\n        <!-- Theme Settings -->\r\n        <div class=\"p\">\r\n            <h4 class=\"text-muted text-thin\">Themes</h4>\r\n            <p class=\"text-muted text-thin\">Select your theme :</p>\r\n            <div class=\"table-grid mb\">\r\n                <div class=\"col mb\">\r\n                    <div class=\"setting-color\">\r\n                        <label>\r\n                          <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"A\" />\r\n                          <span class=\"icon-check\"></span>\r\n                          <span class=\"split\">\r\n                <span class=\"color bg-info\"></span>\r\n                          <span class=\"color bg-info-light\"></span>\r\n                          </span>\r\n                          <span class=\"color bg-white\"></span>\r\n                      </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col mb\">\r\n                    <div class=\"setting-color\">\r\n                        <label>\r\n                          <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"B\" />\r\n                          <span class=\"icon-check\"></span>\r\n                          <span class=\"split\">\r\n                <span class=\"color bg-green\"></span>\r\n                          <span class=\"color bg-green-light\"></span>\r\n                          </span>\r\n                          <span class=\"color bg-white\"></span>\r\n                      </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col mb\">\r\n                    <div class=\"setting-color\">\r\n                        <label>\r\n                          <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"C\" />\r\n                          <span class=\"icon-check\"></span>\r\n                          <span class=\"split\">\r\n                <span class=\"color bg-purple\"></span>\r\n                          <span class=\"color bg-purple-light\"></span>\r\n                          </span>\r\n                          <span class=\"color bg-white\"></span>\r\n                      </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col mb\">\r\n                    <div class=\"setting-color\">\r\n                        <label>\r\n                          <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"D\" />\r\n                          <span class=\"icon-check\"></span>\r\n                          <span class=\"split\">\r\n                <span class=\"color bg-danger\"></span>\r\n                          <span class=\"color bg-danger-light\"></span>\r\n                          </span>\r\n                          <span class=\"color bg-white\"></span>\r\n                      </label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"table-grid mb\">\r\n                <div class=\"col mb\">\r\n                    <div class=\"setting-color\">\r\n                        <label>\r\n                          <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"E\" />\r\n                          <span class=\"icon-check\"></span>\r\n                          <span class=\"split\">\r\n                <span class=\"color bg-info-dark\"></span>\r\n                          <span class=\"color bg-info\"></span>\r\n                          </span>\r\n                          <span class=\"color bg-gray-dark\"></span>\r\n                      </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col mb\">\r\n                    <div class=\"setting-color\">\r\n                        <label>\r\n                          <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"F\" />\r\n                          <span class=\"icon-check\"></span>\r\n                          <span class=\"split\">\r\n                <span class=\"color bg-green-dark\"></span>\r\n                          <span class=\"color bg-green\"></span>\r\n                          </span>\r\n                          <span class=\"color bg-gray-dark\"></span>\r\n                      </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col mb\">\r\n                    <div class=\"setting-color\">\r\n                        <label>\r\n                          <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"G\" />\r\n                          <span class=\"icon-check\"></span>\r\n                          <span class=\"split\">\r\n                <span class=\"color bg-purple-dark\"></span>\r\n                          <span class=\"color bg-purple\"></span>\r\n                          </span>\r\n                          <span class=\"color bg-gray-dark\"></span>\r\n                      </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col mb\">\r\n                    <div class=\"setting-color\">\r\n                        <label>\r\n                          <input type=\"radio\" name=\"setting-theme\" [(ngModel)]=\"currentTheme\" (ngModelChange)=\"setTheme()\" value=\"H\" />\r\n                          <span class=\"icon-check\"></span>\r\n                          <span class=\"split\">\r\n                <span class=\"color bg-danger-dark\"></span>\r\n                          <span class=\"color bg-danger\"></span>\r\n                          </span>\r\n                          <span class=\"color bg-gray-dark\"></span>\r\n                      </label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </tab>\r\n</tabset>\r\n<tabset [justified]=\"true\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                    <h4 class=\"text-muted text-thin\">Logo</h4>\r\n                </div>\r\n                <hr>\r\n                <div class=\"panel-body\">\r\n                    <p class=\"text-muted text-thin\">*Note: Please upload Logo of width 100px and height 40px.</p>\r\n                    <h4 class=\"text-muted text-thin\">Select file : </h4>\r\n                    <input filestyle=\"\" type=\"file\" data-button-text=\"Single\" data-class-button=\"btn btn-default\" data-classinput=\"form-control inline\" nv-file-select=\"\" uploader=\"form.uploader\" class=\"form-control\" id=\"filestyle-1\" tabindex=\"-1\" style=\"position: absolute; clip: rect(0px 0px 0px 0px);\"\r\n                        (change)=\"logoUploadBase64($event)\">\r\n                    <div class=\"bootstrap-filestyle input-group\">\r\n                        <input type=\"text\" class=\"form-control \" placeholder=\"\" disabled=\"\">\r\n                        <span class=\"group-span-filestyle input-group-btn\" tabindex=\"0\">\r\n                    <label for=\"filestyle-1\" class=\"btn btn-default \"><span class=\"icon-span-filestyle glyphicon glyphicon-folder-open\"></span>\r\n                        <span class=\"buttonText\">Upload Logo</span>\r\n                        </label>\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"result\" *ngIf='image.src'>\r\n                        <h4 class=\"text-muted text-thin\">Logo Preview</h4><br>\r\n                        <div class=\"text-center\">\r\n                            <img src={{image.src}} height=\"40px\" width=\"100px\"><br>\r\n                            <button class=\"btn btn-primary pull-right\" (click)='saveLogo()'>Save Logo</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                    <h4 class=\"text-muted text-thin\">Logo Icon</h4>\r\n                </div>\r\n                <hr>\r\n                <div class=\"panel-body\">\r\n                    <p class=\"text-muted text-thin\">*Note: Please upload Logo of width 42px and height 44px.</p>\r\n                    <h4 class=\"text-muted text-thin\">Select file : </h4>\r\n                    <input filestyle=\"\" type=\"file\" data-button-text=\"Single\" data-class-button=\"btn btn-default\" data-classinput=\"form-control inline\" nv-file-select=\"\" uploader=\"form.uploader\" class=\"form-control\" id=\"filestyle-2\" tabindex=\"-1\" style=\"position: absolute; clip: rect(0px 0px 0px 0px);\"\r\n                        (change)=\"IconUploadBase64($event)\">\r\n                    <div class=\"bootstrap-filestyle input-group\">\r\n                        <input type=\"text\" class=\"form-control \" placeholder=\"\" disabled=\"\">\r\n                        <span class=\"group-span-filestyle input-group-btn\" tabindex=\"0\">\r\n                                <label for=\"filestyle-2\" class=\"btn btn-default \"><span class=\"icon-span-filestyle glyphicon glyphicon-folder-open\"></span>\r\n                        <span class=\"buttonText\">Upload Logo Icon</span>\r\n                        </label>\r\n                        </span>\r\n                    </div>\r\n                    <div class=\"result\" *ngIf='icon.src'>\r\n                        <h4 class=\"text-muted text-thin\">Logo Icon Preview</h4><br>\r\n                        <div class=\"text-center\">\r\n                            <img src={{icon.src}} height=\"42px\" width=\"44px\"><br>\r\n                            <button class=\"btn btn-primary pull-right\" (click)='saveLogoIcon()'>Save Logo</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</tabset>\r\n<tabset [justified]=\"true\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                    <h4 class=\"text-muted text-thin\">App name</h4>\r\n                </div>\r\n                <hr>\r\n                <div class=\"panel-body\">\r\n                    <form novalidate #appNameForm='ngForm'>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"appName\">App name:</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"usr\" name=\"name\" placeholder=\"Please enter our app name here\" [(ngModel)]='data.name' #name='ngModel' minlength=\"3\" required>\r\n                            <div *ngIf=\"name.errors && (name.dirty || name.touched)\" class=\"error\">\r\n                                <span class=\"text-danger\" [hidden]=\"!name.errors.required\">Please Enter the app name </span>\r\n                                <span class=\"text-danger\" [hidden]=\"!name.errors.minlength\">app name should be more than 3 characters.</span>\r\n                            </div>\r\n                        </div>\r\n                        <button class=\"btn btn-primary pull-right\" [disabled]=\"!appNameForm.form.valid\" (click)='saveAppName(data); appNameForm.reset()'>Save</button>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</tabset>"

/***/ }),

/***/ 1009:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-heading\">\n  Users List\n  <!-- <small>Native and not wrapped angular2 based data-tables</small> -->\n</div>\n<!-- <alert [type]=\"'info'\">None of this examples are based on the official jQuery-Datatables</alert> -->\n<!-- <h4 class=\"page-header\">ng2 Table\n  <small>Simple table extension with sorting, filtering, paging... for Angular2 apps by ValorSoftware</small>\n</h4> -->\n<div class=\"mb-lg clearfix\">\n  <div class=\"pull-let wd-md\">\n      <input *ngIf=\"config.filtering\" placeholder=\"Filter all columns\" [ngTableFiltering]=\"config.filtering\" class=\"form-control\" (tableChanged)=\"onChangeTable(config)\" />\n  </div>\n</div>\n<div class=\"panel panel-default\">\n  <ng-table [config]=\"config\" (tableChanged)=\"onChangeTable(config)\" (cellClicked)=\"onCellClick($event)\" [rows]=\"rows\" [columns]=\"columns\">\n  </ng-table>\n</div>\n<div class=\"text-right\">\n  <pagination *ngIf=\"config.paging\" class=\"pagination-sm\" [(ngModel)]=\"page\" [totalItems]=\"length\" [itemsPerPage]=\"itemsPerPage\" [maxSize]=\"maxSize\" [boundaryLinks]=\"true\" [rotate]=\"false\" (pageChanged)=\"onChangeTable(config, $event)\" (numPages)=\"numPages = $event\">\n  </pagination>\n</div>\n"

/***/ }),

/***/ 1010:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <!-- top navbar-->\r\n    <app-top-navbar class=\"topnavbar-wrapper\"></app-top-navbar>\r\n    <!-- sidebar-->\r\n    <app-side-navbar class=\"aside\" (openModal)=\"showModal($event)\"></app-side-navbar>\r\n    <!-- offsidebar-->\r\n    <!--<app-offsidebar class=\"offsidebar\"></app-offsidebar>-->\r\n    <!-- Main section-->\r\n    <section>\r\n        <!-- Page content-->\r\n        <div class=\"content-wrapper\">\r\n            <div bsModal #lgModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n                <div class=\"modal-dialog modal-lg\">\r\n                    <div class=\"modal-content\">\r\n                        <div class=\"modal-header\">\r\n                            <h4 class=\"modal-title pull-left\">Large modal</h4>\r\n                            <button type=\"button\" class=\"close pull-right\" (click)=\"lgModal.hide()\" aria-label=\"Close\">\r\n                                <span aria-hidden=\"true\">&times;</span>\r\n                            </button>\r\n                        </div>\r\n                        <div class=\"modal-body\">\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </section>\r\n    <!-- Page footer-->\r\n    <!--<footer app-footer></footer>-->\r\n</div>"

/***/ }),

/***/ 1011:
/***/ (function(module, exports) {

module.exports = "<!-- START Sidebar (left)-->\r\n<div class=\"aside-inner\">\r\n    <nav class=\"sidebar\" sidebar-anyclick-close=\"\" [class.show-scrollbar]=\"settings.layout.asideScrollbar\">\r\n\r\n        <!-- START sidebar nav-->\r\n        <ul class=\"nav\">\r\n\r\n            <!-- START user info-->\r\n            <li class=\"has-user-block\">\r\n                <app-userblock (someEvent)=\"test($event)\"></app-userblock>\r\n            </li>\r\n            <!-- END user info-->\r\n\r\n            <li *ngFor='let item of menuItems' [ngClass]=\"{'nav-heading': item.heading}\" [routerLinkActive]=\"['active']\">\r\n                <!-- menu heading -->\r\n                <span *ngIf=\"item.heading\">{{(item.translate | translate) || item.text}}</span>\r\n                <!-- external links -->\r\n                <a *ngIf=\"!item.heading && !item.submenu && item.elink\" [attr.target]=\"item.target\" [attr.href]=\"item.elink\" title=\"{{item.text}}\">\r\n                    <span class=\"pull-right\" *ngIf=\"item.alert\" [ngClass]=\"item.label || 'label label-success'\">{{item.alert}}</span>\r\n                    <em class=\"{{item.icon}}\" *ngIf=\"item.icon\"></em>\r\n                    <span>{{(item.translate | translate) || item.text}}</span>\r\n                </a>\r\n                <!-- single menu item -->\r\n                <a *ngIf=\"!item.heading && !item.submenu && !item.elink\" [routerLink]=\"item.link\" [attr.route]=\"item.link\" title=\"{{item.text}}\" (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\r\n                    <span class=\"pull-right\" *ngIf=\"item.alert\" [ngClass]=\"item.label || 'label label-success'\">{{item.alert}}</span>\r\n                    <em class=\"{{item.icon}}\" *ngIf=\"item.icon\"></em>\r\n                    <span>{{(item.translate | translate) || item.text}}</span>\r\n                </a>\r\n                <!-- has submenu -->\r\n                <a *ngIf=\"!item.heading && item.submenu\" title=\"{{item.text}}\" (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\r\n                    <span class=\"pull-right\" *ngIf=\"item.alert\" [ngClass]=\"item.label || 'label label-success'\">{{item.alert}}</span>\r\n                    <em class=\"{{item.icon}}\" *ngIf=\"item.icon\"></em>\r\n                    <span>{{(item.translate | translate) || item.text}}</span>\r\n                </a>\r\n                <!-- SUBLEVEL -->\r\n                <ul *ngIf=\"item.submenu\" class=\"nav sidebar-subnav\" [routerLinkActive]=\"['opening']\">\r\n                    <li class=\"sidebar-subnav-header\">{{(item.translate | translate) || item.text}}</li>\r\n                    <li *ngFor='let subitem of item.submenu' [routerLinkActive]=\"['active']\">\r\n                        <!-- sublevel: external links -->\r\n                        <a *ngIf=\"!subitem.heading && !subitem.submenu && subitem.elink\" [attr.target]=\"subitem.target\" [attr.href]=\"subitem.elink\" title=\"{{subitem.text}}\">\r\n                            <span class=\"pull-right\" *ngIf=\"subitem.alert\" [ngClass]=\"subitem.label || 'label label-success'\">{{subitem.alert}}</span>\r\n                            <em class=\"{{subitem.icon}}\" *ngIf=\"subitem.icon\"></em>\r\n                            <span>{{(subitem.translate | translate) || subitem.text}}</span>\r\n                        </a>\r\n                        <!-- sublevel: single menu item  -->\r\n                        <a *ngIf=\"!subitem.submenu && !subitem.elink\" [routerLink]=\"subitem.link\" [attr.route]=\"subitem.link\" title=\"{{subitem.text}}\">\r\n                            <span class=\"pull-right\" *ngIf=\"subitem.alert\" [ngClass]=\"subitem.label || 'label label-success'\">{{subitem.alert}}</span>\r\n                            <em class=\"{{subitem.icon}}\" *ngIf=\"subitem.icon\"></em>\r\n                            <span>{{(subitem.translate | translate) || subitem.text}}</span>\r\n                        </a>\r\n                        <!-- sublevel: has submenu -->\r\n                        <a *ngIf=\"subitem.submenu\" title=\"{{subitem.text}}\" (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\r\n                            <span class=\"pull-right\" *ngIf=\"subitem.alert\" [ngClass]=\"subitem.label || 'label label-success'\">{{subitem.alert}}</span>\r\n                            <em class=\"{{subitem.icon}}\" *ngIf=\"subitem.icon\"></em>\r\n                            <span>{{(subitem.translate | translate) || subitem.text}}</span>\r\n                        </a>\r\n                        <!-- SUBLEVEL 2 -->\r\n                        <ul *ngIf=\"subitem.submenu\" class=\"nav sidebar-subnav level2\" [routerLinkActive]=\"['opening']\">\r\n                            <li *ngFor='let subitem2 of subitem.submenu' [routerLinkActive]=\"['active']\">\r\n                                <!-- sublevel 2: single menu item  -->\r\n                                <a *ngIf=\"!subitem2.submenu\" [routerLink]=\"subitem2.link\" [attr.route]=\"subitem2.link\" title=\"{{subitem2.text}}\">\r\n                                    <span class=\"pull-right\" *ngIf=\"subitem2.alert\" [ngClass]=\"subitem2.label || 'label label-success'\">{{subitem2.alert}}</span>\r\n                                    <em class=\"{{subitem2.icon}}\" *ngIf=\"subitem2.icon\"></em>\r\n                                    <span>{{(subitem2.translate | translate) || subitem2.text}}</span>\r\n                                </a>\r\n                                <!-- sublevel2: has submenu -->\r\n                                <a *ngIf=\"subitem2.submenu\" title=\"{{subitem2.text}}\" (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\r\n                                    <span class=\"pull-right\" *ngIf=\"subitem2.alert\" [ngClass]=\"subitem2.label || 'label label-success'\">{{subitem2.alert}}</span>\r\n                                    <em class=\"{{subitem2.icon}}\" *ngIf=\"subitem2.icon\"></em>\r\n                                    <span>{{(subitem2.translate | translate) || subitem2.text}}</span>\r\n                                </a>\r\n                                <!-- SUBLEVEL 3 -->\r\n                                <ul *ngIf=\"subitem2.submenu\" class=\"nav sidebar-subnav level3\" [routerLinkActive]=\"['opening']\">\r\n                                    <li *ngFor='let subitem3 of subitem2.submenu' [routerLinkActive]=\"['active']\">\r\n                                        <!-- sublevel 2: single menu item  -->\r\n                                        <a *ngIf=\"!subitem3.submenu\" [routerLink]=\"subitem3.link\" [attr.route]=\"subitem3.link\" title=\"{{subitem3.text}}\">\r\n                                            <span class=\"pull-right\" *ngIf=\"subitem3.alert\" [ngClass]=\"subitem3.label || 'label label-success'\">{{subitem3.alert}}</span>\r\n                                            <em class=\"{{subitem3.icon}}\" *ngIf=\"subitem3.icon\"></em>\r\n                                            <span>{{(subitem3.translate | translate) || subitem3.text}}</span>\r\n                                        </a>\r\n                                        <!-- sublevel3: has submenu -->\r\n                                        <a *ngIf=\"subitem3.submenu\" title=\"{{subitem3.text}}\" (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\r\n                                            <span class=\"pull-right\" *ngIf=\"subitem3.alert\" [ngClass]=\"subitem3.label || 'label label-success'\">{{subitem3.alert}}</span>\r\n                                            <em class=\"{{subitem3.icon}}\" *ngIf=\"subitem3.icon\"></em>\r\n                                            <span>{{(subitem3.translate | translate) || subitem3.text}}</span>\r\n                                        </a>\r\n                                        <!-- SUBLEVEL 4 -->\r\n                                        <ul *ngIf=\"subitem3.submenu\" class=\"nav sidebar-subnav level3\" [routerLinkActive]=\"['opening']\">\r\n                                            <li *ngFor='let subitem4 of subitem3.submenu' [routerLinkActive]=\"['active']\">\r\n                                                <!-- sublevel 2: single menu item  -->\r\n                                                <a *ngIf=\"!subitem4.submenu\" [routerLink]=\"subitem4.link\" [attr.route]=\"subitem4.link\" title=\"{{subitem4.text}}\">\r\n                                                    <span class=\"pull-right\" *ngIf=\"subitem4.alert\" [ngClass]=\"subitem4.label || 'label label-success'\">{{subitem4.alert}}</span>\r\n                                                    <em class=\"{{subitem4.icon}}\" *ngIf=\"subitem4.icon\"></em>\r\n                                                    <span>{{(subitem4.translate | translate) || subitem4.text}}</span>\r\n                                                </a>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </li>\r\n                                </ul>\r\n                                <li>\r\n                        </ul>\r\n                        <li>\r\n                </ul>\r\n                </li>\r\n\r\n        </ul>\r\n        <!-- END sidebar nav-->\r\n\r\n    </nav>\r\n</div>\r\n<!-- END Sidebar (left)-->"

/***/ }),

/***/ 1012:
/***/ (function(module, exports) {

module.exports = "<div class=\"item user-block\" *ngIf=\"userBlockIsVisible()\">\r\n    <!-- User picture-->\r\n    <div class=\"user-block-picture\">\r\n        <div class=\"user-block-status\">\r\n            <img class=\"img-thumbnail img-circle\" [src]=\"user.picture\" alt=\"Avatar\" />\r\n            <div class=\"circle circle-success circle-lg\"></div>\r\n        </div>\r\n    </div>\r\n    <!-- Name and Job-->\r\n    <div class=\"user-block-info\">\r\n        <span class=\"user-block-name\">Welcome Ashok\r\n            <!--<i class=\"fa fa-pencil-square-o profileEdit\" aria-hidden=\"true\" (click)=\"callParent()\"></i>-->\r\n            </span>\r\n        <span class=\"user-block-role\">Programmer</span>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 1013:
/***/ (function(module, exports) {

module.exports = "<!-- START Search form-->\r\n<form class=\"navbar-form\" role=\"search\" action=\"search.html\" [class.open]=\"visible\" (submit)=\"handleForm()\">\r\n    <div class=\"form-group has-feedback\">\r\n        <input [(ngModel)]=\"term\" name=\"term\" class=\"form-control\" type=\"text\" placeholder=\"{{'header.search.PLACEHOLDER' | translate}}\" />\r\n        <div class=\"fa fa-times form-control-feedback\" (click)=\"closeNavSearch()\"></div>\r\n    </div>\r\n    <button class=\"hidden btn btn-default\" type=\"submit\">Submit</button>\r\n</form>\r\n<!-- END Search form-->\r\n"

/***/ }),

/***/ 1014:
/***/ (function(module, exports) {

module.exports = "<!-- START Top Navbar-->\r\n<nav class=\"navbar topnavbar\" role=\"navigation\">\r\n    <!-- START navbar header-->\r\n    <div class=\"navbar-header\">\r\n        <a class=\"navbar-brand\" [routerLink]=\"'/'\">\r\n            <div class=\"brand-logo\">\r\n                <img class=\"img-responsive\" src=\"{{logo}}\" alt=\"App Logo\"  style=\"height:40px;width:100px;\"/>\r\n            </div>\r\n            <div class=\"brand-logo-collapsed\">\r\n                <img class=\"img-responsive\" src=\"{{logoIcon}}\" alt=\"App Logo\" />\r\n            </div>\r\n        </a>\r\n            <!-- <a class=\"navbar-brand brand\" [routerLink]=\"'/home'\"> -->\r\n                <!--<svg viewbox=\"0 0 220 44\" width=\"220\" height=\"44\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                    <title>EDCO Products, Steel Roofing and Siding</title>\r\n                    <g class=\"logoMark\">\r\n                        <path d=\"M1.4,2.4h38v39.2h-38V2.4z\" fill=\"#fff\"> </path>\r\n                        <path d=\"M0.1,1v42h40.6V1H0.1z M3.5,37.4V8.1l10.3,14.4L3.5,37.4z M15.2,39.7V5.2l12.1,17.6L15.2,39.7z M28.8,37.4 L29,7.8L38.9,23L28.8,37.4z\"\r\n                            fill=\"#c6202c\"> </path>\r\n                    </g>-->\r\n                    <!--<path class=\"logoType\" d=\"M46.092.98h37.793v10.11h-21.43v5.963h20.5V27.18h-20.5v5.716H84.32V43.02H46.092V.98m40.03 0h24.537c12.48 0 21.29 4.1 21.29 21.144 0 15.903-9.48 20.897-21.97 20.897H86.13zm16.734 31.555h4.162c6.063 0 7.43-3.85 7.43-10.833 0-7.23-1.49-10.97-7.48-10.97h-4.1zm68.542 9.517a49.372 49.372 0 0 1-12 1.69c-14.475 0-26.09-7.33-26.09-22.338 0-14.1 12.112-21.145 26.09-21.145a60.752 60.752 0 0 1 11.876 1.31v11.11a28.947 28.947 0 0 0-8.36-1.59c-7.12 0-12.5 3.68-12.5 10.56 0 7.2 4.995 10.89 11.927 10.89a28.078 28.078 0 0 0 9.07-1.655zm24.252 1.69c-15.232 0-24.165-7.405-24.165-21.742 0-14.088 8.945-21.74 24.165-21.74C210.893.257 220 7.91 220 22c0 14.337-9.107 21.742-24.35 21.742m0-10.126c6.62 0 6.808-7.106 6.882-11.616-.074-3.913-.497-11.63-6.883-11.63-6.18 0-6.68 7.704-6.68 11.63 0 4.51.69 11.616 6.68 11.616\">\r\n                    </path>-->\r\n                <!--</svg>-->\r\n                <!-- nayo\r\n            </a> -->\r\n    </div>\r\n    <!-- END navbar header-->\r\n    <!-- START Nav wrapper-->\r\n    <div class=\"nav-wrapper\">\r\n        <!-- START Left navbar-->\r\n        <ul class=\"nav navbar-nav\">\r\n            <li>\r\n        <!-- Button used to collapse the left sidebar. Only visible on tablet and desktops-->\r\n        <a class=\"hidden-xs\" trigger-resize=\"\" (click)=\"toggleCollapsedSideabar()\" *ngIf=\"!isCollapsedText()\">\r\n                    <em class=\"fa fa-navicon\"></em>\r\n                </a>\r\n        <!-- Button to show/hide the sidebar on mobile. Visible on mobile only.-->\r\n        <a class=\"visible-xs sidebar-toggle\" (click)=\"settings.layout.asideToggled =! settings.layout.asideToggled\">\r\n                    <em class=\"fa fa-navicon\"></em>\r\n                </a>\r\n        </li>\r\n        <!-- START User avatar toggle-->\r\n        <!--<li>-->\r\n        <!-- Button used to collapse the left sidebar. Only visible on tablet and desktops-->\r\n        <!--<a (click)=\"toggleUserBlock($event)\">\r\n                    <em class=\"icon-user\"></em>\r\n                </a>\r\n            </li>-->\r\n        <!-- END User avatar toggle-->\r\n        <!-- START lock screen-->\r\n        <!--<li>\r\n                <a  title=\"Lock screen\" [routerLink]=\"'/lock'\">\r\n                    <em class=\"icon-lock\"></em>\r\n                </a>\r\n            </li>-->\r\n        <!-- END lock screen-->\r\n        </ul>\r\n        <!-- END Left navbar-->\r\n        <!-- START Right Navbar-->\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n            <!-- Search icon-->\r\n            <li>\r\n                <a (click)=\"openNavSearch($event)\">\r\n                    <em class=\"icon-magnifier\"></em>\r\n                </a>\r\n            </li>\r\n            <!-- Fullscreen (only desktops)-->\r\n            <!-- <li class=\"visible-lg\">\r\n                <a #fsbutton (click)=\"toggleFullScreen($event)\">\r\n                    <em class=\"fa fa-expand\"></em>\r\n                </a>\r\n            </li> -->\r\n            <!--<li class=\"visible-lg\">\r\n                <a #fsbutton [routerLink]=\"'/login'\">Login\r\n                </a>\r\n            </li>-->\r\n            <!-- START Alert menu-->\r\n            <li class=\"dropdown dropdown-list\" dropdown>\r\n                <a dropdownToggle>\r\n                    <em class=\"icon-bell\"></em>\r\n                    <div class=\"label label-danger\">11</div>\r\n                </a>\r\n                <!-- START Dropdown menu-->\r\n                <ul *dropdownMenu class=\"dropdown-menu animated flipInX\">\r\n                    <li>\r\n                        <!-- START list group-->\r\n                        <div class=\"list-group\">\r\n                            <!-- list item-->\r\n                            <a class=\"list-group-item\">\r\n                                <div class=\"media-box\">\r\n                                    <div class=\"pull-left\">\r\n                                        <em class=\"fa fa-twitter fa-2x text-info\"></em>\r\n                                    </div>\r\n                                    <div class=\"media-box-body clearfix\">\r\n                                        <p class=\"m0\">New followers</p>\r\n                                        <p class=\"m0 text-muted\">\r\n                                            <small>1 new follower</small>\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                            </a>\r\n                            <!-- list item-->\r\n                            <a class=\"list-group-item\">\r\n                                <div class=\"media-box\">\r\n                                    <div class=\"pull-left\">\r\n                                        <em class=\"fa fa-envelope fa-2x text-warning\"></em>\r\n                                    </div>\r\n                                    <div class=\"media-box-body clearfix\">\r\n                                        <p class=\"m0\">New e-mails</p>\r\n                                        <p class=\"m0 text-muted\">\r\n                                            <small>You have 10 new emails</small>\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                            </a>\r\n                            <!-- list item-->\r\n                            <a class=\"list-group-item\">\r\n                                <div class=\"media-box\">\r\n                                    <div class=\"pull-left\">\r\n                                        <em class=\"fa fa-tasks fa-2x text-success\"></em>\r\n                                    </div>\r\n                                    <div class=\"media-box-body clearfix\">\r\n                                        <p class=\"m0\">Pending Tasks</p>\r\n                                        <p class=\"m0 text-muted\">\r\n                                            <small>11 pending task</small>\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                            </a>\r\n                            <!-- last list item-->\r\n                            <a class=\"list-group-item\">\r\n                                <small translate=\"topbar.notification.MORE\">More notifications</small>\r\n                                <span class=\"label label-danger pull-right\">14</span>\r\n                            </a>\r\n                        </div>\r\n                        <!-- END list group-->\r\n                    </li>\r\n                </ul>\r\n                <!-- END Dropdown menu-->\r\n            </li>\r\n            <!-- END Alert menu-->\r\n            <!-- START Offsidebar button-->\r\n            <!--<li>\r\n                <a (click)=\"toggleOffsidebar()\">\r\n                    <em class=\"icon-notebook\"></em>\r\n                </a>\r\n            </li>-->\r\n            <!-- END Offsidebar menu-->\r\n        </ul>\r\n        <!-- END Right Navbar-->\r\n    </div>\r\n    <!-- END Nav wrapper-->\r\n\r\n    <app-navsearch [visible]=\"getNavSearchVisible()\" (onclose)=\"setNavSearchVisible(false)\"></app-navsearch>\r\n\r\n</nav>\r\n<!-- END Top Navbar-->"

/***/ }),

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__ = __webpack_require__(990);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_img_cropper__ = __webpack_require__(991);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__ = __webpack_require__(987);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_table_ng2_table__ = __webpack_require__(1001);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_table_ng2_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_table_ng2_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_routing_module__ = __webpack_require__(941);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_component__ = __webpack_require__(918);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__(939);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__top_navbar_top_navbar_component__ = __webpack_require__(946);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__top_navbar_navsearch_navsearch_component__ = __webpack_require__(945);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__side_navbar_side_navbar_component__ = __webpack_require__(943);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__side_navbar_userblock_userblock_component__ = __webpack_require__(944);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_theme_settings_theme_settings_component__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__core_menu_menu_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__side_navbar_userblock_userblock_service__ = __webpack_require__(919);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__menu__ = __webpack_require__(942);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_sales_reports_sales_reports_component__ = __webpack_require__(915);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_activity_reports_activity_reports_component__ = __webpack_require__(911);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_dasboard_dasboard_component__ = __webpack_require__(912);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_home_page_home_page_component__ = __webpack_require__(914);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_featured_products_featured_products_component__ = __webpack_require__(913);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_users_list_users_list_component__ = __webpack_require__(917);
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
        menuService.addMenu(__WEBPACK_IMPORTED_MODULE_18__menu__["a" /* menu */]);
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_8__dashboard_routing_module__["a" /* DashboardRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_4_ng2_img_cropper__["a" /* ImageCropperModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_charts_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_7_ng2_table_ng2_table__["Ng2TableModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_15__components_theme_settings_theme_settings_component__["a" /* ThemeSettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__top_navbar_top_navbar_component__["a" /* TopNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_13__side_navbar_side_navbar_component__["a" /* SideNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_12__top_navbar_navsearch_navsearch_component__["a" /* NavsearchComponent */],
            __WEBPACK_IMPORTED_MODULE_14__side_navbar_userblock_userblock_component__["a" /* UserblockComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_sales_reports_sales_reports_component__["a" /* SalesReportsComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_activity_reports_activity_reports_component__["a" /* ActivityReportsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_dasboard_dasboard_component__["a" /* DasboardComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_home_page_home_page_component__["a" /* HomePageComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_featured_products_featured_products_component__["a" /* FeaturedProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_users_list_users_list_component__["a" /* UsersListComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_17__side_navbar_userblock_userblock_service__["a" /* UserblockService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_16__core_menu_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_16__core_menu_menu_service__["a" /* MenuService */]) === "function" && _a || Object])
], DashboardModule);

var _a;
//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 902:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
// import {setProperty} from 'angular2/ts/src/core/forms/directives/shared';
function setProperty(renderer, elementRef, propName, propValue) {
    renderer.setElementProperty(elementRef, propName, propValue);
}
var NgTableFilteringDirective = (function () {
    function NgTableFilteringDirective(element, renderer) {
        this.ngTableFiltering = {
            filterString: '',
            columnName: 'name'
        };
        this.tableChanged = new core_1.EventEmitter();
        this.element = element;
        this.renderer = renderer;
        // Set default value for filter
        setProperty(this.renderer, this.element, 'value', this.ngTableFiltering.filterString);
    }
    Object.defineProperty(NgTableFilteringDirective.prototype, "config", {
        get: function () {
            return this.ngTableFiltering;
        },
        set: function (value) {
            this.ngTableFiltering = value;
        },
        enumerable: true,
        configurable: true
    });
    NgTableFilteringDirective.prototype.onChangeFilter = function (event) {
        this.ngTableFiltering.filterString = event;
        this.tableChanged.emit({ filtering: this.ngTableFiltering });
    };
    NgTableFilteringDirective.decorators = [
        { type: core_1.Directive, args: [{ selector: '[ngTableFiltering]' },] },
    ];
    /** @nocollapse */
    NgTableFilteringDirective.ctorParameters = [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
    ];
    NgTableFilteringDirective.propDecorators = {
        'ngTableFiltering': [{ type: core_1.Input },],
        'tableChanged': [{ type: core_1.Output },],
        'config': [{ type: core_1.Input },],
        'onChangeFilter': [{ type: core_1.HostListener, args: ['input', ['$event.target.value'],] },],
    };
    return NgTableFilteringDirective;
}());
exports.NgTableFilteringDirective = NgTableFilteringDirective;


/***/ }),

/***/ 903:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var NgTablePagingDirective = (function () {
    function NgTablePagingDirective() {
        this.ngTablePaging = true;
        this.tableChanged = new core_1.EventEmitter();
    }
    Object.defineProperty(NgTablePagingDirective.prototype, "config", {
        get: function () {
            return this.ngTablePaging;
        },
        set: function (value) {
            this.ngTablePaging = value;
        },
        enumerable: true,
        configurable: true
    });
    NgTablePagingDirective.prototype.onChangePage = function (event) {
        // Object.assign(this.config, event);
        if (this.ngTablePaging) {
            this.tableChanged.emit({ paging: event });
        }
    };
    NgTablePagingDirective.decorators = [
        { type: core_1.Directive, args: [{ selector: '[ngTablePaging]' },] },
    ];
    /** @nocollapse */
    NgTablePagingDirective.ctorParameters = [];
    NgTablePagingDirective.propDecorators = {
        'ngTablePaging': [{ type: core_1.Input },],
        'tableChanged': [{ type: core_1.Output },],
        'config': [{ type: core_1.Input },],
        'onChangePage': [{ type: core_1.HostListener, args: ['pagechanged', ['$event'],] },],
    };
    return NgTablePagingDirective;
}());
exports.NgTablePagingDirective = NgTablePagingDirective;


/***/ }),

/***/ 904:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var NgTableSortingDirective = (function () {
    function NgTableSortingDirective() {
        this.sortChanged = new core_1.EventEmitter();
    }
    Object.defineProperty(NgTableSortingDirective.prototype, "config", {
        get: function () {
            return this.ngTableSorting;
        },
        set: function (value) {
            this.ngTableSorting = value;
        },
        enumerable: true,
        configurable: true
    });
    NgTableSortingDirective.prototype.onToggleSort = function (event) {
        if (event) {
            event.preventDefault();
        }
        if (this.ngTableSorting && this.column && this.column.sort !== false) {
            switch (this.column.sort) {
                case 'asc':
                    this.column.sort = 'desc';
                    break;
                case 'desc':
                    this.column.sort = '';
                    break;
                default:
                    this.column.sort = 'asc';
                    break;
            }
            this.sortChanged.emit(this.column);
        }
    };
    NgTableSortingDirective.decorators = [
        { type: core_1.Directive, args: [{ selector: '[ngTableSorting]' },] },
    ];
    /** @nocollapse */
    NgTableSortingDirective.ctorParameters = [];
    NgTableSortingDirective.propDecorators = {
        'ngTableSorting': [{ type: core_1.Input },],
        'column': [{ type: core_1.Input },],
        'sortChanged': [{ type: core_1.Output },],
        'config': [{ type: core_1.Input },],
        'onToggleSort': [{ type: core_1.HostListener, args: ['click', ['$event'],] },],
    };
    return NgTableSortingDirective;
}());
exports.NgTableSortingDirective = NgTableSortingDirective;


/***/ }),

/***/ 905:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(41);
var NgTableComponent = (function () {
    function NgTableComponent(sanitizer) {
        this.sanitizer = sanitizer;
        // Table values
        this.rows = [];
        // Outputs (Events)
        this.tableChanged = new core_1.EventEmitter();
        this.cellClicked = new core_1.EventEmitter();
        this.showFilterRow = false;
        this._columns = [];
        this._config = {};
    }
    Object.defineProperty(NgTableComponent.prototype, "config", {
        get: function () {
            return this._config;
        },
        set: function (conf) {
            if (!conf.className) {
                conf.className = 'table-striped table-bordered';
            }
            if (conf.className instanceof Array) {
                conf.className = conf.className.join(' ');
            }
            this._config = conf;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgTableComponent.prototype, "columns", {
        get: function () {
            return this._columns;
        },
        set: function (values) {
            var _this = this;
            values.forEach(function (value) {
                if (value.filtering) {
                    _this.showFilterRow = true;
                }
                if (value.className && value.className instanceof Array) {
                    value.className = value.className.join(' ');
                }
                var column = _this._columns.find(function (col) { return col.name === value.name; });
                if (column) {
                    Object.assign(column, value);
                }
                if (!column) {
                    _this._columns.push(value);
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    NgTableComponent.prototype.sanitize = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    Object.defineProperty(NgTableComponent.prototype, "configColumns", {
        get: function () {
            var sortColumns = [];
            this.columns.forEach(function (column) {
                if (column.sort) {
                    sortColumns.push(column);
                }
            });
            return { columns: sortColumns };
        },
        enumerable: true,
        configurable: true
    });
    NgTableComponent.prototype.onChangeTable = function (column) {
        this._columns.forEach(function (col) {
            if (col.name !== column.name && col.sort !== false) {
                col.sort = '';
            }
        });
        this.tableChanged.emit({ sorting: this.configColumns });
    };
    NgTableComponent.prototype.getData = function (row, propertyName) {
        return propertyName.split('.').reduce(function (prev, curr) { return prev[curr]; }, row);
    };
    NgTableComponent.prototype.cellClick = function (row, column) {
        this.cellClicked.emit({ row: row, column: column });
    };
    NgTableComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ng-table',
                    template: "\n    <table class=\"table dataTable\" ngClass=\"{{config.className || ''}}\"\n           role=\"grid\" style=\"width: 100%;\">\n      <thead>\n        <tr role=\"row\">\n          <th *ngFor=\"let column of columns\" [ngTableSorting]=\"config\" [column]=\"column\" \n              (sortChanged)=\"onChangeTable($event)\" ngClass=\"{{column.className || ''}}\">\n            {{column.title}}\n            <i *ngIf=\"config && column.sort\" class=\"pull-right fa\"\n              [ngClass]=\"{'fa-chevron-down': column.sort === 'desc', 'fa-chevron-up': column.sort === 'asc'}\"></i>\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n      <tr *ngIf=\"showFilterRow\">\n        <td *ngFor=\"let column of columns\">\n          <input *ngIf=\"column.filtering\" placeholder=\"{{column.filtering.placeholder}}\"\n                 [ngTableFiltering]=\"column.filtering\"\n                 class=\"form-control\"\n                 style=\"width: auto;\"\n                 (tableChanged)=\"onChangeTable(config)\"/>\n        </td>\n      </tr>\n        <tr *ngFor=\"let row of rows\">\n          <td (click)=\"cellClick(row, column.name)\" *ngFor=\"let column of columns\" [innerHtml]=\"sanitize(getData(row, column.name))\"></td>\n        </tr>\n      </tbody>\n    </table>\n  "
                },] },
    ];
    /** @nocollapse */
    NgTableComponent.ctorParameters = [
        { type: platform_browser_1.DomSanitizer, },
    ];
    NgTableComponent.propDecorators = {
        'rows': [{ type: core_1.Input },],
        'config': [{ type: core_1.Input },],
        'tableChanged': [{ type: core_1.Output },],
        'cellClicked': [{ type: core_1.Output },],
        'columns': [{ type: core_1.Input },],
    };
    return NgTableComponent;
}());
exports.NgTableComponent = NgTableComponent;


/***/ }),

/***/ 906:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isElement(node) {
    return !!(node && (node.nodeName || node.prop && node.attr && node.find));
}
var FileLikeObject = (function () {
    function FileLikeObject(fileOrInput) {
        var isInput = isElement(fileOrInput);
        var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
        var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
        var method = '_createFrom' + postfix;
        this[method](fakePathOrObject);
    }
    FileLikeObject.prototype._createFromFakePath = function (path) {
        this.lastModifiedDate = void 0;
        this.size = void 0;
        this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
        this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
    };
    FileLikeObject.prototype._createFromObject = function (object) {
        // this.lastModifiedDate = copy(object.lastModifiedDate);
        this.size = object.size;
        this.type = object.type;
        this.name = object.name;
    };
    return FileLikeObject;
}());
exports.FileLikeObject = FileLikeObject;


/***/ }),

/***/ 907:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var file_like_object_class_1 = __webpack_require__(906);
var file_item_class_1 = __webpack_require__(931);
var file_type_class_1 = __webpack_require__(988);
function isFile(value) {
    return (File && value instanceof File);
}
var FileUploader = (function () {
    function FileUploader(options) {
        this.isUploading = false;
        this.queue = [];
        this.progress = 0;
        this._nextIndex = 0;
        this.options = {
            autoUpload: false,
            isHTML5: true,
            filters: [],
            removeAfterUpload: false,
            disableMultipart: false
        };
        this.setOptions(options);
    }
    FileUploader.prototype.setOptions = function (options) {
        this.options = Object.assign(this.options, options);
        this.authToken = options.authToken;
        this.authTokenHeader = options.authTokenHeader || 'Authorization';
        this.autoUpload = options.autoUpload;
        this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
        if (this.options.maxFileSize) {
            this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
        }
        if (this.options.allowedFileType) {
            this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
        }
        if (this.options.allowedMimeType) {
            this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
        }
        for (var i = 0; i < this.queue.length; i++) {
            this.queue[i].url = this.options.url;
        }
        // this.options.filters.unshift({name: 'folder', fn: this._folderFilter});
    };
    FileUploader.prototype.addToQueue = function (files, options, filters) {
        var _this = this;
        var list = [];
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            list.push(file);
        }
        var arrayOfFilters = this._getFilters(filters);
        var count = this.queue.length;
        var addedFileItems = [];
        list.map(function (some) {
            if (!options) {
                options = _this.options;
            }
            var temp = new file_like_object_class_1.FileLikeObject(some);
            if (_this._isValidFile(temp, arrayOfFilters, options)) {
                var fileItem = new file_item_class_1.FileItem(_this, some, options);
                addedFileItems.push(fileItem);
                _this.queue.push(fileItem);
                _this._onAfterAddingFile(fileItem);
            }
            else {
                var filter = arrayOfFilters[_this._failFilterIndex];
                _this._onWhenAddingFileFailed(temp, filter, options);
            }
        });
        if (this.queue.length !== count) {
            this._onAfterAddingAll(addedFileItems);
            this.progress = this._getTotalProgress();
        }
        this._render();
        if (this.options.autoUpload) {
            this.uploadAll();
        }
    };
    FileUploader.prototype.removeFromQueue = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        if (item.isUploading) {
            item.cancel();
        }
        this.queue.splice(index, 1);
        this.progress = this._getTotalProgress();
    };
    FileUploader.prototype.clearQueue = function () {
        while (this.queue.length) {
            this.queue[0].remove();
        }
        this.progress = 0;
    };
    FileUploader.prototype.uploadItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
        item._prepareToUploading();
        if (this.isUploading) {
            return;
        }
        this.isUploading = true;
        this[transport](item);
    };
    FileUploader.prototype.cancelItem = function (value) {
        var index = this.getIndexOfItem(value);
        var item = this.queue[index];
        var prop = this.options.isHTML5 ? item._xhr : item._form;
        if (item && item.isUploading) {
            prop.abort();
        }
    };
    FileUploader.prototype.uploadAll = function () {
        var items = this.getNotUploadedItems().filter(function (item) { return !item.isUploading; });
        if (!items.length) {
            return;
        }
        items.map(function (item) { return item._prepareToUploading(); });
        items[0].upload();
    };
    FileUploader.prototype.cancelAll = function () {
        var items = this.getNotUploadedItems();
        items.map(function (item) { return item.cancel(); });
    };
    FileUploader.prototype.isFile = function (value) {
        return isFile(value);
    };
    FileUploader.prototype.isFileLikeObject = function (value) {
        return value instanceof file_like_object_class_1.FileLikeObject;
    };
    FileUploader.prototype.getIndexOfItem = function (value) {
        return typeof value === 'number' ? value : this.queue.indexOf(value);
    };
    FileUploader.prototype.getNotUploadedItems = function () {
        return this.queue.filter(function (item) { return !item.isUploaded; });
    };
    FileUploader.prototype.getReadyItems = function () {
        return this.queue
            .filter(function (item) { return (item.isReady && !item.isUploading); })
            .sort(function (item1, item2) { return item1.index - item2.index; });
    };
    FileUploader.prototype.destroy = function () {
        return void 0;
        /*forEach(this._directives, (key) => {
         forEach(this._directives[key], (object) => {
         object.destroy();
         });
         });*/
    };
    FileUploader.prototype.onAfterAddingAll = function (fileItems) {
        return { fileItems: fileItems };
    };
    FileUploader.prototype.onBuildItemForm = function (fileItem, form) {
        return { fileItem: fileItem, form: form };
    };
    FileUploader.prototype.onAfterAddingFile = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onWhenAddingFileFailed = function (item, filter, options) {
        return { item: item, filter: filter, options: options };
    };
    FileUploader.prototype.onBeforeUploadItem = function (fileItem) {
        return { fileItem: fileItem };
    };
    FileUploader.prototype.onProgressItem = function (fileItem, progress) {
        return { fileItem: fileItem, progress: progress };
    };
    FileUploader.prototype.onProgressAll = function (progress) {
        return { progress: progress };
    };
    FileUploader.prototype.onSuccessItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onErrorItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCancelItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteItem = function (item, response, status, headers) {
        return { item: item, response: response, status: status, headers: headers };
    };
    FileUploader.prototype.onCompleteAll = function () {
        return void 0;
    };
    FileUploader.prototype._mimeTypeFilter = function (item) {
        return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
    };
    FileUploader.prototype._fileSizeFilter = function (item) {
        return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
    };
    FileUploader.prototype._fileTypeFilter = function (item) {
        return !(this.options.allowedFileType &&
            this.options.allowedFileType.indexOf(file_type_class_1.FileType.getMimeClass(item)) === -1);
    };
    FileUploader.prototype._onErrorItem = function (item, response, status, headers) {
        item._onError(response, status, headers);
        this.onErrorItem(item, response, status, headers);
    };
    FileUploader.prototype._onCompleteItem = function (item, response, status, headers) {
        item._onComplete(response, status, headers);
        this.onCompleteItem(item, response, status, headers);
        var nextItem = this.getReadyItems()[0];
        this.isUploading = false;
        if (nextItem) {
            nextItem.upload();
            return;
        }
        this.onCompleteAll();
        this.progress = this._getTotalProgress();
        this._render();
    };
    FileUploader.prototype._headersGetter = function (parsedHeaders) {
        return function (name) {
            if (name) {
                return parsedHeaders[name.toLowerCase()] || void 0;
            }
            return parsedHeaders;
        };
    };
    FileUploader.prototype._xhrTransport = function (item) {
        var _this = this;
        var xhr = item._xhr = new XMLHttpRequest();
        var sendable;
        this._onBeforeUploadItem(item);
        // todo
        /*item.formData.map(obj => {
         obj.map((value, key) => {
         form.append(key, value);
         });
         });*/
        if (typeof item._file.size !== 'number') {
            throw new TypeError('The file specified is no longer valid');
        }
        if (!this.options.disableMultipart) {
            sendable = new FormData();
            this._onBuildItemForm(item, sendable);
            sendable.append(item.alias, item._file, item.file.name);
            if (this.options.additionalParameter !== undefined) {
                Object.keys(this.options.additionalParameter).forEach(function (key) {
                    sendable.append(key, _this.options.additionalParameter[key]);
                });
            }
        }
        else {
            sendable = item._file;
        }
        xhr.upload.onprogress = function (event) {
            var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
            _this._onProgressItem(item, progress);
        };
        xhr.onload = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            var gist = _this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
            var method = '_on' + gist + 'Item';
            _this[method](item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onerror = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onErrorItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.onabort = function () {
            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
            var response = _this._transformResponse(xhr.response, headers);
            _this._onCancelItem(item, response, xhr.status, headers);
            _this._onCompleteItem(item, response, xhr.status, headers);
        };
        xhr.open(item.method, item.url, true);
        xhr.withCredentials = item.withCredentials;
        if (this.options.headers) {
            for (var _i = 0, _a = this.options.headers; _i < _a.length; _i++) {
                var header = _a[_i];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (item.headers.length) {
            for (var _b = 0, _c = item.headers; _b < _c.length; _b++) {
                var header = _c[_b];
                xhr.setRequestHeader(header.name, header.value);
            }
        }
        if (this.authToken) {
            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
        }
        xhr.send(sendable);
        this._render();
    };
    FileUploader.prototype._getTotalProgress = function (value) {
        if (value === void 0) { value = 0; }
        if (this.options.removeAfterUpload) {
            return value;
        }
        var notUploaded = this.getNotUploadedItems().length;
        var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
        var ratio = 100 / this.queue.length;
        var current = value * ratio / 100;
        return Math.round(uploaded * ratio + current);
    };
    FileUploader.prototype._getFilters = function (filters) {
        if (!filters) {
            return this.options.filters;
        }
        if (Array.isArray(filters)) {
            return filters;
        }
        if (typeof filters === 'string') {
            var names_1 = filters.match(/[^\s,]+/g);
            return this.options.filters
                .filter(function (filter) { return names_1.indexOf(filter.name) !== -1; });
        }
        return this.options.filters;
    };
    FileUploader.prototype._render = function () {
        return void 0;
        // todo: ?
    };
    // protected _folderFilter(item:FileItem):boolean {
    //   return !!(item.size || item.type);
    // }
    FileUploader.prototype._queueLimitFilter = function () {
        return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
    };
    FileUploader.prototype._isValidFile = function (file, filters, options) {
        var _this = this;
        this._failFilterIndex = -1;
        return !filters.length ? true : filters.every(function (filter) {
            _this._failFilterIndex++;
            return filter.fn.call(_this, file, options);
        });
    };
    FileUploader.prototype._isSuccessCode = function (status) {
        return (status >= 200 && status < 300) || status === 304;
    };
    /* tslint:disable */
    FileUploader.prototype._transformResponse = function (response, headers) {
        // todo: ?
        /*var headersGetter = this._headersGetter(headers);
         forEach($http.defaults.transformResponse, (transformFn) => {
         response = transformFn(response, headersGetter);
         });*/
        return response;
    };
    /* tslint:enable */
    FileUploader.prototype._parseHeaders = function (headers) {
        var parsed = {};
        var key;
        var val;
        var i;
        if (!headers) {
            return parsed;
        }
        headers.split('\n').map(function (line) {
            i = line.indexOf(':');
            key = line.slice(0, i).trim().toLowerCase();
            val = line.slice(i + 1).trim();
            if (key) {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        });
        return parsed;
    };
    /*protected _iframeTransport(item:FileItem) {
     // todo: implement it later
     }*/
    FileUploader.prototype._onWhenAddingFileFailed = function (item, filter, options) {
        this.onWhenAddingFileFailed(item, filter, options);
    };
    FileUploader.prototype._onAfterAddingFile = function (item) {
        this.onAfterAddingFile(item);
    };
    FileUploader.prototype._onAfterAddingAll = function (items) {
        this.onAfterAddingAll(items);
    };
    FileUploader.prototype._onBeforeUploadItem = function (item) {
        item._onBeforeUpload();
        this.onBeforeUploadItem(item);
    };
    FileUploader.prototype._onBuildItemForm = function (item, form) {
        item._onBuildForm(form);
        this.onBuildItemForm(item, form);
    };
    FileUploader.prototype._onProgressItem = function (item, progress) {
        var total = this._getTotalProgress(progress);
        this.progress = total;
        item._onProgress(progress);
        this.onProgressItem(item, progress);
        this.onProgressAll(total);
        this._render();
    };
    /* tslint:disable */
    FileUploader.prototype._onSuccessItem = function (item, response, status, headers) {
        item._onSuccess(response, status, headers);
        this.onSuccessItem(item, response, status, headers);
    };
    /* tslint:enable */
    FileUploader.prototype._onCancelItem = function (item, response, status, headers) {
        item._onCancel(response, status, headers);
        this.onCancelItem(item, response, status, headers);
    };
    return FileUploader;
}());
exports.FileUploader = FileUploader;


/***/ }),

/***/ 908:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cropperDrawSettings__ = __webpack_require__(933);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CropperSettings; });

var CropperSettings = (function () {
    function CropperSettings() {
        this.canvasWidth = 300;
        this.canvasHeight = 300;
        this.dynamicSizing = false;
        this.width = 200;
        this.height = 200;
        this.minWidth = 50;
        this.minHeight = 50;
        this.minWithRelativeToResolution = true;
        this.croppedWidth = 100;
        this.croppedHeight = 100;
        this.cropperDrawSettings = new __WEBPACK_IMPORTED_MODULE_0__cropperDrawSettings__["a" /* CropperDrawSettings */]();
        this.touchRadius = 20;
        this.noFileInput = false;
        this.allowedFilesRegex = /\.(jpe?g|png|gif)$/i;
        this.preserveSize = false;
        this.compressRatio = 1.0;
        this._rounded = false;
        this._keepAspect = true;
        // init
    }
    Object.defineProperty(CropperSettings.prototype, "rounded", {
        get: function () {
            return this._rounded;
        },
        set: function (val) {
            this._rounded = val;
            if (val) {
                this._keepAspect = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CropperSettings.prototype, "keepAspect", {
        get: function () {
            return this._keepAspect;
        },
        set: function (val) {
            if (val === false && this._rounded) {
                throw new Error('Cannot set keep aspect to false on rounded cropper. Ellipsis not supported');
            }
            this._keepAspect = val;
        },
        enumerable: true,
        configurable: true
    });
    return CropperSettings;
}());

//# sourceMappingURL=cropperSettings.js.map

/***/ }),

/***/ 909:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pointPool__ = __webpack_require__(910);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bounds; });

var Bounds = (function () {
    function Bounds(x, y, width, height) {
        if (x === void 0) {
            x = 0;
        }
        if (y === void 0) {
            y = 0;
        }
        if (width === void 0) {
            width = 0;
        }
        if (height === void 0) {
            height = 0;
        }
        this.left = x;
        this.right = x + width;
        this.top = y;
        this.bottom = y + height;
    }
    Object.defineProperty(Bounds.prototype, "width", {
        get: function () {
            return this.right - this.left;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Bounds.prototype, "height", {
        get: function () {
            return this.bottom - this.top;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Bounds.prototype.getCentre = function () {
        var w = this.width;
        var h = this.height;
        return __WEBPACK_IMPORTED_MODULE_0__pointPool__["a" /* PointPool */].instance.borrow(this.left + (w / 2), this.top + (h / 2));
    };
    ;
    return Bounds;
}());

//# sourceMappingURL=bounds.js.map

/***/ }),

/***/ 910:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__point__ = __webpack_require__(938);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointPool; });

var PointPool = (function () {
    function PointPool(initialSize) {
        PointPool._instance = this;
        var prev = this.firstAvailable = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */]();
        for (var i = 1; i < initialSize; i++) {
            var p = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */]();
            prev.next = p;
            prev = p;
        }
    }
    Object.defineProperty(PointPool, "instance", {
        get: function () {
            return PointPool._instance;
        },
        enumerable: true,
        configurable: true
    });
    PointPool.prototype.borrow = function (x, y) {
        if (this.firstAvailable == null) {
            throw 'Pool exhausted';
        }
        this.borrowed++;
        var p = this.firstAvailable;
        this.firstAvailable = p.next;
        p.x = x;
        p.y = y;
        return p;
    };
    ;
    PointPool.prototype.returnPoint = function (p) {
        this.borrowed--;
        p.x = 0;
        p.y = 0;
        p.next = this.firstAvailable;
        this.firstAvailable = p;
    };
    ;
    return PointPool;
}());

//# sourceMappingURL=pointPool.js.map

/***/ }),

/***/ 911:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_colors_colors_service__ = __webpack_require__(450);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityReportsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivityReportsComponent = (function () {
    function ActivityReportsComponent(colors) {
        this.colors = colors;
        this.lat = 33.790807;
        this.lng = -117.835734;
        this.zoom = 14;
        this.scrollwheel = false;
        this.sparkOptions1 = {
            barColor: this.colors.byName('primary'),
            height: 20,
            barWidth: 3,
            barSpacing: 2
        };
        this.sparkOptions2 = {
            type: 'line',
            height: 80,
            width: '100%',
            lineWidth: 2,
            lineColor: '#dddddd',
            spotColor: '#bbbbbb',
            fillColor: '',
            highlightLineColor: '#fff',
            spotRadius: 3,
            resize: true
        };
        this.sparkOptions3 = {
            barColor: '#fff',
            height: 50,
            barWidth: 6,
            barSpacing: 6
        };
        this.sparkOptions4 = {
            barColor: this.colors.byName('primary'),
            height: 30,
            barWidth: 6,
            barSpacing: 6
        };
        // Bar chart
        // -----------------------------------
        this.barData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    data: [this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor()]
                }, {
                    data: [this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor(), this.rFactor()]
                }
            ]
        };
        this.barColors = [
            {
                backgroundColor: this.colors.byName('info'),
                borderColor: this.colors.byName('info'),
                pointHoverBackgroundColor: this.colors.byName('info'),
                pointHoverBorderColor: this.colors.byName('info')
            }, {
                backgroundColor: this.colors.byName('primary'),
                borderColor: this.colors.byName('primary'),
                pointHoverBackgroundColor: this.colors.byName('primary'),
                pointHoverBorderColor: this.colors.byName('primary')
            }
        ];
        this.barOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
    }
    ActivityReportsComponent.prototype.ngOnInit = function () {
    };
    // random values for demo
    ActivityReportsComponent.prototype.rFactor = function () {
        return Math.round(Math.random() * 100);
    };
    ;
    return ActivityReportsComponent;
}());
ActivityReportsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-activity-reports',
        template: __webpack_require__(1002),
        styles: [__webpack_require__(959)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_colors_colors_service__["a" /* ColorsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_colors_colors_service__["a" /* ColorsService */]) === "function" && _a || Object])
], ActivityReportsComponent);

var _a;
//# sourceMappingURL=activity-reports.component.js.map

/***/ }),

/***/ 912:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_colors_colors_service__ = __webpack_require__(450);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DasboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DasboardComponent = (function () {
    function DasboardComponent(colors, http) {
        var _this = this;
        this.colors = colors;
        this.http = http;
        this.easyPiePercent = 70;
        this.pieOptions = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: this.colors.byName('info'),
            trackColor: 'rgba(200,200,200,0.4)',
            scaleColor: false,
            lineWidth: 10,
            lineCap: 'round',
            size: 145
        };
        this.sparkOptions1 = {
            barColor: this.colors.byName('info'),
            height: 30,
            barWidth: '5',
            barSpacing: '2'
        };
        this.sparkOptions2 = {
            type: 'line',
            height: 80,
            width: '100%',
            lineWidth: 2,
            lineColor: this.colors.byName('purple'),
            spotColor: '#888',
            minSpotColor: this.colors.byName('purple'),
            maxSpotColor: this.colors.byName('purple'),
            fillColor: '',
            highlightLineColor: '#fff',
            spotRadius: 3,
            resize: true
        };
        this.splineHeight = 280;
        this.splineOptions = {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true,
                    radius: 4
                },
                splines: {
                    show: true,
                    tension: 0.4,
                    lineWidth: 1,
                    fill: 0.5
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: function (label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: '#fcfcfc',
                mode: 'categories'
            },
            yaxis: {
                min: 0,
                max: 150,
                tickColor: '#eee',
                // position: ($scope.app.layout.isRTL ? 'right' : 'left'),
                tickFormatter: function (v) {
                    return v /* + ' visitors'*/;
                }
            },
            shadowSize: 0
        };
        http.get('assets/server/chart/spline.json').map(function (data) { return data.json(); }).subscribe(function (data) { return _this.splineData = data; });
    }
    DasboardComponent.prototype.ngOnInit = function () { };
    DasboardComponent.prototype.colorByName = function (name) {
        return this.colors.byName(name);
    };
    return DasboardComponent;
}());
DasboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dasboard',
        template: __webpack_require__(1003),
        styles: [__webpack_require__(960)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_colors_colors_service__["a" /* ColorsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_colors_colors_service__["a" /* ColorsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], DasboardComponent);

var _a, _b;
//# sourceMappingURL=dasboard.component.js.map

/***/ }),

/***/ 913:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturedProductsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeaturedProductsComponent = (function () {
    function FeaturedProductsComponent() {
        this.image1 = {};
        this.image2 = {};
        this.image3 = {};
        this.image4 = {};
        this.banner1 = {};
        this.banner2 = {};
        this.banner3 = {};
        this.banner4 = {};
        this.catagory1 = {};
        this.catagory2 = {};
        this.catagory3 = {};
        this.catagory4 = {};
        this.product1Data = {
            product1Image: '',
            product1name: '',
            product1desc: ''
        };
        this.product2Data = {
            product2Image: '',
            product2name: '',
            product2desc: ''
        };
        this.product3Data = {
            product3Image: '',
            product3name: '',
            product3desc: ''
        };
        this.product4Data = {
            product4Image: '',
            product4name: '',
            product4desc: ''
        };
        this.banner1Data = {
            banner1Image: '',
            banner1name: '',
            banner1desc: ''
        };
        this.banner2Data = {
            banner2Image: '',
            banner2name: '',
            banner2desc: ''
        };
        this.banner3Data = {
            banner3Image: '',
            banner3name: '',
            banner3desc: ''
        };
        this.banner4Data = {
            banner4Image: '',
            banner4name: '',
            banner4desc: ''
        };
        this.catagory1Data = {
            catagory1Image: '',
            catagory1name: '',
            catagory1desc: ''
        };
        this.catagory2Data = {
            catagory2Image: '',
            catagory2name: '',
            catagory2desc: ''
        };
        this.catagory3Data = {
            catagory3Image: '',
            catagory3name: '',
            catagory3desc: ''
        };
        this.catagory4Data = {
            catagory4Image: '',
            catagory4name: '',
            catagory4desc: ''
        };
    }
    FeaturedProductsComponent.prototype.ngOnInit = function () {
    };
    FeaturedProductsComponent.prototype.product1ImageUpload = function ($event) {
        //let image: any = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            that.image1.src = loadEvent.target.result;
        };
        myReader.readAsDataURL(file);
    };
    FeaturedProductsComponent.prototype.product2ImageUpload = function ($event) {
        //let image: any = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            that.image2.src = loadEvent.target.result;
        };
        myReader.readAsDataURL(file);
    };
    FeaturedProductsComponent.prototype.product3ImageUpload = function ($event) {
        //let image: any = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            that.image3.src = loadEvent.target.result;
        };
        myReader.readAsDataURL(file);
    };
    FeaturedProductsComponent.prototype.product4ImageUpload = function ($event) {
        //let image: any = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            that.image4.src = loadEvent.target.result;
        };
        myReader.readAsDataURL(file);
    };
    FeaturedProductsComponent.prototype.saveProduct1Data = function () {
        this.product1Data.product1Image = this.image1.src;
    };
    FeaturedProductsComponent.prototype.saveProduct2Data = function () {
        this.product2Data.product2Image = this.image2.src;
    };
    FeaturedProductsComponent.prototype.saveProduct3Data = function () {
        this.product3Data.product3Image = this.image3.src;
    };
    FeaturedProductsComponent.prototype.saveProduct4Data = function () {
        this.product4Data.product4Image = this.image4.src;
    };
    FeaturedProductsComponent.prototype.banner1ImageUpload = function ($event) {
        //let image: any = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            that.banner1.src = loadEvent.target.result;
        };
        myReader.readAsDataURL(file);
    };
    FeaturedProductsComponent.prototype.banner2ImageUpload = function ($event) {
        //let image: any = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            that.banner2.src = loadEvent.target.result;
        };
        myReader.readAsDataURL(file);
    };
    FeaturedProductsComponent.prototype.banner3ImageUpload = function ($event) {
        //let image: any = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            that.banner3.src = loadEvent.target.result;
        };
        myReader.readAsDataURL(file);
    };
    FeaturedProductsComponent.prototype.banner4ImageUpload = function ($event) {
        //let image: any = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            that.banner4.src = loadEvent.target.result;
        };
        myReader.readAsDataURL(file);
    };
    FeaturedProductsComponent.prototype.saveBanner1Data = function () {
        this.banner1Data.banner1Image = this.banner1.src;
    };
    FeaturedProductsComponent.prototype.saveBanner2Data = function () {
        this.banner2Data.banner2Image = this.banner2.src;
    };
    FeaturedProductsComponent.prototype.saveBanner3Data = function () {
        this.banner3Data.banner3Image = this.banner3.src;
    };
    FeaturedProductsComponent.prototype.saveBanner4Data = function () {
        this.banner4Data.banner4Image = this.banner4.src;
    };
    FeaturedProductsComponent.prototype.catagory1ImageUpload = function ($event) {
        //let image: any = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            that.catagory1.src = loadEvent.target.result;
        };
        myReader.readAsDataURL(file);
    };
    FeaturedProductsComponent.prototype.catagory2ImageUpload = function ($event) {
        //let image: any = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            that.catagory2.src = loadEvent.target.result;
        };
        myReader.readAsDataURL(file);
    };
    FeaturedProductsComponent.prototype.catagory3ImageUpload = function ($event) {
        //let image: any = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            that.catagory3.src = loadEvent.target.result;
        };
        myReader.readAsDataURL(file);
    };
    FeaturedProductsComponent.prototype.catagory4ImageUpload = function ($event) {
        //let image: any = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            that.catagory4.src = loadEvent.target.result;
        };
        myReader.readAsDataURL(file);
    };
    FeaturedProductsComponent.prototype.savecatagory1Data = function () {
        this.catagory1Data.catagory1Image = this.catagory1.src;
    };
    FeaturedProductsComponent.prototype.savecatagory2Data = function () {
        this.catagory2Data.catagory2Image = this.catagory2.src;
    };
    FeaturedProductsComponent.prototype.savecatagory3Data = function () {
        this.catagory3Data.catagory3Image = this.catagory3.src;
        console.log(this.catagory3Data);
    };
    FeaturedProductsComponent.prototype.savecatagory4Data = function () {
        this.catagory4Data.catagory4Image = this.catagory4.src;
    };
    return FeaturedProductsComponent;
}());
FeaturedProductsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-featured-products',
        template: __webpack_require__(1004),
        styles: [__webpack_require__(961)]
    }),
    __metadata("design:paramtypes", [])
], FeaturedProductsComponent);

//# sourceMappingURL=featured-products.component.js.map

/***/ }),

/***/ 914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home-page',
        template: __webpack_require__(1005),
        styles: [__webpack_require__(962)]
    }),
    __metadata("design:paramtypes", [])
], HomePageComponent);

//# sourceMappingURL=home-page.component.js.map

/***/ }),

/***/ 915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_colors_colors_service__ = __webpack_require__(450);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesReportsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SalesReportsComponent = (function () {
    function SalesReportsComponent(colors) {
        this.colors = colors;
        this.lat = 33.790807;
        this.lng = -117.835734;
        this.zoom = 14;
        this.scrollwheel = false;
        this.sparkOptions1 = {
            barColor: this.colors.byName('primary'),
            height: 20,
            barWidth: 3,
            barSpacing: 2
        };
        this.sparkOptions2 = {
            type: 'line',
            height: 80,
            width: '100%',
            lineWidth: 2,
            lineColor: '#dddddd',
            spotColor: '#bbbbbb',
            fillColor: '',
            highlightLineColor: '#fff',
            spotRadius: 3,
            resize: true
        };
        this.sparkOptions3 = {
            barColor: '#fff',
            height: 50,
            barWidth: 6,
            barSpacing: 6
        };
        this.sparkOptions4 = {
            barColor: this.colors.byName('primary'),
            height: 30,
            barWidth: 6,
            barSpacing: 6
        };
    }
    SalesReportsComponent.prototype.ngOnInit = function () {
    };
    return SalesReportsComponent;
}());
SalesReportsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sales-reports',
        template: __webpack_require__(1007),
        styles: [__webpack_require__(964)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_colors_colors_service__["a" /* ColorsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_colors_colors_service__["a" /* ColorsService */]) === "function" && _a || Object])
], SalesReportsComponent);

var _a;
//# sourceMappingURL=sales-reports.component.js.map

/***/ }),

/***/ 916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_settings_settings_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_themes_themes_service__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeSettingsComponent; });
/* unused harmony export appNameInterface */
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
    function ThemeSettingsComponent(settings, themes, SettingService, router) {
        this.settings = settings;
        this.themes = themes;
        this.SettingService = SettingService;
        this.router = router;
        this.image = {};
        this.icon = {};
        this.data = {
            name: ''
        };
        // this.selectedLanguage = this.getLangs()[0].code;
    }
    ThemeSettingsComponent.prototype.ngOnInit = function () {
    };
    ThemeSettingsComponent.prototype.setTheme = function () {
        localStorage.setItem('currentTheme', this.currentTheme);
        this.themes.setTheme(this.currentTheme);
        // this.SettingService.url = 'http://localhost:4200/src/app/shared/data.json';
        // this.SettingService.data = this.currentTheme;
        // this.SettingService.postData().subscribe(res => {
        // });    
    };
    ThemeSettingsComponent.prototype.logoUploadBase64 = function ($event) {
        // let image: any = new Image();
        var file = $event.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            that.image.src = loadEvent.target.result;
            // that.cropper.setImage(image);
        };
        myReader.readAsDataURL(file);
    };
    ThemeSettingsComponent.prototype.saveLogo = function () {
        localStorage.setItem('logo', this.image.src);
        //this.themes.setLogo(this.image.src);
        this.router.navigate(['/dashboard']);
    };
    ThemeSettingsComponent.prototype.IconUploadBase64 = function ($eve) {
        var file = $eve.target.files[0];
        var myReader = new FileReader();
        var that = this;
        myReader.onloadend = function (loadEvent) {
            that.icon.src = loadEvent.target.result;
        };
        myReader.readAsDataURL(file);
    };
    ThemeSettingsComponent.prototype.saveLogoIcon = function () {
        localStorage.setItem('logoIcon', this.icon.src);
        console.log(this.icon.src);
    };
    ThemeSettingsComponent.prototype.saveAppName = function (data) {
        localStorage.setItem('appName', data.name);
        // data.resetForm();
    };
    return ThemeSettingsComponent;
}());
ThemeSettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-theme-settings',
        template: __webpack_require__(1008),
        styles: [__webpack_require__(965)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__core_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_settings_settings_service__["a" /* SettingsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__core_themes_themes_service__["a" /* ThemesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_themes_themes_service__["a" /* ThemesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object])
], ThemeSettingsComponent);

var appNameInterface = (function () {
    function appNameInterface() {
    }
    return appNameInterface;
}());

var _a, _b, _c, _d;
//# sourceMappingURL=theme-settings.component.js.map

/***/ }),

/***/ 917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng2_table_data__ = __webpack_require__(940);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersListComponent = (function () {
    function UsersListComponent() {
        // angular2-datatable
        // http.get('assets/server/datatable.json')
        //     .subscribe((data) => {
        //         setTimeout(() => {
        //             this.singleData = data.json();
        //         }, 1000);
        //     });
        // angular2-datatable
        // public sortByWordLength = (a: any) => {
        //     return a.name.length;
        // }
        // public removeItem(item: any) {
        //     this.singleData = _.filter(this.singleData, (elem) => elem != item);
        //     console.log('Remove: ', item.email);
        // }
        // ng2Table
        this.rows = [];
        this.columns = [
            { title: 'Name', name: 'name', filtering: { filterString: '', placeholder: 'Filter by name' } },
            {
                title: 'Position',
                name: 'position',
                sort: false,
                filtering: { filterString: '', placeholder: 'Filter by position' }
            },
            { title: 'Office', className: ['office-header', 'text-success'], name: 'office', sort: 'asc' },
            { title: 'Extn.', name: 'ext', sort: '', filtering: { filterString: '', placeholder: 'Filter by extn.' } },
            { title: 'Start date', className: 'text-warning', name: 'startDate' },
            { title: 'Salary ($)', name: 'salary' }
        ];
        this.page = 1;
        this.itemsPerPage = 10;
        this.maxSize = 5;
        this.numPages = 1;
        this.length = 0;
        this.config = {
            paging: true,
            sorting: { columns: this.columns },
            filtering: { filterString: '' },
            className: ['table-striped', 'table-bordered', 'mb0', 'd-table-fixed'] // mb0=remove margin -/- .d-table-fixed=fix column width
        };
        this.ng2TableData = __WEBPACK_IMPORTED_MODULE_1__ng2_table_data__["a" /* TableData */];
        // ng2Table
        this.length = this.ng2TableData.length;
    }
    UsersListComponent.prototype.ngOnInit = function () {
        this.onChangeTable(this.config);
    };
    UsersListComponent.prototype.changePage = function (page, data) {
        if (data === void 0) { data = this.ng2TableData; }
        var start = (page.page - 1) * page.itemsPerPage;
        var end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        return data.slice(start, end);
    };
    UsersListComponent.prototype.changeSort = function (data, config) {
        if (!config.sorting) {
            return data;
        }
        var columns = this.config.sorting.columns || [];
        var columnName = void 0;
        var sort = void 0;
        for (var i = 0; i < columns.length; i++) {
            if (columns[i].sort !== '' && columns[i].sort !== false) {
                columnName = columns[i].name;
                sort = columns[i].sort;
            }
        }
        if (!columnName) {
            return data;
        }
        // simple sorting
        return data.sort(function (previous, current) {
            if (previous[columnName] > current[columnName]) {
                return sort === 'desc' ? -1 : 1;
            }
            else if (previous[columnName] < current[columnName]) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        });
    };
    UsersListComponent.prototype.changeFilter = function (data, config) {
        var _this = this;
        var filteredData = data;
        this.columns.forEach(function (column) {
            if (column.filtering) {
                filteredData = filteredData.filter(function (item) {
                    return item[column.name].match(column.filtering.filterString);
                });
            }
        });
        if (!config.filtering) {
            return filteredData;
        }
        if (config.filtering.columnName) {
            return filteredData.filter(function (item) {
                return item[config.filtering.columnName].match(_this.config.filtering.filterString);
            });
        }
        var tempArray = [];
        filteredData.forEach(function (item) {
            var flag = false;
            _this.columns.forEach(function (column) {
                if (item[column.name].toString().match(_this.config.filtering.filterString)) {
                    flag = true;
                }
            });
            if (flag) {
                tempArray.push(item);
            }
        });
        filteredData = tempArray;
        return filteredData;
    };
    UsersListComponent.prototype.onChangeTable = function (config, page) {
        if (page === void 0) { page = { page: this.page, itemsPerPage: this.itemsPerPage }; }
        if (config.filtering) {
            Object.assign(this.config.filtering, config.filtering);
        }
        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }
        var filteredData = this.changeFilter(this.ng2TableData, this.config);
        var sortedData = this.changeSort(filteredData, this.config);
        this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
        this.length = sortedData.length;
    };
    UsersListComponent.prototype.onCellClick = function (data) {
        console.log(data);
    };
    return UsersListComponent;
}());
UsersListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-users-list',
        template: __webpack_require__(1009),
        styles: [__webpack_require__(966)]
    }),
    __metadata("design:paramtypes", [])
], UsersListComponent);

//# sourceMappingURL=users-list.component.js.map

/***/ }),

/***/ 918:
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
    DashboardComponent.prototype.showModal = function (value) {
        console.log(value);
        //this.modal.show();
    };
    return DashboardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('lgModal'),
    __metadata("design:type", Object)
], DashboardComponent.prototype, "modal", void 0);
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(1010),
        styles: [__webpack_require__(967)]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 919:
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

/***/ 930:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var file_uploader_class_1 = __webpack_require__(907);
var FileDropDirective = (function () {
    function FileDropDirective(element) {
        this.fileOver = new core_1.EventEmitter();
        this.onFileDrop = new core_1.EventEmitter();
        this.element = element;
    }
    FileDropDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileDropDirective.prototype.getFilters = function () {
        return {};
    };
    FileDropDirective.prototype.onDrop = function (event) {
        var transfer = this._getTransfer(event);
        if (!transfer) {
            return;
        }
        var options = this.getOptions();
        var filters = this.getFilters();
        this._preventAndStop(event);
        this.uploader.addToQueue(transfer.files, options, filters);
        this.fileOver.emit(false);
        this.onFileDrop.emit(transfer.files);
    };
    FileDropDirective.prototype.onDragOver = function (event) {
        var transfer = this._getTransfer(event);
        if (!this._haveFiles(transfer.types)) {
            return;
        }
        transfer.dropEffect = 'copy';
        this._preventAndStop(event);
        this.fileOver.emit(true);
    };
    FileDropDirective.prototype.onDragLeave = function (event) {
        if (this.element) {
            if (event.currentTarget === this.element[0]) {
                return;
            }
        }
        this._preventAndStop(event);
        this.fileOver.emit(false);
    };
    FileDropDirective.prototype._getTransfer = function (event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
    };
    FileDropDirective.prototype._preventAndStop = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    FileDropDirective.prototype._haveFiles = function (types) {
        if (!types) {
            return false;
        }
        if (types.indexOf) {
            return types.indexOf('Files') !== -1;
        }
        else if (types.contains) {
            return types.contains('Files');
        }
        else {
            return false;
        }
    };
    return FileDropDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileDropDirective.prototype, "uploader", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "fileOver", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FileDropDirective.prototype, "onFileDrop", void 0);
__decorate([
    core_1.HostListener('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDrop", null);
__decorate([
    core_1.HostListener('dragover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileDropDirective.prototype, "onDragOver", null);
__decorate([
    core_1.HostListener('dragleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], FileDropDirective.prototype, "onDragLeave", null);
FileDropDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileDrop]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileDropDirective);
exports.FileDropDirective = FileDropDirective;


/***/ }),

/***/ 931:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var file_like_object_class_1 = __webpack_require__(906);
var FileItem = (function () {
    function FileItem(uploader, some, options) {
        this.url = '/';
        this.headers = [];
        this.withCredentials = true;
        this.formData = [];
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.uploader = uploader;
        this.some = some;
        this.options = options;
        this.file = new file_like_object_class_1.FileLikeObject(some);
        this._file = some;
        if (uploader.options) {
            this.method = uploader.options.method || 'POST';
            this.alias = uploader.options.itemAlias || 'file';
        }
        this.url = uploader.options.url;
    }
    FileItem.prototype.upload = function () {
        try {
            this.uploader.uploadItem(this);
        }
        catch (e) {
            this.uploader._onCompleteItem(this, '', 0, {});
            this.uploader._onErrorItem(this, '', 0, {});
        }
    };
    FileItem.prototype.cancel = function () {
        this.uploader.cancelItem(this);
    };
    FileItem.prototype.remove = function () {
        this.uploader.removeFromQueue(this);
    };
    FileItem.prototype.onBeforeUpload = function () {
        return void 0;
    };
    FileItem.prototype.onBuildForm = function (form) {
        return { form: form };
    };
    FileItem.prototype.onProgress = function (progress) {
        return { progress: progress };
    };
    FileItem.prototype.onSuccess = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onError = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onCancel = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype.onComplete = function (response, status, headers) {
        return { response: response, status: status, headers: headers };
    };
    FileItem.prototype._onBeforeUpload = function () {
        this.isReady = true;
        this.isUploading = true;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = false;
        this.progress = 0;
        this.onBeforeUpload();
    };
    FileItem.prototype._onBuildForm = function (form) {
        this.onBuildForm(form);
    };
    FileItem.prototype._onProgress = function (progress) {
        this.progress = progress;
        this.onProgress(progress);
    };
    FileItem.prototype._onSuccess = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = true;
        this.isCancel = false;
        this.isError = false;
        this.progress = 100;
        this.index = void 0;
        this.onSuccess(response, status, headers);
    };
    FileItem.prototype._onError = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = true;
        this.isSuccess = false;
        this.isCancel = false;
        this.isError = true;
        this.progress = 0;
        this.index = void 0;
        this.onError(response, status, headers);
    };
    FileItem.prototype._onCancel = function (response, status, headers) {
        this.isReady = false;
        this.isUploading = false;
        this.isUploaded = false;
        this.isSuccess = false;
        this.isCancel = true;
        this.isError = false;
        this.progress = 0;
        this.index = void 0;
        this.onCancel(response, status, headers);
    };
    FileItem.prototype._onComplete = function (response, status, headers) {
        this.onComplete(response, status, headers);
        if (this.uploader.options.removeAfterUpload) {
            this.remove();
        }
    };
    FileItem.prototype._prepareToUploading = function () {
        this.index = this.index || ++this.uploader._nextIndex;
        this.isReady = true;
    };
    return FileItem;
}());
exports.FileItem = FileItem;


/***/ }),

/***/ 932:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var file_uploader_class_1 = __webpack_require__(907);
// todo: filters
var FileSelectDirective = (function () {
    function FileSelectDirective(element) {
        this.element = element;
    }
    FileSelectDirective.prototype.getOptions = function () {
        return this.uploader.options;
    };
    FileSelectDirective.prototype.getFilters = function () {
        return void 0;
    };
    FileSelectDirective.prototype.isEmptyAfterSelection = function () {
        return !!this.element.nativeElement.attributes.multiple;
    };
    FileSelectDirective.prototype.onChange = function () {
        // let files = this.uploader.isHTML5 ? this.element.nativeElement[0].files : this.element.nativeElement[0];
        var files = this.element.nativeElement.files;
        var options = this.getOptions();
        var filters = this.getFilters();
        // if(!this.uploader.isHTML5) this.destroy();
        this.uploader.addToQueue(files, options, filters);
        if (this.isEmptyAfterSelection()) {
            // todo
            this.element.nativeElement.value = '';
        }
    };
    return FileSelectDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", file_uploader_class_1.FileUploader)
], FileSelectDirective.prototype, "uploader", void 0);
__decorate([
    core_1.HostListener('change'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], FileSelectDirective.prototype, "onChange", null);
FileSelectDirective = __decorate([
    core_1.Directive({ selector: '[ng2FileSelect]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FileSelectDirective);
exports.FileSelectDirective = FileSelectDirective;


/***/ }),

/***/ 933:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CropperDrawSettings; });
var CropperDrawSettings = (function () {
    function CropperDrawSettings() {
        this.strokeWidth = 1;
        this.strokeColor = 'rgba(255,255,255,1)';
        this.dragIconStrokeWidth = 1;
        this.dragIconStrokeColor = 'rgba(0,0,0,1)';
        this.dragIconFillColor = 'rgba(255,255,255,1)';
    }
    return CropperDrawSettings;
}());

//# sourceMappingURL=cropperDrawSettings.js.map

/***/ }),

/***/ 934:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_bounds__ = __webpack_require__(909);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_cornerMarker__ = __webpack_require__(995);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_cropTouch__ = __webpack_require__(996);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_dragMarker__ = __webpack_require__(997);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_imageCropperModel__ = __webpack_require__(998);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__ = __webpack_require__(993);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_pointPool__ = __webpack_require__(910);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageCropper; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var ImageCropper = (function (_super) {
    __extends(ImageCropper, _super);
    function ImageCropper(cropperSettings) {
        var _this = _super.call(this) || this;
        var x = 0;
        var y = 0;
        var width = cropperSettings.width;
        var height = cropperSettings.height;
        var keepAspect = cropperSettings.keepAspect;
        var touchRadius = cropperSettings.touchRadius;
        var minWidth = cropperSettings.minWidth;
        var minHeight = cropperSettings.minHeight;
        var croppedWidth = cropperSettings.croppedWidth;
        var croppedHeight = cropperSettings.croppedHeight;
        _this.cropperSettings = cropperSettings;
        _this.crop = _this;
        _this.x = x;
        _this.y = y;
        if (width === void 0) {
            _this.width = 100;
        }
        if (height === void 0) {
            _this.height = 50;
        }
        if (keepAspect === void 0) {
            _this.keepAspect = true;
        }
        if (touchRadius === void 0) {
            _this.touchRadius = 20;
        }
        _this.minWidth = minWidth;
        _this.minHeight = minHeight;
        _this.keepAspect = false;
        _this.aspectRatio = 0;
        _this.currentDragTouches = [];
        _this.isMouseDown = false;
        _this.ratioW = 1;
        _this.ratioH = 1;
        _this.fileType = cropperSettings.fileType;
        _this.imageSet = false;
        _this.pointPool = new __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */](200);
        _this.tl = new __WEBPACK_IMPORTED_MODULE_1__model_cornerMarker__["a" /* CornerMarker */](x, y, touchRadius, _this.cropperSettings);
        _this.tr = new __WEBPACK_IMPORTED_MODULE_1__model_cornerMarker__["a" /* CornerMarker */](x + width, y, touchRadius, _this.cropperSettings);
        _this.bl = new __WEBPACK_IMPORTED_MODULE_1__model_cornerMarker__["a" /* CornerMarker */](x, y + height, touchRadius, _this.cropperSettings);
        _this.br = new __WEBPACK_IMPORTED_MODULE_1__model_cornerMarker__["a" /* CornerMarker */](x + width, y + height, touchRadius, _this.cropperSettings);
        _this.tl.addHorizontalNeighbour(_this.tr);
        _this.tl.addVerticalNeighbour(_this.bl);
        _this.tr.addHorizontalNeighbour(_this.tl);
        _this.tr.addVerticalNeighbour(_this.br);
        _this.bl.addHorizontalNeighbour(_this.br);
        _this.bl.addVerticalNeighbour(_this.tl);
        _this.br.addHorizontalNeighbour(_this.bl);
        _this.br.addVerticalNeighbour(_this.tr);
        _this.markers = [_this.tl, _this.tr, _this.bl, _this.br];
        _this.center = new __WEBPACK_IMPORTED_MODULE_3__model_dragMarker__["a" /* DragMarker */](x + (width / 2), y + (height / 2), touchRadius, _this.cropperSettings);
        _this.keepAspect = keepAspect;
        _this.aspectRatio = height / width;
        _this.croppedImage = new Image();
        _this.currentlyInteracting = false;
        _this.cropWidth = croppedWidth;
        _this.cropHeight = croppedHeight;
        return _this;
    }
    ImageCropper.sign = function (x) {
        if (+x === x) {
            return (x === 0) ? x : (x > 0) ? 1 : -1;
        }
        return NaN;
    };
    ImageCropper.getMousePos = function (canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(evt.clientX - rect.left, evt.clientY - rect.top);
    };
    ImageCropper.getTouchPos = function (canvas, touch) {
        var rect = canvas.getBoundingClientRect();
        return __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(touch.clientX - rect.left, touch.clientY - rect.top);
    };
    ImageCropper.detectVerticalSquash = function (img) {
        var ih = img.height;
        var canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = ih;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        var imageData = ctx.getImageData(0, 0, 1, ih);
        if (imageData) {
            var data = imageData.data;
            // search image edge pixel position in case it is squashed vertically.
            var sy = 0;
            var ey = ih;
            var py = ih;
            while (py > sy) {
                var alpha = data[(py - 1) * 4 + 3];
                if (alpha === 0) {
                    ey = py;
                }
                else {
                    sy = py;
                }
                py = (ey + sy) >> 1;
            }
            var ratio = (py / ih);
            return (ratio === 0) ? 1 : ratio;
        }
        else {
            return 1;
        }
    };
    ImageCropper.prototype.getDataUriMimeType = function (dataUri) {
        // Get a substring because the regex does not perform well on very large strings. Cater for optional charset. Length 50 shoould be enough.
        var dataUriSubstring = dataUri.substring(0, 50);
        var mimeType = 'image/png';
        // data-uri scheme
        // data:[<media type>][;charset=<character set>][;base64],<data>
        var regEx = RegExp(/^(data:)([\w\/\+]+);(charset=[\w-]+|base64).*,(.*)/gi);
        var matches = regEx.exec(dataUriSubstring);
        if (matches && matches[2]) {
            mimeType = matches[2];
            if (mimeType == 'image/jpg') {
                mimeType = 'image/jpeg';
            }
        }
        return mimeType;
    };
    ImageCropper.prototype.prepare = function (canvas) {
        this.buffer = document.createElement('canvas');
        this.cropCanvas = document.createElement('canvas');
        // todo get more reliable parent width value.
        var responsiveWidth = canvas.parentElement ? canvas.parentElement.clientWidth : 0;
        if (responsiveWidth > 0 && this.cropperSettings.dynamicSizing) {
            this.cropCanvas.width = responsiveWidth;
            this.buffer.width = responsiveWidth;
            canvas.width = responsiveWidth;
        }
        else {
            this.cropCanvas.width = this.cropWidth;
            this.buffer.width = canvas.width;
        }
        this.cropCanvas.height = this.cropHeight;
        this.buffer.height = canvas.height;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.draw(this.ctx);
    };
    ImageCropper.prototype.resizeCanvas = function (width, height, setImage) {
        if (setImage === void 0) { setImage = false; }
        this.canvas.width = this.cropCanvas.width = this.width = this.canvasWidth = this.buffer.width = width;
        this.canvas.height = this.cropCanvas.height = this.height = this.canvasHeight = this.buffer.height = height;
        if (setImage) {
            this.setImage(this.srcImage);
        }
    };
    ImageCropper.prototype.reset = function () {
        this.setImage(undefined);
    };
    ImageCropper.prototype.draw = function (ctx) {
        var bounds = this.getBounds();
        if (this.srcImage) {
            ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
            var sourceAspect = this.srcImage.height / this.srcImage.width;
            var canvasAspect = this.canvasHeight / this.canvasWidth;
            var w = this.canvasWidth;
            var h = this.canvasHeight;
            if (canvasAspect > sourceAspect) {
                w = this.canvasWidth;
                h = this.canvasWidth * sourceAspect;
            }
            else {
                h = this.canvasHeight;
                w = this.canvasHeight / sourceAspect;
            }
            this.ratioW = w / this.srcImage.width;
            this.ratioH = h / this.srcImage.height;
            if (canvasAspect < sourceAspect) {
                this.drawImageIOSFix(ctx, this.srcImage, 0, 0, this.srcImage.width, this.srcImage.height, this.buffer.width / 2 - w / 2, 0, w, h);
            }
            else {
                this.drawImageIOSFix(ctx, this.srcImage, 0, 0, this.srcImage.width, this.srcImage.height, 0, this.buffer.height / 2 - h / 2, w, h);
            }
            this.buffer.getContext('2d')
                .drawImage(this.canvas, 0, 0, this.canvasWidth, this.canvasHeight);
            ctx.lineWidth = this.cropperSettings.cropperDrawSettings.strokeWidth;
            ctx.strokeStyle = this.cropperSettings.cropperDrawSettings.strokeColor; // 'rgba(255,228,0,1)';
            if (!this.cropperSettings.rounded) {
                ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
                ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
                ctx.drawImage(this.buffer, bounds.left, bounds.top, Math.max(bounds.width, 1), Math.max(bounds.height, 1), bounds.left, bounds.top, bounds.width, bounds.height);
                ctx.strokeRect(bounds.left, bounds.top, bounds.width, bounds.height);
            }
            else {
                ctx.beginPath();
                ctx.arc(bounds.left + bounds.width / 2, bounds.top + bounds.height / 2, bounds.width / 2, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.stroke();
            }
            var marker = void 0;
            for (var i = 0; i < this.markers.length; i++) {
                marker = this.markers[i];
                marker.draw(ctx);
            }
            this.center.draw(ctx);
        }
        else {
            ctx.fillStyle = 'rgba(192,192,192,1)';
            ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
    };
    ImageCropper.prototype.dragCenter = function (x, y, marker) {
        var bounds = this.getBounds();
        var left = x - (bounds.width / 2);
        var right = x + (bounds.width / 2);
        var top = y - (bounds.height / 2);
        var bottom = y + (bounds.height / 2);
        if (right >= this.maxXClamp) {
            x = this.maxXClamp - bounds.width / 2;
        }
        if (left <= this.minXClamp) {
            x = bounds.width / 2 + this.minXClamp;
        }
        if (top < this.minYClamp) {
            y = bounds.height / 2 + this.minYClamp;
        }
        if (bottom >= this.maxYClamp) {
            y = this.maxYClamp - bounds.height / 2;
        }
        this.tl.moveX(x - (bounds.width / 2));
        this.tl.moveY(y - (bounds.height / 2));
        this.tr.moveX(x + (bounds.width / 2));
        this.tr.moveY(y - (bounds.height / 2));
        this.bl.moveX(x - (bounds.width / 2));
        this.bl.moveY(y + (bounds.height / 2));
        this.br.moveX(x + (bounds.width / 2));
        this.br.moveY(y + (bounds.height / 2));
        marker.setPosition(x, y);
    };
    ImageCropper.prototype.enforceMinSize = function (x, y, marker) {
        var xLength = x - marker.getHorizontalNeighbour().position.x;
        var yLength = y - marker.getVerticalNeighbour().position.y;
        var xOver = this.minWidth - Math.abs(xLength);
        var yOver = this.minHeight - Math.abs(yLength);
        if (xLength === 0 || yLength === 0) {
            x = marker.position.x;
            y = marker.position.y;
            return __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(x, y);
        }
        if (this.keepAspect) {
            if (xOver > 0 && (yOver / this.aspectRatio) > 0) {
                if (xOver > (yOver / this.aspectRatio)) {
                    if (xLength < 0) {
                        x -= xOver;
                        if (yLength < 0) {
                            y -= xOver * this.aspectRatio;
                        }
                        else {
                            y += xOver * this.aspectRatio;
                        }
                    }
                    else {
                        x += xOver;
                        if (yLength < 0) {
                            y -= xOver * this.aspectRatio;
                        }
                        else {
                            y += xOver * this.aspectRatio;
                        }
                    }
                }
                else {
                    if (yLength < 0) {
                        y -= yOver;
                        if (xLength < 0) {
                            x -= yOver / this.aspectRatio;
                        }
                        else {
                            x += yOver / this.aspectRatio;
                        }
                    }
                    else {
                        y += yOver;
                        if (xLength < 0) {
                            x -= yOver / this.aspectRatio;
                        }
                        else {
                            x += yOver / this.aspectRatio;
                        }
                    }
                }
            }
            else {
                if (xOver > 0) {
                    if (xLength < 0) {
                        x -= xOver;
                        if (yLength < 0) {
                            y -= xOver * this.aspectRatio;
                        }
                        else {
                            y += xOver * this.aspectRatio;
                        }
                    }
                    else {
                        x += xOver;
                        if (yLength < 0) {
                            y -= xOver * this.aspectRatio;
                        }
                        else {
                            y += xOver * this.aspectRatio;
                        }
                    }
                }
                else {
                    if (yOver > 0) {
                        if (yLength < 0) {
                            y -= yOver;
                            if (xLength < 0) {
                                x -= yOver / this.aspectRatio;
                            }
                            else {
                                x += yOver / this.aspectRatio;
                            }
                        }
                        else {
                            y += yOver;
                            if (xLength < 0) {
                                x -= yOver / this.aspectRatio;
                            }
                            else {
                                x += yOver / this.aspectRatio;
                            }
                        }
                    }
                }
            }
        }
        else {
            if (xOver > 0) {
                if (xLength < 0) {
                    x -= xOver;
                }
                else {
                    x += xOver;
                }
            }
            if (yOver > 0) {
                if (yLength < 0) {
                    y -= yOver;
                }
                else {
                    y += yOver;
                }
            }
        }
        if (x < this.minXClamp || x > this.maxXClamp || y < this.minYClamp || y > this.maxYClamp) {
            x = marker.position.x;
            y = marker.position.y;
        }
        return __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(x, y);
    };
    ImageCropper.prototype.dragCorner = function (x, y, marker) {
        var iX = 0;
        var iY = 0;
        var ax = 0;
        var ay = 0;
        var newHeight = 0;
        var newWidth = 0;
        var newY = 0;
        var newX = 0;
        var anchorMarker;
        var fold = 0;
        if (this.keepAspect) {
            anchorMarker = marker.getHorizontalNeighbour().getVerticalNeighbour();
            ax = anchorMarker.position.x;
            ay = anchorMarker.position.y;
            if (x <= anchorMarker.position.x) {
                if (y <= anchorMarker.position.y) {
                    iX = ax - (100 / this.aspectRatio);
                    iY = ay - (100 / this.aspectRatio * this.aspectRatio);
                    fold = this.getSide(__WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(iX, iY), anchorMarker.position, __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(x, y));
                    if (fold > 0) {
                        newHeight = Math.abs(anchorMarker.position.y - y);
                        newWidth = newHeight / this.aspectRatio;
                        newY = anchorMarker.position.y - newHeight;
                        newX = anchorMarker.position.x - newWidth;
                        var min = this.enforceMinSize(newX, newY, marker);
                        marker.move(min.x, min.y);
                        __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(min);
                    }
                    else {
                        if (fold < 0) {
                            newWidth = Math.abs(anchorMarker.position.x - x);
                            newHeight = newWidth * this.aspectRatio;
                            newY = anchorMarker.position.y - newHeight;
                            newX = anchorMarker.position.x - newWidth;
                            var min = this.enforceMinSize(newX, newY, marker);
                            marker.move(min.x, min.y);
                            __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(min);
                        }
                    }
                }
                else {
                    iX = ax - (100 / this.aspectRatio);
                    iY = ay + (100 / this.aspectRatio * this.aspectRatio);
                    fold = this.getSide(__WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(iX, iY), anchorMarker.position, __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(x, y));
                    if (fold > 0) {
                        newWidth = Math.abs(anchorMarker.position.x - x);
                        newHeight = newWidth * this.aspectRatio;
                        newY = anchorMarker.position.y + newHeight;
                        newX = anchorMarker.position.x - newWidth;
                        var min = this.enforceMinSize(newX, newY, marker);
                        marker.move(min.x, min.y);
                        __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(min);
                    }
                    else {
                        if (fold < 0) {
                            newHeight = Math.abs(anchorMarker.position.y - y);
                            newWidth = newHeight / this.aspectRatio;
                            newY = anchorMarker.position.y + newHeight;
                            newX = anchorMarker.position.x - newWidth;
                            var min = this.enforceMinSize(newX, newY, marker);
                            marker.move(min.x, min.y);
                            __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(min);
                        }
                    }
                }
            }
            else {
                if (y <= anchorMarker.position.y) {
                    iX = ax + (100 / this.aspectRatio);
                    iY = ay - (100 / this.aspectRatio * this.aspectRatio);
                    fold = this.getSide(__WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(iX, iY), anchorMarker.position, __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(x, y));
                    if (fold < 0) {
                        newHeight = Math.abs(anchorMarker.position.y - y);
                        newWidth = newHeight / this.aspectRatio;
                        newY = anchorMarker.position.y - newHeight;
                        newX = anchorMarker.position.x + newWidth;
                        var min = this.enforceMinSize(newX, newY, marker);
                        marker.move(min.x, min.y);
                        __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(min);
                    }
                    else {
                        if (fold > 0) {
                            newWidth = Math.abs(anchorMarker.position.x - x);
                            newHeight = newWidth * this.aspectRatio;
                            newY = anchorMarker.position.y - newHeight;
                            newX = anchorMarker.position.x + newWidth;
                            var min = this.enforceMinSize(newX, newY, marker);
                            marker.move(min.x, min.y);
                            __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(min);
                        }
                    }
                }
                else {
                    iX = ax + (100 / this.aspectRatio);
                    iY = ay + (100 / this.aspectRatio * this.aspectRatio);
                    fold = this.getSide(__WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(iX, iY), anchorMarker.position, __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(x, y));
                    if (fold < 0) {
                        newWidth = Math.abs(anchorMarker.position.x - x);
                        newHeight = newWidth * this.aspectRatio;
                        newY = anchorMarker.position.y + newHeight;
                        newX = anchorMarker.position.x + newWidth;
                        var min = this.enforceMinSize(newX, newY, marker);
                        marker.move(min.x, min.y);
                        __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(min);
                    }
                    else {
                        if (fold > 0) {
                            newHeight = Math.abs(anchorMarker.position.y - y);
                            newWidth = newHeight / this.aspectRatio;
                            newY = anchorMarker.position.y + newHeight;
                            newX = anchorMarker.position.x + newWidth;
                            var min = this.enforceMinSize(newX, newY, marker);
                            marker.move(min.x, min.y);
                            __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(min);
                        }
                    }
                }
            }
        }
        else {
            var min = this.enforceMinSize(x, y, marker);
            marker.move(min.x, min.y);
            __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(min);
        }
        this.center.recalculatePosition(this.getBounds());
    };
    ImageCropper.prototype.getSide = function (a, b, c) {
        var n = ImageCropper.sign((b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x));
        // TODO move the return of the pools to outside of this function
        __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(a);
        __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(c);
        return n;
    };
    ImageCropper.prototype.handleRelease = function (newCropTouch) {
        if (newCropTouch == null) {
            return;
        }
        var index = 0;
        for (var k = 0; k < this.currentDragTouches.length; k++) {
            if (newCropTouch.id === this.currentDragTouches[k].id) {
                this.currentDragTouches[k].dragHandle.setDrag(false);
                index = k;
            }
        }
        this.currentDragTouches.splice(index, 1);
        this.draw(this.ctx);
    };
    ImageCropper.prototype.handleMove = function (newCropTouch) {
        var matched = false;
        for (var k = 0; k < this.currentDragTouches.length; k++) {
            if (newCropTouch.id === this.currentDragTouches[k].id && this.currentDragTouches[k].dragHandle != null) {
                var dragTouch = this.currentDragTouches[k];
                var clampedPositions = this.clampPosition(newCropTouch.x - dragTouch.dragHandle.offset.x, newCropTouch.y - dragTouch.dragHandle.offset.y);
                newCropTouch.x = clampedPositions.x;
                newCropTouch.y = clampedPositions.y;
                __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(clampedPositions);
                if (dragTouch.dragHandle instanceof __WEBPACK_IMPORTED_MODULE_1__model_cornerMarker__["a" /* CornerMarker */]) {
                    this.dragCorner(newCropTouch.x, newCropTouch.y, dragTouch.dragHandle);
                }
                else {
                    this.dragCenter(newCropTouch.x, newCropTouch.y, dragTouch.dragHandle);
                }
                this.currentlyInteracting = true;
                matched = true;
                __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setPressed(this.canvas);
                break;
            }
        }
        if (!matched) {
            for (var i = 0; i < this.markers.length; i++) {
                var marker = this.markers[i];
                if (marker.touchInBounds(newCropTouch.x, newCropTouch.y)) {
                    newCropTouch.dragHandle = marker;
                    this.currentDragTouches.push(newCropTouch);
                    marker.setDrag(true);
                    newCropTouch.dragHandle.offset.x = newCropTouch.x - newCropTouch.dragHandle.position.x;
                    newCropTouch.dragHandle.offset.y = newCropTouch.y - newCropTouch.dragHandle.position.y;
                    this.dragCorner(newCropTouch.x - newCropTouch.dragHandle.offset.x, newCropTouch.y - newCropTouch.dragHandle.offset.y, newCropTouch.dragHandle);
                    break;
                }
            }
            if (newCropTouch.dragHandle === null || typeof newCropTouch.dragHandle === 'undefined') {
                if (this.center.touchInBounds(newCropTouch.x, newCropTouch.y)) {
                    newCropTouch.dragHandle = this.center;
                    this.currentDragTouches.push(newCropTouch);
                    newCropTouch.dragHandle.setDrag(true);
                    newCropTouch.dragHandle.offset.x = newCropTouch.x - newCropTouch.dragHandle.position.x;
                    newCropTouch.dragHandle.offset.y = newCropTouch.y - newCropTouch.dragHandle.position.y;
                    this.dragCenter(newCropTouch.x - newCropTouch.dragHandle.offset.x, newCropTouch.y - newCropTouch.dragHandle.offset.y, newCropTouch.dragHandle);
                }
            }
        }
    };
    ImageCropper.prototype.updateClampBounds = function () {
        var sourceAspect = this.srcImage.height / this.srcImage.width;
        var canvasAspect = this.canvas.height / this.canvas.width;
        var w = this.canvas.width;
        var h = this.canvas.height;
        if (canvasAspect > sourceAspect) {
            w = this.canvas.width;
            h = this.canvas.width * sourceAspect;
        }
        else {
            h = this.canvas.height;
            w = this.canvas.height / sourceAspect;
        }
        this.minXClamp = this.canvas.width / 2 - w / 2;
        this.minYClamp = this.canvas.height / 2 - h / 2;
        this.maxXClamp = this.canvas.width / 2 + w / 2;
        this.maxYClamp = this.canvas.height / 2 + h / 2;
    };
    ImageCropper.prototype.getCropBounds = function () {
        var bounds = this.getBounds();
        bounds.top = Math.round((bounds.top - this.minYClamp) / this.ratioH);
        bounds.bottom = Math.round((bounds.bottom - this.minYClamp) / this.ratioH);
        bounds.left = Math.round((bounds.left - this.minXClamp) / this.ratioW);
        bounds.right = Math.round((bounds.right - this.minXClamp) / this.ratioW);
        return bounds;
    };
    ImageCropper.prototype.clampPosition = function (x, y) {
        if (x < this.minXClamp) {
            x = this.minXClamp;
        }
        if (x > this.maxXClamp) {
            x = this.maxXClamp;
        }
        if (y < this.minYClamp) {
            y = this.minYClamp;
        }
        if (y > this.maxYClamp) {
            y = this.maxYClamp;
        }
        return __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(x, y);
    };
    ImageCropper.prototype.isImageSet = function () {
        return this.imageSet;
    };
    ImageCropper.prototype.setImage = function (img) {
        this.srcImage = img;
        if (!img) {
            this.imageSet = false;
            this.draw(this.ctx);
        }
        else {
            this.imageSet = true;
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            var bufferContext = this.buffer.getContext('2d');
            bufferContext.clearRect(0, 0, this.buffer.width, this.buffer.height);
            if (!this.cropperSettings.fileType)
                this.fileType = this.getDataUriMimeType(img.src);
            if (this.cropperSettings.minWithRelativeToResolution) {
                this.minWidth = (this.canvas.width * this.minWidth / this.srcImage.width);
                this.minHeight = (this.canvas.height * this.minHeight / this.srcImage.height);
            }
            this.updateClampBounds();
            this.canvasWidth = this.canvas.width;
            this.canvasHeight = this.canvas.height;
            var cropPosition = this.getCropPositionFromMarkers();
            this.setCropPosition(cropPosition);
        }
    };
    ImageCropper.prototype.updateCropPosition = function (cropBounds) {
        var cropPosition = this.getCropPositionFromBounds(cropBounds);
        this.setCropPosition(cropPosition);
    };
    ImageCropper.prototype.setCropPosition = function (cropPosition) {
        this.tl.setPosition(cropPosition[0].x, cropPosition[0].y);
        this.tr.setPosition(cropPosition[1].x, cropPosition[1].y);
        this.bl.setPosition(cropPosition[2].x, cropPosition[2].y);
        this.br.setPosition(cropPosition[3].x, cropPosition[3].y);
        this.center.setPosition(cropPosition[4].x, cropPosition[4].y);
        for (var _i = 0, cropPosition_1 = cropPosition; _i < cropPosition_1.length; _i++) {
            var position = cropPosition_1[_i];
            __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(position);
        }
        this.vertSquashRatio = ImageCropper.detectVerticalSquash(this.srcImage);
        this.draw(this.ctx);
        this.croppedImage = this.getCroppedImage(this.cropWidth, this.cropHeight);
    };
    ImageCropper.prototype.getCropPositionFromMarkers = function () {
        var w = this.canvas.width;
        var h = this.canvas.height;
        var tlPos, trPos, blPos, brPos, center;
        var sourceAspect = this.srcImage.height / this.srcImage.width;
        var cropBounds = this.getBounds();
        var cropAspect = cropBounds.height / cropBounds.width;
        var cX = this.canvas.width / 2;
        var cY = this.canvas.height / 2;
        if (cropAspect > sourceAspect) {
            var imageH = Math.min(w * sourceAspect, h);
            var cropW = imageH / cropAspect;
            tlPos = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(cX - cropW / 2, cY + imageH / 2);
            trPos = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(cX + cropW / 2, cY + imageH / 2);
            blPos = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(cX - cropW / 2, cY - imageH / 2);
            brPos = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(cX + cropW / 2, cY - imageH / 2);
        }
        else {
            var imageW = Math.min(h / sourceAspect, w);
            var cropH = imageW * cropAspect;
            tlPos = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(cX - imageW / 2, cY + cropH / 2);
            trPos = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(cX + imageW / 2, cY + cropH / 2);
            blPos = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(cX - imageW / 2, cY - cropH / 2);
            brPos = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(cX + imageW / 2, cY - cropH / 2);
        }
        center = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(cX, cY);
        var positions = [tlPos, trPos, blPos, brPos, center];
        return positions;
    };
    ImageCropper.prototype.getCropPositionFromBounds = function (cropPosition) {
        var marginTop = 0;
        var marginLeft = 0;
        var canvasAspect = this.canvasHeight / this.canvasWidth;
        var sourceAspect = this.srcImage.height / this.srcImage.width;
        if (canvasAspect > sourceAspect) {
            marginTop = this.buffer.height / 2 - (this.canvasWidth * sourceAspect) / 2;
        }
        else {
            marginLeft = this.buffer.width / 2 - (this.canvasHeight / sourceAspect) / 2;
        }
        var ratioW = (this.canvasWidth - marginLeft * 2) / this.srcImage.width;
        var ratioH = (this.canvasHeight - marginTop * 2) / this.srcImage.height;
        var actualH = cropPosition.height * ratioH;
        var actualW = cropPosition.width * ratioW;
        var actualX = cropPosition.left * ratioW + marginLeft;
        var actualY = cropPosition.top * ratioH + marginTop;
        if (this.keepAspect) {
            var scaledW = actualH / this.aspectRatio;
            var scaledH = actualW * this.aspectRatio;
            if (this.getCropBounds().height === cropPosition.height) {
                actualH = scaledH;
            }
            else if (this.getCropBounds().width === cropPosition.width) {
                actualW = scaledW;
            }
            else {
                if (Math.abs(scaledH - actualH) < Math.abs(scaledW - actualW)) {
                    actualW = scaledW;
                }
                else {
                    actualH = scaledH;
                }
            }
        }
        var tlPos = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(actualX, actualY + actualH);
        var trPos = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(actualX + actualW, actualY + actualH);
        var blPos = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(actualX, actualY);
        var brPos = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(actualX + actualW, actualY);
        var center = __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.borrow(actualX + actualW / 2, actualY + actualH / 2);
        var positions = [tlPos, trPos, blPos, brPos, center];
        return positions;
    };
    // todo: Unused parameters?
    ImageCropper.prototype.getCroppedImage = function (fillWidth, fillHeight) {
        var bounds = this.getBounds();
        if (!this.srcImage) {
            return document.createElement('img');
        }
        else {
            var sourceAspect = this.srcImage.height / this.srcImage.width;
            var canvasAspect = this.canvas.height / this.canvas.width;
            var w = this.canvas.width;
            var h = this.canvas.height;
            if (canvasAspect > sourceAspect) {
                w = this.canvas.width;
                h = this.canvas.width * sourceAspect;
            }
            else {
                if (canvasAspect < sourceAspect) {
                    h = this.canvas.height;
                    w = this.canvas.height / sourceAspect;
                }
                else {
                    h = this.canvas.height;
                    w = this.canvas.width;
                }
            }
            this.ratioW = w / this.srcImage.width;
            this.ratioH = h / this.srcImage.height;
            var offsetH = (this.buffer.height - h) / 2 / this.ratioH;
            var offsetW = (this.buffer.width - w) / 2 / this.ratioW;
            var ctx = this.cropCanvas.getContext('2d');
            if (this.cropperSettings.preserveSize) {
                var width = Math.round(bounds.right / this.ratioW - bounds.left / this.ratioW);
                var height = Math.round(bounds.bottom / this.ratioH - bounds.top / this.ratioH);
                this.cropCanvas.width = width;
                this.cropCanvas.height = height;
                this.cropperSettings.croppedWidth = this.cropCanvas.width;
                this.cropperSettings.croppedHeight = this.cropCanvas.height;
            }
            ctx.clearRect(0, 0, this.cropCanvas.width, this.cropCanvas.height);
            this.drawImageIOSFix(ctx, this.srcImage, Math.max(Math.round((bounds.left) / this.ratioW - offsetW), 0), Math.max(Math.round(bounds.top / this.ratioH - offsetH), 0), Math.max(Math.round(bounds.width / this.ratioW), 1), Math.max(Math.round(bounds.height / this.ratioH), 1), 0, 0, this.cropCanvas.width, this.cropCanvas.height);
            if (this.cropperSettings.resampleFn) {
                this.cropperSettings.resampleFn(this.cropCanvas);
            }
            this.croppedImage.width = this.cropCanvas.width;
            this.croppedImage.height = this.cropCanvas.height;
            this.croppedImage.src = this.cropCanvas.toDataURL(this.fileType, this.cropperSettings.compressRatio);
            return this.croppedImage;
        }
    };
    ImageCropper.prototype.getBounds = function () {
        var minX = Number.MAX_VALUE;
        var minY = Number.MAX_VALUE;
        var maxX = -Number.MAX_VALUE;
        var maxY = -Number.MAX_VALUE;
        for (var i = 0; i < this.markers.length; i++) {
            var marker = this.markers[i];
            if (marker.position.x < minX) {
                minX = marker.position.x;
            }
            if (marker.position.x > maxX) {
                maxX = marker.position.x;
            }
            if (marker.position.y < minY) {
                minY = marker.position.y;
            }
            if (marker.position.y > maxY) {
                maxY = marker.position.y;
            }
        }
        var bounds = new __WEBPACK_IMPORTED_MODULE_0__model_bounds__["a" /* Bounds */]();
        bounds.left = minX;
        bounds.right = maxX;
        bounds.top = minY;
        bounds.bottom = maxY;
        return bounds;
    };
    ImageCropper.prototype.setBounds = function (bounds) {
        var topLeft;
        var topRight;
        var bottomLeft;
        var bottomRight;
        var currentBounds = this.getBounds();
        for (var i = 0; i < this.markers.length; i++) {
            var marker = this.markers[i];
            if (marker.position.x === currentBounds.left) {
                if (marker.position.y === currentBounds.top) {
                    marker.setPosition(bounds.left, bounds.top);
                }
                else {
                    marker.setPosition(bounds.left, bounds.bottom);
                }
            }
            else {
                if (marker.position.y === currentBounds.top) {
                    marker.setPosition(bounds.right, bounds.top);
                }
                else {
                    marker.setPosition(bounds.right, bounds.bottom);
                }
            }
        }
        this.center.recalculatePosition(bounds);
        this.center.draw(this.ctx);
        this.draw(this.ctx); // we need to redraw all canvas if we have changed bounds
    };
    ImageCropper.prototype.onTouchMove = function (event) {
        if (this.crop.isImageSet()) {
            event.preventDefault();
            if (event.touches.length === 1) {
                for (var i = 0; i < event.touches.length; i++) {
                    var touch = event.touches[i];
                    var touchPosition = ImageCropper.getTouchPos(this.canvas, touch);
                    var cropTouch = new __WEBPACK_IMPORTED_MODULE_2__model_cropTouch__["a" /* CropTouch */](touchPosition.x, touchPosition.y, touch.identifier);
                    __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(touchPosition);
                    this.move(cropTouch);
                }
            }
            else {
                if (event.touches.length === 2) {
                    var distance = ((event.touches[0].clientX - event.touches[1].clientX) * (event.touches[0].clientX - event.touches[1].clientX)) + ((event.touches[0].clientY - event.touches[1].clientY) * (event.touches[0].clientY - event.touches[1].clientY));
                    if (this.previousDistance && this.previousDistance !== distance) {
                        var increment = distance < this.previousDistance ? 1 : -1;
                        var bounds = this.getBounds();
                        bounds.top += increment;
                        bounds.left += increment;
                        bounds.right -= increment;
                        bounds.bottom -= increment;
                        this.setBounds(bounds);
                    }
                    this.previousDistance = distance;
                }
            }
            this.draw(this.ctx);
        }
    };
    ImageCropper.prototype.onMouseMove = function (e) {
        if (this.crop.isImageSet() && this.isMouseDown) {
            var mousePosition = ImageCropper.getMousePos(this.canvas, e);
            this.move(new __WEBPACK_IMPORTED_MODULE_2__model_cropTouch__["a" /* CropTouch */](mousePosition.x, mousePosition.y, 0));
            var dragTouch = this.getDragTouchForID(0);
            if (dragTouch) {
                dragTouch.x = mousePosition.x;
                dragTouch.y = mousePosition.y;
            }
            else {
                dragTouch = new __WEBPACK_IMPORTED_MODULE_2__model_cropTouch__["a" /* CropTouch */](mousePosition.x, mousePosition.y, 0);
            }
            __WEBPACK_IMPORTED_MODULE_6__model_pointPool__["a" /* PointPool */].instance.returnPoint(mousePosition);
            this.drawCursors(dragTouch);
            this.draw(this.ctx);
        }
    };
    ImageCropper.prototype.move = function (cropTouch) {
        if (this.isMouseDown) {
            this.handleMove(cropTouch);
        }
    };
    ImageCropper.prototype.getDragTouchForID = function (id) {
        for (var i = 0; i < this.currentDragTouches.length; i++) {
            if (id === this.currentDragTouches[i].id) {
                return this.currentDragTouches[i];
            }
        }
        return undefined;
    };
    ImageCropper.prototype.drawCursors = function (cropTouch) {
        var cursorDrawn = false;
        if (cropTouch != null) {
            if (cropTouch.dragHandle === this.center) {
                __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setStyle(this.canvas, 'move');
                cursorDrawn = true;
            }
            if (cropTouch.dragHandle !== null && cropTouch.dragHandle instanceof __WEBPACK_IMPORTED_MODULE_1__model_cornerMarker__["a" /* CornerMarker */]) {
                this.drawCornerCursor(cropTouch.dragHandle, cropTouch.dragHandle.position.x, cropTouch.dragHandle.position.y);
                cursorDrawn = true;
            }
        }
        var didDraw = false;
        if (!cursorDrawn) {
            for (var i = 0; i < this.markers.length; i++) {
                didDraw = didDraw || this.drawCornerCursor(this.markers[i], cropTouch.x, cropTouch.y);
            }
            if (!didDraw) {
                __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setStyle(this.canvas, 'initial');
            }
        }
        if (!didDraw && !cursorDrawn && this.center.touchInBounds(cropTouch.x, cropTouch.y)) {
            this.center.setOver(true);
            __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setOver(this.canvas);
            __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setStyle(this.canvas, 'move');
        }
        else {
            this.center.setOver(false);
        }
    };
    ImageCropper.prototype.drawCornerCursor = function (marker, x, y) {
        if (marker.touchInBounds(x, y)) {
            marker.setOver(true);
            if (marker.getHorizontalNeighbour().position.x > marker.position.x) {
                if (marker.getVerticalNeighbour().position.y > marker.position.y) {
                    __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setOver(this.canvas);
                    __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setStyle(this.canvas, 'nwse-resize');
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setOver(this.canvas);
                    __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setStyle(this.canvas, 'nesw-resize');
                }
            }
            else {
                if (marker.getVerticalNeighbour().position.y > marker.position.y) {
                    __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setOver(this.canvas);
                    __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setStyle(this.canvas, 'nesw-resize');
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setOver(this.canvas);
                    __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setStyle(this.canvas, 'nwse-resize');
                }
            }
            return true;
        }
        marker.setOver(false);
        return false;
    };
    // todo: Unused param
    ImageCropper.prototype.onTouchStart = function (event) {
        if (this.crop.isImageSet()) {
            this.isMouseDown = true;
        }
    };
    ImageCropper.prototype.onTouchEnd = function (event) {
        if (this.crop.isImageSet()) {
            for (var i = 0; i < event.changedTouches.length; i++) {
                var touch = event.changedTouches[i];
                var dragTouch = this.getDragTouchForID(touch.identifier);
                if (dragTouch && dragTouch !== undefined) {
                    if (dragTouch.dragHandle instanceof __WEBPACK_IMPORTED_MODULE_1__model_cornerMarker__["a" /* CornerMarker */] || dragTouch.dragHandle instanceof __WEBPACK_IMPORTED_MODULE_3__model_dragMarker__["a" /* DragMarker */]) {
                        dragTouch.dragHandle.setOver(false);
                    }
                    this.handleRelease(dragTouch);
                }
            }
            if (this.currentDragTouches.length === 0) {
                this.isMouseDown = false;
                this.currentlyInteracting = false;
            }
        }
    };
    // http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
    ImageCropper.prototype.drawImageIOSFix = function (ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
        // Works only if whole image is displayed:
        // ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
        // The following works correct also when only a part of the image is displayed:
        // ctx.drawImage(img, sx * this.vertSquashRatio, sy * this.vertSquashRatio, sw * this.vertSquashRatio, sh *
        // this.vertSquashRatio, dx, dy, dw, dh);
        ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
    };
    ImageCropper.prototype.onMouseDown = function (event) {
        if (this.crop.isImageSet()) {
            this.isMouseDown = true;
        }
    };
    ImageCropper.prototype.onMouseUp = function (event) {
        if (this.crop.isImageSet()) {
            __WEBPACK_IMPORTED_MODULE_5__imageCropperDataShare__["a" /* ImageCropperDataShare */].setReleased(this.canvas);
            this.isMouseDown = false;
            this.handleRelease(new __WEBPACK_IMPORTED_MODULE_2__model_cropTouch__["a" /* CropTouch */](0, 0, 0));
        }
    };
    return ImageCropper;
}(__WEBPACK_IMPORTED_MODULE_4__model_imageCropperModel__["a" /* ImageCropperModel */]));

//# sourceMappingURL=imageCropper.js.map

/***/ }),

/***/ 935:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imageCropper__ = __webpack_require__(934);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cropperSettings__ = __webpack_require__(908);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__exif__ = __webpack_require__(992);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_cropPosition__ = __webpack_require__(936);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageCropperComponent; });





var ImageCropperComponent = (function () {
    function ImageCropperComponent(renderer) {
        this.cropPositionChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onCrop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.renderer = renderer;
    }
    ImageCropperComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var canvas = this.cropcanvas.nativeElement;
        if (!this.settings) {
            this.settings = new __WEBPACK_IMPORTED_MODULE_2__cropperSettings__["a" /* CropperSettings */]();
        }
        this.renderer.setElementAttribute(canvas, 'class', this.settings.cropperClass);
        if (!this.settings.dynamicSizing) {
            this.renderer.setElementAttribute(canvas, 'width', this.settings.canvasWidth.toString());
            this.renderer.setElementAttribute(canvas, 'height', this.settings.canvasHeight.toString());
        }
        else {
            window.addEventListener('resize', function () {
                _this.settings.canvasWidth = canvas.offsetWidth;
                _this.settings.canvasHeight = canvas.offsetHeight;
                _this.cropper.resizeCanvas(canvas.offsetWidth, canvas.offsetHeight, true);
            });
        }
        if (!this.cropper) {
            this.cropper = new __WEBPACK_IMPORTED_MODULE_1__imageCropper__["a" /* ImageCropper */](this.settings);
        }
        this.cropper.prepare(canvas);
    };
    ImageCropperComponent.prototype.ngOnChanges = function (changes) {
        if (this.isCropPositionChanged(changes)) {
            this.cropper.updateCropPosition(this.cropPosition.toBounds());
            if (this.cropper.isImageSet()) {
                var bounds = this.cropper.getCropBounds();
                this.image.image = this.cropper.getCroppedImage().src;
                this.onCrop.emit(bounds);
            }
            this.updateCropBounds();
        }
    };
    ImageCropperComponent.prototype.onTouchMove = function (event) {
        this.cropper.onTouchMove(event);
    };
    ImageCropperComponent.prototype.onTouchStart = function (event) {
        this.cropper.onTouchStart(event);
    };
    ImageCropperComponent.prototype.onTouchEnd = function (event) {
        this.cropper.onTouchEnd(event);
        if (this.cropper.isImageSet()) {
            this.image.image = this.cropper.getCroppedImage().src;
            this.onCrop.emit(this.cropper.getCropBounds());
            this.updateCropBounds();
        }
    };
    ImageCropperComponent.prototype.onMouseDown = function (event) {
        this.cropper.onMouseDown(event);
    };
    ImageCropperComponent.prototype.onMouseUp = function (event) {
        if (this.cropper.isImageSet()) {
            this.cropper.onMouseUp(event);
            this.image.image = this.cropper.getCroppedImage().src;
            this.onCrop.emit(this.cropper.getCropBounds());
            this.updateCropBounds();
        }
    };
    ImageCropperComponent.prototype.onMouseMove = function (event) {
        this.cropper.onMouseMove(event);
    };
    ImageCropperComponent.prototype.fileChangeListener = function ($event) {
        if ($event.target.files.length === 0)
            return;
        var file = $event.target.files[0];
        if (this.settings.allowedFilesRegex.test(file.name)) {
            var image_1 = new Image();
            var fileReader = new FileReader();
            var that_1 = this;
            fileReader.addEventListener('loadend', function (loadEvent) {
                image_1.src = loadEvent.target.result;
                that_1.setImage(image_1);
            });
            fileReader.readAsDataURL(file);
        }
    };
    ImageCropperComponent.prototype.reset = function () {
        this.cropper.reset();
        this.renderer.setElementAttribute(this.cropcanvas.nativeElement, 'class', this.settings.cropperClass);
        this.image.image = this.cropper.getCroppedImage().src;
    };
    ImageCropperComponent.prototype.setImage = function (image, newBounds) {
        var _this = this;
        if (newBounds === void 0) { newBounds = null; }
        var self = this;
        this.renderer.setElementAttribute(this.cropcanvas.nativeElement, 'class', this.settings.cropperClass + " " + this.settings.croppingClass);
        this.intervalRef = window.setInterval(function () {
            if (self.intervalRef) {
                clearInterval(self.intervalRef);
            }
            if (image.naturalHeight > 0 && image.naturalWidth > 0) {
                image.height = image.naturalHeight;
                image.width = image.naturalWidth;
                clearInterval(self.intervalRef);
                self.getOrientedImage(image, function (img) {
                    if (_this.settings.dynamicSizing) {
                        var canvas = _this.cropcanvas.nativeElement;
                        _this.settings.canvasWidth = canvas.offsetWidth;
                        _this.settings.canvasHeight = canvas.offsetHeight;
                        _this.cropper.resizeCanvas(canvas.offsetWidth, canvas.offsetHeight, false);
                    }
                    self.cropper.setImage(img);
                    if (self.cropPosition && self.cropPosition.isInitialized()) {
                        self.cropper.updateCropPosition(self.cropPosition.toBounds());
                    }
                    self.image.original = img;
                    var bounds = self.cropper.getCropBounds();
                    self.image.image = self.cropper.getCroppedImage().src;
                    if (newBounds != null) {
                        bounds = newBounds;
                        self.cropper.setBounds(bounds);
                    }
                    self.onCrop.emit(bounds);
                });
            }
        }, 10);
    };
    ImageCropperComponent.prototype.isCropPositionChanged = function (changes) {
        if (this.cropper && changes['cropPosition'] && this.isCropPositionUpdateNeeded) {
            return true;
        }
        else {
            this.isCropPositionUpdateNeeded = true;
            return false;
        }
    };
    ImageCropperComponent.prototype.updateCropBounds = function () {
        var cropBound = this.cropper.getCropBounds();
        this.cropPositionChange.emit(new __WEBPACK_IMPORTED_MODULE_4__model_cropPosition__["a" /* CropPosition */](cropBound.left, cropBound.top, cropBound.width, cropBound.height));
        this.isCropPositionUpdateNeeded = false;
    };
    ImageCropperComponent.prototype.getOrientedImage = function (image, callback) {
        var img;
        __WEBPACK_IMPORTED_MODULE_3__exif__["a" /* Exif */].getData(image, function () {
            var orientation = __WEBPACK_IMPORTED_MODULE_3__exif__["a" /* Exif */].getTag(image, 'Orientation');
            if ([3, 6, 8].indexOf(orientation) > -1) {
                var canvas = document.createElement('canvas'), ctx = canvas.getContext('2d'), cw = image.width, ch = image.height, cx = 0, cy = 0, deg = 0;
                switch (orientation) {
                    case 3:
                        cx = -image.width;
                        cy = -image.height;
                        deg = 180;
                        break;
                    case 6:
                        cw = image.height;
                        ch = image.width;
                        cy = -image.height;
                        deg = 90;
                        break;
                    case 8:
                        cw = image.height;
                        ch = image.width;
                        cx = -image.width;
                        deg = 270;
                        break;
                    default:
                        break;
                }
                canvas.width = cw;
                canvas.height = ch;
                ctx.rotate(deg * Math.PI / 180);
                ctx.drawImage(image, cx, cy);
                img = document.createElement('img');
                img.width = cw;
                img.height = ch;
                img.addEventListener('load', function () {
                    callback(img);
                });
                img.src = canvas.toDataURL('image/png');
            }
            else {
                img = image;
                callback(img);
            }
        });
    };
    return ImageCropperComponent;
}());

ImageCropperComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'img-cropper',
                template: "\n        <span class=\"ng2-imgcrop\">\n          <input *ngIf=\"!settings.noFileInput\" type=\"file\" accept=\"image/*\" (change)=\"fileChangeListener($event)\">\n          <canvas #cropcanvas\n                  (mousedown)=\"onMouseDown($event)\"\n                  (mouseup)=\"onMouseUp($event)\"\n                  (mousemove)=\"onMouseMove($event)\"\n                  (mouseleave)=\"onMouseUp($event)\"\n                  (touchmove)=\"onTouchMove($event)\"\n                  (touchend)=\"onTouchEnd($event)\"\n                  (touchstart)=\"onTouchStart($event)\">\n          </canvas>\n        </span>\n      "
            },] },
];
/** @nocollapse */
ImageCropperComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
]; };
ImageCropperComponent.propDecorators = {
    'cropcanvas': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ['cropcanvas', undefined,] },],
    'settings': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['settings',] },],
    'image': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['image',] },],
    'cropper': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'cropPosition': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'cropPositionChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'onCrop': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
};
//# sourceMappingURL=imageCropperComponent.js.map

/***/ }),

/***/ 936:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bounds__ = __webpack_require__(909);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CropPosition; });

var CropPosition = (function () {
    function CropPosition(x, y, w, h) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (w === void 0) { w = 0; }
        if (h === void 0) { h = 0; }
        this.x = +x;
        this.y = +y;
        this.w = +w;
        this.h = +h;
    }
    CropPosition.prototype.toBounds = function () {
        return new __WEBPACK_IMPORTED_MODULE_0__bounds__["a" /* Bounds */](this.x, this.y, this.w, this.h);
    };
    CropPosition.prototype.isInitialized = function () {
        return this.x !== 0 && this.y !== 0 && this.w !== 0 && this.h !== 0;
    };
    return CropPosition;
}());

//# sourceMappingURL=cropPosition.js.map

/***/ }),

/***/ 937:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__point__ = __webpack_require__(938);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cropperSettings__ = __webpack_require__(908);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Handle; });


var Handle = (function () {
    function Handle(x, y, radius, settings) {
        this.cropperSettings = new __WEBPACK_IMPORTED_MODULE_1__cropperSettings__["a" /* CropperSettings */]();
        this.over = false;
        this.drag = false;
        this._position = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](x, y);
        this.offset = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* Point */](0, 0);
        this.radius = radius;
        this.cropperSettings = settings;
    }
    Handle.prototype.setDrag = function (value) {
        this.drag = value;
        this.setOver(value);
    };
    Handle.prototype.draw = function (ctx) {
        // this should't be empty
    };
    Handle.prototype.setOver = function (over) {
        this.over = over;
    };
    Handle.prototype.touchInBounds = function (x, y) {
        return (x > this.position.x - this.radius + this.offset.x) &&
            (x < this.position.x + this.radius + this.offset.x) &&
            (y > this.position.y - this.radius + this.offset.y) &&
            (y < this.position.y + this.radius + this.offset.y);
    };
    Object.defineProperty(Handle.prototype, "position", {
        get: function () {
            return this._position;
        },
        enumerable: true,
        configurable: true
    });
    Handle.prototype.setPosition = function (x, y) {
        this._position.x = x;
        this._position.y = y;
    };
    return Handle;
}());

//# sourceMappingURL=handle.js.map

/***/ }),

/***/ 938:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Point; });
var Point = (function () {
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(Point.prototype, "next", {
        get: function () {
            return this._next;
        },
        set: function (p) {
            this._next = p;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "prev", {
        get: function () {
            return this._prev;
        },
        set: function (p) {
            this._prev = p;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());

//# sourceMappingURL=point.js.map

/***/ }),

/***/ 939:
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
        template: __webpack_require__(1006),
        styles: [__webpack_require__(963)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 940:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableData; });
var TableData = [
    {
        'name': 'Victoria Cantrell',
        'position': 'Integer Corporation',
        'office': 'Croatia',
        'ext': "<strong>0839</strong>",
        'startDate': '2015/08/19',
        'salary': 208.178
    }, {
        'name': 'Pearl Crosby',
        'position': 'In PC',
        'office': 'Cambodia',
        'ext': "<strong>8262</strong>",
        'startDate': '2014/10/08',
        'salary': 114.367
    }, {
        'name': 'Colette Foley',
        'position': 'Lorem Inc.',
        'office': 'Korea, North',
        'ext': '8968',
        'startDate': '2015/07/19',
        'salary': 721.473
    }, {
        'name': 'Anastasia Shaffer',
        'position': 'Dolor Nulla Semper LLC',
        'office': 'Suriname',
        'ext': '7980',
        'startDate': '2015/04/20',
        'salary': 264.620
    }, {
        'name': 'Gabriel Castro',
        'position': 'Sed Limited',
        'office': 'Bahrain',
        'ext': '0757',
        'startDate': '2015/03/04',
        'salary': 651.350
    }, {
        'name': 'Cherokee Ware',
        'position': 'Tincidunt LLC',
        'office': 'United Kingdom (Great Britain)',
        'ext': '3995',
        'startDate': '2015/06/17',
        'salary': 666.259
    }, {
        'name': 'Barry Moss',
        'position': 'Sociis Industries',
        'office': 'Western Sahara',
        'ext': '6697',
        'startDate': '2015/08/13',
        'salary': 541.631
    }, {
        'name': 'Maryam Tucker',
        'position': 'Elit Pede Malesuada Inc.',
        'office': 'Brazil',
        'ext': '5203',
        'startDate': '2014/10/02',
        'salary': 182.294
    }, {
        'name': 'Constance Clayton',
        'position': 'Auctor Velit Aliquam LLP',
        'office': 'United Arab Emirates',
        'ext': '4204',
        'startDate': '2015/08/01',
        'salary': 218.597
    }, {
        'name': 'Rogan Tucker',
        'position': 'Arcu Vestibulum Ante Associates',
        'office': 'Jersey',
        'ext': '0885',
        'startDate': '2015/01/04',
        'salary': 861.632
    }, {
        'name': 'Emery Mcdowell',
        'position': 'Gravida Company',
        'office': 'New Zealand',
        'ext': '3951',
        'startDate': '2015/06/02',
        'salary': 413.568
    }, {
        'name': 'Yael Greer',
        'position': 'Orci Limited',
        'office': 'Madagascar',
        'ext': '1416',
        'startDate': '2014/12/04',
        'salary': 121.831
    }, {
        'name': 'Jared Burgess',
        'position': 'Auctor Incorporated',
        'office': 'Burundi',
        'ext': '4673',
        'startDate': '2015/01/12',
        'salary': 62.243
    }, {
        'name': 'Sharon Campbell',
        'position': 'Elit Curabitur Sed Consulting',
        'office': 'Comoros',
        'ext': '6274',
        'startDate': '2014/09/14',
        'salary': 200.854
    }, {
        'name': 'Yeo Church',
        'position': 'Donec Vitae Erat PC',
        'office': 'Saudi Arabia',
        'ext': '0269',
        'startDate': '2015/06/07',
        'salary': 581.193
    }, {
        'name': 'Kylie Barlow',
        'position': 'Fermentum Risus Corporation',
        'office': 'Papua New Guinea',
        'ext': '2010',
        'startDate': '2014/12/03',
        'salary': 418.115
    }, {
        'name': 'Nell Leonard',
        'position': 'Vestibulum Consulting',
        'office': 'Saudi Arabia',
        'ext': '4839',
        'startDate': '2015/05/29',
        'salary': 466.201
    }, {
        'name': 'Brandon Fleming',
        'position': 'Donec Egestas Associates',
        'office': 'Poland',
        'ext': '0622',
        'startDate': '2015/01/22',
        'salary': 800.011
    }, {
        'name': 'Inga Pena',
        'position': 'Et Magnis Dis Limited',
        'office': 'Belgium',
        'ext': '8140',
        'startDate': '2015/05/18',
        'salary': 564.245
    }, {
        'name': 'Arden Russo',
        'position': 'Est Tempor Bibendum Corp.',
        'office': 'Dominican Republic',
        'ext': '6774',
        'startDate': '2015/07/23',
        'salary': 357.222
    }, {
        'name': 'Liberty Gallegos',
        'position': 'Nec Diam LLC',
        'office': 'Ghana',
        'ext': '9266',
        'startDate': '2015/06/18',
        'salary': 554.375
    }, {
        'name': 'Dennis York',
        'position': 'Nullam Suscipit Foundation',
        'office': 'Namibia',
        'ext': '3133',
        'startDate': '2015/03/20',
        'salary': 90.417
    }, {
        'name': 'Petra Chandler',
        'position': 'Pede Nonummy Inc.',
        'office': 'Namibia',
        'ext': '3367',
        'startDate': '2015/03/26',
        'salary': 598.915
    }, {
        'name': 'Aurelia Marshall',
        'position': 'Donec Consulting',
        'office': 'Nicaragua',
        'ext': '2690',
        'startDate': '2015/08/18',
        'salary': 201.680
    }, {
        'name': 'Rose Carter',
        'position': 'Enim Consequat Purus Industries',
        'office': 'Morocco',
        'ext': '0619',
        'startDate': '2015/03/06',
        'salary': 220.187
    }, {
        'name': 'Denton Atkins',
        'position': 'Non Vestibulum PC',
        'office': 'Mali',
        'ext': '5806',
        'startDate': '2015/04/19',
        'salary': 324.588
    }, {
        'name': 'Germaine Osborn',
        'position': 'Tristique Aliquet PC',
        'office': 'Lesotho',
        'ext': '4469',
        'startDate': '2015/01/19',
        'salary': 351.108
    }, {
        'name': 'Nell Butler',
        'position': 'Sit Amet Dapibus Industries',
        'office': 'Cuba',
        'ext': '7860',
        'startDate': '2015/01/06',
        'salary': 230.072
    }, {
        'name': 'Brent Stein',
        'position': 'Eu Augue Porttitor LLP',
        'office': 'Cyprus',
        'ext': '4697',
        'startDate': '2014/11/02',
        'salary': 853.413
    }, {
        'name': 'Alexandra Shaw',
        'position': 'Aenean Gravida Limited',
        'office': 'Uruguay',
        'ext': '1140',
        'startDate': '2015/05/16',
        'salary': 401.970
    }, {
        'name': 'Veronica Allison',
        'position': 'Aliquet Diam Sed Institute',
        'office': 'Samoa',
        'ext': '9966',
        'startDate': '2015/05/17',
        'salary': 79.193
    }, {
        'name': 'Katelyn Gamble',
        'position': 'Sed Associates',
        'office': 'Mauritius',
        'ext': '4767',
        'startDate': '2015/03/20',
        'salary': 484.299
    }, {
        'name': 'James Greer',
        'position': 'A Dui Incorporated',
        'office': 'Norway',
        'ext': '5517',
        'startDate': '2015/02/21',
        'salary': 333.518
    }, {
        'name': 'Cain Vasquez',
        'position': 'Nulla Facilisis Suspendisse Institute',
        'office': 'China',
        'ext': '3179',
        'startDate': '2015/05/27',
        'salary': 651.761
    }, {
        'name': 'Shaeleigh Barr',
        'position': 'Eleifend Cras Institute',
        'office': 'Ghana',
        'ext': '5904',
        'startDate': '2015/04/01',
        'salary': 627.095
    }, {
        'name': 'Baker Mckay',
        'position': 'Ut Sagittis Associates',
        'office': 'Isle of Man',
        'ext': '9840',
        'startDate': '2015/01/12',
        'salary': 742.247
    }, {
        'name': 'Jayme Pace',
        'position': 'Cras Eu Tellus Associates',
        'office': 'Bouvet Island',
        'ext': '4580',
        'startDate': '2015/08/12',
        'salary': 591.588
    }, {
        'name': 'Reuben Albert',
        'position': 'Lobortis Institute',
        'office': 'Zambia',
        'ext': '8725',
        'startDate': '2015/04/04',
        'salary': 791.408
    }, {
        'name': 'Idola Burns',
        'position': 'Non Industries',
        'office': 'Myanmar',
        'ext': '3201',
        'startDate': '2015/06/24',
        'salary': 142.906
    }, {
        'name': 'Laura Macias',
        'position': 'Phasellus Inc.',
        'office': 'Mauritania',
        'ext': '2033',
        'startDate': '2014/11/21',
        'salary': 226.591
    }, {
        'name': 'Nichole Salas',
        'position': 'Duis PC',
        'office': 'Madagascar',
        'ext': '4397',
        'startDate': '2015/01/18',
        'salary': 234.196
    }, {
        'name': 'Hunter Walter',
        'position': 'Ullamcorper Duis Cursus Foundation',
        'office': 'Brazil',
        'ext': '2227',
        'startDate': '2015/02/28',
        'salary': 655.052
    }, {
        'name': 'Asher Rich',
        'position': 'Mauris Ipsum LLP',
        'office': 'Paraguay',
        'ext': '7288',
        'startDate': '2015/08/08',
        'salary': 222.946
    }, {
        'name': 'Angela Carlson',
        'position': 'Donec Tempor Institute',
        'office': 'Papua New Guinea',
        'ext': '5416',
        'startDate': '2015/02/12',
        'salary': 562.194
    }, {
        'name': 'James Dorsey',
        'position': 'Ipsum Leo Associates',
        'office': 'Congo (Brazzaville)',
        'ext': '6019',
        'startDate': '2015/01/10',
        'salary': 629.925
    }, {
        'name': 'Wesley Cobb',
        'position': 'Nunc Est Incorporated',
        'office': 'Australia',
        'ext': '6466',
        'startDate': '2015/01/30',
        'salary': 343.476
    }, {
        'name': 'Meghan Stephens',
        'position': 'Interdum PC',
        'office': 'Turkey',
        'ext': '8001',
        'startDate': '2014/10/11',
        'salary': 469.305
    }, {
        'name': 'Bertha Herrera',
        'position': 'Amet Limited',
        'office': 'Kenya',
        'ext': '4799',
        'startDate': '2014/11/22',
        'salary': 56.606
    }, {
        'name': 'Karina Key',
        'position': 'Quisque Varius Nam Company',
        'office': 'France',
        'ext': '3907',
        'startDate': '2015/03/26',
        'salary': 314.260
    }, {
        'name': 'Uriel Carson',
        'position': 'Penatibus PC',
        'office': 'Venezuela',
        'ext': '5902',
        'startDate': '2015/01/07',
        'salary': 106.335
    }, {
        'name': 'Mira Baird',
        'position': 'Felis Orci PC',
        'office': 'Niue',
        'ext': '4189',
        'startDate': '2015/08/25',
        'salary': 515.671
    }, {
        'name': 'Ursula Parrish',
        'position': 'Ac Corporation',
        'office': 'Macao',
        'ext': '4771',
        'startDate': '2015/06/30',
        'salary': 72.295
    }, {
        'name': 'Josephine Sykes',
        'position': 'Blandit Congue Limited',
        'office': 'Holy See (Vatican City State)',
        'ext': '4684',
        'startDate': '2014/12/22',
        'salary': 694.656
    }, {
        'name': 'Maggie Sims',
        'position': 'Vulputate Posuere Industries',
        'office': 'Sudan',
        'ext': '6482',
        'startDate': '2014/11/22',
        'salary': 363.743
    }, {
        'name': 'Rogan Fuentes',
        'position': 'Vestibulum Accumsan Neque Company',
        'office': 'Jersey',
        'ext': '4837',
        'startDate': '2015/07/29',
        'salary': 606.004
    }, {
        'name': 'Maya Haney',
        'position': 'Ac Foundation',
        'office': 'Falkland Islands',
        'ext': '5752',
        'startDate': '2015/09/03',
        'salary': 745.500
    }, {
        'name': 'Aquila Battle',
        'position': 'Sociis Natoque Penatibus Foundation',
        'office': 'Azerbaijan',
        'ext': '8470',
        'startDate': '2015/03/06',
        'salary': 582.265
    }, {
        'name': 'Connor Coleman',
        'position': 'Orci Lacus Vestibulum Foundation',
        'office': 'Croatia',
        'ext': '6217',
        'startDate': '2014/10/21',
        'salary': 416.958
    }, {
        'name': 'Charity Thomas',
        'position': 'Convallis Ligula Donec Inc.',
        'office': 'Benin',
        'ext': '6240',
        'startDate': '2015/07/12',
        'salary': 540.999
    }, {
        'name': 'Blythe Powers',
        'position': 'Amet Orci Limited',
        'office': 'Falkland Islands',
        'ext': '5608',
        'startDate': '2015/01/23',
        'salary': 480.067
    }, {
        'name': 'Adria Battle',
        'position': 'Ornare Lectus Incorporated',
        'office': 'British Indian Ocean Territory',
        'ext': '7419',
        'startDate': '2015/05/28',
        'salary': 257.937
    }, {
        'name': 'Melanie Mcintyre',
        'position': 'Nunc Corp.',
        'office': 'Mongolia',
        'ext': '4326',
        'startDate': '2015/01/06',
        'salary': 359.737
    }, {
        'name': 'Keely Bauer',
        'position': 'Nec Tempus Institute',
        'office': 'Somalia',
        'ext': '8372',
        'startDate': '2015/03/09',
        'salary': 99.718
    }, {
        'name': 'Noelani Strong',
        'position': 'Nec LLP',
        'office': 'Iran',
        'ext': '0049',
        'startDate': '2015/08/24',
        'salary': 480.718
    }, {
        'name': 'Jeanette Henderson',
        'position': 'Eu Elit Nulla Corporation',
        'office': 'Italy',
        'ext': '7586',
        'startDate': '2015/06/19',
        'salary': 253.772
    }, {
        'name': 'Candace Huber',
        'position': 'Sed Institute',
        'office': 'Uganda',
        'ext': '7183',
        'startDate': '2015/06/16',
        'salary': 388.879
    }, {
        'name': 'Bethany Potter',
        'position': 'Vivamus Nibh Dolor Incorporated',
        'office': 'Puerto Rico',
        'ext': '3354',
        'startDate': '2014/11/12',
        'salary': 747.310
    }, {
        'name': 'Whoopi Burks',
        'position': 'Justo Inc.',
        'office': 'Fiji',
        'ext': '2185',
        'startDate': '2014/09/24',
        'salary': 803.037
    }, {
        'name': 'Sheila Long',
        'position': 'Diam Associates',
        'office': 'Sao Tome and Principe',
        'ext': '7760',
        'startDate': '2014/12/21',
        'salary': 674.379
    }, {
        'name': 'Sonya Church',
        'position': 'Laoreet Institute',
        'office': 'Grenada',
        'ext': '8920',
        'startDate': '2015/06/03',
        'salary': 625.147
    }, {
        'name': 'Shaine Forbes',
        'position': 'Eu Arcu LLP',
        'office': 'Cyprus',
        'ext': '2369',
        'startDate': '2015/01/18',
        'salary': 208.100
    }, {
        'name': 'Alexandra Patrick',
        'position': 'Ligula Donec Inc.',
        'office': 'Viet Nam',
        'ext': '8531',
        'startDate': '2015/04/09',
        'salary': 104.063
    }, {
        'name': 'Patience Vincent',
        'position': 'Sem Molestie Associates',
        'office': 'Philippines',
        'ext': '8888',
        'startDate': '2015/07/04',
        'salary': 673.556
    }, {
        'name': 'Evelyn Smith',
        'position': 'Fusce Industries',
        'office': 'Togo',
        'ext': '5051',
        'startDate': '2015/08/15',
        'salary': 737.284
    }, {
        'name': 'Kieran Gonzalez',
        'position': 'Non Corp.',
        'office': 'Equatorial Guinea',
        'ext': '4834',
        'startDate': '2015/08/24',
        'salary': 90.195
    }, {
        'name': 'Molly Oneil',
        'position': 'Non Dui Consulting',
        'office': 'Belize',
        'ext': '7501',
        'startDate': '2014/10/28',
        'salary': 140.767
    }, {
        'name': 'Nigel Davenport',
        'position': 'Ullamcorper Velit In Industries',
        'office': 'Vanuatu',
        'ext': '0976',
        'startDate': '2015/03/16',
        'salary': 70.536
    }, {
        'name': 'Thor Young',
        'position': 'Malesuada Consulting',
        'office': 'French Southern Territories',
        'ext': '0211',
        'startDate': '2015/01/28',
        'salary': 75.501
    }, {
        'name': 'Finn Delacruz',
        'position': 'Lorem Industries',
        'office': 'Cocos (Keeling) Islands',
        'ext': '2980',
        'startDate': '2014/12/11',
        'salary': 754.967
    }, {
        'name': 'Lane Henderson',
        'position': 'Pede Foundation',
        'office': 'Kazakhstan',
        'ext': '1446',
        'startDate': '2015/07/02',
        'salary': 842.050
    }, {
        'name': 'Shea Potter',
        'position': 'Curabitur Limited',
        'office': 'Timor-Leste',
        'ext': '4654',
        'startDate': '2015/05/07',
        'salary': 263.629
    }, {
        'name': 'Brynn Yang',
        'position': 'Ut Limited',
        'office': 'Mayotte',
        'ext': '4668',
        'startDate': '2015/01/17',
        'salary': 74.292
    }, {
        'name': 'Kylan Fuentes',
        'position': 'Sapien Aenean Associates',
        'office': 'Brazil',
        'ext': '6623',
        'startDate': '2014/12/28',
        'salary': 108.632
    }, {
        'name': 'Lionel Mcbride',
        'position': 'Ipsum PC',
        'office': 'Portugal',
        'ext': '3978',
        'startDate': '2015/07/11',
        'salary': 34.244
    }, {
        'name': 'Paul Lucas',
        'position': 'Eget LLP',
        'office': 'Nicaragua',
        'ext': '8890',
        'startDate': '2014/09/30',
        'salary': 690.834
    }, {
        'name': 'Lareina Williamson',
        'position': 'Imperdiet Ullamcorper Ltd',
        'office': 'Cocos (Keeling) Islands',
        'ext': '9489',
        'startDate': '2014/12/01',
        'salary': 603.498
    }, {
        'name': 'Amy Acevedo',
        'position': 'Id Institute',
        'office': 'Cook Islands',
        'ext': '5592',
        'startDate': '2015/02/04',
        'salary': 125.165
    }, {
        'name': 'Nomlanga Silva',
        'position': 'Eget LLC',
        'office': 'Belize',
        'ext': '3110',
        'startDate': '2015/01/31',
        'salary': 268.509
    }, {
        'name': 'Amena Stone',
        'position': 'Enim Incorporated',
        'office': 'Guinea',
        'ext': '1211',
        'startDate': '2014/09/23',
        'salary': 214.381
    }, {
        'name': 'Danielle Coffey',
        'position': 'Feugiat Placerat Corp.',
        'office': 'Sao Tome and Principe',
        'ext': '8176',
        'startDate': '2015/06/17',
        'salary': 137.423
    }, {
        'name': 'Buffy Russell',
        'position': 'Lacus Quisque Ltd',
        'office': 'Ecuador',
        'ext': '6741',
        'startDate': '2014/10/17',
        'salary': 612.184
    }, {
        'name': 'Kaitlin Lamb',
        'position': 'Malesuada Fringilla Est Associates',
        'office': 'Algeria',
        'ext': '5054',
        'startDate': '2014/10/18',
        'salary': 327.367
    }, {
        'name': 'Leilani Yates',
        'position': 'Mus Proin LLC',
        'office': 'South Sudan',
        'ext': '1550',
        'startDate': '2015/05/27',
        'salary': 743.493
    }, {
        'name': 'Jemima Moon',
        'position': 'Phasellus Corp.',
        'office': 'South Georgia and The South Sandwich Islands',
        'ext': '7582',
        'startDate': '2015/05/21',
        'salary': 496.067
    }, {
        'name': 'Hiroko Schwartz',
        'position': 'Neque Institute',
        'office': 'Saint Vincent and The Grenadines',
        'ext': '9368',
        'startDate': '2015/03/13',
        'salary': 178.782
    }, {
        'name': 'Nathaniel Jensen',
        'position': 'Mi Tempor Limited',
        'office': 'Dominica',
        'ext': '8331',
        'startDate': '2014/12/05',
        'salary': 37.441
    }, {
        'name': 'Silas Sweeney',
        'position': 'Ultrices Institute',
        'office': 'Turkmenistan',
        'ext': '0746',
        'startDate': '2014/11/13',
        'salary': 152.980
    }, {
        'name': 'Jermaine Barry',
        'position': 'Dapibus Corporation',
        'office': 'Uzbekistan',
        'ext': '1545',
        'startDate': '2015/03/06',
        'salary': 409.463
    }, {
        'name': 'Tatiana Nichols',
        'position': 'Nec Diam Industries',
        'office': 'Cook Islands',
        'ext': '4395',
        'startDate': '2015/05/22',
        'salary': 51.155
    }, {
        'name': 'Rama Waller',
        'position': 'Sem Pellentesque LLC',
        'office': 'Andorra',
        'ext': '2973',
        'startDate': '2014/12/01',
        'salary': 223.227
    }
];
//# sourceMappingURL=ng2-table-data.js.map

/***/ }),

/***/ 941:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__(918);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_theme_settings_theme_settings_component__ = __webpack_require__(916);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_sales_reports_sales_reports_component__ = __webpack_require__(915);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_activity_reports_activity_reports_component__ = __webpack_require__(911);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_dasboard_dasboard_component__ = __webpack_require__(912);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_page_home_page_component__ = __webpack_require__(914);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_featured_products_featured_products_component__ = __webpack_require__(913);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_users_list_users_list_component__ = __webpack_require__(917);
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
            { path: '', component: __WEBPACK_IMPORTED_MODULE_6__components_dasboard_dasboard_component__["a" /* DasboardComponent */] },
            { path: 'themesettings', component: __WEBPACK_IMPORTED_MODULE_3__components_theme_settings_theme_settings_component__["a" /* ThemeSettingsComponent */] },
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_6__components_dasboard_dasboard_component__["a" /* DasboardComponent */] },
            { path: 'salesreports', component: __WEBPACK_IMPORTED_MODULE_4__components_sales_reports_sales_reports_component__["a" /* SalesReportsComponent */] },
            { path: 'activityreports', component: __WEBPACK_IMPORTED_MODULE_5__components_activity_reports_activity_reports_component__["a" /* ActivityReportsComponent */] },
            { path: 'homepage', component: __WEBPACK_IMPORTED_MODULE_7__components_home_page_home_page_component__["a" /* HomePageComponent */] },
            { path: 'featuredproducts', component: __WEBPACK_IMPORTED_MODULE_8__components_featured_products_featured_products_component__["a" /* FeaturedProductsComponent */] },
            { path: 'userslist', component: __WEBPACK_IMPORTED_MODULE_9__components_users_list_users_list_component__["a" /* UsersListComponent */] },
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

/***/ 942:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return menu; });
var site = {
    text: 'Site Settings',
    link: '/dashboard/themesettings',
    icon: 'icon-settings'
};
var Home = {
    text: 'Dashboard',
    link: '/dashboard/dashboard',
    icon: 'icon-home'
};
var Sales = {
    text: 'Sales Reports',
    link: '/dashboard/salesreports',
    icon: 'fa fa-inr'
};
var activityreports = {
    text: 'Activity Reports',
    link: '/dashboard/activityreports',
    icon: 'fa fa-bar-chart'
};
var featuredProducts = {
    text: 'Featured Products',
    link: '/dashboard/featuredproducts',
    icon: 'fa fa-product-hunt'
};
var userslist = {
    text: 'Users List',
    link: '/dashboard/userslist',
    icon: 'fa fa-users'
};
// const Dashboard = {
//     text: 'Dashboard',
//     link: '/dashboard',
//     icon: 'icon-speedometer',
//     submenu: [
//         {
//             text: 'Dashbord v1',
//             link: '/dashboard/v1'
//         },
//         {
//             text: 'Dashbord v2',
//             link: '/dashboard/v2'
//         },
//         {
//             text: 'Dashbord v3',
//             link: '/dashboard/v3'
//         }
//     ]
// };
// const Widgets = {
//     text: 'Widgets',
//     link: '/widgets',
//     icon: 'icon-grid'
// };
// const Elements = {
//     text: 'Elements',
//     link: '/elements',
//     icon: 'icon-chemistry',
//     submenu: [
//         {
//             text: 'Buttons',
//             link: '/elements/buttons'
//         },
//         {
//             text: 'Interaction',
//             link: '/elements/interaction'
//         },
//         {
//             text: 'Notification',
//             link: '/elements/notification'
//         },
//         {
//             text: 'SweetAlert',
//             link: '/elements/sweetalert'
//         },
//         {
//             text: 'Spinners',
//             link: '/elements/spinners'
//         },
//         {
//             text: 'Dropdown',
//             link: '/elements/dropdown'
//         },
//         {
//             text: 'Nav Tree',
//             link: '/elements/navtree'
//         },
//         {
//             text: 'Sortable',
//             link: '/elements/sortable'
//         },
//         {
//             text: 'Grid',
//             link: '/elements/grid'
//         },
//         {
//             text: 'Grid Masonry',
//             link: '/elements/gridmasonry'
//         },
//         {
//             text: 'Typography',
//             link: '/elements/typography'
//         },
//         {
//             text: 'Font Icons',
//             link: '/elements/iconsfont'
//         },
//         {
//             text: 'Weahter Icons',
//             link: '/elements/iconsweather'
//         },
//         {
//             text: 'Colors',
//             link: '/elements/colors'
//         },
//         {
//             text: 'Infinite Scroll',
//             link: '/elements/infinitescroll'
//         }
//     ]
// };
// const Forms = {
//     text: 'Forms',
//     link: '/forms',
//     icon: 'icon-note',
//     submenu: [
//         {
//             text: 'Standard',
//             link: '/forms/standard'
//         },
//         {
//             text: 'Extended',
//             link: '/forms/extended'
//         },
//         {
//             text: 'Validation',
//             link: '/forms/validation'
//         },
//         {
//             text: 'Upload',
//             link: '/forms/upload'
//         },
//         {
//             text: 'Image Crop',
//             link: '/forms/cropper'
//         }
//     ]
// };
// const Charts = {
//     text: 'Charts',
//     link: '/charts',
//     icon: 'icon-graph',
//     submenu: [
//         {
//             text: 'Flot',
//             link: '/charts/flot'
//         },
//         {
//             text: 'Radial',
//             link: '/charts/radial'
//         },
//         {
//             text: 'ChartJS',
//             link: '/charts/chartjs'
//         }
//     ]
// };
// const Tables = {
//     text: 'Tables',
//     link: '/tables',
//     icon: 'icon-grid',
//     submenu: [
//         {
//             text: 'Standard',
//             link: '/tables/standard'
//         },
//         {
//             text: 'Extended',
//             link: '/tables/extended'
//         },
//         {
//             text: 'Data-Tables',
//             link: '/tables/datatable'
//         },
//         {
//             text: 'Angular Grid',
//             link: '/tables/aggrid'
//         }
//     ]
// };
// const Maps = {
//     text: 'Maps',
//     link: '/maps',
//     icon: 'icon-map',
//     submenu: [
//         {
//             text: 'Google',
//             link: '/maps/google'
//         },
//         {
//             text: 'Vector',
//             link: '/maps/vector'
//         }
//     ]
// };
// const Pages = {
//     text: 'Pages',
//     link: '/pages',
//     icon: 'icon-doc',
//     submenu: [
//         {
//             text: 'Login',
//             link: '/login'
//         },
//         {
//             text: 'Register',
//             link: '/register'
//         },
//         {
//             text: 'Recover',
//             link: '/recover'
//         },
//         {
//             text: 'Lock',
//             link: '/lock'
//         },
//         {
//             text: '404',
//             link: '/404'
//         },
//         {
//             text: '500',
//             link: '/500'
//         },
//         {
//             text: 'Maintenance',
//             link: '/maintenance'
//         }
//     ]
// };
// const Blog = {
//     text: 'Blog',
//     link: '/blog',
//     icon: 'icon-notebook',
//     submenu: [
//         {
//             text: 'List',
//             link: '/blog/list'
//         },
//         {
//             text: 'Post',
//             link: '/blog/post'
//         },
//         {
//             text: 'Articles',
//             link: '/blog/articles'
//         },
//         {
//             text: 'Article View',
//             link: '/blog/articleview'
//         }
//     ]
// }
// const Ecommerce = {
//     text: 'Ecommerce',
//     link: '/ecommerce',
//     icon: 'icon-basket-loaded',
//     submenu: [
//         {
//             text: 'Orders',
//             link: '/ecommerce/orders'
//         },
//         {
//             text: 'Order View',
//             link: '/ecommerce/orderview'
//         },
//         {
//             text: 'Products',
//             link: '/ecommerce/products'
//         },
//         {
//             text: 'Product View',
//             link: '/ecommerce/productview'
//         },
//         {
//             text: 'Checkout',
//             link: '/ecommerce/checkout'
//         }
//     ]
// }
// const Extras = {
//     text: 'Extras',
//     link: '/extras',
//     icon: 'icon-cup',
//     submenu: [
//         {
//             text: 'Contacts',
//             link: '/extras/contacts'
//         },
//         {
//             text: 'Contact details',
//             link: '/extras/contactdetails'
//         },
//         {
//             text: 'Projects',
//             link: '/extras/projects'
//         },
//         {
//             text: 'Projects details',
//             link: '/extras/projectsdetails'
//         },
//         {
//             text: 'Team Viewer',
//             link: '/extras/teamviewer'
//         },
//         {
//             text: 'Social Board',
//             link: '/extras/socialboard'
//         },
//         {
//             text: 'Vote links',
//             link: '/extras/votelinks'
//         },
//         {
//             text: 'Bug tracker',
//             link: '/extras/bugtracker'
//         },
//         {
//             text: 'Faq',
//             link: '/extras/faq'
//         },
//         {
//             text: 'Help center',
//             link: '/extras/helpcenter'
//         },
//         {
//             text: 'Followers',
//             link: '/extras/followers'
//         },
//         {
//             text: 'Settings',
//             link: '/extras/settings'
//         },
//         {
//             text: 'Plans',
//             link: '/extras/plans'
//         },
//         {
//             text: 'File manager',
//             link: '/extras/filemanager'
//         },
//         {
//             text: 'Forum',
//             link: '/extras/forum'
//         },
//         {
//             text: 'Mailbox',
//             link: '/extras/mailbox'
//         },
//         {
//             text: 'Timeline',
//             link: '/extras/timeline'
//         },
//         {
//             text: 'Calendar',
//             link: '/extras/calendar'
//         },
//         {
//             text: 'Invoice',
//             link: '/extras/invoice'
//         },
//         {
//             text: 'Search',
//             link: '/extras/search'
//         },
//         {
//             text: 'Todo list',
//             link: '/extras/todolist'
//         },
//         {
//             text: 'Profile',
//             link: '/extras/profile'
//         },
//         {
//             text: 'Code editor',
//             link: '/extras/codeeditor'
//         }
//     ]
// }
// const headingMain = {
//     text: 'Main Navigation',
//     heading: true
// };
// const headingComponents = {
//     text: 'Components',
//     heading: true
// };
// const headingMore = {
//     text: 'More',
//     heading: true
// };
var menu = [
    // headingMain,
    // Home,
    Home,
    site,
    featuredProducts,
    Sales,
    activityreports,
    userslist
];
//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 943:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_settings_settings_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_menu_menu_service__ = __webpack_require__(95);
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
        this.openModal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
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
    SideNavbarComponent.prototype.test = function (value) {
        console.log(value);
        this.openModal.next('shaik');
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
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SideNavbarComponent.prototype, "openModal", void 0);
SideNavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-side-navbar',
        template: __webpack_require__(1011),
        styles: [__webpack_require__(968)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__core_menu_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_menu_menu_service__["a" /* MenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_settings_settings_service__["a" /* SettingsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _c || Object])
], SideNavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=side-navbar.component.js.map

/***/ }),

/***/ 944:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__userblock_service__ = __webpack_require__(919);
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
        this.someEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.user = {
            picture: 'assets/img/user/02.jpg'
        };
    }
    UserblockComponent.prototype.ngOnInit = function () {
    };
    UserblockComponent.prototype.callParent = function () {
        this.someEvent.next('fayaz');
    };
    UserblockComponent.prototype.userBlockIsVisible = function () {
        return this.userblockService.getVisibility();
    };
    return UserblockComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], UserblockComponent.prototype, "someEvent", void 0);
UserblockComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-userblock',
        template: __webpack_require__(1012),
        styles: [__webpack_require__(969)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__userblock_service__["a" /* UserblockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__userblock_service__["a" /* UserblockService */]) === "function" && _a || Object])
], UserblockComponent);

var _a;
//# sourceMappingURL=userblock.component.js.map

/***/ }),

/***/ 945:
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
        template: __webpack_require__(1013),
        styles: [__webpack_require__(970)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], NavsearchComponent);

var _a;
//# sourceMappingURL=navsearch.component.js.map

/***/ }),

/***/ 946:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_settings_settings_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_menu_menu_service__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_themes_themes_service__ = __webpack_require__(156);
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

var screenfull = __webpack_require__(452);
var browser = __webpack_require__(451);




var TopNavbarComponent = (function () {
    function TopNavbarComponent(menu, settings, themes, navbarService) {
        this.menu = menu;
        this.settings = settings;
        this.themes = themes;
        this.navbarService = navbarService;
        this.navCollapsed = true; // for horizontal layout
        this.menuItems = []; // for horizontal layout
        // show only a few items on demo
        this.menuItems = menu.getMenu().slice(0, 4); // for horizontal layout
    }
    TopNavbarComponent.prototype.ngOnInit = function () {
        // this.navbarService.url  = 'http://localhost:4200/src/app/shared/data.json';
        // this.navbarService.getData().subscribe(res => {
        //     console.log(res);
        //     this.logo = res[0].logo.src;
        //     this.themes.setTheme(res[0].default);
        // });
        if (localStorage.getItem('currentTheme')) {
            this.themes.setTheme(localStorage.getItem('currentTheme'));
        }
        if (localStorage.getItem('logo')) {
            this.logo = localStorage.getItem('logo');
        }
        else {
            this.logo = 'assets/img/logo.png';
        }
        if (localStorage.getItem('logoIcon')) {
            this.logoIcon = localStorage.getItem('logoIcon');
        }
        else {
            this.logoIcon = 'assets/img/logo-single.png';
        }
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
        template: __webpack_require__(1014),
        styles: [__webpack_require__(971)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__core_menu_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_menu_menu_service__["a" /* MenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_settings_settings_service__["a" /* SettingsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__core_themes_themes_service__["a" /* ThemesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_themes_themes_service__["a" /* ThemesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _d || Object])
], TopNavbarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=top-navbar.component.js.map

/***/ }),

/***/ 959:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

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

/***/ 961:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 962:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 963:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 964:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 965:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 966:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "input.form-control {\n  width: 95% !important; }\n\n@media only screen and (min-width: 781px) {\n  input.form-control {\n    width: 100% !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 967:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".showMOdal {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 968:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 969:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".profileEdit {\n  padding-left: 3%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 970:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 971:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".btn-primary-outline {\n  background-color: transparent;\n  border-color: #ccc;\n  color: #ccc; }\n\n.brand {\n  font-size: 30px;\n  font-weight: 900;\n  color: white;\n  font-family: inherit;\n  padding-top: 7% !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 985:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
/* tslint:disable-next-line */
var BaseChartDirective = (function () {
    function BaseChartDirective(element) {
        this.labels = [];
        this.options = {};
        this.chartClick = new core_1.EventEmitter();
        this.chartHover = new core_1.EventEmitter();
        this.initFlag = false;
        this.element = element;
    }
    BaseChartDirective.prototype.ngOnInit = function () {
        this.ctx = this.element.nativeElement.getContext('2d');
        this.cvs = this.element.nativeElement;
        this.initFlag = true;
        if (this.data || this.datasets) {
            this.refresh();
        }
    };
    BaseChartDirective.prototype.ngOnChanges = function (changes) {
        if (this.initFlag) {
            // Check if the changes are in the data or datasets
            if (changes.hasOwnProperty('data') || changes.hasOwnProperty('datasets')) {
                if (changes['data']) {
                    this.updateChartData(changes['data'].currentValue);
                }
                else {
                    this.updateChartData(changes['datasets'].currentValue);
                }
                this.chart.update();
            }
            else {
                // otherwise rebuild the chart
                this.refresh();
            }
        }
    };
    BaseChartDirective.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.chart.destroy();
            this.chart = void 0;
        }
    };
    BaseChartDirective.prototype.getChartBuilder = function (ctx /*, data:Array<any>, options:any*/) {
        var _this = this;
        var datasets = this.getDatasets();
        var options = Object.assign({}, this.options);
        if (this.legend === false) {
            options.legend = { display: false };
        }
        // hock for onHover and onClick events
        options.hover = options.hover || {};
        if (!options.hover.onHover) {
            options.hover.onHover = function (active) {
                if (active && !active.length) {
                    return;
                }
                _this.chartHover.emit({ active: active });
            };
        }
        if (!options.onClick) {
            options.onClick = function (event, active) {
                _this.chartClick.emit({ event: event, active: active });
            };
        }
        var opts = {
            type: this.chartType,
            data: {
                labels: this.labels,
                datasets: datasets
            },
            options: options
        };
        if (typeof Chart === 'undefined') {
            throw new Error('ng2-charts configuration issue: Embedding Chart.js lib is mandatory');
        }
        return new Chart(ctx, opts);
    };
    BaseChartDirective.prototype.updateChartData = function (newDataValues) {
        if (Array.isArray(newDataValues[0].data)) {
            this.chart.data.datasets.forEach(function (dataset, i) {
                dataset.data = newDataValues[i].data;
                if (newDataValues[i].label) {
                    dataset.label = newDataValues[i].label;
                }
            });
        }
        else {
            this.chart.data.datasets[0].data = newDataValues;
        }
    };
    BaseChartDirective.prototype.getDatasets = function () {
        var _this = this;
        var datasets = void 0;
        // in case if datasets is not provided, but data is present
        if (!this.datasets || !this.datasets.length && (this.data && this.data.length)) {
            if (Array.isArray(this.data[0])) {
                datasets = this.data.map(function (data, index) {
                    return { data: data, label: _this.labels[index] || "Label " + index };
                });
            }
            else {
                datasets = [{ data: this.data, label: "Label 0" }];
            }
        }
        if (this.datasets && this.datasets.length ||
            (datasets && datasets.length)) {
            datasets = (this.datasets || datasets)
                .map(function (elm, index) {
                var newElm = Object.assign({}, elm);
                if (_this.colors && _this.colors.length) {
                    Object.assign(newElm, _this.colors[index]);
                }
                else {
                    Object.assign(newElm, getColors(_this.chartType, index, newElm.data.length));
                }
                return newElm;
            });
        }
        if (!datasets) {
            throw new Error("ng-charts configuration error,\n      data or datasets field are required to render char " + this.chartType);
        }
        return datasets;
    };
    BaseChartDirective.prototype.refresh = function () {
        // if (this.options && this.options.responsive) {
        //   setTimeout(() => this.refresh(), 50);
        // }
        // todo: remove this line, it is producing flickering
        this.ngOnDestroy();
        this.chart = this.getChartBuilder(this.ctx /*, data, this.options*/);
    };
    BaseChartDirective.defaultColors = [
        [255, 99, 132],
        [54, 162, 235],
        [255, 206, 86],
        [231, 233, 237],
        [75, 192, 192],
        [151, 187, 205],
        [220, 220, 220],
        [247, 70, 74],
        [70, 191, 189],
        [253, 180, 92],
        [148, 159, 177],
        [77, 83, 96]
    ];
    BaseChartDirective.decorators = [
        { type: core_1.Directive, args: [{ selector: 'canvas[baseChart]', exportAs: 'base-chart' },] },
    ];
    /** @nocollapse */
    BaseChartDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    BaseChartDirective.propDecorators = {
        'data': [{ type: core_1.Input },],
        'datasets': [{ type: core_1.Input },],
        'labels': [{ type: core_1.Input },],
        'options': [{ type: core_1.Input },],
        'chartType': [{ type: core_1.Input },],
        'colors': [{ type: core_1.Input },],
        'legend': [{ type: core_1.Input },],
        'chartClick': [{ type: core_1.Output },],
        'chartHover': [{ type: core_1.Output },],
    };
    return BaseChartDirective;
}());
exports.BaseChartDirective = BaseChartDirective;
function rgba(colour, alpha) {
    return 'rgba(' + colour.concat(alpha).join(',') + ')';
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function formatLineColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.4),
        borderColor: rgba(colors, 1),
        pointBackgroundColor: rgba(colors, 1),
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: rgba(colors, 0.8)
    };
}
function formatBarColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.6),
        borderColor: rgba(colors, 1),
        hoverBackgroundColor: rgba(colors, 0.8),
        hoverBorderColor: rgba(colors, 1)
    };
}
function formatPieColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function () { return '#fff'; }),
        pointBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointBorderColor: colors.map(function () { return '#fff'; }),
        pointHoverBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointHoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
function formatPolarAreaColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function (color) { return rgba(color, 1); }),
        hoverBackgroundColor: colors.map(function (color) { return rgba(color, 0.8); }),
        hoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
function getRandomColor() {
    return [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
}
/**
 * Generate colors for line|bar charts
 * @param index
 * @returns {number[]|Color}
 */
function generateColor(index) {
    return BaseChartDirective.defaultColors[index] || getRandomColor();
}
/**
 * Generate colors for pie|doughnut charts
 * @param count
 * @returns {Colors}
 */
function generateColors(count) {
    var colorsArr = new Array(count);
    for (var i = 0; i < count; i++) {
        colorsArr[i] = BaseChartDirective.defaultColors[i] || getRandomColor();
    }
    return colorsArr;
}
/**
 * Generate colors by chart type
 * @param chartType
 * @param index
 * @param count
 * @returns {Color}
 */
function getColors(chartType, index, count) {
    if (chartType === 'pie' || chartType === 'doughnut') {
        return formatPieColors(generateColors(count));
    }
    if (chartType === 'polarArea') {
        return formatPolarAreaColors(generateColors(count));
    }
    if (chartType === 'line' || chartType === 'radar') {
        return formatLineColor(generateColor(index));
    }
    if (chartType === 'bar' || chartType === 'horizontalBar') {
        return formatBarColor(generateColor(index));
    }
    return generateColor(index);
}
var ChartsModule = (function () {
    function ChartsModule() {
    }
    ChartsModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        BaseChartDirective
                    ],
                    exports: [
                        BaseChartDirective
                    ],
                    imports: []
                },] },
    ];
    /** @nocollapse */
    ChartsModule.ctorParameters = function () { return []; };
    return ChartsModule;
}());
exports.ChartsModule = ChartsModule;


/***/ }),

/***/ 986:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(985));


/***/ }),

/***/ 987:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(986));


/***/ }),

/***/ 988:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var FileType = (function () {
    function FileType() {
    }
    FileType.getMimeClass = function (file) {
        var mimeClass = 'application';
        if (this.mime_psd.indexOf(file.type) !== -1) {
            mimeClass = 'image';
        }
        else if (file.type.match('image.*')) {
            mimeClass = 'image';
        }
        else if (file.type.match('video.*')) {
            mimeClass = 'video';
        }
        else if (file.type.match('audio.*')) {
            mimeClass = 'audio';
        }
        else if (file.type === 'application/pdf') {
            mimeClass = 'pdf';
        }
        else if (this.mime_compress.indexOf(file.type) !== -1) {
            mimeClass = 'compress';
        }
        else if (this.mime_doc.indexOf(file.type) !== -1) {
            mimeClass = 'doc';
        }
        else if (this.mime_xsl.indexOf(file.type) !== -1) {
            mimeClass = 'xls';
        }
        else if (this.mime_ppt.indexOf(file.type) !== -1) {
            mimeClass = 'ppt';
        }
        if (mimeClass === 'application') {
            mimeClass = this.fileTypeDetection(file.name);
        }
        return mimeClass;
    };
    FileType.fileTypeDetection = function (inputFilename) {
        var types = {
            'jpg': 'image',
            'jpeg': 'image',
            'tif': 'image',
            'psd': 'image',
            'bmp': 'image',
            'png': 'image',
            'nef': 'image',
            'tiff': 'image',
            'cr2': 'image',
            'dwg': 'image',
            'cdr': 'image',
            'ai': 'image',
            'indd': 'image',
            'pin': 'image',
            'cdp': 'image',
            'skp': 'image',
            'stp': 'image',
            '3dm': 'image',
            'mp3': 'audio',
            'wav': 'audio',
            'wma': 'audio',
            'mod': 'audio',
            'm4a': 'audio',
            'compress': 'compress',
            'rar': 'compress',
            '7z': 'compress',
            'lz': 'compress',
            'z01': 'compress',
            'pdf': 'pdf',
            'xls': 'xls',
            'xlsx': 'xls',
            'ods': 'xls',
            'mp4': 'video',
            'avi': 'video',
            'wmv': 'video',
            'mpg': 'video',
            'mts': 'video',
            'flv': 'video',
            '3gp': 'video',
            'vob': 'video',
            'm4v': 'video',
            'mpeg': 'video',
            'm2ts': 'video',
            'mov': 'video',
            'doc': 'doc',
            'docx': 'doc',
            'eps': 'doc',
            'txt': 'doc',
            'odt': 'doc',
            'rtf': 'doc',
            'ppt': 'ppt',
            'pptx': 'ppt',
            'pps': 'ppt',
            'ppsx': 'ppt',
            'odp': 'ppt'
        };
        var chunks = inputFilename.split('.');
        if (chunks.length < 2) {
            return 'application';
        }
        var extension = chunks[chunks.length - 1].toLowerCase();
        if (types[extension] === undefined) {
            return 'application';
        }
        else {
            return types[extension];
        }
    };
    return FileType;
}());
/*  MS office  */
FileType.mime_doc = [
    'application/msword',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    'application/vnd.ms-word.document.macroEnabled.12',
    'application/vnd.ms-word.template.macroEnabled.12'
];
FileType.mime_xsl = [
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
    'application/vnd.ms-excel.sheet.macroEnabled.12',
    'application/vnd.ms-excel.template.macroEnabled.12',
    'application/vnd.ms-excel.addin.macroEnabled.12',
    'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
];
FileType.mime_ppt = [
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.presentationml.template',
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
    'application/vnd.ms-powerpoint.addin.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
    'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
];
/* PSD */
FileType.mime_psd = [
    'image/photoshop',
    'image/x-photoshop',
    'image/psd',
    'application/photoshop',
    'application/psd',
    'zz-application/zz-winassoc-psd'
];
/* Compressed files */
FileType.mime_compress = [
    'application/x-gtar',
    'application/x-gcompress',
    'application/compress',
    'application/x-tar',
    'application/x-rar-compressed',
    'application/octet-stream'
];
exports.FileType = FileType;


/***/ }),

/***/ 989:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var common_1 = __webpack_require__(15);
var core_1 = __webpack_require__(0);
var file_drop_directive_1 = __webpack_require__(930);
var file_select_directive_1 = __webpack_require__(932);
var FileUploadModule = (function () {
    function FileUploadModule() {
    }
    return FileUploadModule;
}());
FileUploadModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective],
        exports: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective]
    })
], FileUploadModule);
exports.FileUploadModule = FileUploadModule;


/***/ }),

/***/ 990:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(932));
__export(__webpack_require__(930));
__export(__webpack_require__(907));
__export(__webpack_require__(931));
__export(__webpack_require__(906));
var file_upload_module_1 = __webpack_require__(989);
exports.FileUploadModule = file_upload_module_1.FileUploadModule;


/***/ }),

/***/ 991:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_imageCropperModule__ = __webpack_require__(994);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_imageCropperModule__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_imageCropperComponent__ = __webpack_require__(935);
/* unused harmony reexport ImageCropperComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_imageCropper__ = __webpack_require__(934);
/* unused harmony reexport ImageCropper */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_cropperSettings__ = __webpack_require__(908);
/* unused harmony reexport CropperSettings */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_cropperDrawSettings__ = __webpack_require__(933);
/* unused harmony reexport CropperDrawSettings */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_model_bounds__ = __webpack_require__(909);
/* unused harmony reexport Bounds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_model_cropPosition__ = __webpack_require__(936);
/* unused harmony reexport CropPosition */
// core


// extra classes



// models


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 992:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Fraction */
/* unused harmony export Debug */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Exif; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Fraction = (function (_super) {
    __extends(Fraction, _super);
    function Fraction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Fraction;
}(Number));

// Console debug wrapper that makes code looks a little bit cleaner
var Debug = (function () {
    function Debug() {
    }
    Debug.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (Exif.debug) {
            console.log(args);
        }
    };
    return Debug;
}());

var Exif = (function () {
    function Exif() {
    }
    Exif.addEvent = function (element, event, handler) {
        if (element.addEventListener) {
            element.addEventListener(event, handler, false);
        }
        else {
            // Hello, IE!
            if (element.attachEvent) {
                element.attachEvent('on' + event, handler);
            }
        }
    };
    Exif.imageHasData = function (img) {
        return !!(img.exifdata);
    };
    Exif.base64ToArrayBuffer = function (base64) {
        base64 = base64.replace(/^data:([^;]+);base64,/gmi, '');
        var binary = atob(base64);
        var len = binary.length;
        var buffer = new ArrayBuffer(len);
        var view = new Uint8Array(buffer);
        for (var i = 0; i < len; i++) {
            view[i] = binary.charCodeAt(i);
        }
        return buffer;
    };
    Exif.objectURLToBlob = function (url, callback) {
        var http = new XMLHttpRequest();
        http.open('GET', url, true);
        http.responseType = 'blob';
        http.onload = function () {
            if (http.status === 200 || http.status === 0) {
                callback(http.response);
            }
        };
        http.send();
    };
    Exif.getImageData = function (img, callback) {
        function handleBinaryFile(binFile) {
            var data = Exif.findEXIFinJPEG(binFile);
            var iptcdata = Exif.findIPTCinJPEG(binFile);
            img.exifdata = data || {};
            img.iptcdata = iptcdata || {};
            if (callback) {
                callback.call(img);
            }
        }
        if ('src' in img && img.src) {
            if (/^data:/i.test(img.src)) {
                var arrayBuffer = Exif.base64ToArrayBuffer(img.src);
                handleBinaryFile(arrayBuffer);
            }
            else {
                if (/^blob:/i.test(img.src)) {
                    var fileReader_1 = new FileReader();
                    fileReader_1.onload = function (e) {
                        handleBinaryFile(e.target.result);
                    };
                    Exif.objectURLToBlob(img.src, function (blob) {
                        fileReader_1.readAsArrayBuffer(blob);
                    });
                }
                else {
                    var http_1 = new XMLHttpRequest();
                    http_1.onload = function () {
                        if (http_1.status === 200 || http_1.status === 0) {
                            handleBinaryFile(http_1.response);
                        }
                        else {
                            throw 'Could not load image';
                        }
                    };
                    http_1.open('GET', img.src, true);
                    http_1.responseType = 'arraybuffer';
                    http_1.send(null);
                }
            }
        }
        else {
            if (FileReader && (img instanceof Blob || img instanceof File)) {
                var fileReader = new FileReader();
                fileReader.onload = function (e) {
                    Debug.log('Got file of length ' + e.target.result.byteLength);
                    handleBinaryFile(e.target.result);
                };
                fileReader.readAsArrayBuffer(img);
            }
        }
    };
    Exif.findEXIFinJPEG = function (file) {
        var dataView = new DataView(file);
        Debug.log('Got file of length ' + file.byteLength);
        if ((dataView.getUint8(0) !== 0xFF) || (dataView.getUint8(1) !== 0xD8)) {
            Debug.log('Not a valid JPEG');
            return false; // not a valid jpeg
        }
        var offset = 2;
        var length = file.byteLength;
        var marker;
        while (offset < length) {
            if (dataView.getUint8(offset) !== 0xFF) {
                Debug.log('Not a valid marker at offset ' + offset + ', found: ' + dataView.getUint8(offset));
                return false; // not a valid marker, something is wrong
            }
            marker = dataView.getUint8(offset + 1);
            Debug.log(marker);
            // we could implement handling for other markers here,
            // but we're only looking for 0xFFE1 for EXIF data
            if (marker === 225) {
                Debug.log('Found 0xFFE1 marker');
                return Exif.readEXIFData(dataView, offset + 4); // , dataView.getUint16(offset + 2) - 2);
                // offset += 2 + file.getShortAt(offset+2, true);
            }
            else {
                offset += 2 + dataView.getUint16(offset + 2);
            }
        }
    };
    Exif.findIPTCinJPEG = function (file) {
        var dataView = new DataView(file);
        Debug.log('Got file of length ' + file.byteLength);
        if ((dataView.getUint8(0) !== 0xFF) || (dataView.getUint8(1) !== 0xD8)) {
            Debug.log('Not a valid JPEG');
            return false; // not a valid jpeg
        }
        var offset = 2;
        var length = file.byteLength;
        var isFieldSegmentStart = function (_dataView, _offset) {
            return (_dataView.getUint8(_offset) === 0x38 && _dataView.getUint8(_offset + 1) === 0x42 && _dataView.getUint8(_offset + 2) === 0x49 && _dataView.getUint8(_offset + 3) === 0x4D && _dataView.getUint8(_offset + 4) === 0x04 && _dataView.getUint8(_offset + 5) === 0x04);
        };
        while (offset < length) {
            if (isFieldSegmentStart(dataView, offset)) {
                // Get the length of the name header (which is padded to an even number of bytes)
                var nameHeaderLength = dataView.getUint8(offset + 7);
                if (nameHeaderLength % 2 !== 0) {
                    nameHeaderLength += 1;
                }
                // Check for pre photoshop 6 format
                if (nameHeaderLength === 0) {
                    // Always 4
                    nameHeaderLength = 4;
                }
                var startOffset = offset + 8 + nameHeaderLength;
                var sectionLength = dataView.getUint16(offset + 6 + nameHeaderLength);
                return Exif.readIPTCData(file, startOffset, sectionLength);
            }
            // Not the marker, continue searching
            offset++;
        }
    };
    Exif.readIPTCData = function (file, startOffset, sectionLength) {
        var dataView = new DataView(file);
        var data = {};
        var fieldValue, fieldName, dataSize, segmentType, segmentSize;
        var segmentStartPos = startOffset;
        while (segmentStartPos < startOffset + sectionLength) {
            if (dataView.getUint8(segmentStartPos) === 0x1C && dataView.getUint8(segmentStartPos + 1) === 0x02) {
                segmentType = dataView.getUint8(segmentStartPos + 2);
                if (segmentType in Exif.IptcFieldMap) {
                    dataSize = dataView.getInt16(segmentStartPos + 3);
                    segmentSize = dataSize + 5;
                    fieldName = Exif.IptcFieldMap[segmentType];
                    fieldValue = Exif.getStringFromDB(dataView, segmentStartPos + 5, dataSize);
                    // Check if we already stored a value with this name
                    if (data.hasOwnProperty(fieldName)) {
                        // Value already stored with this name, create multivalue field
                        if (data[fieldName] instanceof Array) {
                            data[fieldName].push(fieldValue);
                        }
                        else {
                            data[fieldName] = [data[fieldName], fieldValue];
                        }
                    }
                    else {
                        data[fieldName] = fieldValue;
                    }
                }
            }
            segmentStartPos++;
        }
        return data;
    };
    Exif.readTags = function (file, tiffStart, dirStart, strings, bigEnd) {
        var entries = file.getUint16(dirStart, !bigEnd);
        var tags = {};
        var entryOffset;
        var tag;
        for (var i = 0; i < entries; i++) {
            entryOffset = dirStart + i * 12 + 2;
            tag = strings[file.getUint16(entryOffset, !bigEnd)];
            if (!tag) {
                Debug.log('Unknown tag: ' + file.getUint16(entryOffset, !bigEnd));
            }
            tags[tag] = Exif.readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd);
        }
        return tags;
    };
    Exif.readTagValue = function (file, entryOffset, tiffStart, dirStart, bigEnd) {
        var type = file.getUint16(entryOffset + 2, !bigEnd);
        var numValues = file.getUint32(entryOffset + 4, !bigEnd);
        var valueOffset = file.getUint32(entryOffset + 8, !bigEnd) + tiffStart;
        var offset;
        var vals, val, n;
        var numerator;
        var denominator;
        switch (type) {
            case 1: // byte, 8-bit unsigned int
            case 7:
                if (numValues === 1) {
                    return file.getUint8(entryOffset + 8, !bigEnd);
                }
                else {
                    offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getUint8(offset + n);
                    }
                    return vals;
                }
            case 2:
                offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                return Exif.getStringFromDB(file, offset, numValues - 1);
            case 3:
                if (numValues === 1) {
                    return file.getUint16(entryOffset + 8, !bigEnd);
                }
                else {
                    offset = numValues > 2 ? valueOffset : (entryOffset + 8);
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getUint16(offset + 2 * n, !bigEnd);
                    }
                    return vals;
                }
            case 4:
                if (numValues === 1) {
                    return file.getUint32(entryOffset + 8, !bigEnd);
                }
                else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getUint32(valueOffset + 4 * n, !bigEnd);
                    }
                    return vals;
                }
            case 5:
                if (numValues === 1) {
                    numerator = file.getUint32(valueOffset, !bigEnd);
                    denominator = file.getUint32(valueOffset + 4, !bigEnd);
                    val = new Fraction(numerator / denominator);
                    val.numerator = numerator;
                    val.denominator = denominator;
                    return val;
                }
                else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        numerator = file.getUint32(valueOffset + 8 * n, !bigEnd);
                        denominator = file.getUint32(valueOffset + 4 + 8 * n, !bigEnd);
                        vals[n] = new Fraction(numerator / denominator);
                        vals[n].numerator = numerator;
                        vals[n].denominator = denominator;
                    }
                    return vals;
                }
            case 9:
                if (numValues === 1) {
                    return file.getInt32(entryOffset + 8, !bigEnd);
                }
                else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getInt32(valueOffset + 4 * n, !bigEnd);
                    }
                    return vals;
                }
            case 10:
                if (numValues === 1) {
                    return file.getInt32(valueOffset, !bigEnd) / file.getInt32(valueOffset + 4, !bigEnd);
                }
                else {
                    vals = [];
                    for (n = 0; n < numValues; n++) {
                        vals[n] = file.getInt32(valueOffset + 8 * n, !bigEnd) / file.getInt32(valueOffset + 4 + 8 * n, !bigEnd);
                    }
                    return vals;
                }
            default:
                break;
        }
    };
    Exif.getStringFromDB = function (buffer, start, length) {
        var outstr = '';
        for (var n = start; n < start + length; n++) {
            outstr += String.fromCharCode(buffer.getUint8(n));
        }
        return outstr;
    };
    Exif.readEXIFData = function (file, start) {
        if (Exif.getStringFromDB(file, start, 4) !== 'Exif') {
            Debug.log('Not valid EXIF data! ' + Exif.getStringFromDB(file, start, 4));
            return false;
        }
        var bigEnd, tags, tag, exifData, gpsData, tiffOffset = start + 6;
        // test for TIFF validity and endianness
        if (file.getUint16(tiffOffset) === 0x4949) {
            bigEnd = false;
        }
        else {
            if (file.getUint16(tiffOffset) === 0x4D4D) {
                bigEnd = true;
            }
            else {
                Debug.log('Not valid TIFF data! (no 0x4949 or 0x4D4D)');
                return false;
            }
        }
        if (file.getUint16(tiffOffset + 2, !bigEnd) !== 0x002A) {
            Debug.log('Not valid TIFF data! (no 0x002A)');
            return false;
        }
        var firstIFDOffset = file.getUint32(tiffOffset + 4, !bigEnd);
        if (firstIFDOffset < 0x00000008) {
            Debug.log('Not valid TIFF data! (First offset less than 8)', file.getUint32(tiffOffset + 4, !bigEnd));
            return false;
        }
        tags = Exif.readTags(file, tiffOffset, tiffOffset + firstIFDOffset, Exif.TiffTags, bigEnd);
        if (tags.ExifIFDPointer) {
            exifData = Exif.readTags(file, tiffOffset, tiffOffset + tags.ExifIFDPointer, Exif.Tags, bigEnd);
            for (tag in exifData) {
                if ({}.hasOwnProperty.call(exifData, tag)) {
                    switch (tag) {
                        case 'LightSource':
                        case 'Flash':
                        case 'MeteringMode':
                        case 'ExposureProgram':
                        case 'SensingMethod':
                        case 'SceneCaptureType':
                        case 'SceneType':
                        case 'CustomRendered':
                        case 'WhiteBalance':
                        case 'GainControl':
                        case 'Contrast':
                        case 'Saturation':
                        case 'Sharpness':
                        case 'SubjectDistanceRange':
                        case 'FileSource':
                            exifData[tag] = Exif.StringValues[tag][exifData[tag]];
                            break;
                        case 'ExifVersion':
                        case 'FlashpixVersion':
                            exifData[tag] = String.fromCharCode(exifData[tag][0], exifData[tag][1], exifData[tag][2], exifData[tag][3]);
                            break;
                        case 'ComponentsConfiguration':
                            var compopents = 'Components';
                            exifData[tag] = Exif.StringValues[compopents][exifData[tag][0]] + Exif.StringValues[compopents][exifData[tag][1]] + Exif.StringValues[compopents][exifData[tag][2]] + Exif.StringValues[compopents][exifData[tag][3]];
                            break;
                        default:
                            break;
                    }
                    tags[tag] = exifData[tag];
                }
            }
        }
        if (tags.GPSInfoIFDPointer) {
            gpsData = Exif.readTags(file, tiffOffset, tiffOffset + tags.GPSInfoIFDPointer, Exif.GPSTags, bigEnd);
            for (tag in gpsData) {
                if ({}.hasOwnProperty.call(gpsData, tag)) {
                    switch (tag) {
                        case 'GPSVersionID':
                            gpsData[tag] = gpsData[tag][0] + '.' + gpsData[tag][1] + '.' + gpsData[tag][2] + '.' + gpsData[tag][3];
                            break;
                        default:
                            break;
                    }
                    tags[tag] = gpsData[tag];
                }
            }
        }
        return tags;
    };
    Exif.getData = function (img, callback) {
        if ((img instanceof Image || img instanceof HTMLImageElement) && !img.complete) {
            return false;
        }
        if (!Exif.imageHasData(img)) {
            Exif.getImageData(img, callback);
        }
        else {
            if (callback) {
                callback.call(img);
            }
        }
        return true;
    };
    Exif.getTag = function (img, tag) {
        if (!Exif.imageHasData(img)) {
            return;
        }
        return img.exifdata[tag];
    };
    ;
    Exif.getAllTags = function (img) {
        if (!Exif.imageHasData(img)) {
            return {};
        }
        var a, data = img.exifdata, tags = {};
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                tags[a] = data[a];
            }
        }
        return tags;
    };
    ;
    Exif.pretty = function (img) {
        if (!Exif.imageHasData(img)) {
            return '';
        }
        var a, data = img.exifdata, strPretty = '';
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                if (typeof data[a] === 'object') {
                    if (data[a] instanceof Number) {
                        strPretty += a + " : " + data[a] + " [" + data[a].numerator + "/" + data[a].denominator + "]\r\n";
                    }
                    else {
                        strPretty += a + " : [" + data[a].length + " values]\r\n";
                    }
                }
                else {
                    strPretty += a + " : " + data[a] + "\r\n";
                }
            }
        }
        return strPretty;
    };
    Exif.readFromBinaryFile = function (file) {
        return Exif.findEXIFinJPEG(file);
    };
    return Exif;
}());

Exif.debug = false;
Exif.IptcFieldMap = {
    0x78: 'caption',
    0x6E: 'credit',
    0x19: 'keywords',
    0x37: 'dateCreated',
    0x50: 'byline',
    0x55: 'bylineTitle',
    0x7A: 'captionWriter',
    0x69: 'headline',
    0x74: 'copyright',
    0x0F: 'category'
};
Exif.Tags = {
    // version tags
    0x9000: 'ExifVersion',
    0xA000: 'FlashpixVersion',
    // colorspace tags
    0xA001: 'ColorSpace',
    // image configuration
    0xA002: 'PixelXDimension',
    0xA003: 'PixelYDimension',
    0x9101: 'ComponentsConfiguration',
    0x9102: 'CompressedBitsPerPixel',
    // user information
    0x927C: 'MakerNote',
    0x9286: 'UserComment',
    // related file
    0xA004: 'RelatedSoundFile',
    // date and time
    0x9003: 'DateTimeOriginal',
    0x9004: 'DateTimeDigitized',
    0x9290: 'SubsecTime',
    0x9291: 'SubsecTimeOriginal',
    0x9292: 'SubsecTimeDigitized',
    // picture-taking conditions
    0x829A: 'ExposureTime',
    0x829D: 'FNumber',
    0x8822: 'ExposureProgram',
    0x8824: 'SpectralSensitivity',
    0x8827: 'ISOSpeedRatings',
    0x8828: 'OECF',
    0x9201: 'ShutterSpeedValue',
    0x9202: 'ApertureValue',
    0x9203: 'BrightnessValue',
    0x9204: 'ExposureBias',
    0x9205: 'MaxApertureValue',
    0x9206: 'SubjectDistance',
    0x9207: 'MeteringMode',
    0x9208: 'LightSource',
    0x9209: 'Flash',
    0x9214: 'SubjectArea',
    0x920A: 'FocalLength',
    0xA20B: 'FlashEnergy',
    0xA20C: 'SpatialFrequencyResponse',
    0xA20E: 'FocalPlaneXResolution',
    0xA20F: 'FocalPlaneYResolution',
    0xA210: 'FocalPlaneResolutionUnit',
    0xA214: 'SubjectLocation',
    0xA215: 'ExposureIndex',
    0xA217: 'SensingMethod',
    0xA300: 'FileSource',
    0xA301: 'SceneType',
    0xA302: 'CFAPattern',
    0xA401: 'CustomRendered',
    0xA402: 'ExposureMode',
    0xA403: 'WhiteBalance',
    0xA404: 'DigitalZoomRation',
    0xA405: 'FocalLengthIn35mmFilm',
    0xA406: 'SceneCaptureType',
    0xA407: 'GainControl',
    0xA408: 'Contrast',
    0xA409: 'Saturation',
    0xA40A: 'Sharpness',
    0xA40B: 'DeviceSettingDescription',
    0xA40C: 'SubjectDistanceRange',
    // other tags
    0xA005: 'InteroperabilityIFDPointer', 0xA420: 'ImageUniqueID' // Identifier assigned uniquely to each image
};
Exif.TiffTags = {
    0x0100: 'ImageWidth',
    0x0101: 'ImageHeight',
    0x8769: 'ExifIFDPointer',
    0x8825: 'GPSInfoIFDPointer',
    0xA005: 'InteroperabilityIFDPointer',
    0x0102: 'BitsPerSample',
    0x0103: 'Compression',
    0x0106: 'PhotometricInterpretation',
    0x0112: 'Orientation',
    0x0115: 'SamplesPerPixel',
    0x011C: 'PlanarConfiguration',
    0x0212: 'YCbCrSubSampling',
    0x0213: 'YCbCrPositioning',
    0x011A: 'XResolution',
    0x011B: 'YResolution',
    0x0128: 'ResolutionUnit',
    0x0111: 'StripOffsets',
    0x0116: 'RowsPerStrip',
    0x0117: 'StripByteCounts',
    0x0201: 'JPEGInterchangeFormat',
    0x0202: 'JPEGInterchangeFormatLength',
    0x012D: 'TransferFunction',
    0x013E: 'WhitePoint',
    0x013F: 'PrimaryChromaticities',
    0x0211: 'YCbCrCoefficients',
    0x0214: 'ReferenceBlackWhite',
    0x0132: 'DateTime',
    0x010E: 'ImageDescription',
    0x010F: 'Make',
    0x0110: 'Model',
    0x0131: 'Software',
    0x013B: 'Artist',
    0x8298: 'Copyright'
};
Exif.GPSTags = {
    0x0000: 'GPSVersionID',
    0x0001: 'GPSLatitudeRef',
    0x0002: 'GPSLatitude',
    0x0003: 'GPSLongitudeRef',
    0x0004: 'GPSLongitude',
    0x0005: 'GPSAltitudeRef',
    0x0006: 'GPSAltitude',
    0x0007: 'GPSTimeStamp',
    0x0008: 'GPSSatellites',
    0x0009: 'GPSStatus',
    0x000A: 'GPSMeasureMode',
    0x000B: 'GPSDOP',
    0x000C: 'GPSSpeedRef',
    0x000D: 'GPSSpeed',
    0x000E: 'GPSTrackRef',
    0x000F: 'GPSTrack',
    0x0010: 'GPSImgDirectionRef',
    0x0011: 'GPSImgDirection',
    0x0012: 'GPSMapDatum',
    0x0013: 'GPSDestLatitudeRef',
    0x0014: 'GPSDestLatitude',
    0x0015: 'GPSDestLongitudeRef',
    0x0016: 'GPSDestLongitude',
    0x0017: 'GPSDestBearingRef',
    0x0018: 'GPSDestBearing',
    0x0019: 'GPSDestDistanceRef',
    0x001A: 'GPSDestDistance',
    0x001B: 'GPSProcessingMethod',
    0x001C: 'GPSAreaInformation',
    0x001D: 'GPSDateStamp',
    0x001E: 'GPSDifferential'
};
Exif.StringValues = {
    ExposureProgram: {
        0: 'Not defined',
        1: 'Manual',
        2: 'Normal program',
        3: 'Aperture priority',
        4: 'Shutter priority',
        5: 'Creative program',
        6: 'Action program',
        7: 'Portrait mode',
        8: 'Landscape mode'
    }, MeteringMode: {
        0: 'Unknown',
        1: 'Average',
        2: 'CenterWeightedAverage',
        3: 'Spot',
        4: 'MultiSpot',
        5: 'Pattern',
        6: 'Partial',
        255: 'Other'
    }, LightSource: {
        0: 'Unknown',
        1: 'Daylight',
        2: 'Fluorescent',
        3: 'Tungsten (incandescent light)',
        4: 'Flash',
        9: 'Fine weather',
        10: 'Cloudy weather',
        11: 'Shade',
        12: 'Daylight fluorescent (D 5700 - 7100K)',
        13: 'Day white fluorescent (N 4600 - 5400K)',
        14: 'Cool white fluorescent (W 3900 - 4500K)',
        15: 'White fluorescent (WW 3200 - 3700K)',
        17: 'Standard light A',
        18: 'Standard light B',
        19: 'Standard light C',
        20: 'D55',
        21: 'D65',
        22: 'D75',
        23: 'D50',
        24: 'ISO studio tungsten',
        255: 'Other'
    }, Flash: {
        0x0000: 'Flash did not fire',
        0x0001: 'Flash fired',
        0x0005: 'Strobe return light not detected',
        0x0007: 'Strobe return light detected',
        0x0009: 'Flash fired, compulsory flash mode',
        0x000D: 'Flash fired, compulsory flash mode, return light not detected',
        0x000F: 'Flash fired, compulsory flash mode, return light detected',
        0x0010: 'Flash did not fire, compulsory flash mode',
        0x0018: 'Flash did not fire, auto mode',
        0x0019: 'Flash fired, auto mode',
        0x001D: 'Flash fired, auto mode, return light not detected',
        0x001F: 'Flash fired, auto mode, return light detected',
        0x0020: 'No flash function',
        0x0041: 'Flash fired, red-eye reduction mode',
        0x0045: 'Flash fired, red-eye reduction mode, return light not detected',
        0x0047: 'Flash fired, red-eye reduction mode, return light detected',
        0x0049: 'Flash fired, compulsory flash mode, red-eye reduction mode',
        0x004D: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected',
        0x004F: 'Flash fired, compulsory flash mode, red-eye reduction mode, return light detected',
        0x0059: 'Flash fired, auto mode, red-eye reduction mode',
        0x005D: 'Flash fired, auto mode, return light not detected, red-eye reduction mode',
        0x005F: 'Flash fired, auto mode, return light detected, red-eye reduction mode'
    }, SensingMethod: {
        1: 'Not defined',
        2: 'One-chip color area sensor',
        3: 'Two-chip color area sensor',
        4: 'Three-chip color area sensor',
        5: 'Color sequential area sensor',
        7: 'Trilinear sensor',
        8: 'Color sequential linear sensor'
    }, SceneCaptureType: {
        0: 'Standard', 1: 'Landscape', 2: 'Portrait', 3: 'Night scene'
    }, SceneType: {
        1: 'Directly photographed'
    }, CustomRendered: {
        0: 'Normal process', 1: 'Custom process'
    }, WhiteBalance: {
        0: 'Auto white balance', 1: 'Manual white balance'
    }, GainControl: {
        0: 'None', 1: 'Low gain up', 2: 'High gain up', 3: 'Low gain down', 4: 'High gain down'
    }, Contrast: {
        0: 'Normal', 1: 'Soft', 2: 'Hard'
    }, Saturation: {
        0: 'Normal', 1: 'Low saturation', 2: 'High saturation'
    }, Sharpness: {
        0: 'Normal', 1: 'Soft', 2: 'Hard'
    }, SubjectDistanceRange: {
        0: 'Unknown', 1: 'Macro', 2: 'Close view', 3: 'Distant view'
    }, FileSource: {
        3: 'DSC'
    },
    Components: {
        0: '', 1: 'Y', 2: 'Cb', 3: 'Cr', 4: 'R', 5: 'G', 6: 'B'
    }
};
//# sourceMappingURL=exif.js.map

/***/ }),

/***/ 993:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageCropperDataShare; });
var ImageCropperDataShare = (function () {
    function ImageCropperDataShare() {
    }
    ImageCropperDataShare.setPressed = function (canvas) {
        this.pressed = canvas;
    };
    ;
    ImageCropperDataShare.setReleased = function (canvas) {
        if (canvas === this.pressed) {
            //  this.pressed = undefined;
        }
    };
    ;
    ImageCropperDataShare.setOver = function (canvas) {
        this.over = canvas;
    };
    ;
    ImageCropperDataShare.setStyle = function (canvas, style) {
        if (this.pressed !== undefined) {
            if (this.pressed === canvas) {
                // TODO: check this
                // angular.element(document.documentElement).css('cursor', style);
            }
        }
        else {
            if (canvas === this.over) {
                // TODO: check this
                // angular.element(document.documentElement).css('cursor', style);
            }
        }
    };
    ;
    return ImageCropperDataShare;
}());

ImageCropperDataShare.share = {};
//# sourceMappingURL=imageCropperDataShare.js.map

/***/ }),

/***/ 994:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imageCropperComponent__ = __webpack_require__(935);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageCropperModule; });



var ImageCropperModule = (function () {
    function ImageCropperModule() {
    }
    return ImageCropperModule;
}());

ImageCropperModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
                declarations: [__WEBPACK_IMPORTED_MODULE_2__imageCropperComponent__["a" /* ImageCropperComponent */]],
                exports: [__WEBPACK_IMPORTED_MODULE_2__imageCropperComponent__["a" /* ImageCropperComponent */]]
            },] },
];
/** @nocollapse */
ImageCropperModule.ctorParameters = function () { return []; };
//# sourceMappingURL=imageCropperModule.js.map

/***/ }),

/***/ 995:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__handle__ = __webpack_require__(937);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CornerMarker; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CornerMarker = (function (_super) {
    __extends(CornerMarker, _super);
    function CornerMarker(x, y, radius, cropperSettings) {
        return _super.call(this, x, y, radius, cropperSettings) || this;
    }
    CornerMarker.prototype.drawCornerBorder = function (ctx) {
        var sideLength = 10;
        if (this.over || this.drag) {
            sideLength = 12;
        }
        var hDirection = 1;
        var vDirection = 1;
        if (this.horizontalNeighbour.position.x < this.position.x) {
            hDirection = -1;
        }
        if (this.verticalNeighbour.position.y < this.position.y) {
            vDirection = -1;
        }
        if (this.cropperSettings.rounded) {
            var width = this.position.x - this.horizontalNeighbour.position.x;
            var height = this.position.y - this.verticalNeighbour.position.y;
            var offX = Math.round(Math.sin(Math.PI / 2) * Math.abs(width / 2)) / 4;
            var offY = Math.round(Math.sin(Math.PI / 2) * Math.abs(height / 2)) / 4;
            this.offset.x = hDirection > 0 ? offX : -offX;
            this.offset.y = vDirection > 0 ? offY : -offY;
        }
        else {
            this.offset.x = 0;
            this.offset.y = 0;
        }
        ctx.beginPath();
        ctx.lineJoin = 'miter';
        ctx.moveTo(this.position.x + this.offset.x, this.position.y + this.offset.y);
        ctx.lineTo(this.position.x + this.offset.x + (sideLength * hDirection), this.position.y + this.offset.y);
        ctx.lineTo(this.position.x + this.offset.x + (sideLength * hDirection), this.position.y + this.offset.y +
            (sideLength * vDirection));
        ctx.lineTo(this.position.x + this.offset.x, this.position.y + this.offset.y + (sideLength * vDirection));
        ctx.lineTo(this.position.x + this.offset.x, this.position.y + this.offset.y);
        ctx.closePath();
        ctx.lineWidth = this.cropperSettings.cropperDrawSettings.strokeWidth;
        ctx.strokeStyle = this.cropperSettings.cropperDrawSettings.strokeColor;
        ctx.stroke();
    };
    CornerMarker.prototype.drawCornerFill = function (ctx) {
        var sideLength = 10;
        if (this.over || this.drag) {
            sideLength = 12;
        }
        var hDirection = 1;
        var vDirection = 1;
        if (this.horizontalNeighbour.position.x < this.position.x) {
            hDirection = -1;
        }
        if (this.verticalNeighbour.position.y < this.position.y) {
            vDirection = -1;
        }
        ctx.beginPath();
        ctx.moveTo(this.position.x + this.offset.x, this.position.y + this.offset.y);
        ctx.lineTo(this.position.x + this.offset.x + (sideLength * hDirection), this.position.y + this.offset.y);
        ctx.lineTo(this.position.x + this.offset.x + (sideLength * hDirection), this.position.y + this.offset.y +
            (sideLength * vDirection));
        ctx.lineTo(this.position.x + this.offset.x, this.position.y + this.offset.y + (sideLength * vDirection));
        ctx.lineTo(this.position.x + this.offset.x, this.position.y + this.offset.y);
        ctx.closePath();
        ctx.fillStyle = 'rgba(255,255,255,.7)';
        ctx.fill();
    };
    CornerMarker.prototype.moveX = function (x) {
        this.setPosition(x, this.position.y);
    };
    CornerMarker.prototype.moveY = function (y) {
        this.setPosition(this.position.x, y);
    };
    CornerMarker.prototype.move = function (x, y) {
        this.setPosition(x, y);
        this.verticalNeighbour.moveX(x);
        this.horizontalNeighbour.moveY(y);
    };
    CornerMarker.prototype.addHorizontalNeighbour = function (neighbour) {
        this.horizontalNeighbour = neighbour;
    };
    CornerMarker.prototype.addVerticalNeighbour = function (neighbour) {
        this.verticalNeighbour = neighbour;
    };
    CornerMarker.prototype.getHorizontalNeighbour = function () {
        return this.horizontalNeighbour;
    };
    CornerMarker.prototype.getVerticalNeighbour = function () {
        return this.verticalNeighbour;
    };
    CornerMarker.prototype.draw = function (ctx) {
        this.drawCornerFill(ctx);
        this.drawCornerBorder(ctx);
    };
    return CornerMarker;
}(__WEBPACK_IMPORTED_MODULE_0__handle__["a" /* Handle */]));

//# sourceMappingURL=cornerMarker.js.map

/***/ }),

/***/ 996:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CropTouch; });
var CropTouch = (function () {
    function CropTouch(x, y, id) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (id === void 0) { id = 0; }
        this.id = id;
        this.x = x;
        this.y = y;
    }
    return CropTouch;
}());

//# sourceMappingURL=cropTouch.js.map

/***/ }),

/***/ 997:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__handle__ = __webpack_require__(937);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pointPool__ = __webpack_require__(910);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragMarker; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var DragMarker = (function (_super) {
    __extends(DragMarker, _super);
    function DragMarker(x, y, radius, cropperSettings) {
        var _this = _super.call(this, x, y, radius, cropperSettings) || this;
        _this.iconPoints = [];
        _this.scaledIconPoints = [];
        _this.getDragIconPoints(_this.iconPoints, 1);
        _this.getDragIconPoints(_this.scaledIconPoints, 1.2);
        return _this;
    }
    DragMarker.prototype.draw = function (ctx) {
        if (this.over || this.drag) {
            this.drawIcon(ctx, this.scaledIconPoints);
        }
        else {
            this.drawIcon(ctx, this.iconPoints);
        }
    };
    DragMarker.prototype.getDragIconPoints = function (arr, scale) {
        var maxLength = 17 * scale;
        var arrowWidth = 14 * scale;
        var arrowLength = 8 * scale;
        var connectorThroat = 4 * scale;
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(-connectorThroat / 2, maxLength - arrowLength));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(-arrowWidth / 2, maxLength - arrowLength));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(0, maxLength));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(arrowWidth / 2, maxLength - arrowLength));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(connectorThroat / 2, maxLength - arrowLength));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(connectorThroat / 2, connectorThroat / 2));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(maxLength - arrowLength, connectorThroat / 2));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(maxLength - arrowLength, arrowWidth / 2));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(maxLength, 0));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(maxLength - arrowLength, -arrowWidth / 2));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(maxLength - arrowLength, -connectorThroat / 2));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(connectorThroat / 2, -connectorThroat / 2));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(connectorThroat / 2, -maxLength + arrowLength));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(arrowWidth / 2, -maxLength + arrowLength));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(0, -maxLength));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(-arrowWidth / 2, -maxLength + arrowLength));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(-connectorThroat / 2, -maxLength + arrowLength));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(-connectorThroat / 2, -connectorThroat / 2));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(-maxLength + arrowLength, -connectorThroat / 2));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(-maxLength + arrowLength, -arrowWidth / 2));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(-maxLength, 0));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(-maxLength + arrowLength, arrowWidth / 2));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(-maxLength + arrowLength, connectorThroat / 2));
        arr.push(__WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.borrow(-connectorThroat / 2, connectorThroat / 2));
    };
    DragMarker.prototype.drawIcon = function (ctx, points) {
        ctx.beginPath();
        ctx.moveTo(points[0].x + this.position.x, points[0].y + this.position.y);
        for (var k = 0; k < points.length; k++) {
            var p = points[k];
            ctx.lineTo(p.x + this.position.x, p.y + this.position.y);
        }
        ctx.closePath();
        ctx.fillStyle = this.cropperSettings.cropperDrawSettings.dragIconFillColor;
        ctx.fill();
        ctx.lineWidth = this.cropperSettings.cropperDrawSettings.dragIconStrokeWidth;
        ctx.strokeStyle = this.cropperSettings.cropperDrawSettings.dragIconStrokeColor;
        ctx.stroke();
    };
    DragMarker.prototype.recalculatePosition = function (bounds) {
        var c = bounds.getCentre();
        this.setPosition(c.x, c.y);
        __WEBPACK_IMPORTED_MODULE_1__pointPool__["a" /* PointPool */].instance.returnPoint(c);
    };
    return DragMarker;
}(__WEBPACK_IMPORTED_MODULE_0__handle__["a" /* Handle */]));

//# sourceMappingURL=dragMarker.js.map

/***/ }),

/***/ 998:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageCropperModel; });
var ImageCropperModel = (function () {
    function ImageCropperModel() {
    }
    return ImageCropperModel;
}());

//# sourceMappingURL=imageCropperModel.js.map

/***/ }),

/***/ 999:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ng_table_component_1 = __webpack_require__(905);
var ng_table_filtering_directive_1 = __webpack_require__(902);
var ng_table_paging_directive_1 = __webpack_require__(903);
var ng_table_sorting_directive_1 = __webpack_require__(904);
exports.NG_TABLE_DIRECTIVES = [ng_table_component_1.NgTableComponent, ng_table_filtering_directive_1.NgTableFilteringDirective, ng_table_paging_directive_1.NgTablePagingDirective, ng_table_sorting_directive_1.NgTableSortingDirective];


/***/ })

});
//# sourceMappingURL=0.chunk.js.map