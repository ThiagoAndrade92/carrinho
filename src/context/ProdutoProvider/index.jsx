import { createContext, useState, useEffect } from "react";

export const CriarContext = createContext();

//Hook
import { useFetch } from '../../hook/UseFetch';

//url
const urlProduto = 'http://localhost:3000/Produtos';

export const ProdutoProvider = ({children}) => {
   
   const { data: produto, setData } = useFetch(urlProduto);

   const [remover, setRemover] = useState(false);

   

      

   const removerProduto = async (id) => {
            await fetch(`${urlProduto}/${id}`, {
               method: "DELETE",
            });
      
            setData(prevProduto => prevProduto.filter((p) => p.id !== id));
      
            setRemover(true);
      
         };

         useEffect(() => {
               if (remover) {
              const timer = setTimeout(() => {
                   setRemover(false);
               }, 3000);
         
               return () => clearTimeout(timer);
         
            }
            }, [remover]);

   return (
      <CriarContext.Provider value={{produto, setData, removerProduto, remover}}>
         {children}
      </CriarContext.Provider>
   )
};