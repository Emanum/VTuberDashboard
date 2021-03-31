import express = require('express');
export abstract class CommonRoutesConfig {
    app: express.Application;
    name: string;

    protected constructor(app: express.Application, name: string) {
        this.app = app;
        this.name = name;
        this.configureRoutes();
    }

    abstract configureRoutes(): express.Application;

    getName() {
        return this.name;
    }
}