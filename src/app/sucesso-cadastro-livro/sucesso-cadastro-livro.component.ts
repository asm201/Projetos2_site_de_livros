import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sucesso-cadastro-livro',
  templateUrl: './sucesso-cadastro-livro.component.html',
  styleUrls: ['./sucesso-cadastro-livro.component.css']
})
export class SucessoCadastroLivroComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  voltarPerfil(){
    this.router.navigate(['./usuario'],{queryParamsHandling:'preserve'})
  }

}
