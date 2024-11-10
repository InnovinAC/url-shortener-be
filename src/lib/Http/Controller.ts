import e from "express";
import Kernel from "../../Http/Middleware/kernel";

class Controller {
    protected basePath: string;
    protected router: any;
    private static instance:  Controller;
    protected app: any | e.Express;
    protected methods: string[] =  Object.getOwnPropertyNames(this)
    constructor(app: e.Express) {
        this.app = app;
        this.router = e.Router();

    }
    public methodExists(method: string) {
        return (this.methods.indexOf(method) > -1)
    }
    protected invokeRoute() {
        this.app.use(this.basePath, this.router);
    }

    protected static getInstance(app: e.Express):  Controller {
        if (!this.instance) {
            this.instance = new this(app);
        }
        return this.instance
    }
}

export default Controller;