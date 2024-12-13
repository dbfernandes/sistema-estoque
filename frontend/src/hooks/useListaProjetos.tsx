import { listaProjetos } from "@/services/projeto";
import { useQuery } from "@tanstack/react-query";

export function useListaProjetos() {
  const { data, isPending, isError } = useQuery({
    queryKey: ["listaProjetos"],
    queryFn: listaProjetos,
  });

  return {
    projetos: data ?? [],
    isPending,
    isError,
  };
}
