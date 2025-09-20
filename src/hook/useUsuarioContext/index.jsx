//React
import { useContext } from "react"

//Context
import { UsuarioContext } from "../../context/UsuarioProvider";


export const useUsuarioContext = () => {
   return useContext(UsuarioContext);
};