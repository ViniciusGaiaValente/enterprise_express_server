import { injectable, inject } from "inversify";
import { Router } from "express";
import { DEPENDENCIES } from "../application/DEPENDENCIES";
import { IRoute } from "../interfaces/IRoute";
import { GenericRoute } from "../routes/GenericRoute";
import { GenericController } from "./GenericController";

@injectable()
class HelloController extends GenericController {

    private sayHelloRoute: IRoute;

    constructor(
        @inject(DEPENDENCIES.SayHelloRoute) sayHelloRoute: GenericRoute,
    ) {
        super();
        this.sayHelloRoute = sayHelloRoute;
    }

    public configureRoutes(router: Router) {
        super.configureRoute(router, this.sayHelloRoute);
    }
}

export { HelloController };