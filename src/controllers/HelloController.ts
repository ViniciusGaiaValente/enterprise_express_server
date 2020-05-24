import { injectable, inject } from "inversify";
import { DEPENDENCIES } from "../application/DEPENDENCIES";
import { GenericRoute } from "../routes/GenericRoute";
import { GenericController } from "./GenericController";
import { IMiddleware } from "../interfaces/IMiddleware";

@injectable()
class HelloController extends GenericController {

    protected sharedUrl: string = "/Hello";
    protected sharedMiddlewares: Array<IMiddleware> = new Array<IMiddleware>();

    constructor(
        @inject(DEPENDENCIES.SayHelloRoute) sayHelloRoute: GenericRoute,
        @inject(DEPENDENCIES.ExampleMiddleware) exampleMiddleware: IMiddleware,
    ) {
        super();
        this.routes.push(sayHelloRoute);
        this.sharedMiddlewares.push(exampleMiddleware);
    }
}

export { HelloController };