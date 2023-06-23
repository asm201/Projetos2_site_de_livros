import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {NgForm, NgModel} from '@angular/forms'
import { ConsultaCepService } from '../service/consulta-cep.service';
import { Usuario } from 'src/Shared/Usuario';
import { remult } from 'remult';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router, private consultaCepService: ConsultaCepService) { }

  FE_novoNome = ''
  FE_novoNascimento = null
  FE_novoCelular = ''
  FE_novoEmail = ''
  FE_novoCep = ''
  FE_novoEndereco = ''
  FE_novoNumero = ''
  FE_novoComplemento = ''
  FE_novoBairro  = ''
  FE_novoCidade = ''
  FE_novoEstado = ''
  FE_novoSenha = ''

  usuarios: Usuario[] = []
  usuarioRepo = remult.repo(Usuario)

  ngOnInit(): void {
  }



  async cadastrar(form: NgForm){
    if(form.valid){
      try {
        const novoUsuario = this.usuarioRepo.insert({

        })
      } catch (error:any) {
        alert(error.mensage)
      }
      this.router.navigate(['./sucesso'])
    }else{
      alert('formulario invalido!')
    }
  }

  consultaCEP(ev: any, f: NgForm) {
    const cep = ev.target.value;
    if (cep !== "") {
      this.consultaCepService.getConsultaCep(cep).subscribe((resultado) => {
        console.log(resultado);
        this.populandoEndereco(resultado, f);
      });
    }
  }

  populandoEndereco(dados: any, f: NgForm){
    f.form.patchValue({
      endereco: dados.logradouro,
      complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf
    })
  }

}


