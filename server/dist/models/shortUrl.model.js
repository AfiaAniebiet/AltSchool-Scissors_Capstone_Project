"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const shortid_1 = __importDefault(require("shortid"));
const shortIdSchema = new mongoose_1.default.Schema({
    shortId: {
        type: String,
        unique: true,
        required: true,
        default: () => shortid_1.default,
    },
    longUrl: {
        type: String,
        required: true,
    },
});
const shortUrl = mongoose_1.default.model('shortUrl', shortIdSchema);
exports.default = shortUrl;
//# sourceMappingURL=shortUrl.model.js.map