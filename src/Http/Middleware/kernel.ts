import Middleware from "../../lib/Middleware";
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

    // constructor();

    invokeMiddleware(middleware: string, ...args: any) {
        // Todo: Check if valid middleware
        // @ts-ignore
        return this.middleware[middleware].handle(...args)
    }
}

export default Kernel;