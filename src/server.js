"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var routes_1 = require("./routes");
var cors = require("cors");
var express_xml_bodyparser_1 = __importDefault(require("express-xml-bodyparser"));
var app = (0, express_1.default)();
app.use(cors());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, express_xml_bodyparser_1.default)());
app.use(routes_1.router);
app.use(function (err, request, response, next) {
    if (err instanceof Error) {
        return response.status(400).json({
            error: err.message,
        });
    }
    return response.status(500).json({
        status: "error",
        message: "Internal Server Error",
    });
});
app.listen(8888, function () { return console.log("Server rodando..."); });
