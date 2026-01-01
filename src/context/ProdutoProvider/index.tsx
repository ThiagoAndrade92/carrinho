import { createContext, useState, useEffect } from "react";
import { useFetch } from "../../hook/UseFetch";
import { Produto } from "../../types/types";
import { ProdutoContextType } from "../../types/types";

const urlProduto = "http://localhost:3000/Produtos";

export const CriarContext = createContext<ProdutoContextType>(
  {} as ProdutoContextType
);

type ProdutoProviderProps = {
  children: React.ReactNode;
};

export const ProdutoProvider = ({ children }: ProdutoProviderProps) => {
  const { data: produto, setData } = useFetch<Produto[]>(urlProduto);
  const [remover, setRemover] = useState(false);

  const removerProduto = async (id: number): Promise<void> => {
    await fetch(`${urlProduto}/${id}`, { method: "DELETE" });

    setData((prevProduto) => prevProduto.filter((p) => p.id !== id));
    setRemover(true);
  };

  useEffect(() => {
    if (!remover) return;

    const timer = setTimeout(() => setRemover(false), 3000);
    return () => clearTimeout(timer);
  }, [remover]);

  return (
    <CriarContext.Provider value={{ produto, setData, removerProduto, remover }}>
      {children}
    </CriarContext.Provider>
  );
};
