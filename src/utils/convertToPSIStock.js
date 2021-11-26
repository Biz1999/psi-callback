"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToPsiStock = void 0;
var storeSlugConvert_1 = require("./storeSlugConvert");
function convertToPsiStock(product) {
    var stocks = [];
    product.depositos.forEach(function (deposito) {
        if (deposito.deposito.id !== "7546975469" &&
            deposito.deposito.id !== "7693996839" &&
            deposito.deposito.id !== "14886475479" &&
            deposito.deposito.id !== "14886480656") {
            stocks.push({
                quantity: Number(deposito.deposito.saldo),
                type: "in",
                product_sku: product.codigo,
                store_slug: (0, storeSlugConvert_1.storeSlugConvert)(deposito.deposito.id),
            });
        }
    });
    return stocks;
}
exports.convertToPsiStock = convertToPsiStock;
