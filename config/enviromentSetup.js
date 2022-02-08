import dotenv from 'dotenv';

let envFile = '.env';
const enviroment = process.env.NODE_ENV;

if (enviroment === 'test') {
    envFile = '.env.test';
}

if (enviroment === 'dev') {
    envFile = '.env.dev';
}

dotenv.config({
    path: envFile,
});
