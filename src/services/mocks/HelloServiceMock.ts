import faker from 'faker';
import { injectable } from "inversify";
import { IHelloService } from "../../interfaces/services/IHelloService";

@injectable()
class HelloServiceMock implements IHelloService {
    sayHello(name: string): string {
        return `Hello ${faker.name.findName()}`;
    }
}

export { HelloServiceMock }