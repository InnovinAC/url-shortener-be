import Controller from "../../lib/Http/Controller";
import e from "express";
import UrlModel from "../../Domain/Url/schema/url";
import {MIDDLEWARE_CONSTANTS} from "../../config/Constants";
import HandlerResponse from "@/lib/reponse/HandlerResponse";

class MainController extends Controller {
    protected methods: string[] =  Object.getOwnPropertyNames(MainController.prototype)
    constructor(app: e.Express) {
        super(app);
        this.basePath = '/';
        // console.log(this.methodExists('getHome'));
    }






    async getHome(req: e.Request, res: e.Response, next: e.NextFunction) {

    }


    getSomething(req: e.Request, res: e.Response, next: e.NextFunction) {
        res.send("Okay")
    }
}

export default MainController;