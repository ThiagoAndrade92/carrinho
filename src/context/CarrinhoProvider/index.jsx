import { createContext, useCallback } from "react";

//React
import { useState, useEffect } from "react";

import { useFetch } from "../../hook/UseFetch";

//url
const urlCarrinho = 'http://localhost:3000/Carrinho';


export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {

   const { data: carrinho, setData } = useFetch(urlCarrinho);
   const [sucesso, setSucesso] = useState(false);
   
   
   
   const addProduto = async (p) => {
      const existe = carrinho.find((item) => item.id === p.id);

      if (existe) {

         await fetch(`${urlCarrinho}/${p.id}`, {
            method: "PATCH",
            headers: {
               "Content-type": "application/json"
            },
            body: JSON.stringify({ qtd: existe.qtd + 1 })
         });

         setData(carrinho.map((item) =>
            item.id === p.id
               ? { ...item, qtd: item.qtd + 1 }
               : item))

         setSucesso(true);

      } else {
         const res = await fetch(urlCarrinho, {
            method: "POST",
            headers: {
               "Content-type": "application/json"
            },
            body: JSON.stringify({ ...p, qtd: 1 })
         });
         const adicionadoNoCarrinho = await res.json();
         setData([...carrinho, adicionadoNoCarrinho]);
         setSucesso(true);
      }



   };

   const removerUm = async (p) => {
      const existe = carrinho.find((item) => item.id === p.id);

      if (existe && existe.qtd > 1) {
         await fetch(`${urlCarrinho}/${p.id}`, {
            method: "PATCH",
            headers: {
               "Content-type": "application/json"
            },
            body: JSON.stringify({ qtd: existe.qtd - 1 })
         });
         setData(carrinho.map((item) =>
            item.id === p.id
               ? { ...item, qtd: item.qtd - 1 }
               : item
         ))
      } else if (existe && existe.qtd === 1) {
         await fetch(`${urlCarrinho}/${p.id}`, {
            method: "DELETE",
         });

         setData(carrinho.filter((item) => item.id !== p.id))
      }
   };

   const zerarCarrinho = useCallback(async () => {
      setData([]);
      await Promise.all(
         carrinho.map((item) =>
            fetch(`${urlCarrinho}/${item.id}`, { method: "DELETE" })
         )
      )

   }, [carrinho, setData]);

   useEffect(() => {
      if (sucesso) {
         const timer = setTimeout(() => {
            setSucesso(false);
         }, 3000);

         return () => clearTimeout(timer);

      }
   }, [sucesso]);

   return (
      <CarrinhoContext.Provider value={{ carrinho, addProduto, removerUm, zerarCarrinho, sucesso }}>
         {children}
      </CarrinhoContext.Provider>
   )
};