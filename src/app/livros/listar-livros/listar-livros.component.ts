import { Component, OnInit } from '@angular/core';
import { remult } from 'remult';
import { Livros } from 'src/Shared/Livros';

@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.css']
})
export class ListarLivrosComponent implements OnInit {

  constructor() { }

  livros: Livros[] = []
  livroRepo = remult.repo(Livros)
  ngOnInit(){
    const teste = this.livroRepo.find().then((livros)=> (this.livros = livros))
    console.log(teste)
  }

}
