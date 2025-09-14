import "./style.css";

import { useRef } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { CSSTransition } from "react-transition-group";

import Button from "../Button";
import Input from "../Input";
import Select from "../Select";

function AddTaskDailog({ inProp, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm({
    defaultValues: {
      title: "",
      time: "selected",
      description: "",
    },
  });

  const nodeRef = useRef(null);

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <CSSTransition nodeRef={nodeRef} in={inProp} timeout={500} classNames="my-node" unmountOnExit>
      <div>
        {createPortal(
          <div
            ref={nodeRef}
            className="fixed top-0 bottom-0 left-0 z-50 flex min-h-screen w-full items-center justify-center backdrop-blur"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex w-full max-w-[336px] flex-col gap-4 rounded-2xl bg-white p-6 shadow"
            >
              <div className="flex w-full flex-col items-center justify-center gap-1">
                <h2 className="text-xl font-semibold text-[#35383E]">Nova Tarefa</h2>
                <p className="text-sm text-[#818181]">Insira as informações abaixo</p>
              </div>

              <Input
                error={formErrors?.title}
                title="Título"
                type="text"
                placeholder="Título da tarefa"
                {...register("title", {
                  required: {
                    value: true,
                    message: "Campo obrigatório",
                  },
                  minLength: {
                    value: 3,
                    message: "Mínimo 3 caracteres",
                  },
                  validate: value => {
                    if (!value.trim()) {
                      return "proíbido espaços em branco";
                    }
                  },
                })}
              />
              <Select
                error={formErrors?.time}
                title="Hórario"
                {...register("time", {
                  validate: value => {
                    if (value === "selected") {
                      return "Campo obrigatório";
                    }
                  },
                })}
              />
              <Input
                error={formErrors?.description}
                title="Descrição"
                type="text"
                placeholder="Descrição da tarefa"
                {...register("description", {
                  required: {
                    value: true,
                    message: "Campo obrigatório",
                  },
                  validate: value => {
                    if (!value.trim()) {
                      return "proíbido espaços em branco";
                    }
                  },
                  minLength: {
                    value: 3,
                    message: "Mínimo 3 caracteres",
                  },
                })}
              />

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
