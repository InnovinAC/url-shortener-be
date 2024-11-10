import Middleware from "../../lib/Http/Middleware";
import PrintRequestBody from "./PrintRequestBody";
import Exception from "../../lib/error/Exception";
import e from "express";

class Kernel {
    static instance: Kernel;
    private middleware: Record<string, Middleware> =
        {
            print: new PrintRequestBody()
        }

    static getInstance() {
        return this.instance ? this.instance: new Kernel();
    }

    invokeMiddleware(middleware: string, ...args: [e.Request, e.Response, e.NextFunction]) {
        if (!this.middleware[middleware]) {
            // args[2] is next function
            return Exception.http(500, 'Middleware not registered -> ' + middleware);
        }
        // @ts-ignore
        return (this.middleware[middleware] as Middleware).handle(...args)
    }
}

export default Kernel;