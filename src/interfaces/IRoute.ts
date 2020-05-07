import { Request, Response } from "express";
import { parameter } from "../@types/Parameter";
import { Method } from "../@types/methodEnum";
import { IMiddleware } from "./IMiddleware";

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