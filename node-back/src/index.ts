import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';
import * as dotenv from 'dotenv';
import * as bodyParser from 'body-parser';

import routes from './routes';

const app = express();

app.use(bodyParser.json());
app.use(routes);

dotenv.config();
createConnection();

app.listen(process.env.PORT || 3333);
