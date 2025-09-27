🛒 Loja de Bolos (React + Context API)

Aplicação de e-commerce simples feita em React, simulando uma loja de bolos 🍰.
Permite cadastrar produtos, removê-los, adicionar ao carrinho, alterar quantidades e finalizar a compra.

O projeto foi desenvolvido para estudo de Context API, hooks customizados e consumo de API com json-server.
***
✨ Funcionalidades

📦 Adicionar produto com nome e preço.

❌ Remover produto da lista.

🛒 Carrinho de compras com:

Adição e remoção de itens.

Alteração de quantidade.

Cálculo do valor total.

Limpeza do carrinho.

Finalização da compra com mensagem de sucesso.

✅ Feedback visual de ações (produto criado, adicionado, removido, compra finalizada).

📱 Layout responsivo com menu hambúrguer no mobile.
***
🛠️ Tecnologias

React (Vite)

React Router DOM

Context API + Hooks customizados

json-server para simulação de API REST

CSS Modules para estilização
***
🚀 Como rodar o projeto
1. Clonar o repositório
git clone https://github.com/seu-usuario/loja-react.git
cd loja-react

2. Instalar dependências
npm install

3. Rodar o servidor fake (json-server)
npx json-server --watch db.json --port 3000


O servidor estará em:
👉 http://localhost:3000/Produtos
👉 http://localhost:3000/Carrinho

4. Rodar a aplicação React
npm run dev


Acesse em: http://localhost:5173 (ou a porta que o Vite indicar).
***
📂 Estrutura do projeto
src/
 ├── components/      # Componentes reutilizáveis (Btn, Input, Label, Nav, MeuLink)
 ├── context/         # Contextos (ProdutoProvider, CarrinhoProvider)
 ├── hook/            # Hooks customizados (useFetch, useCarrinhoContext, useProdutoContext)
 ├── pages/           # Páginas (Produtos, AdicionarProduto, RemoverProduto, Carrinho)
 ├── assets/          # Imagens (produtos + padrão)
 ├── App.jsx          # Definição das rotas
 └── main.jsx         # Configuração inicial e Providers
 ***
 👨‍💻 Autor

Thiago Silva