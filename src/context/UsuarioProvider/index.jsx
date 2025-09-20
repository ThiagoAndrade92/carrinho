//React
import { createContext } from "react";

//url
const urlUsuario = 'http://localhost:3000/Usuarios';

export const UsuarioContext = createContext();

//Hook
import { useFetch } from '../../hook/UseFetch';

export const UsuarioProvider = ({children}) => {

   const {data: usuario, setData} = useFetch(urlUsuario)

   const addUsuario = async (novoUsuario) => {

      const res = await fetch(urlUsuario, {
         method: "POST",
         headers: {
            "Content-type": "application/json"
         },
         body: JSON.stringify(novoUsuario)
      });
      const usuarioAdicionado = await res.json();
   
      setData([...usuario, usuarioAdicionado])
   }


   return (
      <UsuarioContext.Provider value={{usuario, setData, addUsuario}}>
         {children}
      </UsuarioContext.Provider>
   )
};