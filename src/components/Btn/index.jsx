

export const Btn = ({ children, ...props }) => {

   return (
      <button {...props}>
         {children}
      </button>
   )
};