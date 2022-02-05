import Express from "express";
import router from "./routes.js";
import 'dotenv/config';

const consoleMessage = 'server is running on http://localhost:' + process.env.PORT;

const app = Express();
app.use(router)
app.listen(process.env.PORT, () => console.log(consoleMessage));

export default app;