const DEPENDENCIES = {
    App: Symbol.for("App"),

    //services
    HelloService: Symbol.for("HelloService"),

    //middlewares
    ExampleMiddleware: Symbol.for("ExampleMiddleware"),

    //routes
    SayHelloRoute: Symbol.for("SayHelloRoute"),

    //controllers
    HelloController: Symbol.for("HelloController"),
};

export { DEPENDENCIES }