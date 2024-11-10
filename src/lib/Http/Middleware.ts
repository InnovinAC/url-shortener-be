import {Request, Response, NextFunction} from 'express';
interface Middleware {
    handle(...args: [Request, Response, NextFunction]): void;
    handleWithError?(...args: [Error, Request, Response, NextFunction]): void;
}

export default Middleware;