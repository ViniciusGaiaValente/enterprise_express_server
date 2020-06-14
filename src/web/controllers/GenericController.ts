import { Router, Request, Response, NextFunction, Application } from "express";
import { injectable } from "inversify";
import { IRoute } from "../../domain/interfaces/IRoute";
import { IMiddleware } from "../../domain/interfaces/IMiddleware";
import { Method } from "../../@types/methodEnum";

@injectable()
abstract class GenericController {

    protected abstract sharedUrl: string;
    protected abstract sharedMiddlewares: Array<IMiddleware>
    
    protected routes: Array<IRoute> = new Array<IRoute>();
    
    private router: Router = Router();

    private configureRoute(route: IRoute) {

        var middlewareHandlers: Array<(req: Request, res: Response, next: NextFunction) => void> = new Array<(req: Request, res: Response, next: NextFunction) => void>();

        //parameter validation middlewares
        route.routeParameters?.forEach((route) => {
            middlewareHandlers.push(route.ruleFor);
        });

        route.querryParameters?.forEach((route) => {
            middlewareHandlers.push(route.ruleFor);
        });

        route.bodyParameters?.forEach((route) => {
            middlewareHandlers.push(route.ruleFor);
        });

        //controller shared middlewares
        this.sharedMiddlewares.forEach((middleware) => {
            middlewareHandlers.push(middleware.handler);
        });

        //route specific middlewares
        route.middlewares.forEach((middleware) => {
            middlewareHandlers.push(middleware.handler);
        });

        switch(route.method) {
            case Method.get:
                this.router.get(route.urlAdress, middlewareHandlers, route.handler);
                break;
            case Method.post:
                this.router.post(route.urlAdress, middlewareHandlers, route.handler);
                break;
            case Method.delete:
                this.router.delete(route.urlAdress, middlewareHandlers, route.handler);
                break;
            case Method.put:
                this.router.put(route.urlAdress, middlewareHandlers, route.handler);
                break;
            case Method.patch:
                this.router.patch(route.urlAdress, middlewareHandlers, route.handler);
                break;
        }
    }

    public configureRoutes(app: Application) {

        this.routes.forEach(route => this.configureRoute(route));

        app.use(this.sharedUrl, this.router);
    }
}

export { GenericController }