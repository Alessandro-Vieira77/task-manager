import "./style.css";

import { useRef } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import Input from "../Input";

function AddTaskDailog({ inProp }) {
  const nodeRef = useRef(null);

  return (
    <CSSTransition nodeRef={nodeRef} in={inProp} timeout={500} classNames="my-node" unmountOnExit>
      <div>
        {createPortal(
          <div
            ref={nodeRef}
            className="fixed top-0 bottom-0 left-0 z-50 flex min-h-screen w-full items-center justify-center backdrop-blur"
          >
            <form action="" className="w-full max-w-[336px] rounded-2xl bg-white p-6 shadow">
              <div className="flex w-full flex-col gap-4">
                <Input title="Título" type="text" placeholder="Título da tarefa" />
                <Input title="Descrição" type="text" placeholder="Descrição da tarefa" />
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
