webpackJsonp([1,7],{

/***/ 1015:
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-h\">\n    <div class=\"wrapper\">\n        <section>\n            <!-- Page content-->\n            <div class=\"content-wrapper contentWrapperTopMargin\">\n                <!-- START panel-->\n                <div class=\"panel widget\">\n                    <div class=\"panel-body\">\n                        <div class=\"row row-table\">\n                            <div class=\"col-xs-2 \">\n                                <img class=\"img-thumbnail img-circle img-responsive thumb96\" src=\"assets/img/product7.png\" alt=\"Image\" />\n                            </div>\n                            <div class=\"col-xs-7\">\n\n                                <h3 class=\"mt0\">Product Name</h3>\n                                <p class=\"text-muted\">Our award-winning steel roofing offers timeless beauty and an unmatched quality.</p>\n                                <p class=\"text-muted\" *ngIf=\"showProductDetails\"> Engineered to withstand the most extreme weather conditions - hail, wind, snow and ice, while maintaining its original look for years to come. Home and business owners alike will have peace of mind knowing their products\n                                    are backed with a lifetime, non-prorated warranty. </p>\n                                <a><small (click)=\"toggleShowProductDetails()\" *ngIf=\"!showProductDetails\" class=\"pull-right\">View Details</small></a>\n                                <a><small (click)=\"toggleShowProductDetails()\" *ngIf=\"showProductDetails\" class=\"pull-right\">Close</small></a>\n                            </div>\n                            <div class=\"col-xs-2\">\n                                <div><a class=\"btn btn-success\" [routerLink]=\"'/home/products'\">Change Product</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">Customize this product</div>\n                    <div class=\"table-responsive\">\n                        <table class=\"table table-bordered table-hover\" id=\"table-ext-3\">\n                            <thead>\n                                <tr>\n                                    <th>ID</th>\n                                    <th>Description</th>\n                                    <th>Chosen option</th>\n                                    <th>List of Values</th>\n                                    <th>Description of chosen option</th>\n                                    <th>Price</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let characteristic of characteristics; let i = 'index'\">\n                                    <td>{{characteristic.id}}</td>\n                                    <td>{{characteristic.description}}</td>\n                                    <td>{{findSelectedCharacteristicValue(i)}}</td>\n                                    <td><a class=\"label label-danger\" (click)=showVlaues($event,i) data-toggle=\"modal\" data-target=\"#characteristicModal\" *ngIf=\"characteristic.value.length\">Select</a></td>\n                                    <td>{{findSelectedCharacteristicDesc(i)}}</td>\n                                    <td>{{findSelectedCharacteristicPricing(i)}}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                    <!-- END table-responsive-->\n                    <!-- <div class=\"panel-footer clearfix\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-2\">\n                                <div><a class=\"btn btn-success\" >Change Product</a>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"input-group\">\n                            <input class=\"form-control input-sm\" type=\"text\" placeholder=\"Search message ..\" />\n                            <span class=\"input-group-btn\">\n                        <button class=\"btn btn-default btn-sm\" type=\"submit\"><i class=\"fa fa-search\"></i>\n                        </button>\n                     </span>\n                        </div>\n                    </div> -->\n                </div>\n                <!-- Characteristic Modal -->\n                <div class=\"modal fade\" id=\"characteristicModal\" role=\"dialog\">\n                    <div class=\"modal-dialog\">\n\n                        <!-- Modal content-->\n                        <div class=\"modal-content\">\n                            <div class=\"modal-header\">\n                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                                <h4 class=\"modal-title\">Select Value for Characteristic</h4>\n                            </div>\n                            <div class=\"modal-body\">\n                                <input #txtFname placeholder=\"search by characteristic value\" class=\"form-control mb\" type=\"text\" />\n                                <table class=\"table table-bordered table-hover text-center\" id=\"table-ext-3\">\n                                    <thead>\n                                        <tr>\n                                            <!-- <th>Action</th> -->\n                                            <th id=\"char\">Characteristic value</th>\n                                            <th class=\"text-center\">Value Description</th>\n                                            <!-- <th>Pricing</th> -->\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let characteristic of characteristics[currentCharacteristicId].value | searchfilter: 'charValu' : txtFname.value; let i = 'index'\">\n                                            <td>\n                                                {{characteristic.charValu}}\n                                            </td>\n                                            <td>\n                                                {{characteristic.valueDesc}}\n                                                <a class=\"pull-right label label-success\" (click)=\"selectCharacteristic(i)\" data-dismiss=\"modal\">Select</a>\n                                            </td>\n                                            <!-- <td>\n                                                {{characteristic.pricing}}\n                                            </td> -->\n                                            <!-- <td>\n                                                <button class=\"btn btn-success\" (click)=\"selectCharacteristic(i)\" data-dismiss=\"modal\">select</button>\n                                            </td> -->\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                            <div class=\"modal-footer\">\n                                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n                <!-- End of Characteristic Modal -->\n            </div>\n        </section>\n\n    </div>\n</div>"

/***/ }),

/***/ 1016:
/***/ (function(module, exports) {

module.exports = "<span>&copy; nayo</span>"

/***/ }),

/***/ 1017:
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-h\">\n    <div class=\"wrapper\">\n        <!-- Page content-->\n        <div class=\"content-wrapper contentWrapperTopMargin\" >\n            <div class=\"content-heading\">\n                <!-- <button class=\"btn btn-primary pull-right\" type=\"button\">\n                <em class=\"fa fa-plus-circle fa-fw mr-sm\"></em>New Invoice</button> -->\n                Order\n            </div>\n            <div class=\"panel\">\n                <div class=\"panel-body\">\n                    <!-- <button class=\"pull-right btn btn-default btn-sm\" type=\"button\">Copy this invoice</button> -->\n                    <h3 class=\"mt0\">Order 00004879</h3>\n                    <hr/>\n                    <div class=\"row mb-lg\">\n                        <div class=\"col-lg-4 col-xs-6 br pv\">\n                            <div class=\"row\">\n                                <div class=\"col-md-2 text-center visible-md visible-lg\">\n                                    <em class=\"fa fa-file-text fa-4x text-muted\"></em>\n                                </div>\n                                <div class=\"col-md-10\">\n                                    <h4>Bill Mitchelle</h4>\n                                    <address></address>Nowhere 1024\n                                    <br/>Happy St., 50487\n                                    <br/>Neverland</div>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-4 col-xs-6 br pv\">\n                            <div class=\"row\">\n                                <div class=\"col-md-2 text-center visible-md visible-lg\">\n                                    <em class=\"fa fa-truck fa-4x text-muted\"></em>\n                                </div>\n                                <div class=\"col-md-10\">\n                                    <h4>Lloyd Gonzales</h4>\n                                    <address></address>Basilisa 2145\n                                    <br/>Mate, Cliff., 20145\n                                    <br/>Moon</div>\n                            </div>\n                        </div>\n                        <div class=\"clearfix hidden-md hidden-lg\">\n                            <hr/>\n                        </div>\n                        <div class=\"col-lg-4 col-xs-12 pv\">\n                            <div class=\"clearfix\">\n                                <p class=\"pull-left\">ORDER NO.</p>\n                                <p class=\"pull-right mr\">00004879</p>\n                            </div>\n                            <div class=\"clearfix\">\n                                <p class=\"pull-left\">Ordered Placed</p>\n                                <p class=\"pull-right mr\">25/08/2014</p>\n                            </div>\n                            <div class=\"clearfix\">\n                                <p class=\"pull-left\">Expect On</p>\n                                <p class=\"pull-right mr\">30/08/2014</p>\n                            </div>\n                        </div>\n                    </div>\n                    <hr>\n                    <div class=\"unwrap\">\n                        <div class=\"p-lg\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-9 col-lg-offset-1\">\n                                    <!-- START timeline-->\n                                    <ul class=\"timeline\">\n                                        <li class=\"timeline-separator\" data-datetime=\"Today\"></li>\n                                        <!-- START timeline item-->\n                                        <li>\n                                            <div class=\"timeline-badge primary\">\n                                                <em class=\"fa fa-cart-plus\"></em>\n                                            </div>\n                                            <div class=\"timeline-panel\">\n                                                <div class=\"popover left\">\n                                                    <div class=\"arrow\"></div>\n                                                    <div class=\"popover-content\">\n                                                        <div class=\"table-grid table-grid-align-middle mb\">\n                                                            <div class=\"col col-xs\">\n                                                            </div>\n                                                            <div class=\"col\">\n                                                                <p class=\"m0\">\n                                                                    <a class=\"text-muted\" href=\"#\">\n                                                                        <strong>Order Confirmed</strong>\n                                                                    </a>24/08/2017</p>\n                                                            </div>\n                                                        </div>\n                                                        <p>\n                                                            <em>Will be processed to shipment</em>\n                                                        </p>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </li>\n                                        <!-- END timeline item-->\n                                        <!-- START timeline item-->\n                                        <li class=\"timeline-inverted\">\n                                                <div class=\"timeline-badge warning\">\n                                                    <em class=\"fa fa-gift\"></em>\n                                                </div>\n                                                <div class=\"timeline-panel\">\n                                                    <div class=\"popover right\">\n                                                        <div class=\"arrow\"></div>\n                                                        <div class=\"popover-content\">\n                                                            <div class=\"table-grid table-grid-align-middle mb\">\n                                                                <!-- <div class=\"col col-xs\">\n                                                                    <img class=\"media-object img-circle thumb48\" src=\"assets/img/user/09.jpg\" alt=\"Image\" />\n                                                                </div> -->\n                                                                <div class=\"col\">\n                                                                    <p class=\"m0\">\n                                                                        <a class=\"text-muted\" href=\"#\">\n                                                                            <strong>Order Packed</strong>\n                                                                        </a>assigned to a Blue Dart courier service\n                                                                        <!-- <a class=\"text-muted\" href=\"#\">\n                                                                            <strong></strong>\n                                                                        </a>to issue <a href=\"#\">#548795</a> -->\n                                                                    </p>\n                                                                    <p class=\"m0\">\n                                                                        <em>Will notify once the item is shipped</em>\n                                                                    </p>\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </li>\n                                            <!-- END timeline item-->\n                                        \n                                        <!-- START timeline separator-->\n                                        <li class=\"timeline-separator\" data-datetime=\"Yesterday\"></li>\n                                        <!-- END timeline separator-->\n                                        <!-- START timeline item-->\n                                        <li>\n                                            <div class=\"timeline-badge success\">\n                                                <em class=\"fa fa-plane\"></em>\n                                            </div>\n                                            <div class=\"timeline-panel\">\n                                                <div class=\"popover left\">\n                                                    <div class=\"arrow\"></div>\n                                                    <div class=\"popover-content\">\n                                                        <div class=\"table-grid table-grid-align-middle mb\">\n                                                            <!-- <div class=\"col col-xs\">\n                                                                <img class=\"media-object img-circle thumb48\" src=\"assets/img/user/12.jpg\" alt=\"Image\" />\n                                                            </div> -->\n                                                            <div class=\"col\">\n                                                                <p class=\"m0\">\n                                                                    <a class=\"text-muted\" href=\"#\">\n                                                                        <strong>Item shipped</strong>\n                                                                    </a>\n                                                                    <!-- closed issue <a href=\"#\">#548795</a> -->\n                                                                </p>\n                                                                <p class=\"m0\">\n                                                                    <em>Item shipped expect  your delivery soon</em>\n                                                                </p>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </li>\n                                        <!-- END timeline item-->\n                                        <li class=\"timeline-inverted\">\n                                            <div class=\"timeline-badge warning\">\n                                                <em class=\"fa fa-truck\"></em>\n                                            </div>\n                                            <div class=\"timeline-panel\">\n                                                <div class=\"popover right\">\n                                                    <div class=\"arrow\"></div>\n                                                    <div class=\"popover-content\">\n                                                        <div class=\"table-grid table-grid-align-middle mb\">\n                                                            <!-- <div class=\"col col-xs\">\n                                                                <img class=\"media-object img-circle thumb48\" src=\"assets/img/user/09.jpg\" alt=\"Image\" />\n                                                            </div> -->\n                                                            <div class=\"col\">\n                                                                <p class=\"m0\">\n                                                                    <a class=\"text-muted\" href=\"#\">\n                                                                        <strong>Out for delivery</strong>\n                                                                    </a>\n                                                                    <a class=\"text-muted\" href=\"#\">\n                                                                        <!-- <strong>Dennis Green</strong> -->\n                                                                    </a>\n                                                                    <!-- to issue <a href=\"#\">#548795</a> -->\n                                                                </p>\n                                                                <p class=\"m0\">\n                                                                    <em>Your  item is out for deliver expect it any time today</em>\n                                                                </p>\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                        </li>\n                                        <!-- END timeline item-->\n                                        <!-- START timeline item-->\n                                        <li class=\"timeline-end\">\n                                            <a class=\"timeline-badge\" href=\"#\">\n                                                <em >Delivered</em>\n                                            </a>\n                                        </li>\n                                        <!-- END timeline item-->\n                                    </ul>\n                                    <!-- END timeline-->\n                                </div>\n                                <div class=\"col-lg-3\">\n                                    \n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    \n                </div>\n            </div>\n                        \n        </div>\n    </div>\n  </div>\n  \n  \n  \n  \n  \n"

/***/ }),

/***/ 1018:
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-h\">\n  <div class=\"wrapper\">\n      <!-- <section> -->\n          <!-- Page content-->\n          <div class=\"content-wrapper contentWrapperTopMargin\" >\n            <div class=\"content-heading\">Search\n                <small>Search and filter results</small>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-lg-9\">\n                    <div class=\"form-group mb-xl\">\n                        <input class=\"form-control mb\" type=\"text\" placeholder=\"Search products, people, apps, etc.\" />\n                        <div class=\"clearfix\">\n                            <button class=\"pull-left btn btn-default\" type=\"button\">Search</button>\n                            <!-- <div class=\"pull-right\">\n                                <label class=\"checkbox-inline c-checkbox\">\n                                    <input id=\"inlineCheckbox10\" type=\"checkbox\" value=\"option1\" />\n                                    <span class=\"fa fa-check\"></span>Products</label>\n                                <label class=\"checkbox-inline c-checkbox\">\n                                    <input id=\"inlineCheckbox20\" type=\"checkbox\" value=\"option2\" />\n                                    <span class=\"fa fa-check\"></span>People</label>\n                                <label class=\"checkbox-inline c-checkbox\">\n                                    <input id=\"inlineCheckbox30\" type=\"checkbox\" value=\"option3\" />\n                                    <span class=\"fa fa-check\"></span>Apps</label>\n                            </div> -->\n                        </div>\n                    </div>\n                    <!-- START panel-->\n                    <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\">Recent Orders\n                        </div>\n                        <!-- START table-responsive-->\n                        <div class=\"table-responsive\">\n                            <table class=\"table table-striped table-bordered table-hover\">\n                                <thead>\n                                    <tr>\n                                        <!-- <th checkAll>\n                                            <div class=\"checkbox c-checkbox\" tooltip=\"Check All\">\n                                                <label>\n                                                    <input type=\"checkbox\" />\n                                                    <span class=\"fa fa-check\"></span>\n                                                </label>\n                                            </div>\n                                        </th>\n                                        <th>Description</th> -->\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>\n                                            <!-- <div class=\"checkbox c-checkbox\">\n                                                <label>\n                                                    <input type=\"checkbox\" />\n                                                    <span class=\"fa fa-check\"></span>\n                                                </label>\n                                            </div> -->\n                                        </td>\n                                        <td>\n                                            <div class=\"media-box\">\n                                                <a class=\"pull-left\" href=\"#\">\n                                                    <img class=\"media-box-object img-responsive img-rounded thumb64\" src=\"assets/img/dummy.png\" alt=\"\" />\n                                                </a>\n                                                <div class=\"media-box-body\">\n                                                    <div class=\"pull-right btn btn-danger btn-sm\" [routerLink]=\"'/home/vieworder'\" (click)=\"viewOrder()\">Cancelled</div>\n                                                    <h4 class=\"media-box-heading\">Product 1</h4>\n                                                    <small class=\"text-muted\">Category1, Category2</small>\n                                                    <p>Sed gravida auctor odio. Sed viverra rutrum hendrerit. Praesent dapibus justo dolor. Suspendisse rhoncus consectetur eros vehicula accumsan.</p>\n                                                </div>\n                                            </div>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            <!-- <div class=\"checkbox c-checkbox\">\n                                                <label>\n                                                    <input type=\"checkbox\" />\n                                                    <span class=\"fa fa-check\"></span>\n                                                </label>\n                                            </div> -->\n                                        </td>\n                                        <td>\n                                            <div class=\"media-box\">\n                                                <a class=\"pull-left\" href=\"#\">\n                                                    <img class=\"media-box-object img-responsive img-rounded thumb64\" src=\"assets/img/dummy.png\" alt=\"\" />\n                                                </a>\n                                                <div class=\"media-box-body\">\n                                                    <div class=\"pull-right btn btn-success btn-sm\" (click)=\"viewOrder()\">Delivered</div>\n                                                    <h4 class=\"media-box-heading\">Product 2</h4>\n                                                    <small class=\"text-muted\">Category1, Category2</small>\n                                                    <p>Sed gravida auctor odio. Sed viverra rutrum hendrerit. Praesent dapibus justo dolor. Suspendisse rhoncus consectetur eros vehicula accumsan.</p>\n                                                </div>\n                                            </div>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            <!-- <div class=\"checkbox c-checkbox\">\n                                                <label>\n                                                    <input type=\"checkbox\" />\n                                                    <span class=\"fa fa-check\"></span>\n                                                </label>\n                                            </div> -->\n                                        </td>\n                                        <td>\n                                            <div class=\"media-box\">\n                                                <a class=\"pull-left\" href=\"#\">\n                                                    <img class=\"media-box-object img-responsive img-rounded thumb64\" src=\"assets/img/dummy.png\" alt=\"\" />\n                                                </a>\n                                                <div class=\"media-box-body\">\n                                                    <div class=\"pull-right btn btn-warning btn-sm\">Pending</div>\n                                                    <h4 class=\"media-box-heading\">Product 3</h4>\n                                                    <small class=\"text-muted\">Category1, Category2</small>\n                                                    <p>Sed gravida auctor odio. Sed viverra rutrum hendrerit. Praesent dapibus justo dolor. Suspendisse rhoncus consectetur eros vehicula accumsan.</p>\n                                                </div>\n                                            </div>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            <!-- <div class=\"checkbox c-checkbox\">\n                                                <label>\n                                                    <input type=\"checkbox\" />\n                                                    <span class=\"fa fa-check\"></span>\n                                                </label>\n                                            </div> -->\n                                        </td>\n                                        <td>\n                                            <div class=\"media-box\">\n                                                <a class=\"pull-left\" href=\"#\">\n                                                    <img class=\"media-box-object img-responsive img-rounded thumb64\" src=\"assets/img/dummy.png\" alt=\"\" />\n                                                </a>\n                                                <div class=\"media-box-body\">\n                                                    <div class=\"pull-right btn btn-green btn-sm\">Confirmed</div>\n                                                    <h4 class=\"media-box-heading\">Product 4</h4>\n                                                    <small class=\"text-muted\">Category1, Category2</small>\n                                                    <p>Sed gravida auctor odio. Sed viverra rutrum hendrerit. Praesent dapibus justo dolor. Suspendisse rhoncus consectetur eros vehicula accumsan.</p>\n                                                </div>\n                                            </div>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            <!-- <div class=\"checkbox c-checkbox\">\n                                                <label>\n                                                    <input type=\"checkbox\" />\n                                                    <span class=\"fa fa-check\"></span>\n                                                </label>\n                                            </div> -->\n                                        </td>\n                                        <td>\n                                            <div class=\"media-box\">\n                                                <a class=\"pull-left\" href=\"#\">\n                                                    <img class=\"media-box-object img-responsive img-rounded thumb64\" src=\"assets/img/dummy.png\" alt=\"\" />\n                                                </a>\n                                                <div class=\"media-box-body\">\n                                                    <div class=\"pull-right btn btn-primary btn-sm\">Shipped</div>\n                                                    <h4 class=\"media-box-heading\">Product 5</h4>\n                                                    <small class=\"text-muted\">Category1, Category2</small>\n                                                    <p>Sed gravida auctor odio. Sed viverra rutrum hendrerit. Praesent dapibus justo dolor. Suspendisse rhoncus consectetur eros vehicula accumsan.</p>\n                                                </div>\n                                            </div>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                        <!-- END table-responsive-->\n                        <div class=\"panel-footer\">\n                            <div class=\"row\">\n                                <div class=\"col-lg-2\">\n                                    <!-- <button class=\"btn btn-sm btn-default\">Clear</button> -->\n                                </div>\n                                <div class=\"col-lg-8\"></div>\n                                <div class=\"col-lg-2 text-right\">\n                                    <ul class=\"pagination pagination-sm\">\n                                        <li class=\"active\"><a href=\"#\">1</a>\n                                        </li>\n                                        <li><a href=\"#\">2</a>\n                                        </li>\n                                        <li><a href=\"#\">3</a>\n                                        </li>\n                                        <li><a href=\"#\">»</a>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- END panel-->\n                </div>\n                <div class=\"col-lg-3\">\n                    <h3 class=\"m0 pb-lg\">Filters</h3>\n                    <!-- <div class=\"form-group mb-xl\">\n                        <label class=\"control-label mb\">by Text</label>\n                        <br/>\n                        <ng-select [allowClear]=\"true\" [items]=\"items\" placeholder=\"Nothing selected\"></ng-select>\n                    </div> -->\n                    <div class=\"form-group mb-xl\">\n                        <label class=\"control-label mb\">From Date</label>\n                        <br/>\n                        <p class=\"input-group\">\n                            <input class=\"form-control\" type=\"date\" />\n                            <span class=\"input-group-btn\">\n                            <button class=\"btn btn-default\" type=\"button\">\n                                <em class=\"fa fa-calendar\"></em>\n                            </button>\n                        </span>\n                        </p>\n                    </div>\n                    <div class=\"form-group mb-xl\">\n                        <label class=\"control-label mb\">To Date</label>\n                        <br/>\n                        <p class=\"input-group\">\n                            <input class=\"form-control\" type=\"date\" />\n                            <span class=\"input-group-btn\">\n                            <button class=\"btn btn-default\" type=\"button\">\n                                <em class=\"fa fa-calendar\"></em>\n                            </button>\n                        </span>\n                        </p>\n                    </div>\n                    <!-- <div class=\"form-group mb-xl\">\n                        <label class=\"control-label mb\">by Date</label>\n                        <br/>\n                        <p class=\"input-group\">\n                            <input class=\"form-control\" type=\"date\" />\n                            <span class=\"input-group-btn\">\n                            <button class=\"btn btn-default\" type=\"button\">\n                                <em class=\"fa fa-calendar\"></em>\n                            </button>\n                        </span>\n                        </p>\n                    </div> -->\n                    <div class=\"form-group mb-xl\">\n                      <label class=\"control-label mb\">Search text</label>\n                      <br>\n                      <input type=\"text\" class=\"slider slider-lg form-control\">\n                    </div>\n                    <button class=\"btn btn-default btn-lg\">Apply</button>\n                </div>\n            </div>\n            \n          </div>\n      <!-- </section> -->\n\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ 1019:
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"panel panel-default\">-->\n<div class=\"carousel-main\">\n  <carousel [interval]=\"2000\" [noWrap]=\"false\">\n    <slide *ngFor=\"let slidez of slides; let index=index\" [active]=\"slidez.active\">\n      <img [src]=\"slidez.image\" class=\"img-responsive carousel-images\">\n      <div class=\"carousel-caption\">\n        <h1>Excellence in exterior building products</h1>\n        <button class=\"mb-sm btn btn-primary-outline\" [routerLink]=\"'/home/products'\" type=\"button\">View Products</button>\n      </div>\n    </slide>\n  </carousel>\n</div>\n<!--</div>-->\n"

/***/ }),

/***/ 1020:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-6\">\n  <!-- START widget-->\n  <div class=\"panel widget\">\n    <div class=\"row row-table row-flush\">\n      <div class=\"col-xs-5\">\n        <picture class=\"lateral-picture\">\n          <img src=\"assets/img/bg10.jpg\" alt=\"\" />\n        </picture>\n      </div>\n      <div class=\"col-xs-7 align-middle p-lg\">\n        <p>\n          <span class=\"text-lg\">16</span>Aug</p>\n        <p>\n          <strong>EVENT INVITATION</strong>\n        </p>\n        <p>Donec posuere neque in elit luctus tempor consequat enim egestas. Nulla dictum egestas leo at lobortis.</p>\n      </div>\n    </div>\n  </div>\n  <!-- END widget-->\n</div>\n    <div class=\"col-lg-6\">\n        <!-- START widget-->\n        <div class=\"panel widget\">\n            <div class=\"panel-body text-center bg-center\">\n                <!--<div class=\"row row-table\">-->\n                    <div class=\"col-xs-12\">\n                        <img class=\"img img-responsive\" src=\"assets/img/bg4.jpg\" alt=\"Image\" />\n                    </div>\n                <!--</div>-->\n            </div>\n            <div class=\"panel-body text-center bg-gray-darker\">\n                <div class=\"row row-table\">\n                    <div class=\"col-xs-4\">\n                        <a class=\"text-white\" href=\"#\">\n                            <em class=\"fa fa-twitter fa-2x\"></em>\n                        </a>\n                    </div>\n                    <div class=\"col-xs-4\">\n                        <a class=\"text-white\" href=\"#\">\n                            <em class=\"fa fa-facebook fa-2x\"></em>\n                        </a>\n                    </div>\n                    <div class=\"col-xs-4\">\n                        <a class=\"text-white\" href=\"#\">\n                            <em class=\"fa fa-comments fa-2x\"></em>\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"list-group\">\n                <a class=\"list-group-item\" href=\"#\">\n                    <span class=\"label label-primary pull-right\">15</span>\n                    <em class=\"fa fa-fw fa-clock-o text-muted\"></em>Recent Activity</a>\n                <a class=\"list-group-item\" href=\"#\">\n                    <span class=\"label label-primary pull-right\">100</span>\n                    <em class=\"fa fa-fw fa-user text-muted\"></em>Following</a>\n                <a class=\"list-group-item\" href=\"#\">\n                    <span class=\"label label-primary pull-right\">300</span>\n                    <em class=\"fa fa-fw fa-folder-open-o text-muted\"></em>Photos</a>\n            </div>\n        </div>\n        <!-- END widget-->\n    </div>"

/***/ }),

/***/ 1021:
/***/ (function(module, exports) {

module.exports = "<!--Carousal Selector-->\n\n<app-carousal></app-carousal>\n\n<!--Products Selector-->\n<!-- <app-products></app-products> -->\n<!--Categoriees Selector-->\n<!-- <app-categories></app-categories> -->\n<section>\n\n    <!-- Page content-->\n    <div class=\"content-wrapper\">\n        <div class=\"content-heading\">Products Avilable \n            <small>these are our top selling products</small>\n        </div>\n    </div>\n</section>\n<div class=\"container-fluid\" style=\"background:transparent;\">\n    <div class=\"row\">\n        <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\n            <!-- START widget-->\n            <!--<div class=\"panel widget horizontal\">\n                <div class=\"row row-table row-flush\">\n                    <div class=\"col-xs-8 col-lg-8 col-md-8 col-sm-8\">\n                        <img class=\"img-responsive horizontal\" src=\"assets/img/product2.PNG\" alt=\"\" />\n                    </div>\n                    <div class=\"col-xs-4 col-sm-4 col-md-4col-lg-4  bg-info\">\n                        <span class=\"details\"> Some details about this product.</span><br>\n                        <a [routerLink]=\"''\" id=\"product-details\">For more......</a>\n                    </div>\n                </div>\n            </div>-->\n            <a>\n             <div class=\"panel widget\">\n                <img class=\"img-responsive vertical\" src=\"assets/img/product8.png\" alt=\"Image\" [routerLink]=\"'/home/products'\"/>\n                <div class=\"panel-body\">\n                    <div class=\"row row-table text-center\">\n                        <!-- <span> Some details about this product.</span><br> -->\n                        <h3 [routerLink]=\"'/home/products'\" class=\"m0\">Roofing</h3>\n                        <a [routerLink]=\"'/home/products'\"><small>View details</small></a>\n                    </div>\n                </div>\n            </div>\n             </a>\n            <!-- END widget-->\n        </div>\n        <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\n            <!-- START widget-->\n            <a>\n            <div class=\"panel widget\">\n                <img class=\"img-responsive vertical\" src=\"assets/img/product10.png\" alt=\"Image\" [routerLink]=\"'/home/products'\" />\n                <div class=\"panel-body\">\n                    <div class=\"row row-table text-center\">\n                            <h3 [routerLink]=\"'/home/products'\" class=\"m0\">Sliding</h3>\n                            <a [routerLink]=\"'/home/products'\"><small>View details</small></a>\n                    </div>\n                </div>\n            </div>\n        </a>\n            <!-- END widget-->\n        </div>\n        <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\n            <!-- START widget-->\n            <a>\n            <div class=\"panel widget\">\n                <img class=\"img-responsive vertical\" src=\"assets/img/product9.png\" alt=\"Image\" [routerLink]=\"'/home/products'\" />\n                <div class=\"panel-body\">\n                    <div class=\"row row-table text-center\">\n                            <h3 [routerLink]=\"'/home/products'\" class=\"m0\">Soffit</h3>\n                            <a [routerLink]=\"'/home/products'\"><small>View details</small></a>\n                    </div>\n                </div>\n            </div>\n            </a>\n                <!-- END widget-->\n            </div> \n             <div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\">\n            <!-- START widget-->\n            <a>\n            <div class=\"panel widget\">\n                <img class=\"img-responsive vertical\" src=\"assets/img/product7.png\" alt=\"Image\" [routerLink]=\"'/home/products'\" />\n                <div class=\"panel-body\">\n                    <div class=\"row row-table text-center\">\n                            <h3 [routerLink]=\"'/home/products'\" class=\"m0\">Rain Ware</h3>\n                            <a [routerLink]=\"'/home/products'\"><small>View details</small></a>\n                    </div>\n                </div>\n            </div>\n            </a>\n            <!-- END widget-->\n        </div>    \n</div>\n</div>\n<!-- <section> -->\n<div class=\"content-wrapper\">\n    <div class=\"content-heading\">Categories\n        <small>Categories of procuts avilable</small>\n    </div>\n</div>\n<div class=\"container-fluid\" style=\"background:transparent;\">\n\n    <div class=\"col-lg-6\">\n        <!-- START widget-->\n        <div class=\"panel widget\">\n            <div class=\"row row-table row-flush\">\n                <div class=\"col-xs-6\">\n                    <picture class=\"lateral-picture\">\n                        <img src=\"assets/img/product8.png\" alt=\"\" />\n                    </picture>\n                </div>\n                <div class=\"col-xs-6 align-middle p-lg\">\n                    <!--<div class=\"pull-right\"><a class=\"btn btn-primary btn-sm\" href=\"#\">Register</a>\n                    </div>\n                    <p>\n                        <span class=\"text-lg\">16</span>Aug</p>\n                    <p>\n                        <strong>EVENT INVITATION</strong>\n                    </p>-->\n                     <h3 class=\"m0\">Siding</h3>\n                    <p class=\"text-muted\">Some tag</p>\n                    <p>Donec posuere neque in elit luctus tempor consequat enim egestas. Nulla dictum egestas leo at lobortis.</p>\n                </div>\n            </div>\n        </div>\n        <!-- END widget-->\n    </div>\n    <div class=\"col-lg-6\">\n        <!-- START widget-->\n        <div class=\"panel widget\">\n            <div class=\"half-float\">\n                <img class=\"img-responsive second-catageroies\" src=\"assets/img/product8.png\" alt=\"\" />\n                <div class=\"half-float-bottom\">\n                    <!-- <img class=\"img-thumbnail img-circle thumb128\" src=\"assets/img/user/09.jpg\" alt=\"Image\" /> -->\n                </div>\n            </div>\n            <div class=\"panel-body text-center\">\n                <h3 class=\"m0\">Roofing</h3>\n                <p class=\"text-muted\">Some tag</p>\n                <p>Proin metus justo, commodo in ultrices at, lobortis sit amet dui. Fusce dolor purus, adipiscing a tempus\n                    at, gravida vel purus.</p>\n            </div>\n            <!--<div class=\"panel-body text-center bg-gray-dark\">\n                <div class=\"row row-table\">\n                    <div class=\"col-xs-4\">\n                        <h3 class=\"m0\">400</h3>\n                        <p class=\"m0\">Photos</p>\n                    </div>\n                    <div class=\"col-xs-4\">\n                        <h3 class=\"m0\">2000</h3>\n                        <p class=\"m0\">Likes</p>\n                    </div>\n                    <div class=\"col-xs-4\">\n                        <h3 class=\"m0\">500</h3>\n                        <p class=\"m0\">Following</p>\n                    </div>\n                </div>\n            </div>-->\n        </div>\n        <!-- END widget-->\n    </div>\n    <div class=\"col-lg-6 catageoryTopMargin\">\n        <!-- START widget-->\n        <div class=\"panel widget\">\n            <div class=\"half-float\">\n                <img class=\"img-responsive\" src=\"assets/img/product10.png\" alt=\"\" />\n                <div class=\"half-float-bottom\">\n                    <!-- <img class=\"img-thumbnail img-circle thumb128\" src=\"assets/img/user/09.jpg\" alt=\"Image\" /> -->\n                </div>\n            </div>\n            <div class=\"panel-body text-center\">\n                <h3 class=\"m0\">Rainware</h3>\n                <p class=\"text-muted\">Some tag</p>\n                <p>Proin metus justo, commodo in ultrices at, lobortis sit amet dui. Fusce dolor purus, adipiscing a tempus\n                    at, gravida vel purus.</p>\n            </div>\n            <!--<div class=\"panel-body text-center bg-gray-dark\">\n                <div class=\"row row-table\">\n                    <div class=\"col-xs-4\">\n                        <h3 class=\"m0\">400</h3>\n                        <p class=\"m0\">Photos</p>\n                    </div>\n                    <div class=\"col-xs-4\">\n                        <h3 class=\"m0\">2000</h3>\n                        <p class=\"m0\">Likes</p>\n                    </div>\n                    <div class=\"col-xs-4\">\n                        <h3 class=\"m0\">500</h3>\n                        <p class=\"m0\">Following</p>\n                    </div>\n                </div>\n            </div>-->\n        </div>\n        <!-- END widget-->\n    </div>\n    <div class=\"col-lg-6\">\n        <!-- START widget-->\n        <div class=\"panel widget\">\n            <div class=\"row row-table row-flush\">\n                <div class=\"col-xs-6\">\n                    <picture class=\"lateral-picture\">\n                        <img src=\"assets/img/product9.png\" alt=\"\" />\n                    </picture>\n                </div>\n                <div class=\"col-xs-6 align-middle p-lg\">\n                    <!--<div class=\"pull-right\"><a class=\"btn btn-primary btn-sm\" href=\"#\">Register</a>\n                    </div>\n                    <p>\n                        <span class=\"text-lg\">16</span>Aug</p>\n                    <p>\n                        <strong>EVENT INVITATION</strong>\n                    </p>-->\n                    <h3 class=\"m0\">Saffit,Fascia&Trim</h3>\n                    <p class=\"text-muted\">Some tag</p>\n                    <p>Donec posuere neque in elit luctus tempor consequat enim egestas. Nulla dictum egestas leo at lobortis.</p>\n                </div>\n            </div>\n        </div>\n        <!-- END widget-->\n    </div>\n</div>"

/***/ }),

/***/ 1022:
/***/ (function(module, exports) {

module.exports = "<!-- START panel-->\n<div class=\"col-md-12 products-main\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h2>New Arrivals</h2>\n    </div>\n    <div class=\"panel-body\">\n      <!--<div class=\"row\">-->\n        <div class=\"col-lg-3\">\n          <!-- START widget-->\n          <div class=\"panel widget\">\n            <img class=\"img-responsive\" src=\"assets/img/product1.PNG\" alt=\"Image\" />\n            <div class=\"panel-body\">\n              <div class=\"row row-table text-center\">\n                <a>View details <span class=\"fa fa-angle-double-right\"></span></a>\n              </div>\n            </div>\n            <div class=\"caption\">\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, quisquam?</p>\n            </div>\n          </div>\n          <!-- END widget-->\n        </div>\n        <div class=\"col-lg-3\">\n          <!-- START widget-->\n          <div class=\"panel widget\">\n            <img class=\"img-responsive\" src=\"assets/img/bg1.jpg\" alt=\"Image\" />\n            <div class=\"panel-body\">\n              <div class=\"row row-table text-center\">\n                <a>View details <span class=\"fa fa-angle-double-right\"></span></a>\n              </div>\n            </div>\n            <div class=\"caption\">\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, quisquam?</p>\n            </div>\n          </div>\n          <!-- END widget-->\n        </div>\n        <div class=\"col-lg-3\">\n          <!-- START widget-->\n          <div class=\"panel widget\">\n            <img class=\"img-responsive\" src=\"assets/img/bg1.jpg\" alt=\"Image\" />\n            <div class=\"panel-body\">\n              <div class=\"row row-table text-center\">\n                <a>View details <span class=\"fa fa-angle-double-right\"></span></a>\n              </div>\n            </div>\n            <div class=\"caption\">\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, quisquam?</p>\n            </div>\n          </div>\n          <!-- END widget-->\n        </div>\n        <div class=\"col-lg-3\">\n          <!-- START widget-->\n          <div class=\"panel widget\">\n            <img class=\"img-responsive\" src=\"assets/img/bg1.jpg\" alt=\"Image\" />\n            <div class=\"panel-body\">\n              <div class=\"row row-table text-center\">\n                <a>View details <span class=\"fa fa-angle-double-right\"></span></a>\n              </div>\n            </div>\n            <div class=\"caption\">\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, quisquam?</p>\n            </div>\n          </div>\n          <!-- END widget-->\n        </div>\n      <!--</div>-->\n    </div>\n  </div>\n</div>\n<!-- END panel-->"

/***/ }),

/***/ 1023:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <!-- <div class=\"row product-catalog-main\"> -->\n    <!-- <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-6\"> -->\n    <div class=\"aside\">\n        <!-- START Sidebar (left)-->\n        <div class=\"aside-inner\">\n            <nav class=\"sidebar\" sidebar-anyclick-close=\"\" [class.show-scrollbar]=\"settings.layout.asideScrollbar\">\n                <br>\n                <div class=\"container-fluid\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <form class=\"form-validate form-horizontal\" novalidate=\"\">\n                                <!-- START sidebar nav-->\n                                <div class=\"form-group\">\n                                    \n                                    <!-- <label class=\"col-sm-2 control-label float-left pull-left\">Style</label> -->\n                                    <div class=\"col-sm-12\">\n                                            <span>Style</span>\n                                        <angular2-multiselect [data]=\"styles\" [(ngModel)]=\"selectedStyles\" \n                                            name=\"styles\"\n                                            [settings]=\"dropdownSettings\" \n                                            (onSelect)=\"styleSelected($event)\" \n                                            (onDeSelect)=\"styleDeselected($event)\"\n                                            (onSelectAll)=\"onSelectAll($event)\"\n                                            (onDeSelectAll)=\"onDeSelectAll($event)\"></angular2-multiselect>\n                                            <!-- <ss-multiselect-dropdown [options]=\"styles\" [(ngModel)]=\"stylesModel\"  (ngModelChange)=\"styleSelected($event)\"></ss-multiselect-dropdown> -->\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label class=\"col-sm-2 control-label pull-left\">Color</label>\n                                    <div class=\"col-sm-12\">\n                                        <div class=\"panel-body\">\n                                            <ul class=\"list-inline external-event-color-selector margin-sm-colors\">\n                                                <li *ngFor=\"let color of colors; let i='index'\" class=\"p0\">\n                                                    <a class=\"circle circle-{{color.name}} circle-xl\" (click)=\"colorSelected(color.id, $event)\" [ngClass]=\"{'currentColor':color.selected === true}\">\n                                                        <!-- <input type=\"checkbox\" [checked]=\"color.selected\" style=\"visibility:hidden\" /> -->\n                                                    </a>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </div>\n                                \n                                <div class=\"form-group\">\n                                    <!-- <label class=\"col-sm-2 control-label pull-left\">Brand</label> -->\n                                    <div class=\"col-sm-12\">\n                                            <span>Brand</span>\n                                        <angular2-multiselect [data]=\"brands\" [(ngModel)]=\"selectedBrands\" \n                                            name=\"brands\"\n                                            [settings]=\"dropdownSettings\" \n                                            (onSelect)=\"brandSelected($event)\" \n                                            (onDeSelect)=\"brandDeselected($event)\"></angular2-multiselect>\n                                        <!-- <ss-multiselect-dropdown [options]=\"brands\" [(ngModel)]=\"brandssModel\" name=\"brands\" name=\"styles\" (ngModelChange)=\"brandSelected($event)\"></ss-multiselect-dropdown>     -->\n                                        \n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                        \n                                    <!-- <label class=\"col-sm-2 control-label pull-left\">Model</label> -->\n                                    <div class=\"col-sm-12\">\n                                            <span>Model</span>\n                                        <angular2-multiselect [data]=\"models\" [(ngModel)]=\"selectedModels\" \n                                            name=\"models\"\n                                            [settings]=\"dropdownSettings\" \n                                            (onSelect)=\"modelSelected($event)\" \n                                            (onDeSelect)=\"modelDeselected($event)\"></angular2-multiselect>\n                                        <!-- <ss-multiselect-dropdown [options]=\"models\" [(ngModel)]=\"modelsModel\" name=\"models\" name=\"styles\" (ngModelChange)=\"modelSelected($event)\"></ss-multiselect-dropdown>     -->\n                                            \n                                    </div>\n                                </div>\n                                <!-- END sidebar nav-->\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </nav>\n        </div>\n        <!-- END Sidebar (left)-->\n    </div>\n    <!-- </div> -->\n    <!-- offsidebar-->\n    <!--<app-offsidebar class=\"offsidebar\"></app-offsidebar>-->\n    <!-- Main section-->\n    <!-- <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-6\"> -->\n    <section>\n        <!-- Page content-->\n        <div class=\"content-wrapper\">\n            <div class=\"content-heading\">Product Catalog\n                <small>Search for the product you wish to have</small>\n            </div>\n            <div *ngFor=\"let product of products\">\n                <div class=\"col-lg-4\">\n                    <!-- START widget-->\n                    <div class=\"panel widget\">\n                        <div class=\"panel-body text-center bg-center\" style=\"background-image: url('assets/img/bg4.jpg')\">\n                            <div class=\"row row-table\">\n                                <div class=\"col-xs-12 text-white\">\n                                    <br><br><br>\n                                    <!-- <img class=\"img-thumbnail img-circle thumb128\" src=\"assets/img/user/06.jpg\" alt=\"Image\" /> -->\n                                    <h3 class=\"m0\">{{product.name}}</h3>\n                                    <p class=\"m0\">\n                                        <em></em>some info</p>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"panel-body text-center bg-gray-lighter\">\n                            <div class=\"row row-table\">\n                                <div class=\"col-xs-12\">\n                                    <a class=\"text-{{product.color}}\" [routerLink]=\"'/home/characteristics'\">\n                                        product name\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- END widget-->\n                </div>\n            </div>\n        </div>\n    </section>\n    <!-- </div> -->\n    <!-- </div> -->\n</div>"

/***/ }),

/***/ 1024:
/***/ (function(module, exports) {

module.exports = "<!-- START Sidebar (left)-->\n<div class=\"aside-inner\">\n    <nav class=\"sidebar\" sidebar-anyclick-close=\"\" [class.show-scrollbar]=\"settings.layout.asideScrollbar\">\n\n        <!-- START sidebar nav-->\n        <ul class=\"nav\">\n\n\n            <li *ngFor='let item of menuItems' [ngClass]=\"{'nav-heading': item.heading}\" [routerLinkActive]=\"['active']\">\n                <!-- menu heading -->\n                <span *ngIf=\"item.heading\">{{(item.translate | translate) || item.text}}</span>\n                <!-- external links -->\n                <a *ngIf=\"!item.heading && !item.submenu && item.elink\" [attr.target]=\"item.target\" [attr.href]=\"item.elink\" title=\"{{item.text}}\">\n                    <span class=\"pull-right\" *ngIf=\"item.alert\" [ngClass]=\"item.label || 'label label-success'\">{{item.alert}}</span>\n                    <em class=\"{{item.icon}}\" *ngIf=\"item.icon\"></em>\n                    <span>{{(item.translate | translate) || item.text}}</span>\n                </a>\n                <!-- single menu item -->\n                <a *ngIf=\"!item.heading && !item.submenu && !item.elink\" [routerLink]=\"item.link\" [attr.route]=\"item.link\" title=\"{{item.text}}\"\n                    (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\n                    <span class=\"pull-right\" *ngIf=\"item.alert\" [ngClass]=\"item.label || 'label label-success'\">{{item.alert}}</span>\n                    <em class=\"{{item.icon}}\" *ngIf=\"item.icon\"></em>\n                    <span>{{(item.translate | translate) || item.text}}</span>\n                </a>\n                <!-- has submenu -->\n                <a *ngIf=\"!item.heading && item.submenu\" title=\"{{item.text}}\"\n                    (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\n                        <span class=\"pull-right\" *ngIf=\"item.alert\" [ngClass]=\"item.label || 'label label-success'\">{{item.alert}}</span>\n                        <em class=\"{{item.icon}}\" *ngIf=\"item.icon\"></em>\n                        <span>{{(item.translate | translate) || item.text}}</span>\n                </a>\n                <!-- SUBLEVEL -->\n                <ul *ngIf=\"item.submenu\" class=\"nav sidebar-subnav\" [routerLinkActive]=\"['opening']\">\n                    <li class=\"sidebar-subnav-header\">{{(item.translate | translate) || item.text}}</li>\n                    <li *ngFor='let subitem of item.submenu' [routerLinkActive]=\"['active']\">\n                        <!-- sublevel: external links -->\n                        <a *ngIf=\"!subitem.heading && !subitem.submenu && subitem.elink\" [attr.target]=\"subitem.target\" [attr.href]=\"subitem.elink\" title=\"{{subitem.text}}\">\n                            <span class=\"pull-right\" *ngIf=\"subitem.alert\" [ngClass]=\"subitem.label || 'label label-success'\">{{subitem.alert}}</span>\n                            <em class=\"{{subitem.icon}}\" *ngIf=\"subitem.icon\"></em>\n                            <span>{{(subitem.translate | translate) || subitem.text}}</span>\n                        </a>\n                        <!-- sublevel: single menu item  -->\n                        <a *ngIf=\"!subitem.submenu && !subitem.elink\" [routerLink]=\"subitem.link\" [attr.route]=\"subitem.link\" title=\"{{subitem.text}}\">\n                            <span class=\"pull-right\" *ngIf=\"subitem.alert\" [ngClass]=\"subitem.label || 'label label-success'\">{{subitem.alert}}</span>\n                            <em class=\"{{subitem.icon}}\" *ngIf=\"subitem.icon\"></em>\n                            <span>{{(subitem.translate | translate) || subitem.text}}</span>\n                        </a>\n                        <!-- sublevel: has submenu -->\n                        <a *ngIf=\"subitem.submenu\" title=\"{{subitem.text}}\"\n                            (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\n                                <span class=\"pull-right\" *ngIf=\"subitem.alert\" [ngClass]=\"subitem.label || 'label label-success'\">{{subitem.alert}}</span>\n                                <em class=\"{{subitem.icon}}\" *ngIf=\"subitem.icon\"></em>\n                                <span>{{(subitem.translate | translate) || subitem.text}}</span>\n                        </a>\n                        <!-- SUBLEVEL 2 -->\n                        <ul *ngIf=\"subitem.submenu\" class=\"nav sidebar-subnav level2\" [routerLinkActive]=\"['opening']\">\n                            <li *ngFor='let subitem2 of subitem.submenu' [routerLinkActive]=\"['active']\">\n                                <!-- sublevel 2: single menu item  -->\n                                <a *ngIf=\"!subitem2.submenu\" [routerLink]=\"subitem2.link\" [attr.route]=\"subitem2.link\" title=\"{{subitem2.text}}\">\n                                    <span class=\"pull-right\" *ngIf=\"subitem2.alert\" [ngClass]=\"subitem2.label || 'label label-success'\">{{subitem2.alert}}</span>\n                                    <em class=\"{{subitem2.icon}}\" *ngIf=\"subitem2.icon\"></em>\n                                    <span>{{(subitem2.translate | translate) || subitem2.text}}</span>\n                                </a>\n                                <!-- sublevel2: has submenu -->\n                                <a *ngIf=\"subitem2.submenu\" title=\"{{subitem2.text}}\"\n                                    (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\n                                        <span class=\"pull-right\" *ngIf=\"subitem2.alert\" [ngClass]=\"subitem2.label || 'label label-success'\">{{subitem2.alert}}</span>\n                                        <em class=\"{{subitem2.icon}}\" *ngIf=\"subitem2.icon\"></em>\n                                        <span>{{(subitem2.translate | translate) || subitem2.text}}</span>\n                                </a>\n                                <!-- SUBLEVEL 3 -->\n                                <ul *ngIf=\"subitem2.submenu\" class=\"nav sidebar-subnav level3\" [routerLinkActive]=\"['opening']\">\n                                    <li *ngFor='let subitem3 of subitem2.submenu' [routerLinkActive]=\"['active']\">\n                                        <!-- sublevel 2: single menu item  -->\n                                        <a *ngIf=\"!subitem3.submenu\" [routerLink]=\"subitem3.link\" [attr.route]=\"subitem3.link\" title=\"{{subitem3.text}}\">\n                                            <span class=\"pull-right\" *ngIf=\"subitem3.alert\" [ngClass]=\"subitem3.label || 'label label-success'\">{{subitem3.alert}}</span>\n                                            <em class=\"{{subitem3.icon}}\" *ngIf=\"subitem3.icon\"></em>\n                                            <span>{{(subitem3.translate | translate) || subitem3.text}}</span>\n                                        </a>\n                                        <!-- sublevel3: has submenu -->\n                                        <a *ngIf=\"subitem3.submenu\" title=\"{{subitem3.text}}\"\n                                            (click)=\"toggleSubmenuClick($event)\" (mouseenter)=\"toggleSubmenuHover($event)\">\n                                                <span class=\"pull-right\" *ngIf=\"subitem3.alert\" [ngClass]=\"subitem3.label || 'label label-success'\">{{subitem3.alert}}</span>\n                                                <em class=\"{{subitem3.icon}}\" *ngIf=\"subitem3.icon\"></em>\n                                                <span>{{(subitem3.translate | translate) || subitem3.text}}</span>\n                                        </a>\n                                        <!-- SUBLEVEL 4 -->\n                                        <ul *ngIf=\"subitem3.submenu\" class=\"nav sidebar-subnav level3\" [routerLinkActive]=\"['opening']\">\n                                            <li *ngFor='let subitem4 of subitem3.submenu' [routerLinkActive]=\"['active']\">\n                                                <!-- sublevel 2: single menu item  -->\n                                                <a *ngIf=\"!subitem4.submenu\" [routerLink]=\"subitem4.link\" [attr.route]=\"subitem4.link\" title=\"{{subitem4.text}}\">\n                                                    <span class=\"pull-right\" *ngIf=\"subitem4.alert\" [ngClass]=\"subitem4.label || 'label label-success'\">{{subitem4.alert}}</span>\n                                                    <em class=\"{{subitem4.icon}}\" *ngIf=\"subitem4.icon\"></em>\n                                                    <span>{{(subitem4.translate | translate) || subitem4.text}}</span>\n                                                </a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                </ul>\n                            <li>\n                        </ul>\n                    <li>\n                </ul>\n            </li>\n\n        </ul>\n        <!-- END sidebar nav-->\n\n    </nav>\n</div>\n<!-- END Sidebar (left)-->\n\n"

/***/ }),

/***/ 1025:
/***/ (function(module, exports) {

module.exports = "<!-- START Search form-->\n<form class=\"navbar-form\" role=\"search\" action=\"search.html\" [class.open]=\"visible\" (submit)=\"handleForm()\">\n    <div class=\"form-group has-feedback\">\n        <input [(ngModel)]=\"term\" name=\"term\" class=\"form-control\" type=\"text\" placeholder=\"{{'header.search.PLACEHOLDER' | translate}}\" />\n        <div class=\"fa fa-times form-control-feedback\" (click)=\"closeNavSearch()\"></div>\n    </div>\n    <button class=\"hidden btn btn-default\" type=\"submit\">Submit</button>\n</form>\n<!-- END Search form-->\n"

/***/ }),

/***/ 1026:
/***/ (function(module, exports) {

module.exports = "<!-- START Top Navbar-->\n<nav class=\"navbar topnavbar\" role=\"navigation\">\n    <!-- START navbar header-->\n    <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" [routerLink]=\"'/home'\">\n            <div class=\"brand-logo\">\n                <img class=\"img-responsive\" src=\"{{logo}}\" alt=\"App Logo\" style=\"height:40px;width:100px;\" />\n            </div>\n            <div class=\"brand-logo-collapsed\">\n                <img class=\"img-responsive\" src=\"{{logoIcon}}\" alt=\"App Logo\" />\n            </div>\n            <!-- <a class=\"navbar-brand brand\" [routerLink]=\"'/home'\">\n                nayo\n            </a> -->\n        </a>\n    </div>\n    <!-- END navbar header-->\n    <!-- START Nav wrapper-->\n    <div class=\"nav-wrapper\">\n        <!-- START Left navbar-->\n        <ul class=\"nav navbar-nav\">\n            <li>\n                <!-- Button used to collapse the left sidebar. Only visible on tablet and desktops-->\n                <!--<a class=\"hidden-xs\" trigger-resize=\"\" (click)=\"toggleCollapsedSideabar()\" *ngIf=\"!isCollapsedText()\">\n                    <em class=\"fa fa-navicon\"></em>\n                </a>-->\n                <!-- Button to show/hide the sidebar on mobile. Visible on mobile only.-->\n                <a class=\"visible-xs sidebar-toggle\" (click)=\"settings.layout.asideToggled =! settings.layout.asideToggled\">\n                    <em class=\"fa fa-navicon\"></em>\n                </a>\n            </li>\n            <!-- START User avatar toggle-->\n            <!--<li>-->\n            <!-- Button used to collapse the left sidebar. Only visible on tablet and desktops-->\n            <!--<a (click)=\"toggleUserBlock($event)\">\n                    <em class=\"icon-user\"></em>\n                </a>\n            </li>-->\n            <!-- END User avatar toggle-->\n            <!-- START lock screen-->\n            <!--<li>\n                <a  title=\"Lock screen\" [routerLink]=\"'/lock'\">\n                    <em class=\"icon-lock\"></em>\n                </a>\n            </li>-->\n            <!-- END lock screen-->\n        </ul>\n        <!-- END Left navbar-->\n        <!-- START Right Navbar-->\n        <ul class=\"nav navbar-nav navbar-right\">\n            <!-- Search icon-->\n            <li>\n                <a (click)=\"openNavSearch($event)\">\n                    <em class=\"icon-magnifier\"></em>\n                </a>\n            </li>\n            <!-- Fullscreen (only desktops)-->\n            <!-- <li class=\"visible-lg\">\n                <a #fsbutton (click)=\"toggleFullScreen($event)\">\n                    <em class=\"fa fa-expand\"></em>\n                </a>\n            </li> -->\n            <li class=\"visible-lg\">\n                <a #fsbutton [routerLink]=\"'/login'\">Login\n                </a>\n            </li>\n            <li class=\"visible-lg\">\n                <a #fsbutton [routerLink]=\"'/register'\">Signup\n                </a>\n            </li>\n            <!-- START Alert menu-->\n            <li class=\"dropdown dropdown-list\" dropdown>\n                <a dropdownToggle>\n                    <em class=\"icon-bell\"></em>\n                    <div class=\"label label-danger\">11</div>\n                </a>\n                <!-- START Dropdown menu-->\n                <ul *dropdownMenu class=\"dropdown-menu animated flipInX\">\n                    <li>\n                        <!-- START list group-->\n                        <div class=\"list-group\">\n                            <!-- list item-->\n                            <a class=\"list-group-item\">\n                                <div class=\"media-box\">\n                                    <div class=\"pull-left\">\n                                        <em class=\"fa fa-twitter fa-2x text-info\"></em>\n                                    </div>\n                                    <div class=\"media-box-body clearfix\">\n                                        <p class=\"m0\">New followers</p>\n                                        <p class=\"m0 text-muted\">\n                                            <small>1 new follower</small>\n                                        </p>\n                                    </div>\n                                </div>\n                            </a>\n                            <!-- list item-->\n                            <a class=\"list-group-item\">\n                                <div class=\"media-box\">\n                                    <div class=\"pull-left\">\n                                        <em class=\"fa fa-envelope fa-2x text-warning\"></em>\n                                    </div>\n                                    <div class=\"media-box-body clearfix\">\n                                        <p class=\"m0\">New e-mails</p>\n                                        <p class=\"m0 text-muted\">\n                                            <small>You have 10 new emails</small>\n                                        </p>\n                                    </div>\n                                </div>\n                            </a>\n                            <!-- list item-->\n                            <a class=\"list-group-item\">\n                                <div class=\"media-box\">\n                                    <div class=\"pull-left\">\n                                        <em class=\"fa fa-tasks fa-2x text-success\"></em>\n                                    </div>\n                                    <div class=\"media-box-body clearfix\">\n                                        <p class=\"m0\">Pending Tasks</p>\n                                        <p class=\"m0 text-muted\">\n                                            <small>11 pending task</small>\n                                        </p>\n                                    </div>\n                                </div>\n                            </a>\n                            <!-- last list item-->\n                            <a class=\"list-group-item\">\n                                <small translate=\"topbar.notification.MORE\">More notifications</small>\n                                <span class=\"label label-danger pull-right\">14</span>\n                            </a>\n                        </div>\n                        <!-- END list group-->\n                    </li>\n                </ul>\n                <!-- END Dropdown menu-->\n            </li>\n            <!-- END Alert menu-->\n            <!-- START Profile menu-->\n            <li class=\"dropdown dropdown-list\" dropdown>\n                <a dropdownToggle>\n                    <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n                    <!--<div class=\"label label-danger\">11</div>-->\n                </a>\n                <!-- START Dropdown menu-->\n                <ul *dropdownMenu class=\"dropdown-menu animated flipInX\">\n                    <li>\n                        <!-- START list group-->\n                        <div class=\"list-group\">\n                            <!-- list item-->\n                            <a class=\"list-group-item\">\n                                <div class=\"media-box\" (click)=\"editProfile()\">\n                                    <div class=\"pull-left\">\n                                        <em class=\"fa fa-pencil-square-o fa-2x text-info\"></em>\n                                    </div>\n                                    <div class=\"media-box-body clearfix\">\n                                        <p class=\"m0\">Edit profile</p>\n                                        <!--<p class=\"m0 text-muted\">\n                                            <small>1 new follower</small>\n                                        </p>-->\n                                    </div>\n                                </div>\n                            </a>\n                            <!-- list item-->\n                            <a class=\"list-group-item\">\n                                <div class=\"media-box\">\n                                    <div class=\"pull-left\">\n                                        <em class=\"fa fa-power-off fa-2x text-warning\"></em>\n                                    </div>\n                                    <div class=\"media-box-body clearfix\">\n                                        <p class=\"m0\">Log Out</p>\n                                        <!--<p class=\"m0 text-muted\">\n                                            <small>You have 10 new emails</small>\n                                        </p>-->\n                                    </div>\n                                </div>\n                            </a>\n                        </div>\n                        <!-- END list group-->\n                    </li>\n                </ul>\n                <!-- END Dropdown menu-->\n            </li>\n            <!-- START Offsidebar button-->\n            <!--<li>\n                <a (click)=\"toggleOffsidebar()\">\n                    <em class=\"icon-notebook\"></em>\n                </a>\n            </li>-->\n            <!-- END Offsidebar menu-->\n        </ul>\n        <!-- END Right Navbar-->\n    </div>\n    <!-- END Nav wrapper-->\n\n    <app-navsearch [visible]=\"getNavSearchVisible()\" (onclose)=\"setNavSearchVisible(false)\"></app-navsearch>\n\n</nav>\n<!-- END Top Navbar-->"

/***/ }),

/***/ 1027:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <!-- Top Navbar -->\n    <app-top-navbar class=\"topnavbar-wrapper\" (openModal)=\"showModal($event)\"></app-top-navbar>\n    <!-- Child Routing -->\n    <router-outlet></router-outlet>\n    <div bsModal #lgModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title pull-left\">Edit Profile</h4>\n                    <button type=\"button\" class=\"close pull-right\" (click)=\"lgModal.hide()\" aria-label=\"Close\">\n                                <span aria-hidden=\"true\">&times;</span>\n                            </button>\n                </div>\n                <div class=\"modal-body\">\n                    <form [formGroup]=\"valForm\" class=\"form-validate mb-lg\" role=\"form\" name=\"registerForm\" novalidate=\"\" (submit)=\"submitForm($event, valForm.value)\">\n                        <div class=\"form-group has-feedback\">\n                            <!--<label class=\"text-muted\">Full name</label>-->\n                            <input class=\"form-control\" type=\"text\" name=\"account_name\" placeholder=\"Enter Name\" autocomplete=\"off\" formControlName=\"name\" required=\"\" />\n                            <span class=\"fa fa-user-o form-control-feedback text-muted\"></span>\n                            <span class=\"text-danger\" *ngIf=\"valForm.controls['name'].hasError('required') && (valForm.controls['name'].dirty || valForm.controls['name'].touched)\">Name is required</span>\n                            <span class=\"text-danger\" *ngIf=\"valForm.controls['name'].hasError('minlength') && (valForm.controls['name'].dirty || valForm.controls['name'].touched)\">Name must contain atleast 2 characters</span>\n                        </div>\n                        <div class=\"form-group has-feedback\">\n                            <!--<label class=\"text-muted\">Email address</label>-->\n                            <input class=\"form-control\" type=\"email\" name=\"account_email\" placeholder=\"Enter email\" autocomplete=\"off\" formControlName=\"email\" required=\"\" />\n                            <span class=\"fa fa-envelope form-control-feedback text-muted\"></span>\n                            <span class=\"text-danger\" *ngIf=\"valForm.controls['email'].hasError('required') && (valForm.controls['email'].dirty || valForm.controls['email'].touched)\">Email is required</span>\n                            <span class=\"text-danger\" *ngIf=\"valForm.controls['email'].hasError('email') && (valForm.controls['email'].dirty || valForm.controls['email'].touched)\">This field must be a valid email address</span>\n                        </div>\n                        <div class=\"form-group has-feedback\">\n                            <!--<label class=\"text-muted\">address</label>-->\n                            <input class=\"form-control\" type=\"description\" name=\"account_address\" placeholder=\"Enter address\" autocomplete=\"off\" formControlName=\"address\" required=\"\" />\n                            <span class=\"fa fa-address-card form-control-feedback text-muted\"></span>\n                            <span class=\"text-danger\" *ngIf=\"valForm.controls['address'].hasError('required') && (valForm.controls['address'].dirty || valForm.controls['address'].touched)\">address is required</span>\n                            <span class=\"text-danger\" *ngIf=\"valForm.controls['address'].hasError('minlength') && (valForm.controls['address'].dirty || valForm.controls['address'].touched)\">address must contain atlest 10 characters</span>\n                        </div>\n                        <div class=\"form-group has-feedback\">\n                            <!--<label class=\"text-muted\">address</label>-->\n                            <input class=\"form-control\" type=\"description\" name=\"account_company\" placeholder=\"Enter company name\" autocomplete=\"off\" formControlName=\"company\" required=\"\" />\n                            <span class=\"fa fa-briefcase form-control-feedback text-muted\"></span>\n                            <span class=\"text-danger\" *ngIf=\"valForm.controls['company'].hasError('required') && (valForm.controls['company'].dirty || valForm.controls['company'].touched)\">Company name is required</span>\n                            <span class=\"text-danger\" *ngIf=\"valForm.controls['company'].hasError('minlength') && (valForm.controls['company'].dirty || valForm.controls['company'].touched)\">Company name must contain atlest 2 characters</span>\n                        </div>\n                        <div class=\"form-group has-feedback\">\n                            <!--<label class=\"text-muted\">Phone Number</label>-->\n                            <input class=\"form-control\" type=\"number\" name=\"account_phone\" placeholder=\"Enter Mobile number\" autocomplete=\"off\" formControlName=\"phone\" required=\"\" />\n                            <span class=\"fa fa-phone-square form-control-feedback text-muted\"></span>\n                            <span class=\"text-danger\" *ngIf=\"valForm.controls['phone'].hasError('required') && (valForm.controls['phone'].dirty || valForm.controls['phone'].touched)\">Phone Number is required</span>\n                            <span class=\"text-danger\" *ngIf=\"valForm.controls['phone'].hasError('minlength') && (valForm.controls['phone'].dirty || valForm.controls['phone'].touched)\">Must contain atleast 10 number</span>\n                        </div>\n                        <div class=\"form-group has-feedback\">\n                            <!--<label class=\"text-muted\">Phone Number</label>-->\n                            <input class=\"form-control\" type=\"number\" name=\"account_pincode\" placeholder=\"Enter Pin code\" autocomplete=\"off\" formControlName=\"pincode\" required=\"\" />\n                            <span class=\"fa fa-ellipsis-h form-control-feedback text-muted\"></span>\n                            <span class=\"text-danger\" *ngIf=\"valForm.controls['pincode'].hasError('required') && (valForm.controls['pincode'].dirty || valForm.controls['pincode'].touched)\">Pin Code is required</span>\n                            <span class=\"text-danger\" *ngIf=\"valForm.controls['pincode'].hasError('minlength') && (valForm.controls['pincode'].dirty || valForm.controls['pincode'].touched)\">Must contain atleast 6 numbers</span>\n                        </div>\n                        <button class=\"btn btn-block btn-primary mt-lg\" type=\"submit\">Submit</button>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- Page footer-->\n    <footer app-footer></footer>"

/***/ }),

/***/ 900:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_multiselect_dropdown_angular2_multiselect_dropdown__ = __webpack_require__(957);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_pipes_datafilter__ = __webpack_require__(956);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_menu_menu_service__ = __webpack_require__(926);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_settings_settings_service__ = __webpack_require__(901);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__menu__ = __webpack_require__(955);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_routing_module__ = __webpack_require__(954);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_component__ = __webpack_require__(925);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_top_navbar_top_navbar_component__ = __webpack_require__(953);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_top_navbar_navsearch_navsearch_component__ = __webpack_require__(952);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_side_navbar_side_navbar_component__ = __webpack_require__(951);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_product_catalog_product_catalog_component__ = __webpack_require__(924);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_portal_home_portal_home_component__ = __webpack_require__(923);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_portal_home_carousal_carousal_component__ = __webpack_require__(948);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_portal_home_products_products_component__ = __webpack_require__(950);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_portal_home_categories_categories_component__ = __webpack_require__(949);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_characteristics_characteristics_component__ = __webpack_require__(920);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_orders_orders_component__ = __webpack_require__(922);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_footer_footer_component__ = __webpack_require__(947);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_order_view_order_view_component__ = __webpack_require__(921);
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
        menuService.addMenu(__WEBPACK_IMPORTED_MODULE_8__menu__["a" /* menu */]);
    }
    return HomeModule;
}());
HomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_9__home_routing_module__["a" /* HomeRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_multiselect_dropdown_angular2_multiselect_dropdown__["a" /* AngularMultiSelectModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_product_catalog_product_catalog_component__["a" /* ProductCatalogComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_portal_home_portal_home_component__["a" /* PortalHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_portal_home_carousal_carousal_component__["a" /* CarousalComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_portal_home_products_products_component__["a" /* ProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_portal_home_categories_categories_component__["a" /* CategoriesComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_top_navbar_top_navbar_component__["a" /* TopNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_top_navbar_navsearch_navsearch_component__["a" /* NavsearchComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_side_navbar_side_navbar_component__["a" /* SideNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_characteristics_characteristics_component__["a" /* CharacteristicsComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_orders_orders_component__["a" /* OrdersComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_characteristics_characteristics_component__["a" /* CharacteristicsComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_order_view_order_view_component__["a" /* OrderViewComponent */],
            __WEBPACK_IMPORTED_MODULE_4__shared_pipes_datafilter__["a" /* SearchFilterPipe */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__services_settings_settings_service__["a" /* SettingsService */],
            __WEBPACK_IMPORTED_MODULE_6__services_menu_menu_service__["a" /* MenuService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__services_menu_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_menu_menu_service__["a" /* MenuService */]) === "function" && _a || Object])
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

/***/ 920:
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
    CharacteristicsComponent.prototype.selectCharacteristic = function (index) {
        for (var i = 0; i < this.characteristics[this.currentCharacteristicId].value.lenght; i++) {
            this.characteristics[this.currentCharacteristicId].value[i].status = '';
        }
        this.characteristics[this.currentCharacteristicId].value[index].status = 'selected';
        //this.selectedCharacteristic=null;
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
        template: __webpack_require__(1015),
        styles: [__webpack_require__(972)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_settings_settings_service__["a" /* SettingsService */]) === "function" && _a || Object])
], CharacteristicsComponent);

var _a;
//# sourceMappingURL=characteristics.component.js.map

/***/ }),

/***/ 921:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderViewComponent = (function () {
    function OrderViewComponent() {
        this.lat = 33.790807;
        this.lng = -117.835734;
        this.zoom = 14;
        this.scrollwheel = false;
    }
    OrderViewComponent.prototype.ngOnInit = function () {
    };
    return OrderViewComponent;
}());
OrderViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-order-view',
        template: __webpack_require__(1017),
        styles: [__webpack_require__(974)]
    }),
    __metadata("design:paramtypes", [])
], OrderViewComponent);

//# sourceMappingURL=order-view.component.js.map

/***/ }),

/***/ 922:
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
    OrdersComponent.prototype.viewOrder = function () {
    };
    OrdersComponent.prototype.ngOnInit = function () {
    };
    return OrdersComponent;
}());
OrdersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-orders',
        template: __webpack_require__(1018),
        styles: [__webpack_require__(975)]
    }),
    __metadata("design:paramtypes", [])
], OrdersComponent);

//# sourceMappingURL=orders.component.js.map

/***/ }),

/***/ 923:
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
        template: __webpack_require__(1021),
        styles: [__webpack_require__(978)]
    }),
    __metadata("design:paramtypes", [])
], PortalHomeComponent);

//# sourceMappingURL=portal-home.component.js.map

/***/ }),

/***/ 924:
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
        this.dropdownSettings = {};
        // Model Driven validation
        this.valForm = fb.group({
            'style': [{ value: null, disabled: false }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'color': [{ value: null, disabled: false }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'brand': [{ value: null, disabled: false }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            'model': [{ value: null, disabled: false }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
        this.dropdownSettings = {
            singleSelection: false,
            text: "Select an item",
            enableCheckAll: false,
            enableSearchFilter: true,
            classes: "myclass custom-class"
        };
        this.styles = [
            { id: "0", itemName: "dotted" },
            { id: "1", itemName: "striped" },
            { id: "2", itemName: "checks" },
            { id: "3", itemName: "lined" },
            { id: "4", itemName: "solid" },
            { id: "5", itemName: "plain" }
        ];
        this.colors = [
            { id: "0", name: "pink", selected: false },
            { id: "1", name: "inverse", selected: false },
            { id: "2", name: "purple", selected: false },
            { id: "3", name: "green", selected: false },
            { id: "4", name: "warning", selected: false },
            { id: "5", name: "info", selected: false },
            { id: "6", name: "success", selected: false },
            { id: "7", name: "primary", selected: false },
            { id: "8", name: "danger", selected: false },
        ];
        this.brands = [
            { id: "0", itemName: "audi" },
            { id: "1", itemName: "honda" },
            { id: "2", itemName: "maruti" },
            { id: "3", itemName: "benz" },
            { id: "4", itemName: "merc" }
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
            { id: "0", itemName: "2017" },
            { id: "1", itemName: "2016" },
            { id: "2", itemName: "2015" },
            { id: "3", itemName: "2014" },
            { id: "4", itemName: "2013" },
            { id: "5", itemName: "2012" }
        ];
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
    ProductCatalogComponent.prototype.styleDeselected = function (event) {
    };
    ProductCatalogComponent.prototype.colorSelected = function (color, event) {
        //   event.preventDefault();
        //   if(event.target.classList.contains('currentColor')){
        //       console.log("hai");
        //       this.render.setElementClass(this.elementRef.nativeElement,"currentColor",false);
        //   }
        //   this.render.setElementClass(event.target,"currentColor",true);
        this.colors[color].selected = !this.colors[color].selected;
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
    ProductCatalogComponent.prototype.brandDeselected = function (event) {
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
    ProductCatalogComponent.prototype.modelDeselected = function (event) {
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
        template: __webpack_require__(1023),
        styles: [__webpack_require__(980)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_settings_settings_service__["a" /* SettingsService */]) === "function" && _b || Object])
], ProductCatalogComponent);

var _a, _b;
//# sourceMappingURL=product-catalog.component.js.map

/***/ }),

/***/ 925:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_validation__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_validation__);
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
    function HomeComponent(fb) {
        this.fb = fb;
        this.valForm = fb.group({
            'name': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(2)])],
            'email': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].email])],
            'address': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(10)])],
            'company': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(2)])],
            'phone': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(9)])],
            'pincode': [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(6), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(5)])],
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.showModal = function (value) {
        console.log(value);
        this.modal.show();
    };
    return HomeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('lgModal'),
    __metadata("design:type", Object)
], HomeComponent.prototype, "modal", void 0);
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(1027),
        styles: [__webpack_require__(984)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 926:
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

/***/ 927:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickOutsideDirective; });

var ClickOutsideDirective = (function () {
    function ClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ClickOutsideDirective.prototype.onClick = function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    };
    ClickOutsideDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[clickOutside]'
                },] },
    ];
    /** @nocollapse */
    ClickOutsideDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    ClickOutsideDirective.propDecorators = {
        'clickOutside': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['document:click', ['$event', '$event.target'],] },],
    };
    return ClickOutsideDirective;
}());

//# sourceMappingURL=clickOutside.js.map

/***/ }),

/***/ 928:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListFilterPipe; });

var ListFilterPipe = (function () {
    function ListFilterPipe() {
    }
    ListFilterPipe.prototype.transform = function (items, filter) {
        var _this = this;
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(function (item) { return _this.applyFilter(item, filter); });
    };
    /**
     * Perform the filtering.
     *
     * @param {Book} book The book to compare to the filter.
     * @param {Book} filter The filter to apply.
     * @return {boolean} True if book satisfies filters, false if not.
     */
    ListFilterPipe.prototype.applyFilter = function (item, filter) {
        return !(filter.itemName && item.itemName && item.itemName.toLowerCase().indexOf(filter.itemName.toLowerCase()) === -1);
    };
    ListFilterPipe.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"], args: [{
                    name: 'listFilter',
                    pure: false
                },] },
    ];
    /** @nocollapse */
    ListFilterPipe.ctorParameters = function () { return []; };
    return ListFilterPipe;
}());

//# sourceMappingURL=list-filter.js.map

/***/ }),

/***/ 929:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__multiselect_model__ = __webpack_require__(958);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clickOutside__ = __webpack_require__(927);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list_filter__ = __webpack_require__(928);
/* unused harmony export DROPDOWN_CONTROL_VALUE_ACCESSOR */
/* unused harmony export AngularMultiSelect */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularMultiSelectModule; });






var DROPDOWN_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return AngularMultiSelect; }),
    multi: true
};
var noop = function () {
};
var AngularMultiSelect = (function () {
    function AngularMultiSelect() {
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onDeSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onSelectAll = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onDeSelectAll = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isActive = false;
        this.isSelectAll = false;
        this.filter = new __WEBPACK_IMPORTED_MODULE_3__multiselect_model__["a" /* ListItem */]();
        this.defaultSettings = {
            singleSelection: false,
            text: 'Select',
            enableCheckAll: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: false,
            maxHeight: 300,
            badgeShowLimit: 999999999999,
            classes: '',
            disabled: false,
            searchPlaceholderText: 'Search'
        };
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    AngularMultiSelect.prototype.ngOnInit = function () {
        this.settings = Object.assign(this.defaultSettings, this.settings);
    };
    AngularMultiSelect.prototype.ngDoCheck = function () {
        if (this.selectedItems) {
            if (this.selectedItems.length == 0 || this.data.length == 0 || this.selectedItems.length < this.data.length) {
                this.isSelectAll = false;
            }
        }
    };
    AngularMultiSelect.prototype.onItemClick = function (item, index, evt) {
        if (this.settings.disabled) {
            return false;
        }
        var found = this.isSelected(item);
        var limit = this.selectedItems.length < this.settings.limitSelection ? true : false;
        if (!found) {
            if (this.settings.limitSelection) {
                if (limit) {
                    this.addSelected(item);
                    this.onSelect.emit(item);
                }
            }
            else {
                this.addSelected(item);
                this.onSelect.emit(item);
            }
        }
        else {
            this.removeSelected(item);
            this.onDeSelect.emit(item);
        }
        if (this.isSelectAll || this.data.length > this.selectedItems.length) {
            this.isSelectAll = false;
        }
        if (this.data.length == this.selectedItems.length) {
            this.isSelectAll = true;
        }
    };
    AngularMultiSelect.prototype.writeValue = function (value) {
        if (value !== undefined && value !== null) {
            if (this.settings.singleSelection) {
                try {
                    if (value.length > 1) {
                        this.selectedItems = [value[0]];
                        throw new __WEBPACK_IMPORTED_MODULE_3__multiselect_model__["b" /* MyException */](404, { "msg": "Single Selection Mode, Selected Items cannot have more than one item." });
                    }
                    else {
                        this.selectedItems = value;
                    }
                }
                catch (e) {
                    console.error(e.body.msg);
                }
            }
            else {
                if (this.settings.limitSelection) {
                    this.selectedItems = value.splice(0, this.settings.limitSelection);
                }
                else {
                    this.selectedItems = value;
                }
                if (this.selectedItems.length === this.data.length && this.data.length > 0) {
                    this.isSelectAll = true;
                }
            }
        }
        else {
            this.selectedItems = [];
        }
    };
    //From ControlValueAccessor interface
    AngularMultiSelect.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    //From ControlValueAccessor interface
    AngularMultiSelect.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    AngularMultiSelect.prototype.trackByFn = function (index, item) {
        return item.id;
    };
    AngularMultiSelect.prototype.isSelected = function (clickedItem) {
        var found = false;
        this.selectedItems && this.selectedItems.forEach(function (item) {
            if (clickedItem.id === item.id) {
                found = true;
            }
        });
        return found;
    };
    AngularMultiSelect.prototype.addSelected = function (item) {
        if (this.settings.singleSelection) {
            this.selectedItems = [];
            this.selectedItems.push(item);
        }
        else
            this.selectedItems.push(item);
        this.onChangeCallback(this.selectedItems);
    };
    AngularMultiSelect.prototype.removeSelected = function (clickedItem) {
        var _this = this;
        this.selectedItems && this.selectedItems.forEach(function (item) {
            if (clickedItem.id === item.id) {
                _this.selectedItems.splice(_this.selectedItems.indexOf(item), 1);
            }
        });
        this.onChangeCallback(this.selectedItems);
    };
    AngularMultiSelect.prototype.toggleDropdown = function (evt) {
        if (this.settings.disabled) {
            return false;
        }
        this.isActive = !this.isActive;
        evt.preventDefault();
    };
    AngularMultiSelect.prototype.closeDropdown = function () {
        this.isActive = false;
    };
    AngularMultiSelect.prototype.toggleSelectAll = function () {
        if (!this.isSelectAll) {
            this.selectedItems = [];
            this.selectedItems = this.data.slice();
            this.isSelectAll = true;
            this.onChangeCallback(this.selectedItems);
            this.onSelectAll.emit(this.selectedItems);
        }
        else {
            this.selectedItems = [];
            this.isSelectAll = false;
            this.onChangeCallback(this.selectedItems);
            this.onDeSelectAll.emit(this.selectedItems);
        }
    };
    AngularMultiSelect.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'angular2-multiselect',
                    template: "\n      <div class=\"cuppa-dropdown\" (clickOutside)=\"closeDropdown()\">\n          <div class=\"selected-list\">\n              <div class=\"c-btn\" (click)=\"toggleDropdown($event)\" [ngClass]=\"{'disabled': settings.disabled}\">\n                  <span *ngIf=\"selectedItems?.length == 0\">{{settings.text}}</span>\n                  <span *ngIf=\"settings.singleSelection\">\n                      <span *ngFor=\"let item of selectedItems;trackBy: trackByFn;\">\n                          {{item.itemName}}\n                      </span>\n                  </span>\n                  <div class=\"c-list\" *ngIf=\"selectedItems?.length > 0 && !settings.singleSelection\">\n                      <div class=\"c-token\" *ngFor=\"let item of selectedItems;trackBy: trackByFn;let k = index\" [hidden]=\"k > settings.badgeShowLimit-1\">\n                          <span class=\"c-label\">{{item.itemName}}</span>\n                          <span class=\"fa fa-remove\" (click)=\"onItemClick(item,k,$event)\" disabled=\"true\"></span>\n                      </div>\n                  </div> \n                  <span *ngIf=\"selectedItems?.length > settings.badgeShowLimit\">+{{selectedItems?.length - settings.badgeShowLimit }}</span>\n                  <span class=\"fa\" [ngClass]=\"{'fa-angle-down': !isActive,'fa-angle-up':isActive}\"></span>\n              </div>      \n          </div>\n          <div class=\"dropdown-list\" [hidden]=\"!isActive\">\n          <div class=\"arrow-up\"></div>\n          <div class=\"list-area\">\n              <div class=\"pure-checkbox select-all\" *ngIf=\"settings.enableCheckAll && !settings.singleSelection && !settings.limitSelection\" (click)=\"toggleSelectAll()\">\n                  <input type=\"checkbox\" [checked]=\"isSelectAll\" [disabled]=\"settings.limitSelection == selectedItems?.length\"/>\n                  <label>\n                      <span [hidden]=\"isSelectAll\">{{settings.selectAllText}}</span>\n                      <span [hidden]=\"!isSelectAll\">{{settings.unSelectAllText}}</span>\n                  </label>\n              </div>   \n              <div class=\"list-filter\" *ngIf=\"settings.enableSearchFilter\">\n                  <span class=\"fa fa-search\"></span>\n                  <input type=\"text\" [placeholder]=\"settings.searchPlaceholderText\" [(ngModel)]=\"filter.itemName\">\n              </div> \n          <ul [style.maxHeight] = \"settings.maxHeight+'px'\">\n              <li *ngFor=\"let item of data | listFilter:filter; let i = index;\" (click)=\"onItemClick(item,i,$event)\" class=\"pure-checkbox\">\n                  <input type=\"checkbox\" [checked]=\"isSelected(item)\" [disabled]=\"settings.limitSelection == selectedItems?.length && !isSelected(item)\"/>\n                  <label>{{item.itemName}}</label>\n              </li>\n          </ul>\n          <h5 class=\"list-message\" *ngIf=\"data?.length == 0\">No Data Available</h5>\n          </div>\n          </div>\n      </div>\n    ",
                    host: { '[class]': 'defaultSettings.classes' },
                    styles: ["\n      .cuppa-dropdown{position:relative}.c-btn{display:inline-block;background:#fff;border:1px solid #ccc;border-radius:3px;font-size:14px;color:#333}.c-btn.disabled{background:#ccc}.c-btn:focus{outline:none}.selected-list .c-list{float:left;padding:0px;margin:0px}.selected-list .c-list .c-token{list-style:none;padding:0px 5px;background:#0079FE;color:#fff;border-radius:2px;margin-right:4px;float:left}.selected-list .c-list .c-token .c-label{display:block;float:left}.selected-list .c-list .c-token .fa-remove{margin-left:1px;font-size:12px;z-index:100000000}.selected-list .fa-angle-down,.selected-list .fa-angle-up{font-size:15pt;position:absolute;right:10px;top:25%}.selected-list .c-btn{width:100%;box-shadow:0px 1px 5px #959595;padding:10px;cursor:pointer}.dropdown-list{position:absolute;padding-top:14px;width:100%;z-index:9999}.dropdown-list ul{padding:0px;list-style:none;overflow:auto;margin:0px}.dropdown-list ul li{padding:10px 10px;cursor:pointer;text-align:left}.dropdown-list ul li:first-child{padding-top:10px}.dropdown-list ul li:last-child{padding-bottom:10px}.dropdown-list ul li:hover{background:#f5f5f5}.dropdown-list ul::-webkit-scrollbar{width:8px}.dropdown-list ul::-webkit-scrollbar-thumb{background:#cccccc;border-radius:5px}.dropdown-list ul::-webkit-scrollbar-track{background:#f2f2f2}.arrow-up{width:0;height:0;border-left:13px solid transparent;border-right:13px solid transparent;border-bottom:15px solid #fff;margin-left:15px;position:absolute;top:0}.list-area{border:1px solid #ccc;border-radius:3px;background:#fff;margin:0px;box-shadow:0px 1px 5px #959595}.select-all{padding:10px;border-bottom:1px solid #ccc;text-align:left}.list-filter{border-bottom:1px solid #ccc;position:relative}.list-filter input{border:0px;width:100%;height:35px;padding:0px 0px 0px 35px}.list-filter input:focus{outline:none}.list-filter .fa{position:absolute;top:10px;left:13px;color:#888}.pure-checkbox input[type=\"checkbox\"]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.pure-checkbox input[type=\"checkbox\"]:focus+label:before,.pure-checkbox input[type=\"checkbox\"]:hover+label:before{border-color:#0079FE;background-color:#f2f2f2}.pure-checkbox input[type=\"checkbox\"]:active+label:before{transition-duration:0s}.pure-checkbox input[type=\"checkbox\"]+label{position:relative;padding-left:2em;vertical-align:middle;user-select:none;cursor:pointer;margin:0px;color:#000}.pure-checkbox input[type=\"checkbox\"]+label:before{box-sizing:content-box;content:'';color:#0079FE;position:absolute;top:50%;left:0;width:14px;height:14px;margin-top:-9px;border:2px solid #0079FE;text-align:center;transition:all 0.4s ease}.pure-checkbox input[type=\"checkbox\"]+label:after{box-sizing:content-box;content:'';background-color:#0079FE;position:absolute;top:50%;left:4px;width:10px;height:10px;margin-top:-5px;transform:scale(0);transform-origin:50%;transition:transform 200ms ease-out}.pure-checkbox input[type=\"checkbox\"]:disabled+label:before{border-color:#cccccc}.pure-checkbox input[type=\"checkbox\"]:disabled:focus+label:before .pure-checkbox input[type=\"checkbox\"]:disabled:hover+label:before{background-color:inherit}.pure-checkbox input[type=\"checkbox\"]:disabled:checked+label:before{background-color:#cccccc}.pure-checkbox input[type=\"checkbox\"]+label:after{background-color:transparent;top:50%;left:4px;width:8px;height:3px;margin-top:-4px;border-style:solid;border-color:#ffffff;border-width:0 0 3px 3px;border-image:none;transform:rotate(-45deg) scale(0)}.pure-checkbox input[type=\"checkbox\"]:checked+label:after{content:'';transform:rotate(-45deg) scale(1);transition:transform 200ms ease-out}.pure-checkbox input[type=\"radio\"]:checked+label:before{animation:borderscale 300ms ease-in;background-color:white}.pure-checkbox input[type=\"radio\"]:checked+label:after{transform:scale(1)}.pure-checkbox input[type=\"radio\"]+label:before{border-radius:50%}.pure-checkbox input[type=\"checkbox\"]:checked+label:before{animation:borderscale 200ms ease-in;background:#0079FE}.pure-checkbox input[type=\"checkbox\"]:checked+label:after{transform:rotate(-45deg) scale(1)}@keyframes borderscale{50%{box-shadow:0 0 0 2px #0079FE}}.list-message{text-align:center}\n    "],
                    providers: [DROPDOWN_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    AngularMultiSelect.ctorParameters = function () { return []; };
    AngularMultiSelect.propDecorators = {
        'data': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'settings': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onSelect': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['onSelect',] },],
        'onDeSelect': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['onDeSelect',] },],
        'onSelectAll': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['onSelectAll',] },],
        'onDeSelectAll': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['onDeSelectAll',] },],
    };
    return AngularMultiSelect;
}());

var AngularMultiSelectModule = (function () {
    function AngularMultiSelectModule() {
    }
    AngularMultiSelectModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"]],
                    declarations: [AngularMultiSelect, __WEBPACK_IMPORTED_MODULE_4__clickOutside__["a" /* ClickOutsideDirective */], __WEBPACK_IMPORTED_MODULE_5__list_filter__["a" /* ListFilterPipe */]],
                    exports: [AngularMultiSelect, __WEBPACK_IMPORTED_MODULE_4__clickOutside__["a" /* ClickOutsideDirective */], __WEBPACK_IMPORTED_MODULE_5__list_filter__["a" /* ListFilterPipe */]]
                },] },
    ];
    /** @nocollapse */
    AngularMultiSelectModule.ctorParameters = function () { return []; };
    return AngularMultiSelectModule;
}());

//# sourceMappingURL=multiselect.component.js.map

/***/ }),

/***/ 947:
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
        template: __webpack_require__(1016),
        styles: [__webpack_require__(973)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 948:
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
        template: __webpack_require__(1019),
        styles: [__webpack_require__(976)]
    }),
    __metadata("design:paramtypes", [])
], CarousalComponent);

//# sourceMappingURL=carousal.component.js.map

/***/ }),

/***/ 949:
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
        template: __webpack_require__(1020),
        styles: [__webpack_require__(977)]
    }),
    __metadata("design:paramtypes", [])
], CategoriesComponent);

//# sourceMappingURL=categories.component.js.map

/***/ }),

/***/ 950:
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
        template: __webpack_require__(1022),
        styles: [__webpack_require__(979)]
    }),
    __metadata("design:paramtypes", [])
], ProductsComponent);

//# sourceMappingURL=products.component.js.map

/***/ }),

/***/ 951:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settings_settings_service__ = __webpack_require__(901);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_menu_menu_service__ = __webpack_require__(926);
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
        template: __webpack_require__(1024),
        styles: [__webpack_require__(981)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_menu_menu_service__["a" /* MenuService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_menu_menu_service__["a" /* MenuService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_settings_settings_service__["a" /* SettingsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _c || Object])
], SideNavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=side-navbar.component.js.map

/***/ }),

/***/ 952:
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
        template: __webpack_require__(1025),
        styles: [__webpack_require__(982)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], NavsearchComponent);

var _a;
//# sourceMappingURL=navsearch.component.js.map

/***/ }),

/***/ 953:
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

var screenfull = __webpack_require__(452);
var browser = __webpack_require__(451);



var TopNavbarComponent = (function () {
    function TopNavbarComponent(settings, themes, topNavbarService) {
        // show only a few items on demo
        // this.menuItems = menu.getMenu().slice(0,4); // for horizontal layout
        this.settings = settings;
        this.themes = themes;
        this.topNavbarService = topNavbarService;
        this.openModal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.navCollapsed = true; // for horizontal layout
        this.menuItems = []; // for horizontal layout
    }
    TopNavbarComponent.prototype.ngOnInit = function () {
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
        // this.topNavbarService.url  = 'http://localhost:4200/src/app/shared/data.json';
        // this.topNavbarService.getData().subscribe(res => {
        //     console.log(res);
        //     this.logo = res[0].logo.src;
        //     this.themes.setTheme(res[0].default);
        // });
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
    TopNavbarComponent.prototype.editProfile = function () {
        this.openModal.next();
    };
    return TopNavbarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TopNavbarComponent.prototype, "openModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fsbutton'),
    __metadata("design:type", Object)
], TopNavbarComponent.prototype, "fsbutton", void 0);
TopNavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-top-navbar',
        template: __webpack_require__(1026),
        styles: [__webpack_require__(983)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_settings_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_settings_settings_service__["a" /* SettingsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__core_themes_themes_service__["a" /* ThemesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__core_themes_themes_service__["a" /* ThemesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _c || Object])
], TopNavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=top-navbar.component.js.map

/***/ }),

/***/ 954:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__(925);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_portal_home_portal_home_component__ = __webpack_require__(923);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_product_catalog_product_catalog_component__ = __webpack_require__(924);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_characteristics_characteristics_component__ = __webpack_require__(920);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_orders_orders_component__ = __webpack_require__(922);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_order_view_order_view_component__ = __webpack_require__(921);
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
            { path: 'vieworder', component: __WEBPACK_IMPORTED_MODULE_7__components_order_view_order_view_component__["a" /* OrderViewComponent */] },
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

/***/ 955:
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

/***/ 956:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchFilterPipe = (function () {
    function SearchFilterPipe() {
    }
    SearchFilterPipe.prototype.transform = function (items, field, value) {
        if (!items)
            return [];
        if (!value)
            return items;
        //items.filter(it => console.log(it[field]))
        return items.filter(function (it) { return it[field] == value; });
    };
    return SearchFilterPipe;
}());
SearchFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'searchfilter'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], SearchFilterPipe);

//# sourceMappingURL=datafilter.js.map

/***/ }),

/***/ 957:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular2_multiselect_dropdown_multiselect_component__ = __webpack_require__(929);
/* unused harmony reexport AngularMultiSelect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular2_multiselect_dropdown_clickOutside__ = __webpack_require__(927);
/* unused harmony reexport ClickOutsideDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular2_multiselect_dropdown_list_filter__ = __webpack_require__(928);
/* unused harmony reexport ListFilterPipe */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__angular2_multiselect_dropdown_multiselect_component__["a"]; });




//# sourceMappingURL=angular2-multiselect-dropdown.js.map

/***/ }),

/***/ 958:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MyException; });
var ListItem = (function () {
    function ListItem() {
    }
    return ListItem;
}());

var MyException = (function () {
    function MyException(status, body) {
        this.status = status;
        this.body = body;
    }
    return MyException;
}());

//# sourceMappingURL=multiselect.model.js.map

/***/ }),

/***/ 972:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".contentWrapperTopMargin {\n  margin-top: 0px; }\n\n#char {\n  width: 25% !important; }\n\n@media only screen and (max-width: 767px) {\n  .contentWrapperTopMargin {\n    margin-top: 128px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 973:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 974:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".contentWrapperTopMargin {\n  margin-top: 55px; }\n\n@media only screen and (max-width: 767px) {\n  .contentWrapperTopMargin {\n    margin-top: 128px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 975:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".contentWrapperTopMargin {\n  margin-top: 55px; }\n\n@media only screen and (max-width: 767px) {\n  .contentWrapperTopMargin {\n    margin-top: 128px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 976:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".carousel-images {\n  width: 100%;\n  height: 500px;\n  margin-top: 4%; }\n\n.carousel-caption {\n  padding-bottom: 20% !important; }\n\n.btn-primary-outline {\n  background-color: transparent;\n  border-color: #ccc;\n  color: #ccc; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 977:
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
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".carousel-images {\n  width: 100%;\n  height: 400px; }\n\n.carousel-main {\n  padding: 0px; }\n\n.thumbnail {\n  position: relative; }\n\n.caption {\n  position: absolute;\n  top: 45%;\n  left: 0;\n  width: 100%;\n  color: white; }\n\n.btn-primary-outline {\n  background-color: transparent;\n  border-color: #ccc; }\n\ndiv .horizontal {\n  height: 272px; }\n\n.img-responsive {\n  width: 100%; }\n\nimg.horizontal {\n  height: 272px !important; }\n\nimg.img-responsive.vertical {\n  height: 200px !important; }\n\na#product-details {\n  color: white; }\n\nspan.details {\n  margin-left: 2%; }\n\n.half-float {\n  margin-bottom: 0px !important; }\n\n@media only screen and (min-width: 1185px) {\n  .catageoryTopMargin {\n    margin-top: -230px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 979:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".thumbnail {\n  position: relative; }\n\n.caption {\n  position: absolute;\n  top: 50%;\n  left: 15%;\n  width: 90%;\n  color: white; }\n\n.products-main {\n  margin-top: 2%; }\n\nh2 {\n  color: #656565; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 980:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "/* ========================================================================\n     Component: media-queries\n ========================================================================== */\n.home-container {\n  margin: 0 auto;\n  max-width: 970px; }\n  .home-container .home-logo {\n    width: 240px; }\n  @media only screen and (max-width: 768px) {\n    .home-container .home-text {\n      text-align: center; } }\n\n.form-group .col-sm-12 span {\n  font-weight: bold; }\n\n.currentColor {\n  border: 3px solid rgba(255, 255, 255, 0.5); }\n\n@media only screen and (max-width: 767px) {\n  .margin-sm-colors {\n    margin-top: 12px !important; }\n  .selected-list[_ngcontent-c5] .fa-angle-up[_ngcontent-c5] {\n    top: 50% !important; }\n  .margin-sm-colors {\n    margin-top: 12px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 981:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 982:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 983:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".btn-primary-outline {\n  background-color: transparent;\n  border-color: #ccc;\n  color: #ccc; }\n\n.brand {\n  font-size: 30px;\n  font-weight: 900;\n  color: white;\n  font-family: inherit;\n  padding-top: 7% !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 984:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ })

});
//# sourceMappingURL=1.chunk.js.map