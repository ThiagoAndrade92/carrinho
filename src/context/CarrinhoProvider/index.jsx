import { createContext, useReducer } from "react";


export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
   const carrinhoInicial = [];

   const carrinhoReducer = (state, action) => {
      switch (action.type) {
         case 'ADD_PRODUTO':
            const jaExiste = state.find((p) => p.id === action.payload.id);
            if (jaExiste) {
               return state.map((p) =>
                  p.id === action.payload.id
                     ? { ...p, qtd: p.qtd + 1 }
                     : p
               );
            };

            return [...state, { ...action.payload, qtd: 1 }];
         case "REMOVER_UM":
            const existe = state.find((p) => p.id === action.payload);
            if (!existe) return state;

            if (existe.qtd > 1) {
               return state.map((p) =>
                  p.id === action.payload
                     ? { ...p, qtd: p.qtd - 1 }
                     : p
               )
            }
            return state.filter((p) => p.id !== action.payload);

         case "RESETAR":
            return [];
         default:
            return state
      }

   };

   const [carrinho, dispatchCarrinho] = useReducer(carrinhoReducer, carrinhoInicial);

   return (
      <CarrinhoContext.Provider value={{ carrinho, dispatchCarrinho }}>
         {children}
      </CarrinhoContext.Provider>
   )
};