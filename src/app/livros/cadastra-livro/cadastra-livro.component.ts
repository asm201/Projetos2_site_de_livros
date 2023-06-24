import { Component, OnInit } from '@angular/core';
import {NgForm, NgModel} from '@angular/forms'
import { Router } from '@angular/router';
import { remult } from 'remult';
import { Livros } from 'src/Shared/Livros';

@Component({
  selector: 'app-cadastra-livro',
  templateUrl: './cadastra-livro.component.html',
  styleUrls: ['./cadastra-livro.component.css']
})
export class CadastraLivroComponent implements OnInit {

  private base64textString:string="";

  constructor(private router:Router) { }

  FE_novoNomeLivro = ''
  FE_novoCapa = ''
  FE_novoEditora = ''
  FE_novoAnoLancamento = ''
  FE_novoAutor = ''
  FE_novoTrocaOuDoacao = ''
  FE_novoMateria = ''
  FE_novoEmailUsuario  = 'emailteste@teste.com'

  livros: Livros[] = []
  livroRepo = remult.repo(Livros)

  ngOnInit(): void {
  }

  /*cadastrar(form: NgForm){
    if(form.valid){    
      if(this.trocaOuDoacao == 'doacao'){
        this.FE_novoTroca = false
        this.FE_novoDoacao = true
      } else if(this.trocaOuDoacao == 'troca'){
        this.FE_novoTroca = true
        this.FE_novoDoacao = false
      }
      console.log(`nome do livro: ${this.FE_novoNomeLivro}`)
      console.log(`nome do autor: ${this.FE_novoAutor}`)
      console.log(`nome do editora: ${this.FE_novoEditora}`)
      console.log(`ano lançamento: ${this.FE_novoAnoLancamento}`)
      console.log(`troca: ${this.FE_novoTroca}`)
      console.log(`doação: ${this.FE_novoDoacao}`)
      console.log(`nome da materia ${this.FE_novoMateria}`)
      console.log(`capa: ${this.FE_novoCapa}`)
    }else{
      alert('formulario invalido!')
    }
  }*/

  async cadastrar(form: NgForm){
    if(form.valid){
      try {
        console.log(this.FE_novoCapa)
        console.log(this.base64textString)

        const novoLivro = await this.livroRepo.insert({
          BD_NOME: this.FE_novoNomeLivro,
          BD_CAPA: this.FE_novoCapa,
          BD_EDITORA: this.FE_novoEditora,
          BD_ANOLANCAMENTO: this.FE_novoAnoLancamento,
          BD_AUTORA: this.FE_novoAutor,
          BD_TROCAOUDOACAO: this.FE_novoTrocaOuDoacao,
          BD_MATERIA: this.FE_novoMateria,
          BD_EMAIL_USUARIO: this.FE_novoEmailUsuario
        })
        this.livros.push(novoLivro)
      } catch (error:any) {
        alert(error.mensage)
      }
      this.router.navigate(['./sucesso_livro'])
    }else{
      alert('formulario invalido!')
    }
  }

  handleFileSelect(evt:any){
    var files = evt.target.files;
    var file = files[0];
  
  if (files && file) {
      var reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
  }
}

_handleReaderLoaded(readerEvt:any) {
   var binaryString = readerEvt.target.result;
          this.base64textString= btoa(binaryString);
          console.log(btoa(binaryString));
          this.FE_novoCapa = this.base64textString
  }
}
