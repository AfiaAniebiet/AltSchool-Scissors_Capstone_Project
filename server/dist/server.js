"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importing http module
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./app"));
const default_1 = __importDefault(require("./config/default"));
// import { config } from 'dotenv';
const database_1 = __importDefault(require("./db/database"));
const PORT = default_1.default.PORT;
const server = http_1.default.createServer(app_1.default);
server.listen(PORT, () => {
    (0, database_1.default)();
    console.log(`server running on http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map