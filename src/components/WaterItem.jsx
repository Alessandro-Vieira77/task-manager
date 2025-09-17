import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { MdOutlineDone } from "react-icons/md";
import { tv } from "tailwind-variants";

import useUpdateTask from "../hooks/use-update-task";
import { queryKey } from "../key/query";

const taskItem = tv({
  base: "flex max-w-30  justify-between rounded-lg p-3 text-sm",
  variants: {
    status: {
      done: "bg-[#00ADB5]/10 text-[#00ADB5]",
      notStaged: "bg-[#818181]/10 text-[#818181]",
    },
  },
  defaultVariants: {
    status: "notStaged",
  },
});

const box = tv({
  base: "relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg",
  variants: {
    status: {
      done: "bg-[#00ADB5]",
      notStaged: "bg-[#818181]/40",
    },
  },
  defaultVariants: {
    status: "notStaged",
  },
});

function WaterItem({ task }) {
  const { mutate: updateTask } = useUpdateTask(task?.id, "/water/");

  function getStatus() {
    let status;
    if (task?.status === "notStaged") {
      status = "done";
    }

    if (task?.status === "done") {
      status = "notStaged";
    }

    return status;
  }

  const queryClient = useQueryClient();
  const handleChangeStatus = () => {
    const status = getStatus();

    updateTask(
      { status },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(queryKey.getTasks());
        },
        onError: error => {
          toast.error("Erro ao atualizar tarefa");
          console.log(error);
        },
      },
    );
  };

  return (
    <div className={taskItem({ status: task?.status })}>
      <div className="flex items-center gap-2">
        <label className={box({ status: task?.status })} onClick={handleChangeStatus}>
          <input
            type="checkbox"
            checked={true}
            className="absolute h-full w-full cursor-pointer opacity-0"
            readOnly
          />
          <span>{task?.status === "done" && <MdOutlineDone size={16} color="#FFF" />}</span>
        </label>
        <p className="text-sm font-medium">{task?.title}</p>
      </div>
    </div>
  );
}

export default WaterItem;
