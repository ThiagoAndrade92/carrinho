import React, { createContext, useCallback, useEffect, useState } from "react";
import { useFetch } from "../../hook/UseFetch";
import { CarrinhoItem } from "../../types/types";
import { CarrinhoContextType } from "../../types/types";

const urlCarrinho = "http://localhost:3000/Carrinho";

export const CarrinhoContext = createContext<CarrinhoContextType>(
  {} as CarrinhoContextType
);

type CarrinhoProviderProps = {
  children: React.ReactNode;
};

export const CarrinhoProvider = ({ children }: CarrinhoProviderProps) => {
  const { data, setData } = useFetch<CarrinhoItem[]>(urlCarrinho);
  const carrinho = data || [];
  const [sucesso, setSucesso] = useState(false);

  const addProduto = async (p: CarrinhoItem): Promise<void> => {
    const existe = carrinho.find((item) => item.id === p.id);

    if (existe) {
      await fetch(`${urlCarrinho}/${p.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ qtd: existe.qtd + 1 }),
      });

      setData(
        carrinho.map((item) =>
          item.id === p.id ? { ...item, qtd: item.qtd + 1 } : item
        )
      );

      setSucesso(true);
    } else {
      const res = await fetch(urlCarrinho, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...p, qtd: 1 }),
      });

      const adicionadoNoCarrinho: CarrinhoItem = await res.json();
      setData([...carrinho, adicionadoNoCarrinho]);
      setSucesso(true);
    }
  };

  const removerUm = async (p: CarrinhoItem): Promise<void> => {
    const existe = carrinho.find((item) => item.id === p.id);

    if (existe && existe.qtd > 1) {
      await fetch(`${urlCarrinho}/${p.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ qtd: existe.qtd - 1 }),
      });

      setData(
        carrinho.map((item) =>
          item.id === p.id ? { ...item, qtd: item.qtd - 1 } : item
        )
      );
    } else if (existe && existe.qtd === 1) {
      await fetch(`${urlCarrinho}/${p.id}`, { method: "DELETE" });
      setData(carrinho.filter((item) => item.id !== p.id));
    }
  };

  const zerarCarrinho = useCallback(async (): Promise<void> => {
    setData([]);
    await Promise.all(
      carrinho.map((item) =>
        fetch(`${urlCarrinho}/${item.id}`, { method: "DELETE" })
      )
    );
  }, [carrinho, setData]);

  useEffect(() => {
    if (!sucesso) return;

    const timer = setTimeout(() => setSucesso(false), 3000);
    return () => clearTimeout(timer);
  }, [sucesso]);

  return (
    <CarrinhoContext.Provider
      value={{ carrinho, addProduto, removerUm, zerarCarrinho, sucesso }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};
