using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API_Copa.Models
{
    public class Jogo
    {
        public Jogo()
        {
            CriadoEm = DateTime.Now;
            Placar = "0 x 0";
        }
        [Key()]
        public int Id { get; set; }
        public virtual Selecao SelecaoA { get; set; }
        [ForeignKey("Selecao")]
        public int SelecaoAId {get; set;}
        public virtual Selecao SelecaoB { get; set; }
        [ForeignKey("Selecao")]
        public int SelecaoBId {get; set;}
        public DateTime CriadoEm { get; set; }
        public string Placar{get; set;}
    }
}