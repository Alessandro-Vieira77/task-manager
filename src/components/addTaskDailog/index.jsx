import "./style.css";

import { useRef } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import Button from "../Button";
import Input from "../Input";
import Select from "../Select";

function AddTaskDailog({ inProp, onClose }) {
  const nodeRef = useRef(null);

  return (
    <CSSTransition nodeRef={nodeRef} in={inProp} timeout={500} classNames="my-node" unmountOnExit>
      <div>
        {createPortal(
          <div
            ref={nodeRef}
            className="fixed top-0 bottom-0 left-0 z-50 flex min-h-screen w-full items-center justify-center backdrop-blur"
          >
            <form
              action=""
              className="flex w-full max-w-[336px] flex-col gap-4 rounded-2xl bg-white p-6 shadow"
            >
              <div className="flex w-full flex-col items-center justify-center gap-1">
                <h2 className="text-xl font-semibold text-[#35383E]">Nova Tarefa</h2>
                <p className="text-sm text-[#818181]">Insira as informações abaixo</p>
              </div>

              <Input title="Título" type="text" placeholder="Título da tarefa" />
              <Select title="Hórario" />
              <Input title="Descrição" type="text" placeholder="Descrição da tarefa" />

              <div className="flex w-full gap-3">
                <Button
                  type="button"
                  title="Cancelar"
                  color="third"
                  size="large"
                  onClick={() => {
                    onClose();
                  }}
                />
                <Button type="submit" title="Salvar" color="primary" size="large" />
              </div>
            </form>
          </div>,
          document.body,
        )}
      </div>
    </CSSTransition>
  );
}

export default AddTaskDailog;
