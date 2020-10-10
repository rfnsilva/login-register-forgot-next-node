import { Router, Request, Response } from 'express';

import cors from 'cors';
import { Auth } from './middlewares/Auth';

import { register, login, forgot, users } from './controllers/AccountController';

const routes = Router();

routes.use(cors());

routes.get('/', (request: Request, response: Response) => response.json({ message: 'PRONTOo CARALHOOOOO !' })); //feito

//rotas de autenticação e recuperação
routes.post('/register', register); //feito
routes.post('/login', login); //feito
routes.post('/forgot', forgot); //feito


routes.get('/users', users)

//middleware autenticacao
routes.use(Auth);

export default routes;