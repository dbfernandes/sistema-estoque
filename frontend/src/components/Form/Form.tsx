import { useForm } from "react-hook-form";
import {
  CreateEquipamentoDto,
  Equipamento,
  UpdateEquipamentoDto,
} from "@/types/equipamento";

interface FormProps {
  equipamento?: Equipamento;
  onSubmit: (data: CreateEquipamentoDto | UpdateEquipamentoDto) => void;
}

const Form = ({ equipamento, onSubmit }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateEquipamentoDto>({
    defaultValues: {
      nome: equipamento?.nome,
      descricao: equipamento?.descricao,
      observacoes: equipamento?.observacoes,
      origem: equipamento?.origem,
      numSerie: equipamento?.numSerie,
      statusEquip: equipamento?.statusEquip,
    },
  });

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
            {...register("numSerie", { required: true })}
          />
          {errors.numSerie && (
            <span className="text-danger">Esse campo é obrigatório</span>
          )}

          <button type="submit" className="btn btn-primary mt-2 w-100">
            Salvar
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
