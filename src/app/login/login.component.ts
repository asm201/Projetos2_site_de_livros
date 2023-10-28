import { AuthService } from 'src/app/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { remult } from 'remult';
import { Usuario } from 'src/Shared/Usuario';
import { SigninCredencials } from '../Interfaces/auth.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email_login = ''
  senha_login = ''

  user: SigninCredencials = {
    password:'',
    email:''
  }

  usuarioRepo = remult.repo(Usuario)

  constructor(private router: Router, private auth: AuthService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  logar(){
    try {
      const teste = this.usuarioRepo.find({where:{BD_EMAIL: this.email_login, BD_SENHA: this.senha_login}}).then((usuario)=> (usuario)).then((resposta)=>{if(resposta.length == 1){
        alert("Login Aceito !")
        this.user.password = this.senha_login
        this.user.email = this.email_login
        this.auth.signIn(this.user).subscribe({
          next: () => this.router.navigate(['./usuario'],{queryParams:{email:this.email_login}}),
          error: (error) => this.snackbar.open(error.message)
        })
      }else{
        alert("Login Incorreto")
        this.email_login = ''
        this.senha_login = ''
      }})
    } catch (error: any) {
      alert(error.mensage)
    }
  }

}
