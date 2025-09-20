//Css
import style from './Login.module.css';

//Components
import { MeuLink } from '../../components/MeuLink'

export const Login = () => {



   return (
      <div>
         <h1>Login</h1>
         <p>Não possui uma conta? <MeuLink to={'/cadastrar'}>cadastre-se</MeuLink></p>
      </div>
   )
};