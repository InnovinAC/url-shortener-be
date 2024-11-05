import e from "express";
import Kernel from "../Http/Middleware/kernel";

class Controller {
    protected basePath: string;
    protected router: any;
    protected app: any | e.Express;
    protected methods: string[] =  Object.getOwnPropertyNames(this)
    constructor(app: e.Express) {
        this.app = app;
        this.router = e.Router();

    }
    protected methodExists(method: string) {
        return (this.methods.indexOf(method) > -1)
    }
    protected invokeRoute() {
        this.app.use(this.basePath, this.router);
    }



    setGlobalMiddleware(middleware: string) {
        this.app.use(this.basePath, (...args) => {
            Kernel.getInstance().invokeMiddleware(middleware, ...args);
        }, this.router)
    }
}

export default Controller;