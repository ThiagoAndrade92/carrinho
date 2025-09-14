//React
import { useState } from "react";

//Components
import { Input } from "../../components/Input"
import { Label } from "../../components/Label"

//Css
import style from './AdicionarProduto.module.css';
import { useFetch } from "../../hook/UseFetch";

//url
const url = 'http://localhost:3000/Produtos';

export const AdicionarProduto = () => {

   const { setData } = useFetch();

   const [nome, setNome] = useState('');
   const [preco, setPreco] = useState('');

   const handleSubmit = async (e) => {
      e.preventDefault();

      const novoProduto = {
         nome,
         preco
      };

      const res = await fetch(url, {
         method: "POST",
         headers: {
            "Content-type": "application/json"
         },
         body: JSON.stringify(novoProduto)
      });

      const produtoAdicionado = await res.json();
      setData(prevProduto => [ ...prevProduto, produtoAdicionado])

      setNome('');
      setPreco('');
   };

   return (
      <div className={style.center}>
      <form onSubmit={handleSubmit}  className={`${style.form}`}>
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