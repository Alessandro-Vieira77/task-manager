import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

import { mutationKey } from "../key/mutation";
import { queryKey } from "../key/query";
import api from "../lib/axios";
function useUpdate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: mutationKey.addTask(),
    mutationFn: async data => {
      const { data: task } = await api.post("/tasks", {
        id: uuidv4(),
        title: data?.title.trim(),
        time: data?.time,
        description: data?.description.trim(),
        status: "notStaged",
      });

      queryClient.setQueryData(queryKey.getTasks("taskId"), old => {
        return [...old, task];
      });
      return task;
    },
    onSuccess: () => {
      toast.success("Tarefa adicionada com sucesso");
    },
    onError: error => {
      toast.error("Erro ao adicionar tarefa");
      console.log(error);
    },
  });
}

export default useUpdate;
