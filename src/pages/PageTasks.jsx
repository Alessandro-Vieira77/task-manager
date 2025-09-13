import { FiMoon } from "react-icons/fi";
import { LuSun } from "react-icons/lu";
import { LuCloudSun } from "react-icons/lu";

import ContainerTask from "../components/ContainerTask";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
function PageTasks() {
  return (
    <div className="flex min-h-screen bg-[#818181]/20">
      <Sidebar />
      <div className="flex w-full flex-col gap-6 px-8">
        <Header />
        <ContainerTask>
          <div>
            <h2 className="flex items-center gap-1 border-b-2 border-[#818181]/20 pb-2 text-sm font-semibold text-[#818181]">
              {" "}
              <LuSun size={20} /> Manhã
            </h2>
          </div>

          <div>
            <h2 className="flex items-center gap-1 border-b-2 border-[#818181]/20 pb-2 text-sm font-semibold text-[#818181]">
              {" "}
              <LuCloudSun size={20} /> Tarde
            </h2>
          </div>

          <div>
            <h2 className="flex items-center gap-1 border-b-2 border-[#818181]/20 pb-2 text-sm font-semibold text-[#818181]">
              {" "}
              <FiMoon size={20} /> Noite
            </h2>
          </div>
        </ContainerTask>
      </div>
    </div>
  );
}

export default PageTasks;
