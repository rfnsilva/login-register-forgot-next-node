import React, { createContext, useEffect, useState } from 'react';
import API from '../config/Api';

interface User {
  id: string,
  nome: string;
  email: string;
  token: string;
}

//interface com todos os dados necessarios
interface AuthContextData {
  signed: boolean;
  user: User | null;
  signUp(user: object): Promise<object>;
  signIn(user: object): Promise<object>;
  forgot(user: object): Promise<object>;
}

//criando context com tipo da interface acima
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

//criando provedor que servirá a aplicação
export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = localStorage.getItem('user');

      if (storagedUser) {
        setUser(JSON.parse(storagedUser));
      }
    }

    loadStorageData();
  }, []);

  //função que realiza o cadastro
  async function signUp(usuario: object){
    const response = await API.post('/register', usuario);
    const data = await response.data;

    setUser(data);

    localStorage.setItem('user', JSON.stringify(data));

    return data;
  }

  //função que realiza o login
  async function signIn(usuario: object){
    const response = await API.post('/login', usuario);
    const data = await response.data;

    setUser(data);

    localStorage.setItem('user', JSON.stringify(data));

    return data;
  }

  //função que realiza o forgot
  async function forgot(usuario: object){
    const response = await API.post('/forgot', usuario);
    const data = await response.data;

    return data;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signed: !!user,
        signUp,
        signIn,
        forgot
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
