//Css
import style from './Cadastrar.module.css';

//React
import { useState } from 'react';

//Components
import { Input } from '../../components/Input';
import { Label } from '../../components/Label';

//Context
import { useUsuarioContext } from '../../hook/useUsuarioContext';

export const Cadastrar = () => {
   const [nome, setNome] = useState('');
   const [email, setEmail] = useState('');
   const [senha, setSenha] = useState('');
   const [confirmarSenha, setConfirmarSenha] = useState('');
   const [erro, setErro] = useState('');

   const { addUsuario } = useUsuarioContext();

   const handleSubmite = async (e) => {
      e.preventDefault();

      const validarCampo = () => {
         let valido = true

         if (!nome) {
            valido = false;
         } else if (nome.length < 3) {
            valido = false;
         }
         if (!email) {
            valido = false;
         }

         if (!senha) {
            valido = false;
         } else if (senha.length < 6) {
            valido = false;
         }
         if (!confirmarSenha) {
            valido = false;
         } else if (confirmarSenha !== senha) {
            valido = false;
         }

         return valido
      };

      if (validarCampo()) {
         const novoUsuario = {
            nome,
            email,
            senha: confirmarSenha
         }

         addUsuario(novoUsuario)

      } else {
         alert('Dados invalidos!')

      }



   };

   return (
      <div className={`${style.form}`}>
         <form onSubmit={handleSubmite}>
            <h1>Cadastrar</h1>
            <fieldset>
               <legend>Preencha todos os campos</legend>

               <div className={`${style.label}`}>
                  <Label>
                     Nome:
                  </Label>
               </div>
               <div className={`${style.input}`}>
                  <Input
                     type='text'
                     value={nome}
                     onChange={e => setNome(e.target.value)}
                     placeholder='Digite seu nome'
                  />
               </div>
               <span className={`${style.erro}`}>{erro}</span>{/* nome */}

               <div className={`${style.label}`} >
                  <Label>
                     Email:
                  </Label>
               </div>
               <div className={`${style.input}`}>
                  <Input
                     type='email'
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                     placeholder='Digite seu email'
                  />
               </div>
               <span className={`${style.erro}`}>{erro}</span>{/* email */}

               <div className={`${style.label}`}>
                  <Label>
                     Senha:
                  </Label>
               </div>
               <div className={`${style.input}`}>
                  <Input
                     type='password'
                     value={senha}
                     onChange={e => setSenha(e.target.value)}
                     placeholder='Crie sua senha'
                  />
                  <span className={`${style.toggle}`}>mostrar</span>
               </div>
               <span className={`${style.erro}`}>{erro}</span>{/* senha */}

               <div className={`${style.label}`}>
                  <Label>
                     Confirmar senha:
                  </Label>
               </div>
               <div className={`${style.input}`}>
                  <Input
                     type='password'
                     value={confirmarSenha}
                     onChange={e => setConfirmarSenha(e.target.value)}
                     placeholder='Confirme sua senha'
                  />
                  <span className={`${style.toggle}`}>mostrar</span>
               </div>
               <span className={`${style.erro}`}>{erro}</span>{/* confirmar senha */}

               <Input
                  type='submit'
                  value='Enviar'
               />
            </fieldset>
         </form>
      </div>
   )
};