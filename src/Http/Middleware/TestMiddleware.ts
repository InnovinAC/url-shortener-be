import Middleware from "@/lib/Http/Middleware";
import e from "express";

class TestMiddleware implements Middleware {
    handle(request: e.Request, response: e.Response, next: e.NextFunction) {
        // Define middleware implementation within here
        next();
    }

}
export default TestMiddleware;