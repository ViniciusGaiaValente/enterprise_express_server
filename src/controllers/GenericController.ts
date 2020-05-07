import { Router, Request, Response, NextFunction } from "express";
import { injectable } from "inversify";
import { Method } from "../@types/methodEnum";
import { IRoute } from "../interfaces/IRoute";

@injectable()
abstract class GenericController {

    protected configureRoute(router: Router, route: IRoute) {

        var middlewareHandlers: Array<(req: Request, res: Response, next: NextFunction) => void> = new Array<(req: Request, res: Response, next: NextFunction) => void>();

        route.middlewares.forEach((middleware) => {
            middlewareHandlers.push(middleware.handler);
        });
        
        route.routeParameters?.forEach((middleware) => {
            middlewareHandlers.push(middleware.ruleFor);
        });

        route.querryParameters?.forEach((middleware) => {
            middlewareHandlers.push(middleware.ruleFor);
        });

        route.bodyParameters?.forEach((middleware) => {
            middlewareHandlers.push(middleware.ruleFor);
        });

        switch(route.method) {
            case Method.get:
                router.get(route.urlAdress, middlewareHandlers, route.handler);
                break;
            case Method.post:
                router.post(route.urlAdress, middlewareHandlers, route.handler);
                break;
            case Method.delete:
                router.delete(route.urlAdress, middlewareHandlers, route.handler);
                break;
            case Method.put:
                router.put(route.urlAdress, middlewareHandlers, route.handler);
                break;
            case Method.patch:
                router.patch(route.urlAdress, middlewareHandlers, route.handler);
                break;
        }
    }

    public abstract configureRoutes(router: Router): void;
}

export { GenericController }