"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importing express package
const express_1 = __importDefault(require("express"));
require("express-async-errors");
// creating app from express function
const app = (0, express_1.default)();
// importing custom modules
const shortUrl_route_1 = __importDefault(require("./routes/shortUrl.route"));
// middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(shortUrl_route_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map