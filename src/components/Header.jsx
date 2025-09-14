import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";

import AddTaskDailog from "./addTaskDailog";
import Button from "./Button";

function Header() {
  const [inProp, setInProp] = useState(false);

  function onClose() {
    setInProp(false);
  }

  return (
    <div className="flex w-full flex-col justify-between gap-3 pt-16 lg:flex-row">
      <div className="flex flex-col gap-1">
        <h3 className="text-xs font-semibold text-[#00ADB5]">Minhas Tarefas</h3>
        <h2 className="text-xl font-semibold text-[#35383E]">Minhas Tarefas</h2>
      </div>

      <div className="flex items-end gap-2">
        <Button color="secondary">
          Limpar tarefas <FaRegTrashCan size={16} />
        </Button>

        <Button onClick={() => setInProp(!inProp)}>
          Criar Tarefa
          <IoMdAdd size={16} />
        </Button>
        <AddTaskDailog inProp={inProp} onClose={onClose} />
      </div>
    </div>
  );
}

export default Header;
