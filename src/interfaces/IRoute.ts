import { Request, Response } from "express";
import { parameter } from "../@types/Parameter";
import { IMiddleware } from "./IMiddleware";
import { Method } from "../@types/MethodEnum";

interface IRoute {
    method: Method;
    urlAdress: string;
    overview: string,
    routeParameters?: parameter[],
    querryParameters?: parameter[],
    bodyParameters?: parameter[],
    handler: (req: Request, res: Response) => void;
    middlewares: Array<IMiddleware>,
}

export { IRoute }