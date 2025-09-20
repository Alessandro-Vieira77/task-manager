import { AiOutlineClose } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { tv } from "tailwind-variants";

function Sidebar({ open, setOpen }) {
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
      <button
        className="bg-brand-primary m-3 flex w-10 cursor-pointer items-center justify-center self-end rounded-sm p-1 lg:hidden"
        onClick={() => setOpen(!open)}
      >
        <AiOutlineClose size={30} color="var(--color-brand-white)" />
      </button>
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
