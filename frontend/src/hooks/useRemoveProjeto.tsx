import { removeProjeto } from "@/services/projeto";
import { useMutation } from "@tanstack/react-query";

export function useRemoveProjeto(onSuccess: () => void, onError: () => void) {
  const { mutate, isPending } = useMutation({
    mutationFn: removeProjeto,
    onSuccess,
    onError,
  });

  return { mutate, isPending };
}
