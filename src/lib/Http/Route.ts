import e from "express";
import Controller from "./Controller";
import Kernel from "../../Http/Middleware/kernel";
import {middleware} from "yargs";

// Updated RouteDefinition to include middleware array
type RouteDefinition = [typeof Controller, string, string, string, string[], string?]; // [Controller Class, HTTP Method, URL Path, Controller Method, Middleware Array]

class Route {
    static allRoutes: RouteDefinition[] = [];
    private static groupMiddlewareStack: string[] = [];
    static pathsMiddlewareCalledOn = [];

    static get(path: string, controllerClass: typeof Controller, method: string, middleware: string = '') {
        this.addRoute(controllerClass, 'get', path, method, middleware);
    }

    static post(path: string, controllerClass: typeof Controller, method: string, middleware: string = '') {
        this.addRoute(controllerClass, 'post', path, method, middleware);
    }

    static put(path: string, controllerClass: typeof Controller, method: string, middleware: string = '') {
        this.addRoute(controllerClass, 'put', path, method, middleware);
    }

    static patch(path: string, controllerClass: typeof Controller, method: string, middleware: string = '') {
        this.addRoute(controllerClass, 'patch', path, method, middleware);
    }

    static delete(path: string, controllerClass: typeof Controller, method: string, middleware: string = '') {
        this.addRoute(controllerClass, 'delete', path, method, middleware);
    }

    static options(path: string, controllerClass: typeof Controller, method: string, middleware: string = '') {
        this.addRoute(controllerClass, 'options', path, method, middleware);
    }

    private static addRoute(controllerClass: typeof Controller, httpMethod: string, path: string, methodName: string, middleware: string = '') {
        // Add route with the current group middleware stack
        this.allRoutes.push([controllerClass, httpMethod, path, methodName, [...this.groupMiddlewareStack], middleware]);
    }

    static group(callback: () => void, middleware: string[] = []) {
        // Temporarily set middleware stack for the group
        this.groupMiddlewareStack.push(...middleware);
        callback(); // Define routes in the group
        this.groupMiddlewareStack = []; // Reset middleware stack after the group is defined
    }

    static invokeRoutes(app: e.Express) {
        const classMap = new Map<string, Controller>();

        for (const [ControllerClass, httpMethod, path, methodName, routeMiddleware, singleMiddleware] of this.allRoutes) {
            if (!classMap.has(ControllerClass.name)) {
                classMap.set(ControllerClass.name, new ControllerClass(app));
            }

            // prevent going through the middleware again for multiple controller methods with same paths
            const storedPath = path.endsWith('/') ? path.slice(-1): path;

            const controllerInstance = classMap.get(ControllerClass.name);
            if (controllerInstance && controllerInstance.methodExists(methodName)) {
                const kernel = Kernel.getInstance();

                app[httpMethod](path,
                    async (req, res, next) => {
                        try {
                            // Invoke middleware only once for a path
                            if (!this.pathsMiddlewareCalledOn.includes(storedPath)) {
                                console.log("inside for")
                                for (const middleware of routeMiddleware) {
                                    if (!middleware) return;
                                    kernel.invokeMiddleware(middleware, req, res, next);
                                }
                                this.pathsMiddlewareCalledOn.push(storedPath);
                            }

                            if (!res.headersSent) { // Only call controller method if no response was sent
                                if (singleMiddleware) {
                                    kernel.invokeMiddleware(singleMiddleware, req, res, next);
                                }
                                await controllerInstance[methodName](req, res, next);
                            }
                        } catch (error) {
                            next(error);
                        }
                    }
                );
            } else {
                throw new Error(`Method ${methodName} not found in controller ${ControllerClass.name}`);
            }

        }
    }
}

export default Route;
