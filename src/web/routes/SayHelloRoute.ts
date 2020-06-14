import { Request, Response, NextFunction } from "express";
import { injectable, inject } from "inversify";
import { Method } from "../../@types/methodEnum";
import { IHelloService } from "../../domain/interfaces/services/IHelloService";
import { DEPENDENCIES } from "../../application/DEPENDENCIES";
import { IMiddleware } from "../../domain/interfaces/IMiddleware";
import { GenericRoute } from "../../domain/generics/GenericRoute";

@injectable()
class SayHelloRoute extends GenericRoute {

    constructor(
        @inject(DEPENDENCIES.HelloService) service: IHelloService,
        @inject(DEPENDENCIES.ExampleMiddleware) exampleMiddleware: IMiddleware,
    ) {
        super();

        this.method = Method.get;
        this.urlAdress = '/SayHello/:name';
        this.overview = 'route used to say hello for the the person with the given name';

        //adding external middlewares
        this.middlewares.push(exampleMiddleware);

        //create the route handler
        this.handler = (req: Request, res: Response) => {
            const name: string = req.params.name;
            res.send(service.sayHello(name));
        }

        //setting the route parameters (optional) (same logic for query and body params)
        this.routeParameters.push({
            name: 'name',
            type: 'string',
            ruleExplained: 'name has to be a string with 4 or more chracters',
            ruleFor: (req: Request, res: Response, next: NextFunction) => {
                const name: string = req.params.name;
                if (name !== null && name !== undefined) {
                    if(name.length > 3) {
                        next();
                        return;
                    }
                }
                res.send(this.getError('name'));
            }, 
        });
    }
}

export { SayHelloRoute }