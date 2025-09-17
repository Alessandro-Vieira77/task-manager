import { useMutation, useQueryClient } from "@tanstack/react-query";

import { mutationKey } from "../key/mutation";
import { queryKey } from "../key/query";
import api from "../lib/axios";

function useUpdateTask(id, route) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: mutationKey.updateTask(id),
    mutationFn: async data => {
      const { data: taskUpdate } = await api.patch(`${route}${id}`, {
        status: data?.status,
        title: data?.title?.trim(),
        time: data?.time,
        description: data?.description?.trim(),
      });

      queryClient.invalidateQueries({ queryKey: queryKey.getTasks(id) });

      queryClient.setQueryData(queryKey.getTasks("taskId"), old => {
        return old?.map(task => {
          if (task.id === id) {
            return {
              ...task,
              ...taskUpdate,
            };
          }
          return task;
        });
      });

      return taskUpdate;
    },
  });
}

export default useUpdateTask;
