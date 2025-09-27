//React
import { useEffect, useState } from "react";

//Components
import { Input } from "../../components/Input"
import { Label } from "../../components/Label"

//Css
import style from './AdicionarProduto.module.css';

//Hook
import { useFetch } from "../../hook/UseFetch";

//Context
import { useProdutoContext } from "../../hook/useProdutoContext";

//url
const urlProduto = 'http://localhost:3000/Produtos';

export const AdicionarProduto = () => {

   const { setData } = useProdutoContext();

   const [nome, setNome] = useState('');
   const [preco, setPreco] = useState('');
   const [success, setSuccess] = useState(false);

   const handleSubmit = async (e) => {
      e.preventDefault();

      const novoProduto = {
         nome,
         preco
      };

      if (!nome.trim() || isNaN(preco) || Number(preco) <= 0) return;

      const res = await fetch(urlProduto, {
         method: "POST",
         headers: {
            "Content-type": "application/json"
         },
         body: JSON.stringify(novoProduto)
      });

      const produtoAdicionado = await res.json();
      setData(prevProduto => [...prevProduto, produtoAdicionado]);

      setSuccess(true);

      setNome('');
      setPreco('');
   };

   useEffect(() => {
      if (success) {
         const timer = setTimeout(() => {
            setSuccess(false);
         }, 3000);

         return () => clearTimeout(timer);

      }
   }, [success]);
  
   return (
      <div className={style.form}>
         <div className={`${style.success} ${success ? style.active : ''}`}>
            <p>Produto criado!</p>
         </div>
         <form onSubmit={handleSubmit}>
            <h1>Adicionar produto</h1>
            <Label>
               Nome:
               <Input
                  type='text'
                  placeholder='Digite o nome do produto'
                  value={nome}
                  onChange={e => setNome(e.target.value)}
               />
            </Label>
            <Label>
               Preço:
               <Input
                  type='number'
                  placeholder='Digite o preço do produto'
                  value={preco}
                  onChange={e => setPreco(e.target.value)}
               />
            </Label>
            <Input type='submit' value='Criar' />
         </form>
      </div>
   )
}