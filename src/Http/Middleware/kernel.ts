import Middleware from "../../lib/Http/Middleware";
import PrintRequestBody from "./PrintRequestBody";

class Kernel {
    static instance: Kernel;
    private middleware: Record<string, Middleware> =
        {
            print: new PrintRequestBody()
        }

    static getInstance() {
        return this.instance ? this.instance: new Kernel();
    }

    invokeMiddleware(middleware: string, ...args: any) {
        if (!this.middleware[middleware]) {
            throw new Error(`Middleware ${middleware} not found`);
        }
        // @ts-ignore
        return (this.middleware[middleware] as Middleware).handle(...args)
    }
}

export default Kernel;