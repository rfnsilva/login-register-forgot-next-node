import { Request, Response, NextFunction} from 'express';
import * as jwt from 'jsonwebtoken';

export const Auth = async (req: Request, res: Response, next: NextFunction) => {
    const auth_header = req.headers.authorization;
    
    if(!auth_header){
        return res.status(401).json({message: 'Erro no cabeçalho'});
    }
    
    const [, token] = auth_header.split(' ');

    try{
        await jwt.verify(token, process.env.SECRET);
        next();
    }
    catch(error){
        return res.status(401).json({message: 'Token expirou'})
    }

}