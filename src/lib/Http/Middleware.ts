import {Request, Response, NextFunction, ErrorRequestHandler} from 'express';
interface Middleware {
    handle(...args: [Request, Response, NextFunction]): void;
    handleWithError?(error: ErrorRequestHandler, request: Request, response: Response, next: NextFunction): void;
}

export default Middleware;