import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dbNamesOf, EntityFilter, remult, SqlDatabase } from 'remult';
import { Observable, catchError, from, map, of, switchMap } from 'rxjs';
import { Livros } from 'src/Shared/Livros';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment';
import { ChannelService, ChatClientService, StreamI18nService } from 'stream-chat-angular';

@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.css']
})
export class ListarLivrosComponent implements OnInit {

  termoPesquisa: string = '';

  chatIsReady$!: Observable<boolean>
  constructor(
    private chatService: ChatClientService,
    private channelService: ChannelService,
    private streamI18nService: StreamI18nService,
    private auth: AuthService,
    private router: Router
  ) {}

  livros: Livros[] = []
  livroRepo = remult.repo(Livros)
  ngOnInit(){
    this.obterLivros();
    this.streamI18nService.setTranslation();
    this.chatIsReady$ = this.auth.getStreamToken().pipe(
      switchMap((streamToken) => this.chatService.init(
        environment.stream.key,
        this.auth.getCurrentUser().uid, 
        streamToken)),
      switchMap(() => this.channelService.init({
        type: 'messaging',
        members: { $in: [this.auth.getCurrentUser().uid] },
      })),
      map(() => true),
      catchError(() => of(false))
    )
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

  criarChat(nomeLivro: string, idUsuario: string) {
    alert(`${nomeLivro}`); // Exibe um aviso usando o método alert do JavaScript
    // Ou utilize um componente de aviso personalizado
    const name = `${nomeLivro}`
    const dasherizedName = name.replace(/\s+/g, '-').toLowerCase();
    const channel = this.chatService.chatClient.channel(
      'messaging',
      dasherizedName,
      {
        name:name,
        members: [this.auth.getCurrentUser().uid, idUsuario]
    });
    from(channel.create())
    this.router.navigate([`/chat`])
    
  }

}
