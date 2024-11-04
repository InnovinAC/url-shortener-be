import Middleware from "../../lib/Middleware";
import e from "express";

class PrintRequestBody implements Middleware {
    handle(request: e.Request, response: e.Response, next: e.NextFunction) {
        console.log(request.body);
        next();
    }

}
export default PrintRequestBody;