import Express from "express";
import router from "./routes.js";

const app = Express();
app.use(router)
app.listen(8000, () => console.log('server is running on http://localhost:8000'));

export default app;