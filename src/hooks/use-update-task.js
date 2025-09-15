import { useMutation } from "@tanstack/react-query";

import { mutationKey } from "../key/mutation";
import api from "../lib/axios";

function useUpdateTask(id) {
  return useMutation({
    mutationKey: mutationKey.updateTask(id),
    mutationFn: async status => {
      const { data: taskUpdate } = await api.patch(`/tasks/${id}`, {
        status: status,
      });

      return taskUpdate;
    },
  });
}

export default useUpdateTask;
