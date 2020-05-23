# Enterprise Express Server

### Proposta de estrutura de projetos usando node.js, express e typescript

## Objetivo

Este projeto visa ser um ponto de partida para apis REST, que desejem seguir os princípios SOLID. São definidas aqui práticas arquiteturais para a construção, em camadas, de uma api. Mais especificamente sobre como encapsular a lógica de negócios, como expor rotas de forma padronizada, como estruturar de forma coesa essa api.

Não é a intenção deste projeto definir bibliotecas para usos específicos, como acesso a banco de dados e autenticação. Porém, para seguir o "Princípio da substituição de Liskov" (parte do SOLID), qualquer biblioteca ou trecho de código de uso específico, que não esteja intrinsecamente relacionado a estrutura do projeto em si, deve estar devidamente encapsulado, de forma que sua implementação possa ser substituída sem afetar seu comportamento.

## Construido com

* [Typescript](https://www.typescriptlang.org/) - Suporte para tipagem no javascript
* [Node.js](https://nodejs.org/en/about/) - Ambiente para execução de codigo javascript
* [Express](http://expressjs.com/) - Framework web
* [Inversify](http://inversify.io/) - Biblioteca que adiciona IoC (Inverção de Controle) ou Injeção de Dependencias

## Documentação

### Services

Serviços servem para encapsular toda a lógica de negócios, de forma que os mesmo não precisem se responsabilizar por qualquer configuração de rota ou controle de acesso (a não ser que seja um serviço específico para isso) etc. É importante manter o princípio da responsabilidade única, em casos de responsabilidades encadeadas, não existe problema em um serviço acessar outro serviço.

Para criar um novo serviço:

* Crie uma interface com o comportamento completo do serviço, todas as funções a serem implementadas por ele, seus parâmetros e retornos;

* Crie uma classe e nela implemente a interface criada, insira a lógica  necessária dentro de cada função

#### Mocks

O mock de um serviço deve implementar a mesma interface do serviço a qual corresponde. A implementação das funções do mesmo devem retornar valores genéricos, simulando uma resposta real. Assim, mesmo com o serviço original fora do ar, qualquer módulo que dependa dele pode ser testado sem prejuizos ao fluxo original.

### Routes

Uma rota contém todas as informações sobre como tratar uma requisição. Ela define todos os parâmetros aceitos na url e corpo, além regras de validação para esses parâmetros, essas regras são implementadas através de middlewares (ver abaixo). Também é responsabilidade da Rota adicionar os middlewares a serem executados antes do handler principal. 

Para criar uma nova rota

* Crie uma classe estendendo de GenericRoute. Então dentro do construtor, defina todas as configurações necessárias, adicione todos os parâmetros (são do tipo parameter, já definido no projeto) e todos os middlewares.

* Para que a rota seja exposta é necessário inseri-la dentro de um controller.

### Controlers

Controladores são agrupadores de rotas, eles devem expor corretamente um grupo de rotas diferentes que estejam de alguma forma relacionadas. Eles podem definir um segmento de url compartilhado entre seus endpoints, além de middlewares obrigatórios para todas as rotas que agrupam.

Para criar um controlador

* Crie uma classe estendendo de GenericController, defina nela, uma propriedade para cada rota a ser exposta pelo controlador.


### Middlewares

Middlewares servem para tratamentos de rota preliminares (executados antes do handler principal da rota), uma rota pode ter vários middlewares e o mesmo middleware pode ser inserido em várias rotas. Eles são muito úteis para tarefas como, verificar se um cliente está autorizado a acessar uma rota específica ou adicionar, registrar informações de acesso sobre aquela rota, entre outros.

GenericRoute e GenericController em suas implementações usam por padrão middlewares para verificar e validar os parâmetros definidos em cada rota.

Para criar um middleware:

* Crie uma classe implementando IMiddleware essa classe deve possuir o atributo handler, essa é a função preliminar a ser executada no acesso da rota

## Autores

* **Vinicius Gaia Valente** - [github page](https://github.com/ViniciusGaiaValente)