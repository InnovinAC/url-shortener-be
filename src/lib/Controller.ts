import e from "express";
import Kernel from "../Http/Middleware/kernel";

class Controller {
    protected basePath: string;
    protected router: e.IRouter;
    protected app: e.Express;
    protected methods: string[] =  Object.getOwnPropertyNames(this)
    constructor(app: e.Express) {
        this.app = app;
        this.router = e.Router();
    }


    setGlobalMiddleware(middleware: string) {
        this.app.use(this.basePath, (...args) => {
            Kernel.getInstance().invokeMiddleware(middleware, ...args);
        }, this.router)
    }
}

export default Controller;