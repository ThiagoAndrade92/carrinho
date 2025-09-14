//React
import { useContext } from "react";

//Context
import { CarrinhoContext } from "../../context/CarrinhoProvider";

export const useCarrinhoContext = () => {
   return useContext(CarrinhoContext);
};