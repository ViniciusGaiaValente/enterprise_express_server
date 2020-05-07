import { Request, Response, NextFunction } from "express";

interface IMiddleware {
    handler: (req: Request, res: Response, next: NextFunction) => void,
}

export { IMiddleware }