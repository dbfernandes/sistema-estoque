import { atualizaEquipamento } from "@/services/equipamentos";
import { UpdateEquipamentoDto } from "@/types/equipamento";
import { useMutation } from "@tanstack/react-query";

export function useAtualizaEquipamento(
  id: string,
  onSuccess: () => void,
  onError: () => void
) {
  const { mutate, isPending } = useMutation({
    mutationFn: (equipamento: UpdateEquipamentoDto) =>
      atualizaEquipamento(id, equipamento),
    onSuccess,
    onError,
  });

  return { mutate, isPending };
}
