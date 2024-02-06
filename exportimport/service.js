"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreService = void 0;
var StoreService = /** @class */ (function () {
    function StoreService() {
    }
    StoreService.prototype.getAllProducts = function () {
        console.log("get all products");
    };
    StoreService.prototype.fetchProductDetails = function () {
        console.log("product details");
    };
    return StoreService;
}());
exports.StoreService = StoreService;
