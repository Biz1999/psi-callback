"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var token = process.env.ACCESS_TOKEN;
var api = axios_1.default.create({
    baseURL: "https://psi-app.tec.br/apiv1/api/v1",
    headers: { Authorization: "Bearer " + token },
});
exports.default = api;
