//React router
import React from "react";
import { NavLink } from "react-router-dom";

type MeuLinkProps = React.ComponentProps<typeof NavLink>;


export const MeuLink = ({children, to, ...props}: MeuLinkProps) => {

   return (
      <>
         <NavLink  {...props} to={to}>
            {children}
         </NavLink>
      </>
   )
};