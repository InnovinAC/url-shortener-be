import Controller from "./Controller";
import MainController from "../Http/Controllers/MainController";
import e from "express";

class Route {
    // TODO: find suitable alternative to type any
    static allRoutes: [any, string][] = [[MainController, 'getHome']];

    getInstance() {}
    static group() {}
    static middleware() {}
    static post() {};
    static get() {};
    static patch() {};
    static delete() {};
    static options() {};




    static invokeRoutes(app?: e.Express) {
        let classMap = new Map();
        this.allRoutes.map((item) => {
            let foundClass = classMap.get(item[0].name);
            if (!foundClass) {
                classMap.set(item[0].name, new item[0](app));
                foundClass = classMap.get(item[0].name);
            }
            const theMethod = item[1];
            if (foundClass.methodExists(theMethod)) {
                foundClass[theMethod]();
            }
        })
        for (const [_, value] of classMap) {
            value.invokeRoute();
        }
    }



}

export default Route;