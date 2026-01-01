// Css
import style from './RemoverProduto.module.css';

// Context
import { useProdutoContext } from '../../hook/useProdutoContext';

// Component
import { Btn } from "../../components/Btn";

// Image
import imgPadrao from '../../assets/images/imagem-padrao.png';

// Types
import { Produto } from '../../types/types';

export const RemoverProduto = () => {
  const { removerProduto, produto, remover } = useProdutoContext();

  return (
    <div className={`${style.remover_produto}`}>
      <div className={`${style.remover} ${remover ? style.active : ''}`}>
        <p>Produto removido!</p>
      </div>

      <h1>Remover Produtos</h1>

      <ul>
        {produto &&
          produto.map((p: Produto) => (
            <li key={p.id}>
              <div
                className={`${style.img}`}
                style={{ backgroundImage: `url(${p.img || imgPadrao})` }}
              ></div>
              {p.title} - R$: {p.price}
              <Btn onClick={() => removerProduto(p.id)}>Remover</Btn>
            </li>
          ))}
      </ul>
    </div>
  );
};
