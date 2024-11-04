"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: make middleware like laravel, with kernel, where middleware are registered, and this can be passed as a string
const express_1 = __importDefault(require("express"));
const Database_1 = __importDefault(require("./config/Database"));
const MainController_1 = __importDefault(require("./Http/Controllers/MainController"));
const dbBuilder = new Database_1.default();
dbBuilder
    .config({ dbName: "url-shortener" })
    .build();
try {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    new MainController_1.default(app);
    app.listen(1000, () => {
        console.log("listening");
    });
    // .
}
catch (e) {
    console.error(e);
}
