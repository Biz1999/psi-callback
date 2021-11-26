"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var SendStockUpdateController_1 = require("./controllers/SendStockUpdateController");
var router = (0, express_1.Router)();
exports.router = router;
var sendStockUpdateController = new SendStockUpdateController_1.SendStockUpdateController();
router.post("/stock_updates", sendStockUpdateController.handle);
router.get("/ping", function (req, res) {
    res.send("pong?");
});
