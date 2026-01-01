import React from "react";

type BtnProps = React.ComponentProps<'button'>;

export const Btn = ({ children, ...props }:BtnProps) => {

   return (
      <button {...props}>
         {children}
      </button>
   )
};