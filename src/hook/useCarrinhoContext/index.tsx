import { useContext } from "react";
import { CarrinhoContext } from "../../context/CarrinhoProvider";
import { CarrinhoContextType } from "../../types/types";

export const useCarrinhoContext = (): CarrinhoContextType => {
  return useContext(CarrinhoContext);
};
