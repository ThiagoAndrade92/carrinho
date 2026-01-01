//Components
import { useState } from 'react';
import { MeuLink } from '../MeuLink';

//Css
import style from './Nav.module.css';

export const Nav = () => {

   const [toggle, setToggle] = useState(false);

   const menuHamburger = () => {
      setToggle(!toggle)
   };

   return (
      <>
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

      <nav className={`${style.nav_mobile}`}>

         <div className={`${style.menu}`} onClick={menuHamburger}>
            <div className={`${style.line1} ${toggle ? style.line1Active : ''}`}></div>
            <div className={`${style.line2} ${toggle ? style.line2Active : ''}`}></div>
            <div className={`${style.line3} ${toggle ? style.line3Active : ''}`}></div>
         </div>

         <div className={`${style.link} ${toggle ? style.linkActive : ''}`}>
            <MeuLink to={'/adicionarProdutos'}  onClick={menuHamburger}>
               Adicionar produtos
            </MeuLink>
            <MeuLink to={'/'} onClick={menuHamburger}>
               Produtos
            </MeuLink>
            <MeuLink to={'/removerProdutos'} onClick={menuHamburger}>
               Remover produtos
            </MeuLink>
         </div>
      </nav>
      </>
   )
}