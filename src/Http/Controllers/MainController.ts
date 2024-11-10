import Controller from "@/lib/Http/Controller";
import e from "express";
import ResponseHandler from "@/lib/response/ResponseHandler";

class MainController extends Controller {
    // This must be defined to make it pertain to this class and not root Controller
    protected methods: string[] =  Object.getOwnPropertyNames(MainController.prototype)
    constructor(app: e.Express) {
        super(app);
    }






    async getHome(req: e.Request, res: e.Response, next: e.NextFunction) {

    }


    getSomething(req: e.Request, res: e.Response, next: e.NextFunction) {
        console.log(res.locals.hehhe)
        res.send("Okay")
    }
}

export default MainController;