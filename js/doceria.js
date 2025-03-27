// VARIÁVEIS
const btnComprar = document.querySelectorAll('.btn');
const btnCarrinho = document.querySelector('.btn-carrinho');
const divCarrinho = document.querySelector('.carrinho');
const divApagar = document.querySelector('.apagar');
const totalElement = divCarrinho.querySelector('.total'); 
const btnFinalizarCompra = document.querySelector('.btn-finalizar-compra'); 
let carrinhoVazio = true; 

// ABRIR OU FECHAR O BOTÃO DO CARRINHO SOMENTE SE NÃO ESTIVER VAZIO
btnCarrinho.addEventListener('click', () => {
    const itensCarrinho = divCarrinho.querySelectorAll('tbody tr'); 
    if (itensCarrinho.length > 0) {
        divCarrinho.classList.toggle('active'); 
        divApagar.classList.toggle('none'); 
    }
});

// FUNÇÃO PARA ATUALIZAR O TOTAL
const atualizarTotal = () => {
    const valores = divCarrinho.querySelectorAll('.valor'); 
    let total = 0;

    valores.forEach((valor) => {
        total += parseFloat(valor.textContent); 
    });

    totalElement.textContent = total.toFixed(2); 
};

// ADICIONAR AO CARRINHO
const adicionarAoCarrinho = () => {
    btnComprar.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const btnAtual = e.target;
            const cardProduto = btnAtual.closest('.card-produto');
            const img = cardProduto.querySelector('.img-produto img').src;
            const sabor = cardProduto.querySelector('.sabor').textContent;
            const preco = cardProduto.querySelector('.preco').textContent;

            
            const itensCarrinho = divCarrinho.querySelectorAll('.dados-carrinho');
            let itemEncontrado = false;

            itensCarrinho.forEach((item) => {
                const saborExistente = item.querySelector('.sabor-carrinho').textContent;
                if (saborExistente === sabor) {
                    
                    const quantidadeDiv = item.querySelector('.caixa-quantidade');
                    let quantidade = parseInt(quantidadeDiv.textContent);
                    quantidade++;
                    quantidadeDiv.textContent = quantidade;

                    const valorTotal = item.closest('tr').querySelector('.valor');
                    valorTotal.textContent = (quantidade * parseFloat(preco)).toFixed(2); // Atualiza o preço total
                    itemEncontrado = true;
                }
            });

            if (!itemEncontrado) {
                
                const novoItem = `
                    <tr>
                        <td>
                            <div class="dados-carrinho">
                                <img src="${img}" alt="${sabor}" class="img-carrinho">
                                <p class="sabor-carrinho">${sabor}</p>
                            </div>
                        </td>
                        <td>
                            <p class="cifrao">R$ <span class="preco-carrinho">${preco}</span></p>
                        </td>
                        <td>
                            <div class="quantidade-carrinho">
                                <button class="menos">-</button>
                                <div class="caixa-quantidade">1</div>
                                <button class="mais">+</button>
                            </div>
                        </td>
                        <td>
                            <p class="cifrao">R$ <span class="valor">${preco}</span></p>
                        </td>
                    </tr>
                `;
                divCarrinho.querySelector('tbody').innerHTML += novoItem; 

                
                adicionarEventosQuantidade();
            }

            atualizarTotal(); 

            if (carrinhoVazio) {
               
                divCarrinho.classList.add('active');
                divApagar.classList.add('none');
                carrinhoVazio = false; 
            }
        });
    });
};

// FUNÇÃO PARA ALTERAR QUANTIDADE
const adicionarEventosQuantidade = () => {
    const btnMais = document.querySelectorAll('.mais');
    const btnMenos = document.querySelectorAll('.menos');

    btnMais.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const quantidadeDiv = e.target.closest('.quantidade-carrinho').querySelector('.caixa-quantidade');
            const valorTotal = e.target.closest('tr').querySelector('.valor');
            const preco = parseFloat(e.target.closest('tr').querySelector('.preco-carrinho').textContent);

            let quantidade = parseInt(quantidadeDiv.textContent);
            quantidade++;
            quantidadeDiv.textContent = quantidade;

            valorTotal.textContent = (quantidade * preco).toFixed(2); 

            atualizarTotal(); 
        });
    });

    btnMenos.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const quantidadeDiv = e.target.closest('.quantidade-carrinho').querySelector('.caixa-quantidade');
            const valorTotal = e.target.closest('tr').querySelector('.valor');
            const preco = parseFloat(e.target.closest('tr').querySelector('.preco-carrinho').textContent);
            const linhaItem = e.target.closest('tr'); // Linha do item no carrinho

            let quantidade = parseInt(quantidadeDiv.textContent);
            if (quantidade > 1) {
                quantidade--; 
                quantidadeDiv.textContent = quantidade;

                valorTotal.textContent = (quantidade * preco).toFixed(2); 
            } else {
                
                linhaItem.remove();
            }

            atualizarTotal();

            const itensCarrinho = divCarrinho.querySelectorAll('tbody tr');
            if (itensCarrinho.length === 0) {
                divCarrinho.classList.remove('active'); 
                divApagar.classList.remove('none');
                carrinhoVazio = true; 
            }
        });
    });
};

// EVENTO PARA FINALIZAR COMPRA
btnFinalizarCompra.addEventListener('click', () => {
    alert('Obrigado por finalizar sua compra! Agradecemos por escolher nossos produtos. ❤️'); 
    divCarrinho.querySelector('tbody').innerHTML = ''; 
    atualizarTotal(); 
    divCarrinho.classList.remove('active');
    divApagar.classList.remove('none'); 
    carrinhoVazio = true; 
});


adicionarAoCarrinho();