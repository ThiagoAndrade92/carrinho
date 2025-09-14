import { createContext, useReducer } from "react";


export const CriarContext = createContext();

export const CriarProdutoProvider = ({children}) => {

   const produtoInicial = [];

   const criarProdutoReducer = (state, action) => {
      switch (action.type) {
         case "ADD_PRODUTO":
            return
         default:
            return state
      }

   };

   const [produto, dispatchProduto] = useReducer(criarProdutoReducer, produtoInicial)

   return (
      <CriarContext.Provider value={{produto, dispatchProduto}}>
         {children}
      </CriarContext.Provider>
   )
};