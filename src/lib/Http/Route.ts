import e from "express";
import Controller from "./Controller";
import Kernel from "../../Http/Middleware/kernel";

// Updated RouteDefinition to include middleware array
type RouteDefinition = [typeof Controller, string, string, string, string[]]; // [Controller Class, HTTP Method, URL Path, Controller Method, Middleware Array]

class Route {
    static allRoutes: RouteDefinition[] = [];
    private static groupMiddlewareStack: string[] = [];

    static get(path: string, controllerClass: typeof Controller, method: string) {
        this.addRoute(controllerClass, 'get', path, method);
    }

    static post(path: string, controllerClass: typeof Controller, method: string) {
        this.addRoute(controllerClass, 'post', path, method);
    }

    static put(path: string, controllerClass: typeof Controller, method: string) {
        this.addRoute(controllerClass, 'put', path, method);
    }

    static patch(path: string, controllerClass: typeof Controller, method: string) {
        this.addRoute(controllerClass, 'patch', path, method);
    }

    static delete(path: string, controllerClass: typeof Controller, method: string) {
        this.addRoute(controllerClass, 'delete', path, method);
    }

    static options(path: string, controllerClass: typeof Controller, method: string) {
        this.addRoute(controllerClass, 'options', path, method);
    }

    private static addRoute(controllerClass: typeof Controller, httpMethod: string, path: string, methodName: string) {
        // Add route with the current group middleware stack
        this.allRoutes.push([controllerClass, httpMethod, path, methodName, [...this.groupMiddlewareStack]]);
    }

    static group(callback: () => void, middleware: string[] = []) {
        // Temporarily set middleware stack for the group
        this.groupMiddlewareStack.push(...middleware);
        callback(); // Define routes in the group
        this.groupMiddlewareStack = []; // Reset middleware stack after the group is defined
    }

    static invokeRoutes(app: e.Express) {
        const classMap = new Map<string, Controller>();

        for (const [ControllerClass, httpMethod, path, methodName, routeMiddleware] of this.allRoutes) {
            if (!classMap.has(ControllerClass.name)) {
                classMap.set(ControllerClass.name, new ControllerClass(app));
            }

            const controllerInstance = classMap.get(ControllerClass.name);
            if (controllerInstance && controllerInstance.methodExists(methodName)) {
                const kernel = Kernel.getInstance();

                app[httpMethod](path,
                    async (req, res, next) => {
                        try {
                            for (const middleware of routeMiddleware) {
                                 kernel.invokeMiddleware(middleware, req, res, next);
                            }
                            if (!res.headersSent) { // Only call controller method if no response was sent
                                await controllerInstance[methodName](req, res, next);
                            }
                        } catch (error) {
                            next(error);
                        }
                    }
                );
            }
        }
    }
}

export default Route;
