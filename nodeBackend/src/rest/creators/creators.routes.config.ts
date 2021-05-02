import {CommonRoutesConfig} from '../common/common.routes.config';
import  '../../service/CreatorService';

import express = require('express');
import {CreatorService} from "../../service/CreatorService";

export class CreatorsRoutes extends CommonRoutesConfig {

    private creatorService: CreatorService;

    constructor(app: express.Application) {
        super(app, 'CreatorsRoutes');
        this.creatorService = new CreatorService();
    }

    configureRoutes() {
        /**
         * @openapi
         * /creators:
         *   get:
         *     description: Gets all creators
         *     responses:
         *       200:
         *         description: Returns a JSON array with creators.
         *
         */
        this.app.route(`/creators`)
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(this.creatorService.getCreators());
            })

        this.app.route(`/creators/:creatorID`)
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(this.creatorService.getCreator(req.params.creatorID));
            })

        return this.app;
    }
}