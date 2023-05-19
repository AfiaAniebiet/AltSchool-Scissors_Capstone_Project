"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importing http module
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("config"));
// const PORT = process.env.PORT || 8000;
const PORT = config_1.default.get('PORT');
const server = http_1.default.createServer(app_1.default);
server.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});
