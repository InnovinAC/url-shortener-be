"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = __importDefault(require("../../lib/Controller"));
const url_1 = __importDefault(require("../../Domain/Url/schema/url"));
class MainController extends Controller_1.default {
    constructor(app) {
        super(app);
        this.methods = Object.getOwnPropertyNames(MainController.prototype);
        this.basePath = '/';
        this.setGlobalMiddleware('print');
        this.getHome();
        this.getSomething();
        console.log(this.methods);
    }
    getHome() {
        this.router.post(this.basePath, function (req, res, next) {
            return __awaiter(this, void 0, void 0, function* () {
                const url = new url_1.default({
                    originalUrl: "https://google.com",
                    shortCode: "6Ghg89n",
                });
                try {
                    yield url.save();
                    return res.send("Jjkjkd");
                }
                catch (e) {
                    res.send(e);
                }
            });
        });
    }
    getSomething() {
        this.router.post(this.basePath + 'innovin', function (req, res, next) {
            return __awaiter(this, void 0, void 0, function* () {
                const url = new url_1.default({
                    originalUrl: "https://google.com",
                    shortCode: "6Ghg89n",
                });
                try {
                    yield url.save();
                    return res.send("Jjkjkd");
                }
                catch (e) {
                    res.send(e);
                }
            });
        });
    }
}
exports.default = MainController;
