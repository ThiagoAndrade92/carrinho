import { useContext } from "react";
import { CriarContext } from "../../context/CriarProdutoProvider";


export const useCriarProdutoContext = () => {
   return useContext(CriarContext);
};