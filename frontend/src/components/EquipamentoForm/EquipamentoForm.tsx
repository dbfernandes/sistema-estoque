import { useForm } from "react-hook-form";
import {
  CreateEquipamentoDto,
  Equipamento,
  UpdateEquipamentoDto,
} from "@/types/equipamento";
import { joiResolver } from "@hookform/resolvers/joi";
import equipamentoSchema from "@/schemas/equipamento";
import Modal from "../Modal/Modal";

interface FormProps {
  equipamento?: Equipamento;
  titulo: string;
  onSubmit: (data: CreateEquipamentoDto | UpdateEquipamentoDto) => void;
}

const EquipamentoForm = ({ equipamento, titulo, onSubmit }: FormProps) => {
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
    resolver: joiResolver(equipamentoSchema),
  });

  return (
    <>
      <Modal titulo={titulo}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">
              Nome
            </label>
            <input
              type="text"
              className="form-control mb-1"
              id="nome"
              aria-describedby="nome"
              {...register("nome")}
            />
            {errors.nome && (
              <span className="text-danger">{errors.nome.message}</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="descricao" className="form-label">
              Descrição
            </label>
            <textarea
              className="form-control mb-1"
              id="descricao"
              rows={2}
              {...register("descricao")}
            ></textarea>
            {errors.descricao && (
              <span className="text-danger">{errors.descricao.message}</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="observacoes" className="form-label">
              Observações
            </label>
            <textarea
              className="form-control mb-1"
              id="exampleFormControlTextarea1"
              rows={1}
              {...register("observacoes")}
            ></textarea>
            {errors.observacoes && (
              <span className="text-danger">{errors.observacoes.message}</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="origem" className="form-label">
              Origem
            </label>
            <textarea
              className="form-control mb-1"
              id="origem"
              rows={1}
              {...register("origem")}
            ></textarea>
            {errors.origem && (
              <span className="text-danger">{errors.origem.message}</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="numSerie" className="form-label">
              Status
            </label>

            <select className="form-select mb-1" {...register("statusEquip")}>
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
              className="form-control mb-1"
              id="numSerie"
              aria-describedby="numSerie"
              {...register("numSerie")}
            />
            {errors.numSerie && (
              <span className="text-danger">{errors.numSerie.message}</span>
            )}

            <button type="submit" className="btn btn-primary mt-2 w-100">
              Salvar
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default EquipamentoForm;
