import { Request, Response } from "express";
import { injectable } from "inversify";
import { parameter } from "../@types/Parameter";
import { Method } from "../@types/methodEnum";
import { IRoute } from "../interfaces/IRoute";
import { IMiddleware } from "../interfaces/IMiddleware";

@injectable()
abstract class GenericRoute implements IRoute {

    public middlewares: Array<IMiddleware> = new Array<IMiddleware>();
    public handler: (req: Request, res: Response) => void;
    public method: Method;
    public urlAdress: string;
    public overview: string;
    public routeParameters: Array<parameter> = new Array<parameter>();

    public getError(): object {
        return {
            method: this.method,
            urlAdress: this.urlAdress,
            overview: this.overview,
        };
    }

    constructor(
    ) {
        this.method = Method.get;
        this.urlAdress = '';
        this.overview = '';
        this.handler = () => {};
    }


}

export { GenericRoute }