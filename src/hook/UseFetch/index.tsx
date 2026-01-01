import { useEffect, useState } from "react";

interface UseFetchResult<T> {
  data: T;
  setData: React.Dispatch<React.SetStateAction<T>>;
  loading: boolean;
  error: string | null;
}

export function useFetch<T>(url?: string): UseFetchResult<T> {
  const [data, setData] = useState<T>([] as unknown as T);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!url) return;

    const request = async () => {
      try {
        setLoading(true);

        const res = await fetch(url);
        if (!res.ok) throw new Error("Erro ao buscar dados");

        const json: T = await res.json();
        setData(json);
      } catch {
        setError("Houve um erro no servidor");
      } finally {
        setLoading(false);
      }
    };

    request();
  }, [url]);

  return { data, setData, loading, error };
}
