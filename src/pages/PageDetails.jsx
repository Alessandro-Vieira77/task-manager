import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import ContainerTask from "../components/ContainerTask";
import Input from "../components/Input";
import Select from "../components/Select";
import Sidebar from "../components/Sidebar";
import useDeleteTask from "../hooks/use-delete-task";
import useGetTasks from "../hooks/use-get-tasks";
import useUpdateTask from "../hooks/use-update-task";

function PageDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: task } = useGetTasks(id);
  const { mutate: deleteTask, isPending } = useDeleteTask();
  const { mutate: updateTask, isPending: isUpdating } = useUpdateTask(id);

  const {
    register,
    handleSubmit,
    formState: { errors: formErros },
  } = useForm();

  const handleUpdateTask = data => {
    updateTask(data, {
      onSuccess: () => {
        toast.success("Tarefa atualizada com sucesso");
      },
    });
  };

  function deleteTaskHandler() {
    deleteTask(id, {
      onSuccess: () => {
        navigate("/tasks");
      },
    });
  }

  if (!task) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center gap-2">
            <AiOutlineLoading3Quarters className="animate-spin" size={24} />
            <h1 className="text-2xl font-bold">Carregando...</h1>
          </div>
          <p className="text-xs text-[#818181]">Aguarde, estamos carregando os dados da tarefa</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#818181]/20">
      <Sidebar />
      <div className="flex w-full flex-col px-8">
        <div className="flex w-full flex-col gap-6 pt-16">
          {/* header */}
          <div className="flex flex-col gap-3">
            <Link to="/tasks">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#00ADb5]">
                <FaArrowLeft size={20} color="#FFF" />
              </div>
            </Link>
            <p className="flex items-center text-xs text-[#818181]">
              Minhas tarefas
              <MdKeyboardArrowRight size={20} />
              <span className="text-xs font-semibold text-[#00ADb5]">{task?.title}</span>
            </p>
            <div className="flex flex-col justify-between gap-2 lg:flex-row">
              <h1 className="text-xl font-semibold">{task?.title} </h1>
              <Button
                color="danger"
                className="flex items-center gap-1"
                onClick={deleteTaskHandler}
                disabled={isPending}
              >
                {isPending ? (
                  <p className="flex cursor-no-drop items-center gap-1">
                    <AiOutlineLoading3Quarters className="animate-spin" size={16} />
                    Deletando...
                  </p>
                ) : (
                  <p className="flex items-center gap-1">
                    <FaRegTrashCan size={16} />
                    Deletar tarefa
                  </p>
                )}
              </Button>
            </div>
          </div>
          {/* task */}
          <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit(handleUpdateTask)}>
            <ContainerTask>
              <Input
                defaultValue={task?.title}
                type="text"
                title="Título"
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
                error={formErros?.title}
              />
              <Select
                defaultValue={task?.time}
                title="Hórario"
                {...register("time", {
                  validate: value => {
                    if (value === "selected") {
                      return "Campo obrigatório";
                    }
                  },
                })}
                error={formErros?.time}
              />
              <Input
                defaultValue={task?.description}
                type="textarea"
                title="Descrição"
                {...register("description", {
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
                error={formErros?.description}
              />
            </ContainerTask>
            <div className="min-w-[70px] self-end">
              <Button className="w-full" size="large" type="submit">
                {isUpdating ? (
                  <p className="flex items-center gap-2">
                    <AiOutlineLoading3Quarters className="animate-spin" size={16} /> salvando...
                  </p>
                ) : (
                  "Salvar"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PageDetails;
