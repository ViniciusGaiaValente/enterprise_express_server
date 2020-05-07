# Enterprise Express Server

Proposal for enterprise architecture with node and typescript

## Built With

* [Typescript](https://www.typescriptlang.org/) - Suport for strong types in javascript
* [Node.js](https://nodejs.org/en/about/) - Runtime enviroment for backend javascript
* [Express](http://expressjs.com/) - Lightweight Web framework with http utils
* [Inversify](http://inversify.io/) - Library that suport IoC and dependency injection

## Getting Started

### Prerequisites

### Installing

## Documentation

### Services

Services should encapsulate all the business logic, including database access.

To create a new service:

* create a interface containing the behavior of the functions of this service:
* create a class, extend the interface, and add your logic:
* this class should have the "injectable" decorator, this will allow you to inject it anywhere latter:
* if you need any dependency inside this service, you should inject it on the constructor:
* create a unique symbol for this service, register the service with the corresponding interface and symbol

#### Mocks

A mocked service should have the same behavior of the corresponding service, with a generic implementation for testing purposes

### Controlers

### Routes

### Middlewares

### Tests

#### Writing tests

#### Running the tests

## Contributing

## Authors

* **Vinicius Gaia Valente** - [github page](https://github.com/ViniciusGaiaValente)

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
