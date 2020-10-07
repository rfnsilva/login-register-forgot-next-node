import { Router, Request, Response } from 'express';

import cors from 'cors';
import { Auth } from './middlewares/Auth';

import { register, login, forgot } from './controllers/AccountController';

const routes = Router();

routes.use(cors());

routes.get('/', (request: Request, response: Response) => response.json({ message: 'PRONTO CARALHOOOOO !' })); //feito

//rotas de autenticação e recuperação
routes.post('/register', register); //feito
routes.post('/login', login); //feito
routes.post('/forgot', forgot); //feito


//middleware autenticacao
routes.use(Auth);

export default routes;
