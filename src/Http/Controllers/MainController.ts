import Controller from "../../lib/Controller";
import e from "express";
import UrlModel from "../../Domain/Url/schema/url";

class MainController extends Controller {
    protected methods: string[] =  Object.getOwnPropertyNames(MainController.prototype)
    constructor(app: e.Express) {
        super(app);
        this.basePath = '/';
        this.setGlobalMiddleware('print');
        this.getHome();
        this.getSomething();
        console.log(this.methods);
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