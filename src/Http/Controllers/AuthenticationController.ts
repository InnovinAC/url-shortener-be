import Controller from "@/lib/Http/Controller";
import e from "express";
import ResponseHandler from "@/lib/response/ResponseHandler";

class AuthenticationController extends Controller {
    // This must be defined to make it pertain to this class and not root Controller
    protected methods: string[] =  Object.getOwnPropertyNames(AuthenticationController.prototype)
    constructor(app: e.Express) {
        super(app);
    }

    async login(request: e.Request, response: e.Response, next: e.NextFunction) {

    }

    async register(req: e.Request, res: e.Response, next: e.NextFunction) {

    }
}

export default AuthenticationController;