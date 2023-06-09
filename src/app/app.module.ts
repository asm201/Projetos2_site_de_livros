import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SucessoCadastroComponent } from './sucesso-cadastro/sucesso-cadastro.component';
import { FormsModule } from '@angular/forms';
import { MensagemComponent } from './components/mensagem/mensagem.component';
import { MaiorIdadeDirective } from './directives/maior-idade.directive';
import { ValidandoCepDirective } from './directives/validando-cep.directive';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { LoginComponent } from './login/login.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { CadastraLivroComponent } from './livros/cadastra-livro/cadastra-livro.component';
import { ListarLivrosComponent } from './livros/listar-livros/listar-livros.component';
import { EditarLivroComponent } from './livros/editar-livro/editar-livro.component';
import { DeletarLivroComponent } from './livros/deletar-livro/deletar-livro.component';
import { PerfilComponent } from './usuario/perfil/perfil.component';
import { SucessoCadastroLivroComponent } from './sucesso-cadastro-livro/sucesso-cadastro-livro.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, CadastroComponent, SucessoCadastroComponent, MensagemComponent, MaiorIdadeDirective, ValidandoCepDirective, TelaInicialComponent, LoginComponent, SobreNosComponent, CadastraLivroComponent, ListarLivrosComponent, EditarLivroComponent, DeletarLivroComponent, PerfilComponent, SucessoCadastroLivroComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, CommonModule],
  exports:[HeaderComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
