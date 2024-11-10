import Middleware from "../../lib/Http/Middleware";
import e from "express";

class PrintRequestBody implements Middleware {
    handle(request: e.Request, response: e.Response, next: e.NextFunction) {
        console.log(response.headersSent)
        console.log(request.body);
        // next()
    }

}
export default PrintRequestBody;