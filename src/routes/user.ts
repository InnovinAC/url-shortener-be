import Route from "../lib/Http/Route";
import MainController from "../Http/Controllers/MainController";
import {MIDDLEWARE_CONSTANTS} from "../config/Constants";

export default function () {
   Route.group(() => {
       Route.get('/hey', MainController, 'getHome');
       Route.get('/hey', MainController, 'getSomething');
       Route.get('/heys', MainController, 'getSomething');
   }, [MIDDLEWARE_CONSTANTS.PRINT])
}