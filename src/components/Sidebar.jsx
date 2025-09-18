import { FaTasks } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { tv } from "tailwind-variants";

function Sidebar() {
  const link = tv({
    base: "flex items-center gap-2 rounded-lg px-6 py-3",
    variants: {
      active: {
        true: "bg-brand-primary/20 font-semibold text-brand-primary",
        false: "text-brand-dark-Blue",
      },
    },
  });

  return (
    <div className="bg-brand-white flex min-h-screen w-72 min-w-[272px] flex-col">
      <div className="m-7 flex flex-col gap-4">
        <h1 className="text-brand-primary text-xl font-semibold">Task Manager</h1>
        <p className="text-xs">
          Um simples{" "}
          <span className="text-brand-primary text-xs font-semibold">organizador de tarefas</span>
        </p>
      </div>

      <nav className="px-2">
        <ul className="flex flex-col gap-2">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return link({ active: isActive });
            }}
          >
            <MdHome size={24} />
            Início
          </NavLink>
          <NavLink
            to="/tasks"
            className={({ isActive }) => {
              return link({ active: isActive });
            }}
          >
            <FaTasks to="/tasks" size={24} />
            Minhas tarefas
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
