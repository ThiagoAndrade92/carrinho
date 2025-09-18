import { useContext } from "react";
import { CriarContext } from "../../context/ProdutoProvider";


export const useProdutoContext = () => {
   return useContext(CriarContext);
};