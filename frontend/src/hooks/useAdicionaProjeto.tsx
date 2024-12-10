import { adicionaProjeto } from "@/services/projeto";
import { CreateProjetoDto } from "@/types/projeto";
import { useMutation } from "@tanstack/react-query";

export function useAdicionaProjeto(onSuccess: () => void, onError: () => void) {
  const { mutate, isPending } = useMutation({
    mutationFn: (projeto: CreateProjetoDto) => adicionaProjeto(projeto),
    onSuccess,
    onError,
  });

  return {
    mutate,
    isPending,
  };
}
