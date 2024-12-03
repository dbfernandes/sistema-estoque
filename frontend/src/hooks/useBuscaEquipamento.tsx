import { buscaEquipamento } from "@/services/equipamentos";
import { useQuery } from "@tanstack/react-query";

export function useBuscaEquipamento(id: string) {
  const {
    data: equipamento,
    isError,
    isPending,
  } = useQuery({
    queryKey: ["buscaEquipamento"],
    queryFn: () => buscaEquipamento(id),
  });

  return {
    equipamento: equipamento,
    isError,
    isPending,
  };
}
