import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Jogo } from "src/app/models/jogo.model";
import { Selecao } from "src/app/models/selecao.model";

@Component({
  selector: "app-palpitar-jogo",
  templateUrl: "./palpitar-jogo.component.html",
  styleUrls: ["./palpitar-jogo.component.css"],
})
export class PalpitarJogoComponent implements OnInit {
  selecaoA!:Selecao;
  selecaoB!:Selecao;
  jogo!:Jogo;
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.route.params.subscribe((params) => {
    //   let { id } = params;
    //   if(id !== undefined){
    //     this.http.get<Jogo>
    //       (`https://localhost:5001/api/jogo/buscar/${id}`)
    //       .subscribe({
    //         next: (jogo) => {
    //           this.selecaoA.nome = jogo.selecaoA?.nome;
    //           this.selecaoB = jogo.selecaoB;
    //         },
    //       });
    //   }
    // });
  }
  // palpitar(): void{
  //   let jogo: Jogo = {
  //     jogoId : this.jogo,
  //     selecaoAId : this.selecaoA.id,
  //     selecaoBId : this.selecaoA.id,
  //   };
  //   //Requisição
  //   this.http.patch<Jogo>("https://localhost:5001/api/palpitar/alterar", jogo)
  //   .subscribe({
  //     next: (jogo) => {
  //       this.router.navigate(["pages/jogo/listar"]);
  //     },
  //   });
  // }
}
