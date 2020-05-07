import 'mocha';
import { expect } from 'chai';
import { Container } from '../application/Container';
import { IHelloService } from '../interfaces/services/IHelloService';
import { DEPENDENCIES } from '../application/DEPENDENCIES';

const service: IHelloService = Container.get<IHelloService>(DEPENDENCIES.HelloService);

describe('Hello Service', () => {

    it('should return hello plus recieved name', () => {

        const name = 'name';
        const result = service.sayHello(name);
        
        expect(result).to.equal(`Hello ${name}`);
    });
});