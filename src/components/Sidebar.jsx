import { FaTasks } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="flex min-h-screen w-72 flex-col bg-white">
      <div className="m-7 flex flex-col gap-4">
        <h1 className="text-xl font-semibold text-[#00ADB5]">Task Manager</h1>
        <p className="text-xs">
          Um simples{" "}
          <span className="text-xs font-semibold text-[#00ADB5]">organizador de tarefas</span>
        </p>
      </div>

      <nav className="px-2">
        <ul className="flex flex-col gap-2">
          <Link to="/" className="flex items-center gap-2 rounded-lg px-6 py-3">
            <MdHome size={24} />
            Início
          </Link>
          <Link
            to="/tasks"
            className="flex items-center gap-2 rounded-lg bg-[#00ADB5]/20 px-6 py-3 font-semibold text-[#00ADB5]"
          >
            <FaTasks size={24} />
            Minhas tarefas
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
