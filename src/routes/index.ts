import express, { Application } from 'express';
import testRoute from './test-route';
import userRoute from './user-route';
import paymentRoute from './payment-route';
import healthCheckRoute from './health-check-route';

const setupRoutes = (app: Application) => {
  app.use(express.json(), testRoute);
  app.use(express.json(), userRoute);
  app.use(express.json(), paymentRoute);
  app.use(express.json(), healthCheckRoute);
};

export default setupRoutes;
