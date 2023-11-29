import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { remult, Fields } from 'remult';
import { Livros } from 'src/Shared/Livros';

@Component({
  selector: 'app-editar-livro',
  templateUrl: './editar-livro.component.html',
  styleUrls: ['./editar-livro.component.css']
})
export class EditarLivroComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }


  livros: Livros[] = []
  livroRepo = remult.repo(Livros)
  ngOnInit(): void {
    const id_livro: any = this.route.snapshot.paramMap.get('id')
    const aux = this.livroRepo.find({where:{id: id_livro}}).then((livros)=> (this.livros = livros))
  }

  async salvar(form: NgForm, livro: Livros){
    try {
      if(form.valid){
        await this.livroRepo.save(livro)
        this.router.navigate(['./sucesso_livro'])
      }else{
        alert('formulario invalido!')
      }
    } catch (error: any) {
      alert(error.message)
    }

  }

}
