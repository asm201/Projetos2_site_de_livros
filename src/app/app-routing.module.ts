import { SucessoCadastroComponent } from './sucesso-cadastro/sucesso-cadastro.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { LoginComponent } from './login/login.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { CadastraLivroComponent } from './livros/cadastra-livro/cadastra-livro.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'sucesso',
    component: SucessoCadastroComponent
  },
  {
    path: 'home',
    component: TelaInicialComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sobre_nos',
    component: SobreNosComponent
  },
  {
    path: 'cadastra_livro',
    component: CadastraLivroComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
