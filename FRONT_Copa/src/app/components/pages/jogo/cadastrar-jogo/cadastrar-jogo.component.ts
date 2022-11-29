import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Jogo } from "src/app/models/jogo.model";
import { Selecao } from "src/app/models/selecao.model";

@Component({
  selector: "app-cadastrar-jogo",
  templateUrl: "./cadastrar-jogo.component.html",
  styleUrls: ["./cadastrar-jogo.component.css"],
})
export class CadastrarJogoComponent implements OnInit {
  selecaoAId!:number;
  selecaoBId!:number;
  criadoEm!:String;
  selecoes!:Selecao[];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Selecao[]>("https://localhost:5001/api/selecao/listar")
    .subscribe({
      next: (selecoes) =>{
        this.selecoes = selecoes;
      }
    });
  }
  cadastrar(): void{
    let jogo: Jogo ={
      selecaoAId : this.selecaoAId, 
      selecaoBId : this.selecaoBId,
    };
    console.log(jogo)
    this.http.post<Jogo>("https://localhost:5001/api/jogo/cadastrar", jogo).subscribe({
      next:(jogo) =>{
        console.log("Jogo Cadastrado!");
      },
    });
  }
}

