import { useEffect, useState } from "react";


export const useFetch = (url) => {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] =useState(null);

   useEffect(() => {

      if(!url) return;

      const request = async () => {
         try {
            setLoading(true);

            const res = await fetch(url);

            const json = await res.json();

            setData(json);
         } catch {
            setError('Houve um erro ao Servidor');
         } finally {
            setLoading(false);
         }
      }
      request();
   }, [url])

   return { data, setData, loading, error }
};