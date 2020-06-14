import { Request, Response } from "express";
import { Parameter } from "../../@types/Parameter";
import { IMiddleware } from "./IMiddleware";
import { Method } from "../../@types/methodEnum";

interface IRoute {
    method: Method;
    urlAdress: string;
    overview: string,
    routeParameters?: Parameter[],
    querryParameters?: Parameter[],
    bodyParameters?: Parameter[],
    handler: (req: Request, res: Response) => void;
    middlewares: Array<IMiddleware>,
}

export { IRoute }