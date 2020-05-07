import { Request, Response, NextFunction } from "express";
import { injectable } from "inversify";
import { IMiddleware } from "../interfaces/IMiddleware";

@injectable()
class ExampleMiddleware implements IMiddleware {

    constructor() {}

    public handler(req: Request, res: Response, next: NextFunction) {
        console.log('passing by example middleware');
        next();
    }
}

export { ExampleMiddleware }