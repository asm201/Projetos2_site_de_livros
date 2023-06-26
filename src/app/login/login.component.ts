import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { remult } from 'remult';
import { Usuario } from 'src/Shared/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email_login = ''
  senha_login = ''

  usuarioRepo = remult.repo(Usuario)

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logar(){
    try {
      const teste = this.usuarioRepo.find({where:{BD_EMAIL: this.email_login, BD_SENHA: this.senha_login}}).then((usuario)=> (usuario)).then((resposta)=>{if(resposta.length == 1){
        alert("Login Aceito !")
        this.router.navigate(['./usuario'],{queryParams:{email:this.email_login}})
      }else{
        alert("Login Icorreto")
        this.email_login = ''
        this.senha_login = ''
      }})
    } catch (error: any) {
      alert(error.mensage)
    }
  }

}
