import Express from 'express';
import router from './routes/api.js';

const app = Express();
app.use(Express.json());
app.use(router);

export default app;
