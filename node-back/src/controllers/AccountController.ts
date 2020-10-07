import { getConnection, getRepository } from "typeorm";
import { Request, Response } from "express";

import { User } from "../entities/User";
import * as nodemailer from 'nodemailer';
import * as jwt from 'jsonwebtoken';
import * as crypto from 'crypto';
import * as bcrypt from 'bcrypt';

export const register = async (req: Request, res: Response) => {
  const { nome, email, senha, csenha } = req.body;
  
  if(senha !== csenha)
    return res.status(404).json({message: "erro senhas diferentes"})
  
  try {
    const senhaHash = await bcrypt.hash(senha, 8);
    
    const user = await getRepository(User).save({
      nome,
      email,
      senha: senhaHash
    });
    
    const token_register = jwt.sign({ nome }, process.env.SECRET, {
      expiresIn: '1d'
    });
    
    const data = {
      id: user.id,
      nome: user.nome,
      email: user.email,
      token: token_register
    }
    
    return res.status(200).json(data);
    
  } catch (error) {
    return res.status(402).json({message: "erro user controller"})
  }
}

export const login = async (req: Request, res: Response) => {
  const { email, senha } = req.body;
  
  try {
    const user = await getRepository(User).find({
      where: {
        email
      }
    });
    
    if (await bcrypt.compare(senha, user[0].senha)) {
      
      const token_login = jwt.sign({ email }, process.env.SECRET, {
        expiresIn: '1d'
      });
      
      const data = {
        id: user[0].id,
        nome: user[0].nome,
        email: user[0].email,
        token: token_login
      }
      
      return res.status(200).json(data);
    } else {
      return res.status(404).json({messge: "erro login controler"})
    }
    
  } catch (err) {
    return res.status(402).json({message: "erro ao logar"})
  }
}

//falta o try catch
export const forgot = async (req: Request, res: Response) => {
  const { email } = req.body;
  
  const user = await getRepository(User).findOne({
    where: {
      email
    }
  });
  
  const transporte = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASS
    }
  });
  
  const novaSenha = crypto.randomBytes(4).toString('hex');
  console.log('nova senha: ' + novaSenha)
  
  await transporte.sendMail({
    from: 'administrador <dc1d1eeef9-a6a61a@inbox.mailtrap.io>',
    to: email,
    subject: "recuperação de senha",
    html: `<p>óla, sua nova senha para acessar o sistema: ${novaSenha} </p><br />`
  });
  
  const senha_final = await bcrypt.hash(novaSenha, 8);
  
  await getConnection()
  .createQueryBuilder()
  .update(User)
  .set({ senha: senha_final })
  .where({ id: user.id })
  .execute();
  
  return res.status(200).json({message: 'senha criada e enviado para o mailtrap'})
}