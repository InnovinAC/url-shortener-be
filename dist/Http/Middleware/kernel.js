"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PrintRequestBody_1 = __importDefault(require("./PrintRequestBody"));
class Kernel {
    constructor() {
        this.middleware = {
            print: new PrintRequestBody_1.default()
        };
    }
    static getInstance() {
        return this.instance ? this.instance : new Kernel();
    }
    // constructor();
    invokeMiddleware(middleware, ...args) {
        // Todo: Check if valid middleware
        // @ts-ignore
        return this.middleware[middleware].handle(...args);
    }
}
exports.default = Kernel;
