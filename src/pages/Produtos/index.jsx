//Css
import style from './Produtos.module.css';

//Hook
import { useFetch } from '../../hook/UseFetch';

//Components
import { Btn } from '../../components/Btn';
import { MeuLink } from '../../components/MeuLink';

//Context
import { useCarrinhoContext } from '../../hook/useCarrinhoContext';

//url
const urlProduto = 'http://localhost:3000/Produtos';

//image
import imgPadrao from '../../assets/images/imagem-padrao.png'

export const Produtos = () => {
   
   const { data: produto, loading, error } = useFetch(urlProduto);
   
   const { addProduto, carrinho, sucesso } = useCarrinhoContext();
   
   const total = carrinho.reduce((acc, p) => acc + p.qtd, 0 );
   
   return (
      <div className='container'>
         <div className={`${style.sucesso} ${sucesso ? style.active : ''}`}>
                     <p>Produto adicionado!</p>
                  </div>
         <div className={`${style.produtos}`}>
            <h1>Produtos</h1>
            <ul>
               {error && <p>{error}</p>}
               {loading && <p>Carregando dados...</p>}
               {produto && produto.map((p) => (
                  <li key={p.id}>
                     <div className={`${style.img}`} style={{ backgroundImage: `url(${p.img || imgPadrao})` }}>
                     </div>
                     {p.nome} - R$: {p.preco}
                     <Btn onClick={() => addProduto(p)}>
                        Adicionar
                     </Btn>
                  </li>
               ))}
            </ul>

            <footer className={`${style.footer} ${carrinho.length === 0 ? '' : style.active}`}>
               {carrinho.length === 0 ? '' : 

<MeuLink to={'/carrinho'}>
                     <div className={`${style.qtd}`}>{total}</div>
                     Ver carrinho
                  </MeuLink>
               }
            </footer>

         </div>
      </div>
   )
}