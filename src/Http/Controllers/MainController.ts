// @ts-nocheck
import Controller from "../../lib/Controller";
import e from "express";
import UrlModel from "../../Domain/Url/schema/url";
import {MIDDLEWARE_CONSTANTS} from "../../config/Constants";

class MainController extends Controller {
    protected methods: string[] =  Object.getOwnPropertyNames(MainController.prototype)
    constructor(app: e.Express) {
        super(app);
        this.basePath = '/';
        // this.setGlobalMiddleware(MIDDLEWARE_CONSTANTS.PRINT);
        // this.getHome();
        console.log("hmmmmmmm");
        // this.getSomething();
        // console.log(this.methodExists('getHome'));
    }






    getHome() {


        this.router.post(this.basePath, async function (req, res, next) {
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