import { createContext } from "react";

export const CriarContext = createContext();

//Hook
import { useFetch } from '../../hook/UseFetch';

//url
const urlProduto = 'http://localhost:3000/Produtos';

export const ProdutoProvider = ({children}) => {
   
   const { data: produto, setData } = useFetch(urlProduto);

   const removerProduto = async (id) => {
            await fetch(`${urlProduto}/${id}`, {
               method: "DELETE",
            });
      
            setData(prevProduto => prevProduto.filter((p) => p.id !== id));
      
            alert('Produto removido!')
      
         };

   return (
      <CriarContext.Provider value={{produto, setData, removerProduto}}>
         {children}
      </CriarContext.Provider>
   )
};