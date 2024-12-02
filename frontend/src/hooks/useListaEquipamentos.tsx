import { listaEquipamentos } from "@/services/equipamentos";
import { useQuery } from "@tanstack/react-query";

export function useListaEquipamentos() {
  const {
    data: equipamentos,
    isError,
    isPending,
  } = useQuery({
    queryKey: ["listaEquipamentos"],
    queryFn: () => listaEquipamentos(),
  });

  return {
    equipamentos: equipamentos ?? [],
    isError,
    isPending,
  };
}
