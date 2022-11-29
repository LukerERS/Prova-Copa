import { Selecao } from "./selecao.model";

export interface Jogo {
  id?: number;
  jogoId?:number;
  selecaoA?: Selecao;
  selecaoAId?:number
  selecaoB?: Selecao;
  selecaoBId?:number;
  criadoEm?: string;
  placar?:String;
}
