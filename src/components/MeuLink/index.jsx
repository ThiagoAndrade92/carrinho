//React router
import { NavLink } from "react-router-dom";


export const MeuLink = ({children, to, ...props}) => {

   return (
      <>
         <NavLink  {...props} to={to}>
            {children}
         </NavLink>
      </>
   )
};