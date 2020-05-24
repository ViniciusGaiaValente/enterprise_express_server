import { Request, Response } from "express";
import { injectable } from "inversify";
import { parameter } from "../@types/Parameter";
import { IRoute } from "../interfaces/IRoute";
import { IMiddleware } from "../interfaces/IMiddleware";
import { Method } from "../@types/MethodEnum";

@injectable()
abstract class GenericRoute implements IRoute {

    public middlewares: Array<IMiddleware> = new Array<IMiddleware>();
    public handler: (req: Request, res: Response) => void;
    public method: Method;
    public urlAdress: string;
    public overview: string;
    public routeParameters: Array<parameter> = new Array<parameter>();

    private getParametersRules(): Array<Object> {
        var parametersRules = new Array<Object>();

        this.routeParameters.forEach((parameter) => {
            parametersRules.push({
                name: parameter.name,
                type: parameter.type,
                ruleExplained: parameter.ruleExplained,
            });
        })
        
        return parametersRules;
    }

    public getError(errorAtParameter: string): object {
        return {
            errorAtParameter,
            method: this.method,
            urlAdress: this.urlAdress,
            overview: this.overview,
            parameters: this.getParametersRules(),
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