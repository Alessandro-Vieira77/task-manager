import "./style.css";

import { useRef } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { CSSTransition } from "react-transition-group";

import useUpdate from "../../hooks/use-add-task";
import Button from "../Button";
import Input from "../Input";
import Select from "../Select";

function AddTaskDailog({ inProp, onClose }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors: formErrors },
  } = useForm({
    defaultValues: {
      title: "",
      time: "selected",
      description: "",
    },
  });

  const { mutate: addTasks, isPending } = useUpdate();

  const nodeRef = useRef(null);

  const onSubmit = data => {
    addTasks(data, {
      onSuccess: () => {
        reset();
        onClose();
      },
    });
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
              className="bg-brand-white mx-3 flex w-full max-w-80 flex-col gap-4 rounded-2xl p-6 shadow"
            >
              <div className="flex w-full flex-col items-center justify-center gap-1">
                <h2 className="text-brand-dark-Blue text-xl font-semibold">Nova Tarefa</h2>
                <p className="text-brand-text-gray text-sm">Insira as informações abaixo</p>
              </div>

              <Input
                disabled={isPending}
                error={formErrors?.title}
                title="Título"
                type="text"
                placeholder="Título da tarefa"
                {...register("title", {
                  validate: value => {
                    if (!value.trim()) {
                      return "proíbido espaços em branco";
                    }
                  },
                  required: {
                    value: true,
                    message: "Campo obrigatório",
                  },
                  minLength: {
                    value: 3,
                    message: "Mínimo 3 caracteres",
                  },
                })}
              />
              <Select
                disabled={isPending}
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
                disabled={isPending}
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
                  color="third"
                  size="large"
                  onClick={() => {
                    onClose();
                  }}
                >
                  Cancelar
                </Button>
                <Button type="submit" color="primary" size="large" disabled={isPending}>
                  {isPending ? (
                    <p className="flex cursor-no-drop items-center gap-1">
                      <AiOutlineLoading3Quarters className="animate-spin" />
                      Salvando...
                    </p>
                  ) : (
                    "Salvar"
                  )}
                </Button>
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
