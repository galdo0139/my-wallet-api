import app from './app.js';

const consoleMessage = `server is running on http://localhost:${process.env.PORT}`;
app.listen(process.env.PORT, () => console.log(consoleMessage));
