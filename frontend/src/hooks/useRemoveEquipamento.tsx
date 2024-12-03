import { removeEquipamento } from "@/services/equipamentos";
import { useMutation } from "@tanstack/react-query";

export function useRemoveEquipamento(
  onSucess: () => void,
  onError: () => void
) {
  const { mutate, isPending } = useMutation({
    mutationFn: (id: string) => removeEquipamento(id),
  });

  return { mutate, isPending };
}
