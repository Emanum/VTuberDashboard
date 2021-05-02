import express = require('express');

import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors = require('cors');

import { RegisterRoutes } from "../build/routes";
import bodyParser from "body-parser";
// import {
//     generateRoutes,
//     generateSpec,
//     ExtendedRoutesConfig,
//     ExtendedSpecConfig,
// } from "tsoa";
//
// const swaggerUi = require('swagger-ui-express');

import debug from 'debug';

const app: express.Application = express();
const port = 3000;
const debugLog: debug.IDebugger = debug('app');

// here we are adding middleware to parse all incoming requests as JSON
app.use(express.json());

// here we are adding middleware to allow cross-origin requests
app.use(cors());

// const options: swaggerJsdoc.OAS3Options = {
//     definition: {
//         openapi: "3.0.0",
//         info: {
//             title: "VTuber Dashboard API",
//             version: "0.1.0",
//             description:
//                 "VTuber Dashboard API",
//         },
//         servers: [
//             {
//                 url: "http://localhost:3000",
//             },
//         ],
//     },
//     apis: ["./src/rest/creators/creators.routes.config.ts"],
// };

// const openapiSpecification = swaggerJsdoc(options);
//
// app.get('/api-docs.json', function(req, res) {
//     res.setHeader('Content-Type', 'application/json');
//     res.send(openapiSpecification);
// });

// app.use(
//     "/api-docs",
//     swaggerUi.serve,
//     swaggerUi.setup(openapiSpecification)
// );

// here we are preparing the expressWinston logging middleware configuration,
// which will automatically log all HTTP requests handled by Express.js
const loggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
    ),
};

// here we are crashing on unhandled errors and spitting out a stack trace,
// but only when in debug mode
if (process.env.DEBUG) {
    process.on('unhandledRejection', function(reason) {
        debugLog('Unhandled Rejection:', reason);
        process.exit(1);
    });
} else {
    loggerOptions.meta = false; // when not debugging, make terse
}

// initialize the logger with the above configuration
app.use(expressWinston.logger(loggerOptions));


// this is a simple route to make sure everything is working properly
app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(`Server up and running!`)
});

// Use body parser to read sent json payloads
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());

RegisterRoutes(app);

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);
