import { Equipamento } from "@/types/equipamento";

export const equipamentos: Equipamento[] = [
  {
    id: 1,
    nome: "Monitor Dell UltraSharp 27",
    descricao:
      "Monitor de alta resolução com cores precisas para design gráfico.",
    observacoes: "Necessita de calibração mensal.",
    origem: "Comprado",
    numSerie: "SN123456789",
    createdAt: new Date("2022-01-15T10:30:00Z"),
    updateAt: new Date("2023-10-20T14:45:00Z"),
  },
  {
    id: 2,
    nome: "Notebook Lenovo ThinkPad X1 Carbon",
    descricao:
      "Notebook empresarial ultrafino com desempenho de alta qualidade.",
    observacoes: "Teclado com leve desgaste, mas totalmente funcional.",
    origem: "Alugado",
    numSerie: "SN987654321",
    createdAt: new Date("2021-06-12T08:00:00Z"),
    updateAt: new Date("2024-02-10T16:20:00Z"),
  },
  {
    id: 3,
    nome: "Impressora HP LaserJet Pro M404",
    descricao:
      "Impressora a laser monocromática com alta velocidade de impressão.",
    observacoes: "Reservatório de toner quase vazio.",
    origem: "Doado",
    numSerie: "SN192837465",
    createdAt: new Date("2020-09-05T11:15:00Z"),
    updateAt: new Date("2024-11-22T09:30:00Z"),
  },
  {
    id: 4,
    nome: "Switch Cisco Catalyst 2960",
    descricao: "Switch gerenciável de 24 portas para redes corporativas.",
    observacoes: "Configurado para VLANs internas.",
    origem: "Comprado",
    numSerie: "SN564738291",
    createdAt: new Date("2019-03-10T15:00:00Z"),
    updateAt: new Date("2024-08-01T10:00:00Z"),
  },
  {
    id: 5,
    nome: "Projetor Epson PowerLite X39",
    descricao:
      "Projetor de alta luminosidade para apresentações e salas de aula.",
    observacoes: "Lâmpada próxima do limite de vida útil.",
    origem: "Locado",
    numSerie: "SN483920174",
    createdAt: new Date("2023-05-20T13:30:00Z"),
    updateAt: new Date("2024-10-15T12:45:00Z"),
  },
];
