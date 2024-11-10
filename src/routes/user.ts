import Route from "../lib/Http/Route";
import MainController from "../Http/Controllers/MainController";

export default function () {
   Route.group(() => {
       Route.get('/hey', MainController, 'getHome');
   }, ['print'])
}