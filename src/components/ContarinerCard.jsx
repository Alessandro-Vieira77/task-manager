import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsListTask } from "react-icons/bs";
import { FaGlassWaterDroplet } from "react-icons/fa6";
import { GrTask } from "react-icons/gr";

import TaskCard from "./TaskCard";
function ContainerCard() {
  return (
    <div className="flex w-full flex-col gap-8 lg:flex-row">
      <TaskCard>
        <div className="flex items-center gap-1">
          <BsListTask size={24} color="#00ADB5" />
          <p className="text-3xl font-semibold">5</p>
        </div>
        <p className="text-center text-[#818181]">Tareas Disponiveís</p>
      </TaskCard>
      <TaskCard>
        <div className="flex items-center gap-1">
          <GrTask size={24} color="#00ADB5" />
          <p className="text-3xl font-semibold">5</p>
        </div>
        <p className="text-center text-[#818181]">Tarefas concluídas</p>
      </TaskCard>
      <TaskCard>
        <div className="flex items-center gap-1">
          <AiOutlineLoading3Quarters size={24} color="#00ADB5" className="animate-spin" />
          <p className="text-3xl font-semibold">5</p>
        </div>
        <p className="text-center text-[#818181]">Tarefas em andamento</p>
      </TaskCard>
      <TaskCard>
        <div className="flex items-center gap-1">
          <FaGlassWaterDroplet size={24} color="#00ADB5" />
          <p className="text-3xl font-semibold">5</p>
        </div>
        <p className="text-center text-[#818181]">Água</p>
      </TaskCard>
    </div>
  );
}
export default ContainerCard;
