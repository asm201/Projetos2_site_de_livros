import { Component, OnInit } from '@angular/core';
import {NgForm, NgModel} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastra-livro',
  templateUrl: './cadastra-livro.component.html',
  styleUrls: ['./cadastra-livro.component.css']
})
export class CadastraLivroComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  cadastrar(form: NgForm){
    if(form.valid){
      this.router.navigate(['./sucesso'])
    }else{
      alert('formulario invalido!')
    }
  }

}
