//React
import { useState } from "react";

//Components
import { Input } from "../../components/Input"
import { Label } from "../../components/Label"

//Css
import style from './AdicionarProduto.module.css';

export const AdicionarProduto = () => {

   const [nome, setNome] = useState('');
   const [preco, setPreco] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();

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