import { adicionaEquipamento } from "@/services/equipamento";
import { CreateEquipamentoDto } from "@/types/equipamento";
import { useMutation } from "@tanstack/react-query";

export function useAdicionaEquipamento(
  onSuccess: () => void,
  onError: () => void
) {
  const { mutate, isPending } = useMutation({
    mutationFn: (equipamento: CreateEquipamentoDto) =>
      adicionaEquipamento(equipamento),
    onSuccess,
    onError,
  });

  return { mutate, isPending };
}
