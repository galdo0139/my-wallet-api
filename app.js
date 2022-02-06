import Express from 'express';
import router from './routes.js';

const app = Express();
app.use(Express.json());
app.use(router);

export default app;
