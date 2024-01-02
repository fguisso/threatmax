import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';

import threatModelRoutes from './routes/threatModelRoutes';
import logger from '../libs/logger';

const app = new Koa();
const router = new Router();

// Middleware for CORS
app.use(cors());

// Middleware for body parsing
app.use(bodyParser());

// Logger middleware
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  logger.info(`${ctx.method} ${ctx.url} - ${ms}ms`);
  logger.debug(JSON.stringify(ctx.request.headers));
});

// Registering routes
router.use('/threat-model', threatModelRoutes.routes(), threatModelRoutes.allowedMethods());

// Applying the router middleware
app.use(router.routes());
app.use(router.allowedMethods());

// Error handling middleware
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err: any) {
    ctx.status = err.status || 500;
    ctx.body = { message: err.message || 'An error occurred' };
    logger.error(`Error: ${err.message}`);
  }
});

export default app;