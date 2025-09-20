import { useQuery } from "@tanstack/react-query";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FiMoon } from "react-icons/fi";
import { LuSun } from "react-icons/lu";
import { LuCloudSun } from "react-icons/lu";

import ContainerTask from "../components/ContainerTask";
import Header from "../components/Header";
import Menu from "../components/menu";
import Sidebar from "../components/Sidebar";
import TaskItem from "../components/TaskItem";
import { queryKey } from "../key/query";
import api from "../lib/axios";

function PageTasks() {
  const { data: tasks = [], isPending } = useQuery({
    queryKey: queryKey.getTasks("taskId", "/tasks"),
    queryFn: async () => {
      const response = await api.get("/tasks");
      return response.data;
    },
  });

  if (isPending) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center gap-2">
            <AiOutlineLoading3Quarters className="animate-spin" size={24} />
            <h1 className="text-2xl font-bold">Carregando...</h1>
          </div>
          <p className="text-brand-text-gray text-xs">
            Aguarde, estamos carregando os dados das tarefas
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-background flex min-h-screen w-full">
      <div className="hidden lg:flex">
        <Sidebar />
      </div>

      <div className="flex w-full flex-col gap-6 px-4 pt-8 sm:px-8 lg:pt-16">
        <Menu />
        <Header />
        <ContainerTask>
          <div className="flex flex-col gap-3">
            <h2 className="border-brand-text-gray/20 text-brand-text-gray flex items-center gap-1 border-b-2 pb-2 text-sm font-semibold">
              {" "}
              <LuSun size={20} /> Manhã
            </h2>
            <div className="flex w-full flex-col gap-3">
              {tasks.length === 0 && (
                <p className="text-brand-text-gray text-sm">Sem tarefas no momento</p>
              )}
              {tasks.map(
                task => task?.time === "morning" && <TaskItem key={task?.id} task={task} />,
              )}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="border-brand-text-gray/20 text-brand-text-gray flex items-center gap-1 border-b-2 pb-2 text-sm font-semibold">
              {" "}
              <LuCloudSun size={20} /> Tarde
            </h2>
            <div className="flex w-full flex-col gap-3">
              {tasks.length === 0 && (
                <p className="text-brand-text-gray text-sm">Sem tarefas no momento</p>
              )}
              {tasks.map(
                task => task?.time === "afternoon" && <TaskItem key={task?.id} task={task} />,
              )}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="border-brand-text-gray/20 text-brand-text-gray flex items-center gap-1 border-b-2 pb-2 text-sm font-semibold">
              {" "}
              <FiMoon size={20} /> Noite
            </h2>
            <div className="flex w-full flex-col gap-3">
              {tasks.length === 0 && (
                <p className="text-brand-text-gray text-sm">Sem tarefas no momento</p>
              )}
              {tasks.map(task => task?.time === "night" && <TaskItem key={task?.id} task={task} />)}
            </div>
          </div>
        </ContainerTask>
      </div>
    </div>
  );
}

export default PageTasks;
