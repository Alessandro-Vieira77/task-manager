import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { mutationKey } from "../key/mutation";
import { queryKey } from "../key/query";
import api from "../lib/axios";

function useDeletTask() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: mutationKey.deleteTask(),
    mutationFn: async id => {
      const { data: task } = await api.delete(`/tasks/${id}`);

      queryClient.setQueryData(queryKey.getTasks(), old => {
        return old.filter(task => task.id !== id);
      });

      return task;
    },
    onSuccess: () => {
      toast.success("Tarefa deletada com sucesso");
    },
    onError: error => {
      toast.error("Erro ao deletar tarefa");
      console.log(error);
    },
  });
}

export default useDeletTask;
