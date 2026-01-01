export interface CartItem {
   id: number;
   nome: string;
   preco: number;
   img: string;
};

export interface CarrinhoItem {
  id: number;
  title: string;
  price: number;
  img: string;
  qtd: number;
}

export interface Produto {
  id: number;
  title: string;
  price: number;
  img: string;
}

export interface CarrinhoContextType {
  carrinho: CarrinhoItem[];
  addProduto: (p: CarrinhoItem) => Promise<void>;
  removerUm: (p: CarrinhoItem) => Promise<void>;
  zerarCarrinho: () => Promise<void>;
  sucesso: boolean;
}

export interface ProdutoContextType {
  produto: Produto[];
  setData: React.Dispatch<React.SetStateAction<Produto[]>>;
  removerProduto: (id: number) => Promise<void>;
  remover: boolean;
}