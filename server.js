import app from './app.js';

const consoleMessage = `server is running on http://localhost:${process.env.PORT}`;
app.listen(process.env.PORT, () => {
    if (process.env.NODE_ENV !== 'prod') {
        console.log(consoleMessage);
    }
});
