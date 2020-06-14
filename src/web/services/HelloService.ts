import { IHelloService } from '../../domain/interfaces/services/IHelloService';
import { injectable } from "inversify";

@injectable()
class HelloService implements IHelloService {
    sayHello(name: string): string {
        return `Hello ${name}`;
    }
}

export { HelloService }