import Express from 'express';
import router from './routes.js';

const consoleMessage = `server is running on http://localhost:${process.env.PORT}`;

const app = Express();
app.use(Express.json());
app.use(router);
app.listen(process.env.PORT, () => console.log(consoleMessage));

export default app;
