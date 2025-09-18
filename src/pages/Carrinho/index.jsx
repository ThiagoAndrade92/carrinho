///Css
import style from './Carrinho.module.css';

//Component
import { Btn } from '../../components/Btn';

//React
import { useCarrinhoContext } from '../../hook/useCarrinhoContext';
import { useMemo } from 'react';


export const Carrinho = () => {

   const {carrinho, addProduto, removerUm, zerarCarrinho} = useCarrinhoContext();

   const total = useMemo(() => {
      return carrinho.reduce((acc, p) => acc + p.preco * p.qtd, 0);
   }, [carrinho])

if (carrinho.length === 0) return <p>Seu carrinho está vazio</p>;

const finalizaCompra = () => {
   alert('Compra finalizada, agradecemos a preferencia 🥰.');

};

   return (
   
      <div className={`${style.tabela}`}>
         <h1>Carrinho</h1>
         <table>
            <thead>
               <tr>
                  <th>Nome</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Total</th>
               </tr>
            </thead>
            <tbody>
               {carrinho && carrinho.map((p) => (
                  <tr key={p.id}>
                     <td>{p.nome}</td>
                     <td>{p.preco}</td>
                     <td>
                        <Btn className={`${style.operador}`}
                        onClick={() => removerUm(p)}
                        >
                           -
                        </Btn>
                        <span>{p.qtd}</span>
                        <Btn className={`${style.operador}`} 
                        onClick={() => addProduto(p)}
                        >
                           +
                        </Btn>
                     </td>
                     <td>{p.preco * p.qtd}</td>
                  </tr>
               ))}
         </tbody>
         <tfoot>
            <tr>
               <td colSpan={3}>TOTAL</td>
               <td>{total}</td>
            </tr>
         </tfoot>
      </table>

      <Btn className={`${style.zerar}`} onClick={() => zerarCarrinho()} >Limpar Carrinho</Btn>

      <Btn onClick={() => finalizaCompra()}>
         Finalzar Compra
      </Btn>
      </div >
   )
};