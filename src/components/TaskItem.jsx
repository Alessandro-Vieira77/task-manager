import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdOutlineDone } from "react-icons/md";
import { RiShareBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { tv } from "tailwind-variants";

import Button from "./Button";

const taskItem = tv({
  base: "flex  justify-between w-full rounded-lg p-3 text-sm",
  variants: {
    status: {
      done: "bg-[#00ADB5]/10 text-[#00ADB5]",
      in_progress: "bg-[#FFAA04]/10 text-[#FFAA04]",
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
      in_progress: "bg-[#FFAA04] ",
      notStaged: "bg-[#818181]/40",
    },
  },
  defaultVariants: {
    status: "notStaged",
  },
});

function TaskItem({ task }) {
  return (
    <div className={taskItem({ status: task?.status })}>
      <div className="flex items-center gap-2">
        <label className={box({ status: task?.status })}>
          <input
            type="checkbox"
            checked={true}
            className="absolute h-full w-full cursor-pointer opacity-0"
            readOnly
          />
          <span>
            {task?.status === "done" && <MdOutlineDone size={16} color="#FFF" />}
            {task?.status === "in_progress" && (
              <AiOutlineLoading3Quarters size={16} className="animate-spin" color="#FFF" />
            )}
          </span>
        </label>
        <p className="text-sm font-medium">{task?.title}</p>
      </div>
      <div className="flex items-center">
        <Button color="secundary">
          <FaRegTrashCan size={16} />
        </Button>
        <Link to={`/datail/${task?.id}`}>
          <RiShareBoxFill size={16} />
        </Link>
      </div>
    </div>
  );
}

export default TaskItem;
