import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { remult } from 'remult';
import { Livros } from 'src/Shared/Livros';
import { Usuario } from 'src/Shared/Usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private router: Router) { }

  livros: Livros[] = []
  usuarios: Usuario[] = []
  //checklivros: Livros[] = []
  livroRepo = remult.repo(Livros)
  usaurioRepo = remult.repo(Usuario)

  busca = new URLSearchParams(window.location.href)
  email: any = this.busca.get('https://ifbooks-production.up.railway.app/usuario?email') //mudar aqui para https://site-livros-production.up.railway.app/usuario?email

  ngOnInit(){
    this.usaurioRepo.find({where:{BD_EMAIL: this.email}}).then((usuario)=> (this.usuarios = usuario))
    const teste = this.livroRepo.find({where:{BD_EMAIL_USUARIO: this.email}}).then((livros)=> (this.livros = livros))
    /*const array = this.livroRepo.find().then((checklivros)=> (this.checklivros = checklivros)).then((resposta)=>{if(resposta.length == 3){
      this.router.navigate(['./sucesso'])
    }else{
      console.log('fracasso')
    }})
    console.log(array)*/
  }


  async deletar(livro: Livros){
    try {
      if(confirm("Certeza que deseja deletar este Livro ?")) {
        await this.livroRepo.delete(livro)
        this.livros = this.livros.filter((l) => l !== livro)
      }
    } catch (error: any) {
      alert(error.message)
    }
  }

  cadastraLivro(){
    this. router.navigate(
      ["/cadastra_livro"],
      {queryParamsHandling:'preserve'}
      );
  }
}
