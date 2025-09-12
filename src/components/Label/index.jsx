

export const Label = ({children, ...props}) => {

   return (
      <>
      <label {...props}>
         {children}
      </label>
      </>
   )
};