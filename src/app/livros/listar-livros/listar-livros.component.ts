import { Component, OnInit } from '@angular/core';
import { EntityFilter, remult } from 'remult';
import { Livros } from 'src/Shared/Livros';

@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.css']
})
export class ListarLivrosComponent implements OnInit {

  termoPesquisa: string = '';

  constructor() { }

  livros: Livros[] = []
  livroRepo = remult.repo(Livros)
  ngOnInit(){
    this.obterLivros();
  }

  obterLivros() {
    this.livroRepo.find().then((livros) => {
      this.livros = livros;
    }).catch((error) => {
      console.error('Erro ao obter os livros:', error);
    });
  }

  pesquisarLivros() {
    if (this.termoPesquisa) {
      const filter: EntityFilter<Livros> = {
        $or: [
          { BD_NOME: { $contains: this.termoPesquisa } },
          { BD_AUTORA: { $contains: this.termoPesquisa } },
          { BD_ANOLANCAMENTO: { $contains: this.termoPesquisa } },
          { BD_EDITORA: { $contains: this.termoPesquisa } },
          { BD_MATERIA: { $contains: this.termoPesquisa } },
          { BD_TROCAOUDOACAO: { $contains: this.termoPesquisa } },
        ]
      };
      this.livroRepo.find({ where: filter }).then((livros) => {
        this.livros = livros;
      }).catch((error) => {
        console.error('Erro ao pesquisar os livros:', error);
      });
    } else {
      this.obterLivros();
    }
  }

  exibirAviso(mensagem: string) {
    alert("Sua solicitação foi registrada!"); // Exibe um aviso usando o método alert do JavaScript
    // Ou utilize um componente de aviso personalizado
  }

}
