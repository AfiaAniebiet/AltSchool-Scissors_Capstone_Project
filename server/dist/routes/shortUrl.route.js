"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import {Express, Request, Response} from 'express'
const express_1 = require("express");
const router = (0, express_1.Router)();
const shortUrl_controller_1 = __importDefault(require("../controllers/shortUrl.controller"));
router.get('/api/url', shortUrl_controller_1.default.getIndexPage);
router.post('/api/url', shortUrl_controller_1.default.makeShortUrl);
exports.default = router;
//# sourceMappingURL=shortUrl.route.js.map