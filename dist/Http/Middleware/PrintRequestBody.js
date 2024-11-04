"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PrintRequestBody {
    handle(request, response, next) {
        console.log(request.body);
        next();
    }
}
exports.default = PrintRequestBody;
