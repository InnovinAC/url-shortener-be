"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const kernel_1 = __importDefault(require("../Http/Middleware/kernel"));
class Controller {
    constructor(app) {
        this.methods = Object.getOwnPropertyNames(this);
        this.app = app;
        this.router = express_1.default.Router();
    }
    setGlobalMiddleware(middleware) {
        this.app.use(this.basePath, (...args) => {
            kernel_1.default.getInstance().invokeMiddleware(middleware, ...args);
        }, this.router);
    }
}
exports.default = Controller;
