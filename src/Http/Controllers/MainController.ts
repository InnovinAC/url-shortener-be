import Controller from "../../lib/Http/Controller";
import e from "express";
import UrlModel from "../../Domain/Url/schema/url";
import {MIDDLEWARE_CONSTANTS} from "../../config/Constants";

class MainController extends Controller {
    protected methods: string[] =  Object.getOwnPropertyNames(MainController.prototype)
    constructor(app: e.Express) {
        super(app);
        this.basePath = '/';
        // console.log(this.methodExists('getHome'));
    }






    async getHome(req: e.Request, res: e.Response, next: e.NextFunction) {
        console.log("innnn")
            const url = new UrlModel({
                originalUrl: "https://google.com",
                shortCode: "6Ghg89n",

            })
                throw new Error("Something unexpected happened");
                await url.save();
                return res.send("Hello world");
    }


    getSomething() {
        this.router.post(this.basePath + 'innovin', async function (req, res, next) {
            const url = new UrlModel({
                originalUrl: "https://google.com",
                shortCode: "6Ghg89n",

            })
            try {
                await url.save();
                return res.send("Hello world");
            } catch (e) {
                res.send(e)
            }
        })
    }
}

export default MainController;