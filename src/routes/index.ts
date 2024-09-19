import express, { Application } from 'express';
import testRoute from './test-route';
import paymentRoute from './payment-route';

const setupRoutes = (app: Application) => {
  app.use(express.json(), testRoute);
  app.use(express.json(), paymentRoute);
};

export default setupRoutes;
