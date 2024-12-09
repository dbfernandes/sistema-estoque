import { useForm, SubmitHandler } from "react-hook-form";
import { useAdicionaEquipamento } from "@/hooks/useAdicionaEquipamento";
import { CreateEquipamentoDto, Equipamento } from "@/types/equipamento";

interface FormProps {
  equipamento?: Equipamento;
}

const Form = ({equipamento}: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateEquipamentoDto>({values: equipamento});

  const { mutate } = useAdicionaEquipamento();

  const onSubmit: SubmitHandler<CreateEquipamentoDto> = (data) => {
    console.log(data);
    mutate(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">
            Nome
          </label>
          <input
            type="text"
            className="form-control"
            id="nome"
            aria-describedby="nome"
            //value={equipamento?.nome}
            {...register("nome", { required: true })}
          />
          {errors.nome && (
            <span className="text-danger">Esse campo é obrigatório</span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="descricao" className="form-label">
            Descrição
          </label>
          <textarea
            className="form-control"
            id="descricao"
            rows={2}
            //value={equipamento?.descricao}
            {...register("descricao", { required: true })}
          ></textarea>
          {errors.descricao && (
            <span className="text-danger">Esse campo é obrigatório</span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="observacoes" className="form-label">
            Observações
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={1}
            //value={equipamento?.observacoes}
            {...register("observacoes", { required: true })}
          ></textarea>
          {errors.observacoes && (
            <span className="text-danger">Esse campo é obrigatório</span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="origem" className="form-label">
            Origem
          </label>
          <textarea
            className="form-control"
            id="origem"
            rows={1}
            //value={equipamento?.origem}
            {...register("origem", { required: true })}
          ></textarea>
          {errors.origem && (
            <span className="text-danger">Esse campo é obrigatório</span>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="numSerie" className="form-label">
            Status
          </label>

          <select
            className="form-select"
            //value={equipamento?.statusEquip}
            {...register("statusEquip", { required: true })}
          >
            <option value="Laboratorio">Laboratório</option>
            <option value="Reservado">Reservado</option>
            <option value="Manutencao">Manuntenção</option>
            <option value="Emprestado">Emprestado</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="numSerie" className="form-label">
            Número de série
          </label>
          <input
            type="text"
            className="form-control"
            id="numSerie"
            aria-describedby="numSerie"
            //value={equipamento?.numSerie}
            {...register("numSerie", { required: true })}
          />
          {errors.numSerie && (
            <span className="text-danger">Esse campo é obrigatório</span>
          )}

          <button type="submit" className="btn btn-primary mt-2 w-100">
            Criar
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
