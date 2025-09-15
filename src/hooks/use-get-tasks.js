import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { queryKey } from "../key/query";
import api from "../lib/axios";

function useGetTasks(id) {
  return useQuery({
    queryKey: queryKey.getTasks(id),
    queryFn: async () => {
      const { data: tasks } = await api.get(`/tasks/${id}`);
      return tasks;
    },
    onError: error => {
      console.log(error);
      toast.error("Erro ao buscar tarefas");
    },
  });
}

export default useGetTasks;
