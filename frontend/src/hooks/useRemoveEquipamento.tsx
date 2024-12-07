import { removeEquipamento } from "@/services/equipamentos";
import { useMutation } from "@tanstack/react-query";

export function useRemoveEquipamento(
  onSuccess: () => void,
  onError: () => void
) {
  const { mutate, isPending } = useMutation({
    mutationFn: (id: string) => removeEquipamento(id),
    onSuccess,
    onError,
  });

  return { mutate, isPending };
}
