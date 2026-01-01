import { useContext } from "react";
import { CriarContext } from "../../context/ProdutoProvider";
import { ProdutoContextType } from "../../types/types";

export const useProdutoContext = (): ProdutoContextType => {
  return useContext(CriarContext);
};
