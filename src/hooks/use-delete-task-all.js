import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { mutationKey } from "../key/mutation";
import { queryKey } from "../key/query";
import api from "../lib/axios";
function useDeleteTaskAll() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: mutationKey.deleteTaskAll(),

    mutationFn: async () => {
      const { data: tasks } = await api.get("/tasks");

      const newTasks = tasks.map(async task => {
        const { data: tasksdelete } = await api.delete(`/tasks/${task.id}`);
        return tasksdelete;
      });

      queryClient.setQueryData(queryKey.getTasks(), () => {
        return newTasks;
      });

      return newTasks;
    },
    onSuccess: value => {
      if (value.length === 0) {
        toast.error("Nenhuma tarefa para deletar");
        return;
      }
      toast.success("Tarefas deletadas com sucesso");
    },
    onError: error => {
      toast.error("Erro ao deletar tarefas");
      console.log(error);
    },
  });
}

export default useDeleteTaskAll;
