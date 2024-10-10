import express, { Application } from 'express';
import userRoute from './user-route';
import paymentRoute from './payment-route';
import healthCheckRoute from './health-check-route';


import { rateLimit } from 'express-rate-limit'

const limiter = rateLimit({
	windowMs: 60 * 1000, // 15 minutes
	limit: 10, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})

const setupRoutes = (app: Application) => {
  app.use(express.json(), userRoute);
  app.use(express.json(), paymentRoute);
  app.use(express.json(), healthCheckRoute);
  app.use(express.json(), limiter);
};

export default setupRoutes;
