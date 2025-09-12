import { useEffect, useState } from "react";


export const useFetch = (url) => {
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] =useState(null);

   useEffect(() => {
      const request = async () => {
         try {
            setLoading(true);

            const res = await fetch(url);

            const json = await res.json();

            setData(json);

            setLoading(false)
         } catch {
            setError('Houve um erro ao Servidor')
         }
      }
      request();
   }, [url])

   return { data, loading, error }
};