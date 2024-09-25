import express, { Application } from 'express';
import testRoute from './test-route';
import userRoute from './user-route';

const setupRoutes = (app: Application) => {
  app.use(express.json(), testRoute);
  app.use(express.json(), userRoute);
};

export default setupRoutes;
