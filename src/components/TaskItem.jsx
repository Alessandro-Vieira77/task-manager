import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
import { tv } from "tailwind-variants";

const taskItem = tv({
  base: "w-full rounded-lg p-3 text-sm",
  variants: {
    status: {
      completed: "bg-[#00ADB5]/10 text-[#00ADB5]",
      pending: "bg-[#FFAA04]/10 text-[#FFAA04]",
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
      completed: "bg-[#00ADB5]",
      pending: "bg-[#FFAA04] ",
      notStaged: "bg-[#818181]",
    },
  },
  defaultVariants: {
    status: "notStaged",
  },
});

function TaskItem() {
  return (
    <div className={taskItem({ status: "completed" })}>
      <div className="flex items-center gap-2">
        <label className={box({ status: "completed" })}>
          <input
            type="checkbox"
            checked={true}
            className="absolute h-full w-full cursor-pointer opacity-0"
          />
          <span></span>
        </label>
        <p className="text-sm font-medium">aprendendo React</p>
      </div>
    </div>
  );
}

export default TaskItem;
