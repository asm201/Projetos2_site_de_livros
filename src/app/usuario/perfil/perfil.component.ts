import { Component, OnInit } from '@angular/core';
import { remult } from 'remult';
import { Livros } from 'src/Shared/Livros';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor() { }

  livros: Livros[] = []
  livroRepo = remult.repo(Livros)
  ngOnInit(){
    const teste = this.livroRepo.find({where:{BD_EMAIL_USUARIO: 'emailteste@teste.com'}}).then((livros)=> (this.livros = livros))
  }

}
