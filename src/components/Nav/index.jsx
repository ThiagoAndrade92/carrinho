//Components
import { MeuLink } from '../MeuLink';

//Css
import style from './Nav.module.css';

export const Nav = () => {
   return (
      <nav className={`${style.nav}`}>
         <MeuLink to={'/adicionarProdutos'} >
            Adicionar produtos
         </MeuLink>

         <MeuLink to={'/'}>
            Produtos
         </MeuLink>

         <MeuLink to={'/removerProdutos'}>
            Remover produtos
         </MeuLink>
      </nav>
   )
}