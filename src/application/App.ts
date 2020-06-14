import 'reflect-metadata';
import cors from 'cors';
import express from 'express';
import { injectable, inject } from 'inversify';
import { DEPENDENCIES } from './DEPENDENCIES';
import { GenericController } from '../web/controllers/GenericController';

@injectable()
class App {

  private app: express.Application;

  //controllers
  private helloController: GenericController;
 
  constructor(
    @inject(DEPENDENCIES.HelloController) helloController: GenericController
  ) {
    this.app = express();
    this.helloController = helloController;
  }

  private routesConfiguration(): void {
    this.helloController.configureRoutes(this.app);
  }

  private globalMiddlewaresConfiguration(): void {
    this.app.use(express.json());
    this.app.use(cors());
  }

  private databaseConfiguration(): void {
    
  }

  public init(): void {
    this.globalMiddlewaresConfiguration();
    this.databaseConfiguration();
    this.routesConfiguration();
    this.app.listen(3000);
  }
}

export { App }