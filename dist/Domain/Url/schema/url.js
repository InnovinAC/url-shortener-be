"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DatabaseObjects_1 = require("../../../config/DatabaseObjects");
const urlSchema = new mongoose_1.Schema({
    originalUrl: { type: String, required: true },
    shortCode: { type: String, required: true, unique: true },
}, DatabaseObjects_1.mongooseExtensions);
const UrlModel = (0, mongoose_1.model)('Url', urlSchema);
exports.default = UrlModel;
