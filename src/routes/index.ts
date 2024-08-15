import express, { Application } from 'express';
import testRoute from './test-route';

const setupRoutes = (app: Application) => {
    app.use(
        express.json(),
        testRoute
    );
};

export default setupRoutes;
