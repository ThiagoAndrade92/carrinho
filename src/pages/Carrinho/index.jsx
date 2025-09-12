import { Btn } from '../../components/Btn';
import style from './Carrinho.module.css';

export const Carrinho = () => {

   return (
      <div className={`${style.tabela}`}>
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
               <tr>
                  <td>bolo</td>
                  <td>R$ 30</td>
                  <td>
                     <Btn>
                        -
                     </Btn>
                     3
                     <Btn>
                        +
                     </Btn>
                  </td>
                  <td>90</td>
               </tr>
            </tbody>
            <tfoot>
               <tr>
                  <td colSpan={3}>TOTAL</td>
                  <td>00</td>
               </tr>
            </tfoot>
         </table>
      </div>
   )
};