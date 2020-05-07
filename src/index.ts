import { Container } from "./application/Container";
import { App } from "./application/App";
import { DEPENDENCIES } from "./application/DEPENDENCIES";

Container.get<App>(DEPENDENCIES.App).init();
