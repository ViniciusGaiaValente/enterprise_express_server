import { Container as InversifyContainer } from "inversify";
import { App } from "./App";
import { DEPENDENCIES } from "./DEPENDENCIES";
import { IHelloService } from "../interfaces/services/IHelloService";
import { HelloService } from "../services/HelloService";
import { GenericController } from "../controllers/GenericController";
import { HelloController } from "../controllers/HelloController";
import { IMiddleware } from "../interfaces/IMiddleware";
import { ExampleMiddleware } from "../middlewares/ExmapleMiddleware";
import { GenericRoute } from "../routes/GenericRoute";
import { SayHelloRoute } from "../routes/SayHelloRoute";

class Dependencies {

    private inversifyContainer: InversifyContainer = new InversifyContainer();

    constructor() {
        this.registerDependencies();
        this.registerMocks();
    }

    public container(): InversifyContainer {
        return this.inversifyContainer;
    }

    private registerDependencies(): void {
        this.inversifyContainer.bind<App>(DEPENDENCIES.App).to(App);

        //services
        this.inversifyContainer.bind<IHelloService>(DEPENDENCIES.HelloService).to(HelloService);

        //middlewares
        this.inversifyContainer.bind<IMiddleware>(DEPENDENCIES.ExampleMiddleware).to(ExampleMiddleware);

        //routes
        this.inversifyContainer.bind<GenericRoute>(DEPENDENCIES.SayHelloRoute).to(SayHelloRoute);

        //controllers
        this.inversifyContainer.bind<GenericController>(DEPENDENCIES.HelloController).to(HelloController);
    }

    private registerMocks(): void {
        // this.inversifyContainer.rebind<IHelloService>(DEPENDENCIES.HelloService).to(HelloServiceMock);
    }
}

const Container: InversifyContainer = new Dependencies().container();

export { Container };