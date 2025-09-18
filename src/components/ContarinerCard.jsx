import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsListTask } from "react-icons/bs";
import { FaGlassWaterDroplet } from "react-icons/fa6";
import { GrTask } from "react-icons/gr";

import TaskCard from "./TaskCard";
function ContainerCard({ percentageWater, totalTasks, totalDoneTasks, totalInProgressTasks }) {
  return (
    <div className="flex w-full flex-col gap-8 lg:flex-row">
      <TaskCard>
        <div className="flex items-center gap-1">
          <BsListTask size={24} color="var(--color-brand-primary)" />
          <p className="text-3xl font-semibold">{totalTasks}</p>
        </div>
        <p className="text-brand-text-gray text-center">Tareas Disponiveís</p>
      </TaskCard>
      <TaskCard>
        <div className="flex items-center gap-1">
          <GrTask size={24} color="var(--color-brand-primary)" />
          <p className="text-3xl font-semibold">{totalDoneTasks}</p>
        </div>
        <p className="text-brand-text-gray text-center">Tarefas concluídas</p>
      </TaskCard>
      <TaskCard>
        <div className="flex items-center gap-1">
          <AiOutlineLoading3Quarters
            size={24}
            color="var(--color-brand-primary)"
            className="animate-spin"
          />
          <p className="text-3xl font-semibold">{totalInProgressTasks}</p>
        </div>
        <p className="text-brand-text-gray text-center">Tarefas em andamento</p>
      </TaskCard>
      <TaskCard>
        <div className="flex items-center gap-1">
          <FaGlassWaterDroplet size={24} color="var(--color-brand-primary)" />
          <p className="text-3xl font-semibold">{percentageWater}%</p>
        </div>
        <p className="text-brand-text-gray text-center">Água</p>
      </TaskCard>
    </div>
  );
}
export default ContainerCard;
