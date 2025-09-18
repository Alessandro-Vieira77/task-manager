import ContainerTask from "../components/ContainerTask";
import ContainerCard from "../components/ContarinerCard";
import Header from "../components/Header";
import Menu from "../components/menu";
import Sidebar from "../components/Sidebar";
import TaskItem from "../components/TaskItem";
import WaterItem from "../components/WaterItem";
import useGetTasks from "../hooks/use-get-tasks";

function Home() {
  const { data: tasks } = useGetTasks("taskId", "/tasks");
  const { data: waterTasks } = useGetTasks("waterTaskId", "/water");

  const waterTotal = waterTasks?.reduce((acc, task) => {
    if (task?.status === "done") {
      return acc + task?.value;
    }
    return acc;
  }, 0);

  const percentageWater = waterTasks?.reduce((acc, task) => {
    if (task?.status === "done") {
      return acc + 20;
    }
    return acc;
  }, 0);

  const totalTasks = tasks?.length;
  const totalDoneTasks = tasks?.filter(task => task.status === "done").length;
  const totalInProgressTasks = tasks?.filter(task => task.status === "in_progress").length;

  return (
    <div className="flex min-h-screen w-full bg-[#818181]/20">
      <div className="hidden lg:flex">
        <Sidebar />
      </div>

      <div className="flex w-full flex-col gap-6 px-4 pt-8 sm:px-8 lg:pt-16">
        <Menu />
        <Header />

        <ContainerCard
          percentageWater={percentageWater}
          totalTasks={totalTasks}
          totalDoneTasks={totalDoneTasks}
          totalInProgressTasks={totalInProgressTasks}
        />

        <div className="mb-6 flex w-full flex-col gap-8 lg:flex-row">
          <ContainerTask>
            <div>
              <h2 className="text-xl font-semibold text-[#35383E]">Tarefas</h2>
              <p className="text-sm text-[#818181]">Resumo das tarefas disponíveis</p>
            </div>
            {tasks?.map(task => (
              <TaskItem key={task.id} task={task} />
            ))}
          </ContainerTask>
          <div className="flex w-full flex-col gap-4 rounded-lg bg-white p-6 shadow lg:max-w-[420px]">
            <h2 className="text-xl font-semibold text-[#35383E]">Água</h2>
            <p className="text-sm text-[#818181]">Beba sua meta diária de água</p>
            <div className="flex justify-between">
              <div className="flex w-full flex-col gap-4">
                {waterTasks?.map(task => (
                  <WaterItem key={task.id} task={task} />
                ))}
              </div>
              <div className="flex items-center justify-end self-end">
                <p className="text-xl font-semibold text-[#00ADB5]">
                  {waterTotal === 0.5 ? `500ml` : `${waterTotal}L`}
                </p>
                <span className="text-sm text-[#818181]">/7.5L</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
